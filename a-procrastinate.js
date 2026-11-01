/* Winglish 閱讀館文章資料：Why We Put Things Off */
window.ARTICLE = (function(){
const LEVELS = [
 {
  "name": "Level 1",
  "rec": "國三（會考程度）",
  "paras": [
   [
    0,
    1
   ],
   [
    2,
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
    14,
    15,
    16
   ]
  ],
  "figs": {
   "2": "pro"
  },
  "heads": {
   "0": "Phone or Books?",
   "1": "Not Just Lazy",
   "2": "Running from Feelings",
   "3": "A Stranger Called Future Me",
   "4": "How to Start"
  },
  "sents": [
   [
    "You have a test tomorrow, but you are watching videos on your phone.",
    "你明天要考試，卻在用手機看影片。"
   ],
   [
    "You know you should study, so why can't you start?",
    "你知道自己應該讀書，那為什麼就是開始不了呢？"
   ],
   [
    "Many people think procrastination means being lazy.",
    "很多人以為拖延就是懶惰。"
   ],
   [
    "But scientists say that is usually not true.",
    "但科學家說，通常不是這樣。"
   ],
   [
    "A psychologist named Tim Pychyl has studied procrastination for many years.",
    "一位名叫提姆・皮丘的心理學家研究拖延已經很多年。"
   ],
   [
    "He says it is mostly about feelings, not time.",
    "他說，拖延主要和感受有關，而不是時間。"
   ],
   [
    "When a task makes us feel bored, worried, or stressed, we want to escape that bad feeling.",
    "當一件事讓我們覺得無聊、擔心或有壓力時，我們就想逃離那種不好的感覺。"
   ],
   [
    "Watching a video makes us feel better right away.",
    "看影片能讓我們馬上感覺好一點。"
   ],
   [
    "The problem is that the bad feeling comes back later, and it is often bigger.",
    "問題是，那種不好的感覺之後會回來，而且常常變得更大。"
   ],
   [
    "Another study found something strange.",
    "另一項研究發現了一件奇怪的事。"
   ],
   [
    "When people think about themselves in the future, their brains act a little like they are thinking about a stranger.",
    "當人們想到未來的自己時，大腦的反應有點像是在想一個陌生人。"
   ],
   [
    "So we leave the hard work for \"future me,\" as if that person were someone else.",
    "所以我們把困難的工作留給「未來的我」，好像那是別人一樣。"
   ],
   [
    "So how can we stop putting things off?",
    "那麼，我們要怎麼停止拖延呢？"
   ],
   [
    "First, make the first step tiny, like \"I will read just one page.\"",
    "第一，把第一步變得很小，例如「我只讀一頁就好」。"
   ],
   [
    "Starting is the hardest part, and once you begin, the task often feels easier.",
    "開始是最難的部分，一旦開始了，事情常常就變得比較容易。"
   ],
   [
    "Second, don't be too hard on yourself, because feeling guilty can make you put things off again.",
    "第二，不要對自己太嚴厲，因為罪惡感可能會讓你再次拖延。"
   ],
   [
    "Be kind to your future self, because that person is still you!",
    "對未來的自己好一點，因為那個人還是你！"
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
   "1": "pro"
  },
  "heads": {
   "0": "A Universal Habit",
   "1": "Mood Repair",
   "2": "Your Future Self",
   "3": "Forgive Yourself",
   "4": "Tiny Steps"
  },
  "sents": [
   [
    "Almost everyone has put off an important task while doing something less useful instead.",
    "幾乎每個人都曾經把重要的事情擱著，去做一些比較沒用的事。"
   ],
   [
    "For students, the classic example is scrolling through social media the night before a big exam.",
    "對學生來說，最經典的例子就是大考前一晚還在滑社群媒體。"
   ],
   [
    "We usually blame ourselves for being lazy or bad at managing time, but research suggests the real cause lies elsewhere.",
    "我們通常責怪自己懶惰或不會管理時間，但研究顯示真正的原因在別處。"
   ],
   [
    "According to psychologists Tim Pychyl and Fuschia Sirois, procrastination is mainly a problem of managing emotions.",
    "根據心理學家提姆・皮丘和弗希亞・西洛伊斯的研究，拖延主要是一個管理情緒的問題。"
   ],
   [
    "When a task makes us feel anxious, bored, or unsure of ourselves, avoiding it gives us quick relief.",
    "當一件事讓我們焦慮、無聊或沒有自信時，逃避它能帶來快速的解脫。"
   ],
   [
    "They call this \"mood repair\": we put the task off because doing so makes us feel better in the short term.",
    "他們稱之為「情緒修復」：我們拖延，是因為這樣做能讓自己在短時間內感覺好一點。"
   ],
   [
    "Unfortunately, the relief does not last, and the task waits for us, along with extra stress.",
    "不幸的是，這種解脫不會持久，那件事還在等著我們，還多了額外的壓力。"
   ],
   [
    "Brain research adds another piece to the puzzle.",
    "大腦研究為這個謎題補上了另一塊拼圖。"
   ],
   [
    "Psychologist Hal Hershfield found that when people think about their future selves, their brain activity looks more like it does when they think about other people.",
    "心理學家哈爾・赫許菲爾德發現，當人們想到未來的自己時，大腦活動比較像是在想其他人。"
   ],
   [
    "In a sense, we hand our problems to a stranger who just happens to share our name.",
    "某種程度上，我們把問題丟給了一個剛好和我們同名的陌生人。"
   ],
   [
    "So what actually helps?",
    "那麼，什麼方法真的有用？"
   ],
   [
    "Surprisingly, one answer is self-forgiveness.",
    "令人意外的是，其中一個答案是原諒自己。"
   ],
   [
    "In a study of university students, those who forgave themselves for procrastinating before one exam procrastinated less before the next one.",
    "一項針對大學生的研究發現，在一次考試前拖延後選擇原諒自己的學生，下一次考試前比較不會拖延。"
   ],
   [
    "Another strategy is to make starting as easy as possible, for example by promising to work for just five minutes.",
    "另一個策略是讓「開始」變得越容易越好，例如答應自己只做五分鐘。"
   ],
   [
    "Once we begin, the task usually feels less threatening, and we often keep going.",
    "一旦開始，那件事通常就沒那麼可怕了，我們也常常會繼續做下去。"
   ],
   [
    "Procrastination is not a sign of a weak character; it is a habit we can learn to change.",
    "拖延不代表性格軟弱，而是一種我們可以學著改變的習慣。"
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
   "1": "pro"
  },
  "heads": {
   "0": "Beyond Time Management",
   "1": "Short-Term Mood Repair",
   "2": "Strangers in Time",
   "3": "The Cost of Self-Criticism",
   "4": "Practical Implications"
  },
  "sents": [
   [
    "Procrastination is commonly framed as a failure of discipline or time management, and the usual remedies reflect that assumption: planners, schedules, and stern resolutions to try harder.",
    "拖延通常被視為缺乏自律或不會管理時間，而常見的解方也反映了這種假設：計畫本、時間表，以及要更努力的嚴厲決心。"
   ],
   [
    "A growing body of research, however, suggests that this framing misidentifies the problem.",
    "然而，越來越多的研究指出，這種看法弄錯了問題所在。"
   ],
   [
    "Psychologists Tim Pychyl and Fuschia Sirois argue that procrastination is fundamentally a problem of emotion regulation.",
    "心理學家提姆・皮丘和弗希亞・西洛伊斯主張，拖延從根本上來說是情緒調節的問題。"
   ],
   [
    "When a task evokes negative feelings such as anxiety, boredom, or self-doubt, delaying it provides immediate relief.",
    "當一件事引發焦慮、無聊或自我懷疑等負面感受時，延後去做就能帶來立即的解脫。"
   ],
   [
    "In their account, people prioritize short-term mood repair over long-term goals, choosing to feel better now at the expense of their future well-being.",
    "在他們的解釋中，人們把短期的情緒修復放在長期目標之前，選擇現在感覺好一點，卻犧牲了未來的福祉。"
   ],
   [
    "Because the avoided task remains and is now accompanied by guilt, the cycle tends to reinforce itself.",
    "由於被逃避的事情仍然存在，現在又多了罪惡感，這個循環往往會自我強化。"
   ],
   [
    "Neuroscience offers a striking explanation for why this trade-off feels acceptable.",
    "神經科學為「為什麼這種交換感覺可以接受」提供了驚人的解釋。"
   ],
   [
    "In brain-imaging studies, Hal Hershfield and his colleagues found that thinking about one's future self produced activity patterns closer to those observed when thinking about other people than to those for the present self.",
    "在腦部造影研究中，哈爾・赫許菲爾德和同事發現，想到未來的自己時，大腦的活動模式比較接近想到其他人時的模式，而不是想到現在的自己。"
   ],
   [
    "If the future self feels like a stranger, burdening that person with tomorrow's work becomes psychologically easier.",
    "如果未來的自己感覺像個陌生人，把明天的工作丟給那個人，在心理上就變得比較容易。"
   ],
   [
    "This perspective also explains why harsh self-criticism often backfires.",
    "這個觀點也解釋了為什麼嚴厲的自我批評常常適得其反。"
   ],
   [
    "Berating oneself adds yet another negative emotion to the task, giving the mind even more reason to avoid it.",
    "責罵自己等於又為那件事增加了一種負面情緒，讓大腦更有理由逃避它。"
   ],
   [
    "Consistent with this, a study of first-year university students found that those who forgave themselves for procrastinating before a midterm exam procrastinated less when preparing for the next one.",
    "與此一致的是，一項針對大一學生的研究發現，那些在期中考前拖延後原諒自己的學生，準備下一次考試時拖延得比較少。"
   ],
   [
    "The practical implications are modest but powerful.",
    "這些研究的實際應用雖然簡單，卻很有力量。"
   ],
   [
    "Rather than waiting to feel motivated, one can lower the emotional cost of starting by committing to a small, concrete first step, and one can strengthen the connection to the future self by imagining that person vividly.",
    "與其等待自己有動力，不如承諾一個小而具體的第一步來降低開始的情緒成本，並透過生動地想像未來的自己，來加強與那個人的連結。"
   ],
   [
    "Understanding procrastination as an emotional habit rather than a moral flaw may be the first step toward changing it.",
    "把拖延理解為一種情緒習慣而不是道德缺陷，或許就是改變它的第一步。"
   ]
  ]
 }
];
const GLOSS = {"test": ["n.", "考試"], "video": ["n.", "影片"], "procrastination": ["n.", "拖延"], "procrastinate": ["v.", "拖延"], "lazy": ["adj.", "懶惰的"], "psychologist": ["n.", "心理學家"], "feeling": ["n.", "感受"], "task": ["n.", "任務；工作"], "bored": ["adj.", "無聊的"], "worried": ["adj.", "擔心的"], "stressed": ["adj.", "有壓力的"], "escape": ["v.", "逃離"], "stranger": ["n.", "陌生人"], "future": ["n./adj.", "未來（的）"], "tiny": ["adj.", "極小的"], "guilty": ["adj.", "有罪惡感的"], "kind": ["adj.", "親切的；仁慈的"], "scroll": ["v.", "滑動（螢幕）"], "blame": ["v.", "責怪"], "manage": ["v.", "管理"], "emotion": ["n.", "情緒"], "anxious": ["adj.", "焦慮的"], "avoid": ["v.", "避免；逃避"], "relief": ["n.", "解脫；放鬆"], "mood": ["n.", "心情"], "repair": ["n./v.", "修復"], "puzzle": ["n.", "謎題"], "activity": ["n.", "活動"], "forgive": ["v.", "原諒"], "strategy": ["n.", "策略"], "threatening": ["adj.", "有威脅的"], "character": ["n.", "性格"], "habit": ["n.", "習慣"], "discipline": ["n.", "自律；紀律"], "remedy": ["n.", "解決方法"], "assumption": ["n.", "假設"], "stern": ["adj.", "嚴厲的"], "resolution": ["n.", "決心"], "misidentify": ["v.", "誤認"], "fundamentally": ["adv.", "根本上"], "regulation": ["n.", "調節"], "evoke": ["v.", "引起"], "prioritize": ["v.", "優先處理"], "expense": ["n.", "代價"], "reinforce": ["v.", "強化"], "neuroscience": ["n.", "神經科學"], "imaging": ["n.", "造影"], "burden": ["v.", "使負擔"], "backfire": ["v.", "適得其反"], "berate": ["v.", "嚴厲責罵"], "consistent": ["adj.", "一致的"], "implication": ["n.", "含意；應用"], "concrete": ["adj.", "具體的"], "vividly": ["adv.", "生動地"], "flaw": ["n.", "缺陷"]};
const KEY = [["procrastination", "lazy", "psychologist", "task", "worried", "escape", "stranger", "tiny", "guilty"], ["scroll", "blame", "emotion", "anxious", "avoid", "relief", "forgive", "strategy", "habit"], ["discipline", "remedy", "assumption", "fundamentally", "evoke", "prioritize", "reinforce", "backfire", "implication", "concrete"]];
const FIGS = {"pro": {"svg": "<svg viewBox=\"0 0 600 294\" role=\"img\" aria-label=\"The procrastination loop\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#FFFAF2\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#B4690E\">The Procrastination Loop</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >拖延的惡性循環</text>\n<rect x=\"75.0\" y=\"56\" width=\"150\" height=\"52\" rx=\"12\" fill=\"#fff\" stroke=\"#B4690E\" stroke-width=\"2.5\"/><text x=\"150\" y=\"79\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">A task feels bad</text><text x=\"150\" y=\"97\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >任務讓人不舒服</text>\n<rect x=\"375.0\" y=\"56\" width=\"150\" height=\"52\" rx=\"12\" fill=\"#fff\" stroke=\"#B4690E\" stroke-width=\"2.5\"/><text x=\"450\" y=\"79\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">Escape to the phone</text><text x=\"450\" y=\"97\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >逃去滑手機</text>\n<rect x=\"375.0\" y=\"166\" width=\"150\" height=\"52\" rx=\"12\" fill=\"#fff\" stroke=\"#B4690E\" stroke-width=\"2.5\"/><text x=\"450\" y=\"189\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">Feel better... briefly</text><text x=\"450\" y=\"207\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >暫時感覺變好</text>\n<rect x=\"75.0\" y=\"166\" width=\"150\" height=\"52\" rx=\"12\" fill=\"#fff\" stroke=\"#B4690E\" stroke-width=\"2.5\"/><text x=\"150\" y=\"189\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">Task + guilt grow</text><text x=\"150\" y=\"207\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >任務還在，又多了罪惡感</text>\n<path d=\"M228 82 L360.0 82.0\" stroke=\"#B4690E\" stroke-width=\"3\"/><path d=\"M372 82 L360.0 76.0 L360.0 88.0Z\" fill=\"#B4690E\"/><path d=\"M450 110 L450.0 152.0\" stroke=\"#B4690E\" stroke-width=\"3\"/><path d=\"M450 164 L456.0 152.0 L444.0 152.0Z\" fill=\"#B4690E\"/><path d=\"M372 192 L240.0 192.0\" stroke=\"#B4690E\" stroke-width=\"3\"/><path d=\"M228 192 L240.0 198.0 L240.0 186.0Z\" fill=\"#B4690E\"/><path d=\"M150 164 L150.0 122.0\" stroke=\"#B4690E\" stroke-width=\"3\"/><path d=\"M150 110 L144.0 122.0 L156.0 122.0Z\" fill=\"#B4690E\"/>\n<rect x=\"236\" y=\"116\" width=\"128\" height=\"50\" rx=\"25\" fill=\"#17875C\"/>\n<text x=\"300\" y=\"138\" font-size=\"13\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\">Break it:</text>\n<text x=\"300\" y=\"155\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\">start for 5 minutes</text>\n<rect x=\"60\" y=\"234\" width=\"480\" height=\"46\" rx=\"23\" fill=\"#FFF1DC\"/>\n<text x=\"300\" y=\"254\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\">Procrastination is about feelings, not laziness.</text><text x=\"300\" y=\"271\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >拖延的關鍵是情緒，而不是懶惰；打破循環：先做 5 分鐘</text></g></svg>", "cap": "逃避能讓人暫時舒服，卻讓任務和壓力越滾越大；打破循環最簡單的方法，是先做 5 分鐘。", "credit": "圖解：Winglish"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to watch videos on a phone",
   "Why people put things off and how to stop",
   "Why tests are difficult",
   "How the brain stores memories"
  ],
  "a": 1,
  "exp": "全文說明拖延的真正原因（情緒），以及克服拖延的方法。"
 },
 {
  "q": "2. According to the passage, procrastination is mainly about ______.",
  "tag": "細節",
  "opts": [
   "being lazy",
   "not having enough time",
   "our feelings",
   "having a bad phone"
  ],
  "a": 2,
  "exp": "心理學家皮丘指出，拖延主要和情緒、感受有關，而不是懶惰或時間不夠。"
 },
 {
  "q": "3. Which of the following would most likely help a student stop putting off studying?",
  "tag": "推論",
  "opts": [
   "Blaming himself strongly",
   "Promising to read just one page first",
   "Waiting until he feels motivated",
   "Leaving the work for tomorrow"
  ],
  "a": 1,
  "exp": "把第一步變小（例如先讀一頁、先做五分鐘）能降低開始的難度；責怪自己反而會更拖延。"
 }
];
const META = {
 "title": "Why We Put Things Off",
 "category": "心理學",
 "dek": "明天要考試，你卻一直滑手機？心理學家說，拖延通常不是因為懶，而是因為我們想逃避不舒服的感覺。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1492640728264-201e1aac3504?auto=format&fit=crop&w=1600&q=70\" data-local=\"procrastinate-hero.jpg\" alt=\"A smartphone lying on papers next to books and a laptop\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#FFF1DC\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">🧠</text></svg><figcaption>手機就在書旁邊，要專心讀書真的不容易。<span class=\"credit\">Photo: Adeolu Eletu / Unsplash</span></figcaption>",
 "fact": "據說心理學家蔡格尼克在 1920 年代發現，餐廳服務生對「還沒結帳」的點單記得特別清楚，一結完帳就忘了。這種「未完成的事比較忘不掉」的現象叫做「蔡格尼克效應」，也是為什麼先開始做一點點，會讓你更想把事情做完。",
 "next": {
  "title": "The Forgetting Curve",
  "href": "read.html#memory"
 },
 "id": "procrastinate",
 "date": "2026/11/1"
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
