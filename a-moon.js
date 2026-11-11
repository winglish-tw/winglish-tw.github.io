/* winglish.tw 閱讀館文章資料：The Moon Is Running Away */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1],[2,3,4],[5,6,7],[8,9,10,11]], figs:{1:"laser"}, heads:{1:"Mirrors on the Moon",2:"Why Is It Moving Away?",3:"Shorter Days Long Ago"},
   sents:[
    ["The moon looks the same every night, but it is slowly moving away from us.","月亮每天晚上看起來都一樣，但它正慢慢地離我們遠去。"],
    ["Every year, it moves about 3.8 centimeters farther from Earth.","每一年，它都離地球遠了大約 3.8 公分。"],
    ["How do scientists know this?","科學家是怎麼知道的呢？"],
    ["In 1969, astronauts left special mirrors on the moon.","1969 年，太空人在月球上留下了特別的鏡子。"],
    ["Today, scientists shoot laser light at the mirrors and time how long the light takes to come back.","現在，科學家向這些鏡子發射雷射光，計算光要多久才會反射回來。"],
    ["The moon pulls on Earth's oceans and makes tides.","月亮會拉動地球的海水，造成潮汐。"],
    ["The tides slow down Earth's spin a little bit.","潮汐讓地球的自轉慢下來一點點。"],
    ["As Earth slows down, the moon slowly moves farther away.","隨著地球轉得越來越慢，月亮也慢慢地越離越遠。"],
    ["Because Earth spins more slowly now, our days are getting a little longer.","因為地球現在轉得比較慢，我們的一天也變得稍微長了一點。"],
    ["About 70 million years ago, when dinosaurs were alive, a day was only about 23 and a half hours long.","大約七千萬年前，恐龍還活著的時候，一天只有大約 23 個半小時。"],
    ["Scientists learned this from the lines on an old shell, just like the rings in a tree.","科學家是從一個古老貝殼上的紋路得知的，就像樹的年輪一樣。"],
    ["Don't worry, though. The moon will not leave us any time soon!","不過別擔心，月亮短時間內不會離開我們的！"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12,13]], figs:{1:"laser"}, heads:{1:"A Mirror Left Behind",2:"The Tug of the Tides",3:"Clues in an Ancient Shell"},
   sents:[
    ["The moon may look as if it never changes, but it is quietly drifting away from Earth.","月亮看起來好像從來不會變，但它正悄悄地遠離地球。"],
    ["Each year, it moves about 3.8 centimeters farther away, roughly the speed at which your fingernails grow.","它每年遠離大約 3.8 公分，差不多是指甲生長的速度。"],
    ["We know this thanks to a few small mirrors left on the moon by Apollo astronauts.","我們之所以知道，要感謝阿波羅太空人留在月球上的幾片小鏡子。"],
    ["In 1969, the crew of Apollo 11 placed a panel of special reflectors on the lunar surface, and later missions added more.","1969 年，阿波羅 11 號的太空人在月球表面放了一塊特殊的反射板，之後的任務又加放了幾塊。"],
    ["Scientists on Earth fire laser beams at these mirrors and measure how long the light takes to bounce back, usually about two and a half seconds.","地球上的科學家向這些鏡子發射雷射光束，測量光反彈回來要多久，通常大約兩秒半。"],
    ["From that time, they can calculate the distance between Earth and the moon with amazing accuracy.","從這段時間，他們就能以驚人的精準度算出地球和月亮之間的距離。"],
    ["The reason the moon is drifting away has to do with the ocean tides.","月亮會漸漸遠離，原因和海洋的潮汐有關。"],
    ["The moon's gravity pulls on Earth's oceans, creating bulges of water that rise and fall as Earth spins.","月亮的引力拉著地球的海水，形成隆起的水團，隨著地球自轉而漲落。"],
    ["The friction between this moving water and the seafloor acts like a brake, gradually slowing Earth's rotation.","流動的海水和海床之間的摩擦力就像煞車一樣，讓地球的自轉逐漸變慢。"],
    ["As Earth loses some of its spin, the moon gains energy and moves into a slightly wider orbit.","地球失去一些轉動的能量，月亮則獲得能量，移到稍微大一點的軌道上。"],
    ["A slower Earth also means longer days.","地球轉得比較慢，也就代表一天變得比較長。"],
    ["In 2020, scientists studied a 70-million-year-old fossil shell whose daily growth lines showed that a year back then had 372 days.","2020 年，科學家研究一個七千萬年前的貝殼化石，它每天長出的紋路顯示，當時一年有 372 天。"],
    ["Since the length of a year has not changed, each day must have lasted only about 23.5 hours.","因為一年的長度沒有改變，所以當時每一天一定只有大約 23.5 小時。"],
    ["So if you ever wish you had more hours in a day, just wait a few million years.","所以如果你希望一天能多幾個小時，只要再等個幾百萬年就好了。"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1],[2,3,4],[5,6,7],[8,9,10],[11,12]], figs:{1:"laser"}, heads:{1:"Bouncing Light off the Moon",2:"A Cosmic Brake",3:"A Calendar in Stone",4:"A Slowly Changing Sky"},
   sents:[
    ["To the naked eye, the moon seems to be among the most constant features of the night sky, yet it is gradually retreating from us.","用肉眼看，月亮似乎是夜空中最恆久不變的存在之一，然而它正逐漸離我們遠去。"],
    ["Precise measurements show that it recedes by roughly 3.8 centimeters a year, a pace often compared to the growth of human fingernails.","精確的測量顯示，它每年後退大約 3.8 公分，這個速度常被拿來和人類指甲的生長相比。"],
    ["This figure is no guess; it comes from lunar laser ranging, an experiment that began when the Apollo 11 astronauts deployed an array of reflectors on the lunar surface in 1969.","這個數字不是猜的；它來自「月球雷射測距」，這項實驗始於 1969 年阿波羅 11 號太空人在月球表面架設的一組反射器。"],
    ["Observatories on Earth fire laser pulses at these mirrors, and although only a tiny fraction of the light ever returns, the round-trip travel time of about two and a half seconds reveals the distance with an accuracy of a few millimeters.","地球上的天文台向這些鏡子發射雷射脈衝；雖然只有極小一部分的光會回來，但大約兩秒半的往返時間，就能讓距離精準到幾公釐以內。"],
    ["Remarkably, the reflectors are still in use more than half a century later.","值得注意的是，半個多世紀後，這些反射器仍在使用中。"],
    ["The culprit behind the moon's retreat is the very phenomenon it creates on Earth: the tides.","讓月亮後退的「元凶」，正是它自己在地球上造成的現象：潮汐。"],
    ["The moon's gravity raises bulges in the oceans, and because Earth rotates faster than the moon orbits, these bulges are dragged slightly ahead of the moon, tugging it forward while tidal friction gradually brakes Earth's spin.","月亮的引力讓海洋隆起；因為地球自轉比月亮公轉快，這些隆起被拖到月亮稍微前方的位置，把月亮往前拉，同時潮汐摩擦也逐漸減慢地球的自轉。"],
    ["In effect, rotational energy is transferred from Earth to the moon, lengthening our days by roughly two milliseconds per century and nudging the moon into an ever-wider orbit.","實際上，轉動的能量從地球轉移到了月亮，讓我們的一天每一百年大約變長兩毫秒，也把月亮推向越來越大的軌道。"],
    ["Evidence of this slowdown is preserved in the fossil record.","這種變慢的證據保存在化石紀錄中。"],
    ["In 2020, a team led by geochemist Niels de Winter analyzed the shell of an extinct rudist clam that lived about 70 million years ago, when dinosaurs still roamed the planet.","2020 年，由地球化學家尼爾斯．德溫特帶領的團隊，分析了一種已滅絕的厚殼蛤的殼；它生活在大約七千萬年前，那時恐龍還在地球上漫步。"],
    ["By counting its daily growth layers with the help of lasers, they concluded that a year then contained 372 days, each lasting roughly 23.5 hours.","他們藉助雷射計算它每天長出的生長層，得出結論：當時一年有 372 天，每天大約 23.5 小時。"],
    ["The process will not stop: as the moon continues to drift away, it will eventually appear too small to cover the sun entirely, bringing an end to total solar eclipses.","這個過程不會停止：隨著月亮繼續遠離，它終究會看起來太小，無法完全遮住太陽，日全食也將就此消失。"],
    ["Fortunately, that day lies hundreds of millions of years in the future, so there is still plenty of time to enjoy the view.","幸好那一天還在好幾億年之後，所以我們還有很多時間可以欣賞這片景色。"]
 ]}
];

const GLOSS = {
  moon:["n.","月亮"], slowly:["adv.","慢慢地"], centimeter:["n.","公分"], farther:["adv.","更遠地"], scientist:["n.","科學家"],
  astronaut:["n.","太空人"], mirror:["n.","鏡子"], shoot:["v.","發射"], laser:["n.","雷射"], pull:["v.","拉"], ocean:["n.","海洋"],
  tide:["n.","潮汐"], spin:["n.","旋轉；自轉"], dinosaur:["n.","恐龍"], shell:["n.","貝殼"], ring:["n.","環；年輪"], worry:["v.","擔心"],
  quietly:["adv.","悄悄地"], drift:["v.","漂移；漸漸遠離"], fingernail:["n.","指甲"], crew:["n.","全體組員"], panel:["n.","板"],
  reflector:["n.","反射器"], lunar:["adj.","月球的"], mission:["n.","任務"], fire:["v.","發射"], beam:["n.","光束"],
  measure:["v.","測量"], bounce:["v.","反彈"], calculate:["v.","計算"], distance:["n.","距離"], amazing:["adj.","驚人的"],
  accuracy:["n.","精準度"], gravity:["n.","引力；重力"], bulge:["n.","隆起；凸出"], rise:["v.","上升"], friction:["n.","摩擦力"],
  seafloor:["n.","海床"], brake:["n.","煞車；v. 減慢"], gradually:["adv.","逐漸地"], rotation:["n.","自轉"], energy:["n.","能量"],
  slightly:["adv.","稍微"], orbit:["n.","軌道；v. 繞軌道運行"], fossil:["n.","化石"], daily:["adj.","每天的"], growth:["n.","生長"],
  length:["n.","長度"], last:["v.","持續"], naked:["adj.","naked eye 肉眼"], constant:["adj.","恆定不變的"], feature:["n.","特徵；景物"],
  retreat:["v.","後退；n. 後退"], precise:["adj.","精確的"], measurement:["n.","測量"], recede:["v.","後退；遠離"], pace:["n.","速度；步調"],
  compare:["v.","比較"], figure:["n.","數字"], ranging:["n.","測距"], experiment:["n.","實驗"], deploy:["v.","部署；架設"],
  array:["n.","一組；陣列"], observatory:["n.","天文台"], pulse:["n.","脈衝"], tiny:["adj.","極小的"], fraction:["n.","一小部分"],
  reveal:["v.","揭示"], millimeter:["n.","公釐"], remarkably:["adv.","值得注意地"], century:["n.","世紀；一百年"],
  culprit:["n.","罪魁禍首；元凶"], phenomenon:["n.","現象"], rotate:["v.","自轉"], dragged:["v.","drag（拖）的過去分詞"],
  drag:["v.","拖"], ahead:["adv.","在前面"], tugging:["v.","tug（用力拉）的 -ing 形"], tug:["v.","用力拉；n. 拉扯"],
  tidal:["adj.","潮汐的"], effect:["n.","in effect 實際上"], rotational:["adj.","轉動的"], transfer:["v.","轉移"],
  lengthen:["v.","使變長"], millisecond:["n.","毫秒"], nudge:["v.","輕推"], evidence:["n.","證據"], slowdown:["n.","減慢"],
  preserve:["v.","保存"], record:["n.","紀錄"], geochemist:["n.","地球化學家"], analyze:["v.","分析"], extinct:["adj.","滅絕的"],
  rudist:["n.","厚殼蛤（已滅絕的雙殼貝類）"], clam:["n.","蛤蜊"], roam:["v.","漫遊；四處走動"], planet:["n.","行星"],
  layer:["n.","層"], conclude:["v.","得出結論"], contain:["v.","包含"], process:["n.","過程"], eventually:["adv.","終究；最後"],
  entirely:["adv.","完全地"], solar:["adj.","太陽的"], eclipse:["n.","（日、月）蝕；total solar eclipse 日全食"],
  fortunately:["adv.","幸好"], plenty:["n.","大量；plenty of 很多的"], guess:["n.","猜測"], cosmic:["adj.","宇宙的"]
};
const KEY = [["slowly","astronaut","mirror","laser","ocean","tide","spin","dinosaur"],
             ["drift","fingernail","reflector","lunar","bounce","calculate","accuracy","gravity","bulge","friction","rotation","fossil"],
             ["recede","pace","deploy","array","pulse","fraction","culprit","tidal","transfer","nudge","preserve","extinct","eclipse"]];

const DEFS = {
  "slowly": "at a low speed; not quickly",
  "astronaut": "a person who travels into space",
  "mirror": "a piece of special glass that reflects light and images",
  "laser": "a strong narrow beam of light",
  "ocean": "the very large area of salt water that covers most of the earth",
  "tide": "the regular rise and fall of the sea, caused by the moon",
  "spin": "the act of turning around and around",
  "dinosaur": "a large reptile that lived millions of years ago",
  "drift": "to move slowly, especially farther away",
  "fingernail": "the hard layer that covers the end of each finger",
  "reflector": "an object that sends back light that hits it",
  "lunar": "connected with the moon",
  "bounce": "to come back after hitting a surface",
  "calculate": "to find an answer by using numbers",
  "accuracy": "the quality of being exact and correct",
  "gravity": "the force that pulls things toward each other or toward the earth",
  "bulge": "a part that curves outward or sticks out",
  "friction": "the force that slows things down when they rub against each other",
  "rotation": "the act of turning around a center point",
  "fossil": "the remains of an animal or plant from long ago, preserved in rock",
  "recede": "to move back or farther away",
  "pace": "the speed at which something happens",
  "deploy": "to put something in position so it is ready to be used",
  "array": "a group of similar things arranged together",
  "pulse": "a short burst of energy, light or sound",
  "fraction": "a very small part of something",
  "culprit": "the person or thing responsible for a problem",
  "tidal": "connected with the tides of the sea",
  "transfer": "to move something from one place or thing to another",
  "nudge": "to push something gently",
  "preserve": "to keep something in its original state",
  "extinct": "no longer existing, because every member of the species has died",
  "eclipse": "a time when the moon blocks the sun's light, or the earth blocks light to the moon"
};

const FIGS = {
  laser:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="Measuring the distance to the Moon with lasers" style="display:block;width:100%;height:auto;border-radius:6px;background:#141B33">
<g font-family="Noto Sans TC,sans-serif" fill="#fff">
<text x="300" y="28" font-size="18" font-weight="900" text-anchor="middle" fill="#FFE14D">How Do We Measure the Moon's Distance?</text><text x="300" y="46" font-size="12" text-anchor="middle" fill="#B9C2D8">怎麼量地球到月亮的距離？</text>
<g fill="#fff" opacity=".5"><circle cx="40" cy="70" r="1.4"/><circle cx="150" cy="250" r="1.2"/><circle cx="260" cy="80" r="1"/><circle cx="420" cy="260" r="1.4"/><circle cx="560" cy="80" r="1.2"/><circle cx="330" cy="275" r="1"/></g>
<circle cx="95" cy="160" r="58" fill="#2F7FC1"/><path d="M60 128 c14 -10 30 -6 34 6 c4 12 -10 16 -6 28 c3 10 -8 18 -20 12 c-12 -6 -18 -28 -8 -46Z" fill="#3FA96B"/><path d="M104 176 c12 -8 30 -4 34 8 c3 12 -8 24 -22 22 c-12 -2 -20 -20 -12 -30Z" fill="#3FA96B"/><path d="M110 110 c10 2 18 8 16 14 c-6 2 -14 -2 -16 -14Z" fill="#3FA96B"/>
<text x="95" y="244" font-size="14" font-weight="700" text-anchor="middle">Earth</text><text x="95" y="259" font-size="10" text-anchor="middle" fill="#B9C2D8">地球</text>
<circle cx="510" cy="160" r="26" fill="#C9CCD3"/><circle cx="500" cy="150" r="5" fill="#A9ADB8"/><circle cx="518" cy="170" r="4" fill="#A9ADB8"/><circle cx="514" cy="148" r="2.5" fill="#A9ADB8"/>
<rect x="481" y="153" width="7" height="12" rx="1" fill="#FFE14D"/>
<text x="510" y="208" font-size="14" font-weight="700" text-anchor="middle">Moon</text><text x="510" y="223" font-size="10" text-anchor="middle" fill="#B9C2D8">月亮</text>
<text x="452" y="122" font-size="10" text-anchor="end" fill="#FFE14D">mirror 鏡子 ▸</text>
<path d="M153 150 C260 146 380 152 480 156" fill="none" stroke="#FF5A6E" stroke-width="2.5" stroke-dasharray="7 5"/><path d="M480 164 C380 168 260 172 153 170" fill="none" stroke="#FF5A6E" stroke-width="2.5" stroke-dasharray="7 5" opacity=".7"/>
<path d="M470 151 l12 5 l-12 5" fill="none" stroke="#FF5A6E" stroke-width="2.5" stroke-linejoin="round"/><path d="M164 165 l-12 5 l12 5" fill="none" stroke="#FF5A6E" stroke-width="2.5" stroke-linejoin="round" opacity=".7"/>
<text x="315" y="126" font-size="14" font-weight="700" text-anchor="middle">Laser goes out and comes back</text><text x="315" y="141" font-size="10" text-anchor="middle" fill="#B9C2D8">雷射光射出去、再反彈回來</text>
<text x="315" y="196" font-size="14" font-weight="700" text-anchor="middle" fill="#FFE14D">Round trip ≈ 2.5 seconds</text><text x="315" y="211" font-size="10" text-anchor="middle" fill="#B9C2D8">來回大約 2.5 秒</text>
<text x="315" y="250" font-size="13" text-anchor="middle">Distance ≈ 384,400 km</text><text x="315" y="265" font-size="10" text-anchor="middle" fill="#B9C2D8">平均距離約 38 萬 4 千公里</text>
<path d="M540 160 q14 0 26 0" fill="none" stroke="#7CE0B5" stroke-width="2.5" stroke-linecap="round"/><path d="M560 154 l7 6 l-7 6" fill="none" stroke="#7CE0B5" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
<text x="556" y="250" font-size="12" font-weight="700" text-anchor="middle" fill="#7CE0B5">+3.8 cm a year</text><text x="556" y="265" font-size="10" text-anchor="middle" fill="#B9C2D8">每年遠離 3.8 公分</text>
</g>
</svg>`,
    cap:"科學家從地球向月球上的反射鏡發射雷射，量光來回的時間，就能算出距離；這樣量了五十多年，發現月亮每年遠離約 3.8 公分（圖中距離未依比例）。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {
   "q": "1. What is the passage mainly about?",
   "tag": "主旨",
   "opts": [
    "How astronauts trained for the moon",
    "The moon is slowly moving away from Earth.",
    "Why dinosaurs disappeared",
    "How to see the moon with a telescope"
   ],
   "a": 1,
   "exp": "全文說明月亮每年遠離地球約 3.8 公分，以及原因和證據，答案是 (B)。"
  },
  {
   "q": "2. How do scientists measure the distance to the moon?",
   "tag": "細節",
   "opts": [
    "By shooting laser light at mirrors on the moon",
    "By counting the stars around it",
    "By sending a rocket every year",
    "By looking at the tides"
   ],
   "a": 0,
   "exp": "第二段：科學家向月球上的鏡子發射雷射光，看光多久回來，答案是 (A)。"
  },
  {
   "q": "3. Which of the following is TRUE according to the passage?",
   "tag": "細節",
   "opts": [
    "The moon moves 3.8 meters away every year.",
    "The moon will leave Earth very soon.",
    "Astronauts left mirrors on the moon in 2019.",
    "A day was a little shorter when dinosaurs were alive."
   ],
   "a": 3,
   "exp": "(D) 正確（最後一段：當時一天約 23 個半小時）。(A) 錯，是 3.8 公分；(C) 錯，是 1969 年；(B) 錯，文章說短時間內不會離開。"
  }
 ],
 [
  {
   "q": "1. Which of the following is the best title for the passage?",
   "tag": "主旨",
   "opts": [
    "The Life of an Astronaut",
    "The Best Places to Find Fossils",
    "How to Grow Long Fingernails",
    "Why the Moon Is Slowly Drifting Away"
   ],
   "a": 3,
   "exp": "全文講月亮漸漸遠離地球：怎麼量到、為什麼、留下什麼證據，(D) 最適合。"
  },
  {
   "q": "2. Which of the following is TRUE according to the passage?",
   "tag": "細節",
   "opts": [
    "The laser light takes about ten seconds to come back.",
    "The Apollo 11 crew placed reflectors on the moon.",
    "Tides make Earth spin faster.",
    "A year had 365 days 70 million years ago."
   ],
   "a": 1,
   "exp": "(B) 正確（第二段）。(A) 錯，約兩秒半；(C) 錯，潮汐讓地球自轉變慢；(D) 錯，當時一年有 372 天。"
  },
  {
   "q": "3. What slows down Earth's rotation?",
   "tag": "因果",
   "opts": [
    "Laser beams from observatories",
    "Friction between the moving ocean water and the seafloor",
    "The heat of the sun",
    "Dinosaurs walking on the ground"
   ],
   "a": 1,
   "exp": "第三段：流動的海水和海床之間的摩擦力像煞車一樣，讓地球自轉變慢，答案是 (B)。"
  },
  {
   "q": "4. Why does the writer say \"just wait a few million years\" at the end?",
   "tag": "推論",
   "opts": [
    "Because days are slowly getting longer",
    "Because the moon will come back",
    "Because fossils take time to form",
    "Because lasers will become faster"
   ],
   "a": 0,
   "exp": "地球轉得越來越慢，一天會慢慢變長，所以作者開玩笑說等幾百萬年一天就會多一點時間，答案是 (A)。"
  }
 ],
 [
  {
   "q": "1. What is the main purpose of the passage?",
   "tag": "作者用意",
   "opts": [
    "To teach readers how to use a laser",
    "To argue that the Apollo missions were a waste of money",
    "To describe how rudist clams lived",
    "To explain how we know the moon is receding, why it happens, and what it means"
   ],
   "a": 3,
   "exp": "文章依序說明測量方法（雷射測距）、原因（潮汐）、證據（化石）和未來影響（日全食消失），答案是 (D)。"
  },
  {
   "q": "2. The word \"culprit\" in the third paragraph is closest in meaning to ______.",
   "tag": "字義",
   "opts": [
    "victim",
    "cause",
    "witness",
    "solution"
   ],
   "a": 1,
   "exp": "後面接著說明是潮汐造成月亮後退，culprit 原指「罪魁禍首」，這裡指造成問題的「原因」，答案是 (B)。"
  },
  {
   "q": "3. According to the passage, how do the tidal bulges affect the moon?",
   "tag": "因果",
   "opts": [
    "They pull the moon forward, giving it energy to move into a wider orbit.",
    "They push the moon closer to Earth.",
    "They stop the moon from rotating.",
    "They make the moon look bigger."
   ],
   "a": 0,
   "exp": "第三段：隆起被拖到月亮前方，把月亮往前拉；能量從地球轉移到月亮，讓它進入更大的軌道，答案是 (A)。"
  },
  {
   "q": "4. What did the study of the rudist clam show?",
   "tag": "細節",
   "opts": [
    "Dinosaurs ate clams every day.",
    "The moon was once much farther away.",
    "A year once had 372 days of about 23.5 hours each.",
    "Clams can live for 70 million years."
   ],
   "a": 2,
   "exp": "第四段：研究團隊數貝殼每天的生長層，得出當時一年有 372 天、每天約 23.5 小時，答案是 (C)。"
  },
  {
   "q": "5. Which of the following is NOT true according to the passage?",
   "tag": "細節",
   "opts": [
    "Most of the laser light never returns to Earth.",
    "Earth's days are slowly getting longer.",
    "Total solar eclipses will eventually come to an end.",
    "The laser reflectors stopped working soon after 1969."
   ],
   "a": 3,
   "exp": "第二段說這些反射器半個多世紀後仍在使用，所以 (D) 不正確。其他三項文中都有提到。"
  }
 ]
];

const META = {
 id:"moon", title:"The Moon Is Running Away", category:"科學",
 dek:"月亮每年離地球遠 3.8 公分，大約是指甲長長的速度。科學家怎麼量出來的？恐龍時代的一天，又為什麼只有 23 個半小時？",
 date:"2026/11/8",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1628003222314-88aa10a0b51f?auto=format&fit=crop&w=1600&q=70" data-local="moon-hero.jpg" alt="A full moon in the night sky" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#141B33"/><g fill="#fff" opacity=".6"><circle cx="90" cy="80" r="2"/><circle cx="200" cy="300" r="1.5"/><circle cx="650" cy="90" r="2"/><circle cx="720" cy="320" r="1.5"/><circle cx="330" cy="60" r="1.2"/><circle cx="560" cy="360" r="1.2"/></g><circle cx="400" cy="210" r="120" fill="#E3E5EA"/><circle cx="360" cy="170" r="22" fill="#C9CCD3"/><circle cx="440" cy="250" r="30" fill="#C9CCD3"/><circle cx="450" cy="160" r="12" fill="#C9CCD3"/><circle cx="350" cy="260" r="10" fill="#C9CCD3"/></svg>
<figcaption>月亮看起來一成不變，其實每年都離我們遠一點點。<span class="credit">Photo: Rubén Bagüés / Unsplash</span></figcaption>`,
 fact:"月亮永遠用同一面對著地球，所以站在地球上的人，從來沒有直接看過月亮的背面！",
 next:{title:"The 85-Year Secret to Happiness", href:"read.html#happiness"}
};
const USAGE = {
  "slowly": ["walk slowly · slowly change · slowly but surely", "Turtles walk slowly but they live a long time.", "烏龜走得很慢，但活得很久。"],
  "astronaut": ["become an astronaut · astronauts in space · train astronauts", "She dreams of becoming an astronaut one day.", "她夢想有一天成為太空人。"],
  "mirror": ["look in the mirror · a full-length mirror · a mirror image", "He looked in the mirror and fixed his hair.", "他照鏡子整理頭髮。"],
  "laser": ["a laser beam · laser pointer · laser surgery", "The teacher used a laser pointer during the presentation.", "老師在簡報時用了雷射筆。"],
  "ocean": ["the Pacific Ocean · ocean waves · deep ocean", "Taiwan lies on the western edge of the Pacific Ocean.", "台灣位於太平洋的西緣。"],
  "tide": ["high tide · low tide · the tide comes in / goes out", "At low tide, you can walk out to the small island.", "退潮時，你可以走到那座小島上。"],
  "spin": ["the Earth's spin · spin around · go for a spin", "The dancer did a quick spin on one foot.", "舞者用單腳快速轉了一圈。"],
  "dinosaur": ["dinosaur bones · dinosaur fossils · a dinosaur museum", "Kids love the giant dinosaur bones at the museum.", "孩子們很喜歡博物館裡巨大的恐龍骨頭。"],
  "drift": ["drift away · drift apart · drift along", "After high school, my best friend and I slowly drifted apart.", "高中畢業後，我和最好的朋友漸漸疏遠了。"],
  "fingernail": ["cut one's fingernails · bite one's fingernails · long fingernails", "Stop biting your fingernails when you're nervous!", "別在緊張的時候咬指甲！"],
  "reflector": ["a bike reflector · a light reflector", "Put a reflector on your bike so drivers can see you at night.", "在腳踏車上裝反光片，晚上駕駛人才看得到你。"],
  "lunar": ["the lunar surface · Lunar New Year · lunar calendar", "Lunar New Year is the most important holiday in Taiwan.", "農曆新年是台灣最重要的節日。"],
  "bounce": ["bounce off · bounce a ball · bounce back", "The ball bounced off the wall and hit my head.", "球從牆上彈回來打到我的頭。"],
  "calculate": ["calculate the cost · calculate the distance · carefully calculate", "Use your phone to calculate the total cost.", "用你的手機算出總費用。"],
  "accuracy": ["with great accuracy · improve accuracy · the accuracy of …", "Weather apps can predict rain with great accuracy now.", "天氣應用程式現在能非常精準地預測下雨。"],
  "gravity": ["the force of gravity · zero gravity · the law of gravity", "In zero gravity, astronauts float around the spaceship.", "在無重力狀態下，太空人在太空船裡飄來飄去。"],
  "bulge": ["a bulge in … · bulge out", "There was a strange bulge in his jacket pocket.", "他的外套口袋有個奇怪的凸起。"],
  "friction": ["reduce friction · create friction · friction between A and B", "Oil reduces friction between the parts of a machine.", "油能減少機器零件之間的摩擦。"],
  "rotation": ["the Earth's rotation · crop rotation · in rotation", "The Earth's rotation gives us day and night.", "地球自轉帶給我們白天和黑夜。"],
  "fossil": ["fossil fuels · dinosaur fossils · find a fossil", "Coal and oil are fossil fuels.", "煤和石油是化石燃料。"],
  "recede": ["the water recedes · recede into the distance · a receding hairline", "After the flood, the water slowly receded.", "水災過後，水慢慢退去。"],
  "pace": ["at a slow pace · keep pace with · the pace of life", "The pace of life in the countryside is much slower.", "鄉下的生活步調慢得多。"],
  "deploy": ["deploy troops · deploy technology · deploy resources", "The city deployed extra police officers for the New Year's Eve party.", "市政府為跨年晚會部署了額外的警力。"],
  "array": ["an array of … · a wide array · solar array", "The night market offers a wide array of snacks.", "夜市提供各式各樣的小吃。"],
  "pulse": ["take sb's pulse · a pulse of light · a weak pulse", "The nurse took my pulse and blood pressure.", "護理師幫我量了脈搏和血壓。"],
  "fraction": ["a small fraction · a fraction of the price · only a fraction", "I bought this jacket for a fraction of its original price.", "我用原價的一小部分買到這件外套。"],
  "culprit": ["the real culprit · the chief culprit · find the culprit", "Wet towels were the culprit behind the bad smell in the room.", "濕毛巾是房間裡那股臭味的元兇。"],
  "tidal": ["tidal waves · tidal energy · tidal flats", "Tidal flats are home to many crabs and birds.", "潮間帶是許多螃蟹和鳥類的家。"],
  "transfer": ["transfer energy · transfer heat · transfer A to B", "Metal pans transfer heat quickly to the food.", "金屬鍋能很快把熱傳到食物上。"],
  "nudge": ["nudge sb · nudge sb toward(s) … · a gentle nudge", "My friend nudged me when the teacher called my name.", "老師叫到我的名字時，朋友用手肘輕推了我一下。"],
  "preserve": ["preserve food · preserve history · well preserved", "Salt was used to preserve fish before refrigerators existed.", "在冰箱發明前，人們用鹽保存魚。"],
  "extinct": ["become extinct · an extinct species · extinct volcano", "The dodo became extinct in the 1600s.", "渡渡鳥在十七世紀就滅絕了。"],
  "eclipse": ["a solar eclipse · a lunar eclipse · a total eclipse", "Never look directly at the sun during a solar eclipse.", "日蝕時千萬不要直視太陽。"]
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
