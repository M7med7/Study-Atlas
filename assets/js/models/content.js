/**
 * Content model: read-only access to lecture data, muscles, search and aggregations.
 * No DOM access, so it is safe to import from Node tests.
 */
import back from "./data/01-back.js";
import axilla from "./data/02-axilla.js";
import arm from "./data/03-arm.js";
import antForearm from "./data/04-ant-forearm.js";
import postForearm from "./data/05-post-forearm.js";
import hand from "./data/06-hand.js";
import models3d from "./data/models3d.js";
import { plain } from "../core/format.js";
import { classifyNerve, nerveInfo, NERVE_ORDER } from "./nerves.js";

const LECTURES = Object.freeze([back, axilla, arm, antForearm, postForearm, hand].sort((a, b) => a.num - b.num));

export const MUSCLE_FIELDS = Object.freeze([
  { key: "origin", label: "Origin" },
  { key: "insertion", label: "Insertion" },
  { key: "nerve", label: "Nerve" },
  { key: "action", label: "Action" }
]);

/** @param {string} text */
export const slug = (text) => String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const ALL_MUSCLES = Object.freeze(
  LECTURES.flatMap((lec) => lec.muscles.map((m) => Object.freeze({
    ...m,
    id: `${lec.id}:${slug(m.name)}`,
    lectureId: lec.id,
    lectureShort: lec.short,
    nerveKeys: classifyNerve(m.nerve)
  })))
);

let searchIndex = null;

export const ContentModel = {
  /** @returns {readonly object[]} */
  lectures: () => LECTURES,

  /** @param {string} id */
  lecture: (id) => LECTURES.find((l) => l.id === id) || null,

  /**
   * Unique 3D models for one lecture (first placement wins for the "look for" prompt),
   * or for every lecture tagged with lectureId/lectureShort when called without an id.
   * @param {string} [lectureId]
   */
  models3d(lectureId) {
    if (lectureId) return uniqueByUid(models3d[lectureId] || []);
    return LECTURES.flatMap((l) => ContentModel.models3d(l.id).map((m) => ({ ...m, lectureId: l.id, lectureShort: l.short })));
  },

  /** The 3D model pinned beside a note section, if any. @param {string} lectureId @param {string} sectionId */
  sectionModel: (lectureId, sectionId) => (models3d[lectureId] || []).find((m) => m.sectionId === sectionId) || null,

  /** @param {string} [lectureId] */
  muscles(lectureId) {
    return lectureId ? ALL_MUSCLES.filter((m) => m.lectureId === lectureId) : ALL_MUSCLES;
  },

  /** @param {string} lectureId @param {string} group */
  musclesInGroup: (lectureId, group) => ALL_MUSCLES.filter((m) => m.lectureId === lectureId && m.group === group),

  stats() {
    return {
      lectures: LECTURES.length,
      sections: LECTURES.reduce((n, l) => n + l.sections.length, 0),
      muscles: ALL_MUSCLES.length,
      flashcards: LECTURES.reduce((n, l) => n + l.flashcards.length, 0),
      questions: LECTURES.reduce((n, l) => n + l.quiz.length, 0),
      models3d: new Set(Object.values(models3d).flat().map((m) => m.uid)).size,
      sectionsWith3d: Object.values(models3d).flat().length
    };
  },

  /**
   * Boxes of the given kinds across all lectures (High-Yield page).
   * @param {string[]} kinds
   */
  boxes(kinds) {
    const out = [];
    for (const lecture of LECTURES) {
      for (const section of lecture.sections) {
        for (const block of section.blocks) {
          if (block.t === "box" && kinds.includes(block.k)) out.push({ lecture, section, box: block });
        }
      }
    }
    return out;
  },

  /** Muscles grouped by nerve key, in anatomical display order. */
  nerveIndex() {
    const groups = new Map(NERVE_ORDER.map((k) => [k, []]));
    for (const m of ALL_MUSCLES) m.nerveKeys.forEach((k) => groups.get(k).push(m));
    return NERVE_ORDER
      .filter((k) => groups.get(k).length)
      .map((k) => ({ key: k, label: nerveInfo(k).label, muscles: groups.get(k) }));
  },

  /**
   * Full-text search: every term must appear. Title hits rank higher.
   * @param {string} query
   * @param {number} [limit]
   */
  search(query, limit = 60) {
    const terms = String(query || "").toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const index = getSearchIndex();
    const results = [];
    for (const entry of index) {
      const hay = entry.haystack;
      if (!terms.every((t) => hay.includes(t))) continue;
      const titleHits = terms.filter((t) => entry.title.toLowerCase().includes(t)).length;
      results.push({ ...entry, score: titleHits * 10 + (entry.kind === "muscle" ? 2 : 0), snippet: snippet(entry.text, terms[0]) });
    }
    return results.sort((a, b) => b.score - a.score).slice(0, limit);
  }
};

/** Plain text of every string inside a section's blocks (including referenced muscles). */
function sectionText(lecture, section) {
  const parts = [];
  for (const block of section.blocks) {
    if (block.t === "muscles") {
      ContentModel.musclesInGroup(lecture.id, block.group).forEach((m) => parts.push(muscleText(m)));
      continue;
    }
    collectStrings(block, parts);
  }
  return plain(parts.join(" "));
}

function collectStrings(value, out) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectStrings(v, out));
  else if (value && typeof value === "object") Object.entries(value).forEach(([k, v]) => { if (k !== "t" && k !== "k") collectStrings(v, out); });
}

const muscleText = (m) => plain([m.name, m.group, m.origin, m.insertion, m.nerve, m.action, m.note].filter(Boolean).join(" · "));

function getSearchIndex() {
  if (searchIndex) return searchIndex;
  const entries = [];
  for (const lecture of LECTURES) {
    for (const section of lecture.sections) {
      const text = sectionText(lecture, section);
      entries.push({ kind: "section", lecture, sectionId: section.id, title: section.title, text, haystack: `${section.title} ${text}`.toLowerCase() });
    }
  }
  for (const m of ALL_MUSCLES) {
    const lecture = ContentModel.lecture(m.lectureId);
    const text = muscleText(m);
    entries.push({ kind: "muscle", lecture, sectionId: null, muscleId: m.id, title: m.name, text, haystack: text.toLowerCase() });
  }
  searchIndex = entries;
  return entries;
}

/** @template {{ uid: string }} T @param {T[]} items */
function uniqueByUid(items) {
  const seen = new Set();
  return items.filter((m) => (seen.has(m.uid) ? false : (seen.add(m.uid), true)));
}

function snippet(text, term, radius = 90) {
  const i = text.toLowerCase().indexOf(term);
  if (i < 0) return text.slice(0, radius * 2);
  const start = Math.max(0, i - radius);
  const end = Math.min(text.length, i + term.length + radius);
  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}
