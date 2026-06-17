const COLOURS = {
      "orange": {
        name: "Orange", emoji: "🧡", tone: "warmth, energy, sociability, creativity, enthusiasm, and bold friendliness",
        shadow: "Attention-seeking, restlessness, or running hot then suddenly going cold.",
        paragraph: "Orange brings warmth, energy, playfulness, creativity, and social courage. It suggests someone who wants life loud, friendly, and a little adventurous, and who pulls people in without trying hard. The shadow is attention-seeking, restlessness, or burning hot then going cold."
      },
      "yellow": {
        name: "Yellow", emoji: "💛", tone: "optimism, intellect, joy, clarity, confidence, and visibility",
        shadow: "Anxiety hiding under the smile, or using cheerfulness to dodge hard feelings.",
        paragraph: "Yellow brings optimism, brightness, intellect, and an easy, sunny confidence. It suggests someone who wants to be seen as positive, clever, and approachable, and who lifts the mood of a room. The shadow is anxiety under the smile, people-pleasing, or using cheerfulness to avoid hard feelings."
      },
      "brown": {
        name: "Brown", emoji: "🤎", tone: "groundedness, reliability, warmth, simplicity, earthiness, and stability",
        shadow: "Playing it too safe, fading into the background, or mistaking comfort for growth.",
        paragraph: "Brown brings grounding, reliability, warmth, and an unpretentious, earthy steadiness. It suggests someone who values realness, comfort, and substance over flash, and who others instinctively trust. The shadow is playing it too safe, fading into the background, or mistaking comfort for growth."
      },
      "grey": {
        name: "Grey", emoji: "🩶", tone: "neutrality, balance, control, sophistication, restraint, and emotional distance",
        shadow: "Detachment, indecision, or hiding behind neutrality to avoid taking a stance.",
        paragraph: "Grey brings neutrality, balance, sophistication, and emotional restraint. It suggests someone who keeps their cards close, stays composed, and prefers not to swing to extremes in public. The shadow is detachment, indecision, or hiding behind neutrality to avoid taking a stance."
      },
      "silver": {
        name: "Silver", emoji: "🥈", tone: "modern elegance, intuition, coolness, futurism, polish, and reflectivity",
        shadow: "Coldness, image over warmth, or valuing shine over depth.",
        paragraph: "Silver brings sleek modernity, intuition, coolness, and a polished, futuristic edge. It suggests someone who likes to feel current, refined, and slightly above the noise, with taste that reads as effortless. The shadow is coldness, image over warmth, or valuing surface shine more than depth."
      },
      "navy": {
        name: "Navy", emoji: "⚓", tone: "authority, discipline, trust, depth, professionalism, and quiet confidence",
        shadow: "Rigidity, over-control, or hiding feelings behind professionalism.",
        paragraph: "Navy brings authority, discipline, depth, and quiet, dependable confidence. It suggests someone who wants to be taken seriously, who values structure and credibility, and who leads without shouting. The shadow is rigidity, over-control, or hiding feelings behind professionalism."
      },
      "teal": {
        name: "Teal", emoji: "🩵", tone: "calm clarity, balance, creativity, refreshment, independence, and healing",
        shadow: "Aloofness, overthinking, or staying so balanced that passion never fully shows.",
        paragraph: "Teal brings a refreshing balance of calm and creativity, blending the steadiness of blue with the renewal of green. It suggests someone composed but original, emotionally clear, and quietly confident in their own taste. The shadow is aloofness, overthinking, or staying so balanced that passion never fully shows."
      },
      "beige": {
        name: "Beige", emoji: "🧴", tone: "calm neutrality, warmth, minimalism, understated elegance, comfort, and approachability",
        shadow: "Blandness, over-accommodating others, or muting yourself to keep things smooth.",
        paragraph: "Beige brings soft neutrality, understated elegance, warmth, and an easy, approachable calm. It suggests someone who likes timeless over trendy, comfort over chaos, and a quiet kind of put-together. The shadow is blandness, over-accommodating others, or muting yourself to keep things smooth."
      },
      "rose-gold": {
        name: "Rose Gold", emoji: "🌹", tone: "soft luxury, romance, modern femininity, warmth, self-worth, and gentle confidence",
        shadow: "Vanity, chasing a curated image, or confusing aesthetics with substance.",
        paragraph: "Rose gold blends the warmth of pink with the status of gold into soft, modern luxury. It suggests someone romantic but self-respecting, gentle but ambitious, who wants beauty and value at the same time. The shadow is vanity, chasing a curated image, or confusing aesthetics with substance."
      },
      "indigo": {
        name: "Indigo", emoji: "🔮", tone: "intuition, depth, introspection, wisdom, mystery, and inner vision",
        shadow: "Withdrawal, getting lost in your own head, or feeling separate from everyone.",
        paragraph: "Indigo brings deep intuition, introspection, wisdom, and a pull toward the unseen. It suggests someone reflective and perceptive, drawn to meaning beneath the surface — often the quiet observer who notices everything. The shadow is withdrawal, getting lost in your own head, or feeling separate from everyone around you."
      },
      "olive": {
        name: "Olive", emoji: "🫒", tone: "groundedness, resilience, earthy strength, calm authority, practicality, and endurance",
        shadow: "Stubbornness, emotional guardedness, or carrying weight you refuse to set down.",
        paragraph: "Olive brings earthy resilience, calm authority, and a grounded, lived-in strength. It suggests someone steady under pressure, practical, and quietly tough, with a presence that does not need to perform. The shadow is stubbornness, emotional guardedness, or carrying weight you refuse to set down."
      },
      "coral": {
        name: "Coral", emoji: "🪸", tone: "warmth, playfulness, friendliness, vitality, approachable energy, and optimism",
        shadow: "Over-eagerness, needing to be liked, or hiding real intensity behind a bright surface.",
        paragraph: "Coral blends pink's warmth with orange's energy into something friendly, lively, and inviting. It suggests someone approachable and upbeat, who connects easily and carries a soft kind of confidence. The shadow is over-eagerness, needing to be liked, or hiding real intensity behind a bright surface."
      },
      "magenta": {
        name: "Magenta", emoji: "💗", tone: "boldness, originality, confidence, emotional vibrance, nonconformity, and magnetism",
        shadow: "Drama, intensity for its own sake, or needing constant reaction to feel real.",
        paragraph: "Magenta brings bold originality, emotional vibrance, and unapologetic confidence. It suggests someone expressive and magnetic who refuses to blend in and turns feeling into presence. The shadow is drama, intensity for its own sake, or needing constant reaction to feel real."
      },
      "lavender": {
        name: "Lavender", emoji: "🪻", tone: "calm, softness, daydream, sensitivity, grace, and gentle spirituality",
        shadow: "Escapism, fragility, or floating above reality instead of dealing with it.",
        paragraph: "Lavender brings calm, softness, daydream, and a gentle, almost spiritual sensitivity. It suggests someone tender and imaginative who craves peace and beauty and feels things more deeply than they let on. The shadow is escapism, fragility, or floating above reality instead of dealing with it."
      },
      "sage": {
        name: "Sage", emoji: "🍃", tone: "calm wisdom, balance, healing, understated confidence, naturalness, and restraint",
        shadow: "Passivity, over-detachment, or using calm to avoid intensity.",
        paragraph: "Sage brings calm wisdom, balance, and a healing, understated kind of confidence. It suggests someone grounded and self-assured who does not need to prove anything and brings a settling presence to others. The shadow is passivity, over-detachment, or using calm as a way to avoid intensity."
      },
      "mustard": {
        name: "Mustard", emoji: "🌻", tone: "warmth, individuality, retro confidence, creativity, groundedness, and unconventional taste",
        shadow: "Contrarianism, moodiness, or mistaking being different for being right.",
        paragraph: "Mustard brings warm individuality, retro confidence, and a creative, slightly unconventional streak. It suggests someone with distinct taste who is not chasing trends and is comfortable standing a little apart. The shadow is contrarianism, moodiness, or mistaking being different for being right."
      },
      "peach": {
        name: "Peach", emoji: "🍑", tone: "gentleness, warmth, youthfulness, kindness, approachability, and soft optimism",
        shadow: "Naivety, over-softness, or avoiding conflict to stay pleasant.",
        paragraph: "Peach brings gentleness, warmth, youthfulness, and a soft, kind optimism. It suggests someone approachable and sweet-natured who makes people feel at ease and leads with care. The shadow is naivety, over-softness, or avoiding conflict to stay pleasant."
      },
      "emerald": {
        name: "Emerald", emoji: "💚", tone: "luxury, ambition, vitality, prestige, abundance, and grounded power",
        shadow: "Materialism, envy, or tying self-worth to wealth and image.",
        paragraph: "Emerald brings jewel-toned luxury, vitality, and grounded, prestigious power. It suggests someone who wants growth and status without losing depth — magnetic in a rich, deliberate way. The shadow is materialism, envy, or tying self-worth to wealth and image."
      },
      "sky-blue": {
        name: "Sky Blue", emoji: "☁️", tone: "openness, freedom, lightness, hope, clarity, and easy calm",
        shadow: "Avoidance, conflict-dodging, or drifting instead of committing.",
        paragraph: "Sky blue brings openness, freedom, lightness, and an easy, hopeful clarity. It suggests someone optimistic and unburdened who values space, honesty, and breathing room. The shadow is avoidance, conflict-dodging, or drifting instead of committing."
      },
      "bronze": {
        name: "Bronze", emoji: "🥉", tone: "warmth, endurance, earned strength, authenticity, groundedness, and quiet achievement",
        shadow: "Pride in struggle, stubborn self-reliance, or refusing help you actually need.",
        paragraph: "Bronze brings warm, earned strength, endurance, and an authentic, grounded kind of achievement. It suggests someone who values real substance over flash and whose confidence comes from having been tested. The shadow is pride in struggle, stubborn self-reliance, or refusing help you actually need."
      },
      "amber": {
        name: "Amber", emoji: "🍯", tone: "warmth, richness, nostalgia, sensual glow, groundedness, and inviting energy",
        shadow: "Clinging to the past, over-sentimentality, or warmth that tips into possessiveness.",
        paragraph: "Amber brings warm richness, a nostalgic glow, and an inviting, almost honeyed presence. It suggests someone warm and grounded with a sensual, comforting pull, who values depth of feeling over flash. The shadow is clinging to the past, over-sentimentality, or warmth that tips into possessiveness."
      },
      "black": {
        name: "Black", emoji: "🖤", tone: "control, mystery, edge, privacy, strength, and self-containment",
        shadow: "Emotional armour — using distance, silence, or control to avoid feeling exposed.",
        paragraph: "Black gives the profile control, mystery, edge, privacy, and strength. It suggests someone who does not want to be fully readable and prefers to choose carefully who gets deeper access. The shadow is emotional armour: using distance, silence, or control to avoid feeling exposed."
      },
      "purple": {
        name: "Purple", emoji: "💜", tone: "ambition, imagination, royalty, spirituality, and cinematic self-mythology",
        shadow: "Pride, fantasy, or wanting the crown before doing the boring reps.",
        paragraph: "Purple adds ambition, imagination, royalty, spirituality, and a desire for a life that feels bigger than ordinary. It suggests someone who wants meaning, beauty, status, and a little mystery. The shadow is pride, fantasy, or wanting the crown before doing the boring reps."
      },
      "deep-dark-red": {
        name: "Deep Dark Red", emoji: "❤️‍🔥", tone: "passion, intensity, sensual depth, emotional heat, and loyalty",
        shadow: "Possessiveness, jealousy, emotional reactivity, or attachment to intensity itself.",
        paragraph: "Deep dark red brings passion, emotional heat, sensuality, intensity, and loyalty. It is not a light casual colour. It suggests someone with appetite, feeling, and instinct. The shadow is possessiveness, jealousy, emotional reactivity, or becoming too attached to intensity."
      },
      "red": {
        name: "Red", emoji: "❤️", tone: "drive, passion, boldness, heat, appetite, and direct action",
        shadow: "Impatience, anger, or wanting an instant emotional response.",
        paragraph: "Red brings directness, passion, appetite, courage, and heat. It suggests someone who does not want life to feel lukewarm. The shadow is impatience, anger, or wanting instant emotional response."
      },
      "pink": {
        name: "Pink", emoji: "🌸", tone: "softness, sweetness, romance, charm, beauty, and emotional approachability",
        shadow: "People-pleasing, emotional dependency, or hiding stronger feelings behind sweetness.",
        paragraph: "Pink brings softness, sweetness, romance, charm, and emotional approachability. It can make the profile feel warm and inviting. The shadow is people-pleasing, emotional dependency, or hiding stronger feelings behind sweetness."
      },
      "green": {
        name: "Green", emoji: "🌿", tone: "growth, calm, nature, healing, grounding, loyalty, and renewal",
        shadow: "Stubbornness, avoidance, or staying comfortable too long.",
        paragraph: "Green brings grounding, growth, renewal, patience, and calm. It suggests someone who wants stability and emotional steadiness. The shadow is stubbornness, avoidance, or staying comfortable too long."
      },
      "blue": {
        name: "Blue", emoji: "🔵", tone: "trust, calm, communication, depth, loyalty, and emotional steadiness",
        shadow: "Emotional distance, over-control, or freezing feelings instead of expressing them.",
        paragraph: "Blue brings calm, trust, communication, loyalty, and emotional steadiness. It suggests someone who wants clarity and dependability. The shadow is emotional distance, over-control, or freezing feelings instead of expressing them."
      },
      "white": {
        name: "White", emoji: "🤍", tone: "purity, clarity, minimalism, peace, innocence, and reset energy",
        shadow: "Perfectionism, avoidance of mess, or wanting everything to stay too clean.",
        paragraph: "White brings purity, clarity, peace, simplicity, and reset energy. It suggests someone who appreciates clean beginnings and emotional lightness. The shadow is perfectionism, avoidance of mess, or wanting everything to stay too clean."
      },
      "gold": {
        name: "Gold", emoji: "🏆", tone: "status, confidence, success, warmth, achievement, and visible value",
        shadow: "Ego, image-chasing, or confusing admiration with love.",
        paragraph: "Gold brings status, confidence, success, achievement, warmth, and visible value. It suggests someone who wants to shine and be respected. The shadow is ego, image-chasing, or confusing admiration with love."
      }
    };
