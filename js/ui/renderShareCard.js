function generateShareCard(profile, title) {
      const traits = signatureTraits(profile);
      const colourNames = knownNames(profile.colours, "colour");
      const animalNames = knownNames(profile.animals, "animal");
      return `
        <div class="share-card">
          <div class="share-label">The Dossier</div>
          <h2>${escapeHtml(profile.name)} — ${escapeHtml(title)}</h2>
          <p>${escapeHtml(profileSummary(profile))}</p>
          <div class="share-grid">
            <div class="share-item"><span class="meta-label">Colours</span><strong>${escapeHtml(colourNames || "Pending")}</strong></div>
            <div class="share-item"><span class="meta-label">Instincts</span><strong>${escapeHtml(animalNames || "Pending")}</strong></div>
            <div class="share-item"><span class="meta-label">Temperament</span><strong>${escapeHtml(temperamentBlend(profile))}</strong></div>
            <div class="share-item"><span class="meta-label">Signal</span><strong>${escapeHtml(traits.join(" / ") || "Unresolved")}</strong></div>
            <div class="share-item"><span class="meta-label">Shadow</span><strong>${escapeHtml(shadowEdge(profile))}</strong></div>
            <div class="share-item"><span class="meta-label">Use</span><strong>Copy, screenshot, or send the file.</strong></div>
          </div>
        </div>
      `;
    }