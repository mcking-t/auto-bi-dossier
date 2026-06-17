function logUnknownInput(type, value, context = {}) {
      if (!value || !String(value).trim()) return;
      const key = "archetype_unknown_inputs";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const entry = {
        id: crypto?.randomUUID?.() || String(Date.now() + Math.random()),
        type,
        value: String(value).trim(),
        context,
        status: "pending_review",
        createdAt: new Date().toISOString()
      };
      const duplicate = existing.some(x => x.type === entry.type && normalize(x.value) === normalize(entry.value));
      if (!duplicate) {
        existing.push(entry);
        localStorage.setItem(key, JSON.stringify(existing));
      }

      // Future Supabase/Vercel route:
      // fetch('/api/log-unknown', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(entry)
      // });
    }

    function getUnknownInputs() {
      return JSON.parse(localStorage.getItem("archetype_unknown_inputs") || "[]");
    }

    function renderUnknowns() {
      const list = getUnknownInputs();
      const box = document.getElementById("unknown-list");
      if (!list.length) {
        box.textContent = "No unknown inputs logged yet.";
        return;
      }
      box.innerHTML = list.map(item => `
        <div class="feature" style="margin-bottom:10px">
          <strong>${escapeHtml(item.type)}: ${escapeHtml(item.value)}</strong>
          <span>Profile: ${escapeHtml(item.context?.profileName || "Unknown")} · Layer: ${escapeHtml(item.context?.layerPosition || "n/a")} · ${new Date(item.createdAt).toLocaleString()}</span>
        </div>
      `).join("");
    }

    function showUnknownWarning() {
      const list = getUnknownInputs();
      const warning = document.getElementById("unknown-warning");
      if (!list.length) {
        warning.classList.remove("visible");
        warning.innerHTML = "";
        return;
      }
      const recent = list.slice(-5).map(x => `<code>${escapeHtml(x.value)}</code>`).join(" ");
      warning.classList.add("visible");
      warning.innerHTML = `Unknown inputs logged for review: ${recent}`;
    }