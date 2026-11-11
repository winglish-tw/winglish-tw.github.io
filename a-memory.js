/* winglish.tw 閱讀館文章資料：The Forgetting Curve */
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
    6,
    7
   ],
   [
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
   "1": "mem"
  },
  "heads": {
   "0": "Gone by Morning",
   "1": "A Scientist Tests Himself",
   "2": "Review Again and Again",
   "3": "Test Yourself"
  },
  "sents": [
   [
    "Have you ever studied new words at night and forgotten most of them by the next morning?",
    "你是否曾經晚上背了新單字，到隔天早上就忘了大半？"
   ],
   [
    "You are not alone.",
    "你不是唯一一個。"
   ],
   [
    "More than 130 years ago, a German scientist named Hermann Ebbinghaus tested his own memory.",
    "一百三十多年前，一位名叫赫爾曼・艾賓浩斯的德國科學家拿自己的記憶做實驗。"
   ],
   [
    "He learned lists of nonsense words, like \"DAX\" and \"ZOF,\" and checked how much he remembered later.",
    "他背了好幾串沒有意義的字，例如「DAX」和「ZOF」，再檢查自己之後還記得多少。"
   ],
   [
    "He found that he forgot very quickly.",
    "他發現自己忘得非常快。"
   ],
   [
    "After just one hour, more than half of a list was gone.",
    "才過了一個小時，一串字就忘了一半以上。"
   ],
   [
    "After one day, about two-thirds was gone.",
    "過了一天，大約忘了三分之二。"
   ],
   [
    "This pattern is called the \"forgetting curve.\"",
    "這個模式被稱為「遺忘曲線」。"
   ],
   [
    "But there is good news: each time you review, you forget more slowly.",
    "但有個好消息：每複習一次，你就會忘得比較慢。"
   ],
   [
    "That is why it is better to review a little on different days than to study a lot in one night.",
    "這就是為什麼分幾天、每次複習一點點，比一個晚上讀很多還好。"
   ],
   [
    "Teachers call this \"spaced practice.\"",
    "老師們把這叫做「間隔練習」。"
   ],
   [
    "Testing yourself also helps a lot.",
    "考考自己也很有幫助。"
   ],
   [
    "In one study, students who read a text four times remembered only 40 percent of it a week later.",
    "在一項研究中，把一篇文章讀四遍的學生，一週後只記得 40%。"
   ],
   [
    "Students who read it once and then tried to recall it three times remembered 61 percent.",
    "讀一遍後試著回想三次的學生，則記得 61%。"
   ],
   [
    "So close your book and ask yourself, \"What do I remember?\"",
    "所以，把書闔上，問問自己：「我還記得什麼？」"
   ],
   [
    "Your brain grows stronger when it has to work a little.",
    "當大腦需要費點力氣時，它就會變得更強。"
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
   "1": "mem"
  },
  "heads": {
   "0": "An Experiment on Himself",
   "1": "How Fast We Forget",
   "2": "Spacing It Out",
   "3": "The Power of Testing",
   "4": "Why We Choose the Wrong Way"
  },
  "sents": [
   [
    "In the 1880s, the German psychologist Hermann Ebbinghaus wanted to measure memory scientifically.",
    "1880 年代，德國心理學家赫爾曼・艾賓浩斯想用科學方法測量記憶。"
   ],
   [
    "To avoid the influence of meaning, he invented thousands of nonsense syllables, such as \"DAX\" or \"ZOF,\" and memorized lists of them himself.",
    "為了排除意義的影響，他自創了幾千個無意義的音節，例如「DAX」或「ZOF」，並親自背誦這些字串。"
   ],
   [
    "Then he tested how much time he needed to relearn each list after different periods.",
    "接著，他測試在經過不同時間後，重新記住每串字需要多少時間。"
   ],
   [
    "His results, published in 1885, produced a famous graph known as the forgetting curve.",
    "他在 1885 年發表的結果，畫出了一張著名的圖，也就是「遺忘曲線」。"
   ],
   [
    "Forgetting was fastest at the beginning.",
    "遺忘在一開始時最快。"
   ],
   [
    "About an hour after learning, he had lost more than half of the benefit of his original effort, and after a day, he had lost about two-thirds.",
    "學習後大約一小時，他原本努力的成果已經流失一半以上；一天後，大約流失三分之二。"
   ],
   [
    "After that, forgetting slowed down considerably.",
    "在那之後，遺忘的速度就大幅減慢了。"
   ],
   [
    "Ebbinghaus also discovered how to fight back.",
    "艾賓浩斯也找到了反擊的方法。"
   ],
   [
    "When material is reviewed several times with gaps in between, it is remembered for much longer.",
    "當學習內容間隔一段時間、重複複習好幾次，就能記得更久。"
   ],
   [
    "This \"spacing effect\" is one reason why studying a little every day works better than cramming the night before a test.",
    "這種「間隔效應」，就是每天讀一點比考前一晚臨時抱佛腳更有效的原因之一。"
   ],
   [
    "Modern research has added another powerful tool: testing yourself.",
    "現代研究又補充了另一個強大的工具：考自己。"
   ],
   [
    "In a 2006 study by Henry Roediger and Jeffrey Karpicke, students who read a passage four times remembered 40 percent of it after one week.",
    "在羅迪格和卡匹克 2006 年的研究中，把一篇文章讀四遍的學生，一週後記得 40%。"
   ],
   [
    "Those who read it only once but practiced recalling it three times remembered 61 percent.",
    "只讀一遍、但練習回想三次的學生，則記得 61%。"
   ],
   [
    "Interestingly, the students who reread the passage felt more confident, even though they remembered less.",
    "有趣的是，重讀文章的學生反而覺得自己比較有把握，儘管他們記得比較少。"
   ],
   [
    "Rereading feels easy and familiar, so it creates an illusion of learning.",
    "重讀讓人感覺輕鬆又熟悉，所以會造成「已經學會了」的錯覺。"
   ],
   [
    "The lesson is clear: effortful remembering, spread out over time, beats easy rereading.",
    "結論很清楚：分散在不同時間、需要費力的回想，勝過輕鬆的重讀。"
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
   "1": "mem"
  },
  "heads": {
   "0": "Memory Under the Microscope",
   "1": "Reading the Curve Carefully",
   "2": "Desirable Difficulties",
   "3": "The Illusion of Fluency",
   "4": "Implications for Students"
  },
  "sents": [
   [
    "Before the 1880s, memory was considered too subjective for experimental study.",
    "在 1880 年代以前，記憶被認為太過主觀，無法做實驗研究。"
   ],
   [
    "Hermann Ebbinghaus challenged that view by turning himself into a laboratory, memorizing lists of meaningless syllables and measuring, with remarkable discipline, how much effort he saved when relearning them after intervals ranging from twenty minutes to a month.",
    "赫爾曼・艾賓浩斯挑戰了這種看法，他把自己變成實驗室，背誦一串串無意義的音節，並以驚人的自律，測量在二十分鐘到一個月不等的間隔後重新學習時省下了多少力氣。"
   ],
   [
    "The resulting forgetting curve, published in 1885, showed a steep initial decline followed by a gradual leveling off.",
    "他在 1885 年發表的遺忘曲線顯示，一開始急遽下降，之後逐漸趨於平緩。"
   ],
   [
    "The curve is frequently misquoted, however.",
    "不過，這條曲線經常被錯誤引用。"
   ],
   [
    "Ebbinghaus measured \"savings,\" the reduction in time needed to relearn a list, rather than the percentage of items a person could recall, and his material was deliberately stripped of meaning.",
    "艾賓浩斯測量的是「節省量」，也就是重學一串字所需時間減少了多少，而不是一個人能回想起的項目百分比；而且他的材料是刻意去除了意義的。"
   ],
   [
    "Meaningful information, such as a story or a well-understood concept, is generally retained far better, so the curve describes a worst-case scenario rather than a universal law.",
    "有意義的資訊，例如一個故事或真正理解的概念，通常記得牢得多，所以這條曲線描述的是最糟的情況，而不是普遍的定律。"
   ],
   [
    "Even so, its central lesson has been repeatedly confirmed, including in a 2015 replication that closely matched his original results.",
    "即便如此，它的核心啟示已經一再被證實，包括 2015 年一項與他原始結果非常接近的重複實驗。"
   ],
   [
    "Later researchers identified strategies that slow the curve dramatically.",
    "後來的研究者找到了能大幅減緩遺忘的策略。"
   ],
   [
    "Spaced practice, in which review sessions are distributed over days or weeks, consistently outperforms massed study, or cramming.",
    "間隔練習是把複習分散在幾天或幾週裡進行，它的效果一向勝過集中式的學習，也就是臨時抱佛腳。"
   ],
   [
    "Retrieval practice is similarly powerful: in a 2006 experiment, students who read a passage once and recalled it three times retained 61 percent after a week, compared with 40 percent for those who read it four times.",
    "提取練習同樣有力：在 2006 年的一項實驗中，讀一遍文章再回想三次的學生，一週後保留了 61%；讀四遍的學生則只有 40%。"
   ],
   [
    "Psychologist Robert Bjork calls such techniques \"desirable difficulties,\" because the effort they require is precisely what strengthens long-term memory.",
    "心理學家羅伯特・畢約克把這類技巧稱為「有益的困難」，因為它們所需要的費力，正是強化長期記憶的關鍵。"
   ],
   [
    "Why, then, do most students still prefer rereading?",
    "那麼，為什麼大多數學生還是偏好重讀呢？"
   ],
   [
    "The answer lies in an illusion of fluency.",
    "答案在於一種「流暢的錯覺」。"
   ],
   [
    "When text looks familiar, we mistake that ease of processing for genuine mastery, and in the 2006 study, the students who had reread predicted that they would remember more, even though they actually remembered less.",
    "當文字看起來很熟悉時，我們會把這種處理起來很輕鬆的感覺誤認為真正學會了；在 2006 年的研究中，重讀的學生預測自己會記得比較多，但實際上記得比較少。"
   ],
   [
    "The most effective study methods, in other words, often feel the least effective at the time, which is exactly why they are worth trusting.",
    "換句話說，最有效的讀書方法，當下往往感覺最沒效率，而這正是它們值得信賴的原因。"
   ]
  ]
 }
];
const GLOSS = {"memory": ["n.", "記憶"], "remember": ["v.", "記得"], "forget": ["v.", "忘記"], "forgot": ["v.", "忘記（過去式）"], "nonsense": ["n./adj.", "無意義的（東西）"], "list": ["n.", "清單；一串"], "quickly": ["adv.", "快速地"], "pattern": ["n.", "模式"], "curve": ["n.", "曲線"], "review": ["v.", "複習"], "spaced": ["adj.", "有間隔的"], "practice": ["n.", "練習"], "text": ["n.", "文章；文字"], "recall": ["v.", "回想"], "percent": ["n.", "百分之…"], "brain": ["n.", "大腦"], "psychologist": ["n.", "心理學家"], "measure": ["v.", "測量"], "influence": ["n.", "影響"], "syllable": ["n.", "音節"], "memorize": ["v.", "背誦"], "relearn": ["v.", "重新學習"], "publish": ["v.", "發表"], "graph": ["n.", "圖表"], "benefit": ["n.", "好處"], "considerably": ["adv.", "相當地；大幅地"], "material": ["n.", "材料"], "gap": ["n.", "間隔"], "cram": ["v.", "臨時抱佛腳"], "passage": ["n.", "文章；段落"], "confident": ["adj.", "有自信的"], "familiar": ["adj.", "熟悉的"], "illusion": ["n.", "錯覺"], "effortful": ["adj.", "費力的"], "subjective": ["adj.", "主觀的"], "experimental": ["adj.", "實驗的"], "interval": ["n.", "間隔"], "steep": ["adj.", "陡峭的"], "initial": ["adj.", "最初的"], "decline": ["n.", "下降"], "gradual": ["adj.", "逐漸的"], "misquote": ["v.", "錯誤引用"], "reduction": ["n.", "減少"], "deliberately": ["adv.", "刻意地"], "retain": ["v.", "保留；記住"], "scenario": ["n.", "情況"], "universal": ["adj.", "普遍的"], "replication": ["n.", "重複實驗"], "distribute": ["v.", "分散"], "outperform": ["v.", "表現優於"], "massed": ["adj.", "集中的"], "retrieval": ["n.", "提取；回想"], "desirable": ["adj.", "有益的；令人想要的"], "fluency": ["n.", "流暢"], "mastery": ["n.", "精通"], "genuine": ["adj.", "真正的"]};
const KEY = [["memory", "remember", "nonsense", "quickly", "pattern", "curve", "review", "recall", "brain"], ["measure", "syllable", "memorize", "graph", "considerably", "cram", "confident", "familiar", "illusion"], ["subjective", "interval", "steep", "initial", "gradual", "deliberately", "retain", "distribute", "retrieval", "fluency"]];
const DEFS = {
  "memory": "the ability to remember things",
  "remember": "to keep information in your mind and bring it back when needed",
  "nonsense": "something that has no meaning",
  "quickly": "at a fast speed; in a short time",
  "pattern": "the regular way in which something happens or is done",
  "curve": "a line that bends smoothly; a graph line showing change",
  "review": "to study something again in order to remember it",
  "recall": "to bring something back into your mind",
  "brain": "the organ inside your head that controls thinking, feeling and movement",
  "measure": "to find out the size, amount or degree of something",
  "syllable": "a part of a word that contains one vowel sound",
  "memorize": "to learn something so well that you can remember it exactly",
  "graph": "a picture that shows how two sets of numbers are related",
  "considerably": "by a large amount",
  "cram": "to study a lot in a very short time just before a test",
  "confident": "feeling sure of your abilities",
  "familiar": "well known to you because you have seen or heard it before",
  "illusion": "something that seems true but is not",
  "subjective": "based on personal feelings rather than facts",
  "interval": "the period of time between two events",
  "steep": "rising or falling sharply",
  "initial": "happening at the beginning",
  "gradual": "happening slowly over a long period of time",
  "deliberately": "on purpose; intentionally",
  "retain": "to keep information in your memory",
  "distribute": "to spread something over an area or a period of time",
  "retrieval": "the act of getting information back from your memory",
  "fluency": "the ability to do something smoothly and easily"
};

const FIGS = {"mem": {"svg": "<svg viewBox=\"0 0 600 292\" role=\"img\" aria-label=\"Ebbinghaus forgetting curve\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#FFFAF2\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#B4690E\">Ebbinghaus's Forgetting Curve</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >艾賓浩斯的遺忘曲線</text>\n<line x1=\"70\" y1=\"230\" x2=\"560\" y2=\"230\" stroke=\"#1A2238\" stroke-width=\"2\"/><line x1=\"70\" y1=\"62\" x2=\"70\" y2=\"230\" stroke=\"#1A2238\" stroke-width=\"2\"/>\n<text x=\"64\" y=\"74\" font-size=\"11\" text-anchor=\"end\">100%</text><text x=\"64\" y=\"234\" font-size=\"11\" text-anchor=\"end\">0</text>\n<path d=\"M70.0 70.0 L90.9 137.2 L120.3 159.6 L237.1 172.4 L303.6 175.6 L352.5 185.2 L431.2 190.0 L550.0 196.4\" fill=\"none\" stroke=\"#B4690E\" stroke-width=\"4\" stroke-linejoin=\"round\"/>\n<circle cx=\"70.0\" cy=\"70.0\" r=\"4.5\" fill=\"#B4690E\"/><circle cx=\"90.9\" cy=\"137.2\" r=\"4.5\" fill=\"#B4690E\"/><circle cx=\"120.3\" cy=\"159.6\" r=\"4.5\" fill=\"#B4690E\"/><circle cx=\"237.1\" cy=\"172.4\" r=\"4.5\" fill=\"#B4690E\"/><circle cx=\"303.6\" cy=\"175.6\" r=\"4.5\" fill=\"#B4690E\"/><circle cx=\"352.5\" cy=\"185.2\" r=\"4.5\" fill=\"#B4690E\"/><circle cx=\"431.2\" cy=\"190.0\" r=\"4.5\" fill=\"#B4690E\"/><circle cx=\"550.0\" cy=\"196.4\" r=\"4.5\" fill=\"#B4690E\"/><text x=\"108.9\" y=\"131.2\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">58%</text><text x=\"120.3\" y=\"149.6\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">44%</text><text x=\"237.1\" y=\"162.4\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">36%</text><text x=\"303.6\" y=\"165.6\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">34%</text><text x=\"352.5\" y=\"175.2\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">28%</text><text x=\"431.2\" y=\"180.0\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">25%</text><text x=\"550.0\" y=\"186.4\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">21%</text><text x=\"90.9\" y=\"250\" font-size=\"11\" text-anchor=\"middle\">20 min</text><text x=\"120.3\" y=\"250\" font-size=\"11\" text-anchor=\"middle\">1 hr</text><text x=\"303.6\" y=\"250\" font-size=\"11\" text-anchor=\"middle\">1 day</text><text x=\"431.2\" y=\"250\" font-size=\"11\" text-anchor=\"middle\">6 days</text><text x=\"550.0\" y=\"250\" font-size=\"11\" text-anchor=\"middle\">31 days</text>\n<text x=\"315\" y=\"268\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\">Time after learning</text><text x=\"315\" y=\"283\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >學習後經過的時間（縱軸：重學時省下的力氣）</text>\n<rect x=\"360\" y=\"70\" width=\"200\" height=\"56\" rx=\"10\" fill=\"#FFF1DC\"/>\n<text x=\"460\" y=\"92\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\">Forgetting is fastest</text>\n<text x=\"460\" y=\"108\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\">in the first hour.</text><text x=\"460\" y=\"122\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >第一個小時忘得最快</text></g></svg>", "cap": "艾賓浩斯 1885 年的數據：學完後的第一個小時忘得最快，之後才慢慢變平。", "credit": "圖解：winglish.tw（資料：Ebbinghaus, 1885）"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to invent new words",
   "How fast we forget and how to remember better",
   "Why Germany has good scientists",
   "How to read faster"
  ],
  "a": 1,
  "exp": "全文介紹遺忘曲線，以及間隔複習、考自己等對抗遺忘的方法。"
 },
 {
  "q": "2. When did Ebbinghaus forget the fastest?",
  "tag": "細節",
  "opts": [
   "Right after learning",
   "After one week",
   "After one month",
   "He never forgot anything"
  ],
  "a": 0,
  "exp": "遺忘曲線顯示，學完後一開始（第一個小時內）忘得最快，之後才慢下來。"
 },
 {
  "q": "3. Which way of studying would probably help you remember the most a week later?",
  "tag": "推論",
  "opts": [
   "Reading the text four times in one night",
   "Reading it once and then testing yourself several times",
   "Highlighting every sentence",
   "Studying only the night before the test"
  ],
  "a": 1,
  "exp": "研究發現，讀一遍再練習回想（考自己）三次，一週後記得 61%，比讀四遍的 40% 多。"
 }
];
const META = {
 "title": "The Forgetting Curve",
 "category": "心理學",
 "dek": "昨晚背的單字，今天早上就忘了一大半？一百多年前，一位德國科學家拿自己做實驗，畫出了「遺忘曲線」，也找到了對抗遺忘的方法。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1622575402739-6e9edf8073c4?auto=format&fit=crop&w=1600&q=70\" data-local=\"memory-hero.jpg\" alt=\"Hands holding study flashcards\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#FFF1DC\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">🧠</text></svg><figcaption>用字卡考考自己，比一直重讀課本更記得住。<span class=\"credit\">Photo: Mometrix Test Prep / Unsplash</span></figcaption>",
 "fact": "艾賓浩斯在 1885 年發表研究時，實驗對象只有他自己一個人。2015 年，荷蘭的研究者照著他的方法重做一次（受試者同樣只有一人），結果得到的曲線和 130 年前幾乎一樣。",
 "next": {
  "title": "Why Teens Need More Sleep",
  "href": "read.html#sleep"
 },
 "id": "memory",
 "date": "2026/11/1"
};
const USAGE = {
  "memory": ["a good memory · in memory of · childhood memories", "My grandmother has a very good memory for names.", "我奶奶記人名的記性非常好。"],
  "remember": ["remember to do sth · remember doing sth · if I remember correctly", "Remember to bring your swimsuit tomorrow.", "明天記得帶泳衣。"],
  "nonsense": ["talk nonsense · complete nonsense · nonsense words", "Don't listen to him — he's talking nonsense.", "別聽他的，他在胡說八道。"],
  "quickly": ["quickly learn · forget quickly · act quickly", "Children learn new languages quickly.", "小孩子學新語言學得很快。"],
  "pattern": ["a pattern of … · see a pattern · follow a pattern", "Can you see the pattern in these numbers: 2, 4, 8, 16?", "你看得出這些數字的規律嗎：二、四、八、十六？"],
  "curve": ["a steep curve · learning curve · a curve in the road", "Learning to drive has a steep learning curve.", "學開車一開始要學的東西很多。"],
  "review": ["review a lesson · review for a test · review one's notes", "I review my notes for ten minutes every night.", "我每天晚上花十分鐘複習筆記。"],
  "recall": ["recall a name · can't recall · recall that …", "I can't recall where I put my keys.", "我想不起來我把鑰匙放哪裡了。"],
  "brain": ["train one's brain · the brain stores … · brain power", "Learning a new skill keeps your brain young.", "學新技能能讓大腦保持年輕。"],
  "measure": ["measure progress · measure one's height · be measured in …", "We measure progress by how many words you can use, not just memorize.", "我們衡量進步是看你能用多少字，而不只是背多少字。"],
  "syllable": ["a stressed syllable · a two-syllable word · the first syllable", "In the word \"banana,\" the stress is on the second syllable.", "banana 這個字的重音在第二個音節。"],
  "memorize": ["memorize words · memorize a poem · memorize by heart", "We had to memorize a short poem for English class.", "英文課我們得背一首短詩。"],
  "graph": ["a bar graph · line graph · draw a graph", "The line graph shows how temperatures changed over the year.", "這張折線圖顯示一年中氣溫的變化。"],
  "considerably": ["considerably more · considerably better · increase considerably", "Prices are considerably higher in Taipei than in the countryside.", "台北的物價比鄉下高出許多。"],
  "cram": ["cram for an exam · cram school · cram A into B", "He stayed up all night cramming for his history test.", "他熬夜一整晚臨時抱佛腳準備歷史考試。"],
  "confident": ["feel confident · be confident that … · confident about …", "I feel confident about tomorrow's speech.", "我對明天的演講很有信心。"],
  "familiar": ["be familiar with … · look familiar · a familiar face", "That man looks familiar — have we met before?", "那個男人看起來好眼熟，我們以前見過嗎？"],
  "illusion": ["an optical illusion · under the illusion that … · create an illusion", "Mirrors can create the illusion of a bigger room.", "鏡子可以營造房間比較大的錯覺。"],
  "subjective": ["a subjective opinion · highly subjective · subjective experience", "Taste in music is highly subjective.", "對音樂的喜好非常主觀。"],
  "interval": ["at intervals · regular intervals · an interval between …", "Take the medicine at regular intervals, every eight hours.", "定時服藥，每隔八小時一次。"],
  "steep": ["a steep hill · a steep drop · a steep rise in prices", "There was a steep rise in egg prices this winter.", "今年冬天蛋價急劇上漲。"],
  "initial": ["initial reaction · initial stage · initial plan", "My initial reaction was surprise, but then I felt happy.", "我最初的反應是驚訝，但後來覺得很開心。"],
  "gradual": ["a gradual change · gradual improvement · gradual decline", "There has been a gradual improvement in her health.", "她的健康狀況逐漸好轉。"],
  "deliberately": ["deliberately practice · deliberately space out · deliberately choose", "Good learners deliberately test themselves instead of just rereading.", "好的學習者會刻意自我測驗，而不只是重讀。"],
  "retain": ["retain information · retain new words · retain customers", "We retain more information when we explain it to someone else.", "當我們把東西講給別人聽時，記住的資訊更多。"],
  "distribute": ["distribute evenly · distribute food · distribute leaflets", "Volunteers distributed food to people after the earthquake.", "地震後志工把食物分發給民眾。"],
  "retrieval": ["information retrieval · retrieval practice · memory retrieval", "Retrieval practice, like flashcards, is one of the best ways to study.", "提取練習，例如字卡，是最好的讀書方法之一。"],
  "fluency": ["reading fluency · speak with fluency · fluency in …", "Reading aloud every day can improve your reading fluency.", "每天朗讀能增進你的閱讀流暢度。"]
};


/* 導讀模式＋單字小練習 */
const GUIDE = [[{"after": 0, "q": "What problem does the first paragraph describe?", "opts": ["Forgetting new words by the next morning", "Not being able to sleep", "Studying too slowly"], "a": 0, "hint": "看 forgotten most of them by the next morning?"}, {"after": 1, "q": "How much of a list did Ebbinghaus forget after one day?", "opts": ["About two-thirds", "Almost nothing", "Exactly half"], "a": 0, "hint": "看 After one day, about ____ was gone。"}, {"after": 2, "q": "What is \"spaced practice\"?", "opts": ["Reviewing a little on different days", "Studying a lot in one night", "Studying in a quiet space"], "a": 0, "hint": "看 it is better to review a little on different days…"}], [{"after": 1, "q": "When was forgetting the fastest?", "opts": ["At the beginning, right after learning", "After one month", "Only at night"], "a": 0, "hint": "看 Forgetting was fastest at the…"}, {"after": 2, "q": "What is one reason studying a little every day works better than cramming?", "opts": ["The spacing effect", "The illusion of learning", "Nonsense syllables"], "a": 0, "hint": "找 This \"____ effect\" is one reason…"}, {"after": 3, "q": "Which students remembered more after one week?", "opts": ["Those who read once and practiced recalling three times", "Those who read four times", "Both groups remembered the same."], "a": 0, "hint": "比較 40 percent 和 61 percent。"}], [{"after": 1, "q": "What did Ebbinghaus actually measure?", "opts": ["Savings: how much less time he needed to relearn a list", "The percentage of words he could recall", "How meaningful the words were"], "a": 0, "hint": "看 Ebbinghaus measured \"savings,\"…"}, {"after": 2, "q": "What is spaced practice?", "opts": ["Spreading review sessions over days or weeks", "Studying everything in one night", "Reading the text four times"], "a": 0, "hint": "找 in which review sessions are distributed over…"}, {"after": 3, "q": "Why does Bjork call these techniques \"desirable difficulties\"?", "opts": ["The effort they need is what strengthens long-term memory.", "They are too hard for most students.", "They make studying faster."], "a": 0, "hint": "看 because the effort they require is precisely what…"}]];
const VPRAC = [[{"s": "Let's ____ the new words before the quiz tomorrow.", "opts": ["review", "pattern", "curve", "nonsense"], "a": 0, "w": "review"}, {"s": "Stop talking ____! That story doesn't make sense.", "opts": ["nonsense", "memory", "pattern", "curve"], "a": 0, "w": "nonsense"}, {"s": "The road has a sharp ____, so drive slowly.", "opts": ["curve", "pattern", "brain", "review"], "a": 0, "w": "curve"}, {"s": "This shirt has a pretty flower ____.", "opts": ["pattern", "curve", "memory", "brain"], "a": 0, "w": "pattern"}, {"s": "I can't ____ the name of my first teacher.", "opts": ["recall", "review", "quickly", "nonsense"], "a": 0, "w": "recall"}], [{"s": "The word \"banana\" has three ____.", "opts": ["syllables", "graphs", "illusions", "measures"], "a": 0, "w": "syllable"}, {"s": "He tried to ____ the whole speech word for word.", "opts": ["memorize", "measure", "graph", "illusion"], "a": 0, "w": "memorize"}, {"s": "Your face looks ____; have we met before?", "opts": ["familiar", "confident", "considerably", "syllable"], "a": 0, "w": "familiar"}, {"s": "She felt ____ before the test because she had studied hard.", "opts": ["confident", "familiar", "considerably", "illusion"], "a": 0, "w": "confident"}, {"s": "This ____ shows how the temperature changed over the year.", "opts": ["graph", "syllable", "illusion", "cram"], "a": 0, "w": "graph"}], [{"s": "The path up the mountain is very ____.", "opts": ["steep", "gradual", "subjective", "initial"], "a": 0, "w": "steep"}, {"s": "Taste in music is ____; there is no right or wrong answer.", "opts": ["subjective", "steep", "initial", "gradual"], "a": 0, "w": "subjective"}, {"s": "Volunteers will ____ food to families after the typhoon.", "opts": ["distribute", "retain", "retrieval", "fluency"], "a": 0, "w": "distribute"}, {"s": "Her English ____ improved after a year in London.", "opts": ["fluency", "retrieval", "interval", "steep"], "a": 0, "w": "fluency"}, {"s": "My ____ reaction was shock, but then I started laughing.", "opts": ["initial", "gradual", "steep", "subjective"], "a": 0, "w": "initial"}]];
return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE,GUIDE,VPRAC});
})();
