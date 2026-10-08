// View smoke tests: every pure view renders for every lecture without throwing and without leaking raw markup.
import { test } from "node:test";
import assert from "node:assert/strict";
import { ContentModel } from "../assets/js/models/content.js";
import { buildDeck, buildQuiz, seededRng } from "../assets/js/models/study.js";
import { homeView } from "../assets/js/views/homeView.js";
import { lectureFrame, notesView } from "../assets/js/views/lectureView.js";
import { atlasFrame, atlasResults, lectureMusclesView } from "../assets/js/views/musclesView.js";
import { flashSetup, flashCardView, quizSetup, quizQuestion, quizResults } from "../assets/js/views/studyViews.js";
import { highYieldView, searchView, lab3dView, lecture3dView } from "../assets/js/views/pagesView.js";

const RAW_MARKUP = /\{[navmb]:|\*\*/; // unformatted content markup must never reach the page

test("home renders", () => {
  const lectures = ContentModel.lectures();
  const progress = Object.fromEntries(lectures.map((l) => [l.id, { read: 0, total: l.sections.length }]));
  const html = homeView({ lectures, stats: ContentModel.stats(), progress });
  assert.ok(html.includes("lec-row"));
  assert.doesNotMatch(html, RAW_MARKUP);
});

for (const lecture of ContentModel.lectures()) {
  test(`lecture ${lecture.id}: all tabs render`, () => {
    const musclesOf = (g) => ContentModel.musclesInGroup(lecture.id, g);
    const modelOf = (sid) => ContentModel.sectionModel(lecture.id, sid);
    const notes = notesView({ lecture, readIds: [], musclesOf, modelOf });
    assert.doesNotMatch(notes, RAW_MARKUP, "raw markup in notes");
    assert.equal((notes.match(/class="note-sec[ "]/g) || []).length, lecture.sections.length);
    const pinned = lecture.sections.filter((sec) => modelOf(sec.id)).length;
    assert.ok(pinned > 0, "every lecture should have inline 3D models");
    assert.equal((notes.match(/class="sec-3d"/g) || []).length, pinned, "one inline viewer per pinned section");
    lectureFrame({ lecture, tab: "notes", counts: {}, read: 0 });
    assert.doesNotMatch(lectureMusclesView({ muscles: ContentModel.muscles(lecture.id) }), RAW_MARKUP);
    assert.ok(lecture3dView({ models: ContentModel.models3d(lecture.id) }).includes("data-load3d"));

    const deck = buildDeck({ lectureIds: [lecture.id] });
    deck.forEach((card, i) => assert.doesNotMatch(flashCardView({ card, index: i, total: deck.length, known: 0, deckSize: deck.length, lectureShort: lecture.short }), RAW_MARKUP, card.id));

    const quiz = buildQuiz({ lectureIds: [lecture.id], count: 0, rng: seededRng(2) });
    quiz.forEach((q, i) => {
      const html = quizQuestion({ q, index: i, total: quiz.length, score: 0, chosen: 0, lectureShort: lecture.short });
      assert.doesNotMatch(html, RAW_MARKUP, q.id);
    });
    quizResults({ score: 1, total: 2, percent: 50, isBest: true, wrong: [{ q: quiz[0], chosen: -1 }] });
  });
}

test("study setup, atlas, high-yield, 3D lab and search render", () => {
  const lectures = ContentModel.lectures();
  flashSetup({ lectures, scope: "all", fixedScope: false, includeMuscles: true, onlyUnlearned: false });
  quizSetup({ lectures, scope: "all", fixedScope: false, best: undefined, poolSize: 10 });
  atlasFrame({ lectures });
  assert.doesNotMatch(atlasResults({ groups: lectures.map((l) => ({ lecture: l, muscles: ContentModel.muscles(l.id) })) }), RAW_MARKUP);
  const hy = highYieldView({ pulses: ContentModel.lecture("hand").sections.find((s) => s.id === "pulses"), nerveIndex: ContentModel.nerveIndex(), boxes: ContentModel.boxes(["exam", "remember"]), musclesOf: () => [] });
  assert.doesNotMatch(hy, RAW_MARKUP);
  const lab = lab3dView({ groups: lectures.map((l) => ({ lecture: l, models: ContentModel.models3d(l.id) })) });
  const perLecture = lectures.reduce((n, l) => n + ContentModel.models3d(l.id).length, 0);
  assert.equal((lab.match(/data-load3d=/g) || []).length, perLecture);
});

test("search view escapes user input (XSS)", () => {
  const evil = `<img src=x onerror=alert(1)>`;
  const html = searchView({ query: evil, results: ContentModel.search(evil) });
  assert.ok(!html.includes("<img src=x"), "query must be escaped");
  assert.ok(html.includes("&lt;img"));
  const ok = searchView({ query: "snuffbox", results: ContentModel.search("snuffbox") });
  assert.ok(ok.includes("<mark>"));
});
