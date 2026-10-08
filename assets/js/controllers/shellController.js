/** App shell: navigation highlight, theme toggle and the global search box. */
import { $, $$ } from "../core/dom.js";
import { Progress } from "../models/progress.js";

const NAV_FOR_ROUTE = { home: "home", lecture: "home", muscles: "muscles", flashcards: "flashcards", quiz: "quiz", lab3d: "lab3d", highYield: "high-yield", search: null };

/** @param {import("../core/router.js").Router} router */
export function initShell(router) {
  // Navigation highlight + focus management for screen readers.
  router.onChange((routeName) => {
    const active = NAV_FOR_ROUTE[routeName];
    $$(".mainnav a").forEach((a) => a.classList.toggle("active", a.dataset.nav === active));
    document.title = pageTitle(routeName);
    window.scrollTo(0, 0);
  });

  // Theme: explicit choice wins over the OS preference.
  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme")
      || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    Progress.setTheme(next);
  });

  // Global search.
  $("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = /** @type {HTMLInputElement} */ ($("#searchInput")).value.trim();
    router.navigate(`/search/${encodeURIComponent(query)}`);
  });

  // "/" focuses search, like most docs sites.
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !(event.target instanceof HTMLElement && /^(INPUT|SELECT|TEXTAREA)$/.test(event.target.tagName))) {
      event.preventDefault();
      $("#searchInput").focus();
    }
  });
}

function pageTitle(routeName) {
  const names = { muscles: "Muscle Atlas", flashcards: "Flashcards", quiz: "Quiz", lab3d: "3D Lab", highYield: "High-Yield", search: "Search" };
  return names[routeName] ? `${names[routeName]} · Upper Limb Atlas` : "Upper Limb Anatomy · Study Atlas";
}
