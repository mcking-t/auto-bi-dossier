const ANIMALS = {
      "tiger": {
        name: "Tiger", emoji: "🐅", traits: ["powerful", "independent", "intense", "fearless", "solitary"],
        surface: "The Tiger as surface layer gives a powerful, intense, slightly dangerous first impression. People sense raw confidence and a presence that does not ask permission to take up space.",
        selfImage: "The Tiger as self-image suggests someone who sees themselves as strong, self-reliant, and built to move alone. They take pride in fearlessness and in not needing a pack to feel secure.",
        innerCore: "The Tiger as inner core points to a fierce, solitary intensity that needs freedom, respect, and room to hunt on its own terms. Underneath the power is a private world few are allowed into.",
        shadow: "In shadow, the Tiger becomes domineering, isolating, impulsive, or quick to turn intensity into aggression."
      },
      "bear": {
        name: "Bear", emoji: "🐻", traits: ["strong", "protective", "grounded", "calm-until-provoked", "self-sufficient"],
        surface: "The Bear as surface layer gives a grounded, strong, easygoing first impression that carries quiet weight. People feel safe around this person until they sense the line they should not cross.",
        selfImage: "The Bear as self-image suggests someone who sees themselves as a protector: calm, capable, and steady, with strength held in reserve rather than shown off.",
        innerCore: "The Bear as inner core points to a deep need for security, space, and the people they love. Slow to anger and fiercely protective once roused, this person guards their den above all.",
        shadow: "In shadow, the Bear becomes withdrawn, stubborn, overprotective, or explosive when its boundaries are pushed too far."
      },
      "eagle": {
        name: "Eagle", emoji: "🦅", traits: ["visionary", "ambitious", "independent", "sharp", "commanding"],
        surface: "The Eagle as surface layer gives a sharp, elevated, commanding impression. People sense focus and ambition, like this person is always seeing further than the room they are in.",
        selfImage: "The Eagle as self-image suggests someone who sees themselves as a leader with vision: above the noise, decisive, and meant for heights. They value clarity, freedom, and the long view.",
        innerCore: "The Eagle as inner core points to a need for independence, perspective, and a life that means something at scale. This person would rather be alone at altitude than crowded at ground level.",
        shadow: "In shadow, the Eagle becomes aloof, superior, controlling, or so focused on the horizon that it loses the people right beside it."
      },
      "hawk": {
        name: "Hawk", emoji: "🦅", traits: ["observant", "precise", "focused", "patient", "strategic"],
        surface: "The Hawk as surface layer gives a watchful, precise, quietly intense impression. People feel noticed in detail, like this person catches the small things others miss.",
        selfImage: "The Hawk as self-image suggests someone who sees themselves as a sharp, strategic observer who acts only when the moment is right. They take pride in focus and timing.",
        innerCore: "The Hawk as inner core points to patience, precision, and a hunter's instinct for the decisive strike. This person watches longer than most and moves with intention.",
        shadow: "In shadow, the Hawk becomes hypercritical, cold, calculating, or too detached while waiting for a perfect moment that never comes."
      },
      "falcon": {
        name: "Falcon", emoji: "🦅", traits: ["fast", "disciplined", "driven", "elegant", "goal-locked"],
        surface: "The Falcon as surface layer gives a fast, disciplined, high-performance impression. People sense speed and control, like this person is engineered for the dive.",
        selfImage: "The Falcon as self-image suggests someone who sees themselves as elite, focused, and built for execution. They value discipline, precision, and hitting the target clean.",
        innerCore: "The Falcon as inner core points to a relentless drive toward a single objective at a time. This person locks on and commits with a velocity that can leave others behind.",
        shadow: "In shadow, the Falcon becomes tunnel-visioned, impatient, ruthless about goals, or willing to sacrifice connection for performance."
      },
      "dolphin": {
        name: "Dolphin", emoji: "🐬", traits: ["playful", "intelligent", "social", "warm", "emotionally intuitive"],
        surface: "The Dolphin as surface layer gives a warm, playful, socially intelligent first impression. People feel instantly at ease, like this person knows how to make connection fun.",
        selfImage: "The Dolphin as self-image suggests someone who sees themselves as friendly, clever, and emotionally tuned-in. They value joy, communication, and lifting the people around them.",
        innerCore: "The Dolphin as inner core points to a deeply social, empathetic nature that needs belonging and play in equal measure. Beneath the fun is real emotional intelligence.",
        shadow: "In shadow, the Dolphin becomes people-pleasing, conflict-avoidant, or uses charm and humour to dodge deeper hurt."
      },
      "shark": {
        name: "Shark", emoji: "🦈", traits: ["driven", "fearless", "focused", "dominant", "relentless"],
        surface: "The Shark as surface layer gives a focused, fearless, slightly intimidating impression. People sense forward motion and the feeling that this person does not stop.",
        selfImage: "The Shark as self-image suggests someone who sees themselves as a closer: built for pressure, allergic to weakness, and always moving toward the goal. They value power and results.",
        innerCore: "The Shark as inner core points to relentless drive and a need to keep advancing or feel like they are sinking. Stillness feels like danger, so this person stays in motion.",
        shadow: "In shadow, the Shark becomes ruthless, predatory, emotionally cold, or so results-driven that people become collateral."
      },
      "snake": {
        name: "Snake", emoji: "🐍", traits: ["mysterious", "strategic", "transformative", "self-controlled", "perceptive"],
        surface: "The Snake as surface layer gives a cool, mysterious, hard-to-read impression. People sense control and a quiet intensity that makes them slightly unsure where they stand.",
        selfImage: "The Snake as self-image suggests someone who sees themselves as strategic, self-possessed, and capable of reinvention. They value patience, perception, and not revealing their hand.",
        innerCore: "The Snake as inner core points to transformation, instinct, and a deep need for control over their own evolution. This person sheds old versions of themselves to survive.",
        shadow: "In shadow, the Snake becomes manipulative, secretive, cold, or strikes from places others did not see coming."
      },
      "cobra": {
        name: "Cobra", emoji: "🐍", traits: ["intense", "commanding", "defensive", "focused", "dangerous-when-pushed"],
        surface: "The Cobra as surface layer gives a commanding, alert, do-not-test-me impression. People sense controlled danger held just beneath a still surface.",
        selfImage: "The Cobra as self-image suggests someone who sees themselves as composed but capable of a decisive strike. They value respect, control, and being underestimated at others' risk.",
        innerCore: "The Cobra as inner core points to a guarded intensity that defends fiercely once provoked. Calm by default, this person is built to end a threat, not prolong it.",
        shadow: "In shadow, the Cobra becomes reactive, intimidating, vengeful, or quick to escalate when it feels cornered."
      },
      "horse": {
        name: "Horse", emoji: "🐎", traits: ["free-spirited", "energetic", "loyal", "strong", "spirited"],
        surface: "The Horse as surface layer gives a spirited, energetic, freedom-loving impression. People sense power paired with a need to run and a dislike of being fenced in.",
        selfImage: "The Horse as self-image suggests someone who sees themselves as strong, loyal, and untameable in the ways that matter. They value freedom, movement, and earned trust.",
        innerCore: "The Horse as inner core points to a deep need for autonomy alongside real loyalty to their chosen few. This person gives everything once they have decided to run with you.",
        shadow: "In shadow, the Horse becomes restless, resistant to control, skittish, or bolts when it feels trapped."
      },
      "elephant": {
        name: "Elephant", emoji: "🐘", traits: ["wise", "loyal", "protective", "emotionally deep", "dignified"],
        surface: "The Elephant as surface layer gives a calm, dignified, gentle-giant impression. People sense steadiness, memory, and a presence that does not rattle easily.",
        selfImage: "The Elephant as self-image suggests someone who sees themselves as wise, loyal, and deeply protective of family. They value memory, dignity, and emotional depth over noise.",
        innerCore: "The Elephant as inner core points to powerful loyalty, long memory, and quiet emotional sensitivity beneath the size. This person feels deeply and forgets nothing.",
        shadow: "In shadow, the Elephant becomes weighed down by old wounds, slow to move on, or stubborn under the surface calm."
      },
      "rabbit": {
        name: "Rabbit", emoji: "🐇", traits: ["gentle", "alert", "quick", "sensitive", "sociable"],
        surface: "The Rabbit as surface layer gives a soft, alert, approachable impression. People sense gentleness and a nervous energy that is quick to read the room.",
        selfImage: "The Rabbit as self-image suggests someone who sees themselves as kind, quick, and emotionally attuned. They value safety, warmth, and gentle connection.",
        innerCore: "The Rabbit as inner core points to sensitivity, vigilance, and a need to feel safe before they open up. This person notices threat early and craves a calm place to land.",
        shadow: "In shadow, the Rabbit becomes anxious, avoidant, easily overwhelmed, or runs from confrontation instead of facing it."
      },
      "butterfly": {
        name: "Butterfly", emoji: "🦋", traits: ["transformative", "free", "expressive", "sensitive", "light"],
        surface: "The Butterfly as surface layer gives a light, beautiful, free-moving impression. People sense openness and a kind of delicate magnetism that is hard to hold onto.",
        selfImage: "The Butterfly as self-image suggests someone who sees themselves as evolving, expressive, and unbound. They value beauty, growth, and the freedom to keep changing.",
        innerCore: "The Butterfly as inner core points to transformation and a need to move through phases of self without being pinned down. This person has often survived a darker chrysalis to get here.",
        shadow: "In shadow, the Butterfly becomes flighty, inconsistent, commitment-shy, or drifts away the moment things get heavy."
      },
      "peacock": {
        name: "Peacock", emoji: "🦚", traits: ["confident", "expressive", "proud", "charismatic", "attention-drawing"],
        surface: "The Peacock as surface layer gives a bold, striking, look-at-me impression. People notice this person immediately; there is confidence on full display.",
        selfImage: "The Peacock as self-image suggests someone who sees themselves as unique, beautiful, and worthy of being seen. They value self-expression, style, and standing out.",
        innerCore: "The Peacock as inner core points to pride, expressiveness, and a need to be admired for who they truly are. Beneath the display can sit a real hunger to be valued, not just noticed.",
        shadow: "In shadow, the Peacock becomes vain, validation-hungry, image-obsessed, or wounded when the spotlight moves on."
      },
      "swan": {
        name: "Swan", emoji: "🦢", traits: ["elegant", "graceful", "loyal", "composed", "quietly strong"],
        surface: "The Swan as surface layer gives an elegant, serene, composed impression. People sense grace and calm beauty, unaware of how hard the legs are working beneath the water.",
        selfImage: "The Swan as self-image suggests someone who sees themselves as refined, loyal, and dignified. They value beauty, devotion, and keeping their composure under pressure.",
        innerCore: "The Swan as inner core points to deep loyalty, hidden effort, and a fierce protectiveness behind the gentle surface. This person bonds for life and defends what is theirs.",
        shadow: "In shadow, the Swan becomes cold, proud, image-protective, or hides struggle to maintain a flawless appearance."
      },
      "raven": {
        name: "Raven", emoji: "🐦‍⬛", traits: ["intelligent", "mysterious", "perceptive", "independent", "symbolic"],
        surface: "The Raven as surface layer gives a sharp, mysterious, slightly otherworldly impression. People sense intelligence and a comfort with the shadows others avoid.",
        selfImage: "The Raven as self-image suggests someone who sees themselves as clever, perceptive, and unafraid of the darker, deeper truths. They value insight, independence, and meaning.",
        innerCore: "The Raven as inner core points to a deep, watchful intelligence drawn to mystery, symbolism, and transformation. This person reads between every line.",
        shadow: "In shadow, the Raven becomes brooding, isolating, cynical, or too at home in darkness to come back to the light."
      },
      "cheetah": {
        name: "Cheetah", emoji: "🐆", traits: ["fast", "focused", "driven", "graceful", "high-intensity"],
        surface: "The Cheetah as surface layer gives a sleek, fast, high-intensity impression. People sense urgency and elegance together, like this person is built for the sprint.",
        selfImage: "The Cheetah as self-image suggests someone who sees themselves as quick, focused, and able to outpace anyone when it counts. They value speed, results, and graceful execution.",
        innerCore: "The Cheetah as inner core points to explosive bursts of effort followed by a real need to rest and recover. This person goes all-in, then must retreat to recharge.",
        shadow: "In shadow, the Cheetah becomes burnt out, impatient, all-or-nothing, or starts strong and cannot sustain the pace."
      },
      "leopard": {
        name: "Leopard", emoji: "🐆", traits: ["independent", "adaptable", "stealthy", "confident", "self-reliant"],
        surface: "The Leopard as surface layer gives a confident, self-contained, quietly capable impression. People sense someone who handles their own and does not broadcast their moves.",
        selfImage: "The Leopard as self-image suggests someone who sees themselves as adaptable, independent, and quietly powerful. They value self-reliance, versatility, and keeping their own counsel.",
        innerCore: "The Leopard as inner core points to solitary strength and an ability to thrive in any environment alone. This person trusts themselves first and adapts rather than depends.",
        shadow: "In shadow, the Leopard becomes overly guarded, emotionally distant, secretive, or refuses help to a fault."
      },
      "jaguar": {
        name: "Jaguar", emoji: "🐆", traits: ["powerful", "mystical", "fearless", "intense", "grounded"],
        surface: "The Jaguar as surface layer gives a powerful, grounded, almost mystical impression. People sense raw force held with stillness, like this person fears very little.",
        selfImage: "The Jaguar as self-image suggests someone who sees themselves as fearless, deep, and quietly dominant. They value strength, instinct, and a connection to something primal.",
        innerCore: "The Jaguar as inner core points to fearless instinct and the confidence to move through darkness without flinching. This person draws power from facing what others avoid.",
        shadow: "In shadow, the Jaguar becomes intimidating, possessive, intense to the point of heavy, or wields power without restraint."
      },
      "gorilla": {
        name: "Gorilla", emoji: "🦍", traits: ["strong", "protective", "calm", "loyal", "family-oriented"],
        surface: "The Gorilla as surface layer gives a powerful, calm, protective impression. People sense strength held gently, until something threatens the people this person guards.",
        selfImage: "The Gorilla as self-image suggests someone who sees themselves as a strong, steady protector and provider. They value family, loyalty, and quiet, unshakeable strength.",
        innerCore: "The Gorilla as inner core points to deep loyalty, emotional steadiness, and ferocity reserved for defending their own. This person leads through presence, not noise.",
        shadow: "In shadow, the Gorilla becomes territorial, intimidating, slow to forgive, or explosive when its circle is threatened."
      },
      "octopus": {
        name: "Octopus", emoji: "🐙", traits: ["intelligent", "adaptable", "resourceful", "independent", "mysterious"],
        surface: "The Octopus as surface layer gives a clever, fluid, hard-to-pin impression. People sense intelligence and adaptability, like this person can slip through any situation.",
        selfImage: "The Octopus as self-image suggests someone who sees themselves as smart, resourceful, and able to solve problems no one else can. They value cleverness, autonomy, and flexibility.",
        innerCore: "The Octopus as inner core points to a richly intelligent, private inner world and a need for independence and mental stimulation. This person handles complexity alone, by instinct.",
        shadow: "In shadow, the Octopus becomes evasive, secretive, overcomplicated, or retreats into its own head instead of connecting."
      },
      "whale": {
        name: "Whale", emoji: "🐋", traits: ["deep", "emotional", "wise", "gentle", "powerful"],
        surface: "The Whale as surface layer gives a calm, deep, gently powerful impression. People sense vastness and emotional depth, like there is far more below the surface.",
        selfImage: "The Whale as self-image suggests someone who sees themselves as wise, soulful, and emotionally deep. They value meaning, depth, and a peaceful kind of strength.",
        innerCore: "The Whale as inner core points to profound emotional depth, sensitivity, and a long, patient way of moving through life. This person feels on a scale most people never reach.",
        shadow: "In shadow, the Whale becomes heavy, melancholic, isolated in its depth, or carries emotion it never lets out."
      },
      "turtle": {
        name: "Turtle", emoji: "🐢", traits: ["patient", "steady", "wise", "self-protective", "grounded"],
        surface: "The Turtle as surface layer gives a calm, patient, unbothered impression. People sense steadiness and a refusal to be rushed by anyone.",
        selfImage: "The Turtle as self-image suggests someone who sees themselves as wise, patient, and built to outlast. They value endurance, peace, and protecting their own pace.",
        innerCore: "The Turtle as inner core points to a need for safety, slowness, and the ability to withdraw when the world gets loud. This person plays the long game and carries their shelter with them.",
        shadow: "In shadow, the Turtle becomes avoidant, withdrawn, overly cautious, or hides in its shell instead of engaging."
      },
      "penguin": {
        name: "Penguin", emoji: "🐧", traits: ["loyal", "social", "devoted", "resilient", "community-minded"],
        surface: "The Penguin as surface layer gives a friendly, loyal, slightly comic impression. People sense warmth and a real sense of belonging to a group.",
        selfImage: "The Penguin as self-image suggests someone who sees themselves as devoted, community-minded, and resilient through cold seasons. They value loyalty, partnership, and togetherness.",
        innerCore: "The Penguin as inner core points to deep devotion, especially in love, and a need for connection to weather hard times. This person commits fully and endures for the people they choose.",
        shadow: "In shadow, the Penguin becomes dependent, conflict-avoidant, or loses themselves in the group or in one person."
      },
      "panda": {
        name: "Panda", emoji: "🐼", traits: ["gentle", "easygoing", "content", "independent", "calming"],
        surface: "The Panda as surface layer gives a soft, easygoing, disarming impression. People relax around this person and feel no need to perform.",
        selfImage: "The Panda as self-image suggests someone who sees themselves as peaceful, low-drama, and content in their own world. They value calm, simplicity, and being left to their own rhythm.",
        innerCore: "The Panda as inner core points to a craving for peace, comfort, and gentle solitude, with a quiet independence underneath the softness. This person protects their calm fiercely.",
        shadow: "In shadow, the Panda becomes passive, avoidant, checked-out, or uses easygoingness to dodge effort and conflict."
      },
      "koala": {
        name: "Koala", emoji: "🐨", traits: ["calm", "independent", "selective", "laid-back", "self-contained"],
        surface: "The Koala as surface layer gives a mellow, sleepy, unbothered impression. People sense someone comfortable alone and in no hurry to impress.",
        selfImage: "The Koala as self-image suggests someone who sees themselves as chill, self-sufficient, and selective about energy. They value comfort, peace, and conserving themselves for what matters.",
        innerCore: "The Koala as inner core points to a strong need for rest, personal space, and a small, low-stimulation world they control. This person guards their energy above almost everything.",
        shadow: "In shadow, the Koala becomes withdrawn, low-effort, emotionally unavailable, or too comfortable to grow."
      },
      "scorpion": {
        name: "Scorpion", emoji: "🦂", traits: ["intense", "loyal", "private", "strategic", "self-protective"],
        surface: "The Scorpion as surface layer gives a cool, guarded, do-not-provoke impression. People sense intensity held back and a clear sense of boundaries.",
        selfImage: "The Scorpion as self-image suggests someone who sees themselves as fiercely loyal, private, and not to be crossed. They value depth, control, and protecting what is theirs.",
        innerCore: "The Scorpion as inner core points to deep loyalty and powerful emotion guarded behind a defensive sting. This person loves hard and defends harder once trust is given.",
        shadow: "In shadow, the Scorpion becomes vengeful, suspicious, secretive, or stings out of old pain before checking if it is warranted."
      },
      "spider": {
        name: "Spider", emoji: "🕷️", traits: ["patient", "strategic", "creative", "self-reliant", "perceptive"],
        surface: "The Spider as surface layer gives a patient, quietly calculating impression. People sense someone who builds carefully and waits, watching from the edges.",
        selfImage: "The Spider as self-image suggests someone who sees themselves as a patient creator and strategist who builds the web and lets things come to them. They value precision, patience, and design.",
        innerCore: "The Spider as inner core points to a need for control over their environment and a slow, deliberate way of getting what they want. This person constructs their world thread by thread.",
        shadow: "In shadow, the Spider becomes manipulative, controlling, isolating, or traps situations and people instead of engaging openly."
      },
      "hummingbird": {
        name: "Hummingbird", emoji: "🐦", traits: ["energetic", "joyful", "quick", "free", "vibrant"],
        surface: "The Hummingbird as surface layer gives a bright, fast, joyful impression. People sense vibrant energy and a presence that is everywhere at once.",
        selfImage: "The Hummingbird as self-image suggests someone who sees themselves as lively, free, and full of colour. They value freedom, joy, and moving through life lightly.",
        innerCore: "The Hummingbird as inner core points to a fast, sensitive nervous system that needs novelty, beauty, and motion to feel alive. This person burns bright and cannot sit still for long.",
        shadow: "In shadow, the Hummingbird becomes scattered, restless, unable to settle, or flits away before anything deepens."
      },
      "bee": {
        name: "Bee", emoji: "🐝", traits: ["industrious", "loyal", "community-minded", "focused", "productive"],
        surface: "The Bee as surface layer gives a busy, focused, purposeful impression. People sense someone always working toward something and rarely idle.",
        selfImage: "The Bee as self-image suggests someone who sees themselves as hardworking, loyal, and part of something bigger. They value productivity, contribution, and a job well done.",
        innerCore: "The Bee as inner core points to a deep drive to build, contribute, and belong to a hive that matters. This person finds meaning in work and in the collective.",
        shadow: "In shadow, the Bee becomes overworked, burnt out, anxious without a task, or stings when its order is threatened."
      },
      "dog": {
        name: "Dog", emoji: "🐕", traits: ["loyal", "warm", "devoted", "friendly", "emotionally present"],
        surface: "The Dog as surface layer gives a warm, loyal, openhearted first impression. People feel welcomed and at ease, like this person is genuinely glad they showed up.",
        selfImage: "The Dog as self-image suggests someone who sees themselves as devoted, friendly, and dependable: the person who shows up for the people they love. They value loyalty, connection, and trust.",
        innerCore: "The Dog as inner core points to a deep need for belonging, affection, and a bond worth being faithful to. This person gives loyalty freely and feels rejection deeply.",
        shadow: "In shadow, the Dog becomes needy, over-attached, eager to please, or loyal to people who do not return it."
      },
      "german-shepherd": {
        name: "German Shepherd", emoji: "🐕‍🦺", traits: ["loyal", "protective", "intelligent", "disciplined", "dependable"],
        surface: "The German Shepherd as surface layer gives a sharp, loyal, on-duty impression. People sense intelligence and protectiveness, like this person is paying real attention.",
        selfImage: "The German Shepherd as self-image suggests someone who sees themselves as a capable guardian: smart, principled, and reliable under pressure. They value duty, loyalty, and protecting their people.",
        innerCore: "The German Shepherd as inner core points to a need for purpose, structure, and someone worth defending. This person bonds deeply and takes responsibility seriously.",
        shadow: "In shadow, the German Shepherd becomes overprotective, controlling, suspicious of outsiders, or anxious without a clear role."
      },
      "husky": {
        name: "Husky", emoji: "🐕", traits: ["independent", "energetic", "free-spirited", "social", "strong-willed"],
        surface: "The Husky as surface layer gives a striking, energetic, free-spirited impression. People sense a wild streak paired with surprising friendliness.",
        selfImage: "The Husky as self-image suggests someone who sees themselves as independent, spirited, and not built to be controlled. They value freedom, adventure, and their own mind.",
        innerCore: "The Husky as inner core points to a need for movement, stimulation, and the freedom to roam, balanced with a real love of their pack. This person is loyal but refuses to be leashed.",
        shadow: "In shadow, the Husky becomes stubborn, restless, attention-demanding, or bolts when life gets boring or confining."
      },
      "bull": {
        name: "Bull", emoji: "🐂", traits: ["strong", "determined", "grounded", "stubborn", "powerful"],
        surface: "The Bull as surface layer gives a powerful, immovable, grounded impression. People sense raw strength and a sense that this person will not be pushed.",
        selfImage: "The Bull as self-image suggests someone who sees themselves as strong, determined, and unshakeable once committed. They value resilience, loyalty, and standing their ground.",
        innerCore: "The Bull as inner core points to deep determination, endurance, and a steady, earthbound power. This person digs in and outlasts resistance through sheer will.",
        shadow: "In shadow, the Bull becomes stubborn, reactive, charges when provoked, or refuses to change course even when it is wrong."
      },
      "ram": {
        name: "Ram", emoji: "🐏", traits: ["determined", "bold", "headstrong", "independent", "driven"],
        surface: "The Ram as surface layer gives a bold, headstrong, forward-pushing impression. People sense drive and a willingness to meet obstacles head-on.",
        selfImage: "The Ram as self-image suggests someone who sees themselves as a bold initiator who charges first and figures it out on the way. They value courage, independence, and momentum.",
        innerCore: "The Ram as inner core points to a restless drive to lead, push forward, and overcome through force of will. This person would rather collide with a problem than wait it out.",
        shadow: "In shadow, the Ram becomes combative, impulsive, hard-headed, or butts heads for the sake of winning."
      },
      "stag": {
        name: "Stag", emoji: "🦌", traits: ["dignified", "mature", "independent", "protective", "grounded"],
        surface: "The Stag as surface layer gives a dignified, composed, quietly commanding impression. People sense maturity and a grounded authority that does not need to assert itself.",
        selfImage: "The Stag as self-image suggests someone who sees themselves as a steady leader and protector who has grown into their strength. They value dignity, independence, and earned respect.",
        innerCore: "The Stag as inner core points to mature self-possession, protectiveness, and a need to stand tall on their own ground. This person leads by presence and protects without theatrics.",
        shadow: "In shadow, the Stag becomes aloof, proud, territorial, or isolates rather than show vulnerability."
      },
      "otter": {
        name: "Otter", emoji: "🦦", traits: ["playful", "clever", "affectionate", "social", "lighthearted"],
        surface: "The Otter as surface layer gives a playful, warm, lighthearted impression. People feel the fun immediately and relax into this person's easy charm.",
        selfImage: "The Otter as self-image suggests someone who sees themselves as joyful, clever, and affectionate. They value play, connection, and keeping life from getting too heavy.",
        innerCore: "The Otter as inner core points to a need for closeness, play, and shared joy, with real warmth beneath the fun. This person bonds through laughter and touch.",
        shadow: "In shadow, the Otter becomes avoidant of seriousness, restless, or uses play to skate past real problems."
      },
      "hedgehog": {
        name: "Hedgehog", emoji: "🦔", traits: ["sensitive", "guarded", "gentle", "self-protective", "independent"],
        surface: "The Hedgehog as surface layer gives a small, guarded, slightly prickly impression. People sense softness behind a defensive layer that goes up fast.",
        selfImage: "The Hedgehog as self-image suggests someone who sees themselves as gentle but well-defended: soft on the inside, protected on the outside. They value safety, sincerity, and slow trust.",
        innerCore: "The Hedgehog as inner core points to real tenderness guarded by quills, and a need to feel safe before unrolling. This person is warmer than they let strangers see.",
        shadow: "In shadow, the Hedgehog becomes defensive, withdrawn, prickly at the wrong moments, or pushes people away to avoid being hurt."
      },
      "dragon": {
        name: "Dragon", emoji: "🐉", traits: ["powerful", "ambitious", "independent", "magnetic", "intense"],
        surface: "The Dragon as surface layer gives a powerful, larger-than-life, magnetic impression. People sense presence and ambition, like this person operates on a bigger scale.",
        selfImage: "The Dragon as self-image suggests someone who sees themselves as exceptional, powerful, and meant for something legendary. They value strength, freedom, and building something that lasts.",
        innerCore: "The Dragon as inner core points to immense drive, a need for autonomy, and a hunger to protect what they have built. This person guards their treasure (goals, people, vision) fiercely.",
        shadow: "In shadow, the Dragon becomes domineering, possessive, prideful, or scorches everything when its power is challenged."
      },
      "phoenix": {
        name: "Phoenix", emoji: "🐦‍🔥", traits: ["resilient", "transformative", "passionate", "independent", "reborn"],
        surface: "The Phoenix as surface layer gives an intense, radiant, survived-something impression. People sense fire and a depth that suggests this person has been through it and come back.",
        selfImage: "The Phoenix as self-image suggests someone who sees themselves as a survivor who rebuilds from ashes stronger each time. They value resilience, transformation, and rising again.",
        innerCore: "The Phoenix as inner core points to cycles of destruction and rebirth, and a deep capacity to renew themselves through fire. This person turns pain into reinvention.",
        shadow: "In shadow, the Phoenix becomes self-destructive, drawn to chaos, or burns down what is good to feel the rebirth again."
      },
      "crocodile": {
        name: "Crocodile", emoji: "🐊", traits: ["patient", "powerful", "ancient-feeling", "strategic", "fearless"],
        surface: "The Crocodile as surface layer gives a still, patient, deceptively calm impression. People sense latent power waiting beneath a motionless surface.",
        selfImage: "The Crocodile as self-image suggests someone who sees themselves as patient, powerful, and unbothered until the moment to act arrives. They value timing, strength, and self-control.",
        innerCore: "The Crocodile as inner core points to ancient patience and a willingness to wait as long as it takes for the right strike. This person conserves energy and moves with total commitment when they move.",
        shadow: "In shadow, the Crocodile becomes cold, calculating, ambush-minded, or lets resentment lurk beneath a calm front."
      },
      "rhino": {
        name: "Rhino", emoji: "🦏", traits: ["strong", "determined", "independent", "blunt", "unstoppable"],
        surface: "The Rhino as surface layer gives a thick-skinned, powerful, no-nonsense impression. People sense someone hard to faze and harder to move.",
        selfImage: "The Rhino as self-image suggests someone who sees themselves as tough, direct, and unstoppable once aimed. They value strength, independence, and not being slowed by others' opinions.",
        innerCore: "The Rhino as inner core points to solitary strength and a charge-forward instinct, with more sensitivity beneath the armour than they show. This person protects a softer interior with a thick hide.",
        shadow: "In shadow, the Rhino becomes blunt to the point of harsh, charges without looking, or shuts down nuance with force."
      },
      "flamingo": {
        name: "Flamingo", emoji: "🦩", traits: ["confident", "social", "expressive", "standout", "balanced"],
        surface: "The Flamingo as surface layer gives a bold, stylish, eye-catching impression. People notice this person's colour and confidence right away.",
        selfImage: "The Flamingo as self-image suggests someone who sees themselves as unique, social, and unafraid to stand out. They value self-expression, community, and a bit of flair.",
        innerCore: "The Flamingo as inner core points to a need to belong to a vibrant group while still standing out within it, balanced on a surprising inner steadiness. This person performs confidence and slowly grows into it.",
        shadow: "In shadow, the Flamingo becomes attention-dependent, image-focused, or loses balance when the audience looks away."
      },
      "bat": {
        name: "Bat", emoji: "🦇", traits: ["perceptive", "misunderstood", "nocturnal", "intuitive", "adaptive"],
        surface: "The Bat as surface layer gives a mysterious, slightly misread impression. People are not sure what to make of this person, sensing depth they cannot quite see.",
        selfImage: "The Bat as self-image suggests someone who sees themselves as perceptive, independent, and comfortable in the dark spaces others avoid. They value intuition, freedom, and being understood on their own terms.",
        innerCore: "The Bat as inner core points to heightened perception, a nocturnal inner rhythm, and a sensitivity to being misunderstood. This person navigates by instinct and feels most themselves away from the crowd.",
        shadow: "In shadow, the Bat becomes isolated, defensive about being misjudged, or retreats so far into its own world it cannot be reached."
      },
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