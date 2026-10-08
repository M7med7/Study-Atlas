/** Views for flashcards and quizzes. Pure markup; the controllers own state and events. */
import { esc } from "../core/dom.js";
import { fmt, plain } from "../core/format.js";
import { lectureOptions, progressBar } from "./components.js";

// ------------------------------------------------------------ Flashcards

/** @param {{ lectures: object[], scope: string, fixedScope: boolean, includeMuscles: boolean, onlyUnlearned: boolean }} vm */
export function flashSetup({ lectures, scope, fixedScope, includeMuscles, onlyUnlearned }) {
  return `<div class="toolbar">
    ${fixedScope ? "" : `<label class="field">Deck<select data-scope>${lectureOptions(lectures, scope)}</select></label>`}
    <label class="toggle"><input type="checkbox" data-muscles${includeMuscles ? " checked" : ""}> Include muscle cards (O/I/N/A)</label>
    <label class="toggle"><input type="checkbox" data-unlearned${onlyUnlearned ? " checked" : ""}> Only cards I haven't learned</label>
    <button type="button" class="btn btn-sm" data-shuffle>Shuffle</button>
    <button type="button" class="btn btn-sm btn-ghost" data-reset>Reset progress</button>
  </div>
  <div data-stage></div>`;
}

/** @param {{ card: object, index: number, total: number, known: number, deckSize: number, lectureShort: string }} vm */
export function flashCardView({ card, index, total, known, deckSize, lectureShort }) {
  return `<div class="study-wrap">
    ${progressBar(((index + 1) / total) * 100)}
    <div class="flash-stage">
      <button type="button" class="flash" data-flip aria-label="Flashcard: press to flip">
        <div class="flash-face front">
          <span class="side">Question</span><span class="src chip">${esc(lectureShort)}${card.kind === "muscle" ? " · muscle" : ""}</span>
          <div class="txt">${esc(card.front)}</div>
          <div class="hint">Tap or press <span class="kbd">Space</span> to reveal</div>
        </div>
        <div class="flash-face back">
          <span class="side">Answer</span>
          <div class="txt">${fmt(card.back)}</div>
        </div>
      </button>
    </div>
    <div class="flash-controls">
      <button type="button" class="btn nav-prev" data-prev aria-label="Previous card"${index === 0 ? " disabled" : ""}>←</button>
      <button type="button" class="btn btn-again" data-again>Again <span class="kbd">1</span></button>
      <button type="button" class="btn btn-good" data-good>Got it <span class="kbd">2</span></button>
      <button type="button" class="btn nav-next" data-next aria-label="Next card">→</button>
    </div>
    <div class="flash-meta">
      <span>Card ${index + 1} of ${total}</span>
      <span>Learned: <b>${known}</b> / ${deckSize}</span>
    </div>
  </div>`;
}

/** @param {{ known: number, deckSize: number, again: number }} vm */
export const flashDone = ({ known, deckSize, again }) => `<div class="study-wrap quiz-card" style="text-align:center">
  <p class="eyebrow">Deck complete</p>
  <div class="score-big">${known}/${deckSize}</div>
  <p class="muted">cards learned · ${again} marked “again” this round</p>
  <div class="quiz-foot" style="justify-content:center">
    ${again ? `<button type="button" class="btn btn-primary" data-review-again>Review the ${again} “again” cards</button>` : ""}
    <button type="button" class="btn" data-restart>Restart deck</button>
  </div>
</div>`;

export const flashEmpty = () => `<div class="empty">No cards to show. Every card in this deck is learned. Untick “Only cards I haven't learned” or reset progress.</div>`;

// ------------------------------------------------------------ Quiz

/** @param {{ lectures: object[], scope: string, fixedScope: boolean, best: number|undefined, poolSize: number }} vm */
export function quizSetup({ lectures, scope, fixedScope, best, poolSize }) {
  return `<div class="study-wrap quiz-card fade-in">
    <p class="eyebrow">Exam practice</p>
    <h2 style="font-size:var(--text-xl)">Build a quiz</h2>
    <p class="muted">Single-best-answer MCQs from the lectures, plus auto-generated nerve-supply and insertion questions for every muscle. Options are shuffled each time.</p>
    <div class="setup-grid">
      ${fixedScope ? "" : `<label class="field">Lectures<select data-scope>${lectureOptions(lectures, scope)}</select></label>`}
      <label class="field">Questions<select data-count>
        ${[10, 20, 40].map((n) => `<option value="${n}"${n === 20 ? " selected" : ""}>${n}</option>`).join("")}
        <option value="0">All (${poolSize})</option>
      </select></label>
      <label class="toggle" style="align-self:end"><input type="checkbox" data-muscles checked> Include muscle questions</label>
    </div>
    <div class="quiz-foot">
      <span class="muted">${best === undefined ? "No attempts yet" : `Best score: <b>${best}%</b>`}</span>
      <button type="button" class="btn btn-primary" data-start>Start quiz</button>
    </div>
  </div>`;
}

const LETTERS = ["A", "B", "C", "D", "E"];

/**
 * @param {{ q: object, index: number, total: number, score: number, chosen: number|null, lectureShort: string }} vm
 */
export function quizQuestion({ q, index, total, score, chosen, lectureShort }) {
  const answered = chosen !== null;
  const options = q.options.map((opt, i) => {
    let cls = "opt";
    if (answered && i === q.answer) cls += " correct";
    else if (answered && i === chosen) cls += " wrong";
    return `<button type="button" class="${cls}" data-opt="${i}"${answered ? " disabled" : ""}><span class="ol">${LETTERS[i]}</span><span>${esc(plain(opt))}</span></button>`;
  }).join("");

  return `<div class="study-wrap quiz-card">
    <div class="quiz-top"><span>Question ${index + 1} / ${total}</span><span class="chip">${esc(lectureShort)}</span><span>Score ${score}</span></div>
    ${progressBar((index / total) * 100)}
    <h2 class="quiz-q">${esc(plain(q.q))}</h2>
    <div class="opts" role="group" aria-label="Answer options">${options}</div>
    ${answered ? `<div class="explain" role="status"><b>${chosen === q.answer ? "Correct." : `Answer: ${LETTERS[q.answer]}.`}</b> ${esc(plain(q.explain))}</div>` : ""}
    <div class="quiz-foot">
      <button type="button" class="btn btn-ghost btn-sm" data-quit>End quiz</button>
      ${answered ? `<button type="button" class="btn btn-primary" data-next>${index + 1 === total ? "See results" : "Next"} <span class="kbd">Enter</span></button>` : `<span class="muted">Press <span class="kbd">1</span>–<span class="kbd">4</span> to answer</span>`}
    </div>
  </div>`;
}

/** @param {{ score: number, total: number, percent: number, isBest: boolean, wrong: { q: object, chosen: number }[] }} vm */
export function quizResults({ score, total, percent, isBest, wrong }) {
  const verdict = percent >= 85 ? "Excellent, exam-ready." : percent >= 65 ? "Good. Review the misses below." : "Keep going. Re-read the notes for the topics you missed.";
  return `<div class="study-wrap quiz-card fade-in">
    <p class="eyebrow">Results${isBest ? " · new best!" : ""}</p>
    <div class="score-big">${percent}%</div>
    <p><b>${score}</b> of ${total} correct. ${verdict}</p>
    <div class="quiz-foot">
      ${wrong.length ? `<button type="button" class="btn btn-primary" data-retry-wrong>Retry the ${wrong.length} I missed</button>` : ""}
      <button type="button" class="btn" data-new>New quiz</button>
    </div>
    ${wrong.length ? `<h3 style="margin-top:24px">Review</h3>${wrong.map(({ q, chosen }) => `<div class="review-item">
      <div class="q">${esc(plain(q.q))}</div>
      <div class="your">Your answer: ${chosen === -1 ? "skipped" : esc(plain(q.options[chosen]))}</div>
      <div class="right">Correct: ${esc(plain(q.options[q.answer]))}</div>
      <div class="why">${esc(plain(q.explain))}</div>
    </div>`).join("")}` : ""}
  </div>`;
}
