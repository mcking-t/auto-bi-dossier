function getPrimaryTemperament(profile) {
      const [primary, secondary, tertiary] = profile.temperament.ranked;
      const keyToLetter = { choleric: "A", phlegmatic: "B", melancholic: "C", sanguine: "D" };
      return {
        primaryKey: primary[0],
        primaryScore: primary[1],
        primaryLabel: Object.values(TEMPERAMENTS).find(t => t.key === primary[0])?.label || "Mixed",
        secondaryKey: secondary?.[0],
        secondaryScore: secondary?.[1] || 0,
        secondaryLabel: Object.values(TEMPERAMENTS).find(t => t.key === secondary?.[0])?.label || "Mixed",
        tertiaryKey: tertiary?.[0],
        tertiaryLabel: Object.values(TEMPERAMENTS).find(t => t.key === tertiary?.[0])?.label || "Mixed",
        keyToLetter
      };
    }

    function archetypeName(profile) {
      const colourSlugs = profile.colours.map(c => c.slug);
      const animalSlugs = profile.animals.map(a => a.slug);
      const temp = getPrimaryTemperament(profile);
      const isMoeStack = colourSlugs.includes("black") && colourSlugs.includes("purple") && animalSlugs.includes("monkey") && animalSlugs.includes("black-panther") && animalSlugs.includes("belgian-malinois");
      if (isMoeStack) return "The Black Crown Operator";

      const primaryColour = profile.colours[0]?.data?.name || profile.colours[0]?.raw || "Unknown";
      const coreAnimal = profile.animals[2]?.data?.name || profile.animals[2]?.raw || "Archetype";
      const map = {
        choleric: ["Crowned", "Operator", "Commander"],
        sanguine: ["Electric", "Performer", "Spark"],
        melancholic: ["Moonlit", "Seer", "Architect"],
        phlegmatic: ["Quiet", "Anchor", "Current"]
      };
      const words = map[temp.primaryKey] || ["Hidden", "Archetype", "Signal"];
      return `The ${primaryColour} ${words[0]} ${coreAnimal}`;
    }

    function knownOrFallback(item, kind) {
      if (item.data) return item.data.name;
      if (!item.raw) return "Unanswered";
      return `${item.raw} (pending ${kind} library entry)`;
    }

    function temperamentBlend(profile) {
      const temp = getPrimaryTemperament(profile);
      return temp.secondaryScore > 0 ? `${temp.primaryLabel}-${temp.secondaryLabel}` : temp.primaryLabel;
    }

    function knownNames(items, kind, separator = " / ") {
      return items.map(item => knownOrFallback(item, kind)).join(separator);
    }

    function signatureTraits(profile) {
      const traits = profile.animals
        .flatMap(animal => animal.data?.traits || [])
        .concat(getPrimaryTemperament(profile).primaryLabel)
        .filter(Boolean);
      return [...new Set(traits)].slice(0, 3);
    }

    function shadowEdge(profile) {
      const innerCore = profile.animals[2];
      if (innerCore?.data?.shadow) return innerCore.data.shadow.replace(/^In shadow,?\s*/i, "");
      const firstColour = profile.colours.find(colour => colour.data);
      if (firstColour?.data) {
        if (firstColour.data.shadow) return firstColour.data.shadow;
        const fromParagraph = firstColour.data.paragraph?.split("The shadow is ")[1];
        if (fromParagraph) return fromParagraph;
      }
      return "This profile needs sharper library entries before the shadow edge can fully resolve.";
    }

    function profileSummary(profile) {
      const knownColours = profile.colours.filter(c => c.data).map(c => c.data.tone.split(",")[0]);
      const knownAnimals = profile.animals.filter(a => a.data).flatMap(a => a.data.traits.slice(0, 1));
      const temp = getPrimaryTemperament(profile).primaryLabel.toLowerCase();
      const pieces = [...knownAnimals, ...knownColours, `${temp} operating system`].filter(Boolean).slice(0, 3);
      return pieces.length
        ? `${titleCase(pieces.join(", "))}.`
        : "A partially unresolved signal with enough pattern to keep reading.";
    }

    function titleCase(value) {
      const text = String(value || "");
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
