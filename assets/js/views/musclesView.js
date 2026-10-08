import { esc } from "../core/dom.js";
import { muscleGrid, lectureOptions } from "./components.js";

const HIDE_OPTIONS = [["none", "Show everything"], ["all", "Hide all fields"], ["origin", "Hide origin"], ["insertion", "Hide insertion"], ["nerve", "Hide nerve"], ["action", "Hide action"]];

/** Recall-mode selector shared by the atlas and the lecture muscles tab. @param {string} hide */
export const recallBar = (hide) => `<div class="recall-bar">
  <label for="recallSelect">Self-test:</label>
  <select id="recallSelect" data-hide>${HIDE_OPTIONS.map(([v, l]) => `<option value="${v}"${v === hide ? " selected" : ""}>${l}</option>`).join("")}</select>
  <span class="muted">Hidden fields reveal on tap.</span>
</div>`;

/** @param {{ lectures: object[] }} vm */
export const atlasFrame = ({ lectures }) => `<header class="page-head fade-in">
    <p class="eyebrow">Muscle atlas</p>
    <h1>Every muscle: origin, insertion, nerve, action</h1>
    <p>Filter by lecture or search any field (try “median”, “bicipital groove” or “lateral epicondyle”). Use self-test mode to hide a field and recall it.</p>
  </header>
  <div class="toolbar">
    <label class="field">Lecture<select data-lecture>${lectureOptions(lectures, "all")}</select></label>
    <label class="field" style="flex:1;min-width:200px">Filter<input type="search" data-filter placeholder="Name, nerve, attachment…"></label>
  </div>
  ${recallBar("none")}
  <div data-results></div>`;

/** @param {{ groups: { lecture: object, muscles: object[] }[] }} vm */
export function atlasResults({ groups }) {
  const shown = groups.filter((g) => g.muscles.length);
  if (!shown.length) return `<div class="empty">No muscles match that filter.</div>`;
  return shown.map((g) => `<section class="hy-section">
    <h2>${g.lecture.num}. ${esc(g.lecture.short)} <span class="muted" style="font-size:.9rem">(${g.muscles.length})</span></h2>
    ${muscleGrid(g.muscles)}
  </section>`).join("");
}

/** Lecture muscles tab. @param {{ muscles: object[] }} vm */
export const lectureMusclesView = ({ muscles }) => `${recallBar("none")}<div data-results>${muscleGrid(muscles)}</div>`;
