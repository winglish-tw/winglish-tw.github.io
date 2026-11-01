/* Winglish 閱讀館文章資料：Why Teens Need More Sleep */
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
    15,
    16
   ]
  ],
  "figs": {
   "3": "slp"
  },
  "heads": {
   "0": "Hard to Wake Up",
   "1": "A Body Clock That Moves",
   "2": "Why Sleep Matters",
   "3": "An Experiment in Seattle",
   "4": "Better Sleep Tips"
  },
  "sents": [
   [
    "Do you find it hard to fall asleep before midnight and hard to wake up for school?",
    "你是不是覺得半夜十二點前很難睡著，早上又很難起床上學？"
   ],
   [
    "It may not be your fault.",
    "這可能不是你的錯。"
   ],
   [
    "When children become teenagers, their body clock changes.",
    "孩子進入青春期後，身體的生理時鐘會改變。"
   ],
   [
    "The brain starts to release melatonin, the sleep hormone, later at night.",
    "大腦開始在比較晚的時候才分泌褪黑激素，也就是讓人想睡的荷爾蒙。"
   ],
   [
    "So many teens don't feel sleepy until about 11 p.m. or even later.",
    "所以很多青少年要到晚上 11 點左右，甚至更晚，才會覺得想睡。"
   ],
   [
    "But school still starts early in the morning.",
    "但學校還是一大早就開始上課。"
   ],
   [
    "Doctors say teenagers need 8 to 10 hours of sleep every night, but many get much less.",
    "醫生說青少年每晚需要睡 8 到 10 小時，但很多人睡得少很多。"
   ],
   [
    "Sleep is not wasted time.",
    "睡覺不是浪費時間。"
   ],
   [
    "While you sleep, your brain sorts and saves what you learned during the day.",
    "你睡覺的時候，大腦會整理並儲存你白天學到的東西。"
   ],
   [
    "Without enough sleep, it is harder to pay attention and remember things.",
    "睡眠不足時，就比較難專心，也比較難記住事情。"
   ],
   [
    "You may also feel grumpy or sad more easily.",
    "你也可能比較容易煩躁或難過。"
   ],
   [
    "In 2016, schools in Seattle, USA, moved their start time from 7:50 to 8:45 a.m.",
    "2016 年，美國西雅圖的學校把上學時間從早上 7:50 延後到 8:45。"
   ],
   [
    "Students slept 34 minutes more each night.",
    "學生們每晚多睡了 34 分鐘。"
   ],
   [
    "Their grades in one class went up by 4.5 percent.",
    "他們在某一門課的成績進步了 4.5%。"
   ],
   [
    "So what can you do?",
    "那你可以怎麼做呢？"
   ],
   [
    "Put your phone away before bed, because it can keep your brain awake.",
    "睡前把手機收起來，因為它會讓你的大腦一直保持清醒。"
   ],
   [
    "Try to go to bed and wake up at about the same time every day, even on weekends.",
    "試著每天在差不多的時間睡覺和起床，週末也一樣。"
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
   "3": "slp"
  },
  "heads": {
   "0": "Not Just Staying Up Late",
   "1": "A Shifting Clock",
   "2": "What Sleep Does",
   "3": "The Seattle Study",
   "4": "Small Changes"
  },
  "sents": [
   [
    "Parents often complain that teenagers stay up too late and then struggle to get out of bed.",
    "父母常常抱怨青少年熬夜太晚，早上又爬不起來。"
   ],
   [
    "It is easy to blame phones or laziness, but biology plays a major role.",
    "人們很容易怪手機或懶惰，但生理因素扮演了重要角色。"
   ],
   [
    "During puberty, the body's internal clock, or circadian rhythm, shifts later.",
    "在青春期，身體內部的時鐘，也就是晝夜節律，會往後移。"
   ],
   [
    "The brain begins releasing melatonin, a hormone that makes us sleepy, later in the evening than it did in childhood.",
    "大腦開始分泌褪黑激素這種讓人想睡的荷爾蒙，時間比童年時更晚。"
   ],
   [
    "As a result, many teens are simply not tired at 9 or 10 p.m., yet they still have to wake up early for school.",
    "因此，很多青少年在晚上 9 點或 10 點根本不累，卻還是得一大早起床上學。"
   ],
   [
    "Experts recommend 8 to 10 hours of sleep a night for teenagers, but many get far less on school nights.",
    "專家建議青少年每晚睡 8 到 10 小時，但很多人在要上學的晚上睡得遠遠不夠。"
   ],
   [
    "This matters because sleep is when the brain does important work.",
    "這很重要，因為睡眠是大腦進行重要工作的時候。"
   ],
   [
    "During sleep, memories from the day are strengthened and organized.",
    "睡眠期間，白天的記憶會被強化和整理。"
   ],
   [
    "Lack of sleep makes it harder to concentrate, learn new information, and control emotions.",
    "睡眠不足會讓人更難專心、學習新資訊和控制情緒。"
   ],
   [
    "It is also linked to a higher risk of accidents and illness.",
    "它也和較高的意外和生病風險有關。"
   ],
   [
    "In 2016, the school district in Seattle, USA, moved high school start times from 7:50 to 8:45 a.m.",
    "2016 年，美國西雅圖學區把高中上學時間從早上 7:50 延後到 8:45。"
   ],
   [
    "Researchers from the University of Washington measured students' sleep with wrist monitors before and after the change.",
    "華盛頓大學的研究人員在改變前後，用手腕感測器測量學生的睡眠。"
   ],
   [
    "They found that students slept an average of 34 minutes more per night, and their final grades in a biology class rose by 4.5 percent.",
    "他們發現，學生平均每晚多睡了 34 分鐘，生物課的期末成績也提高了 4.5%。"
   ],
   [
    "Not every school can change its schedule, but teenagers can still protect their sleep.",
    "並不是每所學校都能調整時間，但青少年仍然可以保護自己的睡眠。"
   ],
   [
    "Keeping phones out of the bedroom and following a regular schedule, even on weekends, can make a real difference.",
    "不把手機帶進臥室、維持規律的作息，即使週末也一樣，就能帶來實際的改變。"
   ],
   [
    "Sleep is not a reward for finishing your work; it is part of how your brain does its work.",
    "睡眠不是做完功課的獎勵，而是大腦完成工作的一部分。"
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
   "3": "slp"
  },
  "heads": {
   "0": "A Biological Mismatch",
   "1": "The Costs of Sleep Debt",
   "2": "Evidence from Seattle",
   "3": "Limits of the Solution",
   "4": "Rethinking the School Day"
  },
  "sents": [
   [
    "Adolescent sleep habits are often dismissed as a matter of poor discipline, but research in chronobiology tells a more complicated story.",
    "青少年的睡眠習慣常被認為只是缺乏自律，但時間生物學的研究呈現了一個更複雜的故事。"
   ],
   [
    "At puberty, the circadian rhythm undergoes a delay: the nightly release of melatonin shifts later, so that many teenagers do not feel sleepy until well after 10 or 11 p.m.",
    "進入青春期後，晝夜節律會往後延遲：每晚分泌褪黑激素的時間變晚，讓許多青少年要到晚上 10 點或 11 點過後許久才會覺得想睡。"
   ],
   [
    "Since the time they fall asleep is largely set by biology while the time they wake up is set by school schedules, many students are caught in a chronic mismatch.",
    "由於入睡時間主要由生理決定，起床時間卻由學校作息決定，許多學生因此陷入長期的錯位之中。"
   ],
   [
    "The consequences extend well beyond drowsiness.",
    "其後果遠不只是想睡而已。"
   ],
   [
    "Sleep plays a central role in memory consolidation, the process by which newly acquired information is stabilized and integrated with existing knowledge.",
    "睡眠在「記憶鞏固」中扮演核心角色；記憶鞏固是指把新學到的資訊穩定下來，並與既有知識整合的過程。"
   ],
   [
    "Chronic sleep loss has also been associated with impaired attention, greater emotional volatility, and an increased risk of accidents, and researchers describe the habit of sleeping in on weekends to recover as a form of \"social jet lag.\"",
    "長期睡眠不足也和注意力受損、情緒更不穩定以及意外風險增加有關；研究者把週末補眠的習慣形容為一種「社交時差」。"
   ],
   [
    "A natural experiment in Seattle provided unusually concrete evidence.",
    "西雅圖的一項自然實驗提供了格外具體的證據。"
   ],
   [
    "When the city's school district delayed high school start times from 7:50 to 8:45 a.m., researchers at the University of Washington compared sophomores before and after the change using wrist-worn activity monitors.",
    "當西雅圖學區把高中上學時間從早上 7:50 延後到 8:45 時，華盛頓大學的研究人員用戴在手腕上的活動監測器，比較改變前後的高二學生。"
   ],
   [
    "Median sleep rose by 34 minutes, from about 6 hours 50 minutes to 7 hours 24 minutes, and median grades in a biology course increased by 4.5 percent, while attendance improved at a school in a low-income neighborhood.",
    "睡眠時間的中位數增加了 34 分鐘，從約 6 小時 50 分鐘增加到 7 小時 24 分鐘；生物課成績的中位數提高了 4.5%，而一所位於低收入社區的學校出勤率也有所改善。"
   ],
   [
    "The study also revealed the limits of the intervention.",
    "這項研究也揭示了這種措施的局限。"
   ],
   [
    "Students' bedtimes barely changed, which confirms the biological basis of their schedules, but it also means that even after the delay they still slept less than the recommended eight to ten hours.",
    "學生的就寢時間幾乎沒有改變，這證實了他們作息的生理基礎；但這也意味著，即使延後上學，他們的睡眠仍少於建議的 8 到 10 小時。"
   ],
   [
    "Later start times also create practical challenges for transportation, after-school activities, and working parents.",
    "延後上學也會在交通、課後活動和雙薪家長方面帶來實際的挑戰。"
   ],
   [
    "Nonetheless, the findings challenge an assumption built into many school systems, namely that early mornings reward diligence.",
    "儘管如此，這些發現挑戰了許多學校制度中隱含的一個假設：早起代表勤奮。"
   ],
   [
    "As one of the researchers put it, asking a teenager to be alert at 7:30 a.m. is like asking an adult to be fully alert at 5:30 a.m.",
    "正如其中一位研究者所說，要求青少年在早上 7:30 保持清醒，就像要求大人在清晨 5:30 完全清醒一樣。"
   ],
   [
    "Respecting adolescent biology may turn out to be one of the simplest ways to support learning.",
    "尊重青少年的生理特性，或許會是支持學習最簡單的方法之一。"
   ]
  ]
 }
];
const GLOSS = {"asleep": ["adj.", "睡著的"], "midnight": ["n.", "午夜"], "fault": ["n.", "錯；過失"], "teenager": ["n.", "青少年"], "clock": ["n.", "時鐘"], "release": ["v.", "釋放；分泌"], "melatonin": ["n.", "褪黑激素"], "hormone": ["n.", "荷爾蒙"], "sleepy": ["adj.", "想睡的"], "waste": ["v.", "浪費"], "wasted": ["adj.", "浪費的"], "sort": ["v.", "整理；分類"], "attention": ["n.", "注意力"], "grumpy": ["adj.", "脾氣暴躁的"], "grade": ["n.", "成績"], "weekend": ["n.", "週末"], "complain": ["v.", "抱怨"], "biology": ["n.", "生物學；生理"], "puberty": ["n.", "青春期"], "internal": ["adj.", "內部的"], "circadian": ["adj.", "晝夜節律的"], "rhythm": ["n.", "節奏；節律"], "shift": ["v.", "移動；改變"], "expert": ["n.", "專家"], "recommend": ["v.", "建議"], "strengthen": ["v.", "強化"], "concentrate": ["v.", "專心"], "risk": ["n.", "風險"], "district": ["n.", "學區；區域"], "monitor": ["n.", "監測器"], "average": ["n./adj.", "平均"], "schedule": ["n.", "作息；時間表"], "reward": ["n.", "獎勵"], "adolescent": ["adj./n.", "青少年（的）"], "dismiss": ["v.", "不予理會；看輕"], "chronobiology": ["n.", "時間生物學"], "undergo": ["v.", "經歷"], "delay": ["n./v.", "延遲"], "chronic": ["adj.", "長期的"], "mismatch": ["n.", "不相配；錯位"], "drowsiness": ["n.", "睏倦"], "consolidation": ["n.", "鞏固"], "acquire": ["v.", "獲得"], "integrate": ["v.", "整合"], "impaired": ["adj.", "受損的"], "volatility": ["n.", "不穩定"], "median": ["n./adj.", "中位數（的）"], "attendance": ["n.", "出勤；出席"], "intervention": ["n.", "介入措施"], "barely": ["adv.", "幾乎沒有"], "transportation": ["n.", "交通"], "diligence": ["n.", "勤奮"], "alert": ["adj.", "清醒的；警覺的"]};
const KEY = [["asleep", "midnight", "fault", "teenager", "hormone", "sleepy", "attention", "grumpy", "weekend"], ["biology", "puberty", "internal", "rhythm", "expert", "recommend", "concentrate", "district", "schedule"], ["adolescent", "dismiss", "chronic", "mismatch", "drowsiness", "consolidation", "impaired", "intervention", "barely", "diligence"]];
const FIGS = {"slp": {"svg": "<svg viewBox=\"0 0 600 298\" role=\"img\" aria-label=\"Seattle school start time and sleep\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#F6F7FD\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#3B4CA8\">Sleep in Seattle: Starting School Later</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >西雅圖的實驗：晚一點上學</text>\n<rect x=\"460\" y=\"58\" width=\"80\" height=\"150\" fill=\"#DDF3E9\"/>\n<text x=\"500\" y=\"74\" font-size=\"12\" font-weight=\"900\" fill=\"#17875C\" text-anchor=\"middle\">Teens need</text>\n<text x=\"500\" y=\"90\" font-size=\"12\" font-weight=\"900\" fill=\"#17875C\" text-anchor=\"middle\">8–10 hrs</text><text x=\"500.0\" y=\"104\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >青少年需要</text>\n<text x=\"130\" y=\"129\" font-size=\"13\" font-weight=\"700\" text-anchor=\"end\">School at 7:50</text><text x=\"130\" y=\"144\" font-size=\"10\" text-anchor=\"end\" fill=\"#5A6478\" >7:50 上學</text><rect x=\"140\" y=\"112\" width=\"273\" height=\"28\" rx=\"6\" fill=\"#8C96A8\"/><text x=\"405\" y=\"131\" font-size=\"13\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"end\">6 h 50 m</text><text x=\"130\" y=\"179\" font-size=\"13\" font-weight=\"700\" text-anchor=\"end\">School at 8:45</text><text x=\"130\" y=\"194\" font-size=\"10\" text-anchor=\"end\" fill=\"#5A6478\" >8:45 上學</text><rect x=\"140\" y=\"162\" width=\"296\" height=\"28\" rx=\"6\" fill=\"#3B4CA8\"/><text x=\"428\" y=\"181\" font-size=\"13\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"end\">7 h 24 m</text>\n<line x1=\"140\" y1=\"208\" x2=\"540\" y2=\"208\" stroke=\"#1A2238\" stroke-width=\"2\"/>\n<g font-size=\"11\" text-anchor=\"middle\"><text x=\"140\" y=\"224\">0</text><text x=\"300\" y=\"224\">4 hrs</text><text x=\"460\" y=\"224\">8 hrs</text><text x=\"540\" y=\"224\">10</text></g>\n<rect x=\"60\" y=\"238\" width=\"480\" height=\"46\" rx=\"23\" fill=\"#E8EBF8\"/>\n<text x=\"300\" y=\"258\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\">+34 minutes of sleep, and grades went up 4.5%.</text><text x=\"300\" y=\"275\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >每晚多睡 34 分鐘，成績進步 4.5%</text></g></svg>", "cap": "西雅圖把上學時間延後 55 分鐘後，學生每晚多睡了 34 分鐘，但仍少於建議的 8～10 小時。", "credit": "圖解：Winglish（資料：Dunster et al., 2018）"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to buy a good alarm clock",
   "Why teenagers have trouble sleeping early and why sleep matters",
   "Why Seattle is a rainy city",
   "How to study all night"
  ],
  "a": 1,
  "exp": "全文說明青春期生理時鐘後移、睡眠對學習的重要，以及西雅圖延後上學的實驗。"
 },
 {
  "q": "2. Why do many teenagers not feel sleepy until late at night?",
  "tag": "細節",
  "opts": [
   "Because they drink too much water",
   "Because their brains release melatonin later",
   "Because they are lazy",
   "Because school starts late"
  ],
  "a": 1,
  "exp": "青春期時，大腦分泌褪黑激素的時間變晚，所以比較晚才想睡。"
 },
 {
  "q": "3. What happened after Seattle schools started later?",
  "tag": "細節",
  "opts": [
   "Students slept less",
   "Students slept more and got better grades",
   "Students stopped going to school",
   "Nothing changed"
  ],
  "a": 1,
  "exp": "上學時間延後後，學生每晚多睡 34 分鐘，生物課成績進步 4.5%。"
 }
];
const META = {
 "title": "Why Teens Need More Sleep",
 "category": "心理學",
 "dek": "晚上睡不著、早上爬不起來，不全是因為愛熬夜。青春期的生理時鐘真的會往後移，而睡飽一點，成績也可能跟著進步。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1541697030313-c55aac74fbae?auto=format&fit=crop&w=1600&q=70\" data-local=\"sleep-hero.jpg\" alt=\"A black alarm clock with ringing bells\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#FFF1DC\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">🧠</text></svg><figcaption>對青少年來說，一大早的鬧鐘特別難熬。<span class=\"credit\">Photo: Julian Hochgesang / Unsplash</span></figcaption>",
 "fact": "研究西雅圖實驗的生物學家說：要青少年早上 7 點半就精神飽滿，就像要求大人清晨 5 點半就上班、而且要表現得很清醒一樣。",
 "next": {
  "title": "When Spirits Come Home",
  "href": "read.html#spirits"
 },
 "id": "sleep",
 "date": "2026/11/1"
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
