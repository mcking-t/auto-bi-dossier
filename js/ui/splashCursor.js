(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarsePointer = window.matchMedia("(pointer: coarse), (hover: none)");

  if (reduceMotion.matches || coarsePointer.matches) return;

  const palette = [
    { r: 59, g: 7, b: 16 },
    { r: 127, g: 29, b: 45 },
    { r: 163, g: 52, b: 76 },
    { r: 139, g: 92, b: 246 },
    { r: 199, g: 167, b: 255 }
  ];

  const maxParticles = 96;
  const storageKeys = {
    splash: "autobiDossierSplashCursor",
    ring: "autobiDossierRingCursor"
  };
  const particles = [];
  let canvas;
  let ctx;
  let width = 0;
  let height = 0;
  let rafId = null;
  let cursorRafId = null;
  let lastMove = 0;
  let lastX = 0;
  let lastY = 0;
  let cursorDot;
  let cursorRing;
  let cursorStyle;
  let togglePanel;
  let splashToggle;
  let ringToggle;
  let splashEnabled = readLayerPreference(storageKeys.splash);
  let ringEnabled = readLayerPreference(storageKeys.ring);
  let pointerActive = false;
  let targetX = 0;
  let targetY = 0;
  let ringX = 0;
  let ringY = 0;
  let pulseUntil = 0;
  let visible = true;

  function init() {
    canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.id = "velvet-splash-cursor";
    canvas.style.cssText = [
      "position:fixed",
      "inset:0",
      "width:100vw",
      "height:100vh",
      "z-index:0",
      "pointer-events:none",
      "opacity:.72",
      "mix-blend-mode:screen"
    ].join(";");

    document.body.prepend(canvas);
    initCursorLayer();
    initTogglePanel();

    ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      canvas.remove();
      return;
    }

    resize();
    syncLayerState();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reduceMotion.addEventListener?.("change", handleMotionChange);
  }

  function initCursorLayer() {
    cursorStyle = document.createElement("style");
    cursorStyle.id = "velvet-cursor-style";
    cursorStyle.textContent = `
      body.velvet-cursor-active,
      body.velvet-cursor-active a,
      body.velvet-cursor-active button,
      body.velvet-cursor-active summary,
      body.velvet-cursor-active [role="button"] {
        cursor: none;
      }

      body.velvet-cursor-active .cursor-toggle-panel,
      body.velvet-cursor-active .cursor-toggle-panel button,
      body.velvet-cursor-active input,
      body.velvet-cursor-active textarea,
      body.velvet-cursor-active select,
      body.velvet-cursor-active [contenteditable="true"] {
        cursor: auto;
      }

      .velvet-cursor-dot,
      .velvet-cursor-ring {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 30;
        pointer-events: none;
        opacity: 0;
        transform: translate3d(-50px, -50px, 0);
        transition: opacity 180ms ease, width 160ms ease, height 160ms ease, border-color 160ms ease, background 160ms ease;
        will-change: transform, opacity, width, height;
      }

      .velvet-cursor-dot {
        width: 7px;
        height: 7px;
        border-radius: 999px;
        background: rgba(199, 167, 255, 0.92);
        box-shadow: 0 0 18px rgba(163, 52, 76, 0.46), 0 0 26px rgba(139, 92, 246, 0.24);
      }

      .velvet-cursor-ring {
        width: 30px;
        height: 30px;
        border: 1px solid rgba(200, 184, 255, 0.32);
        border-radius: 999px;
        box-shadow: inset 0 0 18px rgba(139, 92, 246, 0.08), 0 0 24px rgba(59, 7, 16, 0.24);
      }

      .velvet-cursor-visible .velvet-cursor-dot,
      .velvet-cursor-visible .velvet-cursor-ring {
        opacity: 1;
      }

      .cursor-toggle-panel {
        position: fixed;
        right: max(18px, env(safe-area-inset-right));
        bottom: max(18px, env(safe-area-inset-bottom));
        z-index: 80;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px;
        border: 1px solid rgba(200, 184, 255, 0.18);
        border-radius: 999px;
        background: rgba(6, 5, 10, 0.72);
        box-shadow: 0 16px 50px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(16px);
      }

      .cursor-toggle-panel span {
        padding: 0 7px 0 10px;
        color: rgba(236, 232, 245, 0.58);
        font: 700 10px/1 var(--mono, monospace);
        letter-spacing: 0.13em;
        text-transform: uppercase;
      }

      .cursor-toggle-panel button {
        min-width: 62px;
        min-height: 32px;
        border: 1px solid rgba(200, 184, 255, 0.2);
        border-radius: 999px;
        color: rgba(236, 232, 245, 0.62);
        background: rgba(255, 255, 255, 0.035);
        font: 700 11px/1 var(--sans, system-ui, sans-serif);
        letter-spacing: 0;
        transition: border-color 160ms ease, color 160ms ease, background 160ms ease, box-shadow 160ms ease;
      }

      .cursor-toggle-panel button.is-active {
        border-color: rgba(199, 167, 255, 0.46);
        color: rgba(255, 255, 255, 0.94);
        background: linear-gradient(135deg, rgba(59, 7, 16, 0.72), rgba(139, 92, 246, 0.32));
        box-shadow: 0 0 20px rgba(127, 29, 45, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.08);
      }

      .cursor-toggle-panel button:focus-visible {
        outline: 2px solid rgba(199, 167, 255, 0.72);
        outline-offset: 2px;
      }

      @media (max-width: 720px) {
        .cursor-toggle-panel {
          display: none;
        }
      }
    `;
    document.head.append(cursorStyle);

    cursorDot = document.createElement("div");
    cursorDot.id = "cursor";
    cursorDot.className = "velvet-cursor-dot";
    cursorDot.setAttribute("aria-hidden", "true");

    cursorRing = document.createElement("div");
    cursorRing.id = "cursorRing";
    cursorRing.className = "velvet-cursor-ring";
    cursorRing.setAttribute("aria-hidden", "true");

    document.body.append(cursorDot, cursorRing);
  }

  function initTogglePanel() {
    togglePanel = document.createElement("div");
    togglePanel.className = "cursor-toggle-panel";
    togglePanel.setAttribute("aria-label", "Cursor effects");
    togglePanel.innerHTML = `
      <span>FX</span>
      <button type="button" data-layer="splash">Smoke</button>
      <button type="button" data-layer="ring">Cursor</button>
    `;

    splashToggle = togglePanel.querySelector('[data-layer="splash"]');
    ringToggle = togglePanel.querySelector('[data-layer="ring"]');
    splashToggle.addEventListener("click", () => toggleLayer("splash"));
    ringToggle.addEventListener("click", () => toggleLayer("ring"));
    document.body.append(togglePanel);
  }

  function readLayerPreference(key) {
    try {
      return localStorage.getItem(key) !== "off";
    } catch {
      return true;
    }
  }

  function saveLayerPreference(key, enabled) {
    try {
      localStorage.setItem(key, enabled ? "on" : "off");
    } catch {
      // Ignore storage failures; the toggles still work for the current visit.
    }
  }

  function toggleLayer(layer) {
    if (layer === "splash") {
      splashEnabled = !splashEnabled;
      saveLayerPreference(storageKeys.splash, splashEnabled);
    } else {
      ringEnabled = !ringEnabled;
      saveLayerPreference(storageKeys.ring, ringEnabled);
    }

    syncLayerState();
  }

  function syncLayerState() {
    canvas.style.display = splashEnabled ? "block" : "none";
    document.body.classList.toggle("velvet-cursor-active", ringEnabled);
    document.body.classList.toggle("velvet-cursor-visible", ringEnabled && pointerActive && visible);

    if (cursorDot && cursorRing) {
      const display = ringEnabled ? "block" : "none";
      cursorDot.style.display = display;
      cursorRing.style.display = display;
    }

    if (!splashEnabled) {
      particles.length = 0;
      ctx?.clearRect(0, 0, width, height);
    }

    if (!ringEnabled) stopCursor();

    updateToggleButton(splashToggle, splashEnabled);
    updateToggleButton(ringToggle, ringEnabled);
  }

  function updateToggleButton(button, enabled) {
    if (!button) return;
    button.classList.toggle("is-active", enabled);
    button.setAttribute("aria-pressed", String(enabled));
    button.setAttribute("title", `${button.textContent} effect ${enabled ? "on" : "off"}`);
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function handlePointerMove(event) {
    if (ringEnabled) updateCursorTarget(event.clientX, event.clientY);

    const now = performance.now();
    if (!splashEnabled || now - lastMove < 18) return;

    const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
    lastMove = now;
    lastX = event.clientX;
    lastY = event.clientY;

    addSplat(event.clientX, event.clientY, Math.min(4, Math.max(1, distance / 38)), false);
    start();
  }

  function handlePointerDown(event) {
    if (ringEnabled) {
      updateCursorTarget(event.clientX, event.clientY);
      pulseUntil = performance.now() + 180;
    }

    if (splashEnabled) {
      addSplat(event.clientX, event.clientY, 9, true);
      start();
    }
  }

  function handlePointerLeave() {
    pointerActive = false;
    document.body.classList.remove("velvet-cursor-visible");
  }

  function updateCursorTarget(x, y) {
    if (!ringEnabled) return;

    targetX = x;
    targetY = y;

    if (!pointerActive) {
      ringX = x;
      ringY = y;
      pointerActive = true;
      document.body.classList.add("velvet-cursor-visible");
    }

    startCursor();
  }

  function handleVisibilityChange() {
    visible = !document.hidden;
    if (visible && splashEnabled && particles.length) start();
    if (visible && ringEnabled && pointerActive) startCursor();
    if (!visible) stopCursor();
  }

  function handleMotionChange(event) {
    if (event.matches) destroy();
  }

  function addSplat(x, y, amount, burst) {
    const count = Math.round(amount);
    for (let i = 0; i < count; i++) {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = burst ? 0.45 + Math.random() * 1.15 : 0.16 + Math.random() * 0.42;
      const radius = burst ? 26 + Math.random() * 42 : 18 + Math.random() * 28;
      particles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.12,
        radius,
        life: 1,
        decay: burst ? 0.012 + Math.random() * 0.008 : 0.018 + Math.random() * 0.01,
        color
      });
    }

    if (particles.length > maxParticles) {
      particles.splice(0, particles.length - maxParticles);
    }
  }

  function start() {
    if (!rafId && visible && splashEnabled) rafId = requestAnimationFrame(draw);
  }

  function startCursor() {
    if (!cursorRafId && visible && ringEnabled) cursorRafId = requestAnimationFrame(drawCursor);
  }

  function stopCursor() {
    if (cursorRafId) cancelAnimationFrame(cursorRafId);
    cursorRafId = null;
  }

  function drawCursor() {
    cursorRafId = null;
    if (!visible || !ringEnabled || !pointerActive || !cursorDot || !cursorRing) return;

    ringX += (targetX - ringX) * 0.18;
    ringY += (targetY - ringY) * 0.18;

    const pulsing = performance.now() < pulseUntil;
    const ringSize = pulsing ? 42 : 30;
    const ringOffset = ringSize / 2;

    cursorDot.style.transform = `translate3d(${targetX - 3.5}px, ${targetY - 3.5}px, 0)`;
    cursorRing.style.width = `${ringSize}px`;
    cursorRing.style.height = `${ringSize}px`;
    cursorRing.style.borderColor = pulsing ? "rgba(199, 167, 255, 0.54)" : "rgba(200, 184, 255, 0.32)";
    cursorRing.style.transform = `translate3d(${ringX - ringOffset}px, ${ringY - ringOffset}px, 0)`;

    if (Math.hypot(targetX - ringX, targetY - ringY) > 0.12 || pulsing) {
      cursorRafId = requestAnimationFrame(drawCursor);
    }
  }

  function draw() {
    rafId = null;
    if (!visible || !splashEnabled) return;

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.985;
      particle.vy *= 0.985;
      particle.radius *= 1.012;
      particle.life -= particle.decay;

      if (particle.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      drawParticle(particle);
    }

    ctx.globalCompositeOperation = "source-over";

    if (particles.length) {
      rafId = requestAnimationFrame(draw);
    }
  }

  function drawParticle(particle) {
    const alpha = Math.max(0, particle.life) * 0.18;
    const gradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      particle.radius
    );
    const { r, g, b } = particle.color;
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
    gradient.addColorStop(0.44, `rgba(${r}, ${g}, ${b}, ${alpha * 0.38})`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function destroy() {
    if (rafId) cancelAnimationFrame(rafId);
    stopCursor();
    rafId = null;
    particles.length = 0;
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerdown", handlePointerDown);
    window.removeEventListener("pointerleave", handlePointerLeave);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    reduceMotion.removeEventListener?.("change", handleMotionChange);
    canvas?.remove();
    cursorDot?.remove();
    cursorRing?.remove();
    cursorStyle?.remove();
    togglePanel?.remove();
    document.body.classList.remove("velvet-cursor-active", "velvet-cursor-visible");
  }

  document.addEventListener("DOMContentLoaded", init, { once: true });
})();
