// Regenerates assets/js/models/data/models3d.js from the Sketchfab API.
// Usage: node scripts/sync-3d-models.mjs   (verifies each model exists and its embed player responds)
import { writeFile } from "node:fs/promises";

// [sectionId, sketchfabUid, "what to look for" in THIS section]. One model per section, shown beside the notes.
const PICKS = {
  back: [
    ["back-muscles", "eb8d791daff54a788673dc99edec377c", "Rotate to the back: find trapezius (upper triangle), latissimus dorsi (lower triangle), then levator scapulae and the rhomboids underneath."],
    ["auscultation", "eb8d791daff54a788673dc99edec377c", "Locate the gap between trapezius, latissimus dorsi and the medial border of the scapula: the triangle of auscultation."],
    ["deltoid", "f737a011a55240d1a3c4a868d589e165", "Follow anterior, middle and posterior fibres from clavicle / acromion / spine down to the deltoid tuberosity."],
    ["scapular", "7fdbc71c04104c1aa5d84c654b900d10", "Name each muscle running from scapula to humerus and trace it to the greater or lesser tuberosity."],
    ["rotator-cuff", "25816dd910324d2d813d40030f7f7927", "Spot the SITS tendons fused to the capsule, then look underneath: no cuff inferiorly, so dislocation goes inferiorly."],
    ["anastomosis", "35a61d7aefd24a1ea791ba743d381fae", "Find the subclavian → axillary artery and the branches around the scapula (suprascapular, subscapular, circumflex humerals)."],
    ["nerves", "5b9f3e288ab043c3ada97c04d53acddd", "Follow the axillary nerve around the surgical neck of the humerus; find the suprascapular nerve heading to the scapula."],
    ["spaces", "5671210f79784619a9232605b0a4e6aa", "Find teres minor, teres major and the long head of triceps: the borders of the quadrangular and triangular spaces."],
    ["clinical", "4a48c50a069d4a04a48183f210861a04", "Play the abduction animation: this is the movement a patient with a torn rotator cuff cannot start."]
  ],
  axilla: [
    ["boundaries", "b83c158d82de44248eeb8b2757fd3e1b", "Anterior wall: pectoralis major (made transparent) over pectoralis minor."],
    ["wall-muscles", "ba41120f7b744fbfa91c5a87ae5222cc", "Serratus anterior forms the medial wall: see its digitations on the upper 8 ribs running to the medial border of the scapula."],
    ["contents", "932dbecba80541ce9168cef085fc15fa", "Real plastinated prosection: identify the axillary artery, vein and cords inside the axilla."],
    ["plexus", "3e64bbde9e9d40248aed670b9546a238", "Trace roots → trunks → divisions → cords → the five terminal branches."],
    ["artery", "35a61d7aefd24a1ea791ba743d381fae", "Find the axillary artery between the 1st rib and teres major and its branches around the shoulder."],
    ["vein", "7691d2b07f7c42de9c037013b5c2f408", "Basilic vein + brachial veins form the axillary vein; follow it up to the 1st rib."],
    ["nodes", "42054970b1ae48e5866ffafea938a0cb", "CT reconstruction: see the axillary lymph node groups between the breast and the axillary vein."],
    ["lymph-limb", "692181961b924803b68f05ae5c55b7a8", "Superficial lymph follows these veins: lateral side with the cephalic vein, medial side with the basilic vein."]
  ],
  arm: [
    ["fascia", "7b2dc297c88a4d8e91be98250c66f2cb", "Separate the anterior (flexor) and posterior (extensor) compartments of the arm."],
    ["anterior-muscles", "5671210f79784619a9232605b0a4e6aa", "Biceps (two heads), coracobrachialis and brachialis in front; triceps behind."],
    ["anterior-nerves", "19b6045f0f6041fe94a5628d09bbceeb", "Follow the musculocutaneous, median, ulnar and radial nerves down the arm."],
    ["brachial", "35a61d7aefd24a1ea791ba743d381fae", "Brachial artery from teres major to its division into radial and ulnar arteries at the elbow."],
    ["posterior", "fcdda8750c014c1f96c7023ab3062740", "Radial nerve spiralling around the back of the humerus in the spiral groove."],
    ["cubital", "6453fc58d9de400ea5dab8dd1f903a4c", "Real cadaver: find (medial → lateral) median nerve, brachial artery, biceps tendon."],
    ["veins", "692181961b924803b68f05ae5c55b7a8", "Cephalic (lateral), basilic (medial) and the median cubital vein joining them in front of the elbow."],
    ["venipuncture", "7691d2b07f7c42de9c037013b5c2f408", "The antecubital veins used for venipuncture: cephalic, median cubital, basilic."]
  ],
  "ant-forearm": [
    ["bones", "15e32aa5e99b458eb7a92a81f602e073", "Animated pronation/supination: the radius rotates around the fixed ulna."],
    ["compartments", "a4732a5b87ca4f89a3c2d865005ec8d1", "See how the forearm muscle compartments change between supination and pronation."],
    ["flexors", "fe31b96d3c3142e3948d3c6477950109", "Superficial flexors fanning from the medial epicondyle: pronator teres, FCR, palmaris longus, FCU."],
    ["flexor-muscles", "463edeaa8db94bbc975e0dce75dcd795", "Peel down to FDS, then FDP and FPL, with pronator quadratus at the wrist."],
    ["arteries", "35a61d7aefd24a1ea791ba743d381fae", "Radial (lateral) and ulnar (medial) arteries from the cubital fossa to the palm."],
    ["ulnar-nerve", "5f2e3d72bf2d4f4686c0acd58ffea2c8", "Ulnar nerve behind the medial epicondyle, then between FCU heads down to the wrist."],
    ["median-nerve", "43a6e91cab074eada36c4e818809187d", "Median nerve between pronator teres heads, then between FDS and FDP into the carpal tunnel."],
    ["carpal-tunnel", "c6426facd0d1402db195a3115605c307", "Real dissection: median nerve and flexor tendons deep to the flexor retinaculum."]
  ],
  "post-forearm": [
    ["posterior", "424f59905a8340878e57e0c3edac6a19", "Superficial extensors from the lateral epicondyle; deep thumb extensors underneath."],
    ["lateral", "a4732a5b87ca4f89a3c2d865005ec8d1", "Brachioradialis and ECRL from the lateral supracondylar ridge, compared in supination vs pronation."],
    ["extensor-muscles", "6dd851d018f34892800b83ca418ccb52", "Trace each extensor tendon to its metacarpal, phalanx or extensor expansion."],
    ["radial-nerve", "0baa6e557309436da9b716f6feba5c62", "Radial nerve dividing at the lateral epicondyle into superficial and deep (posterior interosseous) branches."],
    ["snuffbox", "0ae20740d66a451da193c0a9be02e736", "Find the scaphoid at the base of the thumb: the floor of the anatomical snuffbox."],
    ["retinacula", "18aa3699775f46b99ca101b70e0cd4f0", "Real dissection: the flexor retinaculum with the ulnar nerve and artery passing superficial to it."]
  ],
  hand: [
    ["palm-overview", "9b0e71a6dc8f493499a1d59e073c31ba", "Orient yourself: palmar aponeurosis, long flexor tendons, thenar and hypothenar eminences."],
    ["flexor-retinaculum", "c6426facd0d1402db195a3115605c307", "Real dissection of the carpal tunnel: median nerve and flexor tendons under the retinaculum."],
    ["bones", "40d117596ccc4373b1995ea290db49df", "8 carpals (She Looks Too Pretty, Try To Catch Her), 5 metacarpals, 14 phalanges."],
    ["skin-fascia", "18aa3699775f46b99ca101b70e0cd4f0", "Palmar aponeurosis and the structures lying superficial to the flexor retinaculum."],
    ["intrinsic", "7342393113594895948952f60190e16b", "Thenar and hypothenar muscles, then lumbricals (on FDP tendons) and the interossei between metacarpals."],
    ["grip", "cd8e31d740824d6b93791d52d53be525", "Hand sculpt over its skeleton: see how bones shape the palm for power and precision grips."],
    ["nerves", "9b0e71a6dc8f493499a1d59e073c31ba", "Follow the median nerve through the carpal tunnel and the ulnar nerve beside the pisiform."],
    ["arteries", "a3754cb0d59f458e991006d71423f90e", "Radial and ulnar arteries entering the hand to form the palmar arches."],
    ["snuffbox", "0ae20740d66a451da193c0a9be02e736", "Scaphoid at the radial side of the wrist: the floor of the anatomical snuffbox."],
    ["arches", "a3754cb0d59f458e991006d71423f90e", "Superficial palmar arch (mainly ulnar) and its digital branches; the deep arch lies proximal to it."],
    ["pulses", "35a61d7aefd24a1ea791ba743d381fae", "Point to each pulse site on the arterial tree: axillary, brachial, radial, ulnar."],
    ["clinical", "873128d4ea594ad489cffb6cbf361703", "Dorsal venous network draining into cephalic (lateral) and basilic (medial) veins."]
  ]
};

const cache = new Map();
async function describe(uid) {
  if (cache.has(uid)) return cache.get(uid);
  const p = describeUncached(uid);
  cache.set(uid, p);
  return p;
}

async function describeUncached(uid) {
  const res = await fetch(`https://api.sketchfab.com/v3/models/${uid}`);
  if (!res.ok) throw new Error(`${uid}: API ${res.status}`);
  const m = await res.json();
  const embed = await fetch(`https://sketchfab.com/models/${uid}/embed`, { method: "HEAD" });
  if (!embed.ok) throw new Error(`${uid}: embed ${embed.status}`);
  const imgs = [...m.thumbnails.images].sort((a, b) => a.width - b.width);
  const thumb = (imgs.find((i) => i.width >= 400) || imgs.at(-1)).url;
  return {
    uid,
    title: m.name.trim().replace(/[\s.]+$/, ""),
    author: m.user.displayName,
    authorUrl: m.user.profileUrl,
    url: m.viewerUrl,
    thumb,
    animated: Boolean(m.animationCount)
  };
}

// Validate section ids against the lecture data so a typo fails here, not silently in the UI.
const lectures = Object.fromEntries(await Promise.all(Object.keys(PICKS).map(async (id) => {
  const files = { back: "01-back", axilla: "02-axilla", arm: "03-arm", "ant-forearm": "04-ant-forearm", "post-forearm": "05-post-forearm", hand: "06-hand" };
  const mod = await import(new URL(`../assets/js/models/data/${files[id]}.js`, import.meta.url));
  return [id, new Set(mod.default.sections.map((s) => s.id))];
})));

const out = {};
for (const [lecture, items] of Object.entries(PICKS)) {
  out[lecture] = await Promise.all(items.map(async ([sectionId, uid, focus]) => {
    if (!lectures[lecture].has(sectionId)) throw new Error(`${lecture}: unknown section "${sectionId}"`);
    return { sectionId, ...(await describe(uid)), focus };
  }));
  console.log(lecture, out[lecture].map((x) => `${x.sectionId} → ${x.title}`));
}
await writeFile(
  new URL("../assets/js/models/data/models3d.js", import.meta.url),
  `/* GENERATED by scripts/sync-3d-models.mjs. Do not edit by hand; edit PICKS there and re-run.
   3D anatomy models hosted by Sketchfab, shown via its official embed player, authors credited in the UI.
   Each entry is pinned to a note section (sectionId) and rendered beside that section. */
export default ${JSON.stringify(out, null, 2)};
`
);
console.log("written", Object.values(out).flat().length, "section models,", cache.size, "unique models");
