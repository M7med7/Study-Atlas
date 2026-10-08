/**
 * Content markup used in the lecture data files.
 *   {n:text} nerve · {a:text} artery · {v:text} vein · {m:text} muscle · {b:text} bone/landmark
 *   **text** bold
 * Lecture content is authored in-repo (trusted) and may contain a little inline HTML
 * (links, <br>, <em>), so it is NOT escaped here. Never pass user input to `fmt`.
 */

const TAG_RE = /\{([navmb]):([^}]+)\}/g;
const BOLD_RE = /\*\*(.+?)\*\*/g;

/** @param {string} source @returns {string} HTML */
export function fmt(source) {
  return String(source ?? "")
    .replace(BOLD_RE, "<strong>$1</strong>")
    .replace(TAG_RE, (_, kind, text) => `<span class="tag tag-${kind}">${text}</span>`);
}

/** Strip markup and HTML to plain text (for search, flashcards, quiz). @param {string} source */
export function plain(source) {
  return String(source ?? "")
    .replace(TAG_RE, "$2")
    .replace(BOLD_RE, "$1")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}
