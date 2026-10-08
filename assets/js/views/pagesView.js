/** Views for the High-Yield, Search, 3D and Not-found pages. */
import { esc, escapeRegExp } from "../core/dom.js";
import { boxView, blockView } from "./components.js";

// ------------------------------------------------------------ High-yield

/**
 * @param {{ pulses: object|null, nerveIndex: { key: string, label: string, muscles: object[] }[], boxes: { lecture: object, section: object, box: object }[], musclesOf: Function }} vm
 */
export function highYieldView({ pulses, nerveIndex, boxes, musclesOf }) {
  return `<header class="page-head fade-in">
    <p class="eyebrow">Last-minute revision</p>
    <h1>High-yield summary</h1>
    <p>The facts examiners love, pulled together from all six lectures: pulse points, which nerve supplies which muscle, and every “Remember” and “Exam focus” box.</p>
  </header>
  ${pulses ? `<section class="hy-section"><h2>Arterial pulse points</h2>${pulses.blocks.map((b) => blockView(b, musclesOf)).join("")}</section>` : ""}
  <section class="hy-section">
    <h2>Nerve → muscles it supplies</h2>
    <div class="nerve-index">${nerveIndex.map((g) => `<div class="nerve-card">
      <h3>${esc(g.label)}</h3>
      <ul>${g.muscles.map((m) => `<li>${esc(m.name)} <span>(${esc(m.lectureShort)})</span></li>`).join("")}</ul>
    </div>`).join("")}</div>
  </section>
  <section class="hy-section">
    <h2>Remember &amp; exam-focus boxes</h2>
    <div class="boxes-cols">${boxes.map(({ lecture, section, box }) => `<div>${boxView(box)}<div class="box-src" style="margin:-10px 0 16px">From <a href="#/lecture/${lecture.id}/notes/${section.id}">${esc(lecture.short)} › ${esc(section.title)}</a></div></div>`).join("")}</div>
  </section>`;
}

// ------------------------------------------------------------ Search

/** @param {string} text already-plain text @param {string[]} terms */
function highlight(text, terms) {
  const safe = esc(text);
  if (!terms.length) return safe;
  const re = new RegExp(`(${terms.map((t) => escapeRegExp(esc(t))).join("|")})`, "gi");
  return safe.replace(re, "<mark>$1</mark>");
}

/** @param {{ query: string, results: object[] }} vm */
export function searchView({ query, results }) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const header = `<header class="page-head fade-in">
    <p class="eyebrow">Search</p>
    <h1>${query ? `Results for “${esc(query)}”` : "Search the notes"}</h1>
    <p>${query ? `${results.length} match${results.length === 1 ? "" : "es"} across notes and muscles.` : "Type in the search box above. Every word must match."}</p>
  </header>`;
  if (!query) return header;
  if (!results.length) return `${header}<div class="empty">Nothing found. Try a shorter or different term (e.g. “snuffbox”, “C5”, “pisiform”).</div>`;
  return `${header}<ul class="results">${results.map((r) => {
    const href = r.kind === "muscle" ? `#/lecture/${r.lecture.id}/muscles` : `#/lecture/${r.lecture.id}/notes/${r.sectionId}`;
    return `<li>
      <a class="r-title" href="${href}">${highlight(r.title, terms)}</a>
      <div class="r-src">${r.kind === "muscle" ? "Muscle" : "Notes"} · Lecture ${r.lecture.num}: ${esc(r.lecture.short)}</div>
      <p class="r-snip">${highlight(r.snippet, terms)}</p>
    </li>`;
  }).join("")}</ul>`;
}

// ------------------------------------------------------------ 3D models

/**
 * One model tile. The iframe is only created when the student clicks (performance & privacy).
 * `compact` is the variant shown beside a note section.
 */
export function modelTile(model, { showLecture = false, compact = false } = {}) {
  return `<article class="m3d${compact ? " m3d-compact" : ""}" data-model="${esc(model.uid)}">
    ${compact ? `<div class="m3d-kicker"><span class="m3d-badge">3D</span> See it in 3D</div>` : ""}
    <div class="m3d-stage">
      <button type="button" class="m3d-poster" data-load3d="${esc(model.uid)}" aria-label="Load interactive 3D model: ${esc(model.title)}">
        <img src="${esc(model.thumb)}" alt="" loading="lazy" width="640" height="360">
        <span class="m3d-play"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg> ${compact ? "Rotate in 3D" : "Load 3D model"}</span>
      </button>
    </div>
    <div class="m3d-body">
      <h3>${esc(model.title)}${model.animated ? ' <span class="chip">animated</span>' : ""}</h3>
      ${compact ? `<p class="m3d-focus"><b>Look for:</b> ${esc(model.focus)}</p>` : ""}
      ${compact ? "" : `<p class="m3d-focus"><b>Look for:</b> ${esc(model.focus)}</p>`}
      <p class="m3d-credit">${showLecture ? `<a href="#/lecture/${model.lectureId}/3d">${esc(model.lectureShort)}</a> · ` : ""}Model by <a href="${esc(model.authorUrl)}" target="_blank" rel="noopener">${esc(model.author)}</a> on <a href="${esc(model.url)}" target="_blank" rel="noopener">Sketchfab</a></p>
    </div>
  </article>`;
}

/** @param {string} uid @param {string} title */
export const modelIframe = (uid, title) =>
  `<iframe title="${esc(title)}" src="https://sketchfab.com/models/${encodeURIComponent(uid)}/embed?autostart=1&preload=1&dnt=1&ui_hint=2" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;

export const models3dIntro = () => `<p class="muted m3d-intro">Drag to rotate, scroll or pinch to zoom, right-drag to pan. Models are third-party (Sketchfab) and load only when you press <b>Load 3D model</b>. Some use slightly different terminology from the lectures: the notes are your reference.</p>`;

/** @param {{ models: object[] }} vm */
export const lecture3dView = ({ models }) =>
  models.length ? `${models3dIntro()}<div class="m3d-grid">${models.map((m) => modelTile(m)).join("")}</div>` : `<div class="empty">No 3D models for this lecture yet.</div>`;

/** @param {{ groups: { lecture: object, models: object[] }[] }} vm */
export const lab3dView = ({ groups }) => `<header class="page-head fade-in">
    <p class="eyebrow">3D anatomy lab</p>
    <h1>Rotate it, then name it</h1>
    <p>Interactive 3D models for every lecture, including real cadaveric prosections and animated joint movements. Read each “Look for” prompt, then try to identify the structures before checking your notes.</p>
  </header>
  ${models3dIntro()}
  ${groups.map((g) => `<section class="hy-section"><h2>${g.lecture.num}. ${esc(g.lecture.short)}</h2><div class="m3d-grid">${g.models.map((m) => modelTile(m)).join("")}</div></section>`).join("")}`;

export const notFoundView = () => `<div class="empty"><h2>Page not found</h2><p><a href="#/">Back to the lectures</a></p></div>`;
