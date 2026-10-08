import { esc } from "../core/dom.js";
import { blockView, progressBar } from "./components.js";
import { modelTile } from "./pagesView.js";

export const LECTURE_TABS = Object.freeze([
  { id: "notes", label: "Notes" },
  { id: "muscles", label: "Muscles" },
  { id: "3d", label: "3D models" },
  { id: "flashcards", label: "Flashcards" },
  { id: "quiz", label: "Quiz" }
]);

/**
 * Page frame: header + tabs + an empty outlet the controller fills.
 * @param {{ lecture: object, tab: string, counts: Record<string, number>, read: number }} vm
 */
export function lectureFrame({ lecture, tab, counts, read }) {
  const pct = lecture.sections.length ? (read / lecture.sections.length) * 100 : 0;
  return `<header class="lec-head fade-in">
    <div class="crumbs"><a href="#/">Lectures</a> / Lecture ${lecture.num}</div>
    <p class="eyebrow">Lecture ${lecture.num}</p>
    <h1>${esc(lecture.title)}</h1>
    <div class="lec-meta">${esc(lecture.lecturer)}</div>
    <div class="lec-progress" style="margin-top:12px">${progressBar(pct)}<span data-read-label>${read}/${lecture.sections.length} sections studied</span></div>
  </header>
  <nav class="tabs" aria-label="Lecture sections">
    ${LECTURE_TABS.map((t) => `<a href="#/lecture/${lecture.id}/${t.id}" class="${t.id === tab ? "active" : ""}"${t.id === tab ? ' aria-current="page"' : ""}>${t.label}${counts[t.id] ? `<span class="count">${counts[t.id]}</span>` : ""}</a>`).join("")}
  </nav>
  <div data-tab-outlet></div>`;
}

/**
 * Notes tab: sticky table of contents + all sections.
 * Sections with a pinned 3D model render as a split: notes on the left, sticky viewer on the right.
 * @param {{ lecture: object, readIds: string[], musclesOf: (group: string) => object[], modelOf: (sectionId: string) => object|null }} vm
 */
export function notesView({ lecture, readIds, musclesOf, modelOf }) {
  const toc = lecture.sections.map((s) =>
    `<li><button type="button" data-goto="${s.id}" class="${readIds.includes(s.id) ? "done" : ""}">${esc(s.title)}${modelOf(s.id) ? ' <span class="toc-3d" title="Has a 3D model">3D</span>' : ""}</button></li>`
  ).join("");

  const sections = lecture.sections.map((s, i) => {
    const model = modelOf(s.id);
    const body = s.blocks.map((b) => blockView(b, musclesOf)).join("");
    return `<section class="note-sec${model ? " has-3d" : ""}" id="s-${s.id}" data-section="${s.id}">
    <div class="sec-head">
      <h2><small>${String(i + 1).padStart(2, "0")}</small>${esc(s.title)}</h2>
      ${markButton(readIds.includes(s.id), s.id)}
    </div>
    ${model ? `<div class="sec-split"><div class="sec-text">${body}</div><aside class="sec-3d" aria-label="3D model for ${esc(s.title)}">${modelTile(model, { compact: true })}</aside></div>` : body}
  </section>`;
  }).join("");

  return `<div class="lec-body">
    <aside class="toc" aria-label="On this page">
      <h3>On this page</h3>
      <ol>${toc}</ol>
      <div class="toc-tools">
        <label class="toggle"><input type="checkbox" data-recall> Hide muscle details (self-test)</label>
        <a class="btn btn-sm" href="#/lecture/${lecture.id}/flashcards">Flashcards →</a>
        <a class="btn btn-sm" href="#/lecture/${lecture.id}/quiz">Quiz this lecture →</a>
      </div>
    </aside>
    <article data-notes>${sections}</article>
  </div>`;
}

/** @param {boolean} isRead @param {string} sectionId */
export const markButton = (isRead, sectionId) =>
  `<button type="button" class="mark-btn${isRead ? " on" : ""}" data-mark="${sectionId}" aria-pressed="${isRead}">${isRead ? "✓ Studied" : "Mark studied"}</button>`;
