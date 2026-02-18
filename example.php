<?php
// 快速生成热点测试的示例
// 只需修改这个文件的相关配置，10分钟上线新测试

$testConfig = [
    // 热点标题
    "title" => "《鱿鱼游戏》你是哪个角色？",
    "titleEn" => "Which Squid Game Character Are You?",
    
    // 副标题
    "subtitle" => "基于荣格人格理论",
    "subtitleEn" => "Based on Jung's Personality Theory",
    
    // 4个角色对应人格
    "characters" => [
        "A" => [
            "name" => "阿里",
            "desc" => "你是一个可靠善良的人，愿意为他人付出..."
        ],
        "B" => [
            "name" => "尚佑",
            "desc" =: "你理性冷静，善于分析局势..."
        ],
        "C" => [
            "name" => "韩在俊",
            "desc" =: "你勇敢冲动，敢于冒险..."
        ],
        "D" => [
            "name" => "姜晓",
            "desc" =: "你乐观坚强，善于适应..."
        ]
    ]
];

// 使用方法：
// 1. 复制这份配置
// 2. 修改角色名和描述
// 3. 保存为新文件 如 squid-game.php
// 4. 上传到服务器
?>
