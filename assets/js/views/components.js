/**
 * Shared view components. Pure: data in, HTML string out. No state, no events.
 * Lecture content is trusted (authored in-repo) and rendered through `fmt`;
 * anything user-supplied must go through `esc`.
 */
import { fmt } from "../core/format.js";
import { esc } from "../core/dom.js";

const BOX_LABELS = { exam: "Exam focus", remember: "Remember", clinical: "Clinical", tip: "Study tip", case: "Clinical case" };

/** @param {number} percent 0..100 */
export const progressBar = (percent) =>
  `<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(percent)}"><span style="width:${Math.max(0, Math.min(100, percent))}%"></span></div>`;

/** @param {{ k: string, title?: string, h?: string, items?: string[] }} box */
export function boxView(box) {
  const body = box.items ? `<ul>${box.items.map((i) => `<li>${fmt(i)}</li>`).join("")}</ul>` : `<p>${fmt(box.h)}</p>`;
  return `<aside class="box box-${box.k}">
    <div class="box-label">${BOX_LABELS[box.k] || box.k}</div>
    ${box.title ? `<div class="box-title">${fmt(box.title)}</div>` : ""}
    ${body}
  </aside>`;
}

const FIELD_ROWS = [["origin", "Origin"], ["insertion", "Insertion"], ["nerve", "Nerve"], ["action", "Action"]];

/**
 * @param {object} m muscle (from ContentModel.muscles)
 * @param {{ showSource?: boolean }} [opts]
 */
export function muscleCard(m, { showSource = false } = {}) {
  const rows = FIELD_ROWS.filter(([key]) => m[key])
    .map(([key, label]) => `<dt>${label}</dt><dd class="f-${key}" data-field="${key}">${fmt(m[key])}</dd>`)
    .join("");
  return `<article class="mcard" id="m-${esc(m.id.replace(":", "-"))}">
    <header><h4>${esc(m.name)}</h4>${showSource ? `<a class="msrc" href="#/lecture/${m.lectureId}">${esc(m.lectureShort)}</a>` : `<span class="chip">${esc(m.group)}</span>`}</header>
    <dl>${rows}</dl>
    ${m.note ? `<p class="mnote">${fmt(m.note)}</p>` : ""}
  </article>`;
}

/** @param {object[]} muscles @param {{ showSource?: boolean }} [opts] */
export const muscleGrid = (muscles, opts) => `<div class="mgrid">${muscles.map((m) => muscleCard(m, opts)).join("")}</div>`;

/**
 * Render one content block.
 * @param {object} block
 * @param {(group: string) => object[]} musclesOf resolves a muscles block to muscle records
 */
export function blockView(block, musclesOf) {
  switch (block.t) {
    case "p": return `<p>${fmt(block.h)}</p>`;
    case "h": return `<h3>${fmt(block.h)}</h3>`;
    case "ul": return `<ul>${block.items.map((i) => `<li>${fmt(i)}</li>`).join("")}</ul>`;
    case "ol": return `<ol>${block.items.map((i) => `<li>${fmt(i)}</li>`).join("")}</ol>`;
    case "kv": return `<dl class="kv">${block.items.map(([k, v]) => `<dt>${fmt(k)}</dt><dd>${fmt(v)}</dd>`).join("")}</dl>`;
    case "table": return tableView(block);
    case "box": return boxView(block);
    case "qa": return `<div class="qa">${block.items.map(([q, a]) => `<details><summary>${fmt(q)}</summary><div class="ans">${fmt(a)}</div></details>`).join("")}</div>`;
    case "muscles": return muscleGrid(musclesOf(block.group));
    default: return "";
  }
}

function tableView(block) {
  const head = `<thead><tr>${block.head.map((h) => `<th scope="col">${fmt(h)}</th>`).join("")}</tr></thead>`;
  const body = `<tbody>${block.rows.map((row) => `<tr>${row.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody>`;
  return `<div class="table-wrap"><table>${block.caption ? `<caption>${fmt(block.caption)}</caption>` : ""}${head}${body}</table></div>`;
}

/**
 * Lecture <option>s for scope selectors.
 * @param {object[]} lectures @param {string} selected "all" or lecture id
 */
export const lectureOptions = (lectures, selected) =>
  `<option value="all"${selected === "all" ? " selected" : ""}>All lectures</option>` +
  lectures.map((l) => `<option value="${l.id}"${l.id === selected ? " selected" : ""}>${l.num}. ${esc(l.short)}</option>`).join("");

/** Colour legend matching the inline tags. */
export const legend = () => `<div class="legend" aria-label="Colour legend">
  <span class="tag tag-n">Nerve</span><span class="tag tag-a">Artery</span><span class="tag tag-v">Vein</span><span class="tag tag-m">Muscle</span><span class="tag tag-b">Bone</span>
</div>`;
