/* Winglish 閱讀館文章資料：A Seat for a New Friend */
window.ARTICLE = (function(){
const LEVELS = [
 {
  "name": "Level 1",
  "rec": "國三（會考程度）",
  "paras": [
   [
    0,
    1,
    2
   ],
   [
    3,
    4,
    5,
    6,
    7
   ],
   [
    8,
    9,
    10,
    11
   ],
   [
    12,
    13
   ],
   [
    14,
    15,
    16
   ]
  ],
  "figs": {
   "1": "bench"
  },
  "heads": {
   "0": "Alone at Recess",
   "1": "A Special Bench",
   "2": "Christian's Idea",
   "4": "A Small Question"
  },
  "sents": [
   [
    "Have you ever felt alone at recess?",
    "你曾經在下課時間覺得孤單嗎？"
   ],
   [
    "In 2013, a second grader named Christian Bucks noticed that some of his classmates had no one to play with.",
    "2013 年，一個名叫克里斯汀・巴克斯的二年級學生注意到，有些同學下課時沒有人陪他們玩。"
   ],
   [
    "He wanted to help them.",
    "他想要幫助他們。"
   ],
   [
    "Christian's family was thinking about moving to Germany for his father's job.",
    "克里斯汀一家人當時正考慮因為爸爸的工作搬到德國。"
   ],
   [
    "While looking at German schools, he saw a picture of a special bench on a playground.",
    "在查看德國學校的資料時，他看到一張照片，操場上有一張特別的長椅。"
   ],
   [
    "It was called a \"buddy bench.\"",
    "它叫做「友誼長椅」。"
   ],
   [
    "If you feel lonely, you sit on the bench.",
    "如果你覺得孤單，就坐到這張長椅上。"
   ],
   [
    "When other children see you there, they come and ask you to play.",
    "其他孩子看到你坐在那裡，就會過來邀你一起玩。"
   ],
   [
    "The family never moved, but Christian kept thinking about the bench.",
    "他們最後沒有搬家，但克里斯汀一直想著那張長椅。"
   ],
   [
    "He told the principal of his school in Pennsylvania about the idea.",
    "他把這個點子告訴了他在賓州學校的校長。"
   ],
   [
    "The principal loved it and even let Christian choose the colors.",
    "校長很喜歡這個點子，甚至讓克里斯汀挑選長椅的顏色。"
   ],
   [
    "Soon, a bright new buddy bench stood on the playground.",
    "很快地，一張色彩鮮豔的新友誼長椅就出現在操場上。"
   ],
   [
    "Newspapers and TV shows reported the story, and other schools wanted benches too.",
    "報紙和電視節目報導了這個故事，其他學校也想要這樣的長椅。"
   ],
   [
    "Today, buddy benches can be found in schools on six continents.",
    "今天，六大洲的學校裡都找得到友誼長椅。"
   ],
   [
    "A bench is just a simple thing.",
    "長椅只是一個很簡單的東西。"
   ],
   [
    "But it reminds everyone to look around and notice people who are alone.",
    "但它提醒每個人看看四周，注意那些獨自一人的人。"
   ],
   [
    "Sometimes, all it takes to make a friend is one small question: \"Do you want to play?\"",
    "有時候，交一個朋友只需要一個小小的問題：「你想一起玩嗎？」"
   ]
  ]
 },
 {
  "name": "Level 2",
  "rec": "高二",
  "paras": [
   [
    0,
    1,
    2
   ],
   [
    3,
    4,
    5
   ],
   [
    6,
    7,
    8,
    9
   ],
   [
    10,
    11,
    12
   ],
   [
    13,
    14,
    15
   ]
  ],
  "figs": {
   "3": "bench"
  },
  "heads": {
   "0": "The Loneliest Part of the Day",
   "1": "An Idea from Germany",
   "2": "From One Bench to Thousands",
   "3": "How It Works",
   "4": "Why It Matters"
  },
  "sents": [
   [
    "For many children, recess is the best part of the school day.",
    "對很多孩子來說，下課是一天中最棒的時光。"
   ],
   [
    "For others, it can be the loneliest, especially if they are new, shy, or simply have no one to play with that day.",
    "但對另一些孩子來說，下課可能是最孤單的時候，尤其是剛轉學來、很害羞，或那天剛好沒有人陪玩的人。"
   ],
   [
    "In 2013, a second grader in York, Pennsylvania, named Christian Bucks decided to do something about it.",
    "2013 年，賓州約克市一位名叫克里斯汀・巴克斯的二年級學生，決定為此做點事。"
   ],
   [
    "The idea came from an unexpected place.",
    "這個點子來自一個意想不到的地方。"
   ],
   [
    "When his family was considering a move to Germany for his father's job, Christian looked at brochures for schools there and noticed a bench on one playground.",
    "當他們家考慮因為爸爸的工作搬到德國時，克里斯汀翻看當地學校的簡介，注意到其中一所學校操場上的一張長椅。"
   ],
   [
    "It was a \"buddy bench,\" a place where a lonely child could sit as a signal that he or she wanted someone to play with.",
    "那是一張「友誼長椅」，孤單的孩子可以坐在那裡，表示自己想找人一起玩。"
   ],
   [
    "The family stayed in Pennsylvania, but Christian brought the idea to his principal, Matthew Miller, who ordered a bench and let Christian help choose its style and colors.",
    "他們家最後留在賓州，但克里斯汀把這個點子告訴校長馬修・米勒，校長訂購了一張長椅，還讓克里斯汀幫忙挑選樣式和顏色。"
   ],
   [
    "When it arrived, Christian was the first to sit on it.",
    "長椅送來時，克里斯汀是第一個坐上去的人。"
   ],
   [
    "A local newspaper wrote about the bench, national TV picked up the story, and letters arrived from principals in 32 states asking how to get one.",
    "當地報紙報導了這張長椅，全國性的電視節目也跟進，來自 32 個州的校長紛紛寫信詢問要怎麼取得一張。"
   ],
   [
    "By 2016, at least 1,000 elementary schools on six continents had installed buddy benches.",
    "到了 2016 年，六大洲至少已有 1,000 所小學設置了友誼長椅。"
   ],
   [
    "The rules are simple.",
    "規則很簡單。"
   ],
   [
    "Before you sit on the bench, think of something you would like to do, and when you see someone sitting there, invite them to join you.",
    "坐上長椅之前，先想想你想做什麼；看到有人坐在那裡時，就邀請他一起加入。"
   ],
   [
    "The bench can also be useful on days when your best friend is absent.",
    "在你最好的朋友請假的日子，這張長椅也很好用。"
   ],
   [
    "Of course, a bench cannot solve loneliness by itself.",
    "當然，一張長椅本身無法解決孤單的問題。"
   ],
   [
    "What makes it work is the kindness of the students who notice someone sitting alone and walk over.",
    "讓它發揮作用的，是那些注意到有人獨自坐著、願意走過去的同學的善意。"
   ],
   [
    "Christian's bench is a reminder that you do not have to be an adult to change your school; sometimes you just have to notice.",
    "克里斯汀的長椅提醒我們：要改變你的學校，不一定要是大人；有時候，你只需要留意身邊的人。"
   ]
  ]
 },
 {
  "name": "Level 3",
  "rec": "比學測更難（進階挑戰）",
  "paras": [
   [
    0,
    1,
    2
   ],
   [
    3,
    4,
    5
   ],
   [
    6,
    7,
    8
   ],
   [
    9,
    10,
    11
   ],
   [
    12,
    13,
    14
   ]
  ],
  "figs": {
   "3": "bench"
  },
  "heads": {
   "0": "The Pain of Being Left Out",
   "1": "A Second Grader's Proposal",
   "2": "Rapid Spread",
   "3": "Limits and Criticism",
   "4": "A Wider Idea"
  },
  "sents": [
   [
    "Psychologists have long recognized that social exclusion is far more than a minor disappointment.",
    "心理學家很早就認識到，被排擠遠遠不只是小小的失望。"
   ],
   [
    "Some studies suggest that being left out can activate some of the same brain regions involved in physical pain, which may explain why a lonely recess can feel so distressing to a child.",
    "有些研究指出，被排除在外可能會啟動部分與身體疼痛有關的腦區，這或許能解釋為什麼孤單的下課時間會讓孩子如此難受。"
   ],
   [
    "The buddy bench is a deliberately simple response to this problem.",
    "友誼長椅是針對這個問題刻意設計的簡單對策。"
   ],
   [
    "Its popularity in the United States is usually credited to Christian Bucks, who in 2013, as a second grader in York, Pennsylvania, saw such a bench in a brochure for a school in Germany, where his family was considering a move.",
    "它在美國的流行通常歸功於克里斯汀・巴克斯：2013 年，還是賓州約克市二年級生的他，在一所德國學校的簡介中看到這樣的長椅，當時他們家正考慮搬到德國。"
   ],
   [
    "Although the move never took place, Christian proposed the idea to his principal, who installed a brightly colored bench on the school playground.",
    "雖然最後沒有搬家，克里斯汀仍向校長提出這個點子，校長便在學校操場上設置了一張色彩鮮豔的長椅。"
   ],
   [
    "The underlying principle is that a child who sits there is signaling, without having to say a word, that he or she would welcome company.",
    "其背後的原理是：坐在那裡的孩子不必開口，就能表示自己歡迎有人作伴。"
   ],
   [
    "Media coverage transformed a local initiative into a national trend.",
    "媒體報導讓一個地方性的提議變成了全國性的潮流。"
   ],
   [
    "Within weeks, the principal had received inquiries from 32 states, and by 2016 at least 1,000 elementary schools on six continents had adopted the idea.",
    "幾週內，校長就收到來自 32 個州的詢問；到了 2016 年，六大洲至少有 1,000 所小學採用了這個點子。"
   ],
   [
    "Its appeal is easy to understand: it is inexpensive, visible, and empowers children to look after one another rather than relying solely on adults.",
    "它的吸引力不難理解：花費不高、一眼就看得到，而且讓孩子們能夠彼此照顧，而不是只依賴大人。"
   ],
   [
    "Nevertheless, educators have raised thoughtful objections.",
    "儘管如此，教育工作者也提出了一些值得深思的反對意見。"
   ],
   [
    "Some worry that sitting on a designated bench could publicly label a child as friendless, potentially making shy students even less likely to use it.",
    "有些人擔心，坐在指定的長椅上可能會公開把孩子貼上「沒有朋友」的標籤，反而讓害羞的學生更不願意使用。"
   ],
   [
    "Others note that a bench is effective only within a broader school culture in which teachers and counselors actively teach empathy and respond to bullying.",
    "也有人指出，長椅只有在更廣泛的校園文化中才會有效，也就是老師和輔導人員要積極教導同理心，並處理霸凌問題。"
   ],
   [
    "The concept also has an adult counterpart.",
    "這個概念在成人世界也有對應的版本。"
   ],
   [
    "In Zimbabwe, a program called the Friendship Bench trains community grandmothers to offer talk therapy to people struggling with depression, seated on simple wooden benches.",
    "在辛巴威，一個名為「友誼長椅」的計畫訓練社區裡的奶奶們，坐在簡單的木頭長椅上，為受憂鬱所苦的人提供談話治療。"
   ],
   [
    "In both cases, the bench itself matters less than the message it sends: someone here is willing to listen.",
    "在這兩個例子裡，長椅本身沒有它所傳達的訊息重要：這裡有人願意傾聽。"
   ]
  ]
 }
];
const GLOSS = {"recess": ["n.", "下課時間"], "alone": ["adj.", "獨自的"], "classmate": ["n.", "同學"], "move": ["v.", "搬家"], "bench": ["n.", "長椅"], "playground": ["n.", "操場"], "buddy": ["n.", "好朋友；夥伴"], "lonely": ["adj.", "孤單的"], "principal": ["n.", "校長"], "choose": ["v.", "選擇"], "bright": ["adj.", "鮮豔的；明亮的"], "report": ["v.", "報導"], "continent": ["n.", "洲"], "simple": ["adj.", "簡單的"], "remind": ["v.", "提醒"], "notice": ["v.", "注意到"], "shy": ["adj.", "害羞的"], "unexpected": ["adj.", "意想不到的"], "brochure": ["n.", "簡介手冊"], "signal": ["n./v.", "信號；示意"], "order": ["v.", "訂購"], "install": ["v.", "安裝；設置"], "invite": ["v.", "邀請"], "absent": ["adj.", "缺席的"], "solve": ["v.", "解決"], "kindness": ["n.", "善意"], "loneliness": ["n.", "孤單"], "exclusion": ["n.", "排擠；排除"], "disappointment": ["n.", "失望"], "activate": ["v.", "啟動"], "region": ["n.", "區域"], "distressing": ["adj.", "令人痛苦的"], "deliberately": ["adv.", "刻意地"], "credit": ["v.", "歸功於"], "propose": ["v.", "提議"], "underlying": ["adj.", "背後的；根本的"], "principle": ["n.", "原理"], "coverage": ["n.", "報導"], "initiative": ["n.", "倡議；新計畫"], "inquiry": ["n.", "詢問"], "appeal": ["n.", "吸引力"], "empower": ["v.", "賦予能力"], "solely": ["adv.", "單獨地"], "nevertheless": ["adv.", "儘管如此"], "objection": ["n.", "反對意見"], "designated": ["adj.", "指定的"], "label": ["v.", "貼標籤"], "counselor": ["n.", "輔導人員"], "empathy": ["n.", "同理心"], "bullying": ["n.", "霸凌"], "counterpart": ["n.", "對應的人或物"], "therapy": ["n.", "治療"], "depression": ["n.", "憂鬱"]};
const KEY = [["recess", "alone", "bench", "playground", "lonely", "principal", "bright", "continent", "notice"], ["shy", "unexpected", "brochure", "signal", "install", "invite", "absent", "solve", "kindness"], ["exclusion", "activate", "distressing", "deliberately", "underlying", "initiative", "empower", "objection", "empathy", "counterpart"]];
const FIGS = {"bench": {"svg": "<svg viewBox=\"0 0 600 298\" role=\"img\" aria-label=\"How a buddy bench works\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#FFF7F9\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#C2385A\">How a Buddy Bench Works</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >友誼長椅怎麼用？</text>\n<circle cx=\"100\" cy=\"112\" r=\"44\" fill=\"#fff\" stroke=\"#C2385A\" stroke-width=\"4\"/><text x=\"100\" y=\"128\" font-size=\"40\" text-anchor=\"middle\">🪑</text><circle cx=\"64\" cy=\"76\" r=\"14\" fill=\"#C2385A\"/><text x=\"64\" y=\"81\" font-size=\"14\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">1</text><text x=\"100\" y=\"184\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">Feel lonely?</text><text x=\"100\" y=\"201\" font-size=\"12\" text-anchor=\"middle\">Sit on the bench.</text><text x=\"100\" y=\"218\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >覺得孤單？坐上長椅</text>\n<circle cx=\"300\" cy=\"112\" r=\"44\" fill=\"#fff\" stroke=\"#C2385A\" stroke-width=\"4\"/><text x=\"300\" y=\"128\" font-size=\"40\" text-anchor=\"middle\">👀</text><circle cx=\"264\" cy=\"76\" r=\"14\" fill=\"#C2385A\"/><text x=\"264\" y=\"81\" font-size=\"14\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">2</text><text x=\"300\" y=\"184\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">Others notice</text><text x=\"300\" y=\"201\" font-size=\"12\" text-anchor=\"middle\">and come over.</text><text x=\"300\" y=\"218\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >其他同學看到後走過來</text>\n<circle cx=\"500\" cy=\"112\" r=\"44\" fill=\"#fff\" stroke=\"#C2385A\" stroke-width=\"4\"/><text x=\"500\" y=\"128\" font-size=\"40\" text-anchor=\"middle\">🤝</text><circle cx=\"464\" cy=\"76\" r=\"14\" fill=\"#C2385A\"/><text x=\"464\" y=\"81\" font-size=\"14\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">3</text><text x=\"500\" y=\"184\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">“Want to play?”</text><text x=\"500\" y=\"201\" font-size=\"12\" text-anchor=\"middle\">A new friend!</text><text x=\"500\" y=\"218\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >「要一起玩嗎？」交到新朋友</text>\n<g fill=\"#C2385A\"><path d=\"M160 112 h70\" stroke=\"#C2385A\" stroke-width=\"4\"/><path d=\"M228 104 l12 8 l-12 8z\"/><path d=\"M360 112 h70\" stroke=\"#C2385A\" stroke-width=\"4\"/><path d=\"M428 104 l12 8 l-12 8z\"/></g>\n<rect x=\"70\" y=\"238\" width=\"460\" height=\"46\" rx=\"23\" fill=\"#FDE8EE\"/>\n<text x=\"300\" y=\"258\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\">Tip: if your best friend is absent, the bench is for you too.</text><text x=\"300\" y=\"275\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >小提醒：好朋友請假那天，你也可以去坐長椅</text></g></svg>", "cap": "友誼長椅的用法很簡單：孤單時坐上去，看到有人坐著就過去邀請他。", "credit": "圖解：Winglish"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to build a wooden bench",
   "A simple bench that helps lonely children make friends",
   "Why German schools are better",
   "How to move to another country"
  ],
  "a": 1,
  "exp": "全文介紹克里斯汀推動的友誼長椅，如何幫助下課孤單的孩子交朋友。"
 },
 {
  "q": "2. Where did Christian first see the idea of a buddy bench?",
  "tag": "細節",
  "opts": [
   "On a TV show",
   "In a picture of a school in Germany",
   "At a park near his house",
   "In his textbook"
  ],
  "a": 1,
  "exp": "他在查看德國學校的資料（簡介）時，看到操場上的友誼長椅。"
 },
 {
  "q": "3. What should you do when you see someone sitting on a buddy bench?",
  "tag": "推論",
  "opts": [
   "Leave them alone",
   "Tell the teacher",
   "Ask them to play with you",
   "Sit on another bench"
  ],
  "a": 2,
  "exp": "坐在長椅上代表想找人玩，看到時就過去邀請對方一起玩。"
 }
];
const META = {
 "title": "A Seat for a New Friend",
 "category": "社會關懷",
 "dek": "下課時沒人陪你玩怎麼辦？一個美國二年級小男孩想出了一個簡單的點子：一張「友誼長椅」。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1727600168098-9288d5be2cac?auto=format&fit=crop&w=1600&q=70\" data-local=\"bench-hero.jpg\" alt=\"A colorful bench in a park\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#FDE8EE\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">💗</text></svg><figcaption>一張色彩鮮豔的長椅，也可以是交朋友的起點。<span class=\"credit\">Photo: Nick Fewings / Unsplash</span></figcaption>",
 "fact": "第一張友誼長椅送到學校時，第一個坐上去的就是想出這個點子的克里斯汀本人。新聞報導後，校長收到來自美國 32 個州的來信，大家都想知道怎麼在自己的學校也放一張。",
 "next": {
  "title": "Take a Book, Share a Book",
  "href": "read.html#lfl"
 },
 "id": "bench",
 "date": "2026/11/1"
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
