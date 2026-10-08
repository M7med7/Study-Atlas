/* Lecture 6 — The Hand (Prof. Laila M. Aboul Mahasen) */
export default {
  id: "hand",
  num: 6,
  title: "The Hand",
  short: "Hand",
  lecturer: "Prof. Laila M. Aboul Mahasen",
  blurb: "Retinacula & carpal tunnel, palmar fascia, intrinsic muscles, nerves & cutaneous supply, palmar arches, snuffbox, pulses, CTS, tenosynovitis, fascial spaces.",
  sections: [
    {
      id: "objectives",
      title: "Objectives & contents",
      blocks: [
        { t: "ol", items: [
          "Develop a clear concept of the bones, muscles, vessels and nerves of the hand.",
          "Recognize the snuffbox, its boundaries and clinical significance.",
          "Understand the formation of the carpal tunnel, structures passing through it, and carpal tunnel syndrome.",
          "Understand the formation of the superficial and deep palmar arches."
        ] },
        { t: "ul", items: [
          "Name the bones of the hand",
          "Name the muscle groups of the hand; enumerate the muscles of each group, their actions and innervation",
          "Enumerate the hand spaces",
          "Superficial & deep arterial palmar arches and their branches",
          "The dorsal venous arch of the hand",
          "Carpal tunnel: formation, contents; causes, clinical effects & treatment of CTS"
        ] }
      ]
    },
    {
      id: "palm-overview",
      title: "Structures of the palm & the back of the hand",
      blocks: [
        { t: "table", head: ["Palm of the hand", "Back of the hand"], rows: [
          ["Skin & cutaneous nerve supply", "Skin (thin)"],
          ["Superficial fascia containing {m:palmaris brevis}", "Thin superficial fascia (lets skin move freely over tendons); contains superficial vessels & nerves"],
          ["Deep fascia: palmar aponeurosis, fibrous flexor sheaths, thenar & hypothenar fascia, flexor retinaculum", "Deep fascia: extensor retinaculum (back of wrist)"],
          ["Insertion of long flexor tendons", "Insertion of long extensor tendons & their extensor expansions"],
          ["Palmar fascial spaces (between long flexor tendons & lumbricals)", "Dorsal interossei"],
          ["Intrinsic muscles: short muscles of thumb (4), of little finger (3), intermediate (4 lumbricals, 7 interossei: 3 palmar + 4 dorsal)", "Cutaneous nerves: superficial branch of {n:radial} + dorsal branch of {n:ulnar}"],
          ["Arteries: radial & ulnar → deep & superficial palmar arches", "Arteries: dorsal carpal arch; {a:radial artery} (in snuffbox) & its dorsal digital branch"],
          ["Veins: superficial & deep palmar venous arches", "Dorsal venous network"],
          ["Nerves: {n:median} & {n:ulnar}", "Metacarpal bones & phalanges"],
          ["Bones (metacarpals)", ""]
        ] },
        { t: "box", k: "clinical", title: "Clinically important points", h: "Snuffbox · Carpal tunnel syndrome · Tenosynovitis · Fascial spaces & their infection" }
      ]
    },
    {
      id: "flexor-retinaculum",
      title: "Flexor retinaculum & carpal tunnel",
      blocks: [
        { t: "p", h: "**Definition:** a thickening of deep fascia that holds the long flexor tendons in position at the wrist." },
        { t: "p", h: "**Importance:** converts the concave anterior surface of the carpal bones into the **carpal tunnel** for the passage of the {n:median nerve} & the flexor tendons of the fingers & thumb." },
        { t: "kv", items: [
          ["Medial attachment", "{b:Pisiform} & {b:hook of hamate}"],
          ["Lateral attachment", "{b:Scaphoid} & {b:trapezium}"]
        ] },
        { t: "table", caption: "Structures passing the flexor retinaculum (medial → lateral)", head: ["Superficial to retinaculum", "Deep to retinaculum (carpal tunnel)"], rows: [
          ["1. Tendon of {m:flexor carpi ulnaris}", "1. Tendons of {m:FDS} & {m:FDP} within a **common synovial sheath**"],
          ["2. {n:Ulnar nerve}", "2. {n:Median nerve}"],
          ["3. {a:Ulnar artery}", "3. {n:Anterior interosseous branch of median nerve}"],
          ["4. Palmar cutaneous branch of {n:ulnar nerve}", "4. {a:Anterior interosseous artery}"],
          ["5. Tendon of {m:palmaris longus}", "5. Tendon of {m:FPL} & its synovial sheath"],
          ["6. Palmar cutaneous branch of {n:median nerve}", "6. Tendon of {m:FCR} & its synovial sheath"]
        ] }
      ]
    },
    {
      id: "extensor-retinaculum",
      title: "Extensor retinaculum",
      blocks: [
        { t: "p", h: "**Structures superficial** to the extensor retinaculum: 1. beginning of the {v:cephalic} & {v:basilic} veins; 2. superficial branches of the {n:radial nerve}; 3. dorsal branch of the {n:ulnar nerve}." },
        { t: "p", h: "**All the muscles of the posterior compartment pass deep** to the extensor retinaculum in **6 compartments (lateral → medial)**:" },
        { t: "table", head: ["#", "Contents"], rows: [
          ["**1**", "a. {m:Abductor pollicis longus} · b. {m:Extensor pollicis brevis}"],
          ["**2**", "a. {m:Extensor carpi radialis longus} · b. {m:Extensor carpi radialis brevis}"],
          ["**3**", "{m:Extensor pollicis longus}"],
          ["**4**", "a. {m:Extensor digitorum} · b. {m:Extensor indicis} · c. terminal part of {n:posterior interosseous nerve} · d. terminal part of {a:posterior interosseous artery}"],
          ["**5**", "{m:Extensor digiti minimi}"],
          ["**6**", "{m:Extensor carpi ulnaris}"]
        ] }
      ]
    },
    {
      id: "bones",
      title: "Bones of the hand (practical)",
      blocks: [
        { t: "ol", items: [
          "**Carpals** (8): the wrist bones",
          "**Metacarpals** (5): the palm bones",
          "**Phalanges** (14): the finger bones"
        ] },
        { t: "kv", items: [
          ["Proximal row (lateral → medial)", "Scaphoid, Lunate, Triquetrum, Pisiform"],
          ["Distal row (lateral → medial)", "Trapezium, Trapezoid, Capitate, Hamate"],
          ["Mnemonic", "“She Looks Too Pretty – Try To Catch Her”"],
          ["Metacarpals", "Each has a base, shaft & head. The **1st (thumb) is the shortest & most mobile**. Bases articulate with the distal row of carpals; heads with the bases of the proximal phalanges; the shaft is slightly concave forward"],
          ["Phalanges", "Each finger has proximal, middle & distal phalanges; the thumb has only proximal & distal"]
        ] }
      ]
    },
    {
      id: "skin-fascia",
      title: "Skin, fascia & synovial sheaths",
      blocks: [
        { t: "p", h: "**Skin of the palm:** thick, hairless and strongly bound to the underlying fascia; has creases and sweat glands. **Skin creases** are thick folded skin over the joints (distal & proximal palmar creases, thenar crease; DIP, PIP, palmar digital creases)." },
        { t: "p", h: "**Superficial fascia** contains the {m:palmaris brevis}. **Deep fascia** forms the palmar aponeurosis, thenar fascia, hypothenar fascia and the retinacula." },
        { t: "h", h: "1. Palmar aponeurosis" },
        { t: "kv", items: [
          ["Shape", "Triangular thickening of deep fascia in the middle of the palm"],
          ["Apex", "Continuous with the **palmaris longus tendon** and the flexor retinaculum"],
          ["Base", "At the bases of the medial 4 fingers, where it divides into **4 slips**; each slip divides into **2 bands** that join the fibrous flexor sheaths"],
          ["Sides", "Attached to the thenar & hypothenar fascia; forms **septa** dividing the hand into fascial spaces"],
          ["Function", "1. Protects the **superficial palmar arterial arch** and the **palmar digital nerves**. 2. Gives firm attachment to skin to **improve grip**"]
        ] },
        { t: "h", h: "2. Fibrous digital flexor sheaths" },
        { t: "p", h: "Thickenings of deep fascia in front of the fingers, covering the flexor tendons and their synovial sheaths." },
        { t: "h", h: "Synovial sheaths around the flexor tendons" },
        { t: "ul", items: [
          "**Common synovial sheath** for FDS & FDP, extending under the flexor retinaculum",
          "Synovial sheath for flexor pollicis longus",
          "Digital synovial sheaths in the fingers, surrounded by the fibrous digital sheaths",
          "Functions: secrete synovial fluid, act as a lubricant, reduce friction when tendons move under the flexor retinaculum",
          "Synovial sheaths can become **inflamed and swollen with repetitive movements**"
        ] }
      ]
    },
    {
      id: "extensor-expansion",
      title: "Extensor expansions of the fingers",
      blocks: [
        { t: "p", h: "The insertion pattern of the 4 tendons of {m:extensor digitorum}. Each tendon flattens dorsal to its proximal phalanx and divides into **3 slips (bands)**:" },
        { t: "ol", items: [
          "**Central slip** → base of the **middle** phalanx",
          "**2 lateral slips** → unite as the **terminal slip** → base of the **distal** phalanx",
          "The **proximal part** of the expansion receives: the corresponding **interosseous** muscle (each side), the **lumbrical** (lateral side), **extensor indicis**, **extensor digiti minimi**"
        ] }
      ]
    },
    {
      id: "intrinsic",
      title: "Intrinsic muscles of the hand",
      blocks: [
        { t: "p", h: "Three main compartments: 1. short muscles of the **thumb (4)**, 3 of which form the **thenar eminence**; 2. short muscles of the **little finger (3)** forming the **hypothenar eminence**; 3. **intermediate** region (lumbricals & interossei). Plus {m:palmaris brevis} in the superficial fascia." },
        { t: "h", h: "Palmaris brevis" },
        { t: "muscles", group: "Superficial fascia" },
        { t: "h", h: "Thenar eminence (3) + adductor pollicis" },
        { t: "muscles", group: "Thenar" },
        { t: "box", k: "remember", title: "Adductor pollicis", h: "Lies in the **1st web** with the 1st dorsal interosseous. The {a:radial artery} passes **between its 2 heads** to continue as the **deep palmar arch**." },
        { t: "h", h: "Hypothenar eminence (3)" },
        { t: "muscles", group: "Hypothenar" },
        { t: "h", h: "Intermediate region: lumbricals & interossei" },
        { t: "muscles", group: "Intermediate" },
        { t: "box", k: "remember", title: "PAD & DAB", items: [
          "**P**almar interossei **AD**duct (3, or 4)",
          "**D**orsal interossei **AB**duct (4)",
          "Lumbricals & interossei insert into the **proximal part of the extensor expansion** → flex MCP + extend IP joints = the **writing position**"
        ] },
        { t: "h", h: "Movements of the thumb" },
        { t: "p", h: "Flexion, extension, abduction, adduction and opposition. **Opposition of the thumb**: pulls the thumb medially & forward across the palm. **Opposition of the little finger**: pulls it laterally toward the thumb across the palm to **cup the palm**." }
      ]
    },
    {
      id: "grip",
      title: "Hand gripping & functions",
      blocks: [
        { t: "p", h: "We hold objects through: 1. **wrist extension**, 2. **finger flexion & extension**, 3. **thumb movements** (flexion, extension, adduction & opposition). Movements of the thumb against the other digits allow the two grip types:" },
        { t: "table", head: ["Precision grip", "Power grip"], rows: [
          ["Fine-movement hand position", "Powerful hand position"],
          ["Minimally flexing fingers around the object", "Maximally flexing fingers around the object"]
        ] },
        { t: "kv", items: [
          ["Cylindrical (hammer) grip", "Fingers flex around an object on one side with the thumb on the other side"],
          ["Spherical grip", "Fingers and thumb flex around an object, e.g. grabbing an apple"]
        ] }
      ]
    },
    {
      id: "cutaneous",
      title: "Cutaneous nerve supply of the hand",
      blocks: [
        { t: "table", head: ["Nerve", "Branch", "Skin supplied"], rows: [
          ["{n:Median}", "Palmar cutaneous branch", "**Lateral 2/3 of palm**"],
          ["{n:Median}", "Palmar digital branches", "Palmar surface, nails and dorsal surface of the distal phalanges of the **lateral 3½ digits** (incl. thumb)"],
          ["{n:Ulnar}", "Palmar cutaneous branch", "**Medial 1/3 of palm**"],
          ["{n:Ulnar}", "Dorsal cutaneous branch (arises in forearm)", "**Medial 1/3 of dorsum** of hand"],
          ["{n:Ulnar}", "Superficial & dorsal digital branches", "Palmar & dorsal surfaces of the **medial 1½ digits**"],
          ["{n:Radial}", "Superficial branch", "**Lateral 2/3 of dorsum** incl. dorsal surface of proximal & middle phalanges of lateral 3½ digits"]
        ] },
        { t: "box", k: "exam", title: "Dorsum of the distal phalanges", h: "The skin over the **back of the distal phalanges of the lateral 3½ fingers** is supplied by the **median** nerve, not the radial." }
      ]
    },
    {
      id: "nerves",
      title: "Nerves of the hand",
      blocks: [
        { t: "h", h: "Ulnar nerve in the hand (mainly motor)" },
        { t: "kv", items: [
          ["In forearm", "Palmar cutaneous branch (superficial to flexor retinaculum → medial 1/3 of palm); dorsal cutaneous branch (medial 1/3 of dorsum)"],
          ["Superficial terminal branch (motor & sensory)", "Motor: {m:palmaris brevis}. Sensory: 3 palmar digital branches → skin of **5th & medial ½ of 4th** finger"],
          ["Deep terminal branch (motor)", "1. Hypothenar muscles; 2. **Medial two lumbricals**; 3. **All interossei**; 4. {m:Adductor pollicis}"]
        ] },
        { t: "h", h: "Median nerve in the hand (mainly cutaneous)" },
        { t: "kv", items: [
          ["In forearm", "Palmar cutaneous branch: passes **superficial** to the flexor retinaculum → skin of **lateral 2/3 of palm**"],
          ["Muscular (in hand)", "**3 thenar muscles** & **lateral two lumbricals**"],
          ["Cutaneous (in hand)", "5 palmar digital branches → palmar surface of the **lateral 3½ fingers**, plus the dorsal surface of these fingers to a variable degree (distal & middle phalanges)"]
        ] },
        { t: "h", h: "Superficial branch of the radial nerve (cutaneous only)" },
        { t: "kv", items: [
          ["Origin", "Direct continuation of the radial nerve"],
          ["Course", "Descends under cover of **brachioradialis**, in contact with the radial artery; in the **anatomical snuffbox**; runs distally to the dorsum of the hand"],
          ["Branches", "1. Skin of the **root of the thumb**. 2. **Lateral 2/3 of the back of the hand** and lateral 3½ fingers (except the back of the distal phalanges → median)"]
        ] }
      ]
    },
    {
      id: "arteries",
      title: "Arteries of the hand",
      blocks: [
        { t: "table", head: ["Position", "Branches of radial artery", "Branches of ulnar artery"], rows: [
          ["**Upper forearm**", "1. Radial recurrent; 2. Muscular", "1. Anterior ulnar recurrent; 2. Posterior ulnar recurrent; 3. Common interosseous; 4. Muscular"],
          ["**Lower forearm**", "1. Palmar carpal; 2. **Superficial palmar branch** (near the styloid process; enters the hand to join the ulnar a. → completes the superficial palmar arch)", "Muscular branches"],
          ["**Wrist**", "1. Dorsal carpal branch; 2. 1st dorsal metacarpal artery", "1. Palmar carpal; 2. Dorsal carpal; 3. **Deep palmar branch** (anterior to flexor retinaculum; joins radial a. → completes the deep palmar arch)"],
          ["**Palm**", "1. **Princeps pollicis**; 2. **Radialis indicis**; 3. Continues as the **DEEP palmar arch**", "Continues as the **SUPERFICIAL palmar arch**"]
        ] },
        { t: "h", h: "Ulnar artery" },
        { t: "kv", items: [
          ["Beginning", "**Larger, medial** branch of the brachial artery, in the cubital fossa at the level of the radial neck"],
          ["In the palm", "Enters **anterior to the flexor retinaculum**, **lateral to the ulnar nerve** and pisiform"],
          ["Deep branch", "Arises in front of the flexor retinaculum; passes between {m:abductor digiti minimi} & {m:flexor digiti minimi} to join the radial artery → completes the **deep palmar arch**"],
          ["End", "Curves laterally to continue as the **superficial palmar arch**"]
        ] },
        { t: "h", h: "Radial artery" },
        { t: "kv", items: [
          ["Beginning", "**Smaller, lateral** branch of the brachial artery, in the cubital fossa at the level of the radial neck"],
          ["Course", "1. Winds laterally around the wrist in the **floor of the anatomical snuffbox**. 2. Leaves the dorsum by **piercing the 1st dorsal interosseous** to reach the palm. 3. Curves medially **between the 2 heads of adductor pollicis** and continues as the **deep palmar arch**"],
          ["Branches", "1. **Princeps pollicis** (2 palmar digital branches, one to each side of the thumb). 2. **Radialis indicis** (lateral side of the index finger). 3. Continues as the deep palmar arch"]
        ] }
      ]
    },
    {
      id: "snuffbox",
      title: "Anatomical snuffbox",
      blocks: [
        { t: "p", h: "A **surface-anatomy feature**: a triangular depression on the lateral surface of the wrist on **full extension of the thumb**." },
        { t: "kv", items: [
          ["Medial border", "{m:Extensor pollicis longus}"],
          ["Lateral border", "{m:Abductor pollicis longus} & {m:extensor pollicis brevis}"],
          ["Roof", "{v:Cephalic vein} & {n:superficial branch of radial nerve}"],
          ["Floor", "{b:Scaphoid} bone"],
          ["Content", "Crossed by the {a:radial artery}, where its pulsation can be felt"]
        ] },
        { t: "box", k: "clinical", title: "Clinical importance", items: [
          "**Tenderness** in the box signifies **fracture of the scaphoid** bone",
          "**Radial artery pulsation** can be palpated"
        ] }
      ]
    },
    {
      id: "arches",
      title: "Superficial & deep palmar arches",
      blocks: [
        { t: "table", head: ["", "Superficial palmar arch", "Deep palmar arch"], rows: [
          ["**Formation**", "Mainly by the **ulnar artery**; communicates laterally with the **superficial palmar branch of the radial artery**", "Mainly by the **radial artery**; communicates medially with the **deep branch of the ulnar artery**"],
          ["**Site**", "**Deep to palmar aponeurosis**, superficial to the long flexor tendons. At the level of the **outstretched thumb** / middle 1/3 of the metacarpals", "**Deep to the long flexor tendons**, superficial to the metacarpals & interossei. **1 cm (a finger's breadth) proximal** to the superficial arch / at the level of the **metacarpal bases**"],
          ["**Branches**", "1. **3 common palmar digital** branches; 2. Digital branch to the **medial side of the little finger**", "1. **3 common palmar metacarpal** arteries (anastomose with the digital branches of the superficial arch); 2. **Recurrent branches** to join the anterior carpal arch"]
        ] },
        { t: "h", h: "Dorsal carpal arch" },
        { t: "kv", items: [
          ["Formation", "1. Dorsal carpal branch of radial artery; 2. Dorsal carpal branch of ulnar artery; 3. Posterior terminal branch of anterior interosseous artery"],
          ["Branches", "1. **3 dorsal metacarpal** branches to the medial 3½ fingers; 2. **3 proximal perforating** arteries; 3. **3 distal perforating** arteries"]
        ] },
        { t: "h", h: "Veins of the hand" },
        { t: "p", h: "**Palm:** superficial & deep palmar venous arches accompany the arterial arches and receive corresponding tributaries. **Dorsum:** the dorsal venous arch (network); lateral end → {v:cephalic vein}, medial end → {v:basilic vein}." }
      ]
    },
    {
      id: "pulses",
      title: "Arterial pulse points of the upper limb",
      blocks: [
        { t: "table", head: ["Artery", "Where to palpate"], rows: [
          ["{a:Axillary}", "Behind the lateral border of pectoralis major (anterior axillary fold)"],
          ["{a:Brachial}", "Cubital fossa, just medial to the biceps tendon"],
          ["{a:Ulnar}", "Just lateral to the pisiform bone"],
          ["{a:Radial} (a)", "Distal forearm just under the thumb, **lateral to the tendon of FCR**"],
          ["{a:Radial} (b)", "In the anatomical snuffbox"]
        ] }
      ]
    },
    {
      id: "clinical",
      title: "Clinical: CTS, tenosynovitis, fascial spaces",
      blocks: [
        { t: "h", h: "1. Carpal tunnel syndrome" },
        { t: "p", h: "Compression of the {n:median nerve} in the carpal tunnel (the space between the carpal bones & flexor retinaculum)." },
        { t: "kv", items: [
          ["Motor effect", "Weakness in **abduction and opposition of the thumb**"],
          ["Sensory effect", "Pain & numbness in the **lateral 3½ fingers**"],
          ["Treatment", "Release of the transverse carpal ligament (flexor retinaculum), open or endoscopic"]
        ] },
        { t: "box", k: "exam", title: "No sensory loss in the palm", h: "The palmar cutaneous branch of the median nerve passes **superficial** to the flexor retinaculum." },
        { t: "h", h: "2. Tenosynovitis" },
        { t: "p", h: "**Infection of the tendon with its synovial sheath**: a closed-space infection of the flexor tendon sheath of a digit, resulting from **penetrating trauma or haematogenous spread**." },
        { t: "kv", items: [
          ["Signs (flexor tenosynovitis)", "Finger held in slight flexion · fusiform swelling · pain with extension · tenderness along the tendon sheath"]
        ] },
        { t: "h", h: "3. Fascial spaces of the palm" },
        { t: "p", h: "Closed fascial spaces **deep to the palmar aponeurosis**, divided by the **midpalmar (oblique) septum** into the **thenar space** & **midpalmar space** (between the lumbricals & flexor tendons)." },
        { t: "kv", items: [
          ["Thenar space", "Contains the **1st lumbrical**; lies **posterior to the long flexor tendons of the index finger** and **in front of adductor pollicis**"],
          ["Midpalmar space", "Contains the **2nd, 3rd & 4th lumbricals**; lies **posterior to the long flexor tendons of the middle, ring & little fingers**"]
        ] },
        { t: "box", k: "clinical", title: "Why they matter", h: "**Surgical emergencies** occur when bacterial infection spreads into these closed spaces via penetrating trauma, local extension or the bloodstream." }
      ]
    }
  ],
  muscles: [
    { name: "Palmaris brevis", group: "Superficial fascia",
      origin: "Palmar aponeurosis & flexor retinaculum",
      insertion: "Skin of the medial border of the hand",
      nerve: "Superficial branch of ulnar nerve",
      action: "Wrinkles the hypothenar skin to deepen the palm for a better grip; protects the ulnar nerve & artery from compression",
      note: "Small muscle in the superficial fascia on the ulnar side of the palm, superficial to the hypothenar muscles." },
    { name: "Abductor pollicis brevis", group: "Thenar",
      nerve: "Median nerve",
      action: "Abducts the thumb" },
    { name: "Flexor pollicis brevis", group: "Thenar",
      nerve: "Median nerve",
      action: "Flexes the thumb at the 1st metacarpophalangeal joint" },
    { name: "Opponens pollicis", group: "Thenar",
      nerve: "Median nerve",
      action: "Opposes the thumb toward the other fingers medially to cup the palm (strong grip)",
      note: "Deep thenar muscle." },
    { name: "Adductor pollicis", group: "Thenar",
      nerve: "Deep branch of ulnar nerve",
      action: "Adducts the thumb",
      note: "In the 1st web with the 1st dorsal interosseous; radial artery passes between its 2 heads. Not a thenar eminence muscle (the 4th short thumb muscle)." },
    { name: "Abductor digiti minimi", group: "Hypothenar",
      nerve: "Deep branch of ulnar nerve",
      action: "Abducts the little finger" },
    { name: "Flexor digiti minimi", group: "Hypothenar",
      nerve: "Deep branch of ulnar nerve",
      action: "Flexes the little finger at the 5th metacarpophalangeal joint" },
    { name: "Opponens digiti minimi", group: "Hypothenar",
      nerve: "Deep branch of ulnar nerve",
      action: "Opposes the little finger toward the thumb laterally by flexing & laterally rotating the 5th MC to cup the palm (strong grip)",
      note: "Deep hypothenar muscle." },
    { name: "Lumbricals (4)", group: "Intermediate",
      origin: "Tendons of flexor digitorum profundus",
      insertion: "Proximal part of the extensor expansions (lateral side)",
      nerve: "1st & 2nd (lateral two): median nerve. 3rd & 4th (medial two): ulnar nerve (deep branch)",
      action: "Flex metacarpophalangeal joints & extend interphalangeal joints (writing position)" },
    { name: "Dorsal interossei (4)", group: "Intermediate",
      origin: "Adjacent sides of the metacarpals",
      insertion: "Proximal part of the extensor expansions",
      nerve: "Ulnar nerve (deep branch)",
      action: "1. Abduct fingers (DAB). 2. Writing position: flex MCP & extend IP joints" },
    { name: "Palmar interossei (3 or 4)", group: "Intermediate",
      origin: "Sides of all metacarpals except the 3rd",
      insertion: "Proximal part of the extensor expansions",
      nerve: "Ulnar nerve (deep branch)",
      action: "1. Adduct fingers (PAD). 2. Flex MCP joints & extend IP joints" }
  ],
  flashcards: [
    ["Attachments of the flexor retinaculum?", "Medially: pisiform & hamate · Laterally: scaphoid & trapezium"],
    ["Structures superficial to the flexor retinaculum (medial → lateral)?", "FCU tendon, ulnar N, ulnar A, palmar cutaneous br. of ulnar N, palmaris longus tendon, palmar cutaneous br. of median N"],
    ["Structures deep to the flexor retinaculum (medial → lateral)?", "FDS & FDP (common synovial sheath), median N, anterior interosseous N, anterior interosseous A, FPL & sheath, FCR & sheath"],
    ["Structures superficial to the extensor retinaculum?", "Beginning of cephalic & basilic veins, superficial radial nerve, dorsal branch of ulnar nerve"],
    ["Contents of extensor compartment 4?", "Extensor digitorum, extensor indicis, terminal posterior interosseous nerve & artery"],
    ["Number of bones in the hand?", "8 carpals, 5 metacarpals, 14 phalanges"],
    ["Shortest & most mobile metacarpal?", "1st (thumb)"],
    ["Features of the skin of the palm?", "Thick, hairless, bound to fascia; creases & sweat glands"],
    ["Apex & base of the palmar aponeurosis?", "Apex: continuous with palmaris longus & flexor retinaculum · Base: 4 slips → 2 bands each → fibrous flexor sheaths"],
    ["Functions of the palmar aponeurosis?", "Protects superficial palmar arch & digital nerves; anchors skin for grip"],
    ["Functions of synovial sheaths?", "Secrete synovial fluid, lubricate, reduce friction under the flexor retinaculum"],
    ["Three slips of the extensor expansion?", "Central slip → base of middle phalanx; 2 lateral slips → terminal slip → base of distal phalanx"],
    ["What does the proximal extensor expansion receive?", "Interossei (each side), lumbrical (lateral), extensor indicis, extensor digiti minimi"],
    ["Palmaris brevis nerve & actions?", "Superficial branch of ulnar; wrinkles hypothenar skin for grip, protects ulnar nerve & artery"],
    ["Thenar eminence muscles & nerve?", "Abductor pollicis brevis, flexor pollicis brevis, opponens pollicis: median nerve"],
    ["Nerve of adductor pollicis?", "Deep branch of ulnar nerve"],
    ["What passes between the 2 heads of adductor pollicis?", "Radial artery → deep palmar arch"],
    ["Hypothenar muscles & nerve?", "Abductor, flexor & opponens digiti minimi: deep branch of ulnar"],
    ["Origin of the lumbricals?", "Tendons of FDP"],
    ["Nerve supply of the lumbricals?", "Lateral two (1, 2): median · Medial two (3, 4): ulnar"],
    ["Action of lumbricals & interossei together?", "Flex MCP, extend IP joints: writing position"],
    ["Origin of palmar vs dorsal interossei?", "Palmar: sides of all metacarpals except the 3rd · Dorsal: adjacent sides of metacarpals"],
    ["PAD & DAB?", "Palmar ADduct, Dorsal ABduct"],
    ["Opposition of the thumb?", "Pulls the thumb medially & forward across the palm"],
    ["Precision vs power grip?", "Precision: fine, minimally flexed fingers · Power: maximally flexed fingers"],
    ["Types of power grip?", "Cylindrical (hammer) & spherical (apple)"],
    ["Median nerve cutaneous supply of hand?", "Lateral 2/3 palm (palmar cutaneous br.) + palmar lateral 3½ digits incl. nails & dorsum of distal phalanges"],
    ["Ulnar nerve cutaneous supply of hand?", "Medial 1/3 palm, medial 1/3 dorsum, medial 1½ digits (palmar & dorsal)"],
    ["Radial nerve cutaneous supply of hand?", "Lateral 2/3 dorsum + dorsal proximal & middle phalanges of lateral 3½ digits"],
    ["Superficial terminal branch of ulnar supplies?", "Motor: palmaris brevis · Sensory: 5th & medial ½ of 4th finger"],
    ["Deep terminal branch of ulnar supplies?", "Hypothenar muscles, medial 2 lumbricals, all interossei, adductor pollicis"],
    ["Median nerve muscles in the hand?", "3 thenar muscles + lateral 2 lumbricals"],
    ["Branches of the radial artery in the palm?", "Princeps pollicis, radialis indicis, then continues as the deep palmar arch"],
    ["How does the radial artery reach the palm?", "Snuffbox → pierces 1st dorsal interosseous → between 2 heads of adductor pollicis"],
    ["Deep branch of ulnar artery passes between?", "Abductor digiti minimi & flexor digiti minimi → joins radial (deep arch)"],
    ["Formation of the superficial palmar arch?", "Mainly ulnar artery + superficial palmar branch of radial"],
    ["Formation of the deep palmar arch?", "Mainly radial artery + deep branch of ulnar"],
    ["Level of the superficial vs deep palmar arch?", "Superficial: outstretched thumb / mid-metacarpals · Deep: 1 cm proximal / metacarpal bases"],
    ["Branches of the superficial palmar arch?", "3 common palmar digital + digital branch to medial side of little finger"],
    ["Branches of the deep palmar arch?", "3 palmar metacarpal arteries + recurrent branches to anterior carpal arch"],
    ["Formation of the dorsal carpal arch?", "Dorsal carpal br. of radial + of ulnar + posterior terminal br. of anterior interosseous"],
    ["Branches of the dorsal carpal arch?", "3 dorsal metacarpal, 3 proximal perforating, 3 distal perforating"],
    ["Roof of the anatomical snuffbox?", "Cephalic vein & superficial branch of radial nerve"],
    ["Tenderness in the snuffbox suggests?", "Fracture of the scaphoid"],
    ["Pulse points of the upper limb?", "Axillary: anterior axillary fold · Brachial: medial to biceps tendon · Ulnar: lateral to pisiform · Radial: lateral to FCR & in snuffbox"],
    ["CTS motor and sensory effects?", "Weak thumb abduction & opposition; pain/numbness lateral 3½ fingers; palm spared"],
    ["What is tenosynovitis?", "Infection of a tendon with its synovial sheath (closed-space infection of flexor sheath)"],
    ["Signs of flexor tenosynovitis?", "Slight flexion, fusiform swelling, pain on extension, tenderness along sheath"],
    ["Contents of the thenar space?", "1st lumbrical; behind index flexor tendons, in front of adductor pollicis"],
    ["Contents of the midpalmar space?", "2nd–4th lumbricals; behind flexor tendons of middle, ring & little fingers"],
    ["What separates the thenar and midpalmar spaces?", "Midpalmar (oblique) septum"]
  ],
  quiz: [
    { q: "The flexor retinaculum is attached laterally to the:", o: ["Pisiform & hamate", "Scaphoid & trapezium", "Lunate & capitate", "Radial styloid"], a: 1, e: "Medially: pisiform & hamate." },
    { q: "Which structure passes DEEP to the flexor retinaculum?", o: ["Ulnar nerve", "Palmaris longus tendon", "Median nerve", "Palmar cutaneous branch of median"], a: 2, e: "Median nerve goes through the carpal tunnel." },
    { q: "The most medial structure superficial to the flexor retinaculum is the:", o: ["Ulnar artery", "FCU tendon", "Ulnar nerve", "Palmaris longus"], a: 1, e: "Order: FCU tendon, ulnar N, ulnar A, palmar cut. br. ulnar, PL tendon, palmar cut. br. median." },
    { q: "Extensor compartment 4 contains:", o: ["EPL", "ED + EI + terminal posterior interosseous N & A", "EDM", "ECU"], a: 1, e: "Lateral → medial: 1 APL+EPB · 2 ECRL+ECRB · 3 EPL · 4 ED+EI · 5 EDM · 6 ECU." },
    { q: "Which is superficial to the extensor retinaculum?", o: ["Radial artery", "Extensor tendons", "Superficial branch of radial nerve", "Posterior interosseous nerve"], a: 2, e: "Plus cephalic & basilic veins and dorsal branch of ulnar." },
    { q: "The apex of the palmar aponeurosis is continuous with:", o: ["FCU tendon", "Palmaris longus tendon", "FDS", "Extensor retinaculum"], a: 1, e: "And with the flexor retinaculum." },
    { q: "Palmaris brevis is supplied by the:", o: ["Median nerve", "Deep branch of ulnar", "Superficial branch of ulnar", "Superficial radial"], a: 2, e: "The only muscle supplied by the superficial branch of ulnar." },
    { q: "Which muscle is supplied by the deep branch of the ulnar nerve?", o: ["Opponens pollicis", "Abductor pollicis brevis", "Adductor pollicis", "1st lumbrical"], a: 2, e: "Thenar muscles (APB, FPB, OP) + lateral 2 lumbricals = median." },
    { q: "The radial artery enters the palm by passing between the 2 heads of:", o: ["1st dorsal interosseous only", "Adductor pollicis", "Flexor pollicis brevis", "Opponens pollicis"], a: 1, e: "It first pierces the 1st dorsal interosseous, then passes between the heads of adductor pollicis." },
    { q: "The lumbricals originate from the tendons of:", o: ["FDS", "FDP", "Extensor digitorum", "FPL"], a: 1, e: "And insert into the extensor expansions." },
    { q: "The 3rd & 4th lumbricals are supplied by the:", o: ["Median nerve", "Ulnar nerve", "Radial nerve", "Anterior interosseous"], a: 1, e: "Lateral two (1, 2) median; medial two (3, 4) ulnar." },
    { q: "Palmar interossei originate from the sides of all metacarpals EXCEPT the:", o: ["1st", "2nd", "3rd", "5th"], a: 2, e: "Dorsal interossei arise from adjacent sides of metacarpals." },
    { q: "Dorsal interossei:", o: ["Adduct fingers", "Abduct fingers", "Oppose the thumb", "Flex DIP only"], a: 1, e: "DAB; palmar = PAD." },
    { q: "The “writing position” (flexed MCP, extended IP) is produced by:", o: ["FDS & FDP", "Lumbricals & interossei", "Extensor digitorum", "Thenar muscles"], a: 1, e: "They insert into the proximal extensor expansion." },
    { q: "The central slip of the extensor expansion inserts into the base of the:", o: ["Proximal phalanx", "Middle phalanx", "Distal phalanx", "Metacarpal head"], a: 1, e: "Lateral slips unite into the terminal slip → distal phalanx." },
    { q: "Skin over the medial 1/3 of the palm is supplied by the:", o: ["Palmar cutaneous branch of median", "Palmar cutaneous branch of ulnar", "Superficial radial", "Dorsal branch of ulnar"], a: 1, e: "Median palmar cutaneous: lateral 2/3." },
    { q: "Skin over the dorsum of the distal phalanx of the index finger is supplied by:", o: ["Radial nerve", "Median nerve", "Ulnar nerve", "Musculocutaneous"], a: 1, e: "Median palmar digital branches reach the nails & dorsal distal phalanges of the lateral 3½ digits." },
    { q: "The superficial branch of the ulnar nerve gives sensation to:", o: ["Lateral 3½ fingers", "5th and medial ½ of 4th finger", "Medial 1/3 of dorsum", "Thenar skin"], a: 1, e: "Via 3 palmar digital branches; motor to palmaris brevis." },
    { q: "The superficial palmar arch is formed mainly by the:", o: ["Radial artery", "Ulnar artery", "Anterior interosseous artery", "Princeps pollicis"], a: 1, e: "Completed by the superficial palmar branch of the radial artery." },
    { q: "The deep palmar arch lies:", o: ["Superficial to the flexor tendons", "At the level of the outstretched thumb", "About 1 cm proximal to the superficial arch, at the metacarpal bases", "Deep to the metacarpals"], a: 2, e: "Deep to long flexor tendons, superficial to metacarpals & interossei." },
    { q: "Branches of the superficial palmar arch include:", o: ["3 palmar metacarpal arteries", "3 common palmar digital arteries", "Princeps pollicis", "Perforating arteries"], a: 1, e: "Plus a digital branch to the medial side of the little finger." },
    { q: "Princeps pollicis is a branch of the:", o: ["Ulnar artery", "Radial artery", "Superficial arch", "Dorsal carpal arch"], a: 1, e: "Radial: princeps pollicis, radialis indicis, then the deep arch." },
    { q: "The deep branch of the ulnar artery passes between:", o: ["Two heads of adductor pollicis", "Abductor & flexor digiti minimi", "FCU & FDS", "1st dorsal interosseous heads"], a: 1, e: "Then joins the radial artery to complete the deep arch." },
    { q: "The dorsal carpal arch is formed by all EXCEPT:", o: ["Dorsal carpal branch of radial", "Dorsal carpal branch of ulnar", "Posterior terminal branch of anterior interosseous", "Princeps pollicis"], a: 3, e: "Princeps pollicis is a palmar branch of the radial artery." },
    { q: "The roof of the anatomical snuffbox contains:", o: ["Radial artery", "Cephalic vein & superficial radial nerve", "Scaphoid", "EPL tendon"], a: 1, e: "Floor: scaphoid. Content: radial artery." },
    { q: "Tenderness in the anatomical snuffbox after a fall on the hand suggests fracture of the:", o: ["Lunate", "Scaphoid", "Hamate", "Radial styloid"], a: 1, e: "The scaphoid forms the floor." },
    { q: "The ulnar pulse is felt:", o: ["Lateral to FCR tendon", "Just lateral to the pisiform", "In the snuffbox", "Medial to the pisiform"], a: 1, e: "Radial pulse: lateral to FCR or in snuffbox." },
    { q: "Motor effect of carpal tunnel syndrome (per the Hand lecture):", o: ["Loss of finger adduction", "Weakness of thumb abduction & opposition", "Claw hand", "Wrist drop"], a: 1, e: "Thenar muscles are supplied by the median nerve." },
    { q: "The thenar space contains the:", o: ["2nd–4th lumbricals", "1st lumbrical", "Adductor pollicis", "Median nerve"], a: 1, e: "Lies behind index flexor tendons, in front of adductor pollicis." },
    { q: "Flexor tenosynovitis presents with all EXCEPT:", o: ["Finger in slight flexion", "Fusiform swelling", "Pain with extension", "Painless full extension"], a: 3, e: "Extension is painful." },
    { q: "The 1st metacarpal is:", o: ["The longest", "The shortest & most mobile", "Fused with the trapezium", "Without a head"], a: 1, e: "Thumb metacarpal." }
  ]
};
