/**
 * Study model: builds flashcard decks and quiz question sets.
 * Pure functions with an injectable RNG, so they are deterministic under test.
 *
 * Besides the hand-written cards/questions in each lecture, it derives:
 *   - muscle flashcards (origin / insertion / nerve / action for every muscle)
 *   - muscle MCQs (nerve supply & insertion) with distractors filtered to be unambiguous
 */
import { ContentModel, MUSCLE_FIELDS } from "./content.js";
import { plain } from "../core/format.js";
import { isSafeNerveDistractor, nerveInfo } from "./nerves.js";

const MAX_OPTION_LEN = 48;

/** Fisher–Yates shuffle returning a new array. @template T @param {T[]} items @param {() => number} [rng] */
export function shuffle(items, rng = Math.random) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Seeded PRNG (mulberry32) for reproducible tests. @param {number} seed */
export function seededRng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** @param {string[]|"all"} lectureIds */
const resolveLectures = (lectureIds) =>
  lectureIds === "all" ? ContentModel.lectures() : ContentModel.lectures().filter((l) => lectureIds.includes(l.id));

// ---------------------------------------------------------------- Flashcards

/**
 * @param {{ lectureIds: string[]|"all", includeMuscles?: boolean }} options
 * @returns {{ id: string, lectureId: string, kind: "card"|"muscle", front: string, back: string }[]}
 */
export function buildDeck({ lectureIds, includeMuscles = true }) {
  const cards = [];
  for (const lecture of resolveLectures(lectureIds)) {
    lecture.flashcards.forEach(([front, back], i) => {
      cards.push({ id: `${lecture.id}:fc${i}`, lectureId: lecture.id, kind: "card", front, back });
    });
    if (!includeMuscles) continue;
    for (const m of ContentModel.muscles(lecture.id)) {
      for (const field of MUSCLE_FIELDS) {
        if (!m[field.key]) continue;
        cards.push({
          id: `${m.id}:${field.key}`,
          lectureId: lecture.id,
          kind: "muscle",
          front: `${m.name}: ${field.label.toLowerCase()}?`,
          back: m[field.key]
        });
      }
    }
  }
  return cards;
}

// ---------------------------------------------------------------- Quiz

const stripRoots = (text) => plain(text).replace(/\s*\((?:C|T)\d[^)]*\)/g, "").trim();
const normalize = (text) => plain(text).toLowerCase().replace(/\([^)]*\)/g, "").replace(/[^a-z0-9]/g, "");

/**
 * Hand-written questions for the selected lectures, plus optional generated muscle questions.
 * Options are shuffled; `answer` is the index of the correct option after shuffling.
 * @param {{ lectureIds: string[]|"all", count?: number, includeMuscles?: boolean, rng?: () => number }} options
 */
export function buildQuiz({ lectureIds, count = 20, includeMuscles = true, rng = Math.random }) {
  const lectures = resolveLectures(lectureIds);
  const pool = lectures.flatMap((lecture) =>
    lecture.quiz.map((q, i) => ({ id: `${lecture.id}:q${i}`, lectureId: lecture.id, kind: "written", q: q.q, options: q.o, answer: q.a, explain: q.e }))
  );
  if (includeMuscles) lectures.forEach((l) => pool.push(...muscleQuestions(l.id, rng)));

  const picked = shuffle(pool, rng).slice(0, count > 0 ? count : pool.length);
  return picked.map((question) => shuffleOptions(question, rng));
}

/** @param {{ options: string[], answer: number }} question @param {() => number} rng */
function shuffleOptions(question, rng) {
  const order = shuffle(question.options.map((_, i) => i), rng);
  return { ...question, options: order.map((i) => question.options[i]), answer: order.indexOf(question.answer) };
}

/**
 * Generated nerve-supply and insertion questions for one lecture's muscles.
 * Distractors come preferentially from the same lecture, then the rest of the course.
 * @param {string} lectureId @param {() => number} rng
 */
export function muscleQuestions(lectureId, rng = Math.random) {
  const everyone = ContentModel.muscles();
  const questions = [];

  for (const m of ContentModel.muscles(lectureId)) {
    const nearFirst = [
      ...shuffle(everyone.filter((o) => o.lectureId === lectureId && o.id !== m.id), rng),
      ...shuffle(everyone.filter((o) => o.lectureId !== lectureId), rng)
    ];

    // Nerve supply. Distractors use canonical nerve names and are distinct by nerve identity,
    // so the same nerve never appears twice in different wording.
    if (m.nerveKeys.length === 1) {
      const own = stripRoots(m.nerve);
      const correctNerve = { keys: m.nerveKeys, label: own.length <= MAX_OPTION_LEN ? own : nerveInfo(m.nerveKeys[0]).label };
      const distractors = pickDistinct(
        nearFirst.filter((o) => o.nerveKeys.length === 1).map((o) => ({ keys: o.nerveKeys, label: nerveInfo(o.nerveKeys[0]).label })),
        (d) => isSafeNerveDistractor(correctNerve, d) && d.label !== correctNerve.label,
        (d) => d.keys.join("|")
      );
      if (distractors.length === 3) {
        questions.push({
          id: `${m.id}:nerve`, lectureId, kind: "muscle",
          q: `Nerve supply of ${m.name}?`,
          options: [correctNerve.label, ...distractors.map((d) => d.label)],
          answer: 0,
          explain: `${m.name}: ${plain(m.nerve)}.`
        });
      }
    }

    // Insertion
    if (m.insertion) {
      const correct = normalize(m.insertion);
      const distractors = pickDistinct(
        nearFirst.filter((o) => o.insertion).map((o) => plain(o.insertion)),
        (text) => {
          const n = normalize(text);
          return n && !n.includes(correct) && !correct.includes(n);
        },
        (text) => normalize(text)
      );
      if (distractors.length === 3) {
        questions.push({
          id: `${m.id}:insertion`, lectureId, kind: "muscle",
          q: `Insertion of ${m.name}?`,
          options: [plain(m.insertion), ...distractors],
          answer: 0,
          explain: `${m.name} inserts into: ${plain(m.insertion)}.`
        });
      }
    }
  }
  return questions;
}

/**
 * First `n` candidates that pass `accept` and are mutually distinct by `keyOf`.
 * @template T @param {T[]} candidates @param {(c: T) => boolean} accept @param {(c: T) => string} keyOf
 */
function pickDistinct(candidates, accept, keyOf, n = 3) {
  const seen = new Set();
  const out = [];
  for (const c of candidates) {
    const key = keyOf(c);
    if (seen.has(key) || !accept(c)) continue;
    seen.add(key);
    out.push(c);
    if (out.length === n) break;
  }
  return out;
}
