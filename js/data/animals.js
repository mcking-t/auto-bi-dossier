const ANIMALS = {
      "monkey": {
        name: "Monkey", emoji: "🐒", traits: ["playful", "clever", "socially agile", "mischievous", "adaptive"],
        surface: "The Monkey as a surface layer makes the first impression quick, funny, expressive, teasing, and socially sharp. This person can read energy fast, revive a dead room, and make interactions feel alive. Their playfulness is not random; there is intelligence and strategy under it.",
        selfImage: "The Monkey as self-image suggests someone who sees themselves as clever, adaptable, funny, and hard to trap. They take pride in being able to improvise, outwit, and move socially where others get stiff.",
        innerCore: "The Monkey as inner core suggests a deep need for stimulation, humour, freedom, and mental movement. Underneath everything, boredom feels like a cage, and curiosity keeps the person alive.",
        shadow: "In shadow, the Monkey becomes scattered, avoidant, unserious, chaos-seeking, or addicted to novelty. It may joke when something needs to be faced directly."
      },
      "black-panther": {
        name: "Black Panther", emoji: "🐈‍⬛", traits: ["mysterious", "elegant", "controlled", "predatory", "independent"],
        surface: "The Black Panther as surface layer gives a sleek, mysterious, controlled first impression. People may sense confidence, quiet danger, and emotional privacy before they fully understand the person.",
        selfImage: "The Black Panther as self-image represents controlled power, elegance, mystery, independence, and quiet danger. This person does not want to seem ordinary, desperate, or easy to play with. They value presence, respect, loyalty, image, and being hard to replace.",
        innerCore: "The Black Panther as inner core points to a private, guarded, instinctive emotional world. Deep down, this person needs autonomy, respect, and loyalty, but may reveal vulnerability only after serious trust is built.",
        shadow: "In shadow, the Black Panther becomes prideful, cold, possessive, silently testing, or emotionally withholding. Pain can turn into judgment before it becomes honest expression."
      },
      "belgian-malinois": {
        name: "Belgian Malinois", emoji: "🐕‍🦺", traits: ["loyal", "protective", "mission-driven", "intense", "alert"],
        surface: "The Belgian Malinois as surface layer can make someone seem alert, protective, energetic, intense, and ready to act. People may feel that this person is always scanning for the next move.",
        selfImage: "The Belgian Malinois as self-image suggests someone who sees themselves as loyal, useful, disciplined, protective, and built for pressure. They take pride in being dependable when the stakes are real.",
        innerCore: "The Belgian Malinois as inner core is the engine of mission, loyalty, protection, intensity, and work. This person is not built for a passive life. They need challenge, purpose, movement, and something meaningful to protect or pursue.",
        shadow: "In shadow, the Belgian Malinois becomes restless, impatient, overprotective, reactive, or destructive without a mission. Too much unused drive can leak into control, frustration, or conflict."
      },
      "cat": {
        name: "Cat", emoji: "🐈", traits: ["selective", "feminine", "observant", "independent", "sensual"],
        surface: "The Cat as surface layer gives a selective, graceful, observant, slightly elusive first impression. This person may seem soft and approachable, but only on their terms.",
        selfImage: "The Cat as self-image suggests someone who values independence, beauty, comfort, standards, and emotional selectiveness. They do not want to be forced; they want to choose.",
        innerCore: "The Cat as inner core points to a deep need for safety, softness, affection, freedom, and personal space. They may crave closeness while still needing control over access.",
        shadow: "In shadow, the Cat becomes cold, avoidant, moody, passive-aggressive, or emotionally withholding. It may punish through distance instead of direct confrontation."
      },
      "ferret": {
        name: "Ferret", emoji: "🦦", traits: ["curious", "mischievous", "playful", "chaotic", "sneaky-smart"],
        surface: "The Ferret as surface layer makes the person seem curious, playful, mischievous, and hard to predict. They may bring chaotic charm and make ordinary interactions feel more alive.",
        selfImage: "The Ferret as self-image suggests someone who sees themselves as clever, slippery, funny, curious, and able to get into places others would not think to explore.",
        innerCore: "The Ferret as inner core points to a playful nervous system that needs discovery, variety, and stimulation. Deep down, this person may fear dullness more than conflict.",
        shadow: "In shadow, the Ferret becomes chaotic, evasive, troublemaking, or too addicted to testing boundaries for entertainment."
      },
      "wolf": {
        name: "Wolf", emoji: "🐺", traits: ["loyal", "instinctive", "protective", "pack-oriented", "emotionally bonded"],
        surface: "The Wolf as surface layer gives an instinctive, loyal, watchful, protective first impression. This person can seem emotionally serious even when they are quiet.",
        selfImage: "The Wolf as self-image suggests someone who values loyalty, tribe, independence, instinct, and emotional bonds. They do not want fake connection; they want real belonging.",
        innerCore: "The Wolf as inner core points to deep pack loyalty, emotional bonding, protection, and instinct. This person may be selective, but once bonded, they can become fiercely loyal.",
        shadow: "In shadow, the Wolf becomes guarded, territorial, suspicious, emotionally defensive, or prone to us-versus-them thinking."
      },
      "deer": {
        name: "Deer", emoji: "🦌", traits: ["gentle", "sensitive", "alert", "graceful", "emotionally receptive"],
        surface: "The Deer as surface layer gives a soft, graceful, gentle, and alert first impression. People may sense sensitivity and emotional receptiveness quickly.",
        selfImage: "The Deer as self-image suggests someone who sees themselves as gentle, intuitive, kind, and emotionally aware. They value grace over force.",
        innerCore: "The Deer as inner core points to hidden sensitivity, alertness, softness, and a need for safety. This person may feel more than they say.",
        shadow: "In shadow, the Deer becomes avoidant, anxious, easily startled, or too willing to run instead of confront."
      },
      "fox": {
        name: "Fox", emoji: "🦊", traits: ["clever", "charming", "strategic", "adaptable", "sly"],
        surface: "The Fox as surface layer feels charming, clever, stylish, and a little hard to pin down. People may sense wit and strategy immediately.",
        selfImage: "The Fox as self-image suggests someone who values intelligence, adaptability, style, and social finesse. They like being underestimated and then surprising people.",
        innerCore: "The Fox as inner core points to survival intelligence, adaptability, and a need to stay free. Deep down, this person trusts their mind more than brute force.",
        shadow: "In shadow, the Fox becomes manipulative, evasive, too clever for honesty, or addicted to playing angles."
      },
      "lion": {
        name: "Lion", emoji: "🦁", traits: ["dominant", "proud", "protective", "regal", "commanding"],
        surface: "The Lion as surface layer gives a bold, proud, commanding, and noticeable first impression. This person may naturally take space without asking permission.",
        selfImage: "The Lion as self-image suggests someone who sees themselves as strong, respected, protective, and meant to lead. They care about dignity and status.",
        innerCore: "The Lion as inner core points to a deep need for respect, pride, loyalty, and legacy. They want to matter and be honoured by their circle.",
        shadow: "In shadow, the Lion becomes arrogant, attention-hungry, controlling, or wounded by disrespect."
      },
      "owl": {
        name: "Owl", emoji: "🦉", traits: ["wise", "observant", "quiet", "analytical", "mysterious"],
        surface: "The Owl as surface layer gives a quiet, observant, thoughtful, and mysterious impression. People may feel studied before they feel known.",
        selfImage: "The Owl as self-image suggests someone who values wisdom, perception, analysis, and depth. They prefer understanding over noise.",
        innerCore: "The Owl as inner core points to deep observation, private intelligence, and a need to make sense of patterns. This person may feel safest when they understand what is happening.",
        shadow: "In shadow, the Owl becomes detached, overly analytical, judgmental, or too hidden inside their mind."
      }
    };