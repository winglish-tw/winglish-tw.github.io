/* Winglish 閱讀館文章資料：The Latte Dads of Sweden */
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
    11,
    12
   ],
   [
    13,
    14,
    15,
    16,
    17
   ]
  ],
  "figs": {
   "2": "bars"
  },
  "heads": {
   "0": "Dads in the Park",
   "1": "Time Off for Babies",
   "2": "A Rule Just for Dads",
   "3": "Good for Everyone"
  },
  "sents": [
   [
    "In a park in Stockholm, you might see a group of fathers pushing baby strollers and drinking coffee.",
    "在斯德哥爾摩的公園裡，你可能會看到一群爸爸推著嬰兒車、喝著咖啡。"
   ],
   [
    "People in Sweden call them \"latte dads.\"",
    "瑞典人叫他們「拿鐵爸爸」。"
   ],
   [
    "Why are so many dads at home with their babies?",
    "為什麼有這麼多爸爸在家陪小嬰兒呢？"
   ],
   [
    "The answer is parental leave.",
    "答案是育嬰假。"
   ],
   [
    "In Sweden, parents can stay home with a new baby and still get paid.",
    "在瑞典，父母可以在家照顧新生寶寶，同時還能領到錢。"
   ],
   [
    "Together, they get 480 days for each child.",
    "每個孩子，爸媽加起來可以休 480 天。"
   ],
   [
    "In 1974, Sweden became the first country to let both mothers and fathers share this paid leave.",
    "1974 年，瑞典成為第一個讓爸爸和媽媽可以共享這種有薪假的國家。"
   ],
   [
    "But at first, almost no fathers used it.",
    "但一開始，幾乎沒有爸爸使用。"
   ],
   [
    "In the first year, dads took only about half a percent of the days.",
    "第一年，爸爸只休了大約百分之零點五的天數。"
   ],
   [
    "So the government made a new rule.",
    "所以政府訂了一條新規定。"
   ],
   [
    "Some days were saved only for dads, and if a dad did not use them, the family lost them.",
    "有些天數是專門留給爸爸的，如果爸爸不用，這個家庭就會失去這些天數。"
   ],
   [
    "Today, 90 days are saved for each parent.",
    "今天，每位家長各有 90 天的專屬假。"
   ],
   [
    "Now fathers take about 30 percent of all parental leave.",
    "現在爸爸休了所有育嬰假的大約百分之三十。"
   ],
   [
    "This change helps everyone.",
    "這個改變對每個人都有幫助。"
   ],
   [
    "Mothers can go back to work more easily.",
    "媽媽可以更容易回到工作崗位。"
   ],
   [
    "Fathers learn to cook, change diapers, and care for their children.",
    "爸爸學會煮飯、換尿布和照顧孩子。"
   ],
   [
    "And children get to spend more time with both parents.",
    "而孩子也可以和爸爸媽媽都有更多相處時間。"
   ],
   [
    "Taking care of a baby is not \"women's work\"; it is a job for every parent.",
    "照顧寶寶不是「女人的工作」，而是每一位家長的工作。"
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
   "2": "bars"
  },
  "heads": {
   "0": "Coffee and Strollers",
   "1": "The First Country to Share",
   "2": "Use It or Lose It",
   "3": "Changing What Is Normal",
   "4": "Still a Long Way to Go"
  },
  "sents": [
   [
    "On a weekday morning in Stockholm, it is common to see fathers chatting in cafes, babies asleep in strollers beside them.",
    "在斯德哥爾摩的平日早上，常可以看到爸爸們在咖啡館聊天，身旁的嬰兒車裡睡著小寶寶。"
   ],
   [
    "Swedes have a playful name for these men: \"latte dads.\"",
    "瑞典人給這些男人取了一個俏皮的名字：「拿鐵爸爸」。"
   ],
   [
    "They are not unemployed; they are on paid parental leave, and their jobs will be waiting for them when they return.",
    "他們不是失業，而是在休有薪育嬰假，回去時工作都還在等著他們。"
   ],
   [
    "In 1974, Sweden became the first country in the world to replace maternity leave with parental leave that mothers and fathers could share.",
    "1974 年，瑞典成為全世界第一個把「產假」改為爸媽可以共享的「育嬰假」的國家。"
   ],
   [
    "The idea was simple: caring for a baby should be the responsibility of both parents, not just the mother.",
    "這個想法很簡單：照顧寶寶應該是父母雙方的責任，而不只是媽媽的。"
   ],
   [
    "Yet in the first year, fathers used only about 0.5 percent of the available days, because most families still assumed that babies belonged with their mothers.",
    "然而在第一年，爸爸只用了可用天數的大約百分之零點五，因為大部分家庭仍然認為寶寶就該跟著媽媽。"
   ],
   [
    "To change this, the government introduced a \"daddy month\" in 1995.",
    "為了改變這個情況，政府在 1995 年推出了「爸爸月」。"
   ],
   [
    "Thirty days were reserved for each parent and could not be transferred to the other.",
    "每位家長各保留 30 天，而且不能轉讓給另一方。"
   ],
   [
    "If the father did not use his days, the family simply lost them.",
    "如果爸爸不用他的天數，這個家庭就直接失去它們。"
   ],
   [
    "The reserved period was extended to 60 days in 2002 and to 90 days in 2016, out of a total of 480 days per child.",
    "保留天數在 2002 年延長到 60 天，2016 年延長到 90 天，而每個孩子的育嬰假總共是 480 天。"
   ],
   [
    "The policy worked, and today Swedish fathers take around 30 percent of all parental leave.",
    "這項政策奏效了，今天瑞典的爸爸休了所有育嬰假的大約百分之三十。"
   ],
   [
    "Just as important, attitudes have changed.",
    "同樣重要的是，人們的態度也改變了。"
   ],
   [
    "In many Swedish workplaces, a man who does not take his leave may now be the one who seems unusual.",
    "在許多瑞典職場，現在反而是不休育嬰假的男人可能顯得不尋常。"
   ],
   [
    "Sweden is not yet perfectly equal, since mothers still take most of the leave days.",
    "瑞典還沒有達到完全平等，因為媽媽仍然休了大部分的育嬰假。"
   ],
   [
    "But its experience shows that laws can do more than give people choices; they can also change what a society considers normal.",
    "但它的經驗顯示，法律不只能給人們選擇，也能改變一個社會認為「正常」的事。"
   ],
   [
    "As more fathers spend time at home, the old idea that childcare is \"women's work\" is slowly disappearing.",
    "隨著越來越多爸爸花時間待在家，「照顧孩子是女人的工作」這種舊觀念正慢慢消失。"
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
   "2": "bars"
  },
  "heads": {
   "0": "A Familiar Sight",
   "1": "Neutral on Paper",
   "2": "The Power of a Quota",
   "3": "Unfinished Business"
  },
  "sents": [
   [
    "Visitors to Stockholm are often struck by the number of men pushing strollers through the city on weekday mornings, so many that Swedes have coined the affectionate term \"latte pappa,\" or latte dad.",
    "造訪斯德哥爾摩的旅客，常對平日早上推著嬰兒車穿梭城市的男人數量感到驚訝；多到瑞典人還發明了一個親切的稱呼「latte pappa」，也就是拿鐵爸爸。"
   ],
   [
    "The phenomenon is not a coincidence of culture but the product of decades of deliberate policy.",
    "這個現象並不是文化上的巧合，而是數十年刻意制定政策的成果。"
   ],
   [
    "Sweden's parental leave system now grants 480 days of paid leave per child, compensated at roughly 80 percent of a parent's salary for most of that time, up to a ceiling.",
    "瑞典的育嬰假制度現在給每個孩子 480 天的有薪假，其中大部分期間約可領薪水的八成，但有上限。"
   ],
   [
    "In 1974, Sweden became the first nation to convert maternity leave into gender-neutral parental leave, allowing couples to divide the time as they wished.",
    "1974 年，瑞典成為第一個把產假轉為性別中立育嬰假的國家，讓夫妻可以依自己的意願分配時間。"
   ],
   [
    "The reform was formally egalitarian, yet its practical effect was minimal: fathers claimed about 0.5 percent of the days in its first year.",
    "這項改革在形式上是平等的，但實際效果卻微乎其微：第一年爸爸只申請了大約百分之零點五的天數。"
   ],
   [
    "Legal permission, it turned out, could not overcome entrenched expectations about who should care for infants, nor the fear among men that taking leave might damage their careers.",
    "事實證明，法律上的許可無法克服根深蒂固的期待（誰應該照顧嬰兒），也無法消除男性擔心休假會損害職涯的恐懼。"
   ],
   [
    "Policymakers therefore shifted from offering choices to creating incentives.",
    "因此，政策制定者從「提供選擇」轉向「創造誘因」。"
   ],
   [
    "In 1995, two years after neighboring Norway had pioneered a similar measure, Sweden reserved one month of leave exclusively for each parent on a \"use it or lose it\" basis.",
    "1995 年，在鄰國挪威率先推出類似措施兩年後，瑞典為每位家長保留一個月的專屬假，採取「不用就作廢」的原則。"
   ],
   [
    "The quota was expanded to two months in 2002 and to three in 2016.",
    "這項配額在 2002 年擴大為兩個月，2016 年擴大為三個月。"
   ],
   [
    "Because the reserved days cannot be transferred, a family that leaves them unused effectively forfeits paid time at home, an outcome few households are willing to accept.",
    "因為保留的天數不能轉讓，沒有使用的家庭實際上等於放棄了在家的有薪時間，而很少家庭願意接受這種結果。"
   ],
   [
    "Fathers now take roughly 30 percent of all parental leave days, a dramatic increase but still well short of an equal split.",
    "現在爸爸休了全部育嬰假天數的大約百分之三十，這是驚人的成長，但距離平均分配仍有一大段距離。"
   ],
   [
    "Researchers note that mothers continue to take the majority of the leave, partly because of persistent wage gaps: if a father earns more, a family may lose more income when he stays home.",
    "研究者指出，媽媽仍然休了大部分的假，部分原因是持續存在的薪資差距：如果爸爸賺得比較多，他留在家時家庭可能損失更多收入。"
   ],
   [
    "Even so, the shift in norms is unmistakable, and in many workplaces a father who declines his leave now invites more questions than one who takes it.",
    "即便如此，社會規範的轉變是不容置疑的；在許多職場，現在拒絕休假的爸爸，反而比休假的爸爸引來更多疑問。"
   ],
   [
    "Sweden's experience offers a broader lesson for any society pursuing gender equality.",
    "瑞典的經驗為任何追求性別平等的社會提供了更廣泛的啟示。"
   ],
   [
    "Neutral rules alone may preserve old habits, whereas carefully designed policies can reshape both behavior and the expectations that underlie it.",
    "單靠中立的規則可能會保留舊習慣，而精心設計的政策則能同時重塑行為，以及行為背後的期待。"
   ]
  ]
 }
];
const GLOSS = {"stroller": ["n.", "嬰兒推車"], "latte": ["n.", "拿鐵咖啡"], "parental": ["adj.", "父母的"], "leave": ["n.", "休假"], "paid": ["adj.", "有薪的"], "share": ["v.", "分享；共享"], "percent": ["n.", "百分之…"], "government": ["n.", "政府"], "rule": ["n.", "規定"], "diaper": ["n.", "尿布"], "weekday": ["n.", "平日"], "playful": ["adj.", "俏皮的"], "unemployed": ["adj.", "失業的"], "maternity": ["n.", "產婦的；母親身分"], "responsibility": ["n.", "責任"], "available": ["adj.", "可用的"], "introduce": ["v.", "推出；引進"], "reserve": ["v.", "保留"], "reserved": ["adj.", "保留的"], "transfer": ["v.", "轉讓"], "extend": ["v.", "延長"], "policy": ["n.", "政策"], "attitude": ["n.", "態度"], "workplace": ["n.", "職場"], "equal": ["adj.", "平等的"], "society": ["n.", "社會"], "childcare": ["n.", "育兒"], "coin": ["v.", "創造（新詞）"], "affectionate": ["adj.", "親切的；充滿感情的"], "phenomenon": ["n.", "現象"], "coincidence": ["n.", "巧合"], "deliberate": ["adj.", "刻意的"], "grant": ["v.", "給予"], "compensate": ["v.", "補償；支付"], "ceiling": ["n.", "上限"], "convert": ["v.", "轉換"], "reform": ["n.", "改革"], "egalitarian": ["adj.", "平等主義的"], "minimal": ["adj.", "極少的"], "entrenched": ["adj.", "根深蒂固的"], "policymaker": ["n.", "政策制定者"], "incentive": ["n.", "誘因"], "pioneer": ["v.", "率先開創"], "exclusively": ["adv.", "專門地；獨有地"], "quota": ["n.", "配額"], "forfeit": ["v.", "喪失；放棄"], "household": ["n.", "家庭"], "dramatic": ["adj.", "驚人的；劇烈的"], "majority": ["n.", "大多數"], "persistent": ["adj.", "持續的"], "wage": ["n.", "薪資"], "gap": ["n.", "差距"], "unmistakable": ["adj.", "不會弄錯的；明顯的"], "decline": ["v.", "拒絕"], "pursue": ["v.", "追求"], "preserve": ["v.", "保存"], "reshape": ["v.", "重塑"], "underlie": ["v.", "作為…的基礎"]};
const KEY = [["stroller", "parental", "leave", "paid", "share", "percent", "government", "diaper"], ["unemployed", "maternity", "responsibility", "available", "reserve", "transfer", "extend", "policy", "attitude"], ["phenomenon", "coincidence", "compensate", "egalitarian", "entrenched", "incentive", "quota", "forfeit", "persistent", "underlie"]];
const FIGS = {"bars": {"svg": "<svg viewBox=\"0 0 600 310\" role=\"img\" aria-label=\"Days of parental leave reserved for fathers in Sweden\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#FAF7FD\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\">\n<text x=\"300\" y=\"32\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#7A4FB5\">瑞典「爸爸專屬」育嬰假天數</text>\n<line x1=\"80\" y1=\"230\" x2=\"540\" y2=\"230\" stroke=\"#1A2238\" stroke-width=\"2\"/>\n<g font-size=\"14\" text-anchor=\"middle\">\n<rect x=\"110\" y=\"226\" width=\"70\" height=\"4\" fill=\"#C9CED6\"/><text x=\"145\" y=\"214\" font-weight=\"900\">0 天</text><text x=\"145\" y=\"254\" font-weight=\"700\">1974</text><text x=\"145\" y=\"272\" fill=\"#5A6478\" font-size=\"12\">爸媽可共享</text>\n<rect x=\"215\" y=\"180\" width=\"70\" height=\"50\" rx=\"4\" fill=\"#B79BDB\"/><text x=\"250\" y=\"170\" font-weight=\"900\">30 天</text><text x=\"250\" y=\"254\" font-weight=\"700\">1995</text>\n<rect x=\"320\" y=\"130\" width=\"70\" height=\"100\" rx=\"4\" fill=\"#9874CB\"/><text x=\"355\" y=\"120\" font-weight=\"900\">60 天</text><text x=\"355\" y=\"254\" font-weight=\"700\">2002</text>\n<rect x=\"425\" y=\"80\" width=\"70\" height=\"150\" rx=\"4\" fill=\"#7A4FB5\"/><text x=\"460\" y=\"70\" font-weight=\"900\">90 天</text><text x=\"460\" y=\"254\" font-weight=\"700\">2016 起</text>\n</g>\n<text x=\"300\" y=\"296\" font-size=\"14\" text-anchor=\"middle\" fill=\"#5A6478\">每個孩子共 480 天；這些天數爸爸不用，就會消失</text></g></svg>", "cap": "瑞典一步步增加「爸爸專屬」的育嬰假，讓更多爸爸願意回家帶孩子。", "credit": "圖解：Winglish"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "Why Swedish people love coffee",
   "How Sweden encourages fathers to stay home with their babies",
   "How to take care of a newborn baby",
   "Why mothers in Sweden do not work"
  ],
  "a": 1,
  "exp": "全文說明瑞典的育嬰假制度，以及如何用政策鼓勵爸爸回家照顧孩子。"
 },
 {
  "q": "2. Why did the government save some leave days only for fathers?",
  "tag": "細節",
  "opts": [
   "Because very few fathers were using the leave",
   "Because mothers did not want any leave",
   "Because babies prefer their fathers",
   "Because the government wanted to save money"
  ],
  "a": 0,
  "exp": "1974 年開放共享後，爸爸只用了約 0.5% 的天數，所以政府保留爸爸專屬天數。"
 },
 {
  "q": "3. What is a \"latte dad\"?",
  "tag": "推論",
  "opts": [
   "A father who works in a coffee shop",
   "A father on parental leave who spends time with his baby",
   "A father who drinks too much coffee",
   "A father who has lost his job"
  ],
  "a": 1,
  "exp": "拿鐵爸爸是在休育嬰假、推著嬰兒車、在咖啡館或公園陪孩子的爸爸。"
 }
];
const META = {
 "title": "The Latte Dads of Sweden",
 "category": "性別平等",
 "dek": "在瑞典的公園裡，常看到一群爸爸推著嬰兒車、手拿咖啡聊天。為什麼瑞典的爸爸這麼常在家帶小孩？",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1733380005522-b8d76ce49d13?auto=format&fit=crop&w=1600&q=70\" data-local=\"dads-hero.jpg\" alt=\"A father pushing a baby stroller\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#EEE6F7\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">🤝</text></svg><figcaption>在瑞典，推著嬰兒車的爸爸是很常見的街景。<span class=\"credit\">Photo: Unsplash</span></figcaption>",
 "fact": "全世界第一個設立「爸爸專屬育嬰假」的國家其實是挪威（1993 年），瑞典兩年後跟進，之後許多國家也開始仿效。",
 "next": {
  "title": "The Island That Isn't There",
  "href": "read.html#garbage"
 },
 "id": "dads",
 "date": "2026/11/1"
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
