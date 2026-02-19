// MBTI Quiz Questions Data
// Each quiz has 36 questions, 4 options each
// Options map to MBTI dimensions: E/I, S/N, T/F, J/P

const MBTI_QUESTIONS = {
  "harry-potter-soulmate": {
    title: "Which Harry Potter Character Is Your Soulmate?",
    questions: [
      {id: "q1", section: "E/I", content: "At the Great Hall feast, you...", options: [
        {text: "Join a big group immediately", dimension: "E"},
        {text: "Sit quietly with 1–2 friends", dimension: "I"},
        {text: "Keep to yourself mostly", dimension: "I"},
        {text: "Talk to new people excitedly", dimension: "E"}
      ]},
      {id: "q2", section: "E/I", content: "When you learn a new spell, you...", options: [
        {text: "Show it to everyone right away", dimension: "E"},
        {text: "Practice alone quietly", dimension: "I"},
        {text: "Teach one friend carefully", dimension: "I"},
        {text: "Gather a group to practice", dimension: "E"}
      ]},
      {id: "q3", section: "E/I", content: "In Dumbledore's Army, you...", options: [
        {text: "Lead the group practice", dimension: "E"},
        {text: "Watch and learn silently", dimension: "I"},
        {text: "Help one nearby person", dimension: "I"},
        {text: "Cheer and encourage everyone", dimension: "E"}
      ]},
      {id: "q4", section: "E/I", content: "At the Yule Ball, you...", options: [
        {text: "Dance with many people", dimension: "E"},
        {text: "Stay with one partner", dimension: "I"},
        {text: "Sit and observe the crowd", dimension: "I"},
        {text: "Make new friends around", dimension: "E"}
      ]},
      {id: "q5", section: "E/I", content: "When you hear a Hogwarts rumor, you...", options: [
        {text: "Discuss it with friends", dimension: "E"},
        {text: "Keep it to yourself", dimension: "I"},
        {text: "Tell only your best friend", dimension: "I"},
        {text: "Ask many people's opinions", dimension: "E"}
      ]},
      {id: "q6", section: "E/I", content: "In Potions class, you prefer...", options: [
        {text: "Working in a lively group", dimension: "E"},
        {text: "Working alone quietly", dimension: "I"},
        {text: "Working with one partner", dimension: "I"},
        {text: "Chatting while you work", dimension: "E"}
      ]},
      {id: "q7", section: "E/I", content: "If you find a secret passage, you...", options: [
        {text: "Bring friends to explore", dimension: "E"},
        {text: "Explore alone first", dimension: "I"},
        {text: "Tell only one trusted person", dimension: "I"},
        {text: "Announce it to your house", dimension: "E"}
      ]},
      {id: "q8", section: "E/I", content: "When you feel upset, you...", options: [
        {text: "Talk to friends to feel better", dimension: "E"},
        {text: "Stay alone to calm down", dimension: "I"},
        {text: "Read or write quietly", dimension: "I"},
        {text: "Hang out to distract yourself", dimension: "E"}
      ]},
      {id: "q9", section: "E/I", content: "On a free weekend, you...", options: [
        {text: "Go out with a big group", dimension: "E"},
        {text: "Stay in and relax alone", dimension: "I"},
        {text: "Go out with one friend", dimension: "I"},
        {text: "Make spontaneous plans", dimension: "E"}
      ]},
      {id: "q10", section: "S/N", content: "When learning a spell, you focus on...", options: [
        {text: "Exact wand movements", dimension: "S"},
        {text: "The magic's feeling", dimension: "N"},
        {text: "Step-by-step rules", dimension: "S"},
        {text: "Creative new uses", dimension: "N"}
      ]},
      {id: "q11", section: "S/N", content: "You choose classes based on...", options: [
        {text: "Practical real-world use", dimension: "S"},
        {text: "Mystery and curiosity", dimension: "N"},
        {text: "Clear structure and rules", dimension: "S"},
        {text: "Imagination and ideas", dimension: "N"}
      ]},
      {id: "q12", section: "S/N", content: "Facing a Dementor, you...", options: [
        {text: "Cast the spell as trained", dimension: "S"},
        {text: "Trust your intuition", dimension: "N"},
        {text: "Follow every instruction", dimension: "S"},
        {text: "Think of a creative solution", dimension: "N"}
      ]},
      {id: "q13", section: "S/N", content: "At the Mirror of Erised, you...", options: [
        {text: "See clear real-life goals", dimension: "S"},
        {text: "Wonder about deep meaning", dimension: "N"},
        {text: "Notice small details", dimension: "S"},
        {text: "Daydream about possibilities", dimension: "N"}
      ]},
      {id: "q14", section: "S/N", content: "Planning Hogsmeade, you...", options: [
        {text: "Make a strict detailed plan", dimension: "S"},
        {text: "Wander and discover freely", dimension: "N"},
        {text: "Stick to a simple schedule", dimension: "S"},
        {text: "Change plans constantly", dimension: "N"}
      ]},
      {id: "q15", section: "S/N", content: "In Herbology, you...", options: [
        {text: "Follow rules carefully", dimension: "S"},
        {text: "Imagine secret magic", dimension: "N"},
        {text: "Keep things neat and healthy", dimension: "S"},
        {text: "Wonder about unknown powers", dimension: "N"}
      ]},
      {id: "q16", section: "S/N", content: "Fighting a Death Eater, you...", options: [
        {text: "Use practiced spells", dimension: "S"},
        {text: "Create new combinations", dimension: "N"},
        {text: "Stick to safe methods", dimension: "S"},
        {text: "Try unexpected moves", dimension: "N"}
      ]},
      {id: "q17", section: "S/N", content: "You prefer magic books that...", options: [
        {text: "Give clear instructions", dimension: "S"},
        {text: "Tell imaginative stories", dimension: "N"},
        {text: "Teach practical skills", dimension: "S"},
        {text: "Share big ideas", dimension: "N"}
      ]},
      {id: "q18", section: "S/N", content: "After Hogwarts, you want...", options: [
        {text: "A stable steady job", dimension: "S"},
        {text: "Adventure and unknowns", dimension: "N"},
        {text: "A peaceful normal life", dimension: "S"},
        {text: "Mystery and discovery", dimension: "N"}
      ]},
      {id: "q19", section: "T/F", content: "If a friend is accused, you...", options: [
        {text: "Judge by evidence fairly", dimension: "T"},
        {text: "Trust them no matter what", dimension: "F"},
        {text: "Choose logic over loyalty", dimension: "T"},
        {text: "Stand by them blindly", dimension: "F"}
      ]},
      {id: "q20", section: "T/F", content: "Grading homework, you...", options: [
        {text: "Score strictly by rules", dimension: "T"},
        {text: "Be kind to people you like", dimension: "F"},
        {text: "Prioritize accuracy", dimension: "T"},
        {text: "Prioritize effort and heart", dimension: "F"}
      ]},
      {id: "q21", section: "T/F", content: "Save a friend or many people?", options: [
        {text: "Save many for the greater good", dimension: "T"},
        {text: "Save my friend first", dimension: "F"},
        {text: "Choose responsibility", dimension: "T"},
        {text: "Choose love and loyalty", dimension: "F"}
      ]},
      {id: "q22", section: "T/F", content: "When a friend fails, you...", options: [
        {text: "Tell them to fix it firmly", dimension: "T"},
        {text: "Comfort them first", dimension: "F"},
        {text: "Focus on solving the problem", dimension: "T"},
        {text: "Focus on their feelings", dimension: "F"}
      ]},
      {id: "q23", section: "T/F", content: "An opponent is hurt, you...", options: [
        {text: "Keep competing fairly", dimension: "T"},
        {text: "Stop to help immediately", dimension: "F"},
        {text: "Follow the rules", dimension: "T"},
        {text: "Follow your heart", dimension: "F"}
      ]},
      {id: "q24", section: "T/F", content: "Disagreeing with a friend, you...", options: [
        {text: "Speak honestly with logic", dimension: "T"},
        {text: "Hold back to keep peace", dimension: "F"},
        {text: "Prioritize truth", dimension: "T"},
        {text: "Prioritize harmony", dimension: "F"}
      ]},
      {id: "q25", section: "T/F", content: "Roommate uses Dark Magic, you...", options: [
        {text: "Report them right away", dimension: "T"},
        {text: "Talk to them privately", dimension: "F"},
        {text: "Protect others logically", dimension: "T"},
        {text: "Choose compassion first", dimension: "F"}
      ]},
      {id: "q26", section: "T/F", content: "Sharing snacks, you...", options: [
        {text: "Split equally for fairness", dimension: "T"},
        {text: "Give more to those who love it", dimension: "F"},
        {text: "Make it fair for all", dimension: "T"},
        {text: "Give based on care", dimension: "F"}
      ]},
      {id: "q27", section: "T/F", content: "Punishing a rule-breaker, you...", options: [
        {text: "Follow rules exactly", dimension: "T"},
        {text: "Be gentle and understanding", dimension: "F"},
        {text: "Be consistent and logical", dimension: "T"},
        {text: "Be kind and flexible", dimension: "F"}
      ]},
      {id: "q28", section: "J/P", content: "Studying for exams, you...", options: [
        {text: "Make a strict plan", dimension: "J"},
        {text: "Study casually last minute", dimension: "P"},
        {text: "Finish early to avoid stress", dimension: "J"},
        {text: "Work well under pressure", dimension: "P"}
      ]},
      {id: "q29", section: "J/P", content: "Finishing homework, you...", options: [
        {text: "Turn it in early and neat", dimension: "J"},
        {text: "Wait until the last second", dimension: "P"},
        {text: "Organize it perfectly", dimension: "J"},
        {text: "Submit whenever ready", dimension: "P"}
      ]},
      {id: "q30", section: "J/P", content: "Planning a trip, you...", options: [
        {text: "Make a fixed list", dimension: "J"},
        {text: "Have no plan at all", dimension: "P"},
        {text: "Know exactly what you need", dimension: "J"},
        {text: "Buy whatever catches you", dimension: "P"}
      ]},
      {id: "q31", section: "J/P", content: "With many tasks, you...", options: [
        {text: "Finish in order one by one", dimension: "J"},
        {text: "Do what feels right now", dimension: "P"},
        {text: "Finish work before fun", dimension: "J"},
        {text: "Mix work and fun", dimension: "P"}
      ]},
      {id: "q32", section: "J/P", content: "If you can't finish on time, you...", options: [
        {text: "Keep working until done", dimension: "J"},
        {text: "Finish it tomorrow calmly", dimension: "P"},
        {text: "Feel stressed until complete", dimension: "J"},
        {text: "Relax and finish later", dimension: "P"}
      ]},
      {id: "q33", section: "J/P", content: "Your space is usually...", options: [
        {text: "Very neat and organized", dimension: "J"},
        {text: "Messy but you know where things are", dimension: "P"},
        {text: "Clean with clear systems", dimension: "J"},
        {text: "Casual and always changing", dimension: "P"}
      ]},
      {id: "q34", section: "J/P", content: "When invited to an event, you...", options: [
        {text: "Reply and commit early", dimension: "J"},
        {text: "Decide last minute", dimension: "P"},
        {text: "Plan everything ahead", dimension: "J"},
        {text: "Show up whenever ready", dimension: "P"}
      ]},
      {id: "q35", section: "J/P", content: "Learning a new skill, you...", options: [
        {text: "Go step by step in order", dimension: "J"},
        {text: "Skip boring parts freely", dimension: "P"},
        {text: "Master basics first", dimension: "J"},
        {text: "Jump around and explore", dimension: "P"}
      ]},
      {id: "q36", section: "J/P", content: "When plans change suddenly, you...", options: [
        {text: "Adjust immediately and stay organized", dimension: "J"},
        {text: "Take it easy and adapt slowly", dimension: "P"},
        {text: "Feel annoyed until new plan", dimension: "J"},
        {text: "Enjoy the change and go with it", dimension: "P"}
      ]}
    ]
  },
  // 由于字数限制，其他问卷需要后续添加...
  "marvel-cp": {
    title: "Who Is Your Perfect Marvel CP?",
    questions: []
  },
  "workplace-partner": {
    title: "Find Your Perfect Workplace Partner",
    questions: []
  },
  "pop-culture-friend": {
    title: "Who Is Your Ideal Best Friend in Pop Culture?",
    questions: []
  },
  "disney-princess": {
    title: "Which Disney Princess Is Your Kindred Spirit?",
    questions: []
  },
  "kdrama-partner": {
    title: "Find Your Ideal K-Drama Partner",
    questions: []
  },
  "video-game-team": {
    title: "Which Video Game Character Are You Meant To Team Up With?",
    questions: []
  },
  "travel-buddy": {
    title: "What's Your Ideal Travel Buddy Personality?",
    questions: []
  },
  "anime-compat": {
    title: "Which Anime Character Are You Most Compatible With?",
    questions: []
  },
  "study-buddy": {
    title: "Find Your Perfect Study Buddy Personality",
    questions: []
  }
};

// Export for use in quiz pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MBTI_QUESTIONS;
}
