import { esc } from "../core/dom.js";
import { progressBar, legend } from "./components.js";

/**
 * @param {{ lectures: object[], stats: object, progress: Record<string, { read: number, total: number }> }} vm
 */
export function homeView({ lectures, stats, progress }) {
  const totals = Object.values(progress).reduce((acc, p) => ({ read: acc.read + p.read, total: acc.total + p.total }), { read: 0, total: 0 });
  const overall = totals.total ? (totals.read / totals.total) * 100 : 0;

  return `<section class="hero fade-in">
    <div>
      <p class="eyebrow">Anatomy · Upper limb block</p>
      <h1>The upper limb, <em>one lecture</em> at a time.</h1>
      <p class="hero-lede">Every detail from the six lecture decks as structured notes, a muscle atlas, 3D models, flashcards and exam-style MCQs. Your progress is saved in this browser.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#/lecture/${lectures[0].id}">Start with lecture 1</a>
        <a class="btn" href="#/quiz/all">Mixed quiz</a>
        <a class="btn btn-ghost" href="#/high-yield">High-yield summary →</a>
      </div>
    </div>
    <aside class="hero-panel" aria-label="Course statistics">
      <div class="stats">
        <div class="stat"><b>${stats.muscles}</b><span>muscles with O / I / N / A</span></div>
        <div class="stat"><b>${stats.sections}</b><span>note sections</span></div>
        <div class="stat"><b>${stats.questions}+</b><span>MCQs (plus auto-generated)</span></div>
        <div class="stat"><b>${stats.models3d}</b><span>3D anatomy models</span></div>
      </div>
      ${legend()}
      <div class="overall">Overall progress: ${totals.read} / ${totals.total} sections studied ${progressBar(overall)}</div>
    </aside>
  </section>
  <ol class="lec-list">
    ${lectures.map((l) => lectureRow(l, progress[l.id])).join("")}
  </ol>`;
}

function lectureRow(lecture, p) {
  const pct = p.total ? (p.read / p.total) * 100 : 0;
  return `<li class="lec-row fade-in">
    <div class="lec-num" aria-hidden="true">${String(lecture.num).padStart(2, "0")}</div>
    <div class="lec-main">
      <h2><a href="#/lecture/${lecture.id}">${esc(lecture.title)}</a></h2>
      <div class="lec-meta">${esc(lecture.lecturer)} · ${lecture.sections.length} sections · ${lecture.muscles.length} muscles</div>
      <p class="lec-blurb">${esc(lecture.blurb)}</p>
      <div class="lec-progress">${progressBar(pct)}<span>${p.read}/${p.total} studied</span></div>
    </div>
    <div class="lec-actions">
      <a class="btn btn-sm" href="#/lecture/${lecture.id}/flashcards">Flashcards</a>
      <a class="btn btn-sm" href="#/lecture/${lecture.id}/quiz">Quiz</a>
      <a class="btn btn-sm" href="#/lecture/${lecture.id}/3d">3D</a>
    </div>
  </li>`;
}
