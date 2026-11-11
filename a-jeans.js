/* winglish.tw 閱讀館文章資料：The Thirsty Jeans */
window.ARTICLE = (function(){
const LEVELS = [
 {
  "name": "Level 1",
  "rec": "單字量約 2000",
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
    9,
    10
   ],
   [
    11,
    12,
    13,
    14,
    15
   ]
  ],
  "figs": {
   "1": "drop"
  },
  "heads": {
   "0": "A Thirsty Question",
   "1": "Where Does the Water Go?",
   "2": "A Surprise in Your Closet",
   "3": "What We Can Do"
  },
  "sents": [
   [
    "How much water do you think it takes to make one pair of jeans?",
    "你覺得做一條牛仔褲需要多少水？"
   ],
   [
    "According to a study by the company Levi's, the answer is about 3,781 liters.",
    "根據 Levi's 公司的一項研究，答案大約是 3,781 公升。"
   ],
   [
    "That is enough drinking water for one person for about five years.",
    "這些水足夠一個人喝大約五年。"
   ],
   [
    "So where does all this water go?",
    "那麼，這些水都用到哪裡去了？"
   ],
   [
    "Most of it, about 68 percent, is used to grow cotton.",
    "大部分，大約百分之六十八，是用來種棉花的。"
   ],
   [
    "Cotton plants are very thirsty, and farmers often give them a lot of water.",
    "棉花非常需要水，農夫常常要給它們大量的水。"
   ],
   [
    "Making the cloth and dyeing it blue in factories also uses water.",
    "在工廠裡製作布料、把它染成藍色，也會用到水。"
   ],
   [
    "But here is a surprise.",
    "但有一件令人意外的事。"
   ],
   [
    "About 23 percent of the water is used after you buy the jeans, when you wash them!",
    "大約百分之二十三的水，是在你買了牛仔褲之後，清洗它的時候用掉的！"
   ],
   [
    "Many people wash their jeans after wearing them only once or twice.",
    "很多人牛仔褲只穿一、兩次就洗。"
   ],
   [
    "The study found that washing jeans after every ten wears instead of every two can cut their impact on the environment by up to 80 percent.",
    "研究發現，牛仔褲每穿十次再洗、而不是穿兩次就洗，可以讓它對環境的影響減少多達百分之八十。"
   ],
   [
    "So what can we do?",
    "那我們可以做什麼呢？"
   ],
   [
    "We can wash our jeans less often and use cold water.",
    "我們可以少洗幾次牛仔褲，並用冷水洗。"
   ],
   [
    "We can buy fewer clothes and wear them longer.",
    "我們可以少買一些衣服，並穿久一點。"
   ],
   [
    "We can also give old jeans to others or recycle them.",
    "我們也可以把舊牛仔褲送給別人，或拿去回收。"
   ],
   [
    "Small choices in our closets can save a lot of water.",
    "衣櫥裡的小小選擇，可以省下很多水。"
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
    14,
    15
   ]
  ],
  "figs": {
   "1": "drop"
  },
  "heads": {
   "0": "From Field to Closet",
   "1": "A Thirsty Crop",
   "2": "The Washing Machine Problem",
   "3": "Fast Fashion",
   "4": "Wear It Longer"
  },
  "sents": [
   [
    "Jeans are one of the most popular pieces of clothing in the world, but few people think about the resources hidden in every pair.",
    "牛仔褲是全世界最受歡迎的衣物之一，但很少人會想到每一條牛仔褲背後隱藏的資源。"
   ],
   [
    "In 2015, Levi Strauss & Co. studied the entire life of a pair of its classic 501 jeans, from the cotton field to the end of its life.",
    "2015 年，Levi Strauss 公司研究了自家經典 501 牛仔褲的完整一生，從棉花田一直到它被淘汰。"
   ],
   [
    "The company found that one pair uses about 3,781 liters of water over its lifetime, roughly as much as an American household uses in three days.",
    "這家公司發現，一條牛仔褲在一生中大約用掉 3,781 公升的水，差不多是一個美國家庭三天的用水量。"
   ],
   [
    "The biggest share, about 68 percent, goes into growing cotton.",
    "最大的部分，大約百分之六十八，用在種植棉花上。"
   ],
   [
    "Cotton is a thirsty crop, and in dry regions it is often grown with water pumped from rivers and underground sources.",
    "棉花是一種很需要水的作物，在乾燥地區常常要抽取河水和地下水來種植。"
   ],
   [
    "Factories also use water to dye fabric and give jeans their worn, faded look.",
    "工廠也會用水來染布，並讓牛仔褲呈現穿舊、褪色的樣子。"
   ],
   [
    "Some brands now use new methods that save up to 96 percent of the water in this finishing stage.",
    "有些品牌現在使用新方法，能在這個後段加工階段省下多達百分之九十六的水。"
   ],
   [
    "The most surprising finding, however, involves the consumer.",
    "然而，最令人意外的發現與消費者有關。"
   ],
   [
    "About 23 percent of the water is used after the jeans leave the store, mainly in washing machines.",
    "大約百分之二十三的水，是在牛仔褲離開商店之後用掉的，主要是在洗衣機裡。"
   ],
   [
    "According to the study, washing jeans after every ten wears rather than every two could reduce their environmental impact by up to 80 percent.",
    "根據這項研究，牛仔褲每穿十次再洗、而不是每穿兩次就洗，可以讓環境影響減少多達百分之八十。"
   ],
   [
    "The problem grows larger when we consider how many clothes we buy.",
    "當我們考慮自己買了多少衣服時，問題就變得更大了。"
   ],
   [
    "\"Fast fashion\" brands release new styles every few weeks at low prices, encouraging people to shop often and throw clothes away quickly.",
    "「快時尚」品牌每隔幾週就以低價推出新款式，鼓勵人們經常購物、很快就把衣服丟掉。"
   ],
   [
    "Every item that ends up in a landfill also wastes all the water used to make it.",
    "每一件最後進了掩埋場的衣物，也浪費了製造它所用的所有水。"
   ],
   [
    "The solution does not require us to stop wearing jeans.",
    "解決方法並不需要我們停止穿牛仔褲。"
   ],
   [
    "Instead, we can buy fewer, better-made clothes, wash them only when they are dirty, and repair, swap, or donate them instead of throwing them out.",
    "我們可以買少一點但品質好一點的衣服，只在髒了的時候才洗，並且修補、交換或捐出它們，而不是丟掉。"
   ],
   [
    "The most sustainable pair of jeans is often the one already in your closet.",
    "最環保的牛仔褲，往往就是你衣櫥裡已經有的那一條。"
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
    13,
    14
   ]
  ],
  "figs": {
   "1": "drop"
  },
  "heads": {
   "0": "Counting Hidden Water",
   "1": "The Cost of Cotton",
   "2": "The Consumer's Share",
   "3": "The Scale of Fast Fashion",
   "4": "Rethinking Ownership"
  },
  "sents": [
   [
    "Every product carries an invisible history of the resources consumed to create, transport, use, and eventually discard it.",
    "每一件產品都帶著一段看不見的歷史，記錄它從製造、運送、使用到最終丟棄所消耗的資源。"
   ],
   [
    "To make that history visible, researchers use a method called lifecycle assessment, which measures environmental impacts at every stage of a product's existence.",
    "為了讓這段歷史變得看得見，研究者使用一種叫做「生命週期評估」的方法，衡量產品存在的每個階段所造成的環境影響。"
   ],
   [
    "When Levi Strauss & Co. applied this method to its 501 jeans in 2015, it calculated that a single pair consumes roughly 3,781 liters of water over its lifetime.",
    "當 Levi Strauss 公司在 2015 年把這個方法應用在 501 牛仔褲上時，計算出一條牛仔褲一生大約消耗 3,781 公升的水。"
   ],
   [
    "Cultivating cotton accounted for about 68 percent of that total, reflecting the crop's heavy dependence on irrigation in many growing regions.",
    "種植棉花占了總量的大約百分之六十八，反映出這種作物在許多產區高度依賴灌溉。"
   ],
   [
    "The consequences of such demand can be severe.",
    "這種需求的後果可能非常嚴重。"
   ],
   [
    "The Aral Sea in Central Asia, once among the largest lakes on Earth, shrank dramatically after Soviet planners diverted its feeder rivers to irrigate cotton fields, leaving behind a dusty, salt-covered landscape.",
    "中亞的鹹海曾是地球上最大的湖泊之一，在蘇聯規劃者把注入它的河流改道去灌溉棉花田之後急劇縮小，只留下塵土飛揚、覆滿鹽分的地貌。"
   ],
   [
    "Perhaps the most counterintuitive finding concerned the consumer phase, which represented roughly 23 percent of the water footprint.",
    "或許最違反直覺的發現與消費階段有關，這個階段約占水足跡的百分之二十三。"
   ],
   [
    "Frequent laundering not only consumes water but also energy, particularly when garments are machine-dried.",
    "頻繁的洗滌不只耗水，也耗能，尤其是用機器烘乾衣物的時候。"
   ],
   [
    "According to the assessment, washing jeans after ten wears instead of two could reduce several environmental impacts by up to 80 percent, a change requiring no new technology at all.",
    "根據評估，牛仔褲穿十次再洗而不是穿兩次就洗，可以讓多項環境影響減少多達百分之八十，而這個改變完全不需要新科技。"
   ],
   [
    "These figures acquire greater significance in the context of fast fashion.",
    "在快時尚的脈絡下，這些數字變得更有意義。"
   ],
   [
    "Global clothing production roughly doubled between 2000 and 2014, while the average garment was kept for a shorter time before being discarded.",
    "全球服裝產量在 2000 年到 2014 年之間大約翻倍，而一般衣物在被丟棄前被保留的時間卻更短了。"
   ],
   [
    "When a garment is worn only a handful of times, the water invested in it delivers very little value.",
    "當一件衣服只穿了寥寥幾次，投入其中的水所帶來的價值就微乎其微。"
   ],
   [
    "Industry innovations, such as finishing techniques that cut water use by up to 96 percent, are valuable but insufficient on their own.",
    "產業創新，例如能減少多達百分之九十六用水的後段加工技術，雖然有價值，但單靠它們並不足夠。"
   ],
   [
    "The lifecycle perspective suggests that the most effective strategy is to extend the useful life of clothing through careful washing, repair, resale, and recycling.",
    "生命週期的觀點顯示，最有效的策略是透過小心清洗、修補、轉售和回收，延長衣物的使用壽命。"
   ],
   [
    "In environmental terms, the most sustainable garment is frequently the one we already own.",
    "從環境的角度來看，最永續的衣服，往往是我們已經擁有的那一件。"
   ]
  ]
 }
];
const GLOSS = {"jeans": ["n.", "牛仔褲"], "liter": ["n.", "公升"], "cotton": ["n.", "棉花"], "thirsty": ["adj.", "口渴的；需要大量水的"], "cloth": ["n.", "布料"], "dye": ["v.", "染色"], "dyeing": ["n.", "染色"], "factory": ["n.", "工廠"], "surprise": ["n.", "驚喜；意外"], "wash": ["v.", "洗"], "impact": ["n.", "影響"], "environment": ["n.", "環境"], "environmental": ["adj.", "環境的"], "closet": ["n.", "衣櫥"], "recycle": ["v.", "回收"], "resource": ["n.", "資源"], "classic": ["adj.", "經典的"], "lifetime": ["n.", "一生"], "household": ["n.", "家庭"], "crop": ["n.", "作物"], "region": ["n.", "地區"], "pump": ["v.", "抽（水）"], "fabric": ["n.", "布料"], "faded": ["adj.", "褪色的"], "brand": ["n.", "品牌"], "consumer": ["n.", "消費者"], "release": ["v.", "推出"], "landfill": ["n.", "垃圾掩埋場"], "repair": ["v.", "修補"], "swap": ["v.", "交換"], "donate": ["v.", "捐贈"], "sustainable": ["adj.", "永續的；環保的"], "invisible": ["adj.", "看不見的"], "transport": ["v.", "運送"], "lifecycle": ["n.", "生命週期"], "assessment": ["n.", "評估"], "calculate": ["v.", "計算"], "consume": ["v.", "消耗"], "cultivate": ["v.", "種植"], "irrigation": ["n.", "灌溉"], "irrigate": ["v.", "灌溉"], "consequence": ["n.", "後果"], "severe": ["adj.", "嚴重的"], "divert": ["v.", "使改道"], "landscape": ["n.", "地貌；景觀"], "counterintuitive": ["adj.", "違反直覺的"], "phase": ["n.", "階段"], "footprint": ["n.", "足跡"], "launder": ["v.", "洗滌"], "garment": ["n.", "衣物"], "significance": ["n.", "重要性"], "context": ["n.", "脈絡"], "handful": ["n.", "少數"], "innovation": ["n.", "創新"], "insufficient": ["adj.", "不足的"], "perspective": ["n.", "觀點"], "strategy": ["n.", "策略"], "resale": ["n.", "轉售"], "shrank": ["v.", "縮小（shrink 過去式）"], "dramatically": ["adv.", "急劇地"]};
const KEY = [["jeans", "cotton", "thirsty", "dye", "factory", "impact", "environment", "closet"], ["resource", "crop", "fabric", "faded", "consumer", "landfill", "swap", "donate", "sustainable"], ["lifecycle", "assessment", "cultivate", "irrigation", "divert", "counterintuitive", "footprint", "garment", "insufficient", "perspective"]];
const DEFS = {
  "jeans": "trousers made of strong blue cotton cloth",
  "cotton": "a plant whose soft white fibers are made into cloth",
  "thirsty": "needing a lot of water",
  "dye": "to change the color of something by using a special liquid",
  "factory": "a building where products are made, usually by machines",
  "impact": "a strong effect on someone or something",
  "environment": "the air, water and land in which people, animals and plants live",
  "closet": "a small room or cupboard for storing clothes",
  "resource": "something useful, such as water or oil, that can be used to help people",
  "crop": "a plant grown in large amounts by farmers, such as rice or wheat",
  "fabric": "cloth used for making clothes and other things",
  "faded": "having lost brightness of color",
  "consumer": "a person who buys goods or services",
  "landfill": "a place where large amounts of waste are buried under the ground",
  "swap": "to give something to someone and receive something in return",
  "donate": "to give something, such as money or goods, to help a person or organization",
  "sustainable": "able to continue for a long time without harming the environment",
  "lifecycle": "all the stages a product goes through, from being made to being thrown away",
  "assessment": "the act of judging or measuring something",
  "cultivate": "to prepare land and grow crops on it",
  "irrigation": "supplying water to land or crops through pipes or channels",
  "divert": "to make something, such as a river, change direction",
  "counterintuitive": "the opposite of what you would naturally expect",
  "footprint": "the amount of impact something has, such as on the environment",
  "garment": "a piece of clothing",
  "insufficient": "not enough",
  "perspective": "a particular way of thinking about something"
};

const FIGS = {"drop": {"svg": "<svg viewBox=\"0 0 600 304\" role=\"img\" aria-label=\"Water used in the life of a pair of jeans\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#F2FAFB\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#1F7A8C\">How Much Water Does One Pair of Jeans Use?</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >一條牛仔褲的一生，用了多少水？</text>\n<path d=\"M90 64 C90 64 40 134 40 174 a50 50 0 0 0 100 0 C140 134 90 64 90 64Z\" fill=\"#4A90C2\"/>\n<text x=\"90\" y=\"180\" font-size=\"20\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#fff\">3,781</text><text x=\"90\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" fill=\"#fff\">liters 公升</text>\n<g font-size=\"14\">\n<rect x=\"180\" y=\"70\" width=\"380\" height=\"44\" rx=\"6\" fill=\"#E9EEF5\"/><rect x=\"180\" y=\"70\" width=\"258\" height=\"44\" rx=\"6\" fill=\"#17875C\"/>\n<text x=\"192\" y=\"97\" fill=\"#fff\" font-weight=\"900\">🌱 Growing cotton 68%</text><text x=\"446\" y=\"97\" font-size=\"12\" fill=\"#5A6478\">種棉花</text>\n<rect x=\"180\" y=\"128\" width=\"380\" height=\"44\" rx=\"6\" fill=\"#E9EEF5\"/><rect x=\"180\" y=\"128\" width=\"87\" height=\"44\" rx=\"6\" fill=\"#4A90C2\"/>\n<text x=\"192\" y=\"155\" fill=\"#fff\" font-weight=\"900\">🧺 23%</text><text x=\"280\" y=\"152\" font-weight=\"700\">Washing at home</text><text x=\"280\" y=\"167\" font-size=\"11\" text-anchor=\"start\" fill=\"#5A6478\" >買回家後的清洗</text>\n<rect x=\"180\" y=\"186\" width=\"380\" height=\"44\" rx=\"6\" fill=\"#E9EEF5\"/><rect x=\"180\" y=\"186\" width=\"34\" height=\"44\" rx=\"6\" fill=\"#8C96A8\"/>\n<text x=\"224\" y=\"210\" font-weight=\"700\">9% Making fabric, etc.</text><text x=\"224\" y=\"225\" font-size=\"11\" text-anchor=\"start\" fill=\"#5A6478\" >布料製造、加工等</text>\n</g>\n<rect x=\"40\" y=\"246\" width=\"520\" height=\"46\" rx=\"23\" fill=\"#DFF2F4\"/>\n<text x=\"300\" y=\"266\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\">Wash after 10 wears, not 2: up to 80% less impact</text><text x=\"300\" y=\"283\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >穿 10 次再洗（而不是 2 次），影響最多可減少約 80%</text></g></svg>", "cap": "一條牛仔褲的用水，大部分花在種棉花，但也有將近四分之一是在家裡洗衣服時用掉的。", "credit": "圖解：winglish.tw（資料：Levi Strauss & Co., 2015）"}};
const QUIZ = [
 [
  {
   "q": "1. What is the passage mainly about?",
   "tag": "主旨",
   "opts": [
    "How much water a pair of jeans uses and how we can save it",
    "How to choose the right size of jeans",
    "The history of the color blue",
    "Why cotton grows in hot places"
   ],
   "a": 0,
   "exp": "文章講一條牛仔褲一生用掉多少水，以及我們能怎麼省水，答案是 (A)。"
  },
  {
   "q": "2. Where does most of the water go?",
   "tag": "細節",
   "opts": [
    "Washing the jeans",
    "Growing cotton",
    "Dyeing the jeans blue",
    "Drinking water for workers"
   ],
   "a": 1,
   "exp": "第二段：大約 68% 的水用來種棉花，答案是 (B)。洗牛仔褲大約占 23%。"
  },
  {
   "q": "3. Which of these is a way to save water, according to the passage?",
   "tag": "細節",
   "opts": [
    "Wash jeans after every wear.",
    "Buy new jeans every month.",
    "Throw old jeans away.",
    "Wash jeans less often and use cold water."
   ],
   "a": 3,
   "exp": "最後一段：少洗幾次、用冷水，買少一點、穿久一點，答案是 (D)。其他三個都和文章建議相反。"
  }
 ],
 [
  {
   "q": "1. Which of the following is the best title for the passage?",
   "tag": "主旨",
   "opts": [
    "How Levi's Became Famous",
    "Fashion Trends of 2015",
    "The Hidden Water Cost of Your Jeans",
    "Why Cotton Is Better Than Silk"
   ],
   "a": 2,
   "exp": "文章揭露一條牛仔褲背後隱藏的用水量，(C) 最適合。"
  },
  {
   "q": "2. What was the most surprising finding of the study?",
   "tag": "細節",
   "opts": [
    "About 23 percent of the water is used after people buy the jeans.",
    "Cotton needs very little water.",
    "Factories use no water at all.",
    "Jeans last only a few weeks."
   ],
   "a": 0,
   "exp": "第三段一開始說「最令人驚訝的發現」和消費者有關：約 23% 的水是在買回家之後（主要是洗衣服）用掉的，答案是 (A)。"
  },
  {
   "q": "3. What is \"fast fashion\"?",
   "tag": "字義",
   "opts": [
    "Clothes made for running",
    "Jeans that dry quickly",
    "A way to repair clothes quickly",
    "Clothing brands that sell new, cheap styles every few weeks"
   ],
   "a": 3,
   "exp": "第四段：快時尚品牌每幾週就推出新款、價格便宜，鼓勵人常買、快丟，答案是 (D)。"
  },
  {
   "q": "4. What does the writer mean by \"The most sustainable pair of jeans is often the one already in your closet\"?",
   "tag": "推論",
   "opts": [
    "You should hide your jeans in the closet.",
    "Keeping and wearing clothes you have is better than buying new ones.",
    "New jeans are made with less water.",
    "Closets help jeans last longer."
   ],
   "a": 1,
   "exp": "作者主張買少一點、修補或捐出，把已經有的衣服穿久，這才最環保，答案是 (B)。"
  }
 ],
 [
  {
   "q": "1. What is the main purpose of the passage?",
   "tag": "作者用意",
   "opts": [
    "To advertise Levi's 501 jeans",
    "To use a lifecycle assessment to show that extending the life of clothing is the best way to reduce its impact",
    "To explain how the Aral Sea was formed",
    "To argue that people should stop wearing cotton"
   ],
   "a": 1,
   "exp": "文章用生命週期評估說明牛仔褲各階段的用水，最後結論是延長衣物的使用壽命最有效，答案是 (B)。(D) 錯，作者沒有說不要穿棉。"
  },
  {
   "q": "2. What is a \"lifecycle assessment\"?",
   "tag": "字義",
   "opts": [
    "A method that measures environmental impact at every stage of a product's life",
    "A test of how long jeans can be worn",
    "A survey of customers' shopping habits",
    "A way of recycling old cotton"
   ],
   "a": 0,
   "exp": "第一段直接定義：衡量產品從生產、運輸、使用到丟棄各階段環境影響的方法，答案是 (A)。"
  },
  {
   "q": "3. Why does the author mention the Aral Sea?",
   "tag": "作者用意",
   "opts": [
    "To describe a popular tourist spot",
    "To compare different kinds of lakes",
    "To explain where Levi's factories are",
    "To show how serious the effects of cotton's water demand can be"
   ],
   "a": 3,
   "exp": "第二段：蘇聯為了灌溉棉田改道河流，讓鹹海大幅縮小，作者用這個例子說明種棉花的用水後果可能很嚴重，答案是 (D)。"
  },
  {
   "q": "4. Why does the author call the consumer-phase finding \"counterintuitive\"?",
   "tag": "推論",
   "opts": [
    "Washing jeans actually saves water.",
    "Consumers use no energy at all.",
    "People don't expect washing at home to be such a large part of the impact.",
    "The finding required new technology."
   ],
   "a": 2,
   "exp": "一般人以為環境衝擊主要來自工廠和農場，沒想到在家洗衣也占約 23%，而且只要少洗就能大幅減少，答案是 (C)。(D) 錯，文中說「完全不需要新技術」。"
  },
  {
   "q": "5. Which of the following is NOT mentioned as a way to extend the life of clothing?",
   "tag": "細節",
   "opts": [
    "Using new finishing techniques in factories",
    "Careful washing",
    "Repair",
    "Resale"
   ],
   "a": 0,
   "exp": "最後一段延長衣物壽命的方法是：小心清洗、修補、轉賣、回收。工廠的新後製技術雖有提到，但作者說它「有價值但不夠」，不是延長壽命的方法，答案是 (A)。"
  }
 ]
];
const META = {
 "title": "The Thirsty Jeans",
 "category": "環保",
 "dek": "做一條牛仔褲要用多少水？答案是好幾千公升。而且有一部分的水，是在你把它買回家之後才用掉的。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1645380672072-43f44d5ee29d?auto=format&fit=crop&w=1600&q=70\" data-local=\"jeans-hero.jpg\" alt=\"Folded blue jeans\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#DFF2F4\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">🌍</text></svg><figcaption>一條看似平凡的牛仔褲，背後藏著驚人的用水量。<span class=\"credit\">Photo: Unsplash</span></figcaption>",
 "fact": "中亞的鹹海曾經是世界第四大湖。1960 年代起，蘇聯大量引河水灌溉棉花田，鹹海因此急速縮小，如今大部分已經乾涸成沙漠。",
 "next": {
  "title": "The Boy Who Planted a Forest",
  "href": "read.html#forest"
 },
 "id": "jeans",
 "date": "2026/11/1"
};
const USAGE = {
  "jeans": ["a pair of jeans · tight jeans · wear jeans", "I bought a new pair of jeans for the trip.", "我為了這趟旅行買了一條新牛仔褲。"],
  "cotton": ["a cotton T-shirt · 100% cotton · grow cotton", "This T-shirt is made of 100% cotton.", "這件 T 恤是百分之百純棉。"],
  "thirsty": ["feel thirsty · a thirsty crop · thirsty plants", "Rice is a thirsty crop that needs a lot of water.", "稻米是一種需要大量水的作物。"],
  "dye": ["dye one's hair · dye A blue · natural dye", "She dyed her hair purple for the summer.", "她暑假把頭髮染成紫色。"],
  "factory": ["a car factory · factory workers · work in a factory", "My uncle works in a car factory in Taoyuan.", "我叔叔在桃園一間汽車工廠工作。"],
  "impact": ["have an impact on · a big impact · environmental impact", "Social media has a big impact on young people's lives.", "社群媒體對年輕人的生活有很大的影響。"],
  "environment": ["protect the environment · harm the environment · a safe environment", "Taking the bus instead of driving is better for the environment.", "搭公車取代開車對環境比較好。"],
  "closet": ["in the closet · a walk-in closet · clean out one's closet", "I cleaned out my closet and found clothes I'd never worn.", "我整理衣櫥，發現一些從沒穿過的衣服。"],
  "resource": ["natural resources · a waste of resources · limited resources", "Water is a limited resource, so we shouldn't waste it.", "水是有限的資源，所以我們不該浪費。"],
  "crop": ["grow crops · a cash crop · crop failure", "Bananas were once an important cash crop in Taiwan.", "香蕉曾是台灣重要的經濟作物。"],
  "fabric": ["soft fabric · cotton fabric · a piece of fabric", "She made a bag from a piece of old fabric.", "她用一塊舊布做了一個包包。"],
  "faded": ["faded jeans · faded colors · a faded photo", "My grandma keeps a faded photo of her wedding day.", "奶奶留著一張她婚禮當天褪了色的照片。"],
  "consumer": ["consumer goods · consumer rights · protect consumers", "Consumers have the right to return broken products.", "消費者有權退回壞掉的商品。"],
  "landfill": ["end up in a landfill · landfill site · send waste to landfill", "Most old clothes end up in a landfill.", "大部分的舊衣服最後都進了垃圾掩埋場。"],
  "swap": ["swap A for B · swap seats · swap clothes with sb", "Can we swap seats? I want to sit by the window.", "我們可以換位子嗎？我想坐窗邊。"],
  "donate": ["donate money to … · donate blood · donate old clothes", "We donated our old books to the village library.", "我們把舊書捐給村裡的圖書館。"],
  "sustainable": ["sustainable development · sustainable fashion · a sustainable way", "Buying second-hand clothes is a more sustainable way to shop.", "買二手衣是比較永續的購物方式。"],
  "lifecycle": ["the lifecycle of a product · product lifecycle", "The lifecycle of a phone includes mining, making, using, and throwing it away.", "一支手機的生命週期包括採礦、製造、使用和丟棄。"],
  "assessment": ["an environmental assessment · risk assessment · make an assessment", "An environmental assessment is required before building a new factory.", "蓋新工廠之前必須做環境評估。"],
  "cultivate": ["cultivate rice · cultivate land · cultivate a habit", "Farmers in this valley have cultivated tea for over 100 years.", "這個山谷的農民種茶已經超過一百年。"],
  "irrigation": ["irrigation system · irrigation canal · drip irrigation", "Drip irrigation delivers water directly to plant roots, so less is wasted.", "滴灌把水直接送到植物根部，所以比較不浪費。"],
  "divert": ["divert water · divert attention from · divert traffic", "Police diverted traffic away from the parade route.", "警方讓車流改道，避開遊行路線。"],
  "counterintuitive": ["seem counterintuitive · a counterintuitive result", "It seems counterintuitive, but drinking hot tea can cool you down.", "聽起來違反直覺，但喝熱茶其實能讓你涼快下來。"],
  "footprint": ["carbon footprint · environmental footprint · reduce one's footprint", "Eating less meat can reduce your carbon footprint.", "少吃肉可以減少你的碳足跡。"],
  "garment": ["a garment factory · a woolen garment · protective garments", "Garment workers in some countries earn very low wages.", "一些國家的成衣工人工資非常低。"],
  "insufficient": ["insufficient evidence · insufficient funds · insufficient sleep", "The man was released because of insufficient evidence.", "那名男子因證據不足獲釋。"],
  "perspective": ["from sb's perspective · put things into perspective · a new perspective", "Traveling abroad gave me a whole new perspective on my own country.", "出國旅行讓我用全新的觀點看待自己的國家。"]
};


/* 導讀模式＋單字小練習 */
const GUIDE = [[{"after": 0, "q": "How much water does one pair of jeans take, according to Levi's?", "opts": ["About 3,781 liters", "About 37 liters", "About 378,100 liters"], "a": 0, "hint": "看 the answer is about ____ liters。"}, {"after": 1, "q": "Where does most of the water go?", "opts": ["To grow cotton", "To wash the jeans", "To dye the cloth blue"], "a": 0, "hint": "看 Most of it, about 68 percent, is used to…"}, {"after": 2, "q": "How can washing jeans less often help?", "opts": ["It can cut their environmental impact by up to 80%.", "It keeps the blue color bright for many more years.", "It makes the cotton in the jeans grow back faster."], "a": 0, "hint": "找 can cut their impact on the environment by up to…"}], [{"after": 1, "q": "Why does cotton need so much water?", "opts": ["It is a thirsty crop, often grown in dry places.", "It is grown in rivers, so it needs fresh water.", "Farmers must wash the cotton before selling it."], "a": 0, "hint": "看 Cotton is a thirsty crop…"}, {"after": 2, "q": "When is about 23 percent of the water used?", "opts": ["After the jeans leave the store, in washing", "When farmers grow the cotton in the fields", "When factories dye the fabric and fade it"], "a": 0, "hint": "找 About 23 percent of the water is used after…"}, {"after": 3, "q": "What does \"fast fashion\" encourage people to do?", "opts": ["Shop often and throw clothes away quickly", "Repair old clothes instead of buying new ones", "Buy fewer clothes that are better made"], "a": 0, "hint": "看 encouraging people to…"}], [{"after": 1, "q": "What happened to the Aral Sea?", "opts": ["It shrank after its rivers watered cotton fields.", "It grew into one of the largest lakes on Earth.", "It was polluted by dye from jeans factories."], "a": 0, "hint": "看 shrank dramatically after Soviet planners diverted its feeder rivers…"}, {"after": 2, "q": "Why is the finding about consumers surprising?", "opts": ["Washing less cuts impacts without new technology.", "Consumers turned out to use no water at all.", "Machine-drying jeans was found to save energy."], "a": 0, "hint": "看 a change requiring no new technology at all。"}, {"after": 3, "q": "What happened to clothing production between 2000 and 2014?", "opts": ["It roughly doubled.", "It fell by about half.", "It stayed about the same."], "a": 0, "hint": "找 Global clothing production roughly ____…"}]];
const VPRAC = [[{"s": "This T-shirt is made of 100% ____.", "opts": ["cotton", "jeans", "closet", "factory"], "a": 0, "w": "cotton"}, {"s": "I'm so ____. Can I have a glass of water?", "opts": ["thirsty", "cotton", "impact", "environment"], "a": 0, "w": "thirsty"}, {"s": "She wants to ____ her hair purple.", "opts": ["dye", "impact", "closet", "cotton"], "a": 0, "w": "dye"}, {"s": "Put your coat in the ____ by the door.", "opts": ["closet", "factory", "environment", "dye"], "a": 0, "w": "closet"}, {"s": "My uncle works in a car ____.", "opts": ["factory", "closet", "cotton", "environment"], "a": 0, "w": "factory"}], [{"s": "Rice is the main ____ in this area.", "opts": ["crop", "fabric", "consumer", "landfill"], "a": 0, "w": "crop"}, {"s": "Let's ____ seats so you can sit next to your friend.", "opts": ["swap", "donate", "crop", "resource"], "a": 0, "w": "swap"}, {"s": "We ____ our old books to the library every year.", "opts": ["donate", "swap", "crop", "landfill"], "a": 0, "w": "donate"}, {"s": "Water is a precious natural ____.", "opts": ["resource", "consumer", "fabric", "landfill"], "a": 0, "w": "resource"}, {"s": "This soft ____ is perfect for making pajamas.", "opts": ["fabric", "crop", "landfill", "consumer"], "a": 0, "w": "fabric"}], [{"s": "Farmers in this area ____ tea on the hillsides.", "opts": ["cultivate", "divert", "footprint", "garment"], "a": 0, "w": "cultivate"}, {"s": "Police ____ traffic away from the accident.", "opts": ["diverted", "cultivated", "insufficient", "perspective"], "a": 0, "w": "divert"}, {"s": "Flying often increases your carbon ____.", "opts": ["footprint", "garment", "perspective", "irrigation"], "a": 0, "w": "footprint"}, {"s": "The evidence was ____ to prove he was guilty.", "opts": ["insufficient", "counterintuitive", "cultivated", "lifecycle"], "a": 0, "w": "insufficient"}, {"s": "Living abroad gave her a new ____ on her own culture.", "opts": ["perspective", "footprint", "irrigation", "garment"], "a": 0, "w": "perspective"}]];
return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE,GUIDE,VPRAC});
})();
