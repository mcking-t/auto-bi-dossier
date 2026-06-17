function scoreTemperament(answers) {
      const scores = { choleric: 0, phlegmatic: 0, melancholic: 0, sanguine: 0 };

      answers.filter(Boolean).forEach(answer => {
        parseAnswerWeights(answer).forEach(({ letter, weight }) => {
          const t = TEMPERAMENTS[letter];
          if (t) scores[t.key] += weight;
        });
      });

      const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
      const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      return { scores, total, ranked };
    }