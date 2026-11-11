/* winglish.tw 閱讀館文章資料：Three Hearts and Blue Blood */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1],[2,3,4,5,6],[7,8,9],[10,11,12,13],[14]], figs:{1:"hearts",2:"photo"}, heads:{1:"Three Hearts and Blue Blood",2:"Smart Arms",3:"The Great Escape"},
   sents:[
    ["Octopuses are some of the strangest animals in the ocean.","章魚是海洋裡最奇特的動物之一。"],
    ["Some people even call them \"aliens of the sea.\"","有些人甚至叫牠們「海中外星人」。"],
    ["An octopus has three hearts, not one.","章魚有三顆心臟，不是一顆。"],
    ["Two hearts send blood to its gills, and the third heart sends blood to the rest of its body.","兩顆心臟把血液送到鰓，第三顆心臟把血液送到身體其他部位。"],
    ["Its blood is not red like ours, but blue.","牠的血不像我們是紅色的，而是藍色的。"],
    ["When an octopus swims, its main heart stops beating, so swimming makes it tired very quickly.","章魚游泳時，主要的那顆心臟會停止跳動，所以游泳會讓牠很快就累了。"],
    ["That is why octopuses usually crawl on the sea floor.","這就是為什麼章魚通常在海底爬行。"],
    ["An octopus has eight arms, and each arm can almost think on its own.","章魚有八隻手臂，每一隻幾乎都能自己思考。"],
    ["Its arms can also taste things just by touching them.","牠的手臂只要摸一摸，就能嚐出東西的味道。"],
    ["It can change its color in a second to hide from danger.","牠能在一秒內改變顏色，躲避危險。"],
    ["In 2016, people around the world heard about an octopus named Inky at an aquarium in New Zealand.","2016 年，全世界的人都聽說了紐西蘭一間水族館裡、一隻名叫 Inky 的章魚。"],
    ["One night, someone left the top of his tank a little open.","有一天晚上，有人沒把牠水箱的蓋子完全蓋好。"],
    ["Inky climbed out, moved across the floor, and went down a long pipe into the sea.","Inky 爬了出來，穿過地板，再順著一條長長的水管滑進大海。"],
    ["He was never seen again!","從此再也沒有人見過牠！"],
    ["With three hearts, blue blood and smart arms, the octopus is truly an amazing animal.","有三顆心臟、藍色的血和聰明的手臂，章魚真的是很神奇的動物。"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12,13,14],[15]], figs:{1:"hearts",2:"photo"}, heads:{1:"Three Hearts and Blue Blood",2:"Arms That Think and Taste",3:"Inky's Great Escape"},
   sents:[
    ["With eight flexible arms, no bones and eyes that seem to watch you closely, the octopus looks more like a creature from another planet than an animal from our own oceans.","有八隻柔軟的手臂、沒有骨頭，眼睛還好像一直盯著你看，章魚看起來比較像來自外星球的生物，而不像地球海洋裡的動物。"],
    ["In fact, the more scientists learn about its body, the stranger it seems.","事實上，科學家對牠的身體了解越多，就越覺得牠奇特。"],
    ["Unlike humans, an octopus has three hearts.","和人類不同，章魚有三顆心臟。"],
    ["Two of them pump blood through the gills, where it picks up oxygen, while the third pushes the blood around the rest of the body.","其中兩顆把血液打進鰓裡吸收氧氣，第三顆則把血液送往身體其他部位。"],
    ["The blood itself is blue because it carries oxygen with copper instead of iron.","血液本身是藍色的，因為它是用銅而不是鐵來攜帶氧氣。"],
    ["Surprisingly, the main heart stops beating when the octopus swims, which explains why it prefers crawling along the sea floor to swimming long distances.","令人驚訝的是，章魚游泳時主心臟會停止跳動，這說明了為什麼牠寧可沿著海底爬行，也不願長距離游泳。"],
    ["Even more remarkable is the way an octopus thinks.","更了不起的是章魚思考的方式。"],
    ["About two-thirds of its nerve cells are located in its arms rather than in its brain, so each arm can make simple decisions on its own.","牠大約三分之二的神經細胞不在大腦，而是在手臂裡，所以每隻手臂都能自己做簡單的決定。"],
    ["The suckers on its arms are covered with special cells that allow the octopus to taste whatever it touches.","牠手臂上的吸盤布滿了特殊的細胞，讓章魚能嚐出摸到的任何東西。"],
    ["On top of that, it can change the color and texture of its skin within seconds, blending perfectly into rocks or coral.","除此之外，牠能在幾秒內改變皮膚的顏色和質地，和岩石或珊瑚完美融為一體。"],
    ["Its intelligence was shown to the world in 2016, when news spread about an octopus named Inky at the National Aquarium of New Zealand.","2016 年，紐西蘭國家水族館一隻名叫 Inky 的章魚的新聞傳開，讓全世界見識到章魚的聰明。"],
    ["After the lid of his tank was accidentally left slightly open, Inky squeezed out, crossed the floor at night and slid down a 50-meter drainpipe that led straight to the ocean.","水箱的蓋子不小心沒蓋緊之後，Inky 擠了出來，趁夜穿過地板，再順著一條 50 公尺長、直通大海的排水管滑了下去。"],
    ["Wet tracks on the floor later showed exactly which way he had gone.","後來，地板上濕濕的痕跡清楚顯示了牠走的路線。"],
    ["Because an octopus has no bones, it can fit through surprisingly small spaces.","因為章魚沒有骨頭，牠能鑽過小得驚人的空間。"],
    ["The aquarium staff searched the pipes, but they never found him.","水族館的員工搜查了水管，但再也沒找到牠。"],
    ["Clearly, an animal with three hearts and thinking arms still has plenty of surprises for us.","很顯然，這種有三顆心臟、手臂還會思考的動物，還有很多驚奇等著我們發現。"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1,2],[3,4,5,6],[7,8,9,10],[11,12,13,14,15],[16]], figs:{1:"hearts",2:"photo"}, heads:{1:"A Circulatory Puzzle",2:"A Mind Spread Across Eight Arms",3:"The Escape Artist"},
   sents:[
    ["If evolution had set out to design an alien, it might well have produced the octopus: a boneless, eight-armed creature whose intelligence developed along a path entirely separate from our own.","假如演化存心要設計一個外星人，它很可能就會造出章魚：一種沒有骨頭、有八隻手臂的生物，而牠的智慧沿著一條和我們完全不同的路發展出來。"],
    ["Few animals so thoroughly defy our assumptions about what a body, or a mind, ought to be.","很少有動物像牠這樣，徹底顛覆我們對身體、甚至心智「應該是什麼樣子」的假設。"],
    ["Indeed, the cephalopod researcher Martin Wells once described the octopus as an alien.","事實上，頭足類研究者馬丁．威爾斯就曾說過，章魚根本就是外星生物。"],
    ["Consider, first, its circulation.","首先，看看牠的血液循環。"],
    ["An octopus relies on three hearts: a pair of branchial hearts that drive blood through the gills, and a single systemic heart that dispatches the newly oxygenated blood to its organs and muscles.","章魚靠三顆心臟運作：一對鰓心把血液推過鰓，一顆體心則把剛充滿氧氣的血液送往器官和肌肉。"],
    ["That blood is tinted blue by hemocyanin, a copper-based protein that serves in place of the iron-rich hemoglobin flowing through human veins.","牠的血液被血藍蛋白染成藍色；這種含銅的蛋白質，取代了人類血管裡富含鐵的血紅素。"],
    ["Curiously, the systemic heart ceases to beat whenever the animal swims, a quirk that leaves it quickly exhausted and goes a long way toward explaining its preference for crawling.","奇妙的是，每當章魚游泳，體心就會停止跳動；這個怪癖讓牠很快就筋疲力盡，也大致說明了牠為什麼偏好爬行。"],
    ["Stranger still is the architecture of its nervous system.","更奇特的是牠神經系統的構造。"],
    ["Roughly two-thirds of an octopus's neurons reside not in its head but in its arms, granting each limb a striking degree of autonomy.","章魚大約三分之二的神經元不在頭部，而是在手臂裡，讓每隻手臂都有驚人的自主性。"],
    ["Researchers at Harvard University have found that its suckers are lined with receptors capable of detecting chemicals on contact, allowing an arm to taste a crab hidden in a crevice without waiting for instructions from the brain.","哈佛大學的研究人員發現，牠的吸盤上布滿能在接觸時偵測化學物質的受器，讓手臂不必等大腦下指令，就能先「嚐」到躲在石縫裡的螃蟹。"],
    ["Add to this an ability to alter the color and texture of its skin in a fraction of a second, and the octopus emerges as a master of disguise.","再加上牠能在一瞬間改變皮膚的顏色和質地，章魚可說是名副其實的偽裝大師。"],
    ["Such ingenuity occasionally spills over into mischief.","這樣的聰明才智，有時也會變成調皮搗蛋。"],
    ["In 2016, the National Aquarium of New Zealand revealed that Inky, one of its octopuses, had slipped through a gap left at the top of his tank, slithered across the floor under cover of darkness and vanished down a 50-meter drainpipe leading to the sea.","2016 年，紐西蘭國家水族館透露，館裡的章魚 Inky 從水箱頂端留下的縫隙溜出來，趁著夜色滑過地板，然後消失在一條通往大海、長 50 公尺的排水管裡。"],
    ["Wet tracks across the floor were the only clues he left behind.","地板上濕濕的痕跡，是牠唯一留下的線索。"],
    ["Lacking a skeleton, an octopus can squeeze through almost any opening larger than its hard beak, which makes it a notorious escape artist.","由於沒有骨骼，章魚幾乎只要遇到比牠堅硬的喙還大的開口就鑽得過去，因此是出了名的脫逃高手。"],
    ["Inky was never recaptured.","Inky 再也沒有被抓回來。"],
    ["Far from being a mere curiosity, the octopus compels us to reconsider whether intelligence must reside in a single, centralized brain at all.","章魚不只是令人好奇的奇特生物，牠更迫使我們重新思考：智慧是否一定得存在於單一、集中的大腦裡。"]
 ]}
];

const GLOSS = {
  octopus:["n.","章魚（複數 octopuses）"], strange:["adj.","奇特的"], alien:["n.","外星人"], heart:["n.","心臟"], blood:["n.","血液"],
  gill:["n.","鰓"], rest:["n.","其餘部分"], beat:["v.","（心臟）跳動"], tired:["adj.","疲累的"], crawl:["v.","爬行"],
  floor:["n.","地板；（海）底"], arm:["n.","手臂；（章魚的）腕"], taste:["v.","嚐味道"], touch:["v.","觸摸"], hide:["v.","躲藏"],
  danger:["n.","危險"], aquarium:["n.","水族館"], tank:["n.","水箱；水槽"], climb:["v.","爬"], pipe:["n.","管子"],
  amazing:["adj.","驚人的；神奇的"], truly:["adv.","真正地"],
  flexible:["adj.","柔軟的；有彈性的"], bone:["n.","骨頭"], creature:["n.","生物"], planet:["n.","行星"], unlike:["prep.","和…不同"],
  pump:["v.","用泵打；輸送"], oxygen:["n.","氧氣"], copper:["n.","銅"], iron:["n.","鐵"], surprisingly:["adv.","令人驚訝地"],
  prefer:["v.","prefer A to B 比較喜歡 A 而不是 B"], distance:["n.","距離"], remarkable:["adj.","非凡的；了不起的"], nerve:["n.","神經"],
  cell:["n.","細胞"], locate:["v.","位於"], decision:["n.","決定"], sucker:["n.","吸盤"], special:["adj.","特殊的"],
  texture:["n.","質地"], skin:["n.","皮膚"], blend:["v.","融合"], coral:["n.","珊瑚"], intelligence:["n.","智慧；聰明"],
  spread:["v.","散播"], lid:["n.","蓋子"], accidentally:["adv.","意外地"], squeeze:["v.","擠"], slide:["v.","滑"], slid:["v.","滑（slide 的過去式）"],
  drainpipe:["n.","排水管"], track:["n.","痕跡；足跡"], staff:["n.","員工"], search:["v.","搜尋"], plenty:["n.","plenty of 很多"],
  evolution:["n.","演化"], design:["v.","設計"], separate:["adj.","分開的；不同的"], thoroughly:["adv.","徹底地"], defy:["v.","違抗；顛覆"],
  assumption:["n.","假設"], cephalopod:["n.","頭足類動物"], circulation:["n.","血液循環"], rely:["v.","rely on 依賴"],
  branchial:["adj.","鰓的"], systemic:["adj.","（循環）體的；全身的"], dispatch:["v.","派送；送出"], oxygenated:["adj.","含氧的"],
  organ:["n.","器官"], muscle:["n.","肌肉"], tint:["v.","染上淡淡的顏色"], hemocyanin:["n.","血藍蛋白"], protein:["n.","蛋白質"],
  hemoglobin:["n.","血紅素"], vein:["n.","靜脈；血管"], curiously:["adv.","奇妙地"], cease:["v.","停止"], quirk:["n.","怪癖"],
  exhausted:["adj.","筋疲力盡的"], preference:["n.","偏好"], architecture:["n.","構造；結構"], nervous:["adj.","nervous system 神經系統"],
  neuron:["n.","神經元"], reside:["v.","存在於；居住"], grant:["v.","給予"], limb:["n.","肢體"], striking:["adj.","顯著的；驚人的"],
  autonomy:["n.","自主性"], lined:["adj.","布滿…的"], receptor:["n.","受器"], capable:["adj.","有能力的"], detect:["v.","偵測"],
  chemical:["n.","化學物質"], contact:["n.","接觸"], crevice:["n.","（岩石的）裂縫"], instruction:["n.","指令"], alter:["v.","改變"],
  fraction:["n.","一小部分；a fraction of a second 一瞬間"], emerge:["v.","出現；脫穎而出"], disguise:["n.","偽裝"], ingenuity:["n.","聰明才智；巧思"],
  occasionally:["adv.","偶爾"], mischief:["n.","調皮；惡作劇"], reveal:["v.","透露"], gap:["n.","縫隙"], slither:["v.","蜿蜒滑行"],
  darkness:["n.","黑暗"], vanish:["v.","消失"], clue:["n.","線索"], lack:["v.","缺少"], skeleton:["n.","骨骼"], beak:["n.","喙"],
  notorious:["adj.","惡名昭彰的；出了名的"], recapture:["v.","再次抓到"], mere:["adj.","僅僅的"], curiosity:["n.","奇物；好奇心"],
  compel:["v.","迫使"], reconsider:["v.","重新考慮"], centralized:["adj.","集中的"],
  inky:["n.","Inky（章魚的名字）"], zealand:["n.","New Zealand 紐西蘭"], harvard:["n.","哈佛（大學）"]
};
const KEY = [["octopus","heart","blood","gill","crawl","arm","taste","hide","danger","aquarium","tank","pipe"],
             ["flexible","creature","pump","oxygen","copper","prefer","remarkable","nerve","sucker","texture","blend","squeeze","drainpipe"],
             ["defy","assumption","branchial","systemic","dispatch","cease","quirk","reside","autonomy","receptor","crevice","ingenuity","mischief","notorious","compel"]];

const DEFS = {
  "octopus": "a sea animal with a soft body and eight long arms",
  "heart": "the organ in your chest that pumps blood around your body",
  "blood": "the red liquid that flows through the body",
  "gill": "the part of a fish or water animal's body that it uses to breathe",
  "crawl": "to move slowly on hands and knees or close to the ground",
  "arm": "one of the long parts of the body attached to the shoulder; one of an octopus's eight limbs",
  "taste": "to sense the flavor of something",
  "hide": "to put yourself where others cannot see or find you",
  "danger": "the possibility of harm or death",
  "aquarium": "a building where people can see fish and other water animals",
  "tank": "a large container for holding water or gas",
  "pipe": "a tube through which water or gas flows",
  "flexible": "able to bend easily without breaking",
  "creature": "a living thing, especially an animal",
  "pump": "to push liquid or gas through a system",
  "oxygen": "a gas in the air that people and animals need to live",
  "copper": "a reddish-brown metal",
  "prefer": "to like one thing more than another",
  "remarkable": "unusual or surprising in a way that deserves attention",
  "nerve": "a long thin fiber that carries messages between the brain and other parts of the body",
  "sucker": "a part of an animal's body that can stick to surfaces",
  "texture": "the way something feels when you touch it",
  "blend": "to mix in so well that it is hard to see",
  "squeeze": "to push into a small space",
  "drainpipe": "a pipe that carries rainwater away from a building",
  "defy": "to go against something; to show something is not true",
  "assumption": "something you believe is true without proof",
  "branchial": "connected with the gills",
  "systemic": "affecting the whole body",
  "dispatch": "to send something somewhere",
  "cease": "to stop",
  "quirk": "a strange habit or feature",
  "reside": "to be present or exist in something",
  "autonomy": "the ability to act or make decisions without being controlled",
  "receptor": "a nerve ending or cell that receives signals such as heat, light or chemicals",
  "crevice": "a narrow crack in rock or a wall",
  "ingenuity": "the ability to think of clever new ideas",
  "mischief": "behavior that causes small trouble, often for fun",
  "notorious": "famous for something bad",
  "compel": "to force someone to do something"
};

const FIGS = {
  hearts:{svg:`<svg viewBox="0 0 600 340" role="img" aria-label="Diagram of an octopus's three hearts" style="display:block;width:100%;height:auto;border-radius:6px;background:#EEF6FB">
<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1A2238"/></marker></defs>
<path d="M300 40 C380 40 420 100 410 170 C402 225 360 250 300 250 C240 250 198 225 190 170 C180 100 220 40 300 40Z" fill="#F4C9B8" stroke="#C9806A" stroke-width="3"/>
<g fill="none" stroke="#C9806A" stroke-width="12" stroke-linecap="round" opacity=".55"><path d="M220 235 q-40 40 -90 50"/><path d="M250 248 q-20 45 -60 70"/><path d="M350 248 q20 45 60 70"/><path d="M380 235 q40 40 90 50"/></g>
<ellipse cx="232" cy="150" rx="18" ry="46" fill="#B8D8C8" stroke="#5E9C80" stroke-width="2.5"/><ellipse cx="368" cy="150" rx="18" ry="46" fill="#B8D8C8" stroke="#5E9C80" stroke-width="2.5"/>
<g fill="#D23F57"><path d="M262 200 c-10 -12 -26 -2 -14 12 l14 12 14 -12 c12 -14 -4 -24 -14 -12Z"/><path d="M338 200 c-10 -12 -26 -2 -14 12 l14 12 14 -12 c12 -14 -4 -24 -14 -12Z"/></g>
<path d="M300 150 c-16 -20 -42 -4 -24 20 l24 22 24 -22 c18 -24 -8 -40 -24 -20Z" fill="#B0263C"/>
<g stroke="#1A2238" stroke-width="2" fill="none" marker-end="url(#ah)"><path d="M262 196 Q246 186 240 170"/><path d="M338 196 Q354 186 360 170"/><path d="M250 110 Q275 115 286 140"/><path d="M350 110 Q325 115 314 140"/><path d="M300 192 L300 228"/></g>
<g font-family="Noto Sans TC,sans-serif" font-size="15" fill="#1A2238">
<text x="20" y="146" font-weight="700">Gills</text><text x="20" y="162" font-size="11" text-anchor="start" fill="#5A6478" >鰓</text><path d="M66 142 H210" stroke="#5E9C80" stroke-width="1.5"/>
<text x="20" y="214" font-weight="700" fill="#D23F57">Branchial hearts ×2</text><text x="20" y="232" font-size="12">pump blood to the gills</text><text x="20" y="248" font-size="11" text-anchor="start" fill="#5A6478" >鰓心：把血打進鰓吸收氧氣</text><path d="M168 210 H246" stroke="#D23F57" stroke-width="1.5"/>
<text x="430" y="70" font-weight="700" fill="#B0263C">Systemic heart ×1</text><text x="430" y="88" font-size="12">pumps blood to the body</text><text x="430" y="104" font-size="12">stops while swimming</text><text x="430" y="120" font-size="11" text-anchor="start" fill="#5A6478" >體心：把血送到全身</text><text x="430" y="135" font-size="11" text-anchor="start" fill="#5A6478" >（游泳時會停止跳動）</text><path d="M428 82 Q360 96 322 152" stroke="#B0263C" stroke-width="1.5" fill="none"/>
<rect x="120" y="284" width="360" height="42" rx="10" fill="#EEF6FB" opacity=".92"/>
<text x="300" y="300" text-anchor="middle" font-size="13" font-weight="700">Copper in the blood (hemocyanin) makes it blue.</text><text x="300" y="318" font-size="11" text-anchor="middle" fill="#5A6478" >血液含銅（血藍蛋白），所以是藍色的</text></g>
</svg>`,
    cap:"章魚的三顆心臟：兩顆鰓心負責把血打進鰓，一顆體心負責把血送到全身。",
    credit:"圖解：winglish.tw"},
  photo:{src:"https://images.unsplash.com/photo-1561479639-747efc0d0bf2?auto=format&fit=crop&w=1400&q=70", local:"octopus-2.jpg", alt:"An octopus on the sea floor", fb:"（章魚在海底的照片）",
    cap:"章魚的每隻手臂上都有一排排吸盤，摸到東西就能「嚐」出味道。",
    credit:'Photo: NOAA / <a href="https://unsplash.com/photos/jLGcQB_CSns" target="_blank" rel="noopener">Unsplash</a>（公有領域）'}
};

const QUIZ = [
 [
  {
   "q": "1. What is the passage mainly about?",
   "tag": "主旨",
   "opts": [
    "How to catch an octopus",
    "Animals that live on land",
    "The strange and amazing body of the octopus",
    "How aquariums take care of fish"
   ],
   "a": 2,
   "exp": "文章介紹章魚三顆心、藍色血液、會思考的手臂等奇特之處，答案是 (C)。"
  },
  {
   "q": "2. Why do octopuses usually crawl instead of swim?",
   "tag": "因果",
   "opts": [
    "Their main heart stops beating when they swim, so they get tired quickly.",
    "They do not have any arms.",
    "The water is too cold.",
    "They are afraid of fish."
   ],
   "a": 0,
   "exp": "第二段：游泳時主要的心臟會停止跳動，很快就累，所以章魚通常在海底爬，答案是 (A)。"
  },
  {
   "q": "3. How did Inky escape?",
   "tag": "細節",
   "opts": [
    "A worker carried him to the ocean.",
    "He climbed out of his tank and went down a pipe into the sea.",
    "He jumped into a boat.",
    "He broke the glass of his tank."
   ],
   "a": 1,
   "exp": "第四段：水族箱蓋子沒關緊，Inky 爬出來、穿過地板，從一條長管子溜進大海，答案是 (B)。"
  }
 ],
 [
  {
   "q": "1. Which of the following is the best title for the passage?",
   "tag": "主旨",
   "opts": [
    "How to Build a Better Aquarium",
    "Why Fish Have Red Blood",
    "The Longest Pipes in New Zealand",
    "The Octopus: An Alien of Our Oceans"
   ],
   "a": 3,
   "exp": "全文講章魚種種「像外星生物」的特點，(D) 最適合。"
  },
  {
   "q": "2. Why is an octopus's blood blue?",
   "tag": "因果",
   "opts": [
    "It carries oxygen with copper instead of iron.",
    "It drinks a lot of seawater.",
    "It eats blue fish.",
    "It has no hearts."
   ],
   "a": 0,
   "exp": "第二段：章魚的血用銅而不是鐵來攜帶氧氣，所以是藍色的，答案是 (A)。"
  },
  {
   "q": "3. Which of the following is TRUE according to the passage?",
   "tag": "細節",
   "opts": [
    "An octopus has two hearts.",
    "An octopus can taste only with its mouth.",
    "About two-thirds of an octopus's nerve cells are in its arms.",
    "Inky was found a week after he escaped."
   ],
   "a": 2,
   "exp": "(C) 正確（第三段）。(A) 錯，有三顆心；(B) 錯，吸盤可以嚐味道；(D) 錯，從此沒找到他。"
  },
  {
   "q": "4. How could Inky fit through such a small space?",
   "tag": "推論",
   "opts": [
    "He was a very young octopus.",
    "An octopus has no bones.",
    "The pipe was very wide.",
    "He changed his color."
   ],
   "a": 1,
   "exp": "第四段：章魚沒有骨頭，可以擠過出奇小的空間，答案是 (B)。"
  }
 ],
 [
  {
   "q": "1. What point does the author make in the last sentence?",
   "tag": "主旨",
   "opts": [
    "Octopuses are smarter than humans.",
    "Aquariums should not keep octopuses.",
    "Octopuses are really aliens from space.",
    "The octopus makes us question whether intelligence must be centered in one brain."
   ],
   "a": 3,
   "exp": "最後一句：章魚迫使我們重新思考「智慧一定要集中在單一大腦嗎」，答案是 (D)。(C) 錯，「外星生物」只是比喻。"
  },
  {
   "q": "2. The word \"autonomy\" in the third paragraph is closest in meaning to ______.",
   "tag": "字義",
   "opts": [
    "the ability to act independently",
    "great physical strength",
    "a strong sense of taste",
    "the power to change color"
   ],
   "a": 0,
   "exp": "三分之二的神經元在手臂裡，讓每隻手臂有很高的 autonomy，後面舉例手臂不用等大腦指令就能嚐到螃蟹。autonomy ＝ 自主性，答案是 (A)。"
  },
  {
   "q": "3. What is the job of the branchial hearts?",
   "tag": "細節",
   "opts": [
    "Sending blood to the arms only",
    "Making the blood blue",
    "Pumping blood through the gills",
    "Helping the octopus swim faster"
   ],
   "a": 2,
   "exp": "第二段：兩顆鰓心（branchial hearts）負責把血送過鰓，答案是 (C)。把含氧血送到全身的是體心（systemic heart）。"
  },
  {
   "q": "4. What can be inferred from the example of an arm tasting a hidden crab?",
   "tag": "推論",
   "opts": [
    "An octopus's arms can respond without waiting for the brain.",
    "Crabs are an octopus's favorite food.",
    "Octopuses cannot see in dark places.",
    "The brain controls every movement of the arms."
   ],
   "a": 0,
   "exp": "手臂靠吸盤上的受器碰到就能嚐到味道，不用等大腦下指令，說明手臂能自主反應，答案是 (A)。(D) 和文意相反。"
  },
  {
   "q": "5. Which of the following is NOT true according to the passage?",
   "tag": "細節",
   "opts": [
    "Hemocyanin contains copper.",
    "An octopus's systemic heart beats faster when it swims.",
    "An octopus can squeeze through any opening larger than its beak.",
    "Inky left wet tracks on the floor."
   ],
   "a": 1,
   "exp": "第二段說體心在游泳時會「停止跳動」，不是跳得更快，所以 (B) 不正確。其他三項文中都有提到。"
  }
 ]
];

const META = {
 id:"octopus", title:"Three Hearts and Blue Blood", category:"動物冷知識",
 dek:"三顆心臟、藍色的血，手臂還會自己思考、用摸的就能嚐味道？認識海裡最像外星人的動物，還有一隻從水族館成功脫逃的章魚。",
 date:"2026/11/1",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1510637234398-d25c9570a0a0?auto=format&fit=crop&w=1600&q=70" data-local="octopus-hero.jpg" alt="A brown octopus camouflaged on the sea floor" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#1F5C8C"/><g fill="#fff" opacity=".3"><circle cx="90" cy="70" r="7"/><circle cx="110" cy="40" r="4"/><circle cx="680" cy="110" r="6"/><circle cx="700" cy="80" r="3"/></g><path d="M0 360 Q200 330 400 360 T800 352 V420 H0Z" fill="#E8D2A6"/>
<g fill="#D23F57"><ellipse cx="400" cy="170" rx="90" ry="80"/><path d="M330 220 q-50 60 -110 54 q50 -8 76 -66Z"/><path d="M356 236 q-20 70 -70 96 q34 -34 46 -96Z"/><path d="M390 244 q0 70 -22 104 q34 -30 42 -104Z"/><path d="M416 244 q20 70 46 100 q-8 -40 -26 -100Z"/><path d="M444 236 q40 60 92 80 q-40 -26 -66 -84Z"/><path d="M466 214 q56 46 112 40 q-52 -14 -92 -58Z"/></g>
<circle cx="370" cy="166" r="15" fill="#fff"/><circle cx="430" cy="166" r="15" fill="#fff"/><circle cx="373" cy="168" r="7" fill="#1A2238"/><circle cx="433" cy="168" r="7" fill="#1A2238"/></svg>
<figcaption>章魚能在一瞬間改變皮膚的顏色和質地，和海底的岩石融為一體。<span class="credit">Photo: Vlad Tchompalov / Unsplash</span></figcaption>`,
 fact:"章魚沒有骨頭，全身最硬的部分是嘴巴的「喙」。只要洞口比喙大，牠幾乎都鑽得過去，所以水族館都很怕章魚「越獄」！",
 next:{title:"A Hotel That Melts Every Spring", href:"read.html#icehotel"}
};
const USAGE = {
  "octopus": ["a giant octopus · octopus ink · grilled octopus", "We tried grilled octopus at a seafood market in Keelung.", "我們在基隆的海鮮市場吃了烤章魚。"],
  "heart": ["a healthy heart · heart rate · the heart pumps blood", "Exercise keeps your heart healthy.", "運動讓你的心臟保持健康。"],
  "blood": ["blood type · lose blood · donate blood", "What's your blood type?", "你是什麼血型？"],
  "gill": ["fish gills · breathe through gills", "Sharks must keep swimming to push water over their gills.", "鯊魚必須一直游，才能讓水流過鰓。"],
  "crawl": ["crawl on the floor · crawl into … · crawl slowly", "The baby is learning to crawl.", "寶寶正在學爬。"],
  "arm": ["an octopus's arm · break one's arm · arm in arm", "An octopus can open a jar with its arms.", "章魚可以用牠的腕打開罐子。"],
  "taste": ["taste good · taste sweet · taste the soup", "Can you taste the ginger in this soup?", "你嚐得出這碗湯裡的薑味嗎？"],
  "hide": ["hide from sb · hide behind … · hide one's feelings", "The children hid behind the door to surprise their mom.", "孩子們躲在門後面要給媽媽驚喜。"],
  "danger": ["in danger · out of danger · a sign of danger", "The doctor says the patient is now out of danger.", "醫生說病人現在已經脫離危險。"],
  "aquarium": ["a public aquarium · a home aquarium · visit an aquarium", "We saw sharks and jellyfish at the aquarium in Pingtung.", "我們在屏東的水族館看到鯊魚和水母。"],
  "tank": ["a fish tank · a water tank · a gas tank", "I clean my fish tank once a week.", "我每週清一次魚缸。"],
  "pipe": ["a water pipe · a broken pipe · through a pipe", "A broken pipe flooded the kitchen floor.", "一根破掉的水管讓廚房地板淹水了。"],
  "flexible": ["a flexible body · flexible hours · flexible plans", "My job has flexible hours, so I can pick up my kids after school.", "我的工作時間有彈性，所以能在放學後接孩子。"],
  "creature": ["a strange creature · sea creatures · living creatures", "The deep sea is full of strange creatures that glow in the dark.", "深海充滿在黑暗中發光的奇特生物。"],
  "pump": ["pump water · pump blood · pump air into …", "He pumped air into his bike tires.", "他幫腳踏車輪胎打氣。"],
  "oxygen": ["oxygen tank · a lack of oxygen · produce oxygen", "Trees produce the oxygen we need to breathe.", "樹木製造我們呼吸所需的氧氣。"],
  "copper": ["copper wire · copper pots · made of copper", "Electrical wires are usually made of copper.", "電線通常是用銅做的。"],
  "prefer": ["prefer A to B · prefer to do sth · much prefer", "I prefer tea to coffee.", "比起咖啡，我比較喜歡茶。"],
  "remarkable": ["remarkable for … · a remarkable woman · remarkably well", "The bridge is remarkable for its unusual design.", "這座橋以獨特的設計而引人注目。"],
  "nerve": ["nerve damage · a pinched nerve · nerve endings", "Our fingertips have many nerve endings, so they are very sensitive.", "我們的指尖有很多神經末梢，所以非常敏感。"],
  "sucker": ["suction cups / suckers · rows of suckers", "Each octopus arm has rows of suckers that can grip almost anything.", "章魚的每條腕上都有一排排吸盤，幾乎什麼都抓得住。"],
  "texture": ["a smooth texture · a rough texture · the texture of …", "I love the soft, chewy texture of mochi.", "我很喜歡麻糬軟 Q 的口感。"],
  "blend": ["blend in with … · blend into the background · blend A and B", "The lizard's skin helps it blend in with the leaves.", "蜥蜴的皮膚幫助牠融入樹葉之中。"],
  "squeeze": ["squeeze through … · squeeze into … · squeeze a lemon", "Five of us squeezed into the back of the taxi.", "我們五個人擠進計程車的後座。"],
  "drainpipe": ["a blocked drainpipe · climb down a drainpipe", "Leaves blocked the drainpipe, and water overflowed onto the roof.", "落葉塞住排水管，水溢到屋頂上。"],
  "defy": ["defy gravity · defy expectations · defy description", "The acrobats seemed to defy gravity as they flew through the air.", "特技演員在空中飛躍，彷彿違抗了地心引力。"],
  "assumption": ["make an assumption · on the assumption that … · a basic assumption", "Don't make assumptions about people based on their looks.", "不要以外表對人妄下假設。"],
  "branchial": ["branchial hearts · branchial arteries", "The two branchial hearts push blood through the octopus's gills.", "兩顆鰓心把血液送過章魚的鰓。"],
  "systemic": ["systemic heart · a systemic problem · systemic change", "Bullying in schools is a systemic problem, not just a few bad kids.", "校園霸凌是體制性的問題，不只是幾個壞孩子而已。"],
  "dispatch": ["dispatch a team · dispatch goods · be dispatched to …", "Rescue teams were dispatched to the flooded villages.", "救援隊被派往淹水的村莊。"],
  "cease": ["cease to exist · cease fire · cease operations", "The old factory ceased operations in 2010.", "那間老工廠在二〇一〇年停止營運。"],
  "quirk": ["a strange quirk · personality quirks · a quirk of fate", "One of my cat's quirks is that she only drinks from the bathroom sink.", "我家貓的怪癖之一是只喝浴室洗手台的水。"],
  "reside": ["reside in … · power resides in … · reside abroad", "Many Taiwanese people reside abroad but still vote at home.", "許多台灣人旅居海外，但仍回國投票。"],
  "autonomy": ["personal autonomy · a degree of autonomy · local autonomy", "Teenagers want more autonomy to make their own choices.", "青少年希望有更多自主權來做自己的選擇。"],
  "receptor": ["taste receptors · smell receptors · receptors in the skin", "Dogs have about 300 million smell receptors in their noses.", "狗的鼻子大約有三億個嗅覺受器。"],
  "crevice": ["a narrow crevice · hide in a crevice · cracks and crevices", "A small crab hid in a crevice between the rocks.", "一隻小螃蟹躲在岩石之間的裂縫裡。"],
  "ingenuity": ["human ingenuity · show ingenuity · with great ingenuity", "The students showed great ingenuity in building a robot from old parts.", "學生們用舊零件組出機器人，展現了驚人的巧思。"],
  "mischief": ["get into mischief · make mischief · full of mischief", "The puppy is full of mischief and chews everything.", "那隻小狗非常調皮，什麼都咬。"],
  "notorious": ["notorious for … · a notorious criminal · notoriously difficult", "This road is notorious for traffic jams.", "這條路以塞車出名。"],
  "compel": ["compel sb to do sth · feel compelled to … · be compelled by law", "Heavy rain compelled the organizers to cancel the concert.", "大雨迫使主辦單位取消演唱會。"]
};


/* 導讀模式＋單字小練習 */
const GUIDE = [[{"after": 1, "q": "Why do octopuses usually crawl instead of swim?", "opts": ["Their main heart stops beating when they swim.", "They have no arms.", "The water is too cold."], "a": 0, "hint": "看 When an octopus swims, its main heart stops beating, so…"}, {"after": 2, "q": "What can an octopus's arms do?", "opts": ["Taste things just by touching them", "See in the dark", "Make sounds"], "a": 0, "hint": "看 Its arms can also ____ things just by touching them。"}, {"after": 3, "q": "How did Inky leave the aquarium?", "opts": ["He went down a long pipe into the sea.", "A worker carried him out.", "He swam through a window."], "a": 0, "hint": "看 went down a long ____ into the sea。"}], [{"after": 1, "q": "Why is octopus blood blue?", "opts": ["It carries oxygen with copper instead of iron.", "It has no oxygen.", "The ocean water colors it."], "a": 0, "hint": "看 because it carries oxygen with ____ instead of iron。"}, {"after": 2, "q": "Where are about two-thirds of an octopus's nerve cells?", "opts": ["In its arms", "In its brain", "In its hearts"], "a": 0, "hint": "看 About two-thirds of its nerve cells are located in its…"}, {"after": 3, "q": "How did the staff know which way Inky went?", "opts": ["Wet tracks on the floor", "A camera video", "Another octopus showed them"], "a": 0, "hint": "找 ____ tracks on the floor later showed…"}], [{"after": 1, "q": "What gives octopus blood its blue color?", "opts": ["Hemocyanin, a copper-based protein", "Hemoglobin, an iron-rich protein", "Sea water"], "a": 0, "hint": "看 That blood is tinted blue by…"}, {"after": 2, "q": "What can an octopus arm do without instructions from the brain?", "opts": ["Taste a crab hidden in a crevice", "Change how fast its hearts beat", "Swim long distances"], "a": 0, "hint": "看 allowing an arm to taste a crab…"}, {"after": 3, "q": "Why is the octopus a notorious escape artist?", "opts": ["With no skeleton, it can squeeze through tiny openings.", "It can break glass with its beak.", "It can breathe air for days."], "a": 0, "hint": "看 Lacking a skeleton, an octopus can squeeze through…"}]];
const VPRAC = [[{"s": "Babies learn to ____ before they can walk.", "opts": ["crawl", "hide", "taste", "pipe"], "a": 0, "w": "crawl"}, {"s": "We saw sharks and turtles at the ____.", "opts": ["aquarium", "pipe", "gill", "danger"], "a": 0, "w": "aquarium"}, {"s": "The kids like to ____ under the bed when they play.", "opts": ["hide", "crawl", "taste", "pipe"], "a": 0, "w": "hide"}, {"s": "The sign says, \"____! Do not swim here.\"", "opts": ["Danger", "Aquarium", "Octopus", "Pipe"], "a": 0, "w": "danger"}, {"s": "Water is leaking from a broken ____ under the sink.", "opts": ["pipe", "heart", "gill", "arm"], "a": 0, "w": "pipe"}], [{"s": "Do you ____ tea or coffee?", "opts": ["prefer", "pump", "squeeze", "blend"], "a": 0, "w": "prefer"}, {"s": "____ some lemon juice onto the fish.", "opts": ["Squeeze", "Pump", "Prefer", "Blend"], "a": 0, "w": "squeeze"}, {"s": "Yoga helps keep your body ____.", "opts": ["flexible", "remarkable", "copper", "creature"], "a": 0, "w": "flexible"}, {"s": "Fish need ____ in the water to breathe.", "opts": ["oxygen", "copper", "texture", "nerve"], "a": 0, "w": "oxygen"}, {"s": "This blanket has a soft, fluffy ____.", "opts": ["texture", "creature", "oxygen", "nerve"], "a": 0, "w": "texture"}], [{"s": "The factory will ____ production at the end of the year.", "opts": ["cease", "reside", "defy", "compel"], "a": 0, "w": "cease"}, {"s": "This street is ____ for traffic jams at rush hour.", "opts": ["notorious", "systemic", "branchial", "ingenuity"], "a": 0, "w": "notorious"}, {"s": "About two million people ____ in this city.", "opts": ["reside", "cease", "defy", "dispatch"], "a": 0, "w": "reside"}, {"s": "Don't make the ____ that everyone agrees with you.", "opts": ["assumption", "quirk", "autonomy", "crevice"], "a": 0, "w": "assumption"}, {"s": "The twins are always getting into ____.", "opts": ["mischief", "autonomy", "assumption", "ingenuity"], "a": 0, "w": "mischief"}]];
return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE,GUIDE,VPRAC});
})();
