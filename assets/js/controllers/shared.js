/** Behaviours reused by several controllers. Each returns a cleanup function. */
import { $$, on } from "../core/dom.js";
import { modelIframe } from "../views/pagesView.js";

/**
 * Self-test mode for muscle cards: conceal a field (or all) until tapped.
 * @param {HTMLElement} root container holding the cards and the [data-hide] select / [data-recall] checkbox
 */
export function wireRecall(root) {
  const apply = (hide) => {
    $$(".mcard dd[data-field]", root).forEach((dd) => {
      dd.classList.toggle("concealed", hide === "all" || dd.dataset.field === hide);
    });
  };
  const offs = [
    on(root, "change", "[data-hide]", (_, el) => apply(/** @type {HTMLSelectElement} */ (el).value)),
    on(root, "change", "[data-recall]", (_, el) => apply(/** @type {HTMLInputElement} */ (el).checked ? "all" : "none")),
    on(root, "click", "dd.concealed", (_, el) => el.classList.remove("concealed"))
  ];
  return {
    reapply: () => {
      const select = root.querySelector("[data-hide]");
      if (select) apply(/** @type {HTMLSelectElement} */ (select).value);
    },
    cleanup: () => offs.forEach((off) => off())
  };
}

/**
 * Click-to-load Sketchfab embeds.
 * With `single`, only one viewer is live at a time: opening another restores the previous poster.
 * WebGL viewers are heavy, so this keeps long note pages smooth on phones.
 * @param {HTMLElement} root
 * @param {{ single?: boolean }} [opts]
 */
export function wire3d(root, { single = false } = {}) {
  let active = null; // { stage: HTMLElement, posterHtml: string }
  return on(root, "click", "[data-load3d]", (_, button) => {
    const stage = /** @type {HTMLElement} */ (button.parentElement);
    const title = button.closest(".m3d")?.querySelector("h3")?.textContent?.trim() || "3D model";
    if (single && active && active.stage !== stage) {
      active.stage.innerHTML = active.posterHtml;
      active.stage.closest(".m3d")?.classList.remove("is-live");
    }
    active = { stage, posterHtml: stage.innerHTML };
    stage.innerHTML = modelIframe(button.dataset.load3d, title);
    stage.closest(".m3d")?.classList.add("is-live");
  });
}

/** True when a key event comes from a form field (so shortcuts should not fire). @param {KeyboardEvent} e */
export const isTyping = (e) => e.target instanceof HTMLElement && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName);

/** Scroll smoothly unless the user prefers reduced motion. @param {Element} el */
export function scrollToEl(el) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
