/* Lecture 5 — Posterior Forearm (Dr. Rasha Alshali) */
export default {
  id: "post-forearm",
  num: 5,
  title: "Posterior & Lateral Forearm",
  short: "Posterior Forearm",
  lecturer: "Dr. Rasha Alshali",
  blurb: "Extensor & lateral compartments, radial nerve and its branches, anatomical snuffbox, flexor & extensor retinacula.",
  sections: [
    {
      id: "posterior",
      title: "Posterior compartment (extensors)",
      blocks: [
        { t: "table", head: ["Group", "Muscles"], rows: [
          ["**Superficial**", "{m:Extensor carpi radialis brevis}, {m:Extensor carpi ulnaris}, {m:Extensor digitorum}, {m:Extensor digiti minimi}, {m:Anconeus}"],
          ["**Deep**", "{m:Extensor indicis}, {m:Extensor pollicis brevis}, {m:Extensor pollicis longus}, {m:Abductor pollicis longus}, {m:Supinator}"]
        ] },
        { t: "kv", items: [
          ["Common origin", "Superficial group: common tendon attached to the **lateral epicondyle** of the humerus"],
          ["Blood supply", "{a:Posterior} & {a:anterior interosseous arteries} (from the ulnar artery)"],
          ["Nerve supply", "{n:Deep branch of the radial nerve}, **except** {m:anconeus} → {n:radial nerve} itself"]
        ] }
      ]
    },
    {
      id: "lateral",
      title: "Lateral compartment",
      blocks: [
        { t: "p", h: "The lateral fascial compartment may be considered **part of the posterior compartment**. Its two muscles share a common origin from the **lateral supracondylar ridge** of the humerus." },
        { t: "kv", items: [
          ["Muscles", "1. {m:Brachioradialis} · 2. {m:Extensor carpi radialis longus}"],
          ["Blood supply", "{a:Radial artery}, {a:brachial artery}"],
          ["Nerve supply", "{n:Radial nerve}"]
        ] },
        { t: "muscles", group: "Lateral compartment" },
        { t: "box", k: "remember", title: "Nerve supply of posterior + lateral compartments", h: "**All** by the {n:deep branch of the radial nerve} **EXCEPT** {m:brachioradialis}, {m:ECRL} & {m:anconeus}, which are supplied by the {n:radial nerve} (main trunk)." }
      ]
    },
    {
      id: "extensor-muscles",
      title: "Extensor muscles one by one",
      blocks: [
        { t: "h", h: "Superficial group (from the lateral epicondyle)" },
        { t: "muscles", group: "Superficial extensors" },
        { t: "h", h: "Deep group" },
        { t: "muscles", group: "Deep extensors" },
        { t: "box", k: "tip", title: "Why does the index finger have its own extensor?", h: "{m:Extensor indicis} lets the index finger **extend independently** from the other fingers." },
        { t: "h", h: "Insertions of long tendons in the hand (back)" },
        { t: "ul", items: [
          "1st metacarpal base → {m:Abductor pollicis longus}",
          "2nd metacarpal base → {m:ECRL} · 3rd metacarpal base → {m:ECRB} · 5th metacarpal base → {m:ECU}",
          "Proximal phalanx of thumb → {m:EPB} · Distal phalanx of thumb → {m:EPL}",
          "Extensor expansions (middle & distal phalanges) → {m:Extensor digitorum}, {m:extensor indicis}, {m:extensor digiti minimi}"
        ] }
      ]
    },
    {
      id: "radial-nerve",
      title: "Radial nerve in the forearm",
      blocks: [
        { t: "p", h: "The nerve of the **posterior & lateral compartments** of the forearm." },
        { t: "ol", items: [
          "Passes forward into the **cubital fossa**.",
          "Passes downward **in front of the lateral epicondyle**, between **brachialis (medially)** and **brachioradialis & ECRL (laterally)**.",
          "At the level of the lateral epicondyle it divides into **superficial & deep branches**."
        ] },
        { t: "h", h: "Branches in the forearm" },
        { t: "kv", items: [
          ["Muscular (main trunk)", "{m:Brachioradialis}, {m:ECRL}, small branch to {m:brachialis}, + {m:anconeus}"],
          ["Deep branch", "Arises in front of the lateral epicondyle, enters the posterior compartment by **piercing the supinator**, and continues as the **posterior interosseous nerve**, descending with the {a:posterior interosseous artery}. Supplies the muscles of the posterior compartment and the wrist & carpal joints"],
          ["Superficial branch", "The **direct continuation** of the radial nerve; lies **lateral to the radial artery**. In the distal forearm it passes backward to the posterior surface of the wrist to supply the skin (see Hand)"]
        ] },
        { t: "box", k: "exam", title: "REMEMBER!!", items: [
          "The **Anterior** interosseous nerve is a branch of the **Median** nerve, with the anterior interosseous artery.",
          "The **Posterior** interosseous nerve is the direct continuation of the **Deep branch of Radial** nerve, with the posterior interosseous artery.",
          "The **Superficial branch of the radial nerve** is the direct continuation of the **Radial** nerve, with the radial artery."
        ] }
      ]
    },
    {
      id: "snuffbox",
      title: "Anatomical snuffbox",
      blocks: [
        { t: "p", h: "A **triangular skin depression on the lateral side of the wrist**, appearing when the thumb is **abducted & extended**." },
        { t: "kv", items: [
          ["Laterally", "Tendons of {m:abductor pollicis longus (AbPL)} & {m:extensor pollicis brevis (EPB)}"],
          ["Medially", "Tendon of {m:extensor pollicis longus (EPL)}"],
          ["Floor", "{b:Scaphoid} bone"],
          ["Clinical importance", "Site to feel the pulse of the {a:radial artery}"]
        ] },
        { t: "p", h: "See the Hand lecture for the roof (cephalic vein & superficial radial nerve) and scaphoid fracture tenderness." }
      ]
    },
    {
      id: "retinacula",
      title: "The retinacula",
      blocks: [
        { t: "p", h: "The flexor & extensor retinacula are **strong bands of deep fascia** that hold the long flexor & extensor tendons in position at the wrist." },
        { t: "h", h: "Flexor retinaculum" },
        { t: "p", h: "A condensation of deep fascia in front of the wrist; with the carpal bones it forms a tunnel, the **carpal tunnel**. Attachments: medially **pisiform & hamate**, laterally **scaphoid & trapezium** (Hand lecture)." },
        { t: "table", head: ["Superficial to the flexor retinaculum", "Deep to the flexor retinaculum (carpal tunnel)"], rows: [
          ["Palmar cutaneous branch of {n:ulnar nerve}", "{m:FDS} tendons"],
          ["Palmar cutaneous branch of {n:median nerve}", "{m:FDP} tendons"],
          ["{m:Palmaris longus} tendon", "{n:Median nerve}"],
          ["{a:Ulnar artery}", "{m:FPL} tendon"],
          ["{n:Ulnar nerve}", "{m:FCR} tendon"]
        ] },
        { t: "h", h: "Extensor retinaculum" },
        { t: "p", h: "A condensation of deep fascia on the posterior aspect of the lower forearm & wrist. It stretches across the back of the wrist and converts the grooves on the posterior surface of the distal radius & ulna into **six separate tunnels** for the extensor tendons." },
        { t: "table", head: ["Superficial to the extensor retinaculum", "Deep to the extensor retinaculum"], rows: [
          ["{v:Basilic} & {v:cephalic} veins", "Extensor tendons (6 compartments)"],
          ["Superficial branches of {n:radial nerve}", "{a:Radial artery}"],
          ["Posterior (dorsal) cutaneous branch of {n:ulnar nerve}", ""]
        ] },
        { t: "h", h: "The six extensor compartments (lateral → medial)" },
        { t: "table", head: ["#", "Contents"], rows: [
          ["**1**", "{m:Abductor pollicis longus} + {m:Extensor pollicis brevis}"],
          ["**2**", "{m:Extensor carpi radialis longus} + {m:Extensor carpi radialis brevis}"],
          ["**3**", "{m:Extensor pollicis longus}"],
          ["**4**", "{m:Extensor digitorum} + {m:Extensor indicis} (+ terminal posterior interosseous nerve & artery)"],
          ["**5**", "{m:Extensor digiti minimi}"],
          ["**6**", "{m:Extensor carpi ulnaris}"]
        ] },
        { t: "box", k: "tip", title: "Memory hook", h: "Counts per compartment, lateral → medial: **2 · 2 · 1 · 2 · 1 · 1**." }
      ]
    }
  ],
  muscles: [
    { name: "Brachioradialis", group: "Lateral compartment",
      origin: "Lateral supracondylar ridge of humerus",
      insertion: "Base of styloid process of radius",
      nerve: "Radial nerve (main trunk)",
      action: "Flexion of elbow joint; rotates forearm to the midprone position",
      note: "Lateral boundary of the cubital fossa." },
    { name: "Extensor carpi radialis longus", group: "Lateral compartment",
      origin: "Lateral supracondylar ridge of humerus",
      insertion: "Posterior surface of base of 2nd metacarpal",
      nerve: "Radial nerve (main trunk)",
      action: "Extension & abduction (radial / lateral deviation) of hand at wrist" },
    { name: "Extensor carpi radialis brevis", group: "Superficial extensors",
      origin: "Lateral epicondyle of humerus",
      insertion: "Base of 3rd metacarpal",
      nerve: "Deep branch of radial nerve",
      action: "Extension & abduction (lateral deviation) of hand at wrist" },
    { name: "Extensor carpi ulnaris", group: "Superficial extensors",
      origin: "Lateral epicondyle of humerus & posterior border of ulna",
      insertion: "Base of 5th metacarpal",
      nerve: "Deep branch of radial nerve",
      action: "Extension & adduction (medial deviation) of hand at wrist" },
    { name: "Extensor digitorum", group: "Superficial extensors",
      origin: "Lateral epicondyle of humerus",
      insertion: "Extensor expansion → middle & distal phalanges of medial four fingers",
      nerve: "Deep branch of radial nerve",
      action: "Extension of fingers & hand" },
    { name: "Extensor digiti minimi", group: "Superficial extensors",
      origin: "Lateral epicondyle of humerus",
      insertion: "Extensor expansion of little finger",
      nerve: "Deep branch of radial nerve",
      action: "Extension of metacarpophalangeal & interphalangeal joints of little finger" },
    { name: "Anconeus", group: "Superficial extensors",
      origin: "Lateral epicondyle of humerus",
      insertion: "Lateral surface of olecranon process of ulna",
      nerve: "Radial nerve (main trunk)",
      action: "Extension of elbow joint" },
    { name: "Extensor indicis", group: "Deep extensors",
      origin: "Lower posterior surface of shaft of ulna",
      insertion: "Extensor expansion of index finger",
      nerve: "Deep branch of radial nerve (posterior interosseous)",
      action: "Extends metacarpophalangeal & interphalangeal joints of index finger" },
    { name: "Abductor pollicis longus", group: "Deep extensors",
      origin: "Posterior surface of shafts of radius & ulna",
      insertion: "Base of 1st metacarpal",
      nerve: "Deep branch of radial nerve (posterior interosseous)",
      action: "Abducts & extends the thumb",
      note: "Lateral boundary of the snuffbox (with EPB)." },
    { name: "Extensor pollicis brevis", group: "Deep extensors",
      origin: "Lower posterior surface of shaft of radius",
      insertion: "Base of proximal phalanx of thumb",
      nerve: "Deep branch of radial nerve (posterior interosseous)",
      action: "Extends metacarpophalangeal joint of thumb (proximal phalanx)" },
    { name: "Extensor pollicis longus", group: "Deep extensors",
      origin: "Posterior surface of shaft of ulna",
      insertion: "Base of distal phalanx of thumb",
      nerve: "Deep branch of radial nerve (posterior interosseous)",
      action: "Extension of distal phalanx of thumb",
      note: "Medial boundary of the snuffbox." },
    { name: "Supinator", group: "Deep extensors",
      origin: "Lateral epicondyle of humerus & posterior upper part of ulna (supinator crest)",
      insertion: "Neck & upper shaft of radius",
      nerve: "Deep branch of radial nerve (which pierces it)",
      action: "Supination of forearm",
      note: "Floor of the cubital fossa (laterally)." }
  ],
  flashcards: [
    ["Superficial group of the posterior forearm?", "ECRB, ECU, extensor digitorum, extensor digiti minimi, anconeus"],
    ["Deep group of the posterior forearm?", "Extensor indicis, EPB, EPL, APL, supinator"],
    ["Common origin of superficial extensors?", "Lateral epicondyle of humerus"],
    ["Common origin of brachioradialis & ECRL?", "Lateral supracondylar ridge of humerus"],
    ["Blood supply of the posterior compartment?", "Posterior & anterior interosseous arteries (from ulnar artery)"],
    ["Blood supply of the lateral compartment?", "Radial & brachial arteries"],
    ["Which posterior/lateral muscles are NOT supplied by the deep branch of radial?", "Brachioradialis, ECRL, anconeus (main radial nerve)"],
    ["Insertion & action of brachioradialis?", "Base of styloid process of radius; elbow flexion & rotates forearm to midprone"],
    ["Insertion of ECRL / ECRB / ECU?", "2nd MC base / 3rd MC base / 5th MC base"],
    ["Action of ECU?", "Extension & adduction (medial deviation) of the wrist"],
    ["Insertion of extensor digitorum?", "Extensor expansion → middle & distal phalanges of medial 4 fingers"],
    ["Insertion & action of anconeus?", "Lateral surface of olecranon; extension of elbow"],
    ["Insertion of APL / EPB / EPL?", "1st MC base / base of proximal phalanx of thumb / base of distal phalanx of thumb"],
    ["Origin & insertion of supinator?", "Lateral epicondyle & supinator crest of ulna → neck & upper shaft of radius"],
    ["Why does the index finger have its own extensor?", "To extend independently of the other fingers (extensor indicis)"],
    ["Where does the radial nerve divide?", "At the level of the lateral epicondyle (in front of it): superficial & deep branches"],
    ["What does the deep branch of radial pierce?", "The supinator"],
    ["Continuation of the deep branch of radial nerve?", "Posterior interosseous nerve (with posterior interosseous artery)"],
    ["Anterior interosseous nerve is a branch of?", "Median nerve"],
    ["Superficial branch of radial nerve relation to radial artery?", "Lateral to the radial artery"],
    ["Boundaries of the anatomical snuffbox?", "Lateral: APL & EPB · Medial: EPL · Floor: scaphoid"],
    ["Clinical importance of the snuffbox?", "Radial pulse (+ scaphoid fracture tenderness)"],
    ["Structures superficial to the flexor retinaculum?", "Palmar cutaneous branches of ulnar & median nerves, palmaris longus tendon, ulnar artery & nerve"],
    ["Structures deep to the flexor retinaculum?", "FDS & FDP tendons, median nerve, FPL tendon, FCR tendon"],
    ["Structures superficial to the extensor retinaculum?", "Basilic & cephalic veins, superficial radial nerve, dorsal cutaneous branch of ulnar"],
    ["Structures deep to the extensor retinaculum?", "Extensor tendons (6 compartments) & radial artery"],
    ["The six extensor compartments?", "1 APL+EPB · 2 ECRL+ECRB · 3 EPL · 4 ED+EI · 5 EDM · 6 ECU"]
  ],
  quiz: [
    { q: "The superficial extensors share a common origin from the:", o: ["Medial epicondyle", "Lateral epicondyle", "Lateral supracondylar ridge", "Olecranon"], a: 1, e: "Brachioradialis & ECRL arise from the lateral supracondylar ridge instead." },
    { q: "Which muscle is supplied by the radial nerve main trunk, not its deep branch?", o: ["ECRB", "Supinator", "Anconeus", "ECU"], a: 2, e: "Exceptions: brachioradialis, ECRL, anconeus." },
    { q: "Brachioradialis inserts into the:", o: ["Radial tuberosity", "Base of styloid process of radius", "Base of 2nd MC", "Neck of radius"], a: 1, e: "Flexes the elbow & brings forearm to midprone." },
    { q: "ECRL inserts into the base of the:", o: ["1st metacarpal", "2nd metacarpal", "3rd metacarpal", "5th metacarpal"], a: 1, e: "ECRB → 3rd; ECU → 5th; APL → 1st." },
    { q: "Extensor carpi ulnaris produces:", o: ["Extension & abduction", "Extension & adduction", "Flexion & adduction", "Supination"], a: 1, e: "Medial (ulnar) deviation + extension." },
    { q: "Which muscle extends the elbow?", o: ["Supinator", "Anconeus", "ECRB", "Brachioradialis"], a: 1, e: "Inserts on the lateral surface of the olecranon." },
    { q: "Extensor pollicis brevis inserts into the:", o: ["1st metacarpal", "Proximal phalanx of thumb", "Distal phalanx of thumb", "Extensor expansion"], a: 1, e: "EPL → distal phalanx; APL → 1st MC." },
    { q: "Which muscle originates from the posterior surfaces of BOTH radius and ulna?", o: ["EPL", "EPB", "Abductor pollicis longus", "Extensor indicis"], a: 2, e: "EPB: radius only. EPL & EI: ulna." },
    { q: "Supinator inserts into the:", o: ["Radial tuberosity", "Neck & upper shaft of radius", "Lateral epicondyle", "Coronoid process"], a: 1, e: "Arises from lateral epicondyle & supinator crest of ulna." },
    { q: "The deep branch of the radial nerve reaches the back of the forearm by:", o: ["Passing between heads of pronator teres", "Piercing the supinator", "Passing through the lateral septum", "Passing under the extensor retinaculum"], a: 1, e: "Then continues as the posterior interosseous nerve." },
    { q: "The posterior interosseous nerve is:", o: ["A branch of median", "The continuation of the deep branch of radial", "The continuation of the superficial radial", "A branch of ulnar"], a: 1, e: "Anterior interosseous = branch of median." },
    { q: "The superficial branch of the radial nerve lies ___ to the radial artery:", o: ["Medial", "Lateral", "Anterior", "Posterior"], a: 1, e: "Radial artery is medial to the superficial branch." },
    { q: "The radial nerve divides into superficial & deep branches at the level of the:", o: ["Spiral groove", "Lateral epicondyle", "Neck of radius", "Wrist"], a: 1, e: "In front of the lateral epicondyle, between brachialis and brachioradialis/ECRL." },
    { q: "The medial boundary of the anatomical snuffbox is:", o: ["APL", "EPB", "EPL", "ECRL"], a: 2, e: "Lateral: APL & EPB. Floor: scaphoid." },
    { q: "The floor of the anatomical snuffbox is the:", o: ["Lunate", "Trapezium", "Scaphoid", "Radial styloid"], a: 2, e: "Tenderness here = scaphoid fracture." },
    { q: "Which structure passes SUPERFICIAL to the flexor retinaculum?", o: ["Median nerve", "FPL tendon", "Ulnar nerve", "FCR tendon"], a: 2, e: "Ulnar nerve & artery, palmaris longus, palmar cutaneous branches are superficial." },
    { q: "Which passes DEEP to the extensor retinaculum?", o: ["Cephalic vein", "Superficial radial nerve", "Radial artery", "Dorsal branch of ulnar nerve"], a: 2, e: "Deep: extensor tendons + radial artery." },
    { q: "The 1st extensor compartment contains:", o: ["ECRL & ECRB", "APL & EPB", "EPL", "ECU"], a: 1, e: "1 APL+EPB · 2 ECRL+ECRB · 3 EPL · 4 ED+EI · 5 EDM · 6 ECU." },
    { q: "Extensor pollicis longus runs in compartment:", o: ["1", "2", "3", "4"], a: 2, e: "Compartment 3 (alone)." },
    { q: "Extensor indicis runs in compartment:", o: ["3", "4", "5", "6"], a: 1, e: "With extensor digitorum (and terminal posterior interosseous nerve/artery)." },
    { q: "Blood supply of the posterior compartment of the forearm:", o: ["Radial artery only", "Posterior & anterior interosseous arteries", "Brachial artery", "Profunda brachii"], a: 1, e: "Both from the ulnar artery (via common interosseous)." }
  ]
};
