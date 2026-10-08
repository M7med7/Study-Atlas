/**
 * Progress model: per-browser study progress persisted in localStorage.
 * Storage can be blocked (private mode, disabled site data), so every access is guarded
 * and the app keeps working in memory if persistence fails.
 */

const KEYS = Object.freeze({ read: "ul.read", flash: "ul.flash", quiz: "ul.quiz", theme: "ul.theme" });

/** @returns {Storage|null} */
function browserStorage() {
  try {
    const s = globalThis.localStorage;
    const probe = "__ul_probe__";
    s.setItem(probe, "1");
    s.removeItem(probe);
    return s;
  } catch {
    return null;
  }
}

/**
 * @param {Pick<Storage,"getItem"|"setItem">|null} [storage] injectable for tests
 */
export function createProgressStore(storage = browserStorage()) {
  const memory = new Map();

  const read = (key, fallback) => {
    try {
      const raw = storage ? storage.getItem(key) : memory.get(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  };
  const write = (key, value) => {
    const raw = JSON.stringify(value);
    memory.set(key, raw);
    try { storage && storage.setItem(key, raw); } catch { /* quota or blocked: keep in-memory copy */ }
  };

  return {
    persistent: Boolean(storage),

    // --- Sections studied ---
    /** @param {string} lectureId @returns {string[]} */
    readSections: (lectureId) => read(KEYS.read, {})[lectureId] || [],
    /** @param {string} lectureId @param {string} sectionId */
    isRead(lectureId, sectionId) { return this.readSections(lectureId).includes(sectionId); },
    /** @param {string} lectureId @param {string} sectionId @returns {boolean} new state */
    toggleRead(lectureId, sectionId) {
      const all = read(KEYS.read, {});
      const current = all[lectureId] || [];
      const next = current.includes(sectionId) ? current.filter((s) => s !== sectionId) : [...current, sectionId];
      write(KEYS.read, { ...all, [lectureId]: next });
      return next.includes(sectionId);
    },

    // --- Flashcards ---
    /** @param {string} cardId @returns {"known"|"again"|undefined} */
    cardStatus: (cardId) => read(KEYS.flash, {})[cardId],
    /** @param {string} cardId @param {"known"|"again"} status */
    setCardStatus(cardId, status) {
      write(KEYS.flash, { ...read(KEYS.flash, {}), [cardId]: status });
    },
    /** @param {string[]} cardIds */
    resetCards(cardIds) {
      const all = { ...read(KEYS.flash, {}) };
      cardIds.forEach((id) => delete all[id]);
      write(KEYS.flash, all);
    },

    // --- Quiz ---
    /** @param {string} key */
    quizBest: (key) => read(KEYS.quiz, {})[key],
    /** @param {string} key @param {number} percent @returns {boolean} true if new best */
    recordQuiz(key, percent) {
      const all = read(KEYS.quiz, {});
      const isBest = all[key] === undefined || percent > all[key];
      if (isBest) write(KEYS.quiz, { ...all, [key]: percent });
      return isBest;
    },

    // --- Theme ---
    theme: () => read(KEYS.theme, null),
    /** @param {"light"|"dark"} value */
    setTheme: (value) => write(KEYS.theme, value)
  };
}

export const Progress = createProgressStore();
