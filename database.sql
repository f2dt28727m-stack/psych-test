-- 心理测试题库系统 - 数据库表结构
-- 三层架构：骨架层(16型人格) -> 皮肤层(热点IP) -> 测试题层

-- ============================================================
-- 骨架层: personalities (16型人格)
-- ============================================================
CREATE TABLE IF NOT EXISTS personalities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type_key VARCHAR(10) UNIQUE NOT NULL,  -- MBTI代码: INTJ, INFP, ESFJ, etc.
    name_cn VARCHAR(100) NOT NULL,           -- 中文名
    name_en VARCHAR(100) NOT NULL,           -- 英文名
    description TEXT,                        -- 总体描述
    traits JSONB,                            -- 特征数组
    strengths JSONB,                          -- 优势
    weaknesses JSONB,                         -- 劣势
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 索引
CREATE INDEX idx_personalities_type_key ON personalities(type_key);

-- ============================================================
-- 皮肤层: themes (热点/IP主题)
-- ============================================================
CREATE TABLE IF NOT EXISTS themes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    personality_id UUID NOT NULL REFERENCES personalities(id) ON DELETE CASCADE,
    theme_key VARCHAR(100) UNIQUE NOT NULL,   -- 主题标识: harrypotter, zhenhuan, etc.
    title VARCHAR(255) NOT NULL,              -- 标题: "你是哈利波特里的谁"
    description TEXT,                         -- 描述
    cover_image VARCHAR(500),                 -- 封面图URL
    ip_source VARCHAR(100),                   -- 来源IP: Harry Potter, 甄嬛传
    is_hot BOOLEAN DEFAULT false,             -- 是否热点
    hot_rank INT,                             -- 热度排名
    view_count INT DEFAULT 0,                 -- 查看次数
    share_count INT DEFAULT 0,                -- 分享次数
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 索引
CREATE INDEX idx_themes_personality_id ON themes(personality_id);
CREATE INDEX idx_themes_is_hot ON themes(is_hot);
CREATE INDEX idx_themes_hot_rank ON themes(hot_rank);

-- ============================================================
-- 测试题层: question_sets (题库)
-- ============================================================
CREATE TABLE IF NOT EXISTS question_sets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    theme_id UUID NOT NULL REFERENCES themes(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,              -- 标题: "你是霍格沃茨哪个学院"
    description TEXT,                         -- 描述
    question_count INT DEFAULT 0,             -- 题目数量
    is_active BOOLEAN DEFAULT true,           -- 是否启用
    is_default BOOLEAN DEFAULT false,        -- 是否默认题库
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 索引
CREATE INDEX idx_question_sets_theme_id ON question_sets(theme_id);
CREATE INDEX idx_question_sets_active ON question_sets(is_active);

-- ============================================================
-- 题目表: questions
-- ============================================================
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_set_id UUID NOT NULL REFERENCES question_sets(id) ON DELETE CASCADE,
    question_key VARCHAR(50),                 -- 题号: q1, q2, etc.
    content TEXT NOT NULL,                    -- 题目内容
    content_en TEXT,                          -- 英文题目
    category VARCHAR(50),                      -- 分类
    order_index INT DEFAULT 0,               -- 排序
    is_active BOOLEAN DEFAULT true,           -- 是否启用
    created_at TIMESTAMP DEFAULT NOW()
);

-- 索引
CREATE INDEX idx_questions_set_id ON questions(question_set_id);

-- ============================================================
-- 选项表: options
-- ============================================================
CREATE TABLE IF NOT EXISTS options (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    content TEXT NOT NULL,                    -- 选项内容
    content_en TEXT,                          -- 英文选项
    personality_type VARCHAR(10),             -- 对应的人格类型(type_key)
    score_value INT DEFAULT 1,                -- 分值
    order_index INT DEFAULT 0,               -- 排序
    created_at TIMESTAMP DEFAULT NOW()
);

-- 索引
CREATE INDEX idx_options_question_id ON options(question_id);
CREATE INDEX idx_options_personality ON options(personality_type);

-- ============================================================
-- 用户答题记录: user_results
-- ============================================================
CREATE TABLE IF NOT EXISTS user_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_set_id UUID REFERENCES question_sets(id),
    theme_id UUID REFERENCES themes(id),
    user_identifier VARCHAR(100),              -- 用户标识 (UUID/openid)
    answers JSONB,                            -- 答案: {q1: "A", q2: "C", ...}
    score_json JSONB,                         -- 分数: {"INTJ": 5, "INFP": 8, ...}
    result_type VARCHAR(10),                  -- 结果类型
    result_title VARCHAR(100),                -- 结果标题
    result_description TEXT,                  -- 结果描述
    source VARCHAR(20) DEFAULT 'web',         -- 来源: web, share
    ip_info VARCHAR(100),                     -- 来源IP信息 (可选)
    created_at TIMESTAMP DEFAULT NOW()
);

-- 索引
CREATE INDEX idx_user_results_user ON user_results(user_identifier);
CREATE INDEX idx_user_results_theme ON user_results(theme_id);
CREATE INDEX idx_user_results_created ON user_results(created_at);

-- ============================================================
-- 初始化16型人格数据
-- ============================================================
INSERT INTO personalities (type_key, name_cn, name_en, description, traits, strengths, weaknesses) VALUES
('INTJ', '建筑师', 'Architect', '富有想象力和战略性的思想家，一切皆在计划之中', '["理性", "独立", "战略", "果断"]', '["聪明", "有远见", "独立", "高效"]', '["挑剔", "冷漠", "难以表达情感"]'),
('INTP', '逻辑学家', 'Logician', '极具创新精神的发明家，追求知识与理解', '["理性", "好奇", "分析", "抽象"]', '["聪明", "创新", "客观", "灵活"]', '["冷漠", "不切实际", "难以专注"]'),
('ENTJ', '指挥官', 'Commander', '大胆富有想象力的领导者，天生推动者', '["果断", "自信", "领导", "战略"]', '["高效", "有决断", "领导力", "直言不讳"]', '["固执", "没耐心", "冷漠"]'),
('ENTP', '辩论家', 'Debater', '聪明好奇的思想者，喜欢挑战一切', '["创新", "好奇", "聪明", "健谈"]', '["机智", "创意", "善于辩论", "热情"]', '["冷漠", "容易分心", "忽略细节"]'),
('INFJ', '提倡者', 'Advocate', '安静而有远见的理想主义者', '["理想", "洞察", "创意", "坚定"]', '["有远见", "忠诚", "有原则", "促进和谐"]', '["过度付出", "完美主义", "难以接受批评"]'),
('INFP', '调停者', 'Mediator', '富有诗意、善良的梦想家', '["理想", "敏感", "创造", "忠诚"]', '["富有同情心", "创意", "忠诚", "灵活"]', '["过度自我牺牲", "不切实际", "情感脆弱"]'),
('ENFJ', '主人公', 'Protagonger', '富有魅力鼓舞人心的领导者', '["温暖", "利他", "魅力", "责任"]', '["善于沟通", "有感染力", "忠诚", "领导力"]', '["过度理想化", "过于迎合", "情绪化"]'),
('ENFP', '竞选者', 'Campaigner', '热情有创意的自由灵魂', '["热情", "创意", "社交", "冲动"]', '["热情", "创意", "善于激励", "灵活"]', '["容易分心", "缺乏专注", "情绪化"]'),
('ISTJ', '物流师', 'Logistician', '务实可靠的传统主义者', '["可靠", "务实", "传统", "责任"]', '["可靠", "有组织", "勤奋", "忠诚"]', '["固执", "难以接受新事物", "冷漠"]'),
('ISFJ', '守卫者', 'Defender', '非常忠诚且细致的守护者', '["传统", "温暖", "责任", "细致"]', '["可靠", "勤奋", "温暖", "有耐心"]', '["过度自责", "忽视自身需求", "脆弱"]'),
('ESTJ', '总经理', 'Executive', '卓越的组织领导者', '["传统", "责任", "果断", "高效"]', '["有组织", "高效", "正直", "有领导力"]', '["固执", "缺乏灵活性", "冷漠"]'),
('ESFJ', '执政官', 'Consul', '热情爱交际的超级大赢家', '["传统", "社交", "温暖", "责任"]', '["温暖", "有责任感", "善于社交", "勤奋"]', '["过度照顾他人", "忽视自身", "脆弱"]'),
('ISTP', '鉴赏家', 'Virtuoso', '大胆实际的动手能力者', '["理性", "实用", "冒险", "灵活"]', '["动手能力", "冷静", "灵活", "分析"]', '["冷漠", "难以表达", "冒险"]'),
('ISFP', '探险家', 'Adventurer', '灵活有艺术感的探险家', '["艺术", "敏感", "灵活", "审美"]', '["艺术感", "温柔", "灵活", "审美"]', '["容易逃避", "难以做决定", "脆弱"]'),
('ESTP', '企业家', 'Entrepreneur', '聪明精力充沛的探险家', '["活力", "实际", "冒险", "社交"]', '["活力", "实用", "善于谈判", "灵活"]', '["冷漠", "缺乏耐心", "冲动"]'),
('ESFP', '表演者', 'Entertainer', ' spontaneous兴奋活泼的舞台王者', '["活力", "社交", "热情", "实际"]', '["活力", "热情", "善于激励", "实用"]', '["容易分心", "逃避问题", "缺乏规划"]')
ON CONFLICT (type_key) DO NOTHING;

-- ============================================================
-- 添加一些示例皮肤层数据
-- ============================================================
-- 先获取一个人格ID作为示例
DO $$
DECLARE
    infp_id UUID;
BEGIN
    SELECT id INTO infp_id FROM personalities WHERE type_key = 'INFP';
    
    IF infp_id IS NOT NULL THEN
        INSERT INTO themes (personality_id, theme_key, title, description, ip_source, is_hot, hot_rank)
        VALUES 
        (infp_id, 'harrypotter', '你是哈利波特里的谁？', '测测你在魔法世界的人格定位', 'Harry Potter', true, 1),
        (infp_id, 'zhenhuan', '甄嬛传人格测试', '你在后宫属于什么段位？', '甄嬛传', true, 2),
        (infp_id, 'marvel', '漫威超级英雄人格', '你是哪个超级英雄？', 'Marvel', true, 3)
        ON CONFLICT (theme_key) DO NOTHING;
    END IF;
END $$;

-- 输出创建结果
SELECT '表创建完成!' AS status;
SELECT COUNT(*) AS personality_count FROM personalities;
