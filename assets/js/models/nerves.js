/**
 * Nerve classification for muscle nerve-supply strings.
 * Used to (1) group muscles by nerve on the High-Yield page and
 * (2) choose quiz distractors that are unambiguously wrong.
 *
 * Order matters: specific phrases are matched (and consumed) before generic ones,
 * so "Deep branch of radial nerve" is not also counted as plain "radial".
 */
const NERVES = [
  { key: "accessory", family: "accessory", label: "Accessory nerve (CN XI)", match: ["accessory"] },
  { key: "thoracodorsal", family: "thoracodorsal", label: "Thoracodorsal nerve", match: ["thoracodorsal"] },
  { key: "dorsal-scapular", family: "dorsal-scapular", label: "Dorsal scapular nerve", match: ["dorsal scapular"] },
  { key: "long-thoracic", family: "long-thoracic", label: "Long thoracic nerve", match: ["long thoracic"] },
  { key: "suprascapular", family: "suprascapular", label: "Suprascapular nerve", match: ["suprascapular"] },
  { key: "subscapular", family: "subscapular", label: "Subscapular nerves (upper / lower)", match: ["subscapular"] },
  { key: "pectoral", family: "pectoral", label: "Pectoral nerves (medial / lateral)", match: ["pectoral"] },
  { key: "subclavius", family: "subclavius", label: "Nerve to subclavius", match: ["subclavius"] },
  { key: "axillary", family: "axillary", label: "Axillary nerve", match: ["axillary"] },
  { key: "musculocutaneous", family: "musculocutaneous", label: "Musculocutaneous nerve", match: ["musculocutaneous"] },
  { key: "ain", family: "median", label: "Anterior interosseous nerve (median)", match: ["median nerve (anterior interosseous branch)", "anterior interosseous nerve (median)", "anterior interosseous"] },
  { key: "deep-radial", family: "radial", label: "Deep branch of radial (posterior interosseous)", match: ["deep branch of radial"] },
  { key: "deep-ulnar", family: "ulnar", label: "Deep branch of ulnar nerve", match: ["deep branch of ulnar", "ulnar nerve (deep branch)"] },
  { key: "superficial-ulnar", family: "ulnar", label: "Superficial branch of ulnar nerve", match: ["superficial branch of ulnar"] },
  { key: "median", family: "median", label: "Median nerve", match: ["median"] },
  { key: "radial", family: "radial", label: "Radial nerve (main trunk)", match: ["radial"] },
  { key: "ulnar", family: "ulnar", label: "Ulnar nerve", match: ["ulnar"] }
];

const BY_KEY = Object.fromEntries(NERVES.map((n) => [n.key, n]));

/** Ordered list of nerve definitions (for display order). */
export const NERVE_ORDER = NERVES.map((n) => n.key);

/** @param {string} key */
export const nerveInfo = (key) => BY_KEY[key];

/**
 * All nerve keys mentioned in a nerve-supply string.
 * @param {string} nerveText
 * @returns {string[]}
 */
export function classifyNerve(nerveText) {
  let rest = ` ${String(nerveText || "").toLowerCase()} `;
  const keys = [];
  for (const nerve of NERVES) {
    const hit = nerve.match.find((m) => rest.includes(m));
    if (!hit) continue;
    keys.push(nerve.key);
    nerve.match.forEach((m) => { rest = rest.split(m).join(" "); });
  }
  return keys;
}

/**
 * Can `distractor` be offered as a WRONG answer when `correct` is the right nerve?
 * Same-family nerves are excluded (e.g. "Median" vs "Anterior interosseous" is arguable),
 * except explicit branch contrasts that the lectures teach directly.
 * @param {{ keys: string[], label: string }} correct
 * @param {{ keys: string[], label: string }} distractor
 */
export function isSafeNerveDistractor(correct, distractor) {
  if (correct.keys.length !== 1 || distractor.keys.length !== 1) return false;
  const [c] = correct.keys;
  const [d] = distractor.keys;
  if (c === d) return false;
  if (BY_KEY[c].family !== BY_KEY[d].family) return true;

  const pair = [c, d].sort().join("|");
  if (pair === "deep-ulnar|superficial-ulnar") return true;
  if (pair === "deep-radial|radial") {
    const trunkLabel = c === "radial" ? correct.label : distractor.label;
    return /main trunk/i.test(trunkLabel);
  }
  return false;
}
