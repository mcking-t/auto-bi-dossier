function collectPerson(formId) {
      const form = document.getElementById(formId);
      const data = new FormData(form);
      const name = (data.get("name") || "Unnamed").trim() || "Unnamed";
      const note = (data.get("note") || "").trim();
      const coloursRaw = (data.get("colours") || "").split(",").map(x => x.trim()).filter(Boolean);
      const colours = coloursRaw.map(resolveColour);
      const animals = [data.get("animal1"), data.get("animal2"), data.get("animal3")].map(resolveAnimal);
      const answers = [];
      for (let i = 1; i <= 20; i++) answers.push(data.get(`q${i}`));
      const temperament = scoreTemperament(answers);

      colours.forEach(c => { if (!c.data) logUnknownInput("colour", c.raw, { profileName: name, note }); });
      animals.forEach((a, index) => { if (!a.data) logUnknownInput("animal", a.raw, { profileName: name, layerPosition: index + 1, note }); });

      return { name, note, colours, animals, answers, temperament };
    }