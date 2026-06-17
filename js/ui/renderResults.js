function generateSignalSummary(profile) {
      const [surface, selfImage, innerCore] = profile.animals;
      return `
        <div class="reading-block compact">
          <h3>Signal Summary</h3>
          <p>${escapeHtml(profile.name)} reads as ${escapeHtml(profileSummary(profile).replace(/\.$/, "").toLowerCase())}. The first impression is shaped by <strong>${escapeHtml(knownOrFallback(surface, "animal"))}</strong>, the protected self-image by <strong>${escapeHtml(knownOrFallback(selfImage, "animal"))}</strong>, and the deeper engine by <strong>${escapeHtml(knownOrFallback(innerCore, "animal"))}</strong>.</p>
          <div class="summary-grid">
            <div class="summary-item"><span class="meta-label">Outer signal</span><strong>${escapeHtml(knownOrFallback(surface, "animal"))}</strong></div>
            <div class="summary-item"><span class="meta-label">Protected identity</span><strong>${escapeHtml(knownOrFallback(selfImage, "animal"))}</strong></div>
            <div class="summary-item"><span class="meta-label">Inner engine</span><strong>${escapeHtml(knownOrFallback(innerCore, "animal"))}</strong></div>
          </div>
        </div>
      `;
    }

    function generateColourBlock(profile) {
      const known = profile.colours.filter(c => c.data);
      const unknown = profile.colours.filter(c => !c.data);
      const names = knownNames(profile.colours, "colour");
      const paragraphs = known.map(c => `<p><strong>${escapeHtml(c.data.name)}</strong>: ${escapeHtml(c.data.paragraph)}</p>`).join("");
      const unknownText = unknown.length ? `<p><strong>Pending expansion:</strong> ${unknown.map(u => `<strong>${escapeHtml(u.raw)}</strong>`).join(", ")} still needs a programmed colour entry. It has been saved for review.</p>` : "";
      return `
        <div class="reading-block">
          <h3>Colour Signature</h3>
          <p><span class="meta-label">${escapeHtml(names || "No colour signal entered")}</span></p>
          ${paragraphs || "<p>No known colours were entered yet.</p>"}
          ${unknownText}
        </div>
      `;
    }

    function generateAnimalBlock(profile) {
      const [surface, selfImage, innerCore] = profile.animals;
      const blocks = [
        { index: "01", title: "Surface Layer", subtitle: "how people see you", animal: surface, field: "surface" },
        { index: "02", title: "Self-Image Layer", subtitle: "how you see yourself", animal: selfImage, field: "selfImage" },
        { index: "03", title: "Inner Core Layer", subtitle: "how you really are deep down", animal: innerCore, field: "innerCore" }
      ];
      const cards = blocks.map(block => {
        const a = block.animal;
        const body = a?.data
          ? a.data[block.field]
          : `${a?.raw || "This animal"} is pending a proper archetype entry. The rest of the dossier can still resolve.`;
        return `
          <div class="layer-card">
            <span class="meta-label">${block.index} / ${block.subtitle}</span>
            <strong>${escapeHtml(block.title)}: ${escapeHtml(a?.data?.name || a?.raw || "Unknown Animal")}</strong>
            <p>${escapeHtml(body)}</p>
          </div>
        `;
      }).join("");
      return `
        <div class="reading-block">
          <h3>Instinct Sequence Reveal</h3>
          <p>The animal order was never random. The first animal reveals the surface layer, the second reveals self-image, and the third reveals the inner core.</p>
          <div class="layer-grid">${cards}</div>
        </div>
      `;
    }

    function generateTemperamentBlock(profile) {
      const temp = getPrimaryTemperament(profile);
      const primaryData = Object.values(TEMPERAMENTS).find(t => t.key === temp.primaryKey);
      const secondaryData = Object.values(TEMPERAMENTS).find(t => t.key === temp.secondaryKey);
      const total = profile.temperament.total;
      const meters = Object.entries(profile.temperament.scores).map(([key, value]) => {
        const t = Object.values(TEMPERAMENTS).find(x => x.key === key);
        const percent = Math.round((value / total) * 100);
        return `
          <div class="meter">
            <strong><span>${escapeHtml(t.label)}</span><span>${percent}%</span></strong>
            <div class="bar"><span style="width:${percent}%"></span></div>
          </div>
        `;
      }).join("");
      return `
        <div class="reading-block">
          <h3>Temperament Blend</h3>
          <p>This dossier reads primarily as <strong>${escapeHtml(primaryData?.label || "Mixed")}</strong>${secondaryData && temp.secondaryScore > 0 ? ` with a <strong>${escapeHtml(secondaryData.label)}</strong> influence` : ""}. That gives the profile ${escapeHtml(primaryData?.summary || "a mixed temperament pattern")}${secondaryData && temp.secondaryScore > 0 ? `, with ${escapeHtml(secondaryData.summary)} underneath it` : ""}.</p>
          <div class="meter-grid">${meters}</div>
        </div>
      `;
    }

    function generateShadowEdgeBlock(profile) {
      return `
        <div class="reading-block compact">
          <h3>Shadow Edge</h3>
          <p>${escapeHtml(shadowEdge(profile))}</p>
        </div>
      `;
    }

    function generateGrowthRule(profile, title) {
      const core = profile.animals[2]?.data?.name || profile.animals[2]?.raw || "inner core";
      return `
        <div class="reading-block compact">
          <h3>Growth Rule</h3>
          <p>The rule for <strong>${escapeHtml(title)}</strong>: use the temperament as fuel, the ${escapeHtml(core)} as direction, and the colour signature as presentation. The profile gets magnetic when the signal is chosen; it gets messy when the shadow starts driving.</p>
        </div>
      `;
    }

    function generateFullDossier(profile, title) {
      const colourNames = knownNames(profile.colours, "colour", " + ");
      const animalNames = knownNames(profile.animals, "animal", " -> ");
      return `
        <div class="reading-block">
          <h3>Full Dossier</h3>
          <p>${escapeHtml(profile.name)} comes across as a layered archetype built from ${escapeHtml(colourNames || "an unresolved colour signal")} and the instinct sequence of ${escapeHtml(animalNames || "an unresolved animal stack")}. The profile's power lives in the blend: the version people meet, the identity the person protects, and the deeper instinct underneath everything.</p>
          <p>The best version of this file is clear, stylish, and honest about its appetite. The danger pattern is letting performance, pride, avoidance, or control replace direct communication.</p>
        </div>
      `;
    }

    function generateSingleReading(profile) {
      const title = archetypeName(profile);
      const temp = getPrimaryTemperament(profile);
      const badges = [knownNames(profile.colours, "colour"), knownNames(profile.animals, "animal", " -> "), temperamentBlend(profile)].map(x => `<span class="badge">${escapeHtml(x || "Pending")}</span>`).join("");
      return `
        <div class="result-card">
          ${generateShareCard(profile, title)}
          <div class="profile-title">
            <div>
              <div class="meta-label">Master profile reading</div>
              <h2>${escapeHtml(profile.name)} — ${escapeHtml(title)}</h2>
              <p>The reveal maps the first favourite animal to surface, the second to self-image, and the third to inner core. Compatibility ratings stay out of single profiles.</p>
              <div class="badge-row">${badges}</div>
            </div>
            <div class="controls" style="margin:0">
              <button class="secondary" type="button" onclick="copyResult()">Copy</button>
              <button class="ghost" type="button" onclick="window.print()">Print</button>
            </div>
          </div>
          ${generateSignalSummary(profile)}
          ${generateColourBlock(profile)}
          ${generateAnimalBlock(profile)}
          ${generateTemperamentBlock(profile)}
          ${generateShadowEdgeBlock(profile)}
          ${generateGrowthRule(profile, title)}
          ${generateFullDossier(profile, title)}
        </div>
      `;
    }

    function generateCompatibilityReading(a, b) {
      const aTemp = getPrimaryTemperament(a);
      const bTemp = getPrimaryTemperament(b);
      const sharedColours = a.colours.map(c => c.slug).filter(slug => b.colours.map(c => c.slug).includes(slug));
      const sharedAnimals = a.animals.map(x => x.slug).filter(slug => b.animals.map(x => x.slug).includes(slug));
      const intensity = estimateCompatibility(a, b);
      return `
        <div class="result-card">
          <div class="profile-title">
            <div>
              <div class="meta-label">Compatibility dossier</div>
              <h2>${escapeHtml(a.name)} x ${escapeHtml(b.name)}</h2>
              <p>This reading compares shared signal, temperament fit, instinct sequence interaction, chemistry potential, and friction risk.</p>
              <div class="badge-row">
                <span class="badge">${escapeHtml(archetypeName(a))}</span>
                <span class="badge">${escapeHtml(archetypeName(b))}</span>
              </div>
            </div>
            <div class="controls" style="margin:0">
              <button class="secondary" type="button" onclick="copyResult()">Copy</button>
              <button class="ghost" type="button" onclick="window.print()">Print</button>
            </div>
          </div>

          <div class="reading-block">
            <h3>Shared Signal</h3>
            <p>${sharedColours.length ? `The strongest colour overlap is ${sharedColours.map(slug => COLOURS[slug]?.name || slug).join(", ")}. Shared colours usually mean shared aesthetic instinct, emotional tone, or attraction to similar symbolism.` : "There is no direct colour overlap, which creates contrast. Contrast is not bad; it means the pull may come from difference instead of sameness."}</p>
            <p>${sharedAnimals.length ? `There is also animal overlap through ${sharedAnimals.map(slug => ANIMALS[slug]?.name || slug).join(", ")}, which can create instant recognition.` : "There is no direct animal overlap, so the dynamic depends more on how the instinct stacks interact than on similarity."}</p>
          </div>

          <div class="reading-block">
            <h3>Temperament Fit</h3>
            <p>${escapeHtml(a.name)} reads primarily as <strong>${escapeHtml(aTemp.primaryLabel)}</strong>, while ${escapeHtml(b.name)} reads primarily as <strong>${escapeHtml(bTemp.primaryLabel)}</strong>. If those temperaments complement each other, the bond feels energizing. If they compete, the same chemistry can become ego friction.</p>
          </div>

          <div class="reading-block">
            <h3>Instinct Dynamic</h3>
            <p>${escapeHtml(a.name)} moves through <strong>${escapeHtml(knownNames(a.animals, "animal", " -> "))}</strong>. ${escapeHtml(b.name)} moves through <strong>${escapeHtml(knownNames(b.animals, "animal", " -> "))}</strong>. The live question is whether each person's surface energy feels safe or exciting to the other's inner core.</p>
          </div>

          <div class="reading-block">
            <h3>Compatibility Ratings</h3>
            <div class="meter-grid">
              ${ratingMeter("Personality", intensity.personality)}
              ${ratingMeter("Chemistry", intensity.chemistry)}
              ${ratingMeter("Conflict Risk", intensity.conflict)}
              ${ratingMeter("Long-Term", intensity.longTerm)}
            </div>
          </div>

          <div class="reading-block">
            <h3>Best Version / Danger Pattern / Clean Rule</h3>
            <p><strong>Best version:</strong> playful, clear, loyal, and emotionally honest.</p>
            <p><strong>Danger pattern:</strong> testing, pride, avoidance, dominance games, or making mystery do the work communication should be doing.</p>
            <p><strong>Clean rule:</strong> keep the chemistry, but do not let ego replace directness.</p>
          </div>
        </div>
      `;
    }

    function ratingMeter(label, value) {
      return `
        <div class="meter">
          <strong><span>${escapeHtml(label)}</span><span>${value}/100</span></strong>
          <div class="bar"><span style="width:${value}%"></span></div>
        </div>
      `;
    }
