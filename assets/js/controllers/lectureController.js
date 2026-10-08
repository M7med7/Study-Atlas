/** Lecture page: frame + tab controller (notes, muscles, 3D, flashcards, quiz). */
import { $, $$, on } from "../core/dom.js";
import { ContentModel } from "../models/content.js";
import { Progress } from "../models/progress.js";
import { buildDeck } from "../models/study.js";
import { lectureFrame, notesView, markButton, LECTURE_TABS } from "../views/lectureView.js";
import { lectureMusclesView } from "../views/musclesView.js";
import { lecture3dView, notFoundView } from "../views/pagesView.js";
import { wireRecall, wire3d, scrollToEl } from "./shared.js";
import { mountFlashcards } from "./flashcardController.js";
import { mountQuiz } from "./quizController.js";

/** Route controller for #/lecture/:id/:tab?/:section? */
export function lectureController(outlet, { id, tab = "notes", section }) {
  const lecture = ContentModel.lecture(id);
  if (!lecture) { outlet.innerHTML = notFoundView(); return null; }
  const activeTab = LECTURE_TABS.some((t) => t.id === tab) ? tab : "notes";

  outlet.innerHTML = lectureFrame({
    lecture,
    tab: activeTab,
    read: Progress.readSections(lecture.id).length,
    counts: {
      muscles: lecture.muscles.length,
      "3d": ContentModel.models3d(lecture.id).length,
      flashcards: buildDeck({ lectureIds: [lecture.id] }).length,
      quiz: lecture.quiz.length
    }
  });
  const tabOutlet = /** @type {HTMLElement} */ ($("[data-tab-outlet]", outlet));

  switch (activeTab) {
    case "muscles": return mountMuscles(tabOutlet, lecture);
    case "3d": tabOutlet.innerHTML = lecture3dView({ models: ContentModel.models3d(lecture.id) }); return wire3d(tabOutlet);
    case "flashcards": return mountFlashcards(tabOutlet, { scope: lecture.id, fixedScope: true });
    case "quiz": return mountQuiz(tabOutlet, { scope: lecture.id, fixedScope: true });
    default: return mountNotes(outlet, tabOutlet, lecture, section);
  }
}

function mountMuscles(el, lecture) {
  el.innerHTML = lectureMusclesView({ muscles: ContentModel.muscles(lecture.id) });
  return wireRecall(el).cleanup;
}

function mountNotes(page, el, lecture, targetSection) {
  el.innerHTML = notesView({
    lecture,
    readIds: Progress.readSections(lecture.id),
    musclesOf: (group) => ContentModel.musclesInGroup(lecture.id, group),
    modelOf: (sectionId) => ContentModel.sectionModel(lecture.id, sectionId)
  });

  const recall = wireRecall(el);
  const updateReadLabel = () => {
    const read = Progress.readSections(lecture.id).length;
    const total = lecture.sections.length;
    const label = $("[data-read-label]", page);
    if (label) label.textContent = `${read}/${total} sections studied`;
    const bar = $(".lec-head .progress span", page);
    if (bar) bar.style.width = `${(read / total) * 100}%`;
  };

  const offs = [
    recall.cleanup,
    wire3d(el, { single: true }),
    on(el, "click", "[data-goto]", (_, b) => {
      const target = document.getElementById(`s-${b.dataset.goto}`);
      if (target) {
        scrollToEl(target);
        history.replaceState(null, "", `#/lecture/${lecture.id}/notes/${b.dataset.goto}`);
      }
    }),
    on(el, "click", "[data-mark]", (_, b) => {
      const sectionId = b.dataset.mark;
      const isRead = Progress.toggleRead(lecture.id, sectionId);
      b.outerHTML = markButton(isRead, sectionId);
      $(`[data-goto="${sectionId}"]`, el)?.classList.toggle("done", isRead);
      updateReadLabel();
    })
  ];

  // Scroll-spy: highlight the section currently on screen in the TOC.
  const tocButtons = new Map($$("[data-goto]", el).map((b) => [b.dataset.goto, b]));
  const spy = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!visible) return;
    tocButtons.forEach((btn) => btn.classList.remove("current"));
    tocButtons.get(visible.target.dataset.section)?.classList.add("current");
  }, { rootMargin: "-90px 0px -60% 0px" });
  $$("[data-section]", el).forEach((s) => spy.observe(s));

  // Deep link to a section (from search / high-yield). Runs after the router's scroll reset.
  if (targetSection) {
    requestAnimationFrame(() => {
      const target = document.getElementById(`s-${targetSection}`);
      if (target) target.scrollIntoView({ block: "start" });
    });
  }

  return () => {
    offs.forEach((off) => off());
    spy.disconnect();
  };
}
