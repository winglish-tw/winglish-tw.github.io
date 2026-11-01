/* Winglish 閱讀館文章資料：One Girl, One Pen */
window.ARTICLE = (function(){
const LEVELS = [
 {
  "name": "Level 1",
  "rec": "國三（會考程度）",
  "paras": [
   [
    0,
    1,
    2,
    3
   ],
   [
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
    14
   ],
   [
    15,
    16
   ]
  ],
  "figs": {
   "3": "mtl"
  },
  "heads": {
   "0": "A Girl Who Loved School",
   "1": "Speaking Up",
   "2": "A Terrible Day",
   "3": "One Book, One Pen"
  },
  "sents": [
   [
    "Malala Yousafzai was born in 1997 in the Swat Valley in Pakistan.",
    "馬拉拉・優薩福扎伊在 1997 年出生於巴基斯坦的斯瓦特河谷。"
   ],
   [
    "Her father ran a school, and Malala loved to learn.",
    "她的父親經營一所學校，而馬拉拉很喜歡學習。"
   ],
   [
    "But when she was 11, a group called the Taliban took control of her area.",
    "但在她 11 歲時，一個叫做塔利班的組織控制了她住的地區。"
   ],
   [
    "They said girls could not go to school anymore.",
    "他們說女孩不可以再去上學。"
   ],
   [
    "Malala did not stay quiet.",
    "馬拉拉沒有保持沉默。"
   ],
   [
    "She wrote a blog for the BBC about her life and her wish to study.",
    "她為英國廣播公司（BBC）寫部落格，記錄她的生活和想讀書的心願。"
   ],
   [
    "She used a different name, Gul Makai, to stay safe.",
    "為了保護自己，她用了另一個名字「古兒・馬凱」。"
   ],
   [
    "Later, she also spoke on TV about girls' right to education.",
    "後來，她也上電視談論女孩受教育的權利。"
   ],
   [
    "In 2012, when Malala was 15, a gunman stopped her school bus and shot her.",
    "2012 年，馬拉拉 15 歲時，一名槍手攔下她的校車，朝她開槍。"
   ],
   [
    "She was badly hurt, but doctors in England saved her life.",
    "她傷得很重，但英國的醫生救回了她的性命。"
   ],
   [
    "People around the world were shocked, and many stood with her.",
    "世界各地的人都很震驚，許多人站出來支持她。"
   ],
   [
    "Malala did not give up.",
    "馬拉拉沒有放棄。"
   ],
   [
    "On her 16th birthday, she gave a speech at the United Nations.",
    "在她 16 歲生日那天，她在聯合國發表演講。"
   ],
   [
    "She said, \"One child, one teacher, one book, one pen can change the world.\"",
    "她說：「一個孩子、一位老師、一本書、一枝筆，就能改變世界。」"
   ],
   [
    "In 2014, at just 17, she won the Nobel Peace Prize, the youngest person ever to win it.",
    "2014 年，年僅 17 歲的她獲得諾貝爾和平獎，是史上最年輕的得主。"
   ],
   [
    "Today, millions of girls around the world still cannot go to school.",
    "今天，世界上仍有數百萬個女孩無法上學。"
   ],
   [
    "Malala works to change that, because she believes every child deserves to learn.",
    "馬拉拉努力改變這件事，因為她相信每個孩子都應該有學習的機會。"
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
    13
   ],
   [
    14,
    15
   ]
  ],
  "figs": {
   "3": "mtl"
  },
  "heads": {
   "0": "Worth Fighting For",
   "1": "The Diary of Gul Makai",
   "2": "The Attack",
   "3": "A Louder Voice"
  },
  "sents": [
   [
    "For most students, going to school is an ordinary part of life, and some even complain about it.",
    "對大多數學生來說，上學是生活中很平常的一部分，有些人甚至還會抱怨。"
   ],
   [
    "For Malala Yousafzai, it was something worth fighting for.",
    "但對馬拉拉・優薩福扎伊來說，上學是值得奮鬥爭取的事。"
   ],
   [
    "Malala was born in 1997 in the Swat Valley of northern Pakistan, where her father, Ziauddin, ran a school and strongly believed in education for girls.",
    "馬拉拉 1997 年出生在巴基斯坦北部的斯瓦特河谷；她的父親齊亞烏丁經營一所學校，非常重視女孩的教育。"
   ],
   [
    "By the end of 2008, the Pakistani Taliban, an extremist group, had taken control of much of the valley.",
    "到了 2008 年底，極端組織巴基斯坦塔利班已經控制了河谷的大部分地區。"
   ],
   [
    "They destroyed many schools and ordered that girls must stop going to class.",
    "他們摧毀了許多學校，並下令女孩必須停止上學。"
   ],
   [
    "In early 2009, 11-year-old Malala began writing an online diary for the BBC's Urdu-language website.",
    "2009 年初，11 歲的馬拉拉開始為 BBC 的烏爾都語網站撰寫網路日記。"
   ],
   [
    "To protect herself, she used the pen name Gul Makai and described her fear, her love of learning, and her sadness as classmates stopped coming to school.",
    "為了保護自己，她用筆名「古兒・馬凱」寫作，描述她的恐懼、對學習的熱愛，以及看著同學一個個不再來上學的難過。"
   ],
   [
    "As she grew older, she spoke openly in interviews, and her name became known across Pakistan.",
    "隨著她長大，她公開接受訪問，名字傳遍了巴基斯坦。"
   ],
   [
    "Her courage, however, made her a target.",
    "然而，她的勇氣也讓她成了攻擊目標。"
   ],
   [
    "On October 9, 2012, a Taliban gunman stopped her school bus and shot her; two of her classmates were also injured.",
    "2012 年 10 月 9 日，一名塔利班槍手攔下她的校車並朝她開槍；她的兩名同學也受了傷。"
   ],
   [
    "She was flown to a hospital in Birmingham, England, where she slowly recovered.",
    "她被送到英國伯明罕的醫院，在那裡慢慢康復。"
   ],
   [
    "The attack was meant to silence her, but it did the opposite.",
    "這次攻擊原本是要讓她閉嘴，結果卻適得其反。"
   ],
   [
    "On her 16th birthday, Malala spoke at the United Nations, declaring that \"one child, one teacher, one book, one pen can change the world.\"",
    "在她 16 歲生日那天，馬拉拉在聯合國演講，宣告「一個孩子、一位老師、一本書、一枝筆，就能改變世界」。"
   ],
   [
    "In 2014, she shared the Nobel Peace Prize with Kailash Satyarthi, an Indian activist who fights child labor, and at 17 became the youngest Nobel winner in history.",
    "2014 年，她和反童工的印度社運人士凱拉許・沙蒂亞提共同獲得諾貝爾和平獎，17 歲的她成為史上最年輕的諾貝爾獎得主。"
   ],
   [
    "She later graduated from Oxford University, and with her father she started the Malala Fund, which supports girls' education around the world.",
    "她後來從牛津大學畢業，並和父親創立了「馬拉拉基金會」，支持世界各地女孩的教育。"
   ],
   [
    "More than 100 million girls are still out of school today, but Malala's story shows that a single young voice can be heard around the world.",
    "今天仍有超過一億個女孩無法上學，但馬拉拉的故事證明，一個年輕的聲音也能被全世界聽見。"
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
   "3": "mtl"
  },
  "heads": {
   "0": "A Family Mission",
   "1": "Writing in the Dark",
   "2": "An Attack That Backfired",
   "3": "A Global Platform"
  },
  "sents": [
   [
    "Few people have become the symbol of a global cause at such a young age as Malala Yousafzai.",
    "很少有人像馬拉拉・優薩福扎伊一樣，在這麼年輕的時候就成為一項全球運動的象徵。"
   ],
   [
    "Born in 1997 in Mingora, in Pakistan's Swat Valley, she grew up in a household where education was treated almost as a family mission: her father, Ziauddin, ran a school and campaigned openly for girls' right to learn.",
    "她 1997 年生於巴基斯坦斯瓦特河谷的明戈拉，成長的家庭幾乎把教育視為家族使命：她的父親齊亞烏丁經營學校，並公開倡導女孩受教的權利。"
   ],
   [
    "That conviction was put to the test when the Pakistani Taliban extended their control over the valley and, in January 2009, issued an order barring girls from attending school.",
    "當巴基斯坦塔利班擴大對河谷的控制，並在 2009 年 1 月下令禁止女孩上學時，這份信念受到了考驗。"
   ],
   [
    "Malala's response was remarkable for someone so young.",
    "以她的年紀來說，馬拉拉的回應非常了不起。"
   ],
   [
    "Writing under the pseudonym Gul Makai, the 11-year-old kept a diary for BBC Urdu, chronicling daily life under militant rule and her longing to return to the classroom.",
    "這位 11 歲的女孩以筆名「古兒・馬凱」為 BBC 烏爾都語頻道寫日記，記錄武裝分子統治下的日常生活，以及她對重返教室的渴望。"
   ],
   [
    "Her anonymity did not last; as she appeared in documentaries and interviews, her public profile grew, and so did the danger she faced.",
    "她的匿名身分並沒有維持太久；隨著她出現在紀錄片和訪談中，她的知名度提高，她面臨的危險也隨之增加。"
   ],
   [
    "On October 9, 2012, a gunman boarded her school bus and shot her, also wounding two classmates.",
    "2012 年 10 月 9 日，一名槍手登上她的校車朝她開槍，也打傷了兩名同學。"
   ],
   [
    "She was airlifted to Birmingham, England, where she underwent months of treatment.",
    "她被空運到英國伯明罕，在那裡接受了好幾個月的治療。"
   ],
   [
    "The assassination attempt, intended to silence her, instead amplified her message to a worldwide audience.",
    "這次暗殺企圖原本想讓她噤聲，反而把她的訊息放大到全世界。"
   ],
   [
    "Within a year she had addressed the United Nations and co-written a memoir, I Am Malala.",
    "不到一年，她就在聯合國發表演說，並與人合著了回憶錄《我是馬拉拉》。"
   ],
   [
    "In 2014, at the age of 17, she shared the Nobel Peace Prize with Kailash Satyarthi, an Indian campaigner against child labor, becoming the youngest Nobel laureate ever.",
    "2014 年，17 歲的她與反童工的印度倡議者凱拉許・沙蒂亞提共同獲得諾貝爾和平獎，成為史上最年輕的諾貝爾獎得主。"
   ],
   [
    "The pairing was symbolic: a Muslim girl from Pakistan and a Hindu man from India, honored together for defending children's rights.",
    "這樣的組合很有象徵意義：一位來自巴基斯坦的穆斯林女孩和一位來自印度的印度教男子，因為捍衛兒童權利而一同獲獎。"
   ],
   [
    "Malala went on to complete a degree at Oxford University in 2020 and, through the Malala Fund, to support local education activists in countries where girls face similar obstacles.",
    "馬拉拉後來在 2020 年完成牛津大學的學位，並透過馬拉拉基金會，支持女孩面臨類似阻礙的國家裡的在地教育倡議者。"
   ],
   [
    "Her story raises an uncomfortable question for those who take schooling for granted: what would we be willing to risk for the right to learn?",
    "她的故事向那些把上學視為理所當然的人，提出了一個令人不安的問題：為了學習的權利，我們願意冒多大的風險？"
   ],
   [
    "For Malala, the answer was clear, and her belief that \"one child, one teacher, one book, one pen can change the world\" continues to inspire students far beyond Pakistan.",
    "對馬拉拉來說，答案很清楚；而她相信「一個孩子、一位老師、一本書、一枝筆，就能改變世界」，這份信念至今仍激勵著巴基斯坦以外的無數學生。"
   ]
  ]
 }
];
const GLOSS = {"valley": ["n.", "山谷；河谷"], "blog": ["n.", "部落格"], "control": ["n.", "控制"], "quiet": ["adj.", "安靜的"], "safe": ["adj.", "安全的"], "right": ["n.", "權利"], "education": ["n.", "教育"], "gunman": ["n.", "持槍歹徒"], "shot": ["v.", "開槍射擊（shoot 過去式）"], "badly": ["adv.", "嚴重地"], "shocked": ["adj.", "震驚的"], "speech": ["n.", "演講"], "prize": ["n.", "獎"], "deserve": ["v.", "應得"], "ordinary": ["adj.", "平常的"], "complain": ["v.", "抱怨"], "extremist": ["adj./n.", "極端的；極端分子"], "destroy": ["v.", "摧毀"], "diary": ["n.", "日記"], "pen": ["n.", "筆"], "interview": ["n.", "訪問"], "courage": ["n.", "勇氣"], "target": ["n.", "目標"], "injured": ["adj.", "受傷的"], "recover": ["v.", "康復"], "silence": ["v.", "使沉默"], "opposite": ["n.", "相反"], "declare": ["v.", "宣告"], "activist": ["n.", "社運人士；倡議者"], "labor": ["n.", "勞動"], "graduate": ["v.", "畢業"], "fund": ["n.", "基金"], "symbol": ["n.", "象徵"], "household": ["n.", "家庭"], "mission": ["n.", "使命"], "campaign": ["v.", "倡導；發起運動"], "conviction": ["n.", "信念"], "extend": ["v.", "擴大"], "bar": ["v.", "禁止"], "remarkable": ["adj.", "非凡的"], "pseudonym": ["n.", "筆名"], "chronicle": ["v.", "記錄"], "militant": ["adj.", "武裝的；好戰的"], "longing": ["n.", "渴望"], "anonymity": ["n.", "匿名"], "profile": ["n.", "知名度；形象"], "documentary": ["n.", "紀錄片"], "wound": ["v.", "使受傷"], "airlift": ["v.", "空運"], "undergo": ["v.", "經歷；接受"], "assassination": ["n.", "暗殺"], "amplify": ["v.", "放大"], "memoir": ["n.", "回憶錄"], "laureate": ["n.", "得獎者"], "symbolic": ["adj.", "象徵性的"], "obstacle": ["n.", "障礙"], "granted": ["adj.", "（take for granted）視為理所當然"], "inspire": ["v.", "激勵"]};
const KEY = [["valley", "blog", "control", "safe", "right", "education", "speech", "prize", "deserve"], ["ordinary", "complain", "extremist", "diary", "courage", "target", "recover", "declare", "activist"], ["conviction", "pseudonym", "chronicle", "militant", "anonymity", "assassination", "amplify", "laureate", "obstacle"]];
const FIGS = {"mtl": {"svg": "<svg viewBox=\"0 0 600 310\" role=\"img\" aria-label=\"Timeline of Malala's life\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#FFF8F2\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#C2571A\">Malala's Journey</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >馬拉拉的成長之路</text>\n<line x1=\"40\" y1=\"132\" x2=\"570\" y2=\"132\" stroke=\"#C2571A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<g text-anchor=\"middle\">\n<circle cx=\"70\" cy=\"132\" r=\"10\" fill=\"#C2571A\"/><text x=\"70\" y=\"172\" font-weight=\"900\" font-size=\"15\">1997</text><text x=\"70\" y=\"188\" font-size=\"11\" fill=\"#5A6478\">born</text><text x=\"70\" y=\"205\" font-size=\"12\" font-weight=\"700\">Swat Valley</text><text x=\"70\" y=\"220\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >生於斯瓦特河谷</text>\n<circle cx=\"160\" cy=\"132\" r=\"10\" fill=\"#C2571A\"/><text x=\"160\" y=\"62\" font-weight=\"900\" font-size=\"15\">2009</text><text x=\"160\" y=\"78\" font-size=\"11\" fill=\"#5A6478\">age 11</text><text x=\"160\" y=\"95\" font-size=\"12\" font-weight=\"700\">Writes a blog</text><text x=\"160\" y=\"110\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >用筆名寫部落格</text>\n<circle cx=\"250\" cy=\"132\" r=\"10\" fill=\"#C2571A\"/><text x=\"250\" y=\"172\" font-weight=\"900\" font-size=\"15\">2012</text><text x=\"250\" y=\"188\" font-size=\"11\" fill=\"#5A6478\">age 15</text><text x=\"250\" y=\"205\" font-size=\"12\" font-weight=\"700\">Attacked on bus</text><text x=\"250\" y=\"220\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >在校車上遇襲</text>\n<circle cx=\"340\" cy=\"132\" r=\"10\" fill=\"#C2571A\"/><text x=\"340\" y=\"62\" font-weight=\"900\" font-size=\"15\">2013</text><text x=\"340\" y=\"78\" font-size=\"11\" fill=\"#5A6478\">age 16</text><text x=\"340\" y=\"95\" font-size=\"12\" font-weight=\"700\">Speaks at UN</text><text x=\"340\" y=\"110\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >在聯合國演講</text>\n<circle cx=\"430\" cy=\"132\" r=\"10\" fill=\"#C2571A\"/><text x=\"430\" y=\"172\" font-weight=\"900\" font-size=\"15\">2014</text><text x=\"430\" y=\"188\" font-size=\"11\" fill=\"#5A6478\">age 17</text><text x=\"430\" y=\"205\" font-size=\"12\" font-weight=\"700\">Nobel Peace Prize</text><text x=\"430\" y=\"220\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >諾貝爾和平獎</text>\n<circle cx=\"530\" cy=\"132\" r=\"10\" fill=\"#C2571A\"/><text x=\"530\" y=\"62\" font-weight=\"900\" font-size=\"15\">2020</text><text x=\"530\" y=\"78\" font-size=\"11\" fill=\"#5A6478\">age 22</text><text x=\"530\" y=\"95\" font-size=\"12\" font-weight=\"700\">Oxford degree</text><text x=\"530\" y=\"110\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >牛津大學畢業</text>\n</g>\n<rect x=\"60\" y=\"252\" width=\"480\" height=\"46\" rx=\"23\" fill=\"#FDECDD\"/>\n<text x=\"300\" y=\"272\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\">\"One child, one teacher, one book, one pen can change the world.\"</text><text x=\"300\" y=\"289\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >「一個孩子、一位老師、一本書、一枝筆，就能改變世界。」</text></g></svg>", "cap": "馬拉拉從 11 歲開始為女孩的受教權發聲，17 歲就得到諾貝爾和平獎。", "credit": "圖解：Winglish"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to write a popular blog",
   "A young woman who fought for girls' right to education",
   "The history of the United Nations",
   "Why Pakistan has beautiful valleys"
  ],
  "a": 1,
  "exp": "全文介紹馬拉拉從小爭取女孩受教權，即使遇襲也沒有放棄的故事。"
 },
 {
  "q": "2. Why did Malala write her blog under a different name?",
  "tag": "細節",
  "opts": [
   "To stay safe",
   "To become famous",
   "Because her teacher told her to",
   "To win a prize"
  ],
  "a": 0,
  "exp": "塔利班控制當地，她用筆名 Gul Makai 是為了保護自己的安全。"
 },
 {
  "q": "3. Which of the following is true?",
  "tag": "細節",
  "opts": [
   "Malala stopped speaking after the attack",
   "Malala won the Nobel Peace Prize when she was 30",
   "Malala became the youngest person to win the Nobel Peace Prize",
   "Malala's father did not want girls to study"
  ],
  "a": 2,
  "exp": "她 17 歲獲得諾貝爾和平獎，是史上最年輕的得主。"
 }
];
const META = {
 "title": "One Girl, One Pen",
 "category": "人物",
 "dek": "她 11 歲寫部落格、15 歲在校車上遇襲、17 歲得到諾貝爾和平獎。馬拉拉只想要一件事：讓每個女孩都能上學。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1761322572550-967ea8c0bfd9?auto=format&fit=crop&w=1600&q=70\" data-local=\"malala-hero.jpg\" alt=\"An open notebook with a pen and pencils on a desk\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#FDECDD\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">⭐</text></svg><figcaption>對很多人來說，紙和筆再平常不過；但對世界上許多女孩來說，能上學寫字並不容易。<span class=\"credit\">Photo: Clay Banks / Unsplash</span></figcaption>",
 "fact": "2014 年諾貝爾和平獎宣布時，馬拉拉正在英國伯明罕的學校上化學課。她得知自己得獎後，還是先把當天的課上完，才去面對媒體。",
 "next": {
  "title": "The Long Walk to First Grade",
  "href": "read.html#ruby"
 },
 "id": "malala",
 "date": "2026/11/1"
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
