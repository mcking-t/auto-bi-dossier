function makePersonForm(formId, label) {
      const form = document.getElementById(formId);
      const suffix = form.dataset.person;
      form.innerHTML = `
        <div class="panel-head">
          <div>
            <h2>${label}</h2>
            <p class="small-note">Build the file fast. The animal choices stay instinctive; the layer reveal comes later.</p>
          </div>
          <span class="pill">Subject ${suffix}</span>
        </div>

        <div class="form-section" data-step="identity">
          <h3><span class="section-index">01</span> Identity</h3>
          <div class="field-grid">
            <label>Name
              <input name="name" placeholder="Moe" ${suffix === "A" ? "value='Moe'" : ""} />
            </label>
            <label>Optional note
              <input name="note" placeholder="Age, context, vibe, relationship, etc." />
            </label>
          </div>
        </div>

        <div class="form-section" data-step="colours">
          <h3><span class="section-index">02</span> Colours</h3>
          <div class="field-grid single">
            <label>Favourite colours, separated by commas
              <input name="colours" placeholder="black, purple" ${suffix === "A" ? "value='black, purple'" : ""} required />
            </label>
          </div>
        </div>

        <div class="form-section" data-step="instincts">
          <h3><span class="section-index">03</span> Instinct sequence</h3>
          <div class="field-grid single">
            <label>1. What’s your favourite animal?
              <input name="animal1" placeholder="Monkey" ${suffix === "A" ? "value='Monkey'" : ""} required />
            </label>
            <label>2. If that animal didn’t exist, what would be your next favourite animal?
              <input name="animal2" placeholder="Black Panther" ${suffix === "A" ? "value='Black Panther'" : ""} required />
            </label>
            <label>3. If the first two animals didn’t exist, what would be your final favourite animal?
              <input name="animal3" placeholder="Belgian Malinois" ${suffix === "A" ? "value='Belgian Malinois'" : ""} required />
            </label>
          </div>
        </div>

        <div class="form-section" data-step="temperament">
          <h3><span class="section-index">04</span> Temperament</h3>
          <p class="small-note">Pick the letter or mix that hits first.</p>
          <div class="temperament-grid" id="temperament-${suffix}"></div>
          <details style="margin-top:14px">
            <summary>Optional 5 bonus questions</summary>
            <div class="temperament-grid" id="bonus-${suffix}" style="margin-top:14px"></div>
          </details>
        </div>
      `;
      renderQuestions(`temperament-${suffix}`, TEMPERAMENT_QUESTIONS, 1, suffix);
      renderQuestions(`bonus-${suffix}`, BONUS_QUESTIONS, 16, suffix, true);
    }

    function renderQuestions(containerId, questions, startNumber, suffix, optional = false) {
      const container = document.getElementById(containerId);
      container.innerHTML = questions.map((question, index) => {
        const number = startNumber + index;
        const options = OPTIONS[number] || [];
        return `
          <div class="question-row">
            <p><b>${number}.</b> ${question}<span class="question-options">${options.join(" / ")}</span></p>
            <div class="answer-box">
              <input
                class="answer-input"
                name="q${number}"
                placeholder="A, A/D, AC"
                autocomplete="off"
                autocapitalize="characters"
                inputmode="text"
                data-answer-input
                ${optional ? "" : "required"}
              />
              <div class="chip-row" aria-label="Quick picks">
                ${["A", "B", "C", "D"].map(letter => `<button class="chip" type="button" data-answer-chip="${letter}">${letter}</button>`).join("")}
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    function bindTemperamentControls() {
      document.querySelectorAll("[data-answer-input]").forEach(input => updateParsePreview(input));

      document.addEventListener("input", event => {
        if (event.target.matches("[data-answer-input]")) {
          updateParsePreview(event.target);
        }
      });

      document.addEventListener("click", event => {
        const chip = event.target.closest("[data-answer-chip]");
        if (!chip) return;

        const box = chip.closest(".answer-box");
        const input = box?.querySelector("[data-answer-input]");
        if (!input) return;

        const letter = chip.dataset.answerChip;
        input.value = nextChipValue(input.value, letter);
        input.focus();
        updateParsePreview(input);
      });
    }

    function nextChipValue(current, letter) {
      const raw = String(current || "").trim().toUpperCase();
      if (!raw) return letter;

      const letters = extractLetters(raw);
      if (!letters.length) return letter;
      if (letters.includes(letter)) return raw;
      if (letters.length === 1) return `${letters[0]}/${letter}`;

      return `${[...new Set([...letters, letter])].join("/")}`;
    }

    function updateParsePreview(input) {
      const letters = extractLetters(input.value);
      input.closest(".answer-box")?.querySelectorAll("[data-answer-chip]").forEach(chip => {
        chip.classList.toggle("active", letters.includes(chip.dataset.answerChip));
      });
    }