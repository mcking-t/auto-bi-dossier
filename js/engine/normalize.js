function normalize(value) {
      return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[’']/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, " ");
    }

    function slugify(value) {
      return normalize(value).replace(/\s+/g, "-");
    }