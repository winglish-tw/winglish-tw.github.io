/* Winglish 閱讀館文章資料：Take a Book, Share a Book */
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
    6
   ],
   [
    7,
    8,
    9,
    10,
    11
   ],
   [
    12,
    13,
    14,
    15
   ]
  ],
  "figs": {
   "2": "lfl"
  },
  "heads": {
   "0": "A Gift for Mom",
   "1": "Free Books",
   "2": "A Big Goal",
   "3": "You Can Start One"
  },
  "sents": [
   [
    "In 2009, a man named Todd Bol built a tiny wooden house in Hudson, Wisconsin.",
    "2009 年，一位名叫陶德・波爾的男子在美國威斯康辛州的哈德遜，做了一間小小的木頭房子。"
   ],
   [
    "It looked like an old one-room school.",
    "它看起來像一間只有一個教室的老學校。"
   ],
   [
    "He made it to remember his mother, a teacher who loved books.",
    "他做這個是為了紀念他的媽媽，一位熱愛書本的老師。"
   ],
   [
    "He filled the little house with books and put it on a post in his front yard.",
    "他在小房子裡放滿書，把它立在前院的一根柱子上。"
   ],
   [
    "Neighbors could take a book, and they could leave a book too.",
    "鄰居可以拿走一本書，也可以留下一本書。"
   ],
   [
    "It was free, and no one had to sign anything.",
    "它是免費的，而且不需要簽任何東西。"
   ],
   [
    "Soon, people started to stop by, choose books, and talk with each other.",
    "很快地，人們開始停下腳步、挑選書本，並和彼此聊天。"
   ],
   [
    "Todd's neighbors loved the idea, so he built more.",
    "陶德的鄰居都很喜歡這個點子，所以他又做了更多。"
   ],
   [
    "With a friend, he named the project the Little Free Library.",
    "他和一位朋友把這個計畫取名為「小小免費圖書館」。"
   ],
   [
    "They set a big goal: to have more than 2,509 little libraries.",
    "他們訂下一個遠大的目標：要擁有超過 2,509 座小圖書館。"
   ],
   [
    "That was the number of libraries a rich man named Andrew Carnegie had paid for about a hundred years earlier.",
    "那是大約一百年前，一位名叫安德魯・卡內基的富翁出資興建的圖書館數量。"
   ],
   [
    "They reached the goal in 2012, and the libraries kept spreading.",
    "他們在 2012 年達成了目標，而小圖書館仍繼續擴散。"
   ],
   [
    "Today, there are more than 175,000 registered Little Free Libraries in over 120 countries.",
    "今天，全世界已有超過 175,000 座登記在案的小小免費圖書館，分布在 120 多個國家。"
   ],
   [
    "A Little Free Library does not need a big building or a librarian.",
    "小小免費圖書館不需要大建築，也不需要圖書館員。"
   ],
   [
    "It only needs a few books and people who are willing to share.",
    "它只需要幾本書，以及願意分享的人。"
   ],
   [
    "Maybe you could start one at your school.",
    "也許你可以在學校裡開一座。"
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
   "2": "lfl"
  },
  "heads": {
   "0": "A Tribute",
   "1": "Take One, Leave One",
   "2": "Beating Carnegie",
   "3": "More Than Books",
   "4": "A Lasting Legacy"
  },
  "sents": [
   [
    "When Todd Bol's mother passed away, he wanted to honor her in a way that reflected who she was: a schoolteacher who loved reading.",
    "陶德・波爾的母親過世後，他想用一種能反映她為人的方式來紀念她：一位熱愛閱讀的學校老師。"
   ],
   [
    "In 2009, using wood from an old garage door, he built a small box shaped like a one-room schoolhouse, filled it with books, and set it up on a post outside his home in Hudson, Wisconsin.",
    "2009 年，他用一扇舊車庫門的木頭，做了一個外型像單間教室學校的小箱子，裝滿書本，立在威斯康辛州哈德遜家門外的柱子上。"
   ],
   [
    "The idea was simple: take a book, share a book.",
    "這個點子很簡單：拿一本書，分享一本書。"
   ],
   [
    "Neighbors were delighted.",
    "鄰居們都很高興。"
   ],
   [
    "They borrowed books, returned others, and began chatting with people they had passed on the street for years without ever speaking to.",
    "他們借書、還書，還開始和那些多年來在街上擦身而過卻從未交談的人聊天。"
   ],
   [
    "Bol realized that the little box was building something bigger than a book collection: it was building a community.",
    "波爾發現，這個小箱子建立的不只是藏書，更是一個社區。"
   ],
   [
    "With his friend Rick Brooks, he turned the idea into a nonprofit organization called Little Free Library.",
    "他和朋友瑞克・布魯克斯把這個點子變成一個名為「小小免費圖書館」的非營利組織。"
   ],
   [
    "The two set an ambitious target inspired by Andrew Carnegie, the steel businessman who funded more than 2,500 public libraries in the late 1800s and early 1900s.",
    "兩人以安德魯・卡內基為靈感，訂下一個遠大的目標；這位鋼鐵商人在 19 世紀末到 20 世紀初資助了超過 2,500 座公共圖書館。"
   ],
   [
    "Little Free Library passed that number in 2012.",
    "小小免費圖書館在 2012 年超越了這個數字。"
   ],
   [
    "Since then, the movement has grown to more than 175,000 registered libraries in over 120 countries.",
    "從那之後，這項運動已成長到超過 175,000 座登記的圖書館，遍布 120 多個國家。"
   ],
   [
    "Supporters say the boxes do more than offer free books.",
    "支持者說，這些書箱不只是提供免費的書。"
   ],
   [
    "They make reading material easy to find in neighborhoods where families may not own many books, and they give strangers a reason to stop and talk.",
    "在家庭可能沒有太多書的社區，它們讓讀物更容易取得，也讓陌生人有理由停下來聊聊。"
   ],
   [
    "The organization now also places libraries in communities with few bookstores or public libraries.",
    "這個組織現在也會在書店或公共圖書館很少的社區設置小圖書館。"
   ],
   [
    "Todd Bol died in 2018, but his idea continues to grow.",
    "陶德・波爾在 2018 年過世，但他的點子仍在繼續成長。"
   ],
   [
    "Each little library is a small reminder that sharing what you have, even something as simple as a book, can bring people together.",
    "每一座小圖書館都在提醒我們：分享自己擁有的東西，即使只是一本書，也能把人們連結在一起。"
   ],
   [
    "Perhaps the best way to honor a teacher is to help more people read.",
    "或許，紀念一位老師最好的方式，就是幫助更多人閱讀。"
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
    13
   ]
  ],
  "figs": {
   "2": "lfl"
  },
  "heads": {
   "0": "An Act of Remembrance",
   "1": "Scaling a Simple Idea",
   "2": "Books and Belonging",
   "3": "A Critical Look",
   "4": "What Sharing Requires"
  },
  "sents": [
   [
    "Many grassroots movements begin not with a grand plan but with a personal gesture.",
    "許多草根運動並不是始於宏大的計畫，而是始於一個個人的舉動。"
   ],
   [
    "In 2009, Todd Bol, a resident of Hudson, Wisconsin, built a miniature schoolhouse from the wood of an old garage door as a tribute to his late mother, a teacher and devoted reader.",
    "2009 年，住在威斯康辛州哈德遜的陶德・波爾，用一扇舊車庫門的木頭做了一間迷你校舍，紀念他已故的母親，一位熱愛閱讀的老師。"
   ],
   [
    "He mounted it on a post in his yard, stocked it with books, and invited passersby to take one or leave one.",
    "他把它固定在院子裡的柱子上，放滿書，邀請路過的人拿一本或留一本。"
   ],
   [
    "The response encouraged Bol and his collaborator Rick Brooks to formalize the concept as a nonprofit organization.",
    "熱烈的回應鼓勵了波爾和他的合作夥伴瑞克・布魯克斯，把這個概念正式化為一個非營利組織。"
   ],
   [
    "They deliberately set a benchmark drawn from history: the more than 2,500 libraries funded by the industrialist Andrew Carnegie around the turn of the twentieth century.",
    "他們刻意從歷史中選定一個標竿：實業家安德魯・卡內基在 20 世紀初前後資助的 2,500 多座圖書館。"
   ],
   [
    "Little Free Library surpassed that figure in 2012, and the network now includes more than 175,000 registered book exchanges in over 120 countries.",
    "小小免費圖書館在 2012 年超越了這個數字，如今網絡已包含 120 多個國家、超過 175,000 座登記的換書箱。"
   ],
   [
    "Advocates argue that the boxes serve two purposes at once.",
    "支持者認為，這些書箱同時發揮兩種作用。"
   ],
   [
    "First, they increase access to books, which matters because children who grow up with more books at home tend to develop stronger reading skills.",
    "首先，它們增加了接觸書本的機會；這很重要，因為在家中擁有較多書本的環境下長大的孩子，往往會發展出較強的閱讀能力。"
   ],
   [
    "Second, they foster what sociologists call social capital, the networks of trust and familiarity that make neighborhoods feel safer and more connected.",
    "其次，它們培養了社會學家所說的「社會資本」，也就是讓社區感覺更安全、更緊密的信任與熟悉的網絡。"
   ],
   [
    "Not everyone, however, accepts these claims uncritically.",
    "然而，並不是每個人都毫無保留地接受這些說法。"
   ],
   [
    "A 2017 study of Little Free Libraries in two Canadian cities found that they were concentrated in wealthier, well-educated neighborhoods, the very places that already had good access to books.",
    "一項 2017 年針對加拿大兩座城市的研究發現，這些小圖書館集中在較富裕、教育程度較高的社區，而這些地方本來就很容易取得書本。"
   ],
   [
    "The researchers suggested that the boxes might function partly as symbols of neighborhood identity rather than as tools for reducing inequality.",
    "研究者指出，這些書箱可能有部分是作為社區認同的象徵，而不是減少不平等的工具。"
   ],
   [
    "In response, the organization has expanded programs that place libraries in underserved communities.",
    "作為回應，這個組織擴大了在資源不足社區設置小圖書館的計畫。"
   ],
   [
    "The debate offers a useful lesson: generosity is most powerful when it is directed toward those who need it most.",
    "這場辯論提供了一個有用的啟示：慷慨最有力量的時候，是當它被送到最需要的人手上。"
   ]
  ]
 }
];
const GLOSS = {"tiny": ["adj.", "極小的"], "wooden": ["adj.", "木製的"], "remember": ["v.", "紀念；記得"], "post": ["n.", "柱子"], "yard": ["n.", "院子"], "neighbor": ["n.", "鄰居"], "free": ["adj.", "免費的"], "project": ["n.", "計畫"], "goal": ["n.", "目標"], "reach": ["v.", "達成"], "spread": ["v.", "擴散"], "register": ["v.", "登記"], "registered": ["adj.", "登記的"], "librarian": ["n.", "圖書館員"], "willing": ["adj.", "願意的"], "share": ["v.", "分享"], "honor": ["v.", "紀念；尊敬"], "reflect": ["v.", "反映"], "garage": ["n.", "車庫"], "delighted": ["adj.", "高興的"], "borrow": ["v.", "借入"], "community": ["n.", "社區"], "nonprofit": ["adj.", "非營利的"], "organization": ["n.", "組織"], "ambitious": ["adj.", "遠大的；有雄心的"], "target": ["n.", "目標"], "fund": ["v.", "資助"], "supporter": ["n.", "支持者"], "stranger": ["n.", "陌生人"], "legacy": ["n.", "遺產；留下的影響"], "grassroots": ["adj.", "草根的；基層的"], "gesture": ["n.", "舉動"], "tribute": ["n.", "紀念；致敬"], "devoted": ["adj.", "熱愛的；忠實的"], "mount": ["v.", "固定；安裝"], "passerby": ["n.", "路人"], "passersby": ["n.", "路人（複數）"], "collaborator": ["n.", "合作者"], "formalize": ["v.", "使正式化"], "benchmark": ["n.", "標竿"], "industrialist": ["n.", "實業家"], "surpass": ["v.", "超越"], "advocate": ["n.", "支持者；倡導者"], "access": ["n.", "取得的機會"], "foster": ["v.", "培養"], "sociologist": ["n.", "社會學家"], "capital": ["n.", "資本"], "familiarity": ["n.", "熟悉"], "uncritically": ["adv.", "不加批判地"], "concentrated": ["adj.", "集中的"], "identity": ["n.", "認同；身分"], "inequality": ["n.", "不平等"], "underserved": ["adj.", "資源不足的"], "generosity": ["n.", "慷慨"]};
const KEY = [["tiny", "wooden", "post", "yard", "neighbor", "free", "goal", "spread", "willing"], ["honor", "reflect", "garage", "delighted", "community", "nonprofit", "ambitious", "fund", "stranger", "supporter"], ["grassroots", "tribute", "collaborator", "benchmark", "surpass", "foster", "familiarity", "concentrated", "inequality", "generosity"]];
const FIGS = {"lfl": {"svg": "<svg viewBox=\"0 0 600 306\" role=\"img\" aria-label=\"Growth of Little Free Libraries\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#FFF7F9\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#C2385A\">From One Box to a World Movement</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >從一個書箱，到全世界的分享運動</text>\n<line x1=\"40\" y1=\"172\" x2=\"560\" y2=\"172\" stroke=\"#E6CCD4\" stroke-width=\"2\"/>\n<circle cx=\"80\" cy=\"158\" r=\"14\" fill=\"#E7A3B6\"/><text x=\"80\" y=\"164\" font-size=\"13\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">1</text><text x=\"80\" y=\"198\" font-size=\"15\" font-weight=\"900\" text-anchor=\"middle\">2009</text><text x=\"80\" y=\"216\" font-size=\"12\" text-anchor=\"middle\">the first box</text><text x=\"80\" y=\"232\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >第一座</text>\n<circle cx=\"210\" cy=\"138\" r=\"34\" fill=\"#D9738F\"/><text x=\"210\" y=\"144\" font-size=\"21\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">2,510</text><text x=\"210\" y=\"198\" font-size=\"15\" font-weight=\"900\" text-anchor=\"middle\">2012</text><text x=\"210\" y=\"216\" font-size=\"12\" text-anchor=\"middle\">beats Carnegie</text><text x=\"210\" y=\"232\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >超越卡內基</text>\n<circle cx=\"350\" cy=\"122\" r=\"50\" fill=\"#C9506E\"/><text x=\"350\" y=\"128\" font-size=\"22\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">75,000+</text><text x=\"350\" y=\"198\" font-size=\"15\" font-weight=\"900\" text-anchor=\"middle\">2018</text><text x=\"350\" y=\"216\" font-size=\"12\" text-anchor=\"middle\">88 countries</text><text x=\"350\" y=\"232\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >88 個國家</text>\n<circle cx=\"500\" cy=\"108\" r=\"64\" fill=\"#C2385A\"/><text x=\"500\" y=\"114\" font-size=\"22\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">175,000+</text><text x=\"500\" y=\"198\" font-size=\"15\" font-weight=\"900\" text-anchor=\"middle\">2024</text><text x=\"500\" y=\"216\" font-size=\"12\" text-anchor=\"middle\">128 countries</text><text x=\"500\" y=\"232\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >128 個國家</text>\n<rect x=\"90\" y=\"248\" width=\"420\" height=\"46\" rx=\"23\" fill=\"#FDE8EE\"/>\n<text x=\"300\" y=\"268\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\">Take a book, share a book.</text><text x=\"300\" y=\"285\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >拿一本書，也分享一本書</text></g></svg>", "cap": "從家門口的一個書箱開始，小小免費圖書館在十幾年內擴展到全世界。", "credit": "圖解：Winglish（2018、2024 數字取自當年報導）"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to become a librarian",
   "How a small book box became a worldwide sharing movement",
   "Why Andrew Carnegie was rich",
   "How to build a garage door"
  ],
  "a": 1,
  "exp": "全文介紹波爾家門口的小書箱，如何發展成遍布全球的「小小免費圖書館」運動。"
 },
 {
  "q": "2. Why did Todd Bol build the first Little Free Library?",
  "tag": "細節",
  "opts": [
   "To sell old books",
   "To remember his mother, a teacher who loved books",
   "Because his town had no school",
   "To win a contest"
  ],
  "a": 1,
  "exp": "他是為了紀念熱愛閱讀、當老師的母親。"
 },
 {
  "q": "3. What is the main rule of a Little Free Library?",
  "tag": "細節",
  "opts": [
   "Pay one dollar for each book",
   "Return the book in two weeks",
   "Take a book, and share a book",
   "Only children may use it"
  ],
  "a": 2,
  "exp": "規則就是「拿一本書，分享一本書」，免費、不用簽名或借書證。"
 }
];
const META = {
 "title": "Take a Book, Share a Book",
 "category": "社會關懷",
 "dek": "一個男人為了紀念愛書的媽媽，在家門口放了一個小木箱，裡面裝滿免費的書。十幾年後，全世界已經有十七萬多個這樣的小書箱。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1773224811488-070c7dce2657?auto=format&fit=crop&w=1600&q=70\" data-local=\"lfl-hero.jpg\" alt=\"A Little Free Library filled with books on a street\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#FDE8EE\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">💗</text></svg><figcaption>街角的小小圖書館，沒有館員、不用借書證，只要願意分享。<span class=\"credit\">Photo: Nihar Bhagat / Unsplash</span></figcaption>",
 "fact": "第一座「小小免費圖書館」是陶德・波爾用自家舊車庫門的木頭做的，外型模仿一間只有一個教室的老學校，用來紀念當老師的媽媽。",
 "next": {
  "title": "A Table for Every Child",
  "href": "read.html#shokudo"
 },
 "id": "lfl",
 "date": "2026/11/1"
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
