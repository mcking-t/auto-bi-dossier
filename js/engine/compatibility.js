function estimateCompatibility(a, b) {
      const aColours = a.colours.map(c => c.slug);
      const bColours = b.colours.map(c => c.slug);
      const aAnimals = a.animals.map(x => x.slug);
      const bAnimals = b.animals.map(x => x.slug);
      const colourOverlap = aColours.filter(x => bColours.includes(x)).length;
      const animalOverlap = aAnimals.filter(x => bAnimals.includes(x)).length;
      const aTemp = getPrimaryTemperament(a);
      const bTemp = getPrimaryTemperament(b);
      let chemistry = 68 + colourOverlap * 8 + animalOverlap * 5;
      let personality = 70 + colourOverlap * 6 + animalOverlap * 4;
      let conflict = 42;
      if (aTemp.primaryKey === bTemp.primaryKey) { personality += 6; conflict += 7; }
      if ([aTemp.primaryKey, bTemp.primaryKey].includes("choleric")) conflict += 8;
      if ([aTemp.primaryKey, bTemp.primaryKey].includes("sanguine")) chemistry += 8;
      if (aColours.includes("black") || bColours.includes("black")) conflict += 5;
      if (aColours.includes("deep-dark-red") || bColours.includes("deep-dark-red")) { chemistry += 9; conflict += 6; }
      const longTerm = Math.max(50, Math.min(92, personality - Math.round(conflict / 4) + 12));
      return {
        chemistry: clamp(chemistry, 45, 96),
        personality: clamp(personality, 45, 94),
        conflict: clamp(conflict, 20, 90),
        longTerm: clamp(longTerm, 45, 92)
      };
    }

    function clamp(n, min, max) { return Math.max(min, Math.min(max, Math.round(n))); }