// 心理测试核心框架
// 基于荣格人格 + 大五人格

const QuizSystem = {
  // 4种人格类型（荣格底层）
  types: {
    A: { name: "守护者", nameEn: "The Guardian", traits: ["责任", "稳定", "传统"], traitsEn: ["responsible", "stable", "traditional"] },
    B: { name: "思考者", nameEn: "The Thinker", traits: ["理性", "独立", "分析"], traitsEn: ["rational", "independent", "analytical"] },
    C: { name: "冒险者", nameEn: "The Adventurer", traits: ["创新", "冲动", "探索"], traitsEn: ["innovative", "impulsive", "explorative"] },
    D: { name: "乐天派", nameEn: "The Optimist", traits: ["乐观", "社交", "随和"], traitsEn: ["optimistic", "social", "easygoing"] }
  },

  // 母题库（21题，3组）
  questions: {
    social: [
      { id: 's1', text: "在聚会中，你通常会...", textEn: "At a party, you usually...", options: [
        { text: "主动认识新朋友", textEn: "主动认识新朋友", type: "D" },
        { text: "等朋友介绍", textEn: "wait for friends to introduce", type: "A" },
        { text: "观察全场", textEn: "observe the room", type: "B" },
        { text: "加入最热闹的话题", textEn: "join the liveliest topic", type: "C" }
      ]},
      { id: 's2', text: "朋友向你倾诉烦恼，你会...", textEn: "When a friend shares problems, you...", options: [
        { text: "给出具体建议", textEn: "give practical advice", type: "B" },
        { text: "耐心倾听陪伴", textEn: "listen patiently", type: "A" },
        { text: "分享类似经历", textEn: "share similar experiences", type: "D" },
        { text: "一起想办法解决", textEn: "think of solutions together", type: "C" }
      ]},
      { id: 's3', text: "你更喜欢哪种社交方式？", textEn: "What social style do you prefer?", options: [
        { text: "小范围深度交流", textEn: "small group deep talks", type: "A" },
        { text: "一对一聊天", textEn: "one-on-one chats", type: "B" },
        { text: "大型社交活动", textEn: "large social events", type: "D" },
        { text: "各种场合都ok", textEn: "all kinds of situations", type: "C" }
      ]},
      { id: 's4', text: "被人误解时，你会...", textEn: "When misunderstood, you...", options: [
        { text: "直接解释清楚", textEn: "explain directly", type: "B" },
        { text: "生闷气但不说", textEn: "feel upset but stay silent", type: "A" },
        { text: "用幽默化解", textEn: "use humor to defuse", type: "D" },
        { text: "找机会证明自己", textEn: "find chances to prove yourself", type: "C" }
      ]},
      { id: 's5', text: "你欣赏朋友身上什么特质？", textEn: "What trait do you appreciate in friends?", options: [
        { text: "诚实可靠", textEn: "honesty and reliability", type: "A" },
        { text: "聪明有趣", textEn: "smart and interesting", type: "B" },
        { text: "热情开朗", textEn: "warm and outgoing", type: "D" },
        { text: "勇敢创新", textEn: "brave and innovative", type: "C" }
      ]},
      { id: 's6', text: "社交媒体上你更关注？", textEn: "What do you pay more attention to on social media?", options: [
        { text: "朋友的动态", textEn: "friends' updates", type: "A" },
        { text: "知识干货", textEn: "knowledge and tips", type: "B" },
        { text: "有趣的内容", textEn: "interesting content", type: "D" },
        { text: "新鲜热点", textEn: "fresh trends", type: "C" }
      ]},
      { id: 's7', text: "你希望朋友怎么对你？", textEn: "How do you want friends to treat you?", options: [
        { text: "真诚相待", textEn: "treat you sincerely", type: "A" },
        { text: "尊重独立空间", textEn: "respect your independent space", type: "B" },
        { text: "经常联系", textEn: "stay in touch often", type: "D" },
        { text: "一起冒险挑战", textEn: "join you on adventures", type: "C" }
      ]}
    ],
    stress: [
      { id: 'k1', text: "面对压力时，你会...", textEn: "When under stress, you...", options: [
        { text: "制定计划解决", textEn: "make a plan to solve it", type: "B" },
        { text: "找家人朋友倾诉", textEn: "talk to family and friends", type: "A" },
        { text: "先逃避一下", textEn: "avoid it for a while", type: "C" },
        { text: "保持乐观心态", textEn: "stay optimistic", type: "D" }
      ]},
      { id: 'k2', text: "紧急情况你会...", textEn: "In emergencies, you...", options: [
        { text: "冷静分析情况", textEn: "stay calm and analyze", type: "B" },
        { text: "先安抚大家情绪", textEn: "calm everyone down first", type: "A" },
        { text: "快速行动尝试", textEn: "act quickly and try", type: "C" },
        { text: "相信船到桥头自然直", textEn: "believe things will work out", type: "D" }
      ]},
      { id: 'k3', text: " deadline 临近却做不完，你会...", textEn: "When deadline is near but you can't finish, you...", options: [
        { text: "熬夜也要完成", textEn: "stay up to complete it", type: "A" },
        { text: "求助他人", textEn: "ask others for help", type: "D" },
        { text: "找捷径提高效率", textEn: "find shortcuts", type: "C" },
        { text: "重新评估优先级", textEn: "reprioritize", type: "B" }
      ]},
      { id: 'k4', text: "当你感到焦虑时，你会...", textEn: "When you feel anxious, you...", options: [
        { text: "深呼吸冷静", textEn: "take deep breaths", type: "A" },
        { text: "分析焦虑根源", textEn: "analyze the root cause", type: "B" },
        { text: "转移注意力", textEn: "distract yourself", type: "D" },
        { text: "行动化解焦虑", textEn: "act to reduce anxiety", type: "C" }
      ]},
      { id: 'k5', text: "失败后你会...", textEn: "After failure, you...", options: [
        { text: "总结教训下次改进", textEn: "learn lessons for next time", type: "B" },
        { text: "给自己一段时间恢复", textEn: "give yourself time to recover", type: "A" },
        { text: "很快忘记继续前进", textEn: "forget and move on", type: "D" },
        { text: "换个方式再尝试", textEn: "try a different way", type: "C" }
      ]},
      { id: 'k6', text: "面对不确定性，你会...", textEn: "When facing uncertainty, you...", options: [
        { text: "做好各种准备", textEn: "prepare for various scenarios", type: "A" },
        { text: "收集信息分析", textEn: "collect info and analyze", type: "B" },
        { text: "顺其自然", textEn: "let it be", type: "D" },
        { text: "勇于尝试新可能", textEn: "dare to try new possibilities", type: "C" }
      ]},
      { id: 'k7', text: "别人对你期望高，你会...", textEn: "When others have high expectations, you...", options: [
        { text: "全力以赴不辜负", textEn: "do your best", type: "A" },
        { text: "感到压力但动力", textEn: "feel pressure but motivated", type: "B" },
        { text: "把期望变成挑战", textEn: "turn expectations into challenges", type: "C" }
      ]}
    ],
    value: [
      { id: 'v1', text: "对你来说最重要的是？", textEn: "What's most important to you?", options: [
        { text: "家庭和谐", textEn: "family harmony", type: "A" },
        { text: "个人成长", textEn: "personal growth", type: "B" },
        { text: "自由体验", textEn: "freedom and experience", type: "C" },
        { text: "快乐当下", textEn: "happiness in the moment", type: "D" }
      ]},
      { id: 'v2', text: "你更看重？", textEn: "What do you value more?", options: [
        { text: "安全感", textEn: "security", type: "A" },
        { text: "真相", textEn: "truth", type: "B" },
        { text: "可能性", textEn: "possibilities", type: "C" },
        { text: "幸福感", textEn: "happiness", type: "D" }
      ]},
      { id: 'v3', text: "人生目标是？", textEn: "Life goal?", options: [
        { text: "成为一个有用的人", textEn: "become a useful person", type: "A" },
        { text: "不断学习和成长", textEn: "keep learning and growing", type: "B" },
        { text: "体验尽可能多的人生", textEn: "experience as much as possible", type: "C" },
        { text: "快乐过好每一天", textEn: "enjoy every day", type: "D" }
      ]},
      { id: 'v4', text: "你认同的说法是？", textEn: "Which saying do you agree with?", options: [
        { text: "稳健才能长久", textEn: "steady wins", type: "A" },
        { text: "知识就是力量", textEn: "knowledge is power", type: "B" },
        { text: "人生在于折腾", textEn: "life is about taking risks", type: "C" },
        { text: "开心最重要", textEn: "happiness matters most", type: "D" }
      ]},
      { id: 'v5', text: "做决定时你更看重？", textEn: "When making decisions, you value more?", options: [
        { text: "后果和责任", textEn: "consequences and responsibility", type: "A" },
        { text: "逻辑和数据", textEn: "logic and data", type: "B" },
        { text: "机会和可能", textEn: "opportunities and possibilities", type: "C" },
        { text: "内心感受", textEn: "inner feelings", type: "D" }
      ]},
      { id: 'v6', text: "你欣赏的品质是？", textEn: "What quality do you admire?", options: [
        { text: "坚韧可靠", textEn: "resilience and reliability", type: "A" },
        { text: "智慧理性", textEn: "wisdom and rationality", type: "B" },
        { text: "勇气魄力", textEn: "courage and boldness", type: "C" },
        { text: "善良温暖", textEn: "kindness and warmth", type: "D" }
      ]},
      { id: 'v7', text: "你对规则的看法？", textEn: "Your view on rules?", options: [
        { text: "规则是必要的", textEn: "rules are necessary", type: "A" },
        { text: "规则需要理性看待", textEn: "rules need rational view", type: "B" },
        { text: "规则可以打破", textEn: "rules can be broken", type: "C" },
        { text: "规则因人而异", textEn: "rules depend on people", type: "D" }
      ]}
    ]
  },

  // 随机抽取一组题目（7题）
  getRandomQuestions() {
    const groups = ['social', 'stress', 'value'];
    const group = groups[Math.floor(Math.random() * groups.length)];
    const qList = [...this.questions[group]];
    
    // 洗牌
    for (let i = qList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [qList[i], qList[j]] = [qList[j], qList[i]];
    }
    
    return qList.slice(0, 7);
  },

  // 计算结果
  calculateResult(answers) {
    const scores = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(a => scores[a.type]++);
    
    // 找最高分
    let maxType = 'A';
    let maxScore = scores.A;
    Object.keys(scores).forEach(t => {
      if (scores[t] > maxScore) {
        maxScore = scores[t];
        maxType = t;
      }
    });
    
    return this.types[maxType];
  }
};

// 主题系统 - 快速生成新测试
const ThemeSystem = {
  // 预设主题
  themes: {
    "default": {
      title: "你的性格类型是什么？",
      titleEn: "What's Your Personality Type?",
      subtitle: "基于荣格人格理论",
      subtitleEn: "Based on Jung's Personality Theory",
      results: {
        A: { title: "守护者", desc: "你是一个可靠、稳定、注重传统的人..." },
        B: { title: "思考者", desc: "你理性、独立、善于分析..." },
        C: { title: "冒险者", desc: "你创新、勇敢、喜欢探索..." },
        D: { title: "乐天派", desc: "你乐观、热情、善于社交..." }
      }
    }
  },

  // 生成主题测试
  generateTest(themeKey, customData = {}) {
    const base = this.themes[themeKey] || this.themes.default;
    const theme = { ...base, ...customData };
    const questions = QuizSystem.getRandomQuestions();
    
    return {
      theme,
      questions
    };
  }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuizSystem, ThemeSystem };
}
