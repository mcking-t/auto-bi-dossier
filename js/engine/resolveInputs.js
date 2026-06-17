function resolveColour(value) {
      const normalized = normalize(value);
      const aliased = COLOUR_ALIASES[normalized] || slugify(normalized);
      return { raw: String(value || "").trim(), slug: aliased, data: COLOURS[aliased] };
    }

    function resolveAnimal(value) {
      const normalized = normalize(value);
      const aliased = ANIMAL_ALIASES[normalized] || slugify(normalized);
      return { raw: String(value || "").trim(), slug: aliased, data: ANIMALS[aliased] };
    }