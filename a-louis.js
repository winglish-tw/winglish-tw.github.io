/* winglish.tw 閱讀館文章資料：The King Who Dressed for Power（愛漂亮的路易十四） */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1],[2,3,4],[5,6,7,8],[9,10,11,12,13]], figs:{3:"timeline"}, heads:{1:"The Sun King",2:"Red Heels and Big Wigs",3:"A Hall Full of Mirrors"},
   sents:[
    ["Do you like to look good in photos?","你喜歡在照片裡看起來很好看嗎？"],
    ["More than 300 years ago, a French king cared about his looks even more than you do.","三百多年前，有一位法國國王比你還要在乎自己的外表。"],
    ["His name was Louis XIV, and he became king when he was only four years old.","他叫路易十四，只有四歲就當上了國王。"],
    ["As a teenager, he loved to dance.","他十幾歲的時候非常愛跳舞。"],
    ["In one show, he dressed up as the rising sun, so people called him the \"Sun King.\"","在一場表演中，他打扮成升起的太陽，所以人們叫他「太陽王」。"],
    ["Louis was not very tall, but he wore shoes with high red heels.","路易個子不太高，但他穿著有紅色高跟的鞋子。"],
    ["Only people he liked were allowed to wear red heels, too.","只有他喜歡的人，才被允許也穿紅色的鞋跟。"],
    ["When his hair began to get thin, he started wearing big, curly wigs.","當他的頭髮開始變稀疏時，他開始戴又大又捲的假髮。"],
    ["Soon, rich men all over Europe wanted wigs just like his.","很快地，全歐洲的有錢男人都想要一頂跟他一樣的假髮。"],
    ["Louis also built a huge palace called Versailles.","路易還蓋了一座叫「凡爾賽宮」的巨大宮殿。"],
    ["One room, the Hall of Mirrors, has 357 mirrors on its walls.","其中一個房間「鏡廳」，牆上有 357 面鏡子。"],
    ["Back then, mirrors were very expensive, so the room showed everyone how rich and powerful the king was.","在當時，鏡子非常昂貴，所以這個房間向所有人展示國王有多富有、多有權力。"],
    ["Louis was king for 72 years, longer than any other king in European history.","路易當了 72 年的國王，比歐洲歷史上任何其他國王都久。"],
    ["Maybe looking good really was part of his job!","也許「看起來很好看」，真的是他工作的一部分！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1],[2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15]], figs:{3:"timeline"}, heads:{1:"Becoming the Sun",2:"Fashion as a Weapon",3:"A Palace of Mirrors",4:"Vain, or Clever?"},
   sents:[
    ["Long before social media influencers, one man set the fashion for a whole continent: Louis XIV of France.","早在社群網紅出現之前，就有一個人引領了整個歐洲的時尚：法國的路易十四。"],
    ["He ruled for 72 years, from 1643 to 1715, and he understood something many leaders still forget: looking powerful is part of being powerful.","他從 1643 年統治到 1715 年，長達 72 年；他懂得一件很多領袖到現在還會忘記的事：看起來有權力，本身就是擁有權力的一部分。"],
    ["Louis became king at the age of four, after his father died.","父親過世後，路易四歲就當上了國王。"],
    ["At 14, he appeared in a long court ballet dressed as the rising sun, covered in gold.","十四歲時，他在一場很長的宮廷芭蕾中登場，打扮成升起的太陽，全身金光閃閃。"],
    ["The image stuck, and he became known as the Sun King, the center around which everything else turned.","這個形象從此深植人心，他被稱為「太陽王」──一切都圍著他轉的中心。"],
    ["Louis turned red heels into a symbol of status.","路易把紅色鞋跟變成了身分地位的象徵。"],
    ["Red dye was costly, and only courtiers who enjoyed the king's favor had permission to wear red-heeled shoes, so anyone could tell at a glance who was in and who was out.","紅色染料很貴，只有受國王寵愛的朝臣才獲准穿紅跟鞋，所以任何人一眼就能看出誰受寵、誰失寵。"],
    ["When his hair began to thin, he turned to enormous curly wigs, and the trend spread so fast that the number of master wigmakers in Paris jumped from about 200 in 1673 to nearly 1,000 a century later.","當他的頭髮開始變稀疏時，他改戴巨大的捲髮假髮；這股風潮擴散得極快，巴黎的假髮師傅從 1673 年的大約兩百人，一百年後暴增到將近一千人。"],
    ["Some historians believe he wore heels and tall wigs because he was short, perhaps around 1.63 meters, but others argue that he simply loved fashion.","有些歷史學家認為，他穿高跟鞋、戴高高的假髮是因為個子矮（可能大約 1.63 公尺）；但也有人主張，他就只是熱愛時尚。"],
    ["His greatest stage was the Palace of Versailles, where he moved the royal court in 1682.","他最盛大的舞台是凡爾賽宮，他在 1682 年把整個宮廷搬到了那裡。"],
    ["Its famous Hall of Mirrors, finished in 1684, contains 357 mirrors at a time when a single large mirror could cost a fortune.","著名的鏡廳在 1684 年完工，裡面有 357 面鏡子──而在那個年代，光是一面大鏡子就可能要價一筆財富。"],
    ["Nobles were expected to live at Versailles, dress in expensive clothes, and even watch the king get out of bed each morning.","貴族們被期待住在凡爾賽宮、穿昂貴的衣服，甚至每天早上要看著國王起床。"],
    ["Keeping them busy with fashion and ceremony also left them too busy, and too poor, to plot against him.","用時尚和禮儀讓他們忙個不停，也讓他們忙到、窮到沒辦法密謀反對他。"],
    ["Was Louis vain?","路易愛慕虛榮嗎？"],
    ["Almost certainly.","幾乎可以確定是的。"],
    ["But his vanity was also a clever political tool, and it helped make Paris the fashion capital of Europe, a reputation the city still enjoys today.","但他的虛榮也是一種聰明的政治工具，還幫助巴黎成為歐洲的時尚之都──這個名聲巴黎到今天都還享有。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4],[5,6,7,8],[9,10,11],[12,13]], figs:{3:"timeline"}, heads:{1:"The Making of a Myth",2:"Dressing for Domination",3:"A Gilded Cage",4:"A Deathbed Confession"},
   sents:[
    ["Vanity is rarely counted among the virtues of a statesman, yet in the case of Louis XIV it is difficult to tell where personal indulgence ended and political strategy began.","虛榮很少被算作政治家的美德，然而在路易十四身上，很難分辨個人的放縱在哪裡結束、政治策略又從哪裡開始。"],
    ["Over a reign of 72 years, the longest of any monarch in European history, the Sun King turned his own body, wardrobe and residence into instruments of power.","在長達 72 年的統治中（歐洲史上所有君主中最長的），太陽王把自己的身體、衣櫥和住所，全都變成了權力的工具。"],
    ["Louis inherited the throne in 1643, at the age of four, and grew up during the Fronde, a series of revolts in which rebellious nobles forced the young king to flee Paris.","路易在 1643 年四歲時繼承王位，在「投石黨之亂」中長大──那是一連串的叛亂，叛變的貴族逼得年幼的國王逃離巴黎。"],
    ["The experience left him with a lasting distrust of the aristocracy and a conviction that royal authority had to be not only exercised but performed.","這段經歷讓他對貴族產生了長久的不信任，也讓他深信：王權不只要行使，還要「演出來」。"],
    ["Fittingly, the image that defined him came from the stage: in 1653, the fourteen-year-old king danced the role of the rising sun in the Ballet de la Nuit, an allegory of order emerging from chaos.","恰如其分地，定義他的形象正是來自舞台：1653 年，十四歲的國王在《夜之芭蕾》中飾演升起的太陽──一個象徵秩序從混亂中誕生的寓言。"],
    ["Clothing became a language of hierarchy at his court.","在他的宮廷裡，服裝成了一種表達階級的語言。"],
    ["Red heels, dyed with costly pigment, were reserved for those in royal favor, and courtiers competed for the privilege of wearing a specially embroidered coat that required the king's written permission.","用昂貴顏料染成的紅色鞋跟，專屬於受國王寵愛的人；朝臣們也爭相取得穿一種特製刺繡外套的特權，而這種外套必須有國王的書面許可才能穿。"],
    ["The king's adoption of the towering wig, possibly prompted by thinning hair, set off a Europe-wide craze, while his famously elevated heels have prompted endless speculation about his height.","國王開始戴高聳的假髮（可能是因為頭髮變稀疏），引發了一股席捲全歐洲的狂熱；而他那出了名的高鞋跟，則讓後人對他的身高有無盡的揣測。"],
    ["Historians disagree on whether he was unusually short, and some suggest he wore heels for the same reason his courtiers did: they were simply the height of fashion.","歷史學家對他是不是特別矮看法不一，有些人認為他穿高跟鞋的理由跟朝臣們一樣：那就是當時最流行的時尚。"],
    ["Nowhere was this theater of power more spectacular than at Versailles, to which Louis permanently moved his court in 1682.","這座權力劇場最壯觀的地方，莫過於凡爾賽宮；路易在 1682 年把宮廷永久遷到了那裡。"],
    ["The Hall of Mirrors, completed two years later, dazzled visitors with 357 mirrors produced not in Venice, which had long dominated the trade, but in France, a deliberate display of the kingdom's growing industrial strength.","兩年後完工的鏡廳以 357 面鏡子讓訪客目眩神迷；這些鏡子不是在長期壟斷這門生意的威尼斯製造，而是在法國生產──刻意展示王國日益強大的工業實力。"],
    ["Nobles who might once have raised armies against the crown now spent their fortunes on silk and lace, and their days competing for the honor of handing the king his shirt at his morning rising ceremony.","曾經可能起兵反抗王室的貴族，如今把財富花在絲綢和蕾絲上，每天爭著在國王早晨的起床儀式上，搶到遞襯衫給他的榮耀。"],
    ["Louis himself seemed to recognize the cost of his grandeur.","路易自己似乎也意識到，他的排場付出了多大的代價。"],
    ["On his deathbed in 1715, he reportedly urged his five-year-old heir not to imitate his love of building and war, admitting that he had often fought out of vanity, a rare confession from a man who had spent a lifetime making sure the world was looking at him.","1715 年臨終前，據說他勸告五歲的繼承人不要學他熱愛蓋建築和打仗，並承認自己常常是出於虛榮而開戰──對一個一輩子都在確保全世界看著他的人來說，這是難得的告白。"]
 ]}
];

const GLOSS = {
  care:["v.","在乎"], looks:["n.","外表；長相"], french:["adj.","法國的"], king:["n.","國王"], teenager:["n.","青少年（13–19 歲）"],
  dance:["v.","跳舞"], dress:["v.","穿衣；dress up as… 打扮成…"], rising:["adj.","升起的"], heel:["n.","鞋跟"], allow:["v.","允許"],
  thin:["adj.","稀疏的；薄的"], curly:["adj.","捲曲的"], wig:["n.","假髮"], europe:["n.","歐洲"], huge:["adj.","巨大的"], palace:["n.","宮殿"],
  versailles:["n.","凡爾賽（宮）"], hall:["n.","大廳"], mirror:["n.","鏡子"], expensive:["adj.","昂貴的"], powerful:["adj.","有權力的；強大的"],
  european:["adj.","歐洲的"], history:["n.","歷史"],
  influencer:["n.","網紅；有影響力的人"], continent:["n.","大陸；洲"], rule:["v.","統治"], leader:["n.","領袖"], ballet:["n.","芭蕾舞"], court:["n.","宮廷"],
  image:["n.","形象"], stuck:["v.","stick 的過去式；（印象）留下來"], symbol:["n.","象徵"], status:["n.","地位；身分"], dye:["n.","染料"], costly:["adj.","昂貴的"],
  courtier:["n.","朝臣；廷臣"], favor:["n.","寵愛；恩寵"], permission:["n.","許可"], glance:["n.","一瞥"], enormous:["adj.","巨大的"], trend:["n.","潮流"],
  wigmaker:["n.","假髮師傅"], century:["n.","世紀；一百年"], historian:["n.","歷史學家"], argue:["v.","主張；爭論"], royal:["adj.","皇家的"],
  contain:["v.","包含"], fortune:["n.","一大筆錢；財富"], noble:["n.","貴族"], expect:["v.","期待；要求"], ceremony:["n.","儀式；禮儀"],
  plot:["v.","密謀"], vain:["adj.","愛慕虛榮的"], vanity:["n.","虛榮"], political:["adj.","政治的"], capital:["n.","首都；中心"], reputation:["n.","名聲"],
  virtue:["n.","美德"], statesman:["n.","政治家"], indulgence:["n.","放縱；沉迷"], strategy:["n.","策略"], reign:["n.","統治期間"], monarch:["n.","君主"],
  wardrobe:["n.","衣櫥；全部衣服"], residence:["n.","住所"], instrument:["n.","工具；手段"], inherit:["v.","繼承"], throne:["n.","王位"],
  revolt:["n.","叛亂；反抗"], rebellious:["adj.","叛逆的；造反的"], flee:["v.","逃離"], lasting:["adj.","持久的"], distrust:["n.","不信任"],
  aristocracy:["n.","貴族階級"], conviction:["n.","堅定的信念"], authority:["n.","權威；權力"], exercise:["v.","行使（權力）"], perform:["v.","表演；執行"],
  fittingly:["adv.","恰如其分地"], define:["v.","定義；成為…的特徵"], allegory:["n.","寓言；象徵故事"], emerge:["v.","出現；浮現"], chaos:["n.","混亂"],
  clothing:["n.","服裝"], hierarchy:["n.","階級制度"], pigment:["n.","顏料"], reserve:["v.","保留；專供"], compete:["v.","競爭"], privilege:["n.","特權"],
  embroidered:["adj.","有刺繡的"], require:["v.","需要"], adoption:["n.","採用"], towering:["adj.","高聳的"], prompt:["v.","促使；引起"], craze:["n.","狂熱；一窩蜂"],
  elevated:["adj.","抬高的"], speculation:["n.","推測；揣測"], unusually:["adv.","異常地"], theater:["n.","劇場"], spectacular:["adj.","壯觀的"],
  permanently:["adv.","永久地"], dazzle:["v.","使目眩；使驚艷"], venice:["n.","威尼斯"], dominate:["v.","支配；主導"], deliberate:["adj.","刻意的"],
  display:["n.","展示"], kingdom:["n.","王國"], industrial:["adj.","工業的"], crown:["n.","王權；王冠"], silk:["n.","絲綢"], lace:["n.","蕾絲"],
  recognize:["v.","承認；認清"], grandeur:["n.","宏偉；排場"], deathbed:["n.","臨終；臨終的床"], reportedly:["adv.","據說"], urge:["v.","力勸"],
  heir:["n.","繼承人"], imitate:["v.","模仿"], admit:["v.","承認"], confession:["n.","告白；坦承"], lifetime:["n.","一生"]
};
const KEY = [["teenager","rising","heel","allow","thin","curly","wig","palace","mirror","powerful"],
             ["influencer","ballet","status","dye","courtier","favor","permission","glance","enormous","fortune","plot","vain"],
             ["vanity","indulgence","monarch","inherit","revolt","aristocracy","conviction","allegory","hierarchy","privilege","speculation","spectacular","dazzle","grandeur"]];

const DEFS = {
  "teenager": "a young person between 13 and 19 years old",
  "rising": "moving up, especially of the sun in the morning",
  "heel": "the raised part on the bottom of a shoe under your heel",
  "allow": "to let someone do something",
  "thin": "(of hair) not growing thickly",
  "curly": "having a lot of curls; not straight",
  "wig": "a cover of false hair that you wear on your head",
  "palace": "a very large, grand house where a king or queen lives",
  "mirror": "a piece of glass in which you can see yourself",
  "powerful": "having a lot of control over people and events",
  "influencer": "a person who affects what other people buy or do, especially on social media",
  "ballet": "a kind of dance that tells a story with music and no talking",
  "status": "a person's social position compared with other people",
  "dye": "a substance used to change the color of cloth or hair",
  "courtier": "a person who spends time at a king's or queen's court",
  "favor": "approval or support from someone with power",
  "permission": "the act of allowing someone to do something",
  "glance": "a quick look",
  "enormous": "extremely large",
  "fortune": "a very large amount of money",
  "plot": "to secretly plan to do something harmful",
  "vain": "too interested in your own appearance",
  "vanity": "too much pride in your own appearance or abilities",
  "indulgence": "allowing yourself to have or do whatever you enjoy",
  "monarch": "a king or queen",
  "inherit": "to receive a position or property from someone who has died",
  "revolt": "an attempt by a group of people to fight against those in power",
  "aristocracy": "the class of people with the highest social rank, such as nobles",
  "conviction": "a strong belief or opinion",
  "allegory": "a story in which characters and events stand for deeper ideas",
  "hierarchy": "a system in which people are ranked one above another",
  "privilege": "a special right given only to a particular person or group",
  "speculation": "guesses about something without knowing all the facts",
  "spectacular": "extremely impressive to look at",
  "dazzle": "to amaze someone with something very bright or impressive",
  "grandeur": "the quality of being very large, impressive and expensive"
};

const USAGE = {
  "teenager": ["as a teenager · a typical teenager · teenagers today", "As a teenager, my father worked in his uncle's shop.", "我爸爸十幾歲時在他叔叔的店裡工作。"],
  "rising": ["the rising sun · rising prices · rising star", "We climbed Alishan to see the rising sun.", "我們登上阿里山去看日出。"],
  "heel": ["high heels · flat heels · a heel of a shoe", "It's hard to walk on cobblestones in high heels.", "穿高跟鞋走石板路很難走。"],
  "allow": ["allow sb to V · be allowed to V · not allowed", "Students are not allowed to use phones during the test.", "考試時學生不准使用手機。"],
  "thin": ["thin hair · get thin · a thin layer", "His hair is getting thin, so he often wears a cap.", "他的頭髮越來越稀疏，所以常戴帽子。"],
  "curly": ["curly hair · a curly tail · long and curly", "My little sister has short, curly hair.", "我妹妹留著短短的捲髮。"],
  "wig": ["wear a wig · a curly wig · put on a wig", "The actor wore a white wig to play the old judge.", "那位演員戴了白色假髮來演老法官。"],
  "palace": ["a royal palace · palace gardens · palace museum", "The National Palace Museum has many treasures from old China.", "故宮博物院收藏許多古代中國的珍寶。"],
  "mirror": ["look in the mirror · a full-length mirror · rearview mirror", "She looked in the mirror and fixed her hair.", "她照了照鏡子，整理一下頭髮。"],
  "powerful": ["a powerful leader · powerful engine · powerful message", "The movie sent a powerful message about kindness.", "這部電影傳達了一個關於善良的強烈訊息。"],
  "influencer": ["a social media influencer · food influencer · become an influencer", "The food influencer posted a video of the new night market.", "那位美食網紅發了一支新夜市的影片。"],
  "ballet": ["ballet dancer · ballet class · ballet shoes", "She has taken ballet classes since she was six.", "她從六歲就開始上芭蕾課。"],
  "status": ["social status · status symbol · high status", "For some people, an expensive watch is a status symbol.", "對某些人來說，昂貴的手錶是身分的象徵。"],
  "dye": ["natural dye · hair dye · dye A red", "Indigo plants were used as a natural blue dye in Sanxia.", "三峽過去用藍草做天然的藍色染料。"],
  "courtier": ["a royal courtier · courtiers and nobles · a loyal courtier", "The courtiers bowed as the queen walked by.", "女王走過時，朝臣們都鞠躬。"],
  "favor": ["in sb's favor · win sb's favor · fall out of favor", "The new player quickly won the coach's favor.", "那位新球員很快就贏得了教練的喜愛。"],
  "permission": ["ask for permission · give permission · without permission", "You need your parents' permission to join the trip.", "參加這次旅行需要家長同意。"],
  "glance": ["at a glance · take a glance at · at first glance", "At a glance, the two pictures look exactly the same.", "乍看之下，兩張圖一模一樣。"],
  "enormous": ["an enormous amount · enormous success · enormous pressure", "The typhoon caused an enormous amount of damage.", "這次颱風造成了巨大的損失。"],
  "fortune": ["cost a fortune · make a fortune · spend a fortune on …", "Fixing an old car can cost a fortune.", "修一台老車可能要花一大筆錢。"],
  "plot": ["plot against … · plot to V · plot a revenge", "In the story, the prince's uncle plotted against him.", "故事裡，王子的叔叔密謀對付他。"],
  "vain": ["be vain about … · a vain person · in vain", "He is so vain that he checks his hair every few minutes.", "他非常愛漂亮，每隔幾分鐘就要檢查頭髮。"],
  "vanity": ["out of vanity · hurt sb's vanity · vanity project", "She bought the bag out of vanity, not need.", "她買那個包包是出於虛榮，不是真的需要。"],
  "indulgence": ["a small indulgence · self-indulgence · an occasional indulgence", "A cup of bubble tea is my weekly indulgence.", "一杯珍珠奶茶是我每週的小放縱。"],
  "monarch": ["a reigning monarch · absolute monarch · British monarch", "The monarch waved to the crowd from the balcony.", "君主在陽台上向群眾揮手。"],
  "inherit": ["inherit the throne · inherit a house · inherit A from B", "She inherited her grandmother's old sewing machine.", "她繼承了奶奶的舊縫紉機。"],
  "revolt": ["a peasant revolt · rise in revolt · revolt against …", "The farmers rose in revolt against the high taxes.", "農民們起來反抗沉重的稅賦。"],
  "aristocracy": ["the French aristocracy · members of the aristocracy · landed aristocracy", "Members of the aristocracy owned most of the land.", "大部分的土地都屬於貴族階級。"],
  "conviction": ["a strong conviction · with conviction · political convictions", "She spoke with conviction about protecting the ocean.", "她語氣堅定地談論保護海洋。"],
  "allegory": ["an allegory of … · political allegory · read as an allegory", "Animal Farm is often read as an allegory of power.", "《動物農莊》常被當作一則關於權力的寓言來讀。"],
  "hierarchy": ["social hierarchy · a strict hierarchy · at the top of the hierarchy", "Wolves live in packs with a clear hierarchy.", "狼群有清楚的階級制度。"],
  "privilege": ["the privilege of V-ing · special privileges · a rare privilege", "It was a privilege to meet the famous writer.", "能見到那位知名作家是很難得的榮幸。"],
  "speculation": ["speculation about … · pure speculation · fuel speculation", "The singer's new haircut sparked speculation about a new album.", "那位歌手的新髮型引發了推出新專輯的揣測。"],
  "spectacular": ["a spectacular view · spectacular fireworks · spectacular success", "Taipei 101 has spectacular fireworks on New Year's Eve.", "台北 101 跨年夜的煙火非常壯觀。"],
  "dazzle": ["dazzle sb with … · be dazzled by … · dazzling lights", "The dancers dazzled the audience with their costumes.", "舞者們的服裝讓觀眾看得目眩神迷。"],
  "grandeur": ["the grandeur of … · faded grandeur · sense of grandeur", "Visitors are amazed by the grandeur of the old temple.", "遊客們對這座古廟的宏偉感到驚嘆。"]
};

const FIGS = {
  timeline:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="Key years in the life of Louis XIV" style="display:block;width:100%;height:auto;border-radius:6px;background:#FBF3DF">
<path d="M30 150 C110 144 170 158 250 150 S410 142 570 152" fill="none" stroke="#6B4A2E" stroke-width="3" stroke-linecap="round"/>
<g transform="translate(70,150)">
<path d="M-22 -26 L-18 -48 L-8 -36 L0 -54 L8 -36 L18 -48 L22 -26 C8 -23 -8 -23 -22 -26Z" fill="#E3B341" stroke="#8C6512" stroke-width="2" stroke-linejoin="round"/>
<circle cx="0" cy="-56" r="3" fill="#D9483F"/><circle r="7" fill="#7A2E3A" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(180,150)">
<circle cx="0" cy="-40" r="12" fill="#F2C14E" stroke="#B5831A" stroke-width="2"/>
<path d="M0 -60 C1 -64 1 -68 0 -72 M14 -54 C17 -57 20 -60 22 -63 M-14 -54 C-17 -57 -20 -60 -22 -63 M20 -40 C24 -40 28 -41 32 -40 M-20 -40 C-24 -40 -28 -41 -32 -40 M14 -26 C17 -23 20 -21 23 -19 M-14 -26 C-17 -23 -20 -21 -23 -19" stroke="#D99A1E" stroke-width="2.4" stroke-linecap="round" fill="none"/>
<circle r="7" fill="#7A2E3A" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(300,150)">
<path d="M-42 -20 L-42 -38 C-30 -40 -18 -40 -12 -39 L-12 -46 C-6 -54 6 -54 12 -46 L12 -39 C18 -40 30 -40 42 -38 L42 -20 C14 -18 -14 -18 -42 -20Z" fill="#F7EBD0" stroke="#7A5A33" stroke-width="2" stroke-linejoin="round"/>
<path d="M-46 -38 C-30 -42 -16 -42 -12 -40 M12 -40 C16 -42 30 -42 46 -38 M-16 -46 C-6 -58 6 -58 16 -46" fill="none" stroke="#B5831A" stroke-width="2.6" stroke-linecap="round"/>
<path d="M-34 -24 V-31 C-34 -34 -29 -34 -29 -31 V-24 M-22 -24 V-31 C-22 -34 -17 -34 -17 -31 V-24 M-4 -21 V-34 C-4 -39 4 -39 4 -34 V-21 M17 -24 V-31 C17 -34 22 -34 22 -31 V-24 M29 -24 V-31 C29 -34 34 -34 34 -31 V-24" fill="none" stroke="#7A5A33" stroke-width="1.6" stroke-linecap="round"/>
<path d="M0 -56 C0 -60 0 -63 0 -66" stroke="#7A5A33" stroke-width="1.8" stroke-linecap="round"/><path d="M0 -66 C4 -64 8 -64 10 -66 L10 -60 C8 -58 4 -58 0 -60" fill="#D9483F"/>
<circle r="7" fill="#7A2E3A" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(420,150)">
<path d="M-16 -22 C-17 -36 -16 -50 -12 -58 C-6 -66 6 -66 12 -58 C16 -50 17 -36 16 -22 C6 -20 -6 -20 -16 -22Z" fill="#DCE9EE" stroke="#B5831A" stroke-width="3" stroke-linejoin="round"/>
<path d="M-6 -52 C-3 -44 -2 -36 -4 -28" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round"/>
<circle r="7" fill="#7A2E3A" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(530,150)">
<path d="M-6 -24 C-7 -34 -7 -42 -6 -48 C-2 -50 2 -50 6 -48 C7 -42 7 -34 6 -24Z" fill="#FFFDF6" stroke="#7A5A33" stroke-width="2"/>
<path d="M0 -50 C-5 -56 -3 -62 0 -66 C3 -62 5 -56 0 -50Z" fill="#F2A33A" stroke="#C4661E" stroke-width="1.4"/>
<path d="M-14 -24 C-6 -21 6 -21 14 -24" stroke="#7A5A33" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle r="7" fill="#7A2E3A" stroke="#3A2E25" stroke-width="2"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#3A2E25" text-anchor="middle">
<text x="70" y="184" font-size="16" font-weight="800">1643</text><text x="70" y="202" font-size="11.5">King at age 4</text><text x="70" y="218" font-size="10" fill="#6B5B4E">四歲當上國王</text>
<text x="180" y="184" font-size="16" font-weight="800">1653</text><text x="180" y="202" font-size="11.5">Dances as the sun</text><text x="180" y="218" font-size="10" fill="#6B5B4E">芭蕾中扮成太陽</text>
<text x="300" y="184" font-size="16" font-weight="800">1682</text><text x="300" y="202" font-size="11.5">Moves to Versailles</text><text x="300" y="218" font-size="10" fill="#6B5B4E">宮廷遷到凡爾賽宮</text>
<text x="420" y="184" font-size="16" font-weight="800">1684</text><text x="420" y="202" font-size="11.5">Hall of Mirrors</text><text x="420" y="218" font-size="10" fill="#6B5B4E">鏡廳完工（357 面鏡子）</text>
<text x="530" y="184" font-size="16" font-weight="800">1715</text><text x="530" y="202" font-size="11.5">Dies after 72 years</text><text x="530" y="218" font-size="10" fill="#6B5B4E">在位 72 年後去世</text>
</g>
<text x="300" y="266" font-family="Noto Sans TC,sans-serif" font-size="12" fill="#3A2E25" text-anchor="middle" font-weight="700">The Sun King's 72-year reign</text>
<text x="300" y="283" font-family="Noto Sans TC,sans-serif" font-size="10.5" fill="#6B5B4E" text-anchor="middle">太陽王的 72 年：歐洲史上在位最久的君主</text>
</svg>`,
    cap:"路易十四一生的五個關鍵年份：從四歲登基、扮演太陽，到凡爾賽宮和鏡廳。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["How to make a curly wig", "A French king who cared a lot about how he looked", "The history of ballet", "Why mirrors are expensive today"],
   "a":1,"exp":"文章介紹路易十四穿紅色高跟鞋、戴大假髮、蓋滿是鏡子的宮殿，主旨是一位非常在乎外表的法國國王，答案是 (B)。"},
  {"q":"2. Why did people call Louis XIV the \"Sun King\"?","tag":"細節",
   "opts":["His palace was painted gold.", "He loved sunny weather.", "He was born in the morning.", "He dressed up as the rising sun in a show."],
   "a":3,"exp":"第二段說他在一場表演中 dressed up as the rising sun（打扮成升起的太陽），所以人們叫他太陽王，答案是 (D)。"},
  {"q":"3. Which of the following is TRUE according to the passage?","tag":"是非",
   "opts":["Everyone could wear red heels.", "Louis became king when he was a teenager.", "The Hall of Mirrors has 357 mirrors.", "Louis was king for 27 years."],
   "a":2,"exp":"(C) 正確，第四段說鏡廳牆上有 357 面鏡子。(A) 只有國王喜歡的人才能穿；(B) 他四歲就當國王；(D) 他當了 72 年國王。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["Louis XIV: Fashion as Power", "How Wigs Are Made", "A Short History of Paris", "Why Ballet Is Popular in France"],
   "a":0,"exp":"文章說明路易十四怎麼用紅鞋跟、假髮、凡爾賽宮和鏡廳來展現與鞏固權力，最好的標題是 (A)「時尚就是權力」。"},
  {"q":"2. How could people tell \"who was in and who was out\" at court?","tag":"細節",
   "opts":["By how well they danced", "By the color of their wigs", "By the size of their houses", "By whether they wore red-heeled shoes"],
   "a":3,"exp":"第三段說只有受國王寵愛的朝臣才能穿紅跟鞋，所以一看鞋跟就知道誰受寵、誰失寵，答案是 (D)。"},
  {"q":"3. According to the passage, which statement about Louis's height is correct?","tag":"細節",
   "opts":["He was definitely the shortest man at court.", "Historians agree he was 1.80 meters tall.", "Historians are not sure why he wore heels.", "He never wore heels."],
   "a":2,"exp":"第三段最後說有些歷史學家認為他因為矮才穿高跟鞋，但也有人主張他只是愛時尚──歷史學家對原因看法不一，答案是 (C)。"},
  {"q":"4. What can be inferred about why Louis kept nobles busy at Versailles?","tag":"推論",
   "opts":["He wanted them to become better dancers.", "He wanted to stop them from becoming a threat to him.", "He needed them to build the palace.", "He wanted them to save money."],
   "a":1,"exp":"第四段說讓貴族忙於時尚和禮儀，他們就忙到、窮到沒辦法 plot against him（密謀反對他），可推論他是想防止貴族威脅自己，答案是 (B)。(D) 剛好相反，貴族反而花很多錢。"}
 ],
 [
  {"q":"1. Which of the following best expresses the main idea of the passage?","tag":"主旨",
   "opts":["The Hall of Mirrors was the most expensive building in Europe.", "French nobles admired Louis XIV because he was tall.", "Louis XIV was a weak king who cared only about clothes.", "Louis XIV's love of appearance was closely tied to how he held on to power."],
   "a":3,"exp":"第一段就說很難分辨他的虛榮在哪裡結束、政治策略從哪裡開始，接著用服裝、假髮、凡爾賽宮說明他如何把外表變成權力的工具，答案是 (D)。"},
  {"q":"2. According to the passage, how did the Fronde affect Louis?","tag":"因果",
   "opts":["It made him distrust nobles and believe power must be shown.", "It made him stop dancing.", "It made him trust the nobles more.", "It made him leave France for good."],
   "a":0,"exp":"第二段說這段經歷讓他 a lasting distrust of the aristocracy（長久不信任貴族），並深信王權不只要行使，還要演出來，答案是 (A)。"},
  {"q":"3. In the third paragraph, the phrase \"the height of fashion\" is used ______.","tag":"修辭",
   "opts":["to show that Louis was very tall", "as a play on words, since the topic is high heels and height", "to describe a type of wig", "to suggest that fashion was dangerous"],
   "a":1,"exp":"the height of fashion 本意是「最流行的時尚」，但這段在談鞋跟和身高（height），作者故意用雙關，答案是 (B)。"},
  {"q":"4. Why were the mirrors in the Hall of Mirrors made in France rather than Venice?","tag":"推論",
   "opts":["Because French mirrors were cheaper", "Venetian mirrors were too small.", "To show off France's own industrial power", "Because Venice refused to sell any mirrors"],
   "a":2,"exp":"文中說這是 a deliberate display of the kingdom's growing industrial strength（刻意展示王國日益強大的工業實力），答案是 (C)。其他選項文中都沒提到。"},
  {"q":"5. What does the last paragraph suggest about Louis at the end of his life?","tag":"推論",
   "opts":["He was proud of every war he had fought.", "He realized some of his choices had been driven by vanity.", "He wanted his heir to build a bigger palace.", "He finally stopped wearing wigs."],
   "a":1,"exp":"最後一段說他臨終前勸繼承人不要學他愛蓋建築和打仗，並承認常常 fought out of vanity（出於虛榮而打仗），可見他意識到自己的一些選擇是虛榮造成的，答案是 (B)。"}
 ]
];

const META = {
 id:"louis", title:"The King Who Dressed for Power", category:"服飾時尚",
 dek:"穿紅色高跟鞋、戴巨大的捲髮假髮，還蓋了一整條鏡廳──三百多年前全歐洲最愛漂亮的國王，其實把「好看」變成了統治的武器。",
 date:"2026/11/11",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1527463945444-74a3bcda664c?auto=format&fit=crop&w=1600&q=70" data-local="louis-hero.jpg" alt="The Hall of Mirrors in the Palace of Versailles" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#F3E3B8"/><path d="M0 330 C200 322 600 322 800 330 V420 H0Z" fill="#B98A4A"/><g fill="#DCE9EE" stroke="#B5831A" stroke-width="5"><path d="M110 300 V140 C110 100 170 100 170 140 V300Z"/><path d="M290 300 V140 C290 100 350 100 350 140 V300Z"/><path d="M450 300 V140 C450 100 510 100 510 140 V300Z"/><path d="M630 300 V140 C630 100 690 100 690 140 V300Z"/></g><g fill="#F2C14E"><circle cx="230" cy="90" r="16"/><circle cx="570" cy="90" r="16"/></g></svg>
<figcaption>凡爾賽宮的鏡廳。在鏡子還非常昂貴的年代，357 面鏡子是驚人的奢華。<span class="credit">Photo: Olivia Leger / Unsplash</span></figcaption>`,
 fact:"路易十四的紅鞋跟紅遍歐洲，連他的死對頭、後來當上英國國王的荷蘭親王威廉三世，也穿起了紅鞋跟！",
 next:{title:"Holidays from the Screen", href:"read.html#setjet"}
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
