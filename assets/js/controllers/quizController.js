/** Quiz controller: setup → questions → results. Best scores persist via the Progress model. */
import { $, on } from "../core/dom.js";
import { ContentModel } from "../models/content.js";
import { Progress } from "../models/progress.js";
import { buildQuiz } from "../models/study.js";
import { quizSetup, quizQuestion, quizResults } from "../views/studyViews.js";
import { isTyping } from "./shared.js";

const MIN_QUESTIONS_FOR_BEST = 5;

/**
 * @param {HTMLElement} el
 * @param {{ scope: string, fixedScope?: boolean }} options
 * @returns {() => void} cleanup
 */
export function mountQuiz(el, { scope, fixedScope = false }) {
  const state = {
    scope: ContentModel.lecture(scope) ? scope : "all",
    phase: "setup",
    questions: [],
    index: 0,
    chosen: null,
    answers: [],
    isRetry: false,
    isBest: false
  };

  const lectureIds = () => (state.scope === "all" ? "all" : [state.scope]);
  const score = () => state.answers.filter((a) => a.chosen === a.q.answer).length;

  function render() {
    if (state.phase === "setup") {
      el.innerHTML = quizSetup({
        lectures: ContentModel.lectures(),
        scope: state.scope,
        fixedScope,
        best: Progress.quizBest(state.scope),
        poolSize: buildQuiz({ lectureIds: lectureIds(), count: 0 }).length
      });
      return;
    }
    if (state.phase === "question") {
      const q = state.questions[state.index];
      el.innerHTML = quizQuestion({ q, index: state.index, total: state.questions.length, score: score(), chosen: state.chosen, lectureShort: ContentModel.lecture(q.lectureId).short });
      return;
    }
    el.innerHTML = quizResults({ score: score(), total: state.answers.length, percent: percent(), isBest: state.isBest, wrong: state.answers.filter((a) => a.chosen !== a.q.answer) });
  }

  const percent = () => (state.answers.length ? Math.round((score() / state.answers.length) * 100) : 0);

  /** Transition to results. Only complete, non-retry quizzes count toward the best score. */
  function finish() {
    const complete = state.answers.length === state.questions.length;
    state.isBest = complete && !state.isRetry && state.answers.length >= MIN_QUESTIONS_FOR_BEST
      ? Progress.recordQuiz(state.scope, percent())
      : false;
    state.phase = "results";
    render();
  }

  function start(questions, isRetry = false) {
    Object.assign(state, { phase: "question", questions, index: 0, chosen: null, answers: [], isRetry, isBest: false });
    render();
    el.scrollIntoView({ block: "start" });
  }

  function answer(i) {
    if (state.phase !== "question" || state.chosen !== null) return;
    const q = state.questions[state.index];
    if (i < 0 || i >= q.options.length) return;
    state.chosen = i;
    state.answers.push({ q, chosen: i });
    render();
    $("[data-next]", el)?.focus();
  }

  function next() {
    if (state.chosen === null) return;
    if (state.index + 1 >= state.questions.length) { finish(); return; }
    state.index += 1;
    state.chosen = null;
    render();
  }

  const offs = [
    on(el, "change", "[data-scope]", (_, s) => { state.scope = /** @type {HTMLSelectElement} */ (s).value; render(); }),
    on(el, "click", "[data-start]", () => {
      const count = Number(/** @type {HTMLSelectElement} */ ($("[data-count]", el)).value);
      const includeMuscles = /** @type {HTMLInputElement} */ ($("[data-muscles]", el)).checked;
      start(buildQuiz({ lectureIds: lectureIds(), count, includeMuscles }));
    }),
    on(el, "click", "[data-opt]", (_, b) => answer(Number(b.dataset.opt))),
    on(el, "click", "[data-next]", next),
    on(el, "click", "[data-quit]", () => { if (state.answers.length) finish(); else { state.phase = "setup"; render(); } }),
    on(el, "click", "[data-retry-wrong]", () => start(state.answers.filter((a) => a.chosen !== a.q.answer).map((a) => a.q), true)),
    on(el, "click", "[data-new]", () => { state.phase = "setup"; render(); })
  ];

  const onKey = (event) => {
    if (isTyping(event) || state.phase !== "question") return;
    if (/^[1-4]$/.test(event.key)) answer(Number(event.key) - 1);
    else if (event.key === "Enter" && state.chosen !== null) { event.preventDefault(); next(); }
  };
  document.addEventListener("keydown", onKey);

  render();
  return () => {
    offs.forEach((off) => off());
    document.removeEventListener("keydown", onKey);
  };
}

/** Route controller for #/quiz/:scope? */
export const quizController = (outlet, { scope = "all" }) => {
  outlet.innerHTML = `<header class="page-head fade-in"><p class="eyebrow">Self-assessment</p><h1>Quiz</h1>
    <p>Mix all lectures or focus on one. Every answer comes with an explanation; missed questions can be retried at the end.</p></header><div data-quiz></div>`;
  return mountQuiz(/** @type {HTMLElement} */ (outlet.querySelector("[data-quiz]")), { scope });
};
