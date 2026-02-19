const QUIZ_DATA = {
  "mbti": {
    name: "MBTI Personality",
    quizzes: [
      {id: "harry-potter-soulmate", title: "Which Harry Potter Character Is Your Soulmate?", icon: "⚡", tags: ["Harry Potter", "Soulmate", "MBTI"]},
      {id: "marvel-cp", title: "Who Is Your Perfect Marvel CP?", icon: "🕷️", tags: ["Marvel", "Superhero", "MBTI"]},
      {id: "workplace-partner", title: "Find Your Perfect Workplace Partner", icon: "💼", tags: ["Workplace", "Team", "MBTI"]},
      {id: "pop-culture-friend", title: "Who Is Your Ideal Best Friend in Pop Culture?", icon: "🎬", tags: ["Best Friend", "Pop Culture", "MBTI"]},
      {id: "disney-princess", title: "Which Disney Princess Is Your Kindred Spirit?", icon: "🏰", tags: ["Disney", "Princess", "MBTI"]},
      {id: "kdrama-partner", title: "Find Your Ideal K-Drama Partner", icon: "📺", tags: ["K-Drama", "Partner", "MBTI"]},
      {id: "video-game-team", title: "Which Video Game Character Are You Meant To Team Up With?", icon: "🎮", tags: ["Video Games", "Gaming", "MBTI"]},
      {id: "travel-buddy", title: "What's Your Ideal Travel Buddy Personality?", icon: "✈️", tags: ["Travel", "Adventure", "MBTI"]},
      {id: "anime-compat", title: "Which Anime Character Are You Most Compatible With?", icon: "🎌", tags: ["Anime", "Character", "MBTI"]},
      {id: "study-buddy", title: "Find Your Perfect Study Buddy Personality", icon: "📚", tags: ["Study", "Education", "MBTI"]}
    ]
  },
  "match": {
    name: "Match / Soulmate",
    quizzes: [
      {id: "harry-potter-soulmate", title: "Which Harry Potter Character Is Your Soulmate?", icon: "⚡", tags: ["Harry Potter", "Soulmate", "Love"]},
      {id: "marvel-cp", title: "Who Is Your Perfect Marvel CP?", icon: "🕷️", tags: ["Marvel", "Perfect CP", "Superhero"]},
      {id: "workplace-partner", title: "Find Your Perfect Workplace Partner", icon: "💼", tags: ["Workplace", "Team", "Partner"]},
      {id: "pop-culture-friend", title: "Your Ideal Best Friend in Pop Culture", icon: "🎬", tags: ["Best Friend", "Pop Culture"]},
      {id: "kdrama-soulmate", title: "Which K-Drama Character Is Your Soulmate?", icon: "🎬", tags: ["K-Drama", "Soulmate"]},
      {id: "zodiac-match", title: "Zodiac Match: Which Sign Is Your Perfect Match?", icon: "♈", tags: ["Zodiac", "Perfect Match", "Astrology"]}
    ]
  },
  "which_x": {
    name: "Which X Are You?",
    quizzes: [
      {id: "disney-character", title: "Which Disney Character Are You? (2024)", icon: "🏰", tags: ["Disney", "Character"]},
      {id: "taylor-swift", title: "Which Taylor Swift Era Are You?", icon: "🎤", tags: ["Taylor Swift", "Era"]},
      {id: "workplace-personality", title: "Which Workplace Personality Are You?", icon: "💼", tags: ["Workplace", "Team Role"]},
      {id: "marvel-superhero", title: "Which Marvel Superhero Are You?", icon: "🦸", tags: ["Marvel", "Superhero"]},
      {id: "anime-character", title: "Which Anime Character Are You?", icon: "🎌", tags: ["Anime", "Character"]},
      {id: "zodiac-personality", title: "Which Zodiac Personality Are You?", icon: "♉", tags: ["Zodiac", "Astrology"]},
      {id: "high-school", title: "Which High School Stereotype Are You?", icon: "🎒", tags: ["High School", "Stereotype"]}
    ]
  },
  "your_type": {
    name: "What's Your Type?",
    quizzes: [
      {id: "aesthetic-style", title: "What's Your Aesthetic Style?", icon: "🎨", tags: ["Aesthetic", "Style", "Fashion"]},
      {id: "social-style", title: "What's Your Social Style?", icon: "👥", tags: ["Social Style", "Introvert", "Extrovert"]},
      {id: "love-language", title: "What's Your Love Language Type?", icon: "💕", tags: ["Love Language", "Relationship"]},
      {id: "work-style", title: "What's Your Work Style?", icon: "🏠", tags: ["Work Style", "Remote"]},
      {id: "communication-style", title: "What's Your Communication Style?", icon: "💬", tags: ["Communication", "Talkative"]},
      {id: "spending-style", title: "What's Your Spending Style?", icon: "💰", tags: ["Spending", "Saver", "Spender"]}
    ]
  },
  "adjective_level": {
    name: "How [Adjective] Are You?",
    quizzes: [
      {id: "how-brave", title: "How Brave Are You?", icon: "🦁", tags: ["Brave", "Score Test"]},
      {id: "how-kind", title: "How Kind Are You?", icon: "💖", tags: ["Kind", "Empathy"]},
      {id: "how-logical", title: "How Logical Are You?", icon: "🧠", tags: ["Logical", "Emotional"]},
      {id: "how-patient", title: "How Patient Are You?", icon: "🧘", tags: ["Patient", "Score Test"]},
      {id: "how-creative", title: "How Creative Are You?", icon: "💡", tags: ["Creative", "Talent"]},
      {id: "how-empathetic", title: "How Empathetic Are You?", icon: "🤝", tags: ["Empathetic", "Score Test"]},
      {id: "how-decisive", title: "How Decisive Are You?", icon: "🎯", tags: ["Decisive", "Choice"]}
    ]
  },
  "hidden": {
    name: "Hidden / Secret",
    quizzes: [
      {id: "hidden-superpower", title: "Unlock Your Hidden Superpower", icon: "⚡", tags: ["Hidden Superpower", "Talent"]},
      {id: "hidden-personality", title: "Discover Your Hidden Personality", icon: "🎭", tags: ["Hidden Personality", "Mystery"]},
      {id: "hidden-talent", title: "Find Your Hidden Talent", icon: "🌟", tags: ["Hidden Talent", "Advantage"]},
      {id: "hidden-desire", title: "What's Your Hidden Desire?", icon: "🔥", tags: ["Hidden Desire", "Inner Self"]},
      {id: "hidden-flaw", title: "Unlock Your Hidden Flaw", icon: "💔", tags: ["Hidden Flaw", "Self-Improvement"]},
      {id: "hidden-charm", title: "What's Your Hidden Charm?", icon: "✨", tags: ["Hidden Charm", "Attraction"]},
      {id: "deeply-hidden", title: "Discover Your Deeply Hidden Personality", icon: "🔮", tags: ["Hidden Personality", "Self-Discovery"]}
    ]
  },
  "scenario": {
    name: "What Would You Do?",
    quizzes: [
      {id: "apocalypse", title: "Apocalypse: How Long Would You Survive?", icon: "🧟", tags: ["Apocalypse", "Survival"]},
      {id: "workplace-crisis", title: "Workplace Crisis: How Would You Resolve It?", icon: "📊", tags: ["Workplace Crisis", "Adaptability"]},
      {id: "relationship-conflict", title: "Relationship Conflict: How Would You Handle It?", icon: "💑", tags: ["Relationship", "Conflict"]},
      {id: "friend-in-need", title: "Friend In Need: Are You Reliable?", icon: "🤝", tags: ["Friend", "Reliable"]},
      {id: "sudden-wealth", title: "Sudden Wealth: How Would You Spend It?", icon: "💎", tags: ["Wealth", "Spending"]},
      {id: "desert-island", title: "Desert Island: How Long Can You Last?", icon: "🏝️", tags: ["Survival", "Adaptability"]}
    ]
  },
  "pick_one": {
    name: "Pick One / Choose",
    quizzes: [
      {id: "pick-food", title: "Pick Food To Test Personality", icon: "🍕", tags: ["Food", "Personality"]},
      {id: "pick-travel", title: "Pick Travel Destination", icon: "✈️", tags: ["Travel", "Aesthetic"]},
      {id: "pick-gift", title: "Pick Gift: Good At Giving Gifts?", icon: "🎁", tags: ["Gift", "Empathy"]},
      {id: "pick-outfit", title: "Pick Outfit: Your Outfit Reveals You", icon: "👗", tags: ["Outfit", "Fashion"]},
      {id: "pick-rest", title: "Pick Rest: Workaholic Or Hermit?", icon: "🛋️", tags: ["Rest", "Introvert"]},
      {id: "pick-social", title: "Pick Social: 热闹 Or Solitude?", icon: "🎉", tags: ["Social", "Solitude"]}
    ]
  },
  "future": {
    name: "Future / Destiny",
    quizzes: [
      {id: "future-career", title: "Test Your Future Career Path", icon: "📈", tags: ["Future Career", "Planning"]},
      {id: "future-partner", title: "Future Partner: What Kind Will You Meet?", icon: "💘", tags: ["Future Partner", "Destiny"]},
      {id: "future-fortune", title: "Test Your Financial Fortune", icon: "💰", tags: ["Financial Fortune", "Future"]},
      {id: "future-life", title: "Future Life: What Kind Will You Have?", icon: "🌅", tags: ["Future Life", "Happiness"]},
      {id: "future-stage", title: "Next Stage Of Your Life", icon: "🔮", tags: ["Life Stage", "Growth"]}
    ]
  }
};
