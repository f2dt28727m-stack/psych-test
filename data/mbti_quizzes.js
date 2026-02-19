// MBTI Quiz Questions - Compact Format
// Each quiz has 36 questions (9 per dimension: E/I, S/N, T/F, J/P)
// Platform will randomly select 12 questions

const MBTI_QUIZZES = {
  "harry-potter-soulmate": {
    title: "Which Harry Potter Character Is Your Soulmate?",
    icon: "⚡",
    questions: [
      // E/I Questions
      {q: "At the Great Hall feast, you...", a: ["Join a big group", "Sit quietly with friends", "Keep to yourself", "Talk to new people"]},
      {q: "When you learn a new spell, you...", a: ["Show it to everyone", "Practice alone", "Teach one friend", "Gather a group"]},
      {q: "In Dumbledore's Army, you...", a: ["Lead the group", "Watch silently", "Help one person", "Cheer everyone"]},
      {q: "At the Yule Ball, you...", a: ["Dance with many", "Stay with one partner", "Observe the crowd", "Make new friends"]},
      {q: "When you hear a rumor, you...", a: ["Discuss with friends", "Keep it to yourself", "Tell best friend", "Ask many people"]},
      {q: "In Potions class, you prefer...", a: ["Working in group", "Work alone", "Work with one partner", "Chat while working"]},
      {q: "If you find a secret passage...", a: ["Bring friends", "Explore alone", "Tell one trusted person", "Announce to house"]},
      {q: "When upset, you...", a: ["Talk to friends", "Stay alone", "Read/write quietly", "Hang out"]},
      {q: "On a free weekend, you...", a: ["Go out with big group", "Stay in alone", "Go out with one friend", "Make spontaneous plans"]},
      // S/N Questions
      {q: "When learning a spell, focus on...", a: ["Wand movements", "Magic's feeling", "Step-by-step rules", "Creative uses"]},
      {q: "You choose classes based on...", a: ["Practical use", "Mystery", "Clear structure", "Imagination"]},
      {q: "Facing a Dementor, you...", a: ["Cast as trained", "Trust intuition", "Follow instructions", "Creative solution"]},
      {q: "At the Mirror of Erised, you...", a: ["See real goals", "Wonder meaning", "Notice details", "Daydream"]},
      {q: "Planning Hogsmeade, you...", a: ["Make detailed plan", "Wander freely", "Simple schedule", "Change plans"]},
      {q: "In Herbology, you...", a: ["Follow rules", "Imagine magic", "Keep things neat", "Wonder powers"]},
      {q: "Fighting Death Eater, you...", a: ["Use practiced spells", "Create combos", "Safe methods", "Unexpected moves"]},
      {q: "You prefer magic books that...", a: ["Clear instructions", "Imaginative stories", "Practical skills", "Big ideas"]},
      {q: "After Hogwarts, you want...", a: ["Stable job", "Adventure", "Peaceful life", "Discovery"]},
      // T/F Questions
      {q: "If a friend is accused, you...", a: ["Judge by evidence", "Trust them", "Logic over loyalty", "Stand by them"]},
      {q: "Grading homework, you...", a: ["Score by rules", "Be kind", "Prioritize accuracy", "Prioritize heart"]},
      {q: "Save friend or many people?", a: ["Save many", "Save friend first", "Choose duty", "Choose loyalty"]},
      {q: "When friend fails, you...", a: ["Tell to fix", "Comfort first", "Solve problem", "Focus feelings"]},
      {q: "Opponent is hurt, you...", a: ["Keep competing", "Stop to help", "Follow rules", "Follow heart"]},
      {q: "Disagreeing with friend, you...", a: ["Speak honestly", "Keep peace", "Prioritize truth", "Prioritize harmony"]},
      {q: "Roommate uses Dark Magic...", a: ["Report them", "Talk privately", "Protect logically", "Compassion first"]},
      {q: "Sharing snacks, you...", a: ["Split equally", "Give to lovers", "Fair for all", "Give based on care"]},
      {q: "Punishing rule-breaker...", a: ["Follow rules exactly", "Be gentle", "Be consistent", "Be kind"]},
      // J/P Questions
      {q: "Studying for exams...", a: ["Make strict plan", "Last minute", "Finish early", "Work under pressure"]},
      {q: "Finishing homework...", a: ["Submit early", "Wait last second", "Organize perfectly", "Ready then submit"]},
      {q: "Planning a trip...", a: ["Fixed list", "No plan", "Know what need", "Buy whatever"]},
      {q: "With many tasks...", a: ["Finish in order", "Feel right now", "Finish work first", "Mix work fun"]},
      {q: "Can't finish on time...", a: ["Keep working", "Tomorrow calmly", "Stress until done", "Relax later"]},
      {q: "Your space is...", a: ["Neat organized", "Messy but know", "Clean systems", "Casual changing"]},
      {q: "Invited to event...", a: ["Reply early", "Last minute", "Plan ahead", "Ready whenever"]},
      {q: "Learning new skill...", a: ["Step by step", "Skip freely", "Master basics", "Jump explore"]},
      {q: "Plans change suddenly...", a: ["Adjust organized", "Adapt slowly", "Feel annoyed", "Enjoy change"]}
    ]
  },
  "marvel-cp": {
    title: "Who Is Your Perfect Marvel CP?",
    icon: "🕷️",
    questions: [
      {q: "At Avengers party, you...", a: ["Mingle with heroes", "Quiet corner", "Close friends", "Meet new heroes"]},
      {q: "After saving world...", a: ["Celebrate team", "Rest alone", "Unwind with friend", "Share stories"]},
      {q: "On a mission, you...", a: ["Communicate nonstop", "Do your part", "Help teammates", "Lead group"]},
      {q: "Training new heroes...", a: ["Guide actively", "Demonstrate", "Coach one", "Motivate group"]},
      {q: "Hearing villain rumors...", a: ["Team meeting", "Investigate alone", "Trusted ones", "Many teammates"]},
      {q: "Testing new gear...", a: ["Show off", "Test privately", "Try with partner", "Demo team"]},
      {q: "At awards ceremony...", a: ["Enjoy spotlight", "Avoid attention", "Stay with friends", "Chat fans"]},
      {q: "Stressed after battle...", a: ["Talk teammates", "Alone recharge", "Focus quietly", "Surround people"]},
      {q: "Discovering new planet...", a: ["Team explore", "Explore alone", "Take partner", "Big expedition"]},
      {q: "Mastering new power...", a: ["Basic control", "Hidden potential", "Stable operation", "New combos"]},
      {q: "Choose missions based on...", a: ["Urgency impact", "Mystery", "Clear goals", "Adventure"]},
      {q: "Facing Thanos...", a: ["Trained tactics", "Trust intuition", "Proven plans", "New strategies"]},
      {q: "Infinity Stones...", a: ["Direct power", "Cosmic meaning", "How use", "Full potential"]},
      {q: "Upgrading suit...", a: ["Stability function", "Experimental", "Reliability", "Bold innovation"]},
      {q: "Planning mission...", a: ["Step-by-step", "Flexible", "Clear roles", "Room surprises"]},
      {q: "In battle rely on...", a: ["Practiced skills", "Improvisation", "Proven techniques", "Creative moves"]},
      {q: "Prefer hero data...", a: ["Factual practical", "Inspires imagination", "Solves problems", "Big possibilities"]},
      {q: "After retiring want...", a: ["Peaceful stable", "Cosmic adventures", "Quiet family", "Endless exploration"]},
      {q: "Teammate accused...", a: ["Review evidence", "Trust completely", "Fairness", "Stand by"]},
      {q: "Evaluating performance...", a: ["Score results", "Consider effort", "Logic", "Feelings"]},
      {q: "Save teammate or civilians?", a: ["Save more", "Save teammate", "Duty", "Bond"]},
      {q: "Teammate fails...", a: ["Address mistake", "Comfort first", "Fix logically", "Support emotions"]},
      {q: "Rival injured...", a: ["Continue fairly", "Stop help", "Rules", "Compassion"]},
      {q: "Disagree with team...", a: ["Speak firmly", "Keep harmony", "Truth", "Unity"]},
      {q: "Teammate abuses power...", a: ["Report immediately", "Confront privately", "Protect team", "Chance improve"]},
      {q: "Sharing rewards...", a: ["Split equally", "Hard workers", "Justice", "Care"]},
      {q: "Punishing violations...", a: ["Code strictly", "Merciful", "Consistent", "Understanding"]},
      {q: "Preparing mission...", a: ["Strict full plan", "Loose prep", "Finish early", "Adapt fly"]},
      {q: "After mission...", a: ["Write report", "Later ready", "Organize details", "Keep casual"]},
      {q: "Weekly schedule...", a: ["Structured fixed", "Flexible", "Planned day", "Decided day"]},
      {q: "Many missions...", a: ["Prioritize order", "Feel urgent", "Complete duties", "Balance work"]},
      {q: "Mission runs late...", a: ["Finish on time", "Extend calmly", "Timeline", "Adjust naturally"]},
      {q: "Space at tower...", a: ["Extremely organized", "Functional messy", "Clean systematic", "Relaxed untidy"]},
      {q: "Teammate's party...", a: ["RSVP early prepare", "Same day", "Gift timing", "Go flow"]},
      {q: "Learning combat...", a: ["Follow curriculum", "Skip interest", "Master fundamentals", "Experiment"]},
      {q: "Plan fails...", a: ["New structured plan", "Improvise adapt", "Regroup reorganize", "Go situation"]}
    ]
  },
  "workplace-partner": {
    title: "Find Your Perfect Workplace Partner",
    icon: "💼",
    questions: [
      {q: "In team meetings...", a: ["Speak lead", "Listen think", "Share colleagues", "Initiate conversation"]},
      {q: "At office parties...", a: ["Mingle everyone", "Small groups", "One two people", "Meet coworkers"]},
      {q: "When brainstorming...", a: ["Share ideas", "Think alone", "Discuss partner", "Inspire group"]},
      {q: "After work...", a: ["Hang colleagues", "Home alone", "One coworker", "Group activities"]},
      {q: "Need help...", a: ["Ask group", "Figure alone", "Trusted friend", "Many people"]},
      {q: "Working on project...", a: ["Collaborate", "Work independently", "Pair partner", "Constantly"]},
      {q: "Breakthrough...", a: ["Announce team", "Keep to self", "Close coworker", "Present everyone"]},
      {q: "Stressed at work...", a: ["Talk teammates", "Calm alone", "One friend", "Around people"]},
      {q: "Team outing...", a: ["Join all", "Stay back observe", "Stick friend", "Initiate games"]},
      {q: "Prefer work that...", a: ["Concrete practical", "Creativity ideas", "Clear steps", "Innovation"]},
      {q: "Solving problems focus on...", a: ["Facts details", "Patterns big picture", "Real current", "Future possibilities"]},
      {q: "Learning new software...", a: ["Step by step", "Explore experiment", "Basic functions", "Advanced early"]},
      {q: "Planning projects...", a: ["Clear data facts", "Intuition vision", "Realistic plans", "Big ambitions"]},
      {q: "Like tasks that...", a: ["Clear outcomes", "Open-ended", "Predictable", "Surprises"]},
      {q: "Giving feedback...", a: ["Specific factual", "Inspirational broad", "Real results", "Potential"]},
      {q: "Handling deadlines...", a: ["Concrete schedules", "Adapt go", "Strict timelines", "Flexible"]},
      {q: "Best work is...", a: ["Practical efficient", "Creative original", "Reliable steady", "Bold new"]},
      {q: "Ideal career path...", a: ["Stable clear", "Dynamic evolving", "Structured growth", "Unexpected opportunities"]},
      {q: "Making decisions...", a: ["Logic data", "People feelings", "Rational", "Kind"]},
      {q: "Giving feedback...", a: ["Direct honest", "Gentle supportive", "Improvement", "Encouragement"]},
      {q: "Coworker struggles...", a: ["How improve", "Emotionally support", "Solve problem", "Care feelings"]},
      {q: "During conflicts...", a: ["Issues logically", "Harmony peace", "Fair firm", "Understanding"]},
      {q: "Project vs team...", a: ["Project success", "Team morale", "Results", "Relationships"]},
      {q: "Someone makes mistake...", a: ["Point out clearly", "Patient forgiving", "Correction", "Compassion"]},
      {q: "In promotions...", a: ["Performance", "Effort attitude", "Objective", "Empathetic"]},
      {q: "Sharing resources...", a: ["Distribute fairly", "Help need", "Rules", "Heart"]},
      {q: "Setting rules...", a: ["Strict consistent", "Flexible kind", "Order", "Care"]},
      {q: "Organizing work...", a: ["Plan ahead", "Adjust go", "Strict to-do", "Open agenda"]},
      {q: "Meeting deadlines...", a: ["Well advance", "Last minute", "Early neat", "Right time"]},
      {q: "Your desk is...", a: ["Neat organized", "Messy efficient", "Structured labeled", "Casual flexible"]},
      {q: "Many tasks...", a: ["Prioritize schedule", "Comes first", "Step by step", "Jump between"]},
      {q: "Plans change...", a: ["Update schedule", "New flow", "Uncomfortable", "Excited"]},
      {q: "Prefer work that...", a: ["Planned predictable", "Spontaneous flexible", "Structured", "Unstructured"]},
      {q: "For meetings...", a: ["Agenda notes", "Contribute freely", "Start end time", "Conversation flow"]},
      {q: "Learning new skills...", a: ["Full course", "Bits need", "Master basics", "Advanced quickly"]},
      {q: "Project messy...", a: ["Organize immediately", "Work chaos", "Create order", "Embrace flexibility"]}
    ]
  },
  "pop-culture-friend": {
    title: "Who Is Your Ideal Best Friend in Pop Culture?",
    icon: "🎬",
    questions: Array(36).fill(0).map((_,i) => ({q: `Question ${i+1}`, a: ["Option A", "Option B", "Option C", "Option D"]}))
  },
  "disney-princess": {
    title: "Which Disney Princess Is Your Kindred Spirit?",
    icon: "🏰",
    questions: Array(36).fill(0).map((_,i) => ({q: `Question ${i+1}`, a: ["Option A", "Option B", "Option C", "Option D"]}))
  },
  "kdrama-partner": {
    title: "Find Your Ideal K-Drama Partner",
    icon: "📺",
    questions: Array(36).fill(0).map((_,i) => ({q: `Question ${i+1}`, a: ["Option A", "Option B", "Option C", "Option D"]}))
  },
  "video-game-team": {
    title: "Which Video Game Character Are You Meant To Team Up With?",
    icon: "🎮",
    questions: Array(36).fill(0).map((_,i) => ({q: `Question ${i+1}`, a: ["Option A", "Option B", "Option C", "Option D"]}))
  },
  "travel-buddy": {
    title: "What's Your Ideal Travel Buddy Personality?",
    icon: "✈️",
    questions: Array(36).fill(0).map((_,i) => ({q: `Question ${i+1}`, a: ["Option A", "Option B", "Option C", "Option D"]}))
  },
  "anime-compat": {
    title: "Which Anime Character Are You Most Compatible With?",
    icon: "🎌",
    questions: Array(36).fill(0).map((_,i) => ({q: `Question ${i+1}`, a: ["Option A", "Option B", "Option C", "Option D"]}))
  },
  "study-buddy": {
    title: "Find Your Perfect Study Buddy Personality",
    icon: "📚",
    questions: Array(36).fill(0).map((_,i) => ({q: `Question ${i+1}`, a: ["Option A", "Option B", "Option C", "Option D"]}))
  }
};
