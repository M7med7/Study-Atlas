/** Route controllers for the home, muscle atlas, high-yield, search, 3D lab and not-found pages. */
import { $, on } from "../core/dom.js";
import { plain } from "../core/format.js";
import { ContentModel } from "../models/content.js";
import { Progress } from "../models/progress.js";
import { homeView } from "../views/homeView.js";
import { atlasFrame, atlasResults } from "../views/musclesView.js";
import { highYieldView, searchView, lab3dView, notFoundView } from "../views/pagesView.js";
import { wireRecall, wire3d } from "./shared.js";

export function homeController(outlet) {
  const lectures = ContentModel.lectures();
  const progress = Object.fromEntries(lectures.map((l) => [l.id, { read: Progress.readSections(l.id).length, total: l.sections.length }]));
  outlet.innerHTML = homeView({ lectures, stats: ContentModel.stats(), progress });
  return null;
}

export function musclesController(outlet) {
  outlet.innerHTML = atlasFrame({ lectures: ContentModel.lectures() });
  const results = /** @type {HTMLElement} */ ($("[data-results]", outlet));
  const state = { lecture: "all", filter: "" };
  const recall = wireRecall(outlet);

  const render = () => {
    const terms = state.filter.toLowerCase().split(/\s+/).filter(Boolean);
    const matches = (m) => {
      if (!terms.length) return true;
      const hay = plain([m.name, m.group, m.origin, m.insertion, m.nerve, m.action, m.note].filter(Boolean).join(" ")).toLowerCase();
      return terms.every((t) => hay.includes(t));
    };
    const groups = ContentModel.lectures()
      .filter((l) => state.lecture === "all" || l.id === state.lecture)
      .map((lecture) => ({ lecture, muscles: ContentModel.muscles(lecture.id).filter(matches) }));
    results.innerHTML = atlasResults({ groups });
    recall.reapply();
  };

  const offs = [
    recall.cleanup,
    on(outlet, "change", "[data-lecture]", (_, s) => { state.lecture = /** @type {HTMLSelectElement} */ (s).value; render(); }),
    on(outlet, "input", "[data-filter]", (_, i) => { state.filter = /** @type {HTMLInputElement} */ (i).value; render(); })
  ];
  render();
  return () => offs.forEach((off) => off());
}

export function highYieldController(outlet) {
  const hand = ContentModel.lecture("hand");
  outlet.innerHTML = highYieldView({
    pulses: hand?.sections.find((s) => s.id === "pulses") || null,
    nerveIndex: ContentModel.nerveIndex(),
    boxes: ContentModel.boxes(["exam", "remember"]),
    musclesOf: (group) => ContentModel.musclesInGroup("hand", group)
  });
  return null;
}

export function searchController(outlet, { q = "" }) {
  const query = q.trim();
  const input = /** @type {HTMLInputElement|null} */ (document.getElementById("searchInput"));
  if (input && input.value !== query) input.value = query;
  outlet.innerHTML = searchView({ query, results: ContentModel.search(query) });
  return null;
}

export function lab3dController(outlet) {
  const groups = ContentModel.lectures().map((lecture) => ({ lecture, models: ContentModel.models3d(lecture.id) })).filter((g) => g.models.length);
  outlet.innerHTML = lab3dView({ groups });
  return wire3d(outlet);
}

export function notFoundController(outlet) {
  outlet.innerHTML = notFoundView();
  return null;
}
