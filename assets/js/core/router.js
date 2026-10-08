/**
 * Minimal hash router (GitHub Pages has no server-side routing).
 * Routes look like "#/lecture/:id/:section?". Each route maps to a controller:
 *   (outlet: HTMLElement, params: Record<string,string>) => (void | (() => void))
 * The optional returned function is called before the next route mounts (cleanup).
 */
export class Router {
  /** @param {HTMLElement} outlet */
  constructor(outlet) {
    this.outlet = outlet;
    /** @type {{ name: string, parts: string[], controller: Function }[]} */
    this.routes = [];
    this.fallback = null;
    this.cleanup = null;
    this.listeners = [];
  }

  /** @param {string} name @param {string} pattern @param {Function} controller */
  add(name, pattern, controller) {
    this.routes.push({ name, parts: pattern.split("/").filter(Boolean), controller });
    return this;
  }

  /** @param {Function} controller */
  otherwise(controller) {
    this.fallback = controller;
    return this;
  }

  /** Subscribe to route changes (e.g. to highlight navigation). @param {(name: string) => void} fn */
  onChange(fn) {
    this.listeners.push(fn);
    return this;
  }

  start() {
    window.addEventListener("hashchange", () => this.resolve());
    this.resolve();
  }

  /** @param {string} path e.g. "/quiz/all" */
  navigate(path) {
    const next = `#${path}`;
    if (location.hash === next) this.resolve();
    else location.hash = next;
  }

  resolve() {
    const segments = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(safeDecode);
    const match = this.match(segments);
    const controller = match ? match.route.controller : this.fallback;
    const name = match ? match.route.name : "notfound";

    if (typeof this.cleanup === "function") this.cleanup();
    this.cleanup = null;
    this.outlet.innerHTML = "";

    try {
      this.cleanup = controller ? controller(this.outlet, match ? match.params : {}) : null;
    } catch (error) {
      console.error("Route failed:", error);
      this.outlet.innerHTML = `<div class="empty">Something went wrong loading this page. <a href="#/">Back to lectures</a></div>`;
    }
    this.listeners.forEach((fn) => fn(name));
  }

  /** @param {string[]} segments */
  match(segments) {
    for (const route of this.routes) {
      const params = {};
      const ok = route.parts.every((part, i) => {
        const optional = part.endsWith("?");
        const key = part.replace(/^:|\?$/g, "");
        if (part.startsWith(":")) {
          if (segments[i] === undefined) return optional;
          params[key] = segments[i];
          return true;
        }
        return segments[i] === part;
      });
      if (ok && segments.length <= route.parts.length) return { route, params };
    }
    return null;
  }
}

function safeDecode(segment) {
  try { return decodeURIComponent(segment); } catch { return segment; }
}
