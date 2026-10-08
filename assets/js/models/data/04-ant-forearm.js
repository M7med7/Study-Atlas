/* Lecture 4 — Anterior Forearm (Dr. Rasha Alshali) */
export default {
  id: "ant-forearm",
  num: 4,
  title: "Bones of the Forearm & Anterior Forearm",
  short: "Anterior Forearm",
  lecturer: "Dr. Rasha Alshali",
  blurb: "Radius & ulna, flexor compartment muscles, radial & ulnar arteries, median & ulnar nerves in the forearm, carpal tunnel syndrome.",
  sections: [
    {
      id: "contents",
      title: "Lecture contents",
      blocks: [
        { t: "ul", items: [
          "Bones of the forearm (practical)",
          "Muscles of the forearm (flexors & extensors): anterior, posterior & lateral compartments",
          "Flexor & extensor retinaculum: attachments; structures passing deep & superficial",
          "Arteries: radial & ulnar (course, branches, main relations, site of pulsation)",
          "Nerves: median, radial & ulnar (course, branches, main relations)",
          "Anatomical snuffbox: boundaries & contents",
          "Carpal tunnel syndrome: cause & treatment"
        ] }
      ]
    },
    {
      id: "bones",
      title: "Bones of the forearm & hand",
      blocks: [
        { t: "p", h: "**Forearm:** {b:radius} laterally, {b:ulna} medially, joined by the **interosseous membrane** and the proximal & distal radio-ulnar joints (RUJ). **Hand:** carpals (8), metacarpals (5), phalanges (3 in each finger, except the thumb: only 2)." },
        { t: "h", h: "Radius: the lateral bone" },
        { t: "kv", items: [
          ["Upper end", "**Head**; below it the **neck**; below the neck the **radial tuberosity**"],
          ["Shaft", "Borders & surfaces; **interosseous border medially** for the interosseous membrane"],
          ["Lower end", "**Ulnar notch** medially; **styloid process** projecting laterally"],
          ["Proximal articulations", "Head with the humerus (**capitulum**) and the ulna (**radial notch of ulna**)"],
          ["Distal articulations", "**Scaphoid & lunate** (inferiorly); ulna (medially)"]
        ] },
        { t: "h", h: "Ulna: the medial bone" },
        { t: "kv", items: [
          ["Upper end (large)", "**Olecranon process** (prominence of the elbow); anteriorly the **trochlear notch**; the **coronoid process**, on whose lateral surface the **radial notch** articulates with the head of the radius"],
          ["Shaft", "**Interosseous border**: sharp & lateral; **posterior border**: rounded & subcutaneous"],
          ["Lower end", "Small rounded **head** and the **styloid process** projecting medially"],
          ["Articulations", "Proximally with the humerus & radius; distally with the radius (laterally)"]
        ] },
        { t: "box", k: "exam", title: "Key fact", h: "The ulna has **NO articulation with the carpal bones**. The distal radius articulates with the scaphoid & lunate." },
        { t: "h", h: "Bones of the hand" },
        { t: "p", h: "Carpals (lateral → medial). **Proximal row:** scaphoid, lunate, triquetrum, pisiform. **Distal row:** trapezium, trapezoid, capitate, hamate." },
        { t: "box", k: "tip", title: "Mnemonic", h: "“**S**he **L**ooks **T**oo **P**retty, **T**ry **T**o **C**atch **H**er”: Scaphoid, Lunate, Triquetrum, Pisiform | Trapezium, Trapezoid, Capitate, Hamate." }
      ]
    },
    {
      id: "compartments",
      title: "Fascial compartments of the forearm",
      blocks: [
        { t: "p", h: "The forearm is divided by the surrounding sheath of **deep fascia**, the **interosseous membrane** and fibrous **intermuscular septa** into **anterior, posterior & lateral** fascial compartments, each with its own muscles, nerves and arteries." },
        { t: "p", h: "**Interosseous membrane (IOM):** a strong membrane attached to the interosseous borders of the radius & ulna." }
      ]
    },
    {
      id: "flexors",
      title: "Anterior compartment (flexors)",
      blocks: [
        { t: "table", head: ["Group", "Muscles"], rows: [
          ["**Superficial**", "{m:Pronator teres}, {m:Flexor carpi radialis}, {m:Palmaris longus}, {m:Flexor carpi ulnaris}"],
          ["**Intermediate**", "{m:Flexor digitorum superficialis}"],
          ["**Deep**", "{m:Flexor pollicis longus}, {m:Flexor digitorum profundus}, {m:Pronator quadratus}"]
        ] },
        { t: "kv", items: [
          ["Common origin", "Superficial & intermediate groups have a **common tendon of origin** attached to the **medial epicondyle** of the humerus"],
          ["Blood supply", "{a:Ulnar} & {a:radial} arteries"],
          ["Nerve supply", "All muscles by the {n:median nerve} and its branches, **except** {m:flexor carpi ulnaris} & the **medial half** of {m:flexor digitorum profundus} → {n:ulnar nerve}"]
        ] },
        { t: "box", k: "remember", title: "Nerve supply: “ALL – 1½”", h: "Median nerve supplies **all** flexors **minus 1½**: the 1 = FCU, the ½ = medial half of FDP (both ulnar)." }
      ]
    },
    {
      id: "flexor-muscles",
      title: "Flexor muscles one by one",
      blocks: [
        { t: "h", h: "Superficial group" },
        { t: "muscles", group: "Superficial flexors" },
        { t: "box", k: "clinical", title: "Palmaris longus", h: "Sometimes **present / absent**. Clinically, its long tendon is used in **tendon repair surgery**." },
        { t: "h", h: "Intermediate group" },
        { t: "muscles", group: "Intermediate flexor" },
        { t: "h", h: "Deep group" },
        { t: "muscles", group: "Deep flexors" },
        { t: "box", k: "exam", title: "FDS vs FDP insertion", items: [
          "{m:FDS} tendon inserts into the **front of the middle phalanx (MP)**; it splits to let FDP pass.",
          "{m:FDP} tendon passes through and inserts into the **distal phalanx (DP)**.",
          "{m:Extensor digitorum} inserts via the **extensor expansion** into the middle & distal phalanges."
        ] },
        { t: "h", h: "Insertions of long flexor tendons in the hand (front)" },
        { t: "ul", items: [
          "{m:FDP} → distal phalanges of medial 4 fingers · {m:FPL} → distal phalanx of thumb",
          "{m:FDS} → middle phalanges of medial 4 fingers",
          "{m:FCU} → pisiform, hamate & base of 5th metacarpal",
          "{m:FCR} → bases of 2nd ± 3rd metacarpals"
        ] }
      ]
    },
    {
      id: "arteries",
      title: "Arteries of the forearm",
      blocks: [
        { t: "table", head: ["", "Ulnar artery", "Radial artery"], rows: [
          ["**Size**", "**Larger** terminal branch of brachial", "**Smaller** terminal branch of brachial"],
          ["**Begins**", "Cubital fossa, level of the **neck of radius**", "Cubital fossa, level of the **neck of radius**"],
          ["**Course**", "Descends through anterior compartment; enters the palm **in front of (superficial to) the flexor retinaculum**, **lateral to the ulnar nerve**", "Lies **medial to the superficial branch of radial nerve**, **lateral to FCR tendon**; winds around the wrist to the back of the hand **through the anatomical snuffbox**"],
          ["**Ends**", "By forming the **superficial palmar arch**", "By forming the **deep palmar arch**"],
          ["**Relations**", "Upper part: **deep** to the muscles. Lower part: **superficial & lateral to the ulnar nerve**, between tendons of **FCU & FDS**", "Between tendons of **brachioradialis** (laterally) & **flexor carpi radialis** (medially)"],
          ["**Pulse**", "In front of the flexor retinaculum, **lateral to the pisiform**, covered only by skin & fascia", "Distal forearm on the anterior surface of radius (skin & fascia only), **or** within the anatomical snuffbox"]
        ] },
        { t: "h", h: "Branches of the ulnar artery" },
        { t: "ul", items: [
          "Muscular branches",
          "**Anterior & posterior ulnar recurrent** branches → anastomosis around the **elbow**",
          "**Common interosseous artery**: from the upper part; divides into the {a:anterior} & {a:posterior interosseous arteries} (in front of & behind the IOM); they give **nutrient arteries to the radius & ulna**",
          "Anastomotic branches around the **wrist**",
          "**Deep palmar branch**: joins the radial artery (completes the deep palmar arch)"
        ] },
        { t: "h", h: "Branches of the radial artery" },
        { t: "ul", items: [
          "Muscular branches",
          "**Radial recurrent** branch → anastomosis around the **elbow**",
          "**Superficial palmar branch** → joins the ulnar artery (completes the superficial palmar arch)"
        ] }
      ]
    },
    {
      id: "ulnar-nerve",
      title: "Ulnar nerve in the forearm",
      blocks: [
        { t: "ol", items: [
          "Passes **behind the medial epicondyle** of the humerus.",
          "Enters the front of the forearm by passing **between the two heads of FCU**.",
          "Descends deep **between FCU & FDP**.",
          "In the distal forearm the ulnar nerve is **medial to the ulnar artery**.",
          "At the wrist it becomes **superficial** and lies between the tendons of **FCU & FDS**.",
          "Enters the palm **in front of (superficial to) the flexor retinaculum**, **lateral to the pisiform** and **medial to the ulnar artery**."
        ] },
        { t: "h", h: "Branches in the forearm" },
        { t: "kv", items: [
          ["Muscular", "{m:FCU} & medial half of {m:FDP} (and hand muscles; see Hand)"],
          ["Articular", "Elbow & wrist joints"],
          ["Palmar cutaneous", "**Small** branch, arises in the **middle** of the forearm; supplies skin over the **hypothenar eminence** (medial 1/3 of palm)"],
          ["Dorsal (posterior) cutaneous", "**Large** branch, arises in the **lower** forearm; supplies skin on the posterior surface of the hand & fingers (medial 1/3 of dorsum and medial 1½ fingers)"]
        ] }
      ]
    },
    {
      id: "median-nerve",
      title: "Median nerve in the forearm",
      blocks: [
        { t: "ol", items: [
          "Leaves the cubital fossa and enters the forearm **between the two heads of pronator teres**.",
          "Continues downward **between FDS & FDP**.",
          "At the wrist it emerges **lateral to FDS** and lies **behind the tendon of palmaris longus**.",
          "Enters the palm **through the carpal tunnel, behind (deep to) the flexor retinaculum**."
        ] },
        { t: "h", h: "Branches in the forearm" },
        { t: "kv", items: [
          ["Muscular", "All forearm flexors **except** FCU & medial ½ FDP; in the hand: **thenar muscles & 1st–2nd lumbricals**"],
          ["Articular", "Elbow joint"],
          ["Anterior interosseous nerve", "See below"],
          ["Palmar cutaneous branch", "Arises **before** the median nerve passes behind the flexor retinaculum (passes superficial to it); supplies skin over the **lateral 2/3 of the palm**. (Digital branches: lateral 3½ fingers.)"]
        ] },
        { t: "h", h: "Anterior interosseous nerve" },
        { t: "kv", items: [
          ["Arises", "From the median nerve as it emerges **between the two heads of pronator teres**"],
          ["Course", "Descends with the {a:anterior interosseous artery} on the front of the IOM, **between FPL & FDP**"],
          ["Ends", "On the anterior surface of the carpus"],
          ["Muscular", "{m:FPL}, {m:PQ}, lateral half of {m:FDP}"],
          ["Articular", "Wrist, inferior radio-ulnar joint & joints of the hand"]
        ] }
      ]
    },
    {
      id: "carpal-tunnel",
      title: "Clinical: carpal tunnel & CTS",
      blocks: [
        { t: "p", h: "**Carpal tunnel formation:** the concave anterior surface of the carpal bones, closed by the **flexor retinaculum**. It passes the {n:median nerve} and the **flexor tendons of the thumb and fingers**." },
        { t: "p", h: "**Carpal tunnel syndrome (CTS):** compression of the median nerve in the restricted space between the tendons in the carpal tunnel at the wrist." },
        { t: "kv", items: [
          ["Causes", "Oedema of the flexor tendons; fracture or dislocation of the carpal bones; fibrosis or thickening of the flexor retinaculum"],
          ["Motor affection", "Paralysis of the **thenar muscles** & the **1st, 2nd lumbricals**"],
          ["Sensory affection", "Severe burning pain & numbness along the distribution of the nerve"],
          ["Management", "Decompress the tunnel by a **longitudinal incision through the flexor retinaculum**"]
        ] },
        { t: "box", k: "exam", title: "No sensory loss in the palm. Why?", h: "Because the **palmar cutaneous branch of the median nerve passes superficial to the flexor retinaculum**, so it is not compressed." }
      ]
    }
  ],
  muscles: [
    { name: "Pronator teres", group: "Superficial flexors",
      origin: "Humeral head: medial epicondyle of humerus. Ulnar head: medial border of coronoid process of ulna",
      insertion: "Middle of lateral aspect of shaft of radius",
      nerve: "Median nerve",
      action: "Pronation & flexion of forearm",
      note: "Median nerve passes between its two heads; forms the medial boundary of the cubital fossa." },
    { name: "Flexor carpi radialis", group: "Superficial flexors",
      origin: "Medial epicondyle of humerus",
      insertion: "Bases of 2nd ± 3rd metacarpals",
      nerve: "Median nerve",
      action: "Flexion & abduction (radial / lateral deviation) of hand at wrist" },
    { name: "Palmaris longus", group: "Superficial flexors",
      origin: "Medial epicondyle of humerus",
      insertion: "Flexor retinaculum & palmar aponeurosis",
      nerve: "Median nerve",
      action: "Weak flexion of hand",
      note: "Sometimes absent; tendon used in tendon repair surgery." },
    { name: "Flexor carpi ulnaris", group: "Superficial flexors",
      origin: "Humeral head: medial epicondyle. Ulnar head: medial aspect of olecranon & posterior border of ulna",
      insertion: "Pisiform & hamate & base of 5th metacarpal",
      nerve: "Ulnar nerve",
      action: "Flexion & adduction (ulnar / medial deviation) of hand at wrist",
      note: "Ulnar nerve enters the forearm between its two heads." },
    { name: "Flexor digitorum superficialis", group: "Intermediate flexor",
      origin: "Humero-ulnar head: medial epicondyle & medial border of coronoid process. Radial head: oblique line on anterior surface of shaft of radius",
      insertion: "Middle phalanx of medial four fingers",
      nerve: "Median nerve",
      action: "Flexion of middle phalanx of medial 4 fingers; helps flexion of hand at wrist" },
    { name: "Flexor digitorum profundus", group: "Deep flexors",
      origin: "Upper ¾ of anteromedial surface of shaft of ulna + interosseous membrane",
      insertion: "Distal phalanges of medial four fingers",
      nerve: "Medial half: ulnar nerve. Lateral half: median nerve (anterior interosseous branch)",
      action: "Flexes distal phalanx of fingers; assists flexion of middle & proximal phalanges; helps flexion of wrist",
      note: "Its tendons give origin to the lumbricals." },
    { name: "Flexor pollicis longus", group: "Deep flexors",
      origin: "Middle of anterior surface of shaft of radius + interosseous membrane",
      insertion: "Distal phalanx of thumb",
      nerve: "Median nerve (anterior interosseous branch)",
      action: "Flexes distal phalanx of thumb" },
    { name: "Pronator quadratus", group: "Deep flexors",
      origin: "Lower 1/4 of anterior surface of shaft of ulna",
      insertion: "Lower 1/4 of anterior surface of shaft of radius",
      nerve: "Median nerve (anterior interosseous branch)",
      action: "Pronates the forearm" }
  ],
  flashcards: [
    ["Which forearm bone does NOT articulate with the carpals?", "The ulna"],
    ["Distal radius articulates with which carpals?", "Scaphoid & lunate"],
    ["Proximal articulations of the head of radius?", "Capitulum of humerus & radial notch of ulna"],
    ["Features of the upper end of the ulna?", "Olecranon, trochlear notch, coronoid process with the radial notch"],
    ["Which ulnar border is subcutaneous?", "The posterior border (rounded)"],
    ["Carpal bones, proximal row (lateral → medial)?", "Scaphoid, lunate, triquetrum, pisiform"],
    ["Carpal bones, distal row (lateral → medial)?", "Trapezium, trapezoid, capitate, hamate"],
    ["What divides the forearm into compartments?", "Deep fascia, interosseous membrane, fibrous intermuscular septa → anterior, posterior & lateral"],
    ["Superficial group of forearm flexors?", "Pronator teres, FCR, palmaris longus, FCU"],
    ["Deep group of forearm flexors?", "FPL, FDP, pronator quadratus"],
    ["Common origin of superficial & intermediate flexors?", "Medial epicondyle of humerus (common flexor tendon)"],
    ["Nerve supply rule of the anterior forearm?", "ALL by median EXCEPT 1½: FCU + medial ½ FDP (ulnar)"],
    ["Insertion of pronator teres?", "Middle of lateral aspect of shaft of radius"],
    ["Insertion of FCR?", "Bases of 2nd ± 3rd metacarpals"],
    ["Insertion of FCU?", "Pisiform, hamate & base of 5th metacarpal"],
    ["Insertion of palmaris longus?", "Flexor retinaculum & palmar aponeurosis"],
    ["Clinical importance of palmaris longus?", "Often absent; tendon used for tendon repair grafts"],
    ["Radial head origin of FDS?", "Oblique line on anterior surface of radius"],
    ["FDS vs FDP insertion?", "FDS: middle phalanx · FDP: distal phalanx (medial 4 fingers)"],
    ["Muscles supplied by the anterior interosseous nerve?", "FPL, pronator quadratus, lateral ½ FDP"],
    ["Course of the anterior interosseous nerve?", "Arises between heads of pronator teres → front of IOM between FPL & FDP with anterior interosseous artery → ends on carpus"],
    ["Where does the ulnar artery end?", "Superficial palmar arch"],
    ["Where does the radial artery end?", "Deep palmar arch"],
    ["Relation of ulnar artery to ulnar nerve at the wrist?", "Artery lateral to the nerve; both superficial to flexor retinaculum"],
    ["Site of ulnar pulse?", "In front of flexor retinaculum, lateral to pisiform"],
    ["Sites of radial pulse?", "Distal forearm on anterior radius (lateral to FCR) or in the anatomical snuffbox"],
    ["Relations of the radial artery in the forearm?", "Between brachioradialis (lateral) and FCR (medial); medial to superficial radial nerve"],
    ["Branches of the common interosseous artery?", "Anterior & posterior interosseous arteries (nutrient arteries to radius & ulna)"],
    ["Recurrent branches to the elbow anastomosis?", "Anterior & posterior ulnar recurrent; radial recurrent"],
    ["How does the ulnar nerve enter the forearm?", "Between the two heads of FCU"],
    ["How does the median nerve enter the forearm?", "Between the two heads of pronator teres"],
    ["Ulnar nerve: palmar vs dorsal cutaneous branch?", "Palmar: small, mid-forearm, hypothenar skin · Dorsal: large, lower forearm, dorsum of hand & medial fingers"],
    ["Position of the median nerve at the wrist?", "Lateral to FDS, behind palmaris longus tendon; enters palm deep to flexor retinaculum"],
    ["Causes of carpal tunnel syndrome?", "Tendon oedema; carpal fracture/dislocation; fibrosis/thickening of flexor retinaculum"],
    ["Motor effect of CTS?", "Paralysis of thenar muscles & 1st, 2nd lumbricals"],
    ["Why no sensory loss in the palm in CTS?", "Palmar cutaneous branch of median passes superficial to the flexor retinaculum"],
    ["Treatment of CTS?", "Longitudinal incision through the flexor retinaculum (decompression)"]
  ],
  quiz: [
    { q: "Which bone articulates with the scaphoid and lunate?", o: ["Ulna", "Radius", "Capitate", "Hamate"], a: 1, e: "The distal radius; the ulna has no articulation with the carpals." },
    { q: "The radial notch is found on the:", o: ["Radius", "Lateral surface of the coronoid process of ulna", "Olecranon", "Distal ulna"], a: 1, e: "It receives the head of the radius (proximal RUJ)." },
    { q: "The interosseous border of the radius faces:", o: ["Laterally", "Medially", "Anteriorly", "Posteriorly"], a: 1, e: "Radius: interosseous border medially. Ulna: interosseous border laterally." },
    { q: "Which carpal bone is in the proximal row?", o: ["Trapezoid", "Capitate", "Triquetrum", "Hamate"], a: 2, e: "Proximal: scaphoid, lunate, triquetrum, pisiform." },
    { q: "Which flexor is supplied by the ulnar nerve?", o: ["Palmaris longus", "Flexor carpi ulnaris", "Flexor carpi radialis", "FDS"], a: 1, e: "Ulnar: FCU + medial ½ FDP. Everything else: median." },
    { q: "Which muscle is the only member of the intermediate flexor group?", o: ["FDP", "FPL", "FDS", "Palmaris longus"], a: 2, e: "Flexor digitorum superficialis." },
    { q: "Pronator teres inserts into the:", o: ["Radial tuberosity", "Middle of lateral shaft of radius", "Lower 1/4 of radius", "Styloid process"], a: 1, e: "Pronator quadratus inserts into the lower 1/4 of the radius." },
    { q: "Flexor carpi radialis produces:", o: ["Flexion & adduction of wrist", "Flexion & abduction of wrist", "Pronation only", "Extension & abduction"], a: 1, e: "Radial/lateral deviation." },
    { q: "Which muscle inserts into the pisiform & hamate?", o: ["FCR", "FCU", "Palmaris longus", "ECU"], a: 1, e: "And base of 5th metacarpal." },
    { q: "FDS inserts into:", o: ["Distal phalanges", "Middle phalanges of medial 4 fingers", "Proximal phalanges", "Extensor expansion"], a: 1, e: "FDP → distal phalanges." },
    { q: "The lateral half of FDP is supplied by:", o: ["Ulnar nerve", "Deep branch of radial", "Anterior interosseous branch of median", "Musculocutaneous"], a: 2, e: "Medial half: ulnar." },
    { q: "Pronator quadratus originates from:", o: ["Lower 1/4 of anterior ulna", "Lower 1/4 of anterior radius", "Medial epicondyle", "Coronoid process"], a: 0, e: "Ulna → radius (lower quarters)." },
    { q: "Which nerve passes between the two heads of pronator teres?", o: ["Ulnar", "Median", "Radial", "Musculocutaneous"], a: 1, e: "The anterior interosseous nerve arises as it emerges." },
    { q: "Which nerve enters the forearm between the two heads of FCU?", o: ["Ulnar", "Median", "Radial", "Anterior interosseous"], a: 0, e: "After passing behind the medial epicondyle." },
    { q: "In the distal forearm, the ulnar nerve is ___ to the ulnar artery:", o: ["Lateral", "Medial", "Anterior", "Posterior"], a: 1, e: "Ulnar nerve medial; artery lateral (both superficial to the retinaculum)." },
    { q: "The ulnar artery ends as the:", o: ["Deep palmar arch", "Superficial palmar arch", "Dorsal carpal arch", "Princeps pollicis"], a: 1, e: "Radial → deep palmar arch." },
    { q: "The radial artery in the forearm lies between:", o: ["FCU & FDS", "Brachioradialis & FCR", "FDS & FDP", "ECRL & ECRB"], a: 1, e: "Brachioradialis laterally, FCR medially." },
    { q: "The common interosseous artery is a branch of the:", o: ["Radial artery", "Ulnar artery", "Brachial artery", "Anterior interosseous"], a: 1, e: "Arises from the upper part of the ulnar artery." },
    { q: "The ulnar pulse is felt:", o: ["Medial to the pisiform", "Lateral to the pisiform", "Lateral to FCR", "In the snuffbox"], a: 1, e: "In front of the flexor retinaculum, lateral to the pisiform." },
    { q: "The dorsal cutaneous branch of the ulnar nerve arises in the:", o: ["Middle of forearm", "Lower forearm", "Palm", "Arm"], a: 1, e: "Palmar cutaneous: middle (small). Dorsal cutaneous: lower forearm (large)." },
    { q: "The anterior interosseous nerve supplies:", o: ["FDS, FCR, PL", "FPL, PQ, lateral ½ FDP", "FCU, medial ½ FDP", "Thenar muscles"], a: 1, e: "It descends between FPL & FDP on the IOM." },
    { q: "At the wrist the median nerve lies:", o: ["Superficial to the flexor retinaculum", "Behind the palmaris longus tendon", "Medial to the ulnar artery", "Lateral to FCR"], a: 1, e: "Emerges lateral to FDS, behind palmaris longus, then through the carpal tunnel." },
    { q: "In carpal tunnel syndrome, which is paralysed?", o: ["Hypothenar muscles", "Thenar muscles & 1st, 2nd lumbricals", "All interossei", "Adductor pollicis"], a: 1, e: "Median nerve motor supply in the hand." },
    { q: "In CTS, palmar skin sensation is preserved because:", o: ["Ulnar nerve supplies the whole palm", "The palmar cutaneous branch passes superficial to the retinaculum", "The radial nerve compensates", "Digital branches are spared"], a: 1, e: "It arises before the tunnel and runs superficial to the flexor retinaculum." },
    { q: "Surgical treatment of CTS is:", o: ["Transverse cut of palmar aponeurosis", "Longitudinal incision through the flexor retinaculum", "Excision of pisiform", "Release of extensor retinaculum"], a: 1, e: "Decompression of the tunnel." }
  ]
};
