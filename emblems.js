/* BATTLE OF THE MODELS — fighter emblems (self-contained SVG, no external assets) */
(function () {
  const FIGHTERS = {
    sd25: { name: "Seedance 2.5", nick: "The Tornado", vendor: "BYTEDANCE", c1: "#00e5c3", c2: "#009e86", ink: "#04211d" },
    sd20: { name: "Seedance 2.0", nick: "The Beatmaster", vendor: "BYTEDANCE", c1: "#4da3ff", c2: "#2563eb", ink: "#081a30" },
    kling: { name: "Kling 3.0", nick: "The Emperor", vendor: "KUAISHOU", c1: "#ffb020", c2: "#e07b00", ink: "#2a1a02" },
    omni: { name: "Gemini Omni Flash", nick: "The Director", vendor: "GOOGLE DEEPMIND", c1: "#8f7dff", c2: "#5b46e5", ink: "#140f33" }
  };

  const OCT = "68,10 132,10 190,68 190,132 132,190 68,190 10,132 10,68";

  function glyph(id) {
    switch (id) {
      case "sd25": // tornado swirl + 2.5
        return `
          <g stroke="#ffffff" stroke-width="7" fill="none" stroke-linecap="round">
            <path d="M58 66 H142"/>
            <path d="M70 92 H130"/>
            <path d="M84 118 H116"/>
          </g>
          <text x="100" y="160" text-anchor="middle" font-family="Arial Black, Arial" font-size="30" fill="#ffffff">2.5</text>`;
      case "sd20": // eighth note + beat bars
        return `
          <g fill="#ffffff">
            <rect x="60" y="98" width="10" height="26" rx="3"/>
            <rect x="78" y="84" width="10" height="40" rx="3"/>
            <rect x="96" y="70" width="10" height="54" rx="3"/>
          </g>
          <circle cx="128" cy="128" r="13" fill="#ffffff"/>
          <rect x="139" y="72" width="7" height="56" fill="#ffffff"/>
          <path d="M139 72 q22 6 24 22 l-7 2 q-3 -12 -17 -15 z" fill="#ffffff"/>
          <text x="100" y="164" text-anchor="middle" font-family="Arial Black, Arial" font-size="26" fill="#ffffff">2.0</text>`;
      case "kling": // aperture crown + 3.0
        return `
          <g stroke="#ffffff" stroke-width="7" fill="none" stroke-linejoin="round">
            <path d="M100 52 L118 68 L142 62 L134 88 L148 108 H92 L106 88 L98 62 Z"/>
          </g>
          <circle cx="100" cy="76" r="5" fill="#ffffff"/>
          <text x="100" y="146" text-anchor="middle" font-family="Arial Black, Arial" font-size="34" fill="#ffffff">3.0</text>
          <rect x="62" y="158" width="76" height="6" rx="3" fill="#ffffff"/>`;
      case "omni": // gemini sparkle + infinity
        return `
          <path d="M100 44 L112 88 L156 100 L112 112 L100 156 L88 112 L44 100 L88 88 Z" fill="#ffffff"/>
          <path d="M74 132 q13 -14 26 0 t26 0" stroke="#ffffff" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    }
    return "";
  }

  function emblem(id) {
    const f = FIGHTERS[id];
    if (!f) return "";
    return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${f.name} emblem">
      <defs>
        <linearGradient id="g-${id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${f.c1}"/>
          <stop offset="1" stop-color="${f.c2}"/>
        </linearGradient>
      </defs>
      <polygon points="${OCT}" fill="url(#g-${id})"/>
      <polygon points="${OCT}" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2"/>
      <circle cx="100" cy="100" r="62" fill="${f.ink}" opacity="0.92"/>
      <circle cx="100" cy="100" r="62" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="1.5"/>
      ${glyph(id)}
      <text x="100" y="24" text-anchor="middle" font-family="Arial Black, Arial" font-size="9" letter-spacing="2" fill="#ffffff" opacity="0.85">${f.vendor}</text>
      <text x="100" y="186" text-anchor="middle" font-family="Arial Black, Arial" font-size="9.5" letter-spacing="1.5" fill="${f.ink}" font-weight="900">QF AI</text>
    </svg>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-emblem]").forEach(function (el) {
      el.innerHTML = emblem(el.getAttribute("data-emblem"));
    });
  });

  window.EMBLEMS = { fighter: emblem, data: FIGHTERS };
})();
