(() => {
  const STORAGE_KEY = "__random_logo_icon";
  const EXCLUDED = new Set(["lucide-menu", "lucide-search"]);

  const getIconClass = (svg) =>
    Array.from(svg.classList).find((name) => name.startsWith("lucide-"));

  const pickLogoSvg = () => {
    const svgMap = new Map();

    for (const svg of document.querySelectorAll("svg.lucide")) {
      const iconClass = getIconClass(svg);
      if (!iconClass || EXCLUDED.has(iconClass)) continue;
      if (!svgMap.has(iconClass)) svgMap.set(iconClass, svg.outerHTML);
    }

    const pool = Array.from(svgMap.keys());
    if (!pool.length) return null;

    let pickedClass = sessionStorage.getItem(STORAGE_KEY);
    if (!pickedClass || !svgMap.has(pickedClass)) {
      pickedClass = pool[Math.floor(Math.random() * pool.length)];
      sessionStorage.setItem(STORAGE_KEY, pickedClass);
    }

    return svgMap.get(pickedClass) || null;
  };

  const applyRandomLogo = () => {
    const svgMarkup = pickLogoSvg();
    if (!svgMarkup) return;

    for (const logo of document.querySelectorAll("a.md-logo")) {
      logo.innerHTML = svgMarkup;
    }
  };

  const boot = () => applyRandomLogo();

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(boot);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
