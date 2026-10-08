/** Small DOM helpers shared by views and controllers. */

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

/** Escape untrusted text (user input) before inserting it as HTML. @param {unknown} value */
export function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ESCAPES[ch]);
}

/** @param {string} selector @param {ParentNode} [root] @returns {HTMLElement|null} */
export const $ = (selector, root = document) => root.querySelector(selector);

/** @param {string} selector @param {ParentNode} [root] @returns {HTMLElement[]} */
export const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

/**
 * Delegated event listener. Returns an unsubscribe function so controllers can clean up.
 * @param {HTMLElement|Document} root
 * @param {string} type
 * @param {string} selector
 * @param {(event: Event, target: HTMLElement) => void} handler
 */
export function on(root, type, selector, handler) {
  const listener = (event) => {
    const target = event.target instanceof Element ? event.target.closest(selector) : null;
    if (target && root.contains(target)) handler(event, /** @type {HTMLElement} */ (target));
  };
  root.addEventListener(type, listener);
  return () => root.removeEventListener(type, listener);
}

/** Escape a string for use inside a RegExp. @param {string} text */
export const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
