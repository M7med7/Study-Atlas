// Study-engine tests: decks, quizzes, and safety of auto-generated distractors.
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildDeck, buildQuiz, muscleQuestions, seededRng, shuffle } from "../assets/js/models/study.js";
import { ContentModel } from "../assets/js/models/content.js";
import { classifyNerve, isSafeNerveDistractor } from "../assets/js/models/nerves.js";
import { createProgressStore } from "../assets/js/models/progress.js";

test("shuffle keeps all items and does not mutate input", () => {
  const input = [1, 2, 3, 4, 5, 6];
  const out = shuffle(input, seededRng(7));
  assert.deepEqual([...out].sort(), input);
  assert.deepEqual(input, [1, 2, 3, 4, 5, 6]);
});

test("deck ids are unique across the whole course", () => {
  const deck = buildDeck({ lectureIds: "all", includeMuscles: true });
  assert.equal(new Set(deck.map((c) => c.id)).size, deck.length);
  const withoutMuscles = buildDeck({ lectureIds: "all", includeMuscles: false });
  assert.equal(withoutMuscles.length, ContentModel.stats().flashcards);
});

test("quiz: every question has exactly one valid answer index after shuffling", () => {
  const quiz = buildQuiz({ lectureIds: "all", count: 0, includeMuscles: true, rng: seededRng(42) });
  assert.ok(quiz.length > ContentModel.stats().questions, "muscle questions should be added");
  for (const q of quiz) {
    assert.ok(q.answer >= 0 && q.answer < q.options.length, `${q.id}: bad answer index`);
    assert.equal(new Set(q.options).size, q.options.length, `${q.id}: duplicate options ${JSON.stringify(q.options)}`);
  }
});

test("quiz respects count and lecture filter", () => {
  const quiz = buildQuiz({ lectureIds: ["hand"], count: 10, rng: seededRng(1) });
  assert.equal(quiz.length, 10);
  assert.ok(quiz.every((q) => q.lectureId === "hand"));
});

test("generated nerve distractors never name the correct nerve family ambiguously", () => {
  for (const lecture of ContentModel.lectures()) {
    for (const q of muscleQuestions(lecture.id, seededRng(3)).filter((x) => x.kind === "muscle" && x.id.endsWith(":nerve"))) {
      const identities = q.options.map((opt) => classifyNerve(opt).join("|"));
      assert.equal(new Set(identities).size, 4, `${q.id}: same nerve offered twice ${JSON.stringify(q.options)}`);
      const correct = { keys: classifyNerve(q.options[q.answer]), label: q.options[q.answer] };
      q.options.forEach((opt, i) => {
        if (i === q.answer) return;
        const d = { keys: classifyNerve(opt), label: opt };
        assert.ok(isSafeNerveDistractor(correct, d), `${q.id}: unsafe distractor "${opt}" vs "${correct.label}"`);
      });
    }
  }
});

test("known ambiguous pairs are rejected", () => {
  const n = (label) => ({ keys: classifyNerve(label), label });
  assert.equal(isSafeNerveDistractor(n("Median nerve"), n("Median nerve (anterior interosseous branch)")), false);
  assert.equal(isSafeNerveDistractor(n("Deep branch of radial nerve"), n("Radial nerve")), false);
  assert.equal(isSafeNerveDistractor(n("Deep branch of radial nerve"), n("Radial nerve (main trunk)")), true);
  assert.equal(isSafeNerveDistractor(n("Upper & lower subscapular nerves"), n("Lower subscapular nerve")), false);
  assert.equal(isSafeNerveDistractor(n("Superficial branch of ulnar nerve"), n("Deep branch of ulnar nerve")), true);
  assert.equal(isSafeNerveDistractor(n("Axillary nerve"), n("Suprascapular nerve")), true);
});

test("insertion distractors are never contained in the correct answer", () => {
  const norm = (t) => t.toLowerCase().replace(/\([^)]*\)/g, "").replace(/[^a-z0-9]/g, "");
  for (const lecture of ContentModel.lectures()) {
    for (const q of muscleQuestions(lecture.id, seededRng(9)).filter((x) => x.id.endsWith(":insertion"))) {
      const correct = norm(q.options[q.answer]);
      q.options.forEach((opt, i) => {
        if (i === q.answer) return;
        assert.ok(!correct.includes(norm(opt)) && !norm(opt).includes(correct), `${q.id}: overlapping distractor "${opt}"`);
      });
    }
  }
});

test("progress store works with injected storage and survives broken storage", () => {
  const map = new Map();
  const store = createProgressStore({ getItem: (k) => map.get(k) ?? null, setItem: (k, v) => map.set(k, v) });
  assert.equal(store.toggleRead("back", "skin"), true);
  assert.equal(store.isRead("back", "skin"), true);
  assert.equal(store.toggleRead("back", "skin"), false);
  store.setCardStatus("back:fc0", "known");
  assert.equal(store.cardStatus("back:fc0"), "known");
  assert.equal(store.recordQuiz("all", 60), true);
  assert.equal(store.recordQuiz("all", 50), false);
  assert.equal(store.quizBest("all"), 60);

  const broken = createProgressStore({ getItem: () => { throw new Error("blocked"); }, setItem: () => { throw new Error("blocked"); } });
  assert.doesNotThrow(() => broken.toggleRead("arm", "fascia"));
  assert.deepEqual(broken.readSections("arm"), []);
});
