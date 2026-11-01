/* Winglish 閱讀館文章資料：The Biggest Food Fight on Earth */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1],[2,3,4,5,6],[7,8,9],[10,11,12,13],[14]], figs:{3:"rules"}, heads:{1:"A Small Town, a Big Party",2:"How It Started",3:"Rules of the Fight"},
   sents:[
    ["Have you ever had a food fight?","你打過食物大戰嗎？"],
    ["In Spain, there is a festival where thousands of people throw tomatoes at each other!","在西班牙，有一個節日是成千上萬的人互相丟番茄！"],
    ["It is called La Tomatina, and it happens in a small town named Bunol.","它叫做「番茄節」，在一個叫布尼奧爾的小鎮舉行。"],
    ["Every year, on the last Wednesday of August, the town's streets turn red.","每年八月的最後一個星期三，小鎮的街道就會變成紅色。"],
    ["Trucks bring more than 100 tons of very ripe tomatoes into the town.","卡車把一百多噸非常熟的番茄載進小鎮。"],
    ["The fight lasts for only one hour.","這場大戰只持續一個小時。"],
    ["Today, about 20,000 people join the fight, and most of them buy tickets.","現在大約有兩萬人參加，大部分的人都要買票。"],
    ["The festival began in 1945.","這個節日始於 1945 年。"],
    ["During a parade, some young people started fighting, and they grabbed tomatoes from a vegetable stand to throw.","遊行時，一些年輕人吵了起來，他們就從菜攤抓起番茄來丟。"],
    ["The next year, they came back with their own tomatoes, and a new tradition was born.","隔年，他們自己帶番茄回來，一個新的傳統就這樣誕生了。"],
    ["There are a few simple rules.","有幾條簡單的規則。"],
    ["You must squash a tomato before you throw it, so it won't hurt anyone.","丟番茄之前一定要先把它捏爛，這樣才不會傷到人。"],
    ["When you hear the second signal, you must stop throwing.","聽到第二聲信號，就一定要停止丟番茄。"],
    ["Afterward, fire trucks wash the streets, and the town is clean again in a few hours.","之後消防車會沖洗街道，幾個小時後小鎮又乾乾淨淨。"],
    ["Would you like to join the biggest food fight on Earth?","你想參加地球上最大的食物大戰嗎？"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12]], figs:{2:"rules"}, heads:{1:"From a Street Fight to a Festival",2:"One Hour of Red Chaos",3:"Keeping the Party Under Control"},
   sents:[
    ["Every year, on the last Wednesday of August, the quiet Spanish town of Bunol is transformed into a sea of red.","每年八月的最後一個星期三，安靜的西班牙小鎮布尼奧爾都會變成一片紅海。"],
    ["Thousands of visitors crowd its narrow streets for La Tomatina, often called the biggest food fight in the world.","成千上萬的遊客擠進它狹窄的街道參加番茄節，這個節日常被稱為全世界最大的食物大戰。"],
    ["Nobody knows exactly how it began, but the most popular story dates back to 1945.","沒有人確切知道它是怎麼開始的，但最流行的說法要追溯到 1945 年。"],
    ["During a local parade, a group of young people got into a fight and grabbed tomatoes from a nearby vegetable stand to use as weapons.","在一場地方遊行中，一群年輕人打了起來，就從附近的菜攤抓起番茄當武器。"],
    ["The fight was quickly stopped, but the following year the young people returned with tomatoes of their own.","這場打鬥很快就被制止，但隔年這些年輕人自己帶著番茄回來。"],
    ["Although the town tried to ban the event several times, it kept coming back, and in 2002 it was officially recognized as a festival of international tourist interest.","雖然小鎮好幾次試圖禁止這項活動，它還是一再回來，並在 2002 年被正式認定為「國際觀光節慶」。"],
    ["Traditionally, the fight begins after someone climbs a greasy pole to grab a ham tied to the top.","依照傳統，要等到有人爬上抹了油的竿子、抓到綁在頂端的火腿，大戰才會開始。"],
    ["Then trucks roll in, carrying well over 100 tons of overripe tomatoes that are not fit to eat.","接著卡車開進來，載著一百多噸過熟、不適合食用的番茄。"],
    ["For one hour, everyone throws, slips and laughs, until a second signal ends the battle.","整整一個小時，大家丟番茄、滑倒、大笑，直到第二聲信號結束這場戰鬥。"],
    ["Participants must squash the tomatoes before throwing them and are not allowed to tear other people's shirts.","參加者必須先把番茄捏爛再丟，而且不准撕扯別人的衣服。"],
    ["Because the crowds once grew to more than 40,000 people in a town of only about 9,000 residents, organizers started selling a limited number of tickets in 2013.","因為參加人潮曾經超過四萬人，而小鎮本身只有約九千名居民，主辦單位從 2013 年起開始限量售票。"],
    ["When the fight is over, fire trucks hose down the streets, and the acid in the tomatoes even leaves the stone cleaner than before.","大戰結束後，消防車沖洗街道，番茄裡的酸甚至讓石板路比原本更乾淨。"],
    ["For one day a year, playing with your food is not only allowed but encouraged.","一年中有那麼一天，玩食物不但被允許，還受到鼓勵。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12,13],[14]], figs:{2:"rules"}, heads:{1:"An Accidental Tradition",2:"Choreographed Chaos",3:"Taming a Global Phenomenon"},
   sents:[
    ["For sixty frenzied minutes each August, the otherwise unremarkable town of Bunol, some 40 kilometers inland from Valencia, becomes the stage for what is widely billed as the largest food fight on the planet.","每年八月，在那瘋狂的六十分鐘裡，距離瓦倫西亞內陸約 40 公里、平常毫不起眼的小鎮布尼奧爾，就成了號稱全球最大食物大戰的舞台。"],
    ["La Tomatina, held on the last Wednesday of the month, draws participants from every continent, all eager to pelt total strangers with overripe produce.","番茄節在八月的最後一個星期三舉行，吸引來自各大洲的參加者，人人都迫不及待要用過熟的蔬果砸向素昧平生的陌生人。"],
    ["Like many cherished customs, it appears to have originated by chance.","和許多備受珍視的習俗一樣，它似乎是偶然誕生的。"],
    ["According to the most widely circulated account, a scuffle broke out among young spectators at a 1945 parade, and the combatants seized the nearest ammunition available: tomatoes from a vegetable stall.","根據流傳最廣的說法，1945 年一場遊行中，年輕的觀眾之間爆發了扭打，雙方抓起手邊最近的「彈藥」：菜攤上的番茄。"],
    ["The skirmish was swiftly quelled, yet the participants reconvened the following year, this time bringing their own supply.","這場小衝突很快就被平息，然而隔年這些人又再度聚集，而且這次自備番茄。"],
    ["Periodic attempts by the authorities to prohibit the spectacle proved futile, and the event was eventually embraced, earning official recognition as a Fiesta of International Tourist Interest in 2002.","當局曾多次試圖禁止這場鬧劇，卻都徒勞無功；這項活動最後反而被接納，並在 2002 年正式獲認定為「國際觀光節慶」。"],
    ["Despite its anarchic appearance, the battle unfolds according to a surprisingly strict protocol.","儘管看起來一片混亂，這場戰役其實按照一套出奇嚴格的規範進行。"],
    ["Tradition dictates that hostilities commence only after someone scales a greased pole to retrieve a ham suspended at its summit, a feat that can take considerable time.","依照傳統，要等到有人爬上抹了油的竿子、拿下掛在頂端的火腿，戰鬥才會開始，而這可能要花上不少時間。"],
    ["Lorries then disgorge well over 100 tons of tomatoes, brought in from farms in another region of Spain and deemed unfit for consumption.","接著卡車傾倒出一百多噸的番茄，這些番茄是從西班牙其他地區的農場運來的，被認定不適合食用。"],
    ["Combatants are obliged to crush each tomato before hurling it, to refrain from tearing clothing, and to cease fire the instant a second signal sounds.","參戰者必須先把每顆番茄捏碎再丟、不得撕扯衣物，並在第二聲信號響起的瞬間停火。"],
    ["Success, however, brought problems of its own.","然而，成功也帶來了它自己的問題。"],
    ["By the early 2010s, crowds exceeding 40,000 were descending on a town of roughly 9,000 inhabitants, straining its infrastructure to the breaking point.","到了 2010 年代初期，超過四萬人的人潮湧入這座只有約九千名居民的小鎮，讓它的基礎設施不堪負荷。"],
    ["Since 2013, participation has been capped at around 20,000 ticket holders, with local residents taking part free of charge.","從 2013 年起，參加人數被限制在大約兩萬名持票者，當地居民則可免費參加。"],
    ["Once the final signal fades, fire engines sluice the streets, and the citric acid in the pulp leaves the cobblestones arguably cleaner than they were before the onslaught.","最後的信號一結束，消防車便沖刷街道，而番茄泥裡的檸檬酸，甚至讓石板路比遭受「攻擊」之前更乾淨。"],
    ["It is a rare spectacle in which mess and mayhem are not merely tolerated but celebrated.","這是一場罕見的奇觀，在這裡，髒亂和混亂不只是被容忍，更是被慶祝的。"]
 ]}
];

const GLOSS = {
  festival:["n.","節日；節慶"], thousand:["n.","千；thousands of 成千上萬的"], throw:["v.","丟；投擲"], tomato:["n.","番茄（複數 tomatoes）"],
  town:["n.","小鎮"], wednesday:["n.","星期三"], august:["n.","八月"], truck:["n.","卡車"], ton:["n.","噸"], ripe:["adj.","成熟的"],
  last:["v.","持續"], ticket:["n.","票"], parade:["n.","遊行"], grab:["v.","抓取"], stand:["n.","攤子"], tradition:["n.","傳統"],
  rule:["n.","規則"], squash:["v.","壓扁；捏爛"], signal:["n.","信號"], afterward:["adv.","之後"], spain:["n.","西班牙"], spanish:["adj.","西班牙的"],
  bunol:["n.","布尼奧爾（西班牙小鎮）"], tomatina:["n.","La Tomatina 番茄節"], valencia:["n.","瓦倫西亞（西班牙城市）"],
  transform:["v.","使轉變"], crowd:["v.","擠滿"], narrow:["adj.","狹窄的"], local:["adj.","當地的"], weapon:["n.","武器"],
  following:["adj.","接下來的"], ban:["v.","禁止"], officially:["adv.","正式地"], recognize:["v.","認可"], international:["adj.","國際的"],
  tourist:["adj.","觀光的"], traditionally:["adv.","按照傳統"], greasy:["adj.","油膩的"], pole:["n.","竿子"], ham:["n.","火腿"],
  overripe:["adj.","過熟的"], fit:["adj.","適合的"], slip:["v.","滑倒"], battle:["n.","戰鬥"], participant:["n.","參加者"],
  tear:["v.","撕扯"], resident:["n.","居民"], organizer:["n.","主辦者"], limited:["adj.","有限的"], hose:["v.","hose down 用水管沖洗"],
  acid:["n.","酸"], encourage:["v.","鼓勵"], chaos:["n.","混亂"],
  frenzied:["adj.","瘋狂的"], otherwise:["adv.","在其他方面；平常"], unremarkable:["adj.","不起眼的"], inland:["adv.","在內陸"],
  bill:["v.","宣傳為；號稱"], continent:["n.","大陸；洲"], eager:["adj.","渴望的"], pelt:["v.","連續投擲"], produce:["n.","農產品；蔬果"],
  cherished:["adj.","珍愛的"], originate:["v.","起源"], circulate:["v.","流傳"], account:["n.","說法；記述"], scuffle:["n.","扭打"],
  spectator:["n.","觀眾"], combatant:["n.","參戰者"], seize:["v.","抓住"], ammunition:["n.","彈藥"], stall:["n.","攤位"],
  skirmish:["n.","小衝突"], swiftly:["adv.","迅速地"], quell:["v.","平息；鎮壓"], reconvene:["v.","再次聚集"], periodic:["adj.","定期的；週期性的"],
  authority:["n.","the authorities 當局"], prohibit:["v.","禁止"], spectacle:["n.","奇觀；場面"], futile:["adj.","徒勞的"],
  embrace:["v.","接納；擁抱"], recognition:["n.","認可"], fiesta:["n.","（西班牙）節慶"], anarchic:["adj.","無秩序的；混亂的"],
  unfold:["v.","展開"], protocol:["n.","規範；禮儀"], dictate:["v.","規定"], hostility:["n.","敵對行為；（複數）戰鬥"], commence:["v.","開始"],
  scale:["v.","攀登"], greased:["adj.","塗了油的"], retrieve:["v.","取回"], suspend:["v.","懸掛"], summit:["n.","頂端"], feat:["n.","壯舉"],
  considerable:["adj.","相當多的"], lorry:["n.","卡車（英式）"], disgorge:["v.","傾倒出"], deem:["v.","認為"], consumption:["n.","食用；消費"],
  oblige:["v.","be obliged to 必須"], crush:["v.","壓碎"], hurl:["v.","用力投擲"], refrain:["v.","refrain from 克制不做"], cease:["v.","停止"],
  exceed:["v.","超過"], descend:["v.","descend on 湧入；突然造訪"], inhabitant:["n.","居民"], strain:["v.","使不堪負荷"], infrastructure:["n.","基礎設施"],
  cap:["v.","限制上限"], charge:["n.","free of charge 免費"], fade:["v.","逐漸消失"], sluice:["v.","沖洗"], citric:["adj.","citric acid 檸檬酸"],
  pulp:["n.","果肉；泥狀物"], cobblestone:["n.","鵝卵石；石板路"], arguably:["adv.","可說是"], onslaught:["n.","猛攻"], mayhem:["n.","大混亂"],
  merely:["adv.","僅僅"], tolerate:["v.","容忍"], phenomenon:["n.","現象"], tame:["v.","馴服；控制"], choreograph:["v.","編排"]
};
const KEY = [["festival","throw","truck","ripe","last","parade","grab","tradition","squash","signal"],
             ["transform","narrow","weapon","ban","recognize","greasy","overripe","participant","tear","resident","limited","encourage"],
             ["frenzied","pelt","originate","scuffle","ammunition","quell","futile","anarchic","protocol","commence","deem","refrain","infrastructure","mayhem"]];

const FIGS = {
  rules:{svg:`<svg viewBox="0 0 600 330" role="img" aria-label="The rules of La Tomatina" style="display:block;width:100%;height:auto;border-radius:6px;background:#FCE6EA">
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238" text-anchor="middle">
<text x="300" y="32" font-size="20" font-weight="900" fill="#B8322E">Rules of La Tomatina</text><text x="300" y="52" font-size="12" text-anchor="middle" fill="#5A6478" >番茄節的規則</text><g transform="translate(100,0)"><rect x="-84" y="64" width="168" height="206" rx="16" fill="#fff" stroke="#D23F57" stroke-width="3"/><circle cx="0" cy="122" r="34" fill="#D23F57"/><path d="M-22 116 q22 22 44 0" stroke="#fff" stroke-width="5" fill="none"/><path d="M-6 94 l6 -10 l6 10" fill="#2E7D4F"/><text x="0" y="192" font-size="15" font-weight="700">Squash it first</text><text x="0" y="212" font-size="12">so no one gets hurt</text><text x="0" y="236" font-size="12" text-anchor="middle" fill="#5A6478" >先捏爛再丟</text></g><g transform="translate(300,0)"><rect x="-84" y="64" width="168" height="206" rx="16" fill="#fff" stroke="#D23F57" stroke-width="3"/><path d="M-30 100 l14 -10 h32 l14 10 l-8 16 h-6 v42 h-32 v-42 h-6Z" fill="#9FC3DE" stroke="#1A2238" stroke-width="2"/><path d="M-40 154 l80 -60" stroke="#D23F57" stroke-width="6"/><text x="0" y="192" font-size="15" font-weight="700">Don't tear shirts</text><text x="0" y="212" font-size="12">of other people</text><text x="0" y="236" font-size="12" text-anchor="middle" fill="#5A6478" >不撕別人的衣服</text></g><g transform="translate(500,0)"><rect x="-84" y="64" width="168" height="206" rx="16" fill="#fff" stroke="#D23F57" stroke-width="3"/><circle cx="0" cy="122" r="34" fill="#fff" stroke="#1A2238" stroke-width="3"/><path d="M0 122 V98 M0 122 L16 130" stroke="#1A2238" stroke-width="4" stroke-linecap="round"/><text x="0" y="174" font-size="12" font-weight="700">1 hour</text><text x="0" y="192" font-size="15" font-weight="700">Stop at the</text><text x="0" y="212" font-size="12">second signal</text><text x="0" y="236" font-size="12" text-anchor="middle" fill="#5A6478" >第二聲信號就停</text></g>
<text x="300" y="298" font-size="13" font-weight="700">Also: throw only tomatoes, and make way for the trucks.</text><text x="300" y="316" font-size="11" text-anchor="middle" fill="#5A6478" >另外：只能丟番茄，不能丟其他東西；看到卡車要讓路</text></g>
</svg>`,
    cap:"番茄節看起來很亂，其實有幾條大家都要遵守的規則。",
    credit:"圖解：Winglish"}
};

const QUIZ = [
  { q:"1. What is the passage mainly about?", tag:"主旨",
    opts:["How to grow tomatoes at home","A Spanish festival where people throw tomatoes at each other","Why tomatoes are good for your health","The history of parades in Spain"],
    a:1, exp:"文章介紹西班牙布尼奧爾的番茄節：它怎麼開始、怎麼進行、有哪些規則，主旨是 (B)。"},
  { q:"2. Which of the following is TRUE?", tag:"細節",
    opts:["The tomato fight lasts for a whole week.","People must squash the tomatoes before throwing them.","The tomatoes are eaten after the fight.","The festival started in 2013."],
    a:1, exp:"(B) 正確：規則是番茄要先捏爛再丟。(A) 大戰只有一個小時；(C) 這些番茄過熟、不適合吃；(D) 番茄節始於 1945 年，2013 年是開始限量售票。"},
  { q:"3. What happens after the fight is over?", tag:"細節",
    opts:["Everyone eats the tomatoes together.","Fire trucks wash the streets.","The town is closed for a week.","People start throwing eggs instead."],
    a:1, exp:"大戰結束後，消防車會沖洗街道，小鎮很快就恢復乾淨，答案是 (B)。"}
];

const META = {
 id:"tomatina", title:"The Biggest Food Fight on Earth", category:"文化節慶",
 dek:"每年八月的最後一個星期三，西班牙小鎮會用一百多噸番茄打一場「戰爭」。這個瘋狂的節日，竟然是從一場街頭打架開始的？",
 date:"2026/11/1",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1634121192012-16003b5c48e3?auto=format&fit=crop&w=1600&q=70" data-local="tomatina-hero.jpg" alt="A pile of red tomatoes" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#F4E3C3"/><g fill="#E9CFA0"><rect x="0" y="100" width="170" height="320"/><rect x="630" y="80" width="170" height="340"/></g><path d="M0 370 H800 V420 H0Z" fill="#B8322E"/><g fill="#D23F57"><circle cx="250" cy="150" r="30"/><circle cx="350" cy="230" r="36"/><circle cx="470" cy="130" r="28"/><circle cx="540" cy="250" r="32"/><circle cx="300" cy="320" r="26"/><circle cx="420" cy="310" r="30"/><circle cx="200" cy="270" r="22"/><circle cx="590" cy="350" r="20"/></g></svg>
<figcaption>番茄節要用掉一百多噸的番茄，全部都是過熟、不適合吃的。<span class="credit">Photo: Alexander Schimmeck / Unsplash</span></figcaption>`,
 fact:"番茄節當天，很多店家會在牆壁和門窗上鋪大塊塑膠布，免得被番茄汁弄髒；參加的人也常戴上泳鏡保護眼睛。",
 next:{title:"Can Plants Talk?", href:"read.html#plants"}
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
