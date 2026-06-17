function parseAnswerWeights(answer) {
      const raw = String(answer || "").trim().toUpperCase();
      if (!raw) return [];

      if (raw.includes("THEN") || raw.includes(">")) {
        const orderedParts = raw.split(/\bTHEN\b|>/i)
          .map(part => extractLetters(part)[0])
          .filter(Boolean);

        if (orderedParts.length >= 2) {
          return [
            { letter: orderedParts[0], weight: 0.65 },
            { letter: orderedParts[1], weight: 0.35 }
          ];
        }
      }

      const letters = extractLetters(raw);
      if (!letters.length) return [];

      const uniqueLetters = [...new Set(letters)];
      const weight = 1 / uniqueLetters.length;
      return uniqueLetters.map(letter => ({ letter, weight }));
    }

    function extractLetters(value) {
      const normalized = String(value || "")
        .toUpperCase()
        .replace(/\bAND\b/g, "/")
        .replace(/[,+&\-]/g, "/")
        .replace(/\s+/g, "/");

      return normalized
        .split("/")
        .flatMap(token => /^[ABCD]{1,2}$/.test(token) ? token.split("") : [])
        .filter(letter => TEMPERAMENTS[letter]);
    }