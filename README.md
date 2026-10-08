# Upper Limb Anatomy: Interactive Study Atlas

An interactive revision site for the upper limb anatomy block (KAU Faculty of Medicine), built from the six lecture decks:

| # | Lecture | Lecturer |
|---|---------|----------|
| 1 | Back, Shoulder & Scapular Regions | Dr. Rasha Alshali |
| 2 | The Axilla & Brachial Plexus | Prof. Laila M. Aboul Mahasen |
| 3 | The Arm & Cubital Fossa | Prof. Laila M. Aboul Mahasen |
| 4 | Bones of the Forearm & Anterior Forearm | Dr. Rasha Alshali |
| 5 | Posterior & Lateral Forearm | Dr. Rasha Alshali |
| 6 | The Hand | Prof. Laila M. Aboul Mahasen |

**Features**

- **Structured notes:** every slide's content as sections, tables and colour-coded terms (nerve / artery / vein / muscle / bone), with *Remember*, *Exam focus* and *Clinical* boxes.
- **3D models beside the text:** 51 note sections have an interactive Sketchfab model pinned next to them (sticky while you read), with a "Look for" prompt tied to that section. Includes real cadaveric prosections.
- **Muscle atlas:** 50 muscles with origin / insertion / nerve / action, searchable, with a self-test mode that hides fields.
- **Flashcards:** 216 hand-written + auto-generated muscle cards, with spaced "Got it / Again" tracking.
- **Quiz:** 151 hand-written MCQs with explanations + ~90 auto-generated nerve-supply and insertion questions with validated distractors.
- **High-yield page, full-text search, dark mode, progress tracking** (saved in the browser), keyboard shortcuts, mobile layout.

## Run locally

No build step. ES modules need to be served over HTTP (not `file://`):

```bash
npm run serve        # python3 -m http.server 8080 → http://localhost:8080
npm test             # node --test (Node 18+), no dependencies
```

## Architecture (MVC, vanilla JS, zero dependencies)

```
index.html                 app shell (header, <main> outlet, footer)
assets/css/styles.css      design tokens (light + dark), components, responsive rules
assets/js/
  main.js                  bootstrap: route table → controllers
  core/                    framework-free infrastructure
    router.js              hash router (GitHub Pages has no server routing); controllers return cleanup fns
    dom.js                 $, $$, delegated `on`, `esc` (HTML escaping for user input)
    format.js              content markup → HTML ({n:…} nerve, {a:…} artery, {v:…} vein, {m:…} muscle, {b:…} bone, **bold**)
  models/                  data + domain logic, no DOM access, imported directly by Node tests
    data/0X-*.js           lecture content (one module per lecture)
    data/models3d.js       GENERATED 3D model placements (see below)
    content.js             ContentModel: lectures, muscles, search index, nerve index, 3D lookups
    study.js               deck & quiz builders, auto-generated questions, seeded RNG
    nerves.js              nerve classification + "is this distractor unambiguously wrong?" rules
    progress.js            localStorage persistence with in-memory fallback (private mode safe)
  views/                   pure functions: view-model in → HTML string out (no state, no events)
  controllers/             route handlers: read models, render views, bind events, return cleanup
tests/                     data integrity, study engine, view rendering + XSS
scripts/sync-3d-models.mjs regenerates models3d.js from the Sketchfab API
```

**Rules of the road**

- Models never touch the DOM; views never hold state or bind events; controllers own both and must return a cleanup function (listeners, observers) that the router calls on navigation.
- Lecture content is trusted, in-repo HTML-ish markup rendered via `fmt`. **Anything user-supplied (search query, form input) must go through `esc`.**

## Editing content

Each lecture file exports `{ id, num, title, sections, muscles, flashcards, quiz }`. A section is a list of blocks:

| Block | Shape |
|-------|-------|
| paragraph / heading | `{ t: "p", h }`, `{ t: "h", h }` |
| lists | `{ t: "ul" \| "ol", items: [] }` |
| key–value | `{ t: "kv", items: [[key, value]] }` |
| table | `{ t: "table", head: [], rows: [[]], caption? }` |
| callout | `{ t: "box", k: "exam" \| "remember" \| "clinical" \| "tip" \| "case", title?, h \| items }` |
| Q&A | `{ t: "qa", items: [[question, answer]] }` |
| muscle cards | `{ t: "muscles", group }` (renders every muscle in that group) |

Quiz items: `{ q, o: [4 options], a: correctIndex, e: explanation }`. Run `npm test` after editing; the tests catch malformed tables, bad answer indexes, unknown muscle groups, unclassifiable nerves, and raw markup leaking into the page.

## 3D models

Models are embedded from [Sketchfab](https://sketchfab.com) with its official player and load only when the student presses the button. Authors are credited on every tile. To add or change one, edit `PICKS` in `scripts/sync-3d-models.mjs` (`[sectionId, uid, lookForPrompt]`) and run:

```bash
node scripts/sync-3d-models.mjs
```

The script verifies each model exists, that its embed responds and that the section id is real, then rewrites `models3d.js`.

## Deployment

Static files served by GitHub Pages from the `main` branch root. The source PDFs are deliberately git-ignored (faculty material, not redistributed).

## Disclaimer

Revision aid compiled from lecture material. Always check against your official lecture slides. Where the slides and standard texts differ, the notes flag it (e.g. the brachial artery's relation to the humerus in the Arm lecture).
