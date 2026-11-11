/* winglish.tw 閱讀館文章資料：A Table for Every Child */
window.ARTICLE = (function(){
const LEVELS = [
 {
  "name": "Level 1",
  "rec": "單字量約 2000",
  "paras": [
   [
    0,
    1
   ],
   [
    2,
    3,
    4,
    5,
    6
   ],
   [
    7,
    8
   ],
   [
    9,
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
   "3": "shoku"
  },
  "heads": {
   "0": "Eating Alone",
   "1": "A Shop Owner's Idea",
   "3": "Spreading Across Japan",
   "4": "More Than a Meal"
  },
  "sents": [
   [
    "In Japan, some children eat dinner alone almost every night.",
    "在日本，有些孩子幾乎每天晚上都一個人吃晚餐。"
   ],
   [
    "Some parents work late, and some families do not have enough money for healthy food.",
    "有些父母工作到很晚，有些家庭沒有足夠的錢買健康的食物。"
   ],
   [
    "In 2012, a woman named Hiroko Kondo ran a small vegetable shop in Tokyo.",
    "2012 年，一位名叫近藤博子的女士在東京經營一家小蔬菜店。"
   ],
   [
    "She heard about a child nearby who sometimes had only a banana for dinner.",
    "她聽說附近有個孩子，晚餐有時只吃一根香蕉。"
   ],
   [
    "This made her very sad.",
    "這讓她非常難過。"
   ],
   [
    "So she started a \"kodomo shokudo,\" or children's cafeteria, in her shop.",
    "於是她在店裡開了一間「子ども食堂」，也就是兒童食堂。"
   ],
   [
    "Children could come by themselves and eat a warm meal for little or no money.",
    "孩子可以自己來，只花一點點錢，甚至不用錢，就能吃到一頓熱騰騰的飯。"
   ],
   [
    "But Kondo did not want it to be only about food.",
    "但近藤不希望它只是提供食物而已。"
   ],
   [
    "She wanted a place where children felt welcome and could talk with friendly adults.",
    "她希望這是一個讓孩子感到被歡迎、能和友善的大人聊天的地方。"
   ],
   [
    "Other people loved the idea and opened their own children's cafeterias.",
    "其他人很喜歡這個點子，也開起了自己的兒童食堂。"
   ],
   [
    "In 2016, there were about 300 in Japan.",
    "2016 年，日本大約有 300 間。"
   ],
   [
    "By 2025, there were more than 12,000.",
    "到了 2025 年，已經超過 12,000 間。"
   ],
   [
    "That is more than the number of public junior high schools in Japan!",
    "這比日本公立國中的數量還多！"
   ],
   [
    "Today, many of these cafeterias welcome everyone, including parents and older people who live alone.",
    "今天，許多兒童食堂歡迎所有人，包括家長和獨居的老人。"
   ],
   [
    "Volunteers cook, serve food, and sometimes help children with their homework.",
    "志工們煮飯、端菜，有時還會幫孩子寫功課。"
   ],
   [
    "A warm meal fills your stomach, but a friendly face fills your heart.",
    "一頓熱飯能填飽你的肚子，而一張友善的臉能溫暖你的心。"
   ]
  ]
 },
 {
  "name": "Level 2",
  "rec": "單字量約 4500",
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
    6
   ],
   [
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
    14
   ]
  ],
  "figs": {
   "2": "shoku"
  },
  "heads": {
   "0": "Hidden Hunger",
   "1": "A Vegetable Shop Becomes a Cafeteria",
   "2": "A National Movement",
   "3": "A Place for Everyone",
   "4": "Challenges Ahead"
  },
  "sents": [
   [
    "Japan is one of the world's richest countries, yet about one in nine Japanese children lives in relative poverty.",
    "日本是世界上最富裕的國家之一，但大約每九個日本孩子中，就有一個生活在相對貧窮之中。"
   ],
   [
    "Because poverty in Japan is often hidden, many of these children look no different from their classmates.",
    "因為日本的貧窮往往是隱形的，這些孩子很多看起來和同學沒什麼兩樣。"
   ],
   [
    "The difference shows at mealtimes: some eat alone, eat instant food, or skip dinner entirely.",
    "差別在吃飯時才顯現出來：有些孩子獨自吃飯、吃泡麵之類的即食品，或乾脆不吃晚餐。"
   ],
   [
    "In 2012, Hiroko Kondo, who ran a small vegetable shop called Dandan in Tokyo's Ota Ward, learned about a local child whose dinner was sometimes just a banana.",
    "2012 年，在東京大田區經營一家名叫「だんだん」小蔬菜店的近藤博子，得知附近有個孩子的晚餐有時只有一根香蕉。"
   ],
   [
    "Shocked, she decided to cook for children like him.",
    "她非常震驚，決定為像他這樣的孩子煮飯。"
   ],
   [
    "She opened what she called a \"kodomo shokudo,\" or children's cafeteria, a place where a child could walk in alone and eat a home-cooked meal for a very small price.",
    "她開了一間她稱為「子ども食堂」的兒童食堂，孩子可以獨自走進來，用非常便宜的價錢吃到一頓家常飯。"
   ],
   [
    "Just as important, there would always be an adult to talk to.",
    "同樣重要的是，那裡永遠會有一個可以說話的大人。"
   ],
   [
    "The idea spread quickly as volunteers set up cafeterias in community centers, temples, restaurants, and private homes.",
    "這個點子很快就傳開了，志工們在社區中心、寺廟、餐廳和私人住家裡設立食堂。"
   ],
   [
    "According to the nonprofit group Musubie, the number grew from 319 in 2016 to 12,601 in 2025.",
    "根據非營利組織「むすびえ」的統計，兒童食堂的數量從 2016 年的 319 間，成長到 2025 年的 12,601 間。"
   ],
   [
    "There are now more children's cafeterias than public junior high schools in Japan.",
    "現在日本兒童食堂的數量，已經比公立國中還多。"
   ],
   [
    "Many cafeterias have also changed whom they serve.",
    "許多食堂服務的對象也改變了。"
   ],
   [
    "To avoid making poor children feel embarrassed, they welcome everyone, from babies to elderly people who live alone.",
    "為了避免讓貧困的孩子感到難為情，它們歡迎所有人，從嬰兒到獨居的老人都可以來。"
   ],
   [
    "As a result, the cafeterias have become places where different generations meet and look after one another.",
    "因此，這些食堂成了不同世代相遇、彼此照顧的地方。"
   ],
   [
    "The movement still faces difficulties, since most cafeterias depend on donations and unpaid volunteers, and rising food prices make it harder to keep meals cheap.",
    "這項運動仍面臨困難，因為大多數食堂仰賴捐款和無給職的志工，而上漲的食物價格也讓餐點越來越難維持低價。"
   ],
   [
    "Even so, its message is clear: no child should have to eat alone and hungry.",
    "即便如此，它的訊息很清楚：沒有一個孩子應該獨自餓著肚子吃飯。"
   ]
  ]
 },
 {
  "name": "Level 3",
  "rec": "單字量 7000 以上",
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
    13
   ]
  ],
  "figs": {
   "2": "shoku"
  },
  "heads": {
   "0": "Poverty Behind Closed Doors",
   "1": "An Improvised Response",
   "2": "Exponential Growth",
   "3": "Beyond Charity",
   "4": "Questions of Responsibility"
  },
  "sents": [
   [
    "Japan's reputation for prosperity can obscure an uncomfortable statistic: roughly one in nine children lives in relative poverty, meaning their household income is less than half the national median.",
    "日本富裕的形象可能掩蓋了一項令人不安的統計：大約每九個孩子中就有一個生活在相對貧窮中，也就是家庭收入不到全國中位數的一半。"
   ],
   [
    "Single-parent households, most of them headed by mothers, are especially vulnerable.",
    "單親家庭，其中大多數由母親撐起，尤其容易陷入困境。"
   ],
   [
    "Because such hardship is rarely visible, it often manifests most clearly at the dinner table, where children may eat alone, rely on convenience food, or go without.",
    "由於這種困境很少被看見，它往往在餐桌上表現得最明顯：孩子可能獨自吃飯、依賴便利商店的食物，或乾脆不吃。"
   ],
   [
    "The movement that emerged to address this problem began almost by accident.",
    "為解決這個問題而興起的運動，幾乎是意外開始的。"
   ],
   [
    "In 2012, Hiroko Kondo, the owner of a small greengrocer in Tokyo's Ota Ward, learned of a local child whose evening meal sometimes consisted of nothing but a banana.",
    "2012 年，東京大田區一家小蔬果店的老闆近藤博子，得知當地有個孩子的晚餐有時只有一根香蕉。"
   ],
   [
    "She responded by opening a \"kodomo shokudo,\" a cafeteria where children could arrive unaccompanied and receive a nutritious meal for a nominal fee, along with the company of attentive adults.",
    "她的回應是開設一間「子ども食堂」：孩子可以獨自前來，只需付象徵性的費用，就能吃到營養的一餐，還有用心陪伴的大人。"
   ],
   [
    "What followed was a remarkable example of grassroots replication.",
    "接下來發生的，是草根運動自我複製的驚人實例。"
   ],
   [
    "Without central planning, volunteers adapted the model to temples, community halls, and private homes, and according to the nonprofit Musubie, the number of such cafeterias rose from 319 in 2016 to 12,601 in 2025.",
    "在沒有中央規劃的情況下，志工們把這個模式應用到寺廟、社區活動中心和私人住家；根據非營利組織「むすびえ」的統計，這類食堂從 2016 年的 319 間增加到 2025 年的 12,601 間。"
   ],
   [
    "They now outnumber Japan's public junior high schools.",
    "它們的數量如今已超過日本的公立國中。"
   ],
   [
    "As the movement matured, organizers confronted a dilemma.",
    "隨著運動逐漸成熟，籌辦者面臨了一個兩難。"
   ],
   [
    "A cafeteria explicitly labeled as serving poor children risks stigmatizing the very families it intends to help, discouraging them from attending.",
    "一間明確標示為「服務貧困兒童」的食堂，可能會讓它想幫助的家庭被貼上污名，反而讓他們不敢前來。"
   ],
   [
    "Many therefore redefined themselves as open community spaces for people of all ages, which not only reduced stigma but also helped combat the isolation of elderly residents in an aging society.",
    "因此，許多食堂重新定位為對所有年齡層開放的社區空間，這不僅減少了污名，也有助於對抗高齡化社會中長者的孤立。"
   ],
   [
    "Critics, however, caution that the movement's success should not allow the state to shift its responsibilities onto volunteers, many of whom now struggle with rising food prices and limited funding.",
    "然而，批評者提醒，這項運動的成功不應讓國家把自身的責任轉嫁給志工；如今許多志工正為上漲的食物價格和有限的經費而苦惱。"
   ],
   [
    "Kodomo shokudo, in other words, demonstrate both the power of community compassion and the limits of relying on it alone.",
    "換句話說，兒童食堂同時展現了社區關懷的力量，以及單單仰賴它的侷限。"
   ]
  ]
 }
];
const GLOSS = {"alone": ["adj.", "獨自的"], "dinner": ["n.", "晚餐"], "healthy": ["adj.", "健康的"], "vegetable": ["n.", "蔬菜"], "banana": ["n.", "香蕉"], "cafeteria": ["n.", "自助餐廳；食堂"], "warm": ["adj.", "溫暖的；熱的"], "meal": ["n.", "一餐"], "welcome": ["adj./v.", "受歡迎的；歡迎"], "friendly": ["adj.", "友善的"], "public": ["adj.", "公立的"], "volunteer": ["n.", "志工"], "serve": ["v.", "端上；服務"], "stomach": ["n.", "胃；肚子"], "relative": ["adj.", "相對的"], "poverty": ["n.", "貧窮"], "hidden": ["adj.", "隱藏的"], "instant": ["adj.", "即食的"], "skip": ["v.", "跳過；不吃"], "entirely": ["adv.", "完全地"], "shocked": ["adj.", "震驚的"], "temple": ["n.", "寺廟"], "private": ["adj.", "私人的"], "nonprofit": ["adj.", "非營利的"], "embarrassed": ["adj.", "難為情的"], "elderly": ["adj.", "年長的"], "generation": ["n.", "世代"], "donation": ["n.", "捐款"], "unpaid": ["adj.", "無給的"], "prosperity": ["n.", "繁榮"], "obscure": ["v.", "掩蓋"], "statistic": ["n.", "統計數字"], "median": ["n.", "中位數"], "household": ["n.", "家庭"], "vulnerable": ["adj.", "脆弱的；容易受傷害的"], "hardship": ["n.", "困苦"], "manifest": ["v.", "顯現"], "emerge": ["v.", "興起"], "greengrocer": ["n.", "蔬果店"], "unaccompanied": ["adj.", "無人陪伴的"], "nutritious": ["adj.", "營養的"], "nominal": ["adj.", "象徵性的；名義上的"], "attentive": ["adj.", "用心的；體貼的"], "replication": ["n.", "複製"], "adapt": ["v.", "改編；調整"], "outnumber": ["v.", "數量超過"], "mature": ["v.", "成熟"], "dilemma": ["n.", "兩難"], "explicitly": ["adv.", "明確地"], "stigmatize": ["v.", "使蒙上污名"], "stigma": ["n.", "污名"], "combat": ["v.", "對抗"], "isolation": ["n.", "孤立"], "caution": ["v.", "提醒；警告"], "compassion": ["n.", "同情；關懷"]};
const KEY = [["alone", "healthy", "vegetable", "cafeteria", "warm", "meal", "friendly", "volunteer", "stomach"], ["relative", "poverty", "hidden", "instant", "skip", "embarrassed", "elderly", "generation", "donation"], ["prosperity", "obscure", "vulnerable", "hardship", "nutritious", "nominal", "dilemma", "stigmatize", "isolation", "compassion"]];
const DEFS = {
  "alone": "without other people",
  "healthy": "physically and mentally strong and well",
  "vegetable": "a plant eaten as food, such as a carrot or cabbage",
  "cafeteria": "a restaurant where people choose food and carry it to a table themselves",
  "warm": "fairly hot; making you feel comfortable",
  "meal": "the food eaten at one time, such as lunch or dinner",
  "friendly": "kind and pleasant",
  "volunteer": "a person who does work without being paid",
  "stomach": "the organ in your body where food goes after you swallow",
  "relative": "compared with others",
  "poverty": "the state of being very poor",
  "hidden": "not easy to see or notice",
  "instant": "ready to eat very quickly after adding hot water",
  "skip": "to not eat a meal or not do something you usually do",
  "embarrassed": "feeling shy or ashamed in front of other people",
  "elderly": "old",
  "generation": "all the people born at about the same time",
  "donation": "something, especially money, given to help a person or group",
  "prosperity": "the state of being successful and having a lot of money",
  "obscure": "to make something difficult to see or understand",
  "vulnerable": "easily hurt physically or emotionally",
  "hardship": "a situation that causes difficulty or suffering",
  "nutritious": "containing substances that help the body grow and stay healthy",
  "nominal": "very small; much less than the real value",
  "dilemma": "a situation in which you must make a difficult choice",
  "stigmatize": "to treat someone as if they should feel ashamed",
  "isolation": "the state of being alone or separated from others",
  "compassion": "a strong feeling of sympathy and wanting to help"
};

const FIGS = {"shoku": {"svg": "<svg viewBox=\"0 0 600 306\" role=\"img\" aria-label=\"Number of children's cafeterias in Japan\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#FFF7F9\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#C2385A\">Children's Cafeterias in Japan</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >日本兒童食堂的數量</text>\n<line x1=\"40\" y1=\"210\" x2=\"570\" y2=\"210\" stroke=\"#1A2238\" stroke-width=\"2\"/>\n<rect x=\"56\" y=\"206\" width=\"48\" height=\"4\" rx=\"4\" fill=\"#C2385A\" opacity=\"0.46\"/><text x=\"80\" y=\"198\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">319</text><text x=\"80\" y=\"230\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">2016</text><rect x=\"146\" y=\"183\" width=\"48\" height=\"27\" rx=\"4\" fill=\"#C2385A\" opacity=\"0.55\"/><text x=\"170\" y=\"175\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">2,286</text><text x=\"170\" y=\"230\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">2018</text><rect x=\"236\" y=\"151\" width=\"48\" height=\"59\" rx=\"4\" fill=\"#C2385A\" opacity=\"0.67\"/><text x=\"260\" y=\"143\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">4,960</text><text x=\"260\" y=\"230\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">2020</text><rect x=\"326\" y=\"122\" width=\"48\" height=\"88\" rx=\"4\" fill=\"#C2385A\" opacity=\"0.77\"/><text x=\"350\" y=\"114\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">7,363</text><text x=\"350\" y=\"230\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">2022</text><rect x=\"416\" y=\"81\" width=\"48\" height=\"129\" rx=\"4\" fill=\"#C2385A\" opacity=\"0.92\"/><text x=\"440\" y=\"73\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">10,867</text><text x=\"440\" y=\"230\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">2024</text><rect x=\"506\" y=\"60\" width=\"48\" height=\"150\" rx=\"4\" fill=\"#C2385A\" opacity=\"1.00\"/><text x=\"530\" y=\"52\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">12,601</text><text x=\"530\" y=\"230\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">2025</text>\n<line x1=\"40\" y1=\"100\" x2=\"570\" y2=\"100\" stroke=\"#1F5C8C\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/>\n<text x=\"44\" y=\"76\" font-size=\"12\" font-weight=\"700\" fill=\"#1F5C8C\">Public junior high schools ≈ 9,300</text><text x=\"44\" y=\"91\" font-size=\"10\" text-anchor=\"start\" fill=\"#5A6478\" fill=\"#1F5C8C\">公立國中約 9,300 所</text>\n<rect x=\"70\" y=\"248\" width=\"460\" height=\"46\" rx=\"23\" fill=\"#FDE8EE\"/>\n<text x=\"300\" y=\"268\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\">Now there are more cafeterias than junior high schools.</text><text x=\"300\" y=\"285\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >現在兒童食堂的數量，已經比公立國中還多</text></g></svg>", "cap": "日本兒童食堂在不到十年內增加了將近 40 倍。（資料：むすびえ）", "credit": "圖解：winglish.tw"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to cook Japanese food",
   "Community cafeterias that give children warm meals and company",
   "Why vegetables are expensive in Japan",
   "How Japanese schools serve lunch"
  ],
  "a": 1,
  "exp": "全文介紹日本的兒童食堂：提供孩子便宜或免費的熱飯，也提供陪伴。"
 },
 {
  "q": "2. Why did Hiroko Kondo start the first children's cafeteria?",
  "tag": "細節",
  "opts": [
   "She wanted to sell more vegetables",
   "She heard about a child who sometimes ate only a banana for dinner",
   "The government asked her to",
   "She wanted to open a restaurant chain"
  ],
  "a": 1,
  "exp": "她聽說附近有個孩子晚餐有時只吃一根香蕉，於是決定為孩子煮飯。"
 },
 {
  "q": "3. Which of the following is true?",
  "tag": "細節",
  "opts": [
   "There are fewer than 1,000 children's cafeterias in Japan",
   "Children's cafeterias are only for poor children",
   "Many cafeterias now welcome people of all ages",
   "All the workers are paid by the government"
  ],
  "a": 2,
  "exp": "許多兒童食堂現在歡迎所有人，包括家長和獨居長者；數量已超過一萬兩千間，且多靠志工。"
 }
];
const META = {
 "title": "A Table for Every Child",
 "category": "社會關懷",
 "dek": "日本有些孩子每天晚上都一個人吃飯，甚至只吃一根香蕉。一家蔬菜店的老闆娘決定開一間「兒童食堂」，沒想到十幾年後全日本已經有一萬兩千多間。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1680137248903-7af5d51a3350?auto=format&fit=crop&w=1600&q=70\" data-local=\"shokudo-hero.jpg\" alt=\"A bowl of miso soup with chopsticks on a wooden table\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#FDE8EE\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">💗</text></svg><figcaption>一碗熱湯、一張有人陪的餐桌，就是兒童食堂想給孩子的東西。<span class=\"credit\">Photo: Seiya Maeda / Unsplash</span></figcaption>",
 "fact": "第一間兒童食堂開在一家叫「だんだん」（Dandan）的蔬菜店裡。「だんだん」是老闆娘故鄉島根縣出雲地區的方言，意思是「謝謝」。",
 "next": {
  "title": "The Mold That Saved Millions",
  "href": "read.html#penicillin"
 },
 "id": "shokudo",
 "date": "2026/11/1"
};
const USAGE = {
  "alone": ["all alone · feel alone · alone at home", "The little girl was all alone at home when the power went out.", "停電時，小女孩一個人在家。"],
  "healthy": ["healthy food · eat healthy · a healthy breakfast", "A healthy breakfast gives you energy for the morning.", "健康的早餐給你一整個早上的活力。"],
  "vegetable": ["fresh vegetables · eat your vegetables · vegetable soup", "My mom always tells me to eat my vegetables.", "我媽總是叫我要吃青菜。"],
  "cafeteria": ["a staff cafeteria · cafeteria food · the hospital cafeteria", "The hospital cafeteria is open 24 hours a day.", "醫院的餐廳二十四小時營業。"],
  "warm": ["a warm meal · warm milk · keep warm", "A glass of warm milk helps me fall asleep.", "一杯溫牛奶幫助我入睡。"],
  "meal": ["a hot meal · skip a meal · have a meal together", "Our family tries to have at least one meal together every day.", "我們家每天至少一起吃一餐。"],
  "friendly": ["friendly staff · be friendly to sb · a friendly smile", "The staff at the hotel were very friendly to us.", "飯店的工作人員對我們非常友善。"],
  "volunteer": ["work as a volunteer · volunteer work · hospital volunteers", "My aunt works as a volunteer at the library on weekends.", "我阿姨週末在圖書館當志工。"],
  "stomach": ["on an empty stomach · a stomachache · upset stomach", "Don't take this medicine on an empty stomach.", "這個藥不要空腹吃。"],
  "relative": ["relative poverty · relatively easy · relative to …", "The test was relatively easy compared with the last one.", "這次考試跟上次比相對簡單。"],
  "poverty": ["live in poverty · poverty line · fight poverty", "Millions of children around the world still live in poverty.", "全世界仍有數百萬兒童生活在貧窮中。"],
  "hidden": ["hidden costs · a hidden camera · hidden talent", "Be careful of hidden costs when you book cheap flights.", "訂便宜機票時要小心隱藏費用。"],
  "instant": ["instant coffee · instant noodles · instant message", "He drinks two cups of instant coffee every morning.", "他每天早上喝兩杯即溶咖啡。"],
  "skip": ["skip breakfast · skip class · skip a meal", "Skipping breakfast can make it hard to focus in class.", "不吃早餐會讓你上課很難專心。"],
  "embarrassed": ["feel embarrassed · embarrassed about … · too embarrassed to …", "He was too embarrassed to ask for help.", "他太不好意思了，不敢開口求助。"],
  "elderly": ["elderly people · the elderly · an elderly couple", "An elderly couple runs the small noodle shop on our street.", "我們這條街上那家小麵店是一對老夫婦開的。"],
  "generation": ["the younger generation · from generation to generation · future generations", "This recipe has been passed down from generation to generation.", "這道食譜代代相傳下來。"],
  "donation": ["make a donation · a generous donation · donations to …", "The school received a generous donation of new computers.", "學校收到一批慷慨捐贈的新電腦。"],
  "prosperity": ["economic prosperity · peace and prosperity · a time of prosperity", "People pray for peace and prosperity at the start of the new year.", "人們在新年伊始祈求平安與繁榮。"],
  "obscure": ["obscure the view · obscure the truth · be obscured by …", "Tall buildings obscure the view of the mountains.", "高樓擋住了山景。"],
  "vulnerable": ["vulnerable to … · vulnerable groups · feel vulnerable", "Young children and the elderly are more vulnerable to the flu.", "幼兒和老人比較容易感染流感。"],
  "hardship": ["economic hardship · face hardship · suffer hardship", "Many families faced economic hardship during the pandemic.", "疫情期間許多家庭面臨經濟困難。"],
  "nutritious": ["a nutritious meal · nutritious food · highly nutritious", "Soy milk is cheap and highly nutritious.", "豆漿便宜又非常營養。"],
  "nominal": ["a nominal fee · nominal charge · nominal leader", "The museum charges only a nominal fee for students.", "這間博物館只向學生收取象徵性的費用。"],
  "dilemma": ["face a dilemma · a moral dilemma · in a dilemma", "I'm in a dilemma: should I study abroad or stay near my family?", "我陷入兩難：該出國念書，還是留在家人身邊？"],
  "stigmatize": ["be stigmatized · stigmatize mental illness", "People with mental illness should not be stigmatized.", "心理疾病患者不該被汙名化。"],
  "isolation": ["feel a sense of isolation · social isolation · live in isolation", "Many elderly people live in isolation after their partners pass away.", "許多老人在伴侶過世後過著孤立的生活。"],
  "compassion": ["show compassion · compassion for … · with compassion", "The nurse treated every patient with compassion.", "那位護理師以關懷之心對待每一位病人。"]
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
