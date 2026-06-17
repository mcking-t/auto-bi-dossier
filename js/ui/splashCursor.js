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

    ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      canvas.remove();
      return;
    }

    resize();
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
    document.body.classList.add("velvet-cursor-active");
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
    updateCursorTarget(event.clientX, event.clientY);

    const now = performance.now();
    if (now - lastMove < 18) return;

    const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
    lastMove = now;
    lastX = event.clientX;
    lastY = event.clientY;

    addSplat(event.clientX, event.clientY, Math.min(4, Math.max(1, distance / 38)), false);
    start();
  }

  function handlePointerDown(event) {
    updateCursorTarget(event.clientX, event.clientY);
    pulseUntil = performance.now() + 180;
    addSplat(event.clientX, event.clientY, 9, true);
    start();
  }

  function handlePointerLeave() {
    pointerActive = false;
    document.body.classList.remove("velvet-cursor-visible");
  }

  function updateCursorTarget(x, y) {
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
    if (visible && particles.length) start();
    if (visible && pointerActive) startCursor();
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
    if (!rafId && visible) rafId = requestAnimationFrame(draw);
  }

  function startCursor() {
    if (!cursorRafId && visible) cursorRafId = requestAnimationFrame(drawCursor);
  }

  function stopCursor() {
    if (cursorRafId) cancelAnimationFrame(cursorRafId);
    cursorRafId = null;
  }

  function drawCursor() {
    cursorRafId = null;
    if (!visible || !pointerActive || !cursorDot || !cursorRing) return;

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
    if (!visible) return;

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
    document.body.classList.remove("velvet-cursor-active", "velvet-cursor-visible");
  }

  document.addEventListener("DOMContentLoaded", init, { once: true });
})();
