/** Flashcards controller: owns deck/session state, persists learned status via the Progress model. */
import { $, on } from "../core/dom.js";
import { ContentModel } from "../models/content.js";
import { Progress } from "../models/progress.js";
import { buildDeck, shuffle } from "../models/study.js";
import { flashSetup, flashCardView, flashDone, flashEmpty } from "../views/studyViews.js";
import { isTyping } from "./shared.js";

/**
 * Mount a flashcard session.
 * @param {HTMLElement} el
 * @param {{ scope: string, fixedScope?: boolean }} options scope = "all" or a lecture id
 * @returns {() => void} cleanup
 */
export function mountFlashcards(el, { scope, fixedScope = false }) {
  const state = {
    scope: ContentModel.lecture(scope) ? scope : "all",
    includeMuscles: true,
    onlyUnlearned: false,
    fullDeck: [],
    deck: [],
    index: 0,
    flipped: false,
    again: new Set(),
    finished: false
  };

  el.innerHTML = flashSetup({ lectures: ContentModel.lectures(), scope: state.scope, fixedScope, includeMuscles: state.includeMuscles, onlyUnlearned: state.onlyUnlearned });
  const stage = $("[data-stage]", el);

  const lectureIds = () => (state.scope === "all" ? "all" : [state.scope]);
  const knownCount = () => state.fullDeck.filter((c) => Progress.cardStatus(c.id) === "known").length;

  function rebuild({ shuffled = false } = {}) {
    state.fullDeck = buildDeck({ lectureIds: lectureIds(), includeMuscles: state.includeMuscles });
    const pool = state.onlyUnlearned ? state.fullDeck.filter((c) => Progress.cardStatus(c.id) !== "known") : state.fullDeck;
    state.deck = shuffled ? shuffle(pool) : pool;
    state.index = 0;
    state.flipped = false;
    state.again = new Set();
    state.finished = false;
    render();
  }

  function render() {
    if (!state.deck.length) { stage.innerHTML = flashEmpty(); return; }
    if (state.finished) {
      stage.innerHTML = flashDone({ known: knownCount(), deckSize: state.fullDeck.length, again: state.again.size });
      return;
    }
    const card = state.deck[state.index];
    stage.innerHTML = flashCardView({
      card,
      index: state.index,
      total: state.deck.length,
      known: knownCount(),
      deckSize: state.fullDeck.length,
      lectureShort: ContentModel.lecture(card.lectureId).short
    });
  }

  function flip() {
    const node = $(".flash", stage);
    if (!node) return;
    state.flipped = !state.flipped;
    node.classList.toggle("flipped", state.flipped);
  }

  function go(delta) {
    const next = state.index + delta;
    if (next < 0) return;
    if (next >= state.deck.length) { state.finished = true; render(); return; }
    state.index = next;
    state.flipped = false;
    render();
  }

  /** @param {"known"|"again"} status */
  function grade(status) {
    const card = state.deck[state.index];
    if (!card) return;
    Progress.setCardStatus(card.id, status);
    if (status === "again") state.again.add(card.id); else state.again.delete(card.id);
    go(1);
  }

  const offs = [
    on(el, "change", "[data-scope]", (_, s) => { state.scope = /** @type {HTMLSelectElement} */ (s).value; rebuild(); }),
    on(el, "change", "[data-muscles]", (_, c) => { state.includeMuscles = /** @type {HTMLInputElement} */ (c).checked; rebuild(); }),
    on(el, "change", "[data-unlearned]", (_, c) => { state.onlyUnlearned = /** @type {HTMLInputElement} */ (c).checked; rebuild(); }),
    on(el, "click", "[data-shuffle]", () => rebuild({ shuffled: true })),
    on(el, "click", "[data-reset]", () => {
      if (window.confirm("Reset learned status for every card in this deck?")) {
        Progress.resetCards(state.fullDeck.map((c) => c.id));
        rebuild();
      }
    }),
    on(el, "click", "[data-flip]", flip),
    on(el, "click", "[data-prev]", () => go(-1)),
    on(el, "click", "[data-next]", () => go(1)),
    on(el, "click", "[data-again]", () => grade("again")),
    on(el, "click", "[data-good]", () => grade("known")),
    on(el, "click", "[data-restart]", () => rebuild()),
    on(el, "click", "[data-review-again]", () => {
      state.deck = state.deck.filter((c) => state.again.has(c.id));
      state.index = 0; state.flipped = false; state.again = new Set(); state.finished = false;
      render();
    })
  ];

  const onKey = (event) => {
    if (isTyping(event) || state.finished || !state.deck.length) return;
    const actions = { " ": flip, Enter: flip, ArrowRight: () => go(1), ArrowLeft: () => go(-1), 1: () => grade("again"), 2: () => grade("known") };
    const action = actions[event.key];
    if (!action) return;
    if (event.key === " " || event.key === "Enter") event.preventDefault();
    action();
  };
  document.addEventListener("keydown", onKey);

  rebuild();
  return () => {
    offs.forEach((off) => off());
    document.removeEventListener("keydown", onKey);
  };
}

/** Route controller for #/flashcards/:scope? */
export const flashcardController = (outlet, { scope = "all" }) => {
  outlet.innerHTML = `<header class="page-head fade-in"><p class="eyebrow">Active recall</p><h1>Flashcards</h1>
    <p>Hand-written cards from every lecture plus auto-generated origin / insertion / nerve / action cards for all muscles. Mark each card “Got it” or “Again”; learned cards are remembered in this browser.</p></header><div data-flash></div>`;
  return mountFlashcards(/** @type {HTMLElement} */ (outlet.querySelector("[data-flash]")), { scope });
};
