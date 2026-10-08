/**
 * Application bootstrap: wires routes to controllers.
 *   models/      data + domain logic (content, progress, study engine) with no DOM access
 *   views/       pure render functions (data → HTML)
 *   controllers/ route handlers: read models, render views, handle events, return cleanup
 */
import { Router } from "./core/router.js";
import { initShell } from "./controllers/shellController.js";
import { homeController, musclesController, highYieldController, searchController, lab3dController, notFoundController } from "./controllers/pagesController.js";
import { lectureController } from "./controllers/lectureController.js";
import { flashcardController } from "./controllers/flashcardController.js";
import { quizController } from "./controllers/quizController.js";

const outlet = document.getElementById("main");

const router = new Router(outlet)
  .add("home", "", homeController)
  .add("lecture", "lecture/:id/:tab?/:section?", lectureController)
  .add("muscles", "muscles", musclesController)
  .add("flashcards", "flashcards/:scope?", flashcardController)
  .add("quiz", "quiz/:scope?", quizController)
  .add("lab3d", "3d", lab3dController)
  .add("highYield", "high-yield", highYieldController)
  .add("search", "search/:q?", searchController)
  .otherwise(notFoundController);

initShell(router);
router.start();
