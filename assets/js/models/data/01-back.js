/* Lecture 1 — Back, Shoulder & Scapular Regions (Dr. Rasha Alshali)
   Inline markup: {n:nerve} {a:artery} {v:vein} {m:muscle} {b:bone/landmark} **bold** */
export default {
  id: "back",
  num: 1,
  title: "Back, Shoulder & Scapular Regions",
  short: "Back & Shoulder",
  lecturer: "Dr. Rasha Alshali",
  blurb: "Superficial back muscles, deltoid, rotator cuff, scapular anastomosis, suprascapular & axillary nerves, quadrangular space.",
  sections: [
    {
      id: "contents",
      title: "Lecture contents",
      blocks: [
        { t: "ul", items: [
          "The skin of the back",
          "Muscles of the back region",
          "Muscle of the shoulder region (deltoid)",
          "Muscles of the scapular region",
          "Rotator cuff muscles",
          "Nerves: the {n:axillary nerve} and the {n:suprascapular nerve}"
        ] },
        { t: "box", k: "tip", title: "Videos recommended in the lecture", items: [
          "Back region: <a href=\"https://www.youtube.com/watch?v=S0KjdRIvr1I\" target=\"_blank\" rel=\"noopener\">Muscles of the back</a> (min 0–4)",
          "Scapular region: <a href=\"https://www.youtube.com/watch?v=RaIt79pPfgE\" target=\"_blank\" rel=\"noopener\">Scapular muscles</a> (min 1–6)",
          "Rotator cuff, animated: <a href=\"https://www.youtube.com/watch?v=BHexdCT9KLY\" target=\"_blank\" rel=\"noopener\">video</a> (min 0–2:50) · dissection: <a href=\"https://www.youtube.com/watch?v=EUfNZ1KoJR4\" target=\"_blank\" rel=\"noopener\">video</a>",
          "Deltoid, animated: <a href=\"https://www.youtube.com/watch?v=Fx1alu8UThQ\" target=\"_blank\" rel=\"noopener\">video</a> · dissection: <a href=\"https://www.youtube.com/watch?v=j2L7holNbZ0\" target=\"_blank\" rel=\"noopener\">video</a>",
          "Scapular anastomosis: <a href=\"https://www.youtube.com/watch?v=D3NuZX8XgMQ&t=166s\" target=\"_blank\" rel=\"noopener\">video</a>"
        ] }
      ]
    },
    {
      id: "skin",
      title: "Skin of the back",
      blocks: [
        { t: "kv", items: [
          ["Arterial supply", "Branches from the {a:posterior intercostal arteries} & {a:lumbar arteries}"],
          ["Venous drainage", "To the {v:azygos vein} and {v:inferior vena cava}"],
          ["Nerve supply", "{n:Posterior rami of the spinal nerves}"],
          ["Lymph drainage", "To the **posterior group of axillary lymph nodes** (subscapular nodes)"]
        ] }
      ]
    },
    {
      id: "back-muscles",
      title: "Muscles of the back",
      blocks: [
        { t: "p", h: "The back has **three muscle layers**: superficial, intermediate and deep." },
        { t: "p", h: "**Superficial (1st) layer:** {m:Trapezius}, {m:Latissimus dorsi}, {m:Levator scapulae}, {m:Rhomboid minor}, {m:Rhomboid major}." },
        { t: "box", k: "exam", title: "Why do we care about the back muscles?", h: "We study the **superficial (1st) layer** because these muscles **move the upper limb**." },
        { t: "muscles", group: "Superficial back" },
        { t: "box", k: "remember", title: "Two large triangles", items: [
          "{m:Trapezius} = the **upper** large triangular muscle",
          "{m:Latissimus dorsi} = the **lower** large triangular muscle (the “climbing muscle”)"
        ] }
      ]
    },
    {
      id: "auscultation",
      title: "Triangle of auscultation",
      blocks: [
        { t: "p", h: "A triangular gap formed by:" },
        { t: "kv", items: [
          ["Laterally", "Medial border of the {b:scapula}"],
          ["Medially", "Inferolateral border of the {m:trapezius}"],
          ["Inferiorly", "Upper border of {m:latissimus dorsi}"]
        ] },
        { t: "box", k: "clinical", title: "Clinical use", h: "A good place to examine the **posterior segments of the lungs** with a stethoscope." }
      ]
    },
    {
      id: "deltoid",
      title: "Shoulder region: deltoid",
      blocks: [
        { t: "muscles", group: "Shoulder" },
        { t: "box", k: "remember", title: "Abduction of the arm: who does which range?", items: [
          "0° → 15°: {m:Supraspinatus}",
          "15° → 90°: middle fibres of {m:Deltoid}",
          "Above 90° (above the head): {m:Trapezius} + {m:Serratus anterior} rotate the scapula upward"
        ] }
      ]
    },
    {
      id: "scapular",
      title: "Scapular region muscles",
      blocks: [
        { t: "p", h: "These muscles connect the {b:scapula} to the {b:humerus}." },
        { t: "muscles", group: "Scapular" },
        { t: "box", k: "remember", title: "M-L-M rule (bicipital groove)", items: [
          "**M**edial lip → {m:Teres major}",
          "**L**ateral lip → {m:Pectoralis major}",
          "**M**iddle (floor) → {m:Latissimus dorsi}",
          "All muscles inserted into the bicipital groove **medially rotate** the arm."
        ] },
        { t: "table", caption: "Muscles connecting the scapula to the humerus (summary slide)", head: ["Muscle", "Origin", "Insertion", "Nerve supply", "Action"], rows: [
          ["{m:Subscapularis}", "Subscapular fossa", "Lesser tuberosity of humerus; capsule of shoulder joint", "{n:Upper & lower subscapular nerves}", "Medially rotates arm; stabilizes shoulder joint"],
          ["{m:Supraspinatus}", "Supraspinous fossa", "Greater tuberosity (tip); capsule", "{n:Suprascapular nerve}", "Abducts arm (0–15°); stabilizes shoulder joint"],
          ["{m:Infraspinatus}", "Infraspinous fossa", "Greater tuberosity; capsule", "{n:Suprascapular nerve}", "Laterally rotates arm; stabilizes shoulder joint"],
          ["{m:Teres minor}", "Upper 2/3 of lateral border of scapula", "Greater tuberosity; capsule", "{n:Axillary nerve}", "Laterally rotates arm; stabilizes shoulder joint"],
          ["{m:Teres major}", "Lower 1/3 of lateral border of scapula", "Medial lip of bicipital groove", "{n:Lower subscapular nerve}", "Medially rotates & adducts arm"],
          ["{m:Deltoid}", "Clavicle, acromion, spine", "Deltoid tuberosity of humerus", "{n:Axillary nerve}", "Many actions!"]
        ] }
      ]
    },
    {
      id: "rotator-cuff",
      title: "The rotator cuff",
      blocks: [
        { t: "p", h: "The rotator cuff is the name given to the **tendons of muscles which are fused to the capsule of the shoulder joint** to stabilize it during movement. Their tone helps hold the **head of the humerus in the glenoid cavity**." },
        { t: "table", head: ["Muscle", "Position around the joint", "Inserts into"], rows: [
          ["{m:Subscapularis}", "Anteriorly", "Lesser tuberosity (LT)"],
          ["{m:Supraspinatus}", "Superiorly", "Greater tuberosity (GT)"],
          ["{m:Infraspinatus}", "Posteriorly", "Greater tuberosity (GT)"],
          ["{m:Teres minor}", "Posteriorly", "Greater tuberosity (GT)"]
        ] },
        { t: "box", k: "exam", title: "The cuff is deficient INFERIORLY", h: "There is no cuff muscle below the joint, so the inferior aspect is the **site of potential weakness**." },
        { t: "qa", items: [
          ["The common shoulder dislocation occurs in which direction? Why?", "**Inferiorly**, because the rotator cuff is deficient inferiorly (the weakest part of the capsule)."],
          ["Which nerve can be injured in shoulder dislocation? Why?", "The {n:axillary nerve}: it is related to the **surgical neck of the humerus** and passes **below the shoulder joint**."],
          ["Which cuff muscles laterally rotate the arm?", "{m:Infraspinatus} and {m:Teres minor}."]
        ] }
      ]
    },
    {
      id: "anastomosis",
      title: "Arterial anastomosis around the scapula & shoulder joint",
      blocks: [
        { t: "p", h: "The {a:subclavian artery} and the {a:axillary artery} give branches that form the **scapular and acromial anastomoses**. The different segments of the axillary artery give branches that form the **shoulder joint anastomoses**." },
        { t: "p", h: "So there is an arterial anastomosis between the **subclavian** and **axillary** arteries, located: (1) around the scapula & acromion, (2) around the surgical neck of the humerus." },
        { t: "box", k: "clinical", title: "Clinical importance", h: "Ensures adequate blood flow to the upper limb during movement of the arm, compensating for **compression of the axillary artery**." },
        { t: "table", head: ["From the subclavian artery", "From the axillary artery (3rd part)"], rows: [
          ["{a:Suprascapular artery}: runs on the supraspinous & infraspinous fossae", "{a:Subscapular artery}: runs on the lateral border of the scapula & gives off the {a:circumflex scapular artery} (runs on the infraspinous fossa)"],
          ["{a:Deep branch of transverse cervical artery}: runs on the medial border of the scapula", "{a:Posterior circumflex humeral artery}"],
          ["", "{a:Anterior circumflex humeral artery}"]
        ] },
        { t: "box", k: "remember", title: "Slide question: axillary artery “part ???”", h: "The subscapular, anterior & posterior circumflex humeral arteries all arise from the **3rd part** of the axillary artery." }
      ]
    },
    {
      id: "nerves",
      title: "Nerves: suprascapular & axillary",
      blocks: [
        { t: "h", h: "Suprascapular nerve" },
        { t: "kv", items: [
          ["Begins", "From the **upper trunk** of the brachial plexus (C5, 6)"],
          ["Course", "Runs downward and laterally and passes through the **suprascapular notch** to reach the supraspinous fossa"],
          ["Articular", "Shoulder joint"],
          ["Muscular", "Two muscles: {m:supraspinatus} & {m:infraspinatus}"]
        ] },
        { t: "h", h: "Axillary nerve (C5, C6)" },
        { t: "kv", items: [
          ["Begins", "In the axilla, from the **posterior cord** of the brachial plexus"],
          ["Course", "Passes backward with the {a:posterior circumflex humeral artery}; related to the **surgical neck of the humerus** and passes **below the shoulder joint** (through the quadrangular space)"],
          ["Ends", "By dividing into anterior & posterior terminal branches"]
        ] },
        { t: "ul", items: [
          "**Articular branch:** to the shoulder joint",
          "**Anterior terminal branch:** supplies the {m:deltoid} and the skin covering the lower part of the deltoid",
          "**Posterior terminal branch:** supplies the {m:deltoid} and {m:teres minor}; ends as the {n:upper lateral cutaneous nerve of the arm}"
        ] }
      ]
    },
    {
      id: "spaces",
      title: "Intermuscular spaces",
      blocks: [
        { t: "h", h: "Quadrangular space" },
        { t: "kv", items: [
          ["Superiorly", "{m:Subscapularis} (anterior) and {m:teres minor} (posterior)"],
          ["Inferiorly", "{m:Teres major}"],
          ["Medially", "Long head of {m:triceps}"],
          ["Laterally", "Lateral head of {m:triceps} & surgical neck of {b:humerus}"],
          ["Contents", "{n:Axillary nerve} + {a:posterior circumflex humeral vessels}"]
        ] },
        { t: "h", h: "Upper (medial) triangular space" },
        { t: "kv", items: [
          ["Boundaries (from the diagram)", "{m:Teres minor} above, {m:teres major} below, long head of {m:triceps} laterally"],
          ["Contents", "{a:Circumflex scapular artery}"]
        ] },
        { t: "h", h: "Lower triangular space (triangular interval)" },
        { t: "p", h: "Bounded by {m:teres major} (above), long head of {m:triceps} (medially) and shaft of humerus/lateral head of triceps (laterally). Contains the {n:radial nerve} + {a:profunda brachii vessels}. Full details in the Arm lecture." }
      ]
    },
    {
      id: "clinical",
      title: "Clinical notes: rotator cuff tear",
      blocks: [
        { t: "box", k: "case", title: "Case", h: "A 45-year-old man complains of shoulder pain and **cannot raise his arm by himself**. His job is fixing lighting in high ceilings and cleaning windows every day. <br><strong>What happened?</strong> Tearing of the rotator cuff." },
        { t: "p", h: "Tearing of the rotator cuff tendons is a **painful** injury. A torn rotator cuff creates a very **weak shoulder** and affects its **movement**." },
        { t: "kv", items: [
          ["Causes", "Areas of **poor blood supply** in the rotator cuff put these tendons at risk of **degeneration from aging**. Common later in life or with overuse of the shoulder joint."],
          ["Who is affected?", "Sports: baseball & basketball players, swimmers & kayak sports. Routine daily work: cleaning windows, washing & waxing cars, painting (overuse → rotator cuff fatigability). Excessive force: trying to catch a heavy falling object or a fall directly on the shoulder."]
        ] }
      ]
    }
  ],
  muscles: [
    { name: "Trapezius", group: "Superficial back",
      origin: "1. Medial third of superior nuchal line; 2. External occipital protuberance; 3. Ligamentum nuchae; 4. Spine of C7; 5. Spines & supraspinous ligaments of all thoracic vertebrae (T1–T12)",
      insertion: "Upper fibres → posterior aspect of lateral third of clavicle. Middle fibres → medial aspect of acromion & upper border of spine of scapula. Lower fibres → medial end of spine of scapula",
      nerve: "Motor: spinal part of accessory nerve (CN XI). Sensory (pain & proprioception): C3 & C4",
      action: "Upper fibres elevate the scapula; middle fibres retract it; lower fibres depress it. With serratus anterior: rotate scapula upward (abduction of arm > 90°, above the head)",
      note: "The upper large triangular muscle." },
    { name: "Latissimus dorsi", group: "Superficial back",
      origin: "1. Posterior part of iliac crest; 2. Lumbar fascia; 3. Spines of lower 6 thoracic vertebrae; 4. Lower 3 or 4 ribs; 5. Lower (inferior) angle of scapula",
      insertion: "Floor of the bicipital groove of the humerus",
      nerve: "Thoracodorsal nerve",
      action: "Adduction, extension & medial rotation of the arm; helps in climbing (climbing muscle)",
      note: "The lower large triangular muscle." },
    { name: "Levator scapulae", group: "Superficial back",
      origin: "Transverse processes of the upper four cervical vertebrae (C1–C4)",
      insertion: "Medial border of scapula above the spine (opposite the supraspinous fossa)",
      nerve: "C3 & C4 cervical nerves + dorsal scapular nerve",
      action: "Elevation of the scapula; helps retraction (pulls scapula medially); lateral flexion of neck (bends head to the ipsilateral side)" },
    { name: "Rhomboid minor", group: "Superficial back",
      origin: "Lower part of ligamentum nuchae; spines of C7 & T1",
      insertion: "Medial border of scapula opposite the root of its spine",
      nerve: "Dorsal scapular nerve",
      action: "Elevation & retraction of the scapula (pulls it medially)" },
    { name: "Rhomboid major", group: "Superficial back",
      origin: "Spines & supraspinous ligaments of T2–T5",
      insertion: "Medial border of scapula below the spine (opposite the infraspinous fossa)",
      nerve: "Dorsal scapular nerve",
      action: "Elevation & retraction of the scapula (pulls it medially)" },
    { name: "Deltoid", group: "Shoulder",
      origin: "Anterior fibres: lateral 1/3 of anterior border of clavicle. Middle fibres: lateral border of acromion. Posterior fibres: lower border of spine of scapula",
      insertion: "Middle of lateral surface of humerus (deltoid tuberosity)",
      nerve: "Axillary nerve",
      action: "Anterior fibres: flex & medially rotate arm. Middle fibres: abduct arm (15°–90°). Posterior fibres: extend & laterally rotate arm" },
    { name: "Subscapularis", group: "Scapular",
      origin: "Subscapular fossa",
      insertion: "Lesser tuberosity of humerus (and capsule of shoulder joint)",
      nerve: "Upper & lower subscapular nerves",
      action: "Medially rotates the arm; stabilizes the shoulder joint",
      note: "Rotator cuff, anterior. Also forms the posterior wall of the axilla." },
    { name: "Supraspinatus", group: "Scapular",
      origin: "Supraspinous fossa of scapula",
      insertion: "Greater tuberosity of humerus (tip); capsule of shoulder joint",
      nerve: "Suprascapular nerve",
      action: "Abducts the arm (0° up to 15°); stabilizes the shoulder joint",
      note: "Rotator cuff, superior." },
    { name: "Infraspinatus", group: "Scapular",
      origin: "Infraspinous fossa of scapula",
      insertion: "Greater tuberosity of humerus; capsule of shoulder joint",
      nerve: "Suprascapular nerve",
      action: "Laterally rotates the arm; stabilizes the shoulder joint",
      note: "Rotator cuff, posterior." },
    { name: "Teres minor", group: "Scapular",
      origin: "Upper 2/3 of lateral border of scapula",
      insertion: "Greater tuberosity of humerus; capsule of shoulder joint",
      nerve: "Axillary nerve",
      action: "Laterally rotates the arm; stabilizes the shoulder joint",
      note: "Rotator cuff, posterior." },
    { name: "Teres major", group: "Scapular",
      origin: "Lower 1/3 of lateral border of scapula",
      insertion: "Medial lip of bicipital groove of humerus",
      nerve: "Lower subscapular nerve",
      action: "Adduction & medial rotation of the arm",
      note: "NOT a rotator cuff muscle." }
  ],
  flashcards: [
    ["Nerve supply of the skin of the back?", "Posterior rami of the spinal nerves"],
    ["Lymph drainage of the skin of the back?", "Posterior group of axillary lymph nodes (subscapular nodes)"],
    ["Venous drainage of the skin of the back?", "Azygos vein and inferior vena cava"],
    ["Arterial supply of the skin of the back?", "Posterior intercostal & lumbar arteries"],
    ["Why do we study the superficial layer of back muscles?", "They move the upper limb"],
    ["Boundaries of the triangle of auscultation?", "Lateral: medial border of scapula · Medial: inferolateral border of trapezius · Inferior: upper border of latissimus dorsi"],
    ["Clinical use of the triangle of auscultation?", "Examining the posterior segments of the lungs with a stethoscope"],
    ["Which muscles form the rotator cuff (with position)?", "Subscapularis (anterior), Supraspinatus (superior), Infraspinatus & Teres minor (posterior)"],
    ["Where is the rotator cuff deficient?", "Inferiorly, the site of potential weakness"],
    ["Common direction of shoulder dislocation and why?", "Inferior, because the rotator cuff is deficient inferiorly"],
    ["Which nerve is injured in shoulder dislocation and why?", "Axillary nerve: related to surgical neck of humerus and passes below the shoulder joint"],
    ["Contents of the quadrangular space?", "Axillary nerve + posterior circumflex humeral vessels"],
    ["Boundaries of the quadrangular space?", "Sup: subscapularis (ant) & teres minor (post) · Inf: teres major · Med: long head of triceps · Lat: lateral head of triceps & surgical neck of humerus"],
    ["Content of the upper (medial) triangular space?", "Circumflex scapular artery"],
    ["Origin of the suprascapular nerve and what it passes through?", "Upper trunk of brachial plexus; passes through the suprascapular notch"],
    ["What does the suprascapular nerve supply?", "Shoulder joint (articular) + supraspinatus & infraspinatus (muscular)"],
    ["Origin of the axillary nerve?", "Posterior cord of the brachial plexus (C5, C6)"],
    ["Branches of the axillary nerve?", "Articular (shoulder joint); anterior terminal (deltoid + skin over lower deltoid); posterior terminal (deltoid + teres minor → upper lateral cutaneous nerve of arm)"],
    ["Subclavian branches in the scapular anastomosis?", "Suprascapular artery; deep branch of transverse cervical artery"],
    ["Axillary branches in the scapular/shoulder anastomosis?", "Subscapular (→ circumflex scapular), posterior circumflex humeral, anterior circumflex humeral (all 3rd part)"],
    ["Clinical importance of the scapular anastomosis?", "Maintains blood flow to the limb when the axillary artery is compressed during arm movement"],
    ["Who abducts the arm 0–15°, 15–90°, and above 90°?", "Supraspinatus; middle deltoid; trapezius + serratus anterior (scapular rotation)"],
    ["M-L-M rule of the bicipital groove?", "Medial lip: teres major · Lateral lip: pectoralis major · Middle (floor): latissimus dorsi; all medially rotate the arm"],
    ["Why are rotator cuff tendons prone to degeneration?", "Areas of poor blood supply"]
  ],
  quiz: [
    { q: "Motor supply of the trapezius is from the:", o: ["Dorsal scapular nerve", "Spinal part of accessory nerve (CN XI)", "C3 & C4 only", "Thoracodorsal nerve"], a: 1, e: "Motor = spinal accessory (CN XI); C3 & C4 carry sensory fibres (pain & proprioception)." },
    { q: "Which fibres of trapezius retract the scapula?", o: ["Upper", "Middle", "Lower", "All fibres together"], a: 1, e: "Upper elevate, middle retract, lower depress." },
    { q: "Latissimus dorsi inserts into the:", o: ["Medial lip of bicipital groove", "Lateral lip of bicipital groove", "Floor of bicipital groove", "Lesser tuberosity"], a: 2, e: "M-L-M: Medial lip = teres major, Lateral lip = pectoralis major, Middle/floor = latissimus dorsi." },
    { q: "Rhomboid minor originates from:", o: ["T2–T5 spines", "Spines of C7 & T1 and lower ligamentum nuchae", "Transverse processes C1–C4", "Superior nuchal line"], a: 1, e: "Minor = C7–T1 (inserts opposite root of spine). Major = T2–T5 (inserts below spine)." },
    { q: "Levator scapulae is supplied by:", o: ["Accessory nerve", "C3, C4 + dorsal scapular nerve", "Long thoracic nerve", "Suprascapular nerve"], a: 1, e: "C3 & C4 cervical nerves plus the dorsal scapular nerve." },
    { q: "The inferior boundary of the triangle of auscultation is:", o: ["Medial border of scapula", "Trapezius", "Upper border of latissimus dorsi", "Teres major"], a: 2, e: "Lateral: scapula · Medial: trapezius · Inferior: latissimus dorsi." },
    { q: "Middle fibres of deltoid abduct the arm from:", o: ["0° to 15°", "15° to 90°", "90° to 180°", "0° to 90°"], a: 1, e: "Supraspinatus 0–15°, middle deltoid 15–90°, above 90° = trapezius + serratus anterior." },
    { q: "Which muscle is NOT part of the rotator cuff?", o: ["Subscapularis", "Teres minor", "Teres major", "Supraspinatus"], a: 2, e: "Teres major inserts into the medial lip of the bicipital groove and is not fused with the capsule." },
    { q: "Subscapularis inserts into the:", o: ["Greater tuberosity", "Lesser tuberosity", "Deltoid tuberosity", "Medial lip of bicipital groove"], a: 1, e: "Subscapularis is the only cuff muscle on the lesser tuberosity." },
    { q: "Teres minor is supplied by the:", o: ["Suprascapular nerve", "Lower subscapular nerve", "Axillary nerve", "Radial nerve"], a: 2, e: "Teres minor and deltoid are both supplied by the axillary nerve." },
    { q: "Teres major is supplied by the:", o: ["Upper subscapular nerve", "Lower subscapular nerve", "Axillary nerve", "Thoracodorsal nerve"], a: 1, e: "Lower subscapular nerve (subscapularis gets upper & lower)." },
    { q: "The rotator cuff is deficient:", o: ["Anteriorly", "Superiorly", "Posteriorly", "Inferiorly"], a: 3, e: "No cuff muscle lies inferiorly, so dislocation is commonly inferior." },
    { q: "In inferior dislocation of the shoulder the nerve most at risk is:", o: ["Radial", "Axillary", "Suprascapular", "Musculocutaneous"], a: 1, e: "The axillary nerve is related to the surgical neck and passes below the joint." },
    { q: "Contents of the quadrangular space:", o: ["Radial nerve & profunda brachii", "Axillary nerve & posterior circumflex humeral vessels", "Circumflex scapular artery", "Suprascapular nerve & artery"], a: 1, e: "Radial + profunda = triangular interval; circumflex scapular = upper triangular space." },
    { q: "The lateral boundary of the quadrangular space is:", o: ["Long head of triceps", "Teres major", "Lateral head of triceps & surgical neck of humerus", "Teres minor"], a: 2, e: "Medial = long head of triceps; lateral = lateral head + surgical neck." },
    { q: "The suprascapular nerve arises from the:", o: ["Roots C5", "Upper trunk", "Lateral cord", "Posterior cord"], a: 1, e: "Upper trunk (C5, 6); passes through the suprascapular notch." },
    { q: "The suprascapular nerve supplies:", o: ["Supraspinatus & infraspinatus", "Supraspinatus & teres minor", "Infraspinatus & teres major", "Deltoid & teres minor"], a: 0, e: "Plus an articular branch to the shoulder joint." },
    { q: "The upper lateral cutaneous nerve of the arm is the termination of the:", o: ["Anterior branch of axillary nerve", "Posterior branch of axillary nerve", "Radial nerve", "Musculocutaneous nerve"], a: 1, e: "The posterior terminal branch supplies deltoid + teres minor and ends as the upper lateral cutaneous nerve of the arm." },
    { q: "Which artery of the scapular anastomosis comes from the subclavian artery?", o: ["Subscapular", "Circumflex scapular", "Suprascapular", "Posterior circumflex humeral"], a: 2, e: "Subclavian: suprascapular + deep branch of transverse cervical. The rest are from the axillary (3rd part)." },
    { q: "Rotator cuff tendons degenerate with aging mainly because of:", o: ["Nerve injury", "Areas of poor blood supply", "Lack of synovial sheath", "Bony impingement only"], a: 1, e: "Poor blood supply puts the tendons at risk of degeneration." },
    { q: "A 45-year-old window cleaner cannot raise his arm by himself and has shoulder pain. Most likely:", o: ["Axillary nerve palsy", "Rotator cuff tear", "Winging of scapula", "Radial nerve palsy"], a: 1, e: "Overuse of the shoulder → rotator cuff tear (painful, weak shoulder)." },
    { q: "The lymph from the skin of the back drains to the:", o: ["Pectoral (anterior) axillary nodes", "Posterior (subscapular) axillary nodes", "Apical nodes", "Supratrochlear node"], a: 1, e: "Skin of back → posterior group of axillary lymph nodes (subscapular)." }
  ]
};
