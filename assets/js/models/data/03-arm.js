/* Lecture 3 — The Arm & Cubital Fossa (Prof. Laila M. Aboul Mahasen) */
export default {
  id: "arm",
  num: 3,
  title: "The Arm & Cubital Fossa",
  short: "Arm & Cubital Fossa",
  lecturer: "Prof. Laila M. Aboul Mahasen",
  blurb: "Arm compartments, biceps, brachialis, coracobrachialis & triceps, brachial artery, nerves of the arm, cubital fossa, superficial veins & venipuncture.",
  sections: [
    {
      id: "objectives",
      title: "Objectives & contents",
      blocks: [
        { t: "ol", items: [
          "Develop a clear concept of the arm, including muscles, vessels and nerves.",
          "Develop a clear concept of the cubital fossa.",
          "Explain on an anatomical basis why certain superficial veins are used for venepuncture."
        ] },
        { t: "ul", items: [
          "Muscles of the arm, their actions and innervation",
          "Brachial artery: course, branches, main relations, surface anatomy, site of pulsation and compression",
          "Superficial veins of the upper limb and their clinical importance",
          "Boundaries and contents of the cubital fossa"
        ] }
      ]
    },
    {
      id: "fascia",
      title: "Deep fascia & compartments",
      blocks: [
        { t: "p", h: "The deep fascia of the arm sends **2 strong intermuscular septa** (medial & lateral), attached to the **medial & lateral supracondylar ridges**, dividing the arm into an **anterior (flexor)** and a **posterior (extensor)** compartment." },
        { t: "table", head: ["", "Anterior compartment", "Posterior compartment"], rows: [
          ["**Muscles**", "{m:Biceps brachii}, {m:Coracobrachialis}, {m:Brachialis}", "{m:Triceps}"],
          ["**Nerves**", "{n:Musculocutaneous} (supplies the compartment), {n:median}, {n:ulnar}, {n:radial} (lower part)", "{n:Radial} (upper part), {n:ulnar} (lower part)"],
          ["**Arteries**", "{a:Brachial artery}", "{a:Profunda brachii}, {a:superior ulnar collateral}, posterior branch of {a:inferior ulnar collateral}"],
          ["**Veins**", "{v:Basilic vein}", "Venae comitantes of the corresponding arteries"]
        ] }
      ]
    },
    {
      id: "anterior-muscles",
      title: "Muscles of the anterior compartment",
      blocks: [
        { t: "muscles", group: "Anterior arm" },
        { t: "box", k: "remember", title: "Root values (Table 9.5)", items: [
          "{m:Biceps}: C5, 6",
          "{m:Coracobrachialis}: C5, 6, 7",
          "{m:Brachialis}: C5, 6",
          "{m:Triceps}: C6, 7, 8"
        ] }
      ]
    },
    {
      id: "anterior-nerves",
      title: "Nerves of the anterior compartment",
      blocks: [
        { t: "p", h: "Four nerves: {n:musculocutaneous}, {n:median}, {n:ulnar}, and {n:radial} (in the lower part)." },
        { t: "h", h: "Musculocutaneous nerve (C5, C6, C7)" },
        { t: "kv", items: [
          ["Root", "Branch of the **lateral cord** of the brachial plexus"],
          ["Course", "Enters the arm by **piercing coracobrachialis**, then descends downward & laterally **between biceps and brachialis**"],
          ["Ending", "Ends lateral to the biceps tendon; pierces the deep fascia just above the elbow to continue as the {n:lateral cutaneous nerve of the forearm}"],
          ["Muscular", "{m:Biceps}, {m:coracobrachialis}, {m:brachialis}"],
          ["Cutaneous", "Lateral cutaneous nerve of forearm: skin of front & lateral aspects of the forearm down to the root of the thumb"],
          ["Articular", "Elbow joint"]
        ] },
        { t: "h", h: "Ulnar nerve in the arm (C8, T1)" },
        { t: "kv", items: [
          ["Root", "**Medial cord**"],
          ["Course", "1. Runs down on the **medial side of the brachial artery** to the middle of the arm. 2. At the insertion of coracobrachialis it **pierces the medial intermuscular septum** with the {a:superior ulnar collateral artery} and enters the posterior compartment. 3. Passes **behind the medial epicondyle**, then enters the forearm"],
          ["Branches", "**No branches in the arm**"]
        ] },
        { t: "box", k: "clinical", title: "Ulnar nerve at the medial epicondyle", h: "As it descends behind the medial epicondyle in a groove, it is **readily palpated and most commonly injured**." },
        { t: "h", h: "Median nerve in the arm (C5–T1)" },
        { t: "kv", items: [
          ["Origin", "Medial & lateral roots from the medial & lateral cords"],
          ["Course in arm", "Runs down the anteromedial aspect of the arm; at the elbow it lies **medial to the brachial artery** on brachialis"],
          ["In cubital fossa", "Passes **deep to the bicipital aponeurosis** and medial to the brachial artery"],
          ["Branches", "**No muscular branches in the arm**"]
        ] },
        { t: "h", h: "Radial nerve: overview" },
        { t: "p", h: "On leaving the axilla it immediately enters the **posterior compartment**; it enters the **anterior compartment** just above the **lateral epicondyle**." }
      ]
    },
    {
      id: "brachial",
      title: "Brachial artery",
      blocks: [
        { t: "kv", items: [
          ["Beginning", "At the **inferior border of teres major** as a continuation of the axillary artery"],
          ["Ending", "Divides into {a:ulnar} and {a:radial arteries} at the level of the **neck of the radius** (in the cubital fossa)"],
          ["Course", "**Superficial** all through its course"]
        ] },
        { t: "ol", items: [
          "Upper part lies alongside the humerus and is **crossed by the median nerve from lateral to medial**. <em class=\"flag\">Note: the slide says “lies lateral to humerus”; standard texts place the upper brachial artery medial to the humerus. Check with your lecturer which wording the exam expects.</em>",
          "Lower part lies **in front of the humerus** and is crossed by the **bicipital aponeurosis**: the site for putting the **stethoscope to measure blood pressure**.",
          "Accompanied by the {v:basilic vein} in the middle of the arm."
        ] },
        { t: "h", h: "Relations" },
        { t: "kv", items: [
          ["Anteriorly", "Crossed from above downward by the {n:medial cutaneous nerve of forearm}, the {n:median nerve} and the bicipital aponeurosis"],
          ["Posteriorly", "Lies on {m:triceps}, {m:coracobrachialis} insertion & {m:brachialis}"],
          ["Medially", "Upper part: {n:ulnar nerve} & {v:basilic vein}. Lower part: {n:median nerve}"],
          ["Laterally", "Above: {n:median nerve}, coracobrachialis & biceps. Below: tendon of biceps"]
        ] },
        { t: "h", h: "Branches" },
        { t: "ol", items: [
          "Muscular branches to the anterior compartment",
          "Nutrient artery to the humerus",
          "{a:Profunda (brachii) artery}: arises near the beginning; follows the {n:radial nerve} into the **spiral groove** (posterior compartment)",
          "{a:Superior ulnar collateral artery}: arises near the middle of the arm; follows the {n:ulnar nerve}",
          "{a:Inferior ulnar collateral artery}: arises near the termination; takes part in the **anastomosis around the elbow**",
          "Two terminal branches: {a:radial} & {a:ulnar} arteries"
        ] },
        { t: "h", h: "Surface anatomy & pulse" },
        { t: "p", h: "On the medial side of the arm in the cleft between biceps and triceps. The median nerve courses with the brachial artery, whereas the ulnar nerve deviates posteriorly from it distally (Gray's)." },
        { t: "box", k: "clinical", title: "Site of pulsation & compression", h: "Primary site: in the **cubital fossa**, just above the elbow crease and **medial to the biceps tendon**." }
      ]
    },
    {
      id: "posterior",
      title: "Posterior compartment: triceps & radial nerve",
      blocks: [
        { t: "muscles", group: "Posterior arm" },
        { t: "h", h: "Radial nerve (C5–T1)" },
        { t: "kv", items: [
          ["Root", "**Posterior cord**"],
          ["Course in arm", "With the {a:profunda brachii artery} in the **spiral groove** on the back of the humerus, between the **medial and lateral heads of triceps**"],
          ["Lower part of arm", "Pierces the **lateral intermuscular septum** to enter the anterior compartment; descends anterior to the lateral epicondyle **between brachialis and brachioradialis** into the cubital fossa"],
          ["In cubital fossa", "Ends by dividing into **2 terminal branches** (superficial & deep)"]
        ] },
        { t: "h", h: "Branches of the radial nerve by region" },
        { t: "table", head: ["Region", "Muscular", "Cutaneous / other"], rows: [
          ["**Axilla**", "Long & medial heads of triceps", "{n:Posterior cutaneous nerve of the arm}"],
          ["**Spiral groove**", "Lateral & medial heads of triceps; anconeus", "{n:Lower lateral cutaneous nerve of arm}; {n:posterior cutaneous nerve of forearm}"],
          ["**Anterior compartment of arm**", "Lateral part of brachialis, brachioradialis, extensor carpi radialis longus", "Articular branches to the elbow joint"],
          ["**Cubital fossa**", "n/a", "2 terminal branches: superficial & deep"]
        ] },
        { t: "box", k: "remember", title: "Radial nerve: summary slide", items: [
          "**Muscular** in arm: triceps, anconeus, lateral ½ of brachialis. In forearm: brachioradialis & ECRL",
          "**Articular**: elbow joint",
          "**Cutaneous**: posterior cutaneous of arm (axilla); lower lateral cutaneous of arm (spiral groove); posterior cutaneous of forearm (spiral groove)",
          "**Two terminal branches**: superficial & deep"
        ] },
        { t: "h", h: "Lower triangular space (triangular interval)" },
        { t: "kv", items: [
          ["Superiorly", "{m:Teres major}"],
          ["Medially", "Long head of {m:triceps}"],
          ["Laterally", "Shaft of humerus & lateral head of triceps"],
          ["Contents", "{n:Radial nerve} + {a:profunda brachii vessels}"]
        ] }
      ]
    },
    {
      id: "cubital",
      title: "Cubital fossa",
      blocks: [
        { t: "p", h: "A **triangular space on the front of the elbow**." },
        { t: "kv", items: [
          ["Laterally", "{m:Brachioradialis} (medial border)"],
          ["Medially", "{m:Pronator teres} (lateral border)"],
          ["Base", "Imaginary horizontal line connecting the **epicondyles** of the humerus"],
          ["Apex", "Brachioradialis overlapping pronator teres"],
          ["Roof", "Skin; superficial fascia containing the {v:median cubital vein} & {n:lateral cutaneous nerve of forearm}; deep fascia & **bicipital aponeurosis**"],
          ["Floor", "Medially {m:brachialis}; laterally {m:supinator}"]
        ] },
        { t: "h", h: "Contents (medial → lateral)" },
        { t: "ol", items: [
          "{n:Median nerve}",
          "Bifurcation of the {a:brachial artery} into ulnar & radial arteries",
          "Tendon of the {m:biceps}",
          "{n:Radial nerve} and its deep branch (actually lies under cover of brachioradialis)"
        ] },
        { t: "box", k: "tip", title: "Mnemonic (study aid)", h: "Medial → lateral: **M**y **B**lood **T**urns **R**ed = **M**edian, **B**rachial artery, **T**endon of biceps, **R**adial nerve." },
        { t: "h", h: "Supratrochlear lymph node" },
        { t: "p", h: "Lies in the superficial fascia over the upper part of the fossa, **above the trochlea**. Afferents: **3rd, 4th & 5th fingers, medial part of the hand & medial side of the forearm**. Efferents pass up to the **lateral axillary lymph nodes**." }
      ]
    },
    {
      id: "veins",
      title: "Veins of the upper limb",
      blocks: [
        { t: "h", h: "Superficial veins" },
        { t: "p", h: "**Dorsal venous arch:** a network on the dorsum of the hand. Its **lateral end forms the cephalic vein**; its **medial end forms the basilic vein**." },
        { t: "table", head: ["", "Cephalic vein", "Basilic vein"], rows: [
          ["**Beginning**", "Lateral end of dorsal venous arch", "Medial end of dorsal venous arch"],
          ["**Course**", "Ascends along the lateral surface of biceps, pierces the brachial fascia, lies in the **deltopectoral triangle**", "Accompanies the medial cutaneous nerve of forearm on the posteromedial forearm; passes anterior to the medial epicondyle; pierces the deep fascia in the **middle of the arm**"],
          ["**Connection**", "Joined to the basilic vein by the {v:median cubital vein} in front of the elbow", "Joins the two brachial veins (venae comitantes of brachial artery)"],
          ["**Ending**", "Pierces the **clavipectoral fascia** to end in the {v:axillary vein}", "Continues as the {v:axillary vein} at the **lower border of teres major**"]
        ] },
        { t: "h", h: "Deep veins" },
        { t: "ul", items: [
          "**Venae comitantes** accompany all the large arteries, usually in pairs: {v:brachial}, {v:ulnar} & {v:radial} veins.",
          "**Axillary vein**: formed by the union of the basilic vein and the venae comitantes of the brachial artery."
        ] }
      ]
    },
    {
      id: "venipuncture",
      title: "Venipuncture",
      blocks: [
        { t: "p", h: "**Venipuncture (phlebotomy)**: a procedure to access a vein (blood collection, IV). The three veins most commonly used, all in the **antecubital area**:" },
        { t: "ul", items: ["{v:Cephalic vein}", "{v:Median cubital vein}", "{v:Basilic vein}"] },
        { t: "box", k: "exam", title: "Why the cephalic vein?", h: "The **constant position** of the cephalic vein makes it available even when it is not seen, as in **obese patients**." }
      ]
    }
  ],
  muscles: [
    { name: "Biceps brachii", group: "Anterior arm",
      origin: "Long head: supraglenoid tubercle (inside the capsule of shoulder joint). Short head: coracoid process by a common tendon with coracobrachialis",
      insertion: "1. Radial tuberosity of radius; 2. Bicipital aponeurosis into deep fascia of forearm",
      nerve: "Musculocutaneous nerve (C5, 6)",
      action: "Powerful supination of the flexed forearm (superior radio-ulnar joint); flexion of elbow; weak flexion of shoulder" },
    { name: "Coracobrachialis", group: "Anterior arm",
      origin: "Coracoid process of scapula (common tendon with short head of biceps)",
      insertion: "Middle 1/3 of medial surface of shaft of humerus",
      nerve: "Musculocutaneous nerve (C5, 6, 7), which pierces it",
      action: "Flexion of the arm and weak adduction (shoulder joint)" },
    { name: "Brachialis", group: "Anterior arm",
      origin: "Lower part (lower half) of the front of the humerus",
      insertion: "Coronoid process of ulna (tuberosity of ulna)",
      nerve: "Musculocutaneous nerve (C5, 6); small lateral part by the radial nerve",
      action: "Powerful flexor of the elbow joint" },
    { name: "Triceps brachii", group: "Posterior arm",
      origin: "Long head: infraglenoid tubercle of scapula. Lateral head: strip from upper ½ of posterior surface of humerus. Medial head: wide origin from posterior surface of humerus below the spiral groove",
      insertion: "Olecranon process of ulna",
      nerve: "Radial nerve (C6, 7, 8)",
      action: "Extensor of the elbow joint" }
  ],
  flashcards: [
    ["What divides the arm into compartments?", "Medial & lateral intermuscular septa attached to the supracondylar ridges"],
    ["Muscles of the anterior compartment of the arm?", "Biceps brachii, coracobrachialis, brachialis"],
    ["Nerves present in the anterior compartment of the arm?", "Musculocutaneous, median, ulnar, radial (lower part)"],
    ["Arteries of the posterior compartment of the arm?", "Profunda brachii, superior ulnar collateral, posterior branch of inferior ulnar collateral"],
    ["Origin of the long head of biceps?", "Supraglenoid tubercle, inside the shoulder joint capsule"],
    ["Insertion of biceps?", "Radial tuberosity + bicipital aponeurosis into deep fascia of forearm"],
    ["Main action of biceps?", "Powerful supination of flexed forearm; elbow flexion; weak shoulder flexion"],
    ["Insertion of coracobrachialis?", "Middle 1/3 of medial surface of shaft of humerus"],
    ["Double nerve supply of brachialis?", "Musculocutaneous + small lateral part by radial nerve"],
    ["Insertion of brachialis?", "Coronoid process of ulna"],
    ["Origins of the three heads of triceps?", "Long: infraglenoid tubercle · Lateral: upper ½ posterior humerus · Medial: posterior humerus below spiral groove"],
    ["Course of the musculocutaneous nerve in the arm?", "Pierces coracobrachialis → between biceps and brachialis → lateral cutaneous nerve of forearm above elbow"],
    ["Where is the ulnar nerve most commonly injured?", "Behind the medial epicondyle (readily palpable there)"],
    ["What accompanies the ulnar nerve through the medial septum?", "Superior ulnar collateral artery"],
    ["Branches of the ulnar & median nerves in the arm?", "None (no muscular branches in the arm)"],
    ["Relation of median nerve to brachial artery at the elbow?", "Medial (on brachialis, deep to bicipital aponeurosis)"],
    ["Where does the brachial artery begin and end?", "Lower border of teres major → divides at level of neck of radius"],
    ["What crosses the brachial artery anteriorly?", "Medial cutaneous nerve of forearm, median nerve (lateral → medial), bicipital aponeurosis"],
    ["Where is the stethoscope placed to measure BP?", "Over the brachial artery where it is crossed by the bicipital aponeurosis"],
    ["Primary site of brachial pulse?", "Cubital fossa, above elbow crease, medial to biceps tendon"],
    ["Which brachial branch follows the radial nerve?", "Profunda brachii (into the spiral groove)"],
    ["Which brachial branch follows the ulnar nerve?", "Superior ulnar collateral artery"],
    ["Course of the radial nerve in the arm?", "Spiral groove with profunda brachii between medial & lateral heads of triceps → pierces lateral septum → between brachialis & brachioradialis → cubital fossa"],
    ["Contents of the triangular interval?", "Radial nerve + profunda brachii vessels"],
    ["Boundaries of the triangular interval?", "Sup: teres major · Med: long head of triceps · Lat: shaft of humerus & lateral head of triceps"],
    ["Radial nerve branches in the spiral groove?", "Lateral & medial heads of triceps, anconeus; lower lateral cutaneous nerve of arm; posterior cutaneous nerve of forearm"],
    ["Radial nerve branches in the axilla?", "Long & medial heads of triceps; posterior cutaneous nerve of arm"],
    ["Boundaries of the cubital fossa?", "Lat: brachioradialis · Med: pronator teres · Base: line between epicondyles · Apex: brachioradialis overlapping pronator teres"],
    ["Floor of the cubital fossa?", "Brachialis (medial) & supinator (lateral)"],
    ["Roof of the cubital fossa?", "Skin, superficial fascia (median cubital vein, lateral cutaneous nerve of forearm), deep fascia & bicipital aponeurosis"],
    ["Contents of cubital fossa (medial → lateral)?", "Median nerve, brachial artery bifurcation, biceps tendon, radial nerve & deep branch"],
    ["Afferents of the supratrochlear node?", "3rd, 4th, 5th fingers, medial hand, medial forearm → efferents to lateral axillary nodes"],
    ["Beginning and ending of the cephalic vein?", "Lateral end of dorsal venous arch → pierces clavipectoral fascia → axillary vein"],
    ["Beginning and ending of the basilic vein?", "Medial end of dorsal venous arch → pierces deep fascia mid-arm → joins brachial veins → axillary vein at lower border of teres major"],
    ["Which vein connects cephalic & basilic in front of the elbow?", "Median cubital vein"],
    ["Three veins used for venipuncture?", "Cephalic, median cubital, basilic (antecubital area)"],
    ["Why is the cephalic vein useful in obese patients?", "Its constant position makes it available even when not seen"]
  ],
  quiz: [
    { q: "The long head of biceps arises from the:", o: ["Coracoid process", "Infraglenoid tubercle", "Supraglenoid tubercle", "Lesser tuberosity"], a: 2, e: "Supraglenoid tubercle, inside the shoulder joint capsule. Short head = coracoid." },
    { q: "The most powerful supinator of the flexed forearm is:", o: ["Supinator", "Brachioradialis", "Biceps brachii", "Brachialis"], a: 2, e: "Biceps: powerful supination of the flexed forearm." },
    { q: "Brachialis inserts into the:", o: ["Radial tuberosity", "Olecranon", "Coronoid process of ulna", "Bicipital aponeurosis"], a: 2, e: "Brachialis = pure, powerful elbow flexor; inserts on the coronoid process." },
    { q: "Which muscle has a dual nerve supply (musculocutaneous + radial)?", o: ["Biceps", "Coracobrachialis", "Brachialis", "Triceps"], a: 2, e: "Small lateral part of brachialis is supplied by the radial nerve." },
    { q: "The musculocutaneous nerve enters the arm by piercing:", o: ["Biceps", "Brachialis", "Coracobrachialis", "Medial septum"], a: 2, e: "Then runs between biceps and brachialis." },
    { q: "The musculocutaneous nerve continues as the:", o: ["Medial cutaneous nerve of forearm", "Lateral cutaneous nerve of forearm", "Posterior cutaneous nerve of forearm", "Superficial radial nerve"], a: 1, e: "Pierces deep fascia above the elbow, lateral to biceps tendon." },
    { q: "Which nerve gives NO branches in the arm?", o: ["Musculocutaneous", "Radial", "Ulnar", "All give branches"], a: 2, e: "Ulnar and median give no (muscular) branches in the arm." },
    { q: "The ulnar nerve pierces the medial intermuscular septum accompanied by:", o: ["Profunda brachii artery", "Superior ulnar collateral artery", "Inferior ulnar collateral artery", "Basilic vein"], a: 1, e: "At the level of the coracobrachialis insertion." },
    { q: "The brachial artery begins at the:", o: ["Lateral border of 1st rib", "Lower border of pectoralis minor", "Inferior border of teres major", "Surgical neck of humerus"], a: 2, e: "Continuation of the axillary artery." },
    { q: "The brachial artery terminates at the level of the:", o: ["Medial epicondyle", "Neck of radius", "Radial tuberosity", "Elbow crease"], a: 1, e: "Divides into radial & ulnar arteries in the cubital fossa at the neck of the radius." },
    { q: "The median nerve crosses the brachial artery:", o: ["From medial to lateral", "From lateral to medial", "Posteriorly", "It does not cross"], a: 1, e: "Lateral to the artery above, medial to it below." },
    { q: "Medial relation of the lower part of the brachial artery:", o: ["Ulnar nerve", "Basilic vein", "Median nerve", "Biceps tendon"], a: 2, e: "Upper part medially: ulnar nerve & basilic vein; lower part medially: median nerve." },
    { q: "The profunda brachii artery accompanies the:", o: ["Ulnar nerve", "Radial nerve in the spiral groove", "Median nerve", "Axillary nerve"], a: 1, e: "Superior ulnar collateral follows the ulnar nerve." },
    { q: "Which branch takes part in the anastomosis around the elbow?", o: ["Profunda brachii only", "Inferior ulnar collateral artery", "Nutrient artery", "Muscular branches"], a: 1, e: "Arises near the termination of the brachial artery." },
    { q: "The primary site to feel the brachial pulse is:", o: ["Mid-arm lateral to biceps", "Cubital fossa medial to biceps tendon", "Behind the medial epicondyle", "Lateral to biceps tendon"], a: 1, e: "Just above the elbow crease, medial to the biceps tendon." },
    { q: "The radial nerve runs in the spiral groove between:", o: ["Long & lateral heads of triceps", "Medial & lateral heads of triceps", "Brachialis & biceps", "Long & medial heads"], a: 1, e: "With the profunda brachii artery." },
    { q: "Contents of the lower triangular space (triangular interval):", o: ["Axillary nerve", "Circumflex scapular artery", "Radial nerve & profunda brachii vessels", "Ulnar nerve"], a: 2, e: "Bounded by teres major, long head of triceps, humerus/lateral head." },
    { q: "Radial nerve branch given in the axilla:", o: ["Lower lateral cutaneous nerve of arm", "Posterior cutaneous nerve of forearm", "Posterior cutaneous nerve of arm", "Superficial branch"], a: 2, e: "The other two cutaneous branches come off in the spiral groove." },
    { q: "Muscles supplied by the radial nerve in the anterior compartment of the arm:", o: ["Biceps & brachialis", "Lateral part of brachialis, brachioradialis, ECRL", "Coracobrachialis", "Pronator teres"], a: 1, e: "Plus articular branches to the elbow." },
    { q: "The lateral boundary of the cubital fossa is:", o: ["Pronator teres", "Brachioradialis", "Biceps tendon", "Supinator"], a: 1, e: "Medial = pronator teres." },
    { q: "The floor of the cubital fossa is formed by:", o: ["Brachialis & supinator", "Biceps & brachialis", "Pronator teres & FCR", "Bicipital aponeurosis"], a: 0, e: "Brachialis medially, supinator laterally." },
    { q: "The most medial content of the cubital fossa is the:", o: ["Biceps tendon", "Brachial artery", "Median nerve", "Radial nerve"], a: 2, e: "Medial → lateral: median nerve, brachial artery, biceps tendon, radial nerve." },
    { q: "Which structure lies in the roof of the cubital fossa?", o: ["Median nerve", "Median cubital vein", "Brachial artery", "Radial nerve"], a: 1, e: "Roof: median cubital vein, lateral cutaneous nerve of forearm, bicipital aponeurosis." },
    { q: "Efferents of the supratrochlear lymph node go to the:", o: ["Apical nodes", "Lateral axillary nodes", "Infraclavicular nodes", "Central nodes"], a: 1, e: "It drains the 3rd–5th fingers, medial hand & forearm." },
    { q: "The cephalic vein ends by piercing the:", o: ["Brachial fascia in mid-arm", "Clavipectoral fascia", "Axillary fascia", "Lateral septum"], a: 1, e: "Then ends in the axillary vein. The basilic pierces deep fascia in mid-arm." },
    { q: "The basilic vein continues as the axillary vein at the:", o: ["Lateral border of 1st rib", "Lower border of teres major", "Deltopectoral triangle", "Middle of the arm"], a: 1, e: "After joining the brachial venae comitantes." },
    { q: "The vein preferred in obese patients because of its constant position is the:", o: ["Basilic", "Median cubital", "Cephalic", "Brachial"], a: 2, e: "Constant position: available even when not seen." }
  ]
};
