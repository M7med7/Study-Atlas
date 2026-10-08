// Data-integrity tests: catch authoring mistakes before a student sees them.
import { test } from "node:test";
import assert from "node:assert/strict";
import { ContentModel } from "../assets/js/models/content.js";
import { classifyNerve } from "../assets/js/models/nerves.js";

const BLOCK_TYPES = new Set(["p", "h", "ul", "ol", "kv", "table", "box", "muscles", "qa"]);
const BOX_KINDS = new Set(["exam", "remember", "clinical", "tip", "case"]);

test("six lectures, ordered 1..6, unique ids", () => {
  const lectures = ContentModel.lectures();
  assert.equal(lectures.length, 6);
  assert.deepEqual(lectures.map((l) => l.num), [1, 2, 3, 4, 5, 6]);
  assert.equal(new Set(lectures.map((l) => l.id)).size, 6);
});

test("every block has a known type and valid shape", () => {
  for (const lecture of ContentModel.lectures()) {
    const sectionIds = new Set();
    for (const section of lecture.sections) {
      assert.ok(!sectionIds.has(section.id), `${lecture.id}: duplicate section id ${section.id}`);
      sectionIds.add(section.id);
      for (const block of section.blocks) {
        const where = `${lecture.id}/${section.id}`;
        assert.ok(BLOCK_TYPES.has(block.t), `${where}: unknown block type ${block.t}`);
        if (block.t === "box") assert.ok(BOX_KINDS.has(block.k), `${where}: unknown box kind ${block.k}`);
        if (block.t === "box") assert.ok(block.h || block.items, `${where}: box without content`);
        if (block.t === "table") block.rows.forEach((row, i) => assert.equal(row.length, block.head.length, `${where}: table row ${i} has ${row.length} cells, expected ${block.head.length}`));
        if (block.t === "kv") block.items.forEach((pair) => assert.equal(pair.length, 2, `${where}: kv item needs [key, value]`));
        if (block.t === "qa") block.items.forEach((pair) => assert.equal(pair.length, 2, `${where}: qa item needs [q, a]`));
      }
    }
  }
});

test("every muscles block references a group that has muscles", () => {
  for (const lecture of ContentModel.lectures()) {
    for (const section of lecture.sections) {
      for (const block of section.blocks.filter((b) => b.t === "muscles")) {
        assert.ok(ContentModel.musclesInGroup(lecture.id, block.group).length > 0, `${lecture.id}/${section.id}: empty muscle group "${block.group}"`);
      }
    }
  }
});

test("every muscle is shown in some section and has nerve + action", () => {
  for (const lecture of ContentModel.lectures()) {
    const shownGroups = new Set(lecture.sections.flatMap((s) => s.blocks.filter((b) => b.t === "muscles").map((b) => b.group)));
    for (const m of lecture.muscles) {
      assert.ok(shownGroups.has(m.group), `${lecture.id}: muscle ${m.name} (group ${m.group}) is never displayed`);
      assert.ok(m.nerve && m.action, `${lecture.id}: ${m.name} missing nerve/action`);
      assert.ok(classifyNerve(m.nerve).length >= 1, `${lecture.id}: could not classify nerve of ${m.name}: "${m.nerve}"`);
    }
  }
});

test("hand-written quiz questions are well formed", () => {
  for (const lecture of ContentModel.lectures()) {
    lecture.quiz.forEach((q, i) => {
      const where = `${lecture.id} q${i}`;
      assert.ok(q.q && q.e, `${where}: missing question or explanation`);
      assert.ok(q.o.length === 4, `${where}: expected 4 options`);
      assert.ok(Number.isInteger(q.a) && q.a >= 0 && q.a < q.o.length, `${where}: answer index out of range`);
      assert.equal(new Set(q.o).size, q.o.length, `${where}: duplicate options`);
    });
  }
});

test("flashcards are [front, back] pairs with content", () => {
  for (const lecture of ContentModel.lectures()) {
    lecture.flashcards.forEach((card, i) => {
      assert.equal(card.length, 2, `${lecture.id} card ${i}`);
      assert.ok(card[0].trim() && card[1].trim(), `${lecture.id} card ${i} empty`);
    });
  }
});

test("search finds key topics", () => {
  for (const term of ["snuffbox", "quadrangular", "carpal tunnel", "supratrochlear", "rotator cuff", "princeps pollicis"]) {
    assert.ok(ContentModel.search(term).length > 0, `no results for "${term}"`);
  }
  assert.deepEqual(ContentModel.search("   "), []);
});

test("nerve index covers every muscle", () => {
  const indexed = new Set(ContentModel.nerveIndex().flatMap((g) => g.muscles.map((m) => m.id)));
  for (const m of ContentModel.muscles()) assert.ok(indexed.has(m.id), `${m.id} missing from nerve index`);
});

test("3D models: pinned to real sections, unique per section, complete metadata", async () => {
  const { default: models3d } = await import("../assets/js/models/data/models3d.js");
  for (const [lectureId, entries] of Object.entries(models3d)) {
    const lecture = ContentModel.lecture(lectureId);
    assert.ok(lecture, `unknown lecture ${lectureId}`);
    const ids = new Set(lecture.sections.map((s) => s.id));
    const seen = new Set();
    for (const m of entries) {
      assert.ok(ids.has(m.sectionId), `${lectureId}: model pinned to missing section ${m.sectionId}`);
      assert.ok(!seen.has(m.sectionId), `${lectureId}: two models on section ${m.sectionId}`);
      seen.add(m.sectionId);
      assert.match(m.uid, /^[0-9a-f]{32}$/, `${lectureId}: bad uid`);
      for (const key of ["title", "author", "authorUrl", "url", "thumb", "focus"]) assert.ok(m[key], `${lectureId}/${m.sectionId}: missing ${key}`);
      assert.match(m.thumb, /^https:\/\//);
    }
  }
});
