function visibleForms() {
      return [...document.querySelectorAll(".person-form")].filter(form => form.offsetParent !== null);
    }

    function validateVisibleForms() {
      for (const form of visibleForms()) {
        if (!form.checkValidity()) {
          form.reportValidity();
          form.scrollIntoView({ behavior: "smooth", block: "start" });
          return false;
        }
      }
      return true;
    }

    function scrollToStep(step) {
      const target = visibleForms()[0]?.querySelector(`[data-step="${step}"]`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function generate() {
      if (!validateVisibleForms()) return;

      const a = collectPerson("person-a");
      const result = document.getElementById("result");
      let html = "";
      if (currentMode === "compatibility") {
        const b = collectPerson("person-b");
        html = generateCompatibilityReading(a, b);
      } else {
        html = generateSingleReading(a);
      }
      result.innerHTML = html;
      result.classList.add("visible");
      showUnknownWarning();
      renderUnknowns();
      result.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function copyResult() {
      const result = document.getElementById("result");
      const text = result.innerText.trim();
      navigator.clipboard.writeText(text).then(() => {
        alert("Profile copied.");
      }).catch(() => {
        alert("Copy failed. Select the text manually.");
      });
    }

    function escapeHtml(value) {
      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function clearForms() {
      document.querySelectorAll("input, textarea").forEach(input => input.value = "");
      document.querySelectorAll("[data-answer-input]").forEach(input => updateParsePreview(input));
      document.getElementById("result").classList.remove("visible");
      document.getElementById("result").innerHTML = "";
    }

    function setMode(mode) {
      currentMode = mode;
      document.getElementById("single-tab").classList.toggle("active", mode === "single");
      document.getElementById("compatibility-tab").classList.toggle("active", mode === "compatibility");
      document.getElementById("person-b").style.display = mode === "compatibility" ? "block" : "none";
      document.getElementById("people").classList.toggle("compatibility", mode === "compatibility");
    }

    document.addEventListener("DOMContentLoaded", () => {
      makePersonForm("person-a", "Person A");
      makePersonForm("person-b", "Person B");
      bindTemperamentControls();
      document.getElementById("single-tab").addEventListener("click", () => setMode("single"));
      document.getElementById("compatibility-tab").addEventListener("click", () => setMode("compatibility"));
      document.getElementById("generate").addEventListener("click", generate);
      document.getElementById("clear").addEventListener("click", clearForms);
      document.getElementById("refresh-unknowns").addEventListener("click", renderUnknowns);
      document.getElementById("clear-unknowns").addEventListener("click", () => {
        localStorage.removeItem("archetype_unknown_inputs");
        renderUnknowns();
        showUnknownWarning();
      });
      renderUnknowns();
    });