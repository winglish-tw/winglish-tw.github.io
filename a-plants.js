/* Winglish 閱讀館文章資料：Can Plants Talk? */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0],[1,2,3,4],[5,6,7,8],[9,10,11]], figs:{2:"freq"}, heads:{1:"Listening to Thirsty Plants",2:"Sounds We Cannot Hear",3:"Helping Farmers"},
   sents:[
    ["Plants cannot walk or talk, but scientists have found that some of them make sounds!","植物不會走路也不會說話，但科學家發現有些植物會發出聲音！"],
    ["In 2023, a team at Tel Aviv University in Israel put tomato and tobacco plants in a quiet room with special microphones.","2023 年，以色列特拉維夫大學的一個團隊把番茄和菸草放在一間安靜的房間裡，用特殊的麥克風錄音。"],
    ["Some plants got enough water, but others did not get any water for several days.","有些植物有足夠的水，但另一些好幾天都沒有澆水。"],
    ["The scientists also cut the stems of some plants.","科學家也剪斷了一些植物的莖。"],
    ["Healthy plants were very quiet, but thirsty or hurt plants made dozens of small \"pop\" sounds every hour.","健康的植物非常安靜，但口渴或受傷的植物每小時會發出幾十個小小的「啵」聲。"],
    ["We cannot hear these sounds because they are too high for human ears.","我們聽不到這些聲音，因為對人類的耳朵來說太高了。"],
    ["But some animals, like bats and insects, may be able to hear them.","但有些動物，像是蝙蝠和昆蟲，可能聽得到。"],
    ["The scientists used a computer program to study the sounds.","科學家用電腦程式分析這些聲音。"],
    ["It could tell if a plant was thirsty or cut, and even if it was a tomato or a tobacco plant.","它能分辨植物是口渴還是被剪斷，甚至能分辨那是番茄還是菸草。"],
    ["Thirsty plants started making sounds before they looked dry.","口渴的植物在看起來乾枯之前，就開始發出聲音了。"],
    ["In the future, farmers might use microphones to know when their plants need water.","未來，農夫也許能用麥克風知道植物什麼時候需要水。"],
    ["Maybe a quiet garden is not so quiet after all!","也許安靜的花園其實一點也不安靜！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12,13]], figs:{2:"freq"}, heads:{1:"An Experiment in a Soundproof Box",2:"Too High for Human Ears",3:"What the Clicks Can Tell Us"},
   sents:[
    ["We usually think of plants as silent living things, but a study published in 2023 suggests that they may be far noisier than we ever imagined.","我們通常把植物想成安靜的生物，但一項 2023 年發表的研究顯示，它們可能比我們想像的吵得多。"],
    ["The only problem is that we cannot hear them.","唯一的問題是，我們聽不見。"],
    ["Researchers at Tel Aviv University in Israel placed tomato and tobacco plants inside a soundproof box and recorded them with ultrasonic microphones.","以色列特拉維夫大學的研究人員把番茄和菸草放進隔音箱裡，用超音波麥克風錄音。"],
    ["Some of the plants were well watered, some were left without water for several days, and others had their stems cut.","有些植物水分充足，有些好幾天沒澆水，還有一些的莖被剪斷。"],
    ["The results were striking: while healthy plants made less than one sound per hour, stressed plants produced dozens of clicking sounds every hour.","結果非常驚人：健康的植物每小時發出的聲音不到一次，受到壓力的植物每小時卻會發出幾十次喀喀聲。"],
    ["The researchers later repeated the experiment in a noisier greenhouse and got similar results.","研究人員後來在比較吵的溫室裡重做實驗，也得到類似的結果。"],
    ["These clicks are ultrasonic, at frequencies between 40 and 80 kilohertz, far above the highest sounds an adult human can hear.","這些喀喀聲是超音波，頻率在 40 到 80 千赫之間，遠高於成年人能聽到的最高音。"],
    ["Animals such as bats, mice and some insects, however, can hear sounds in this range, so they might be listening to plants all the time.","然而，蝙蝠、老鼠和某些昆蟲聽得到這個範圍的聲音，所以牠們可能一直在「聽」植物。"],
    ["Scientists think the sounds may be produced when tiny air bubbles form and burst inside the plant's water tubes.","科學家認為，這些聲音可能是植物輸水管裡的小氣泡形成又破裂時產生的。"],
    ["The team also recorded sounds from other plants, including corn, wheat and cactus.","研究團隊也錄到了其他植物的聲音，包括玉米、小麥和仙人掌。"],
    ["Using artificial intelligence, the team was able to tell whether a plant was dry or had been cut, and even which species it was, just by listening.","研究團隊用人工智慧，光靠聽就能判斷植物是缺水還是被剪斷，甚至能分辨是哪一種植物。"],
    ["Interestingly, thirsty plants began clicking before they showed any visible signs of drying out.","有趣的是，口渴的植物在外表還看不出乾枯之前，就開始發出喀喀聲了。"],
    ["This discovery could one day help farmers save water by watering crops only when the plants themselves \"ask\" for it.","這個發現將來也許能幫助農夫節省用水，只在植物自己「開口要」的時候才澆水。"],
    ["A field of flowers, it seems, may be a surprisingly noisy place.","看來，一片花田可能是個出奇吵鬧的地方。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4],[5,6,7],[8,9,10],[11,12,13]], figs:{2:"freq"}, heads:{1:"Eavesdropping on Distress",2:"Beyond the Range of Human Hearing",3:"Decoding the Message",4:"A Noisier World Than We Knew"},
   sents:[
    ["The notion that plants might \"speak\" has long been relegated to the realm of folklore and fringe science, invoked mainly by enthusiasts who murmur encouragement to their houseplants.","植物會「說話」這個想法，長久以來都被歸入民間傳說和邊緣科學的範疇，主要只有那些對著盆栽喃喃打氣的愛好者才會提起。"],
    ["In 2023, however, a team at Tel Aviv University published findings in the journal Cell that lent the idea unexpected scientific credibility.","然而在 2023 年，特拉維夫大學的一個團隊在《細胞》期刊發表研究，意外地讓這個想法獲得了科學上的可信度。"],
    ["Led by evolutionary biologist Lilach Hadany, the researchers placed tomato and tobacco plants in an acoustically isolated chamber and monitored them with ultrasonic microphones.","在演化生物學家莉拉赫．哈達尼的帶領下，研究人員把番茄和菸草放進隔音室，用超音波麥克風監測。"],
    ["Plants subjected to drought or to having their stems severed emitted a barrage of clicks, averaging several dozen per hour, whereas their unstressed counterparts remained almost entirely mute.","遭受乾旱或莖被切斷的植物發出一連串喀喀聲，平均每小時幾十次；沒有受到壓力的植物則幾乎完全無聲。"],
    ["Crucially, the sounds were airborne and detectable from more than a meter away, meaning that they could, in principle, be perceived by other organisms.","關鍵在於，這些聲音是經由空氣傳播的，在一公尺以外就偵測得到，這意味著原則上其他生物也能察覺。"],
    ["Pitched between 40 and 80 kilohertz, the emissions lie well beyond the upper limit of adult human hearing, which tapers off at around 16 kilohertz.","這些聲音的頻率介於 40 到 80 千赫，遠遠超出成年人聽力的上限；人耳大約到 16 千赫就逐漸聽不見了。"],
    ["Bats, rodents and moths, by contrast, are well equipped to register them, raising the tantalizing possibility that animals routinely eavesdrop on the condition of nearby vegetation.","相較之下，蝙蝠、齧齒動物和蛾都能清楚接收這些聲音，這帶來一個誘人的可能性：動物也許經常在「偷聽」附近植物的狀況。"],
    ["The likeliest mechanism is cavitation, the formation and collapse of air bubbles within the xylem, the vessels that carry water upward from the roots.","最可能的機制是「空蝕作用」，也就是木質部裡氣泡的形成與破裂；木質部是把水從根部往上輸送的管道。"],
    ["To test whether the clicks conveyed meaningful information, the team trained a machine-learning algorithm on the recordings.","為了測試這些喀喀聲是否傳達了有意義的資訊，團隊用錄音訓練了一套機器學習演算法。"],
    ["Remarkably, it could distinguish dehydrated plants from injured ones and identify the species involved, even amid the background noise of a working greenhouse.","值得注意的是，即使在運作中的溫室裡有背景噪音，它仍能分辨缺水和受傷的植物，並辨識出是哪個物種。"],
    ["Moreover, water-stressed plants began to click before exhibiting any visible symptoms of wilting, with emissions peaking after roughly five days without irrigation.","此外，缺水的植物在出現任何肉眼可見的枯萎症狀之前就開始發聲，而且在大約五天沒有灌溉後，發聲次數達到高峰。"],
    ["The implications extend well beyond the laboratory.","這項研究的影響遠遠超出實驗室。"],
    ["Acoustic sensors could someday alert farmers to thirsty crops, allowing for more precise irrigation at a time when water is increasingly scarce.","有朝一日，聲學感測器或許能提醒農夫哪些作物口渴了，讓灌溉更精準；在水資源日益稀少的時代，這格外重要。"],
    ["Whether plants themselves respond to one another's clicks remains an open question, but the study has already overturned a long-standing assumption: a seemingly tranquil field may, in fact, be alive with sound.","植物彼此之間是否會回應對方的喀喀聲，目前仍是未解之謎；但這項研究已經推翻了一個長久以來的假設：一片看似寧靜的田野，其實可能充滿聲音。"]
 ]}
];

const GLOSS = {
  plant:["n.","植物"], scientist:["n.","科學家"], sound:["n.","聲音"], tomato:["n.","番茄"], tobacco:["n.","菸草"], microphone:["n.","麥克風"],
  stem:["n.","莖"], healthy:["adj.","健康的"], thirsty:["adj.","口渴的"], hurt:["adj.","受傷的"], dozen:["n.","十二個；dozens of 幾十個"],
  human:["adj.","人類的"], bat:["n.","蝙蝠"], insect:["n.","昆蟲"], program:["n.","程式"], farmer:["n.","農夫"], future:["n.","未來"],
  garden:["n.","花園"], israel:["n.","以色列"], aviv:["n.","Tel Aviv 特拉維夫"], tel:["n.","Tel Aviv 特拉維夫"], university:["n.","大學"],
  silent:["adj.","安靜的；無聲的"], publish:["v.","發表"], noisy:["adj.","吵鬧的"], imagine:["v.","想像"], soundproof:["adj.","隔音的"],
  ultrasonic:["adj.","超音波的"], record:["v.","錄音；記錄"], result:["n.","結果"], striking:["adj.","驚人的；顯著的"], stressed:["adj.","受到壓力的"],
  click:["n.","喀嚓聲"], greenhouse:["n.","溫室"], similar:["adj.","類似的"], frequency:["n.","頻率"], kilohertz:["n.","千赫（kHz）"],
  adult:["n.","成年人"], range:["n.","範圍"], bubble:["n.","氣泡"], burst:["v.","破裂"], tube:["n.","管子"], wheat:["n.","小麥"],
  cactus:["n.","仙人掌"], artificial:["adj.","人工的；artificial intelligence 人工智慧"], intelligence:["n.","智慧"], species:["n.","物種"],
  visible:["adj.","看得見的"], discovery:["n.","發現"], crop:["n.","作物"], field:["n.","田野"],
  notion:["n.","想法；概念"], relegate:["v.","把…歸入（較低地位）"], realm:["n.","領域"], folklore:["n.","民間傳說"], fringe:["adj.","邊緣的"],
  invoke:["v.","提及；援引"], enthusiast:["n.","愛好者"], murmur:["v.","低語"], encouragement:["n.","鼓勵"], houseplant:["n.","室內盆栽"],
  journal:["n.","期刊"], credibility:["n.","可信度"], evolutionary:["adj.","演化的"], biologist:["n.","生物學家"], acoustically:["adv.","在聲學上"],
  isolated:["adj.","隔離的"], chamber:["n.","室；艙"], monitor:["v.","監測"], subject:["v.","be subjected to 遭受"], drought:["n.","乾旱"],
  sever:["v.","切斷"], emit:["v.","發出"], barrage:["n.","一連串；連珠砲"], counterpart:["n.","對應的人或物"], mute:["adj.","無聲的"],
  crucially:["adv.","關鍵地"], airborne:["adj.","經由空氣傳播的"], detectable:["adj.","可偵測的"], principle:["n.","in principle 原則上"],
  perceive:["v.","察覺"], organism:["n.","生物"], pitch:["v.","定（音高）"], emission:["n.","發出物；（聲音等的）發出"], taper:["v.","taper off 逐漸減少"],
  rodent:["n.","齧齒動物"], moth:["n.","蛾"], equip:["v.","be well equipped to 很有能力…"], register:["v.","察覺；接收"],
  tantalizing:["adj.","誘人的"], routinely:["adv.","經常地；例行地"], eavesdrop:["v.","偷聽"], vegetation:["n.","植物；植被"],
  mechanism:["n.","機制"], cavitation:["n.","空蝕作用（液體中氣泡形成與破裂）"], formation:["n.","形成"], collapse:["n.","崩塌；破裂"],
  xylem:["n.","木質部"], vessel:["n.","管；導管"], convey:["v.","傳達"], algorithm:["n.","演算法"], distinguish:["v.","分辨"],
  dehydrated:["adj.","脫水的"], injured:["adj.","受傷的"], identify:["v.","辨識"], amid:["prep.","在…之中"], exhibit:["v.","顯示出"],
  symptom:["n.","症狀"], wilt:["v.","枯萎"], peak:["v.","達到高峰"], irrigation:["n.","灌溉"], implication:["n.","影響；含意"],
  acoustic:["adj.","聲學的"], sensor:["n.","感測器"], alert:["v.","提醒；警告"], precise:["adj.","精準的"], scarce:["adj.","稀少的"],
  overturn:["v.","推翻"], assumption:["n.","假設"], seemingly:["adv.","看似"], tranquil:["adj.","寧靜的"], distress:["n.","痛苦；困境"]
};
const KEY = [["scientist","microphone","stem","healthy","thirsty","insect","program","farmer"],
             ["silent","publish","soundproof","ultrasonic","striking","stressed","greenhouse","frequency","bubble","species","visible","crop"],
             ["notion","relegate","folklore","credibility","drought","sever","barrage","airborne","perceive","eavesdrop","cavitation","distinguish","wilt","tranquil"]];

const FIGS = {
  freq:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="Who can hear plant sounds" style="display:block;width:100%;height:auto;border-radius:6px;background:#EEF7F1">
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238">
<text x="300" y="28" font-size="18" font-weight="900" text-anchor="middle" fill="#17875C">Who Can Hear Plant Sounds?</text><text x="300" y="46" font-size="12" text-anchor="middle" fill="#5A6478" >誰聽得到植物的聲音？</text>
<rect x="278" y="58" width="188" height="186" fill="#17875C" opacity=".08"/>
<line x1="90" y1="246" x2="560" y2="246" stroke="#1A2238" stroke-width="2"/>
<g font-size="12" text-anchor="middle"><text x="90" y="264">0</text><text x="184" y="264">20</text><text x="278" y="264">40</text><text x="372" y="264">60</text><text x="466" y="264">80</text><text x="560" y="264">100</text></g>
<text x="325" y="283" font-size="12" text-anchor="middle" font-weight="700">Frequency (kHz)</text><text x="325" y="297" font-size="10" text-anchor="middle" fill="#5A6478" >頻率（千赫）</text>
<g stroke="#1A2238" stroke-width="1"><line x1="184" y1="242" x2="184" y2="250"/><line x1="278" y1="242" x2="278" y2="250"/><line x1="372" y1="242" x2="372" y2="250"/><line x1="466" y1="242" x2="466" y2="250"/><line x1="560" y1="242" x2="560" y2="250"/></g>
<text x="80" y="84" font-size="14" font-weight="700" text-anchor="end">Humans</text><text x="80" y="98" font-size="10" text-anchor="end" fill="#5A6478" >人類</text><rect x="90" y="70" width="75" height="20" rx="6" fill="#9FC3DE"/><text x="172" y="85" font-size="12">below ~16 kHz 約 16 kHz 以下</text><text x="80" y="130" font-size="14" font-weight="700" text-anchor="end">Plants</text><text x="80" y="144" font-size="10" text-anchor="end" fill="#5A6478" >植物聲</text><rect x="278" y="116" width="188" height="20" rx="6" fill="#17875C"/><text x="372.0" y="131" font-size="12" text-anchor="middle" fill="#fff" font-weight="700">40–80 kHz</text><text x="80" y="176" font-size="14" font-weight="700" text-anchor="end">Mice</text><text x="80" y="190" font-size="10" text-anchor="end" fill="#5A6478" >老鼠</text><rect x="90" y="162" width="400" height="20" rx="6" fill="#E8B500"/><text x="80" y="222" font-size="14" font-weight="700" text-anchor="end">Bats</text><text x="80" y="236" font-size="10" text-anchor="end" fill="#5A6478" >蝙蝠</text><rect x="110" y="208" width="450" height="20" rx="6" fill="#D23F57"/>
</g>
</svg>`,
    cap:"植物的喀喀聲在 4 萬到 8 萬赫之間，人類完全聽不到，但老鼠、蝙蝠等動物聽得到（長條為大致範圍）。",
    credit:"圖解：Winglish"}
};

const QUIZ = [
  { q:"1. What is the passage mainly about?", tag:"主旨",
    opts:["How to grow tomatoes at home","A study showing that stressed plants make sounds","Why bats like to eat tomatoes","How microphones are made"],
    a:1, exp:"文章介紹 2023 年的研究：缺水或受傷的植物會發出人類聽不到的超音波喀喀聲，主旨是 (B)。"},
  { q:"2. Which of the following is TRUE?", tag:"細節",
    opts:["Humans can easily hear the sounds plants make.","Healthy plants made more sounds than thirsty plants.","A computer program could tell whether a plant was thirsty or cut.","The study used only cactus plants."],
    a:2, exp:"(C) 正確：電腦程式（人工智慧）能分辨植物是缺水還是被剪斷。(A) 聲音太高，人類聽不到；(B) 健康的植物幾乎不發聲；(D) 主要是番茄和菸草。"},
  { q:"3. How might this discovery help farmers?", tag:"推論",
    opts:["They could sell recordings of plant sounds.","They could know when their plants need water.","They could make plants grow faster with music.","They could keep insects away from crops."],
    a:1, exp:"口渴的植物在看起來乾枯之前就會發聲，所以未來農夫可以用麥克風或感測器知道什麼時候該澆水，答案是 (B)。"}
];

const META = {
 id:"plants", title:"Can Plants Talk?", category:"科學",
 dek:"番茄缺水的時候，真的會「喀喀」叫嗎？以色列科學家把植物放進隔音箱，錄到了人類耳朵聽不見的聲音。",
 date:"2026/11/1",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1584748129055-7128427c30f2?auto=format&fit=crop&w=1600&q=70" data-local="plants-hero.jpg" alt="Green leaves of a potted plant" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#DDF3E9"/><path d="M0 350 H800 V420 H0Z" fill="#8C5A2B"/><path d="M400 350 V170" stroke="#17875C" stroke-width="10" stroke-linecap="round"/><g fill="#17875C"><path d="M400 260 C330 260 280 220 270 170 C330 166 390 200 400 260Z"/><path d="M400 226 C470 226 520 186 534 136 C474 132 414 166 400 226Z"/><path d="M400 190 C376 150 380 110 404 80 C428 116 424 156 400 190Z"/></g><g fill="none" stroke="#1A2238" stroke-width="6" stroke-linecap="round" opacity=".7"><path d="M580 170 q24 34 0 68"/><path d="M620 146 q44 58 0 116"/><path d="M220 170 q-24 34 0 68"/><path d="M180 146 q-44 58 0 116"/></g></svg>
<figcaption>植物看起來安安靜靜，其實可能一直在發出我們聽不到的聲音。<span class="credit">Photo: Unsplash</span></figcaption>`,
 fact:"研究人員把植物的錄音放慢、降低音調後，聽起來就像有人在捏氣泡紙，啵、啵、啵！",
 next:{title:"The 85-Year Secret to Happiness", href:"read.html#happiness"}
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
