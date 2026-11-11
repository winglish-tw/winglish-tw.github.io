/* winglish.tw 閱讀館文章資料：Never Forget a Face */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1,2,3,4],[5,6,7,8],[9,10,11,12],[13]], figs:{1:"timeline",2:"photo"}, heads:{1:"The Crows Remember",2:"A Very Long Memory"},
   sents:[
    ["Crows are black, noisy birds that we can see in many cities.","烏鴉是黑色、很吵的鳥，在很多城市都看得到。"],
    ["But they are also very smart.","但牠們也非常聰明。"],
    ["In 2006, a scientist named John Marzluff did a special test at a university in Seattle, in the United States.","2006 年，一位叫約翰．馬茲盧夫的科學家，在美國西雅圖的一所大學做了一個特別的實驗。"],
    ["He put on a scary caveman mask and caught seven crows.","他戴上一個嚇人的原始人面具，抓了七隻烏鴉。"],
    ["He did not hurt them; he just put rings on their legs and let them go.","他沒有傷害牠們，只在牠們的腳上套了環，就把牠們放走了。"],
    ["After that, whenever someone wore the caveman mask on campus, the crows flew over and shouted at that person.","從那之後，只要有人在校園裡戴著原始人面具，烏鴉就會飛過來對那個人大叫。"],
    ["When people wore a different mask, the crows did not care.","如果戴的是別的面具，烏鴉就不理他。"],
    ["Here is the most surprising part: crows that were never caught also started to shout at the mask.","最令人驚訝的是：從來沒被抓過的烏鴉，也開始對這個面具大叫。"],
    ["The seven crows had \"told\" other crows about the dangerous face!","那七隻烏鴉把這張危險的臉「告訴」了其他烏鴉！"],
    ["Once, Marzluff walked across the campus in the mask, and 47 of the 53 crows he met shouted at him.","有一次，馬茲盧夫戴著面具走過校園，他遇到的 53 隻烏鴉裡，有 47 隻對他大叫。"],
    ["Young crows learned it from their parents, too.","小烏鴉也從爸爸媽媽那裡學會了這件事。"],
    ["The crows kept shouting at the mask for more than ten years.","烏鴉對著這個面具大叫了十幾年。"],
    ["Finally, in 2023, no crow shouted anymore.","直到 2023 年，終於再也沒有烏鴉對他大叫了。"],
    ["So be nice to the crows near your home, because they may remember your face for a long time!","所以，對你家附近的烏鴉好一點吧，因為牠們可能會記住你的臉很久很久！"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1,2],[3,4,5,6],[7,8,9,10],[11,12,13]], figs:{2:"timeline",3:"photo"}, heads:{1:"The Caveman Mask",2:"Spreading the Word",3:"Seventeen Years Later"},
   sents:[
    ["Many people think of crows as noisy pests that tear open garbage bags, but scientists see them very differently.","很多人覺得烏鴉是會把垃圾袋撕開的吵鬧害鳥，但科學家眼中的烏鴉完全不是這樣。"],
    ["Crows belong to a bird family known for its intelligence, and some kinds of crows can even make simple tools from sticks.","烏鴉所屬的鳥類家族以聰明出名，有些種類的烏鴉甚至會用樹枝做簡單的工具。"],
    ["One famous experiment shows just how well they remember people.","有一個著名的實驗，顯示了牠們記人的本事有多厲害。"],
    ["In 2006, John Marzluff, a wildlife scientist at the University of Washington in Seattle, wanted to know whether crows could recognize human faces.","2006 年，西雅圖華盛頓大學的野生動物學家約翰．馬茲盧夫，想知道烏鴉能不能認得人的臉。"],
    ["He and his students wore a rubber caveman mask while they caught seven crows, put rings on their legs and released them unharmed.","他和學生戴著橡膠做的原始人面具，抓了七隻烏鴉，在牠們腳上套上環，再毫髮無傷地把牠們放走。"],
    ["Later, the researchers walked around campus wearing either the caveman mask or a \"neutral\" mask that had nothing to do with the trapping.","之後，研究人員在校園裡走動，有時戴原始人面具，有時戴一個和抓鳥毫無關係的「中性」面具。"],
    ["The crows scolded the caveman loudly, sometimes diving at him in groups, but mostly ignored the neutral face.","烏鴉會大聲罵那個原始人，有時還成群朝他俯衝，對那張中性的臉卻大多不理不睬。"],
    ["The scolding did not stay with the seven crows.","這樣的叫罵並沒有只停在那七隻烏鴉身上。"],
    ["Over the next few years, more and more birds joined in, including many that had never been caught.","接下來幾年，越來越多烏鴉加入，其中很多從來沒被抓過。"],
    ["On one walk, 47 of the 53 crows Marzluff met scolded him.","有一次走在校園裡，馬茲盧夫遇到的 53 隻烏鴉中，有 47 隻在罵他。"],
    ["Young crows that had seen their parents scold the mask learned to do the same, which means the warning was passed on like a piece of family knowledge.","看過爸媽罵這個面具的小烏鴉，也學會了照做；這代表這個警告就像家族知識一樣被傳了下去。"],
    ["The reaction grew stronger for several years and then slowly faded as the original birds grew old and died.","這種反應強烈了好幾年，之後隨著最早那批烏鴉漸漸老去、死亡，才慢慢減弱。"],
    ["In September 2023, more than 17 years after the trapping, Marzluff walked the campus in the caveman mask, and not a single crow scolded him.","2023 年 9 月，也就是抓鳥事件的 17 年多以後，馬茲盧夫戴著原始人面具走過校園，終於沒有任何一隻烏鴉罵他。"],
    ["Still, a memory that lasted that long and spread through a whole community of birds is something few animals can match.","不過，一段記憶能維持這麼久，還能傳遍整群鳥，這是很少動物比得上的。"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1,2],[3,4,5,6],[7,8,9,10],[11,12,13],[14]], figs:{2:"timeline",3:"photo"}, heads:{1:"An Experiment in Disguise",2:"Knowledge That Spreads",3:"The Fading of a Grudge"},
   sents:[
    ["To many city dwellers, crows are little more than a nuisance, raiding trash cans, cawing at dawn and leaving droppings on parked cars.","對許多城市居民來說，烏鴉不過是個麻煩：翻垃圾桶、天一亮就嘎嘎叫，還在停著的車上留下糞便。"],
    ["Yet corvids, the family that includes crows, ravens and jays, rank among the most cognitively sophisticated animals on Earth; New Caledonian crows, for instance, fashion hooked tools from twigs.","然而，鴉科──包括烏鴉、渡鴉和松鴉的家族──是地球上認知能力最複雜的動物之一；例如新喀里多尼亞烏鴉，就會用細樹枝做出帶鉤的工具。"],
    ["Few studies, however, illustrate their mental abilities as vividly as one conducted on a university campus in Seattle.","不過，很少有研究能像西雅圖某大學校園裡的這個研究一樣，生動地展現牠們的心智能力。"],
    ["In 2006, wildlife biologist John Marzluff of the University of Washington set out to test whether wild crows could distinguish individual human faces.","2006 年，華盛頓大學的野生動物學家約翰．馬茲盧夫著手測試：野生烏鴉能不能分辨個別的人臉。"],
    ["To separate facial recognition from cues such as clothing or gait, he and his students donned a rubber caveman mask while netting seven crows, which they banded and released unharmed.","為了把「認臉」和衣著、走路姿態等線索區分開來，他和學生戴上橡膠原始人面具，用網子捕捉了七隻烏鴉，替牠們套上腳環後，毫髮無傷地放走。"],
    ["As a control, they also wore a \"neutral\" mask, one resembling the U.S. vice president at the time, which was never associated with trapping.","作為對照組，他們也戴了一個「中性」面具──長得像當時的美國副總統──這個面具從來沒有和抓鳥扯上關係。"],
    ["On subsequent walks, the crows mobbed and scolded the caveman, even when the mask was worn upside down or partly hidden by a hat, while largely ignoring the neutral face.","在之後的校園巡走中，就算面具被倒過來戴、或被帽子遮住一部分，烏鴉仍會群起圍攻、叫罵那個原始人，對中性的臉卻大致視而不見。"],
    ["What startled the researchers was not merely the birds' memory but the way the information propagated.","讓研究人員吃驚的，不只是烏鴉的記憶力，還有這個資訊傳播的方式。"],
    ["Within a few years, the proportion of crows scolding the caveman had risen sharply, and on one walk 47 of the 53 crows Marzluff encountered joined the chorus, far more than had witnessed the original captures.","短短幾年內，罵原始人的烏鴉比例急遽上升；有一次巡走時，馬茲盧夫遇到的 53 隻烏鴉中有 47 隻加入叫罵的行列，遠遠超過當初親眼目睹捕捉的數量。"],
    ["A five-year analysis published in Proceedings of the Royal Society B showed that young crows acquired the response by observing their parents, and that birds accompanying knowledgeable flockmates could later react to the mask on their own.","一份刊登在《英國皇家學會報告 B》、為期五年的分析顯示：幼鳥是透過觀察父母學會這個反應的；而跟著「知情」同伴一起行動的烏鴉，之後也能自己對面具做出反應。"],
    ["Crucially, this was social learning rather than deliberate instruction: no crow needed to \"teach\" a lesson for the warning to spread.","關鍵在於，這是「社會學習」而不是刻意的教導：不需要任何一隻烏鴉去「上課」，警告就自然傳開了。"],
    ["The reaction intensified for several years before gradually declining as the original birds aged and died.","這種反應增強了好幾年，之後隨著最初那批烏鴉老去、死亡，才逐漸減弱。"],
    ["In September 2023, roughly seventeen and a half years after the captures, Marzluff walked across campus in the caveman mask and was met with complete silence.","2023 年 9 月，也就是捕捉事件大約十七年半之後，馬茲盧夫戴著原始人面具走過校園，迎接他的是一片寂靜。"],
    ["By then, the last of the seven banded crows had died, so whatever had lingered of the warning existed solely in birds that had learned it secondhand.","那時，七隻套環的烏鴉都已經死了，所以殘留下來的警告，只存在於那些間接學會它的烏鴉身上。"],
    ["The experiment suggests that, for a crow, memory need not reside within a single brain; it can be stored, shared and eventually forgotten by an entire community.","這個實驗顯示：對烏鴉來說，記憶不一定只存在於一個大腦裡；它可以被整個群體儲存、分享，最後再一起遺忘。"]
 ]}
];

const GLOSS = {
  crow:["n.","烏鴉"], noisy:["adj.","吵鬧的"], smart:["adj.","聰明的"], scientist:["n.","科學家"], special:["adj.","特別的"],
  test:["n.","測試；實驗"], university:["n.","大學"], seattle:["n.","西雅圖（美國城市）"], scary:["adj.","嚇人的"], caveman:["n.","原始人；穴居人"],
  mask:["n.","面具"], caught:["v.","抓（catch 的過去式、過去分詞）"], catch:["v.","抓"], hurt:["v.","傷害"], ring:["n.","環"], campus:["n.","校園"],
  shout:["v.","大叫"], surprising:["adj.","令人驚訝的"], dangerous:["adj.","危險的"], parent:["n.","父母（之一）"], remember:["v.","記得"],
  pest:["n.","害蟲；有害的動物"], tear:["v.","撕開"], garbage:["n.","垃圾"], belong:["v.","屬於"], intelligence:["n.","智力；聰明"],
  tool:["n.","工具"], stick:["n.","樹枝；棍子"], experiment:["n.","實驗"], wildlife:["n.","野生動物"], recognize:["v.","認出"],
  rubber:["n.","橡膠"], release:["v.","釋放"], unharmed:["adj.","未受傷的"], researcher:["n.","研究人員"], neutral:["adj.","中性的；中立的"],
  trapping:["n.","捕捉"], scold:["v.","責罵"], dive:["v.","俯衝"], ignore:["v.","不理會"], spread:["v.","散播；傳開"],
  warning:["n.","警告"], knowledge:["n.","知識"], reaction:["n.","反應"], fade:["v.","減弱；褪去"], original:["adj.","最初的"],
  single:["adj.","單一的"], memory:["n.","記憶"], community:["n.","群體；社區"], match:["v.","比得上"],
  dweller:["n.","居民"], nuisance:["n.","討厭的東西；麻煩"], raid:["v.","搜刮；突襲"], caw:["v.","（烏鴉）嘎嘎叫"], dawn:["n.","黎明"],
  droppings:["n.","（動物的）糞便"], corvid:["n.","鴉科鳥類"], raven:["n.","渡鴉"], jay:["n.","松鴉"], rank:["v.","位居；名列"],
  cognitively:["adv.","在認知上"], sophisticated:["adj.","複雜的；精密的"], caledonian:["adj.","New Caledonian 新喀里多尼亞的"],
  fashion:["v.","製作；做成"], hooked:["adj.","有鉤的"], twig:["n.","細樹枝"], illustrate:["v.","說明；展現"], vividly:["adv.","生動地"],
  conduct:["v.","進行"], biologist:["n.","生物學家"], distinguish:["v.","分辨"], individual:["adj.","個別的"], facial:["adj.","臉部的"],
  recognition:["n.","辨認"], cue:["n.","線索；提示"], clothing:["n.","衣著"], gait:["n.","步態"], don:["v.","穿戴"], donned:["v.","穿戴（don 的過去式）"],
  net:["v.","用網捕捉"], band:["v.","套上腳環"], control:["n.","對照組"], resemble:["v.","像"], associate:["v.","聯想；和…有關"],
  subsequent:["adj.","之後的"], mob:["v.","成群圍攻"], mobbed:["v.","成群圍攻（mob 的過去式）"], upside:["adv.","upside down 上下顛倒"],
  largely:["adv.","大致上"], startle:["v.","使吃驚"], merely:["adv.","僅僅"], propagate:["v.","傳播"], proportion:["n.","比例"],
  sharply:["adv.","急遽地"], encounter:["v.","遇到"], chorus:["n.","齊聲；合唱"], witness:["v.","目睹"], capture:["n.","捕捉"],
  analysis:["n.","分析"], proceedings:["n.","（學會的）會報"], royal:["adj.","皇家的"], acquire:["v.","學得；獲得"], observe:["v.","觀察"],
  accompany:["v.","陪同"], knowledgeable:["adj.","知情的；有知識的"], flockmate:["n.","同群的夥伴"], crucially:["adv.","關鍵地"],
  social:["adj.","社會的"], deliberate:["adj.","刻意的"], instruction:["n.","教導"], intensify:["v.","增強"], intensified:["v.","增強（intensify 的過去式）"], gradually:["adv.","逐漸地"],
  decline:["v.","減少；衰退"], silence:["n.","寂靜"], linger:["v.","殘留；逗留"], solely:["adv.","只；僅僅"], secondhand:["adv.","間接地；二手地"],
  reside:["v.","存在於；居住"], eventually:["adv.","最後"], grudge:["n.","怨恨；記仇"], disguise:["n.","偽裝"], marzluff:["n.","馬茲盧夫（人名）"]
};
const KEY = [["crow","noisy","smart","scary","mask","caught","hurt","campus","shout","dangerous"],
             ["pest","intelligence","experiment","recognize","release","neutral","scold","ignore","spread","warning","fade"],
             ["nuisance","sophisticated","fashion","vividly","distinguish","cue","resemble","subsequent","propagate","encounter","acquire","deliberate","intensified","linger","witness"]];

const DEFS = {
  "crow": "a large black bird with a loud, harsh call",
  "noisy": "making a lot of loud sound",
  "smart": "clever; able to learn and think quickly",
  "scary": "making you feel afraid",
  "mask": "a covering you wear over your face to hide or protect it",
  "caught": "took hold of and held an animal or person that was trying to escape",
  "hurt": "to cause pain or harm to someone",
  "campus": "the land and buildings of a university or school",
  "shout": "to say something very loudly",
  "dangerous": "likely to cause harm or injury",
  "pest": "an insect or animal that damages crops or causes trouble",
  "intelligence": "the ability to learn, understand and think",
  "experiment": "a scientific test done to find out or prove something",
  "recognize": "to know who someone is or what something is because you have seen it before",
  "release": "to let a person or animal go free",
  "neutral": "not showing any strong feeling or not taking any side",
  "scold": "to speak angrily to someone because they did something wrong",
  "ignore": "to pay no attention to something or someone",
  "spread": "to move or be passed from one person or place to many others",
  "warning": "something that tells people about a possible danger",
  "fade": "to slowly become weaker or less strong",
  "nuisance": "a person or thing that is annoying or causes trouble",
  "sophisticated": "complicated and advanced",
  "fashion": "to make something with your hands from materials",
  "vividly": "in a very clear and detailed way",
  "distinguish": "to see or recognize the difference between things",
  "cue": "a signal or sign that tells you what to do or think",
  "resemble": "to look like or be similar to someone or something",
  "subsequent": "happening after something else",
  "propagate": "to spread an idea or behavior to more and more people or animals",
  "encounter": "to meet or come across someone or something",
  "acquire": "to gain knowledge or a skill; to get something",
  "deliberate": "done on purpose and carefully planned",
  "intensified": "became stronger or greater",
  "linger": "to stay somewhere longer than expected; to continue to exist",
  "witness": "to see something happen"
};

const FIGS = {
  timeline:{svg:`<svg viewBox="0 0 600 330" role="img" aria-label="Timeline of the crow mask experiment" style="display:block;width:100%;height:auto;border-radius:6px;background:#F3F5FA">
<path d="M50 230 C170 236 250 222 330 228 S470 236 560 226" fill="none" stroke="#1A2238" stroke-width="3" stroke-linecap="round"/>
<path d="M60 222 C120 214 170 170 220 120 C250 92 280 74 310 72 C350 72 380 96 420 132 C460 168 500 200 540 214" fill="none" stroke="#D23F57" stroke-width="4" stroke-linecap="round"/>
<path d="M60 222 C120 214 170 170 220 120 C250 92 280 74 310 72 C350 72 380 96 420 132 C460 168 500 200 540 214 L540 226 L60 230Z" fill="#D23F57" opacity=".12"/>
<g fill="#1A2238"><circle cx="60" cy="229" r="6"/><circle cx="220" cy="229" r="6"/><circle cx="310" cy="228" r="6"/><circle cx="540" cy="227" r="6"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238">
<text x="20" y="22" font-size="14" font-weight="700">How many crows scolded the caveman mask?</text><text x="20" y="40" font-size="11" fill="#5A6478">對原始人面具叫罵的烏鴉有多少？（示意）</text>
<text x="44" y="256" font-size="14" font-weight="700">2006</text><text x="22" y="274" font-size="12">7 crows caught</text><text x="22" y="290" font-size="11" fill="#5A6478">抓了 7 隻、套環放走</text>
<text x="170" y="256" font-size="14" font-weight="700">Years later</text><text x="170" y="274" font-size="12">47 of 53 scold</text><text x="170" y="290" font-size="11" fill="#5A6478">53 隻裡 47 隻在罵</text>
<text x="300" y="256" font-size="14" font-weight="700">2013</text><text x="300" y="274" font-size="12">the peak</text><text x="300" y="290" font-size="11" fill="#5A6478">叫罵最多的時候</text>
<text x="492" y="256" font-size="14" font-weight="700">2023</text><text x="470" y="274" font-size="12">no crow scolds</text><text x="470" y="290" font-size="11" fill="#5A6478">再也沒有烏鴉罵他</text>
<text x="412" y="62" font-size="12" font-weight="700" fill="#D23F57">Young crows learn from</text><text x="412" y="78" font-size="12" font-weight="700" fill="#D23F57">parents and flockmates</text><text x="412" y="94" font-size="11" fill="#5A6478">小烏鴉看爸媽、同伴罵也學會</text>
</g>
</svg>`,
    cap:"原始人面具實驗的 17 年：叫罵的烏鴉先是越來越多，等最早的烏鴉都老去，才慢慢消失。",
    credit:"圖解：winglish.tw（資料：Marzluff 等人的研究與報導）"},
  photo:{src:"https://images.unsplash.com/photo-1746980532965-284160ffdc31?auto=format&fit=crop&w=1400&q=70", local:"crows-2.jpg", alt:"A dark crow staring at the camera", fb:"（烏鴉的照片）",
    cap:"烏鴉能認出個別的人臉，還會把「這個人很危險」的消息傳給同伴和下一代。",
    credit:'Photo: vegonaise / <a href="https://unsplash.com/photos/a-dark-crow-stares-with-an-intense-gaze-9SeeC-PGOlo" target="_blank" rel="noopener">Unsplash</a>'}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["How to make a caveman mask","Why crows are dangerous to people","How crows remembered a face and told other crows","Where crows build their nests"],
   "a":2,"exp":"文章講烏鴉記住戴面具的人，還讓其他烏鴉也一起叫罵，答案是 (C)。"},
  {"q":"2. What did the crows do when people wore a different mask?","tag":"細節",
   "opts":["They did not care.","They flew away.","They shouted even louder.","They attacked the people."],
   "a":0,"exp":"第二段：戴的是別的面具，烏鴉就不理他，答案是 (A)。"},
  {"q":"3. Why did crows that were never caught shout at the mask?","tag":"推論",
   "opts":["The mask was very ugly.","They learned about the dangerous face from other crows.","Marzluff gave them food.","They were caught later."],
   "a":1,"exp":"第二、三段：那七隻烏鴉把危險的臉「告訴」其他烏鴉，小烏鴉也從爸媽那裡學會，答案是 (B)。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["Crows Are Pests in the City","How Crows Make Tools","A University in Seattle","Crows Never Forget a Face, and They Share It"],
   "a":3,"exp":"全文說烏鴉記得面具、還把警告傳給其他烏鴉，(D) 最適合。"},
  {"q":"2. Why did the researchers also wear a \"neutral\" mask?","tag":"推論",
   "opts":["To compare it with the caveman mask","Because the caveman mask was broken","To make the crows happy","To catch more crows"],
   "a":0,"exp":"中性面具和抓鳥毫無關係，用來和原始人面具做比較，確認烏鴉真的是記得「抓過牠們的臉」，答案是 (A)。"},
  {"q":"3. Which of the following is TRUE according to the passage?","tag":"細節",
   "opts":["Only the seven caught crows scolded the mask.","The crows scolded the neutral mask more.","Young crows learned to scold the mask by watching their parents.","The scolding grew stronger every year until 2023."],
   "a":2,"exp":"(C) 正確（第三段）。(A) 錯，很多沒被抓過的也加入；(B) 錯，中性面具大多被忽略；(D) 錯，強烈幾年後就慢慢減弱。"},
  {"q":"4. What happened in September 2023?","tag":"細節",
   "opts":["Marzluff caught seven more crows.","No crow scolded Marzluff in the caveman mask.","The crows attacked Marzluff.","Marzluff stopped studying crows."],
   "a":1,"exp":"第四段：2023 年 9 月，他戴面具走過校園，沒有任何一隻烏鴉罵他，答案是 (B)。"}
 ],
 [
  {"q":"1. What is the main point of the last paragraph?","tag":"主旨",
   "opts":["Crows have bigger brains than people.","Crows forget things very quickly.","Scientists should stop wearing masks.","A crow community can share and keep a memory, not just one bird."],
   "a":3,"exp":"最後一段：對烏鴉來說，記憶不一定只在單一大腦裡，可以由整個群體儲存、分享、遺忘，答案是 (D)。"},
  {"q":"2. The word \"propagated\" in the third paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["disappeared","spread","changed color","was hidden"],
   "a":1,"exp":"後面接著說叫罵的烏鴉比例急遽上升、遠超過目睹捕捉的數量，可知 propagate 是「傳播」，答案是 (B)。"},
  {"q":"3. Why did the researchers wear the mask upside down or with a hat?","tag":"推論",
   "opts":["To check whether the crows really recognized the face","To protect themselves from the rain","To make the experiment more fun","To catch more crows"],
   "a":0,"exp":"第二段：研究想排除衣著、步態等線索；面具倒戴或被遮住烏鴉仍會罵，說明牠們認的是那張臉，答案是(A)。"},
  {"q":"4. According to the passage, how did young crows learn to respond to the mask?","tag":"細節",
   "opts":["Marzluff trained them with food.","They were caught in 2006.","They observed their parents scolding it.","Their parents deliberately gave them lessons."],
   "a":2,"exp":"第三段：幼鳥是透過觀察父母學會的，而且這是社會學習、不是刻意教導，所以 (C) 對、(D) 錯。"},
  {"q":"5. Which of the following is NOT true according to the passage?","tag":"細節",
   "opts":["New Caledonian crows can make hooked tools.","By 2023, all seven banded crows had died.","The crows mostly ignored the neutral mask.","The crows attacked people who fed them."],
   "a":3,"exp":"文中沒有說烏鴉攻擊餵牠們的人，(D) 不正確。其他三項分別出現在第一、四、二段。"}
 ]
];

const META = {
 id:"crows", title:"Never Forget a Face", category:"動物冷知識",
 dek:"一位科學家戴著原始人面具抓了七隻烏鴉，結果整個校園的烏鴉罵了他十幾年。烏鴉不只記仇，還會把「這個人很危險」傳給同伴和下一代。",
 date:"2026/11/2",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1559649191-b9d89ad31819?auto=format&fit=crop&w=1600&q=70" data-local="crows-hero.jpg" alt="A black crow standing on a rock" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#DCE4EE"/><path d="M0 330 C180 300 360 340 560 314 S760 300 800 312 V420 H0Z" fill="#B9A58A"/>
<path d="M330 300 C320 240 350 190 400 170 C430 158 470 160 494 178 C520 170 548 176 560 190 C536 192 520 200 510 214 C520 246 500 286 460 304 C420 320 360 322 330 300Z" fill="#1A2238"/>
<path d="M556 190 C580 194 600 200 612 206 C592 210 572 210 552 204Z" fill="#2C355A"/><circle cx="520" cy="190" r="5" fill="#E9EEF5"/>
<path d="M352 300 C330 340 300 360 270 372 C300 366 330 354 352 336Z" fill="#1A2238"/><g stroke="#1A2238" stroke-width="5" stroke-linecap="round"><path d="M420 310 L414 350"/><path d="M450 306 L452 348"/></g></svg>
<figcaption>烏鴉屬於鴉科，是鳥類中最聰明的家族之一。<span class="credit">Photo: Jesse van Vliet / Unsplash</span></figcaption>`,
 fact:"烏鴉看到同伴死掉時，常會聚集過來大叫。科學家認為，牠們是在了解這裡發生了什麼危險，之後會避開那個地方一陣子。",
 next:{title:"Why Does Spicy Food Feel Hot?", href:"read.html#chili"}
};
const USAGE = {
  "crow": ["a black crow · crows gather · a flock of crows", "A crow stole a piece of bread from my lunch box.", "一隻烏鴉從我的便當盒偷走一片麵包。"],
  "noisy": ["noisy neighbors · a noisy street · make it noisy", "I can't sleep because our neighbors are too noisy.", "鄰居太吵了，我睡不著。"],
  "smart": ["a smart kid · smart enough to … · a smart move", "Pigs are smart enough to learn their names.", "豬聰明到能學會自己的名字。"],
  "scary": ["a scary movie · look scary · scary stories", "We told scary stories around the campfire.", "我們圍著營火講恐怖故事。"],
  "mask": ["wear a mask · a face mask · put on a mask", "Please wear a mask if you have a cold.", "如果你感冒了，請戴口罩。"],
  "caught": ["get caught in the rain · be caught cheating · caught a cold", "We got caught in the rain on our way home.", "我們在回家路上遇到大雨。"],
  "hurt": ["hurt oneself · hurt sb's feelings · get hurt", "Be careful not to hurt yourself on the slide.", "溜滑梯時小心別傷到自己。"],
  "campus": ["on campus · a college campus · campus life", "Freshmen usually live on campus in their first year.", "新生第一年通常住在校園裡。"],
  "shout": ["shout at sb · shout for help · shout loudly", "Please don't shout at your little brother.", "請不要對你弟弟大吼。"],
  "dangerous": ["dangerous animals · it is dangerous to … · a dangerous road", "It is dangerous to swim in the river after heavy rain.", "大雨過後在河裡游泳很危險。"],
  "pest": ["garden pests · pest control · a pest problem", "Ladybugs eat aphids, so farmers like them as natural pest control.", "瓢蟲會吃蚜蟲，所以農夫喜歡用牠們來天然防治害蟲。"],
  "intelligence": ["artificial intelligence · high intelligence · test one's intelligence", "Dolphins are famous for their high intelligence.", "海豚以高智力聞名。"],
  "experiment": ["do/conduct an experiment · a science experiment", "We did an experiment to see which ice melts fastest.", "我們做了一個實驗，看哪種冰塊融得最快。"],
  "recognize": ["recognize sb's voice · recognize sb by … · hardly recognize", "I hardly recognized my old classmate after ten years.", "十年沒見，我幾乎認不出我的老同學。"],
  "release": ["release a bird · release sb from … · be released", "The volunteers released the healed sea turtle back into the ocean.", "志工們把治好的海龜放回大海。"],
  "neutral": ["stay neutral · a neutral expression · neutral colors", "The referee must stay neutral during the game.", "裁判在比賽中必須保持中立。"],
  "scold": ["scold sb for … · get scolded", "My mom scolded me for coming home late.", "我晚回家，被媽媽罵了一頓。"],
  "ignore": ["ignore sb · ignore a warning · completely ignore", "He ignored the doctor's warning and kept smoking.", "他不理會醫生的警告，繼續抽菸。"],
  "spread": ["news spreads · spread quickly · spread a rumor", "The news of the earthquake spread quickly online.", "地震的消息很快在網路上傳開。"],
  "warning": ["a warning sign · give a warning · without warning", "The storm hit the town without warning.", "暴風雨毫無預警地襲擊小鎮。"],
  "fade": ["fade away · memories fade · the color fades", "The colors of my old T-shirt have faded after many washes.", "我那件舊 T 恤洗了很多次，顏色都褪了。"],
  "nuisance": ["a public nuisance · make a nuisance of oneself", "The loud motorcycles are a nuisance to people living nearby.", "吵鬧的機車對附近居民來說是一大困擾。"],
  "sophisticated": ["sophisticated technology · a sophisticated system · highly sophisticated", "Modern cars use sophisticated computer systems.", "現代汽車使用精密的電腦系統。"],
  "fashion": ["fashion A out of B · fashion A into B", "The boy fashioned a small boat out of an old milk carton.", "那個男孩用舊牛奶盒做了一艘小船。"],
  "vividly": ["vividly remember · vividly describe · vividly colored", "I still vividly remember my first day of elementary school.", "我仍然清楚記得我小學第一天的情景。"],
  "distinguish": ["distinguish between A and B · distinguish A from B", "Young children can't always distinguish between dreams and reality.", "小孩子不一定能分辨夢境和現實。"],
  "cue": ["a visual cue · take one's cue from · social cues", "Babies learn a lot from visual cues like their mother's face.", "寶寶從媽媽的臉之類的視覺線索中學到很多。"],
  "resemble": ["closely resemble · resemble each other · resemble one's father", "The twins closely resemble each other, but their personalities are very different.", "那對雙胞胎長得很像，但個性非常不同。"],
  "subsequent": ["subsequent years · subsequent events · in subsequent studies", "The first test failed, but subsequent tests were successful.", "第一次測試失敗了，但之後的測試都成功了。"],
  "propagate": ["propagate ideas · propagate a rumor · propagate plants", "Social media can propagate false information very quickly.", "社群媒體能很快地傳播錯誤資訊。"],
  "encounter": ["encounter a problem · encounter difficulties · encounter sb", "Hikers sometimes encounter wild monkeys on this trail.", "登山客有時會在這條步道上遇到野生猴子。"],
  "acquire": ["acquire knowledge · acquire a skill · acquire a habit", "Children acquire language naturally by listening to people around them.", "孩子透過聽身邊的人說話，自然學會語言。"],
  "deliberate": ["a deliberate attempt · a deliberate choice · deliberate lie", "It wasn't an accident; it was a deliberate attempt to hurt him.", "那不是意外，而是蓄意要傷害他。"],
  "intensified": ["intensify efforts · the storm intensified · fighting intensified", "The typhoon intensified as it moved closer to Taiwan.", "颱風靠近台灣時增強了。"],
  "linger": ["linger in the air · linger on · a lingering smell", "The smell of fried fish lingered in the kitchen for hours.", "炸魚的味道在廚房裡殘留了好幾個小時。"],
  "witness": ["witness an accident · witness a crime · witness history", "Several people witnessed the accident and called the police.", "有好幾個人目睹了車禍並報了警。"]
};


/* 導讀模式＋單字小練習 */
const GUIDE = [[{"after": 0, "q": "What did John Marzluff wear when he caught the crows?", "opts": ["A scary caveman mask", "A black coat", "A bird costume"], "a": 0, "hint": "看 He put on a scary ____ mask。"}, {"after": 1, "q": "How did the crows react to the caveman mask later?", "opts": ["They flew over and shouted at the person.", "They flew away quietly.", "They did not care."], "a": 0, "hint": "找 the crows flew over and ____ at that person。"}, {"after": 2, "q": "When did the crows stop shouting at the mask?", "opts": ["In 2023", "In 2006", "After one week"], "a": 0, "hint": "看這段最後一句：Finally, in ____, no crow shouted anymore。"}], [{"after": 0, "q": "What can some kinds of crows do?", "opts": ["Make simple tools from sticks", "Speak human words", "Open locked doors"], "a": 0, "hint": "看 some kinds of crows can even make…"}, {"after": 1, "q": "How did the crows treat the neutral mask?", "opts": ["They mostly ignored it.", "They scolded it loudly.", "They dived at it in groups."], "a": 0, "hint": "看最後：but mostly ____ the neutral face。"}, {"after": 2, "q": "How did young crows learn to scold the mask?", "opts": ["By watching their parents do it", "From the scientists", "By being caught"], "a": 0, "hint": "找 Young crows that had seen their parents…"}], [{"after": 1, "q": "Why did the researchers wear a mask?", "opts": ["To test face recognition apart from clothing or walking style", "To scare the crows away from campus", "To hide from other students"], "a": 0, "hint": "看 To separate facial recognition from cues such as…"}, {"after": 2, "q": "How did the warning spread among the crows?", "opts": ["Through social learning by watching others", "Through one crow that taught the others", "Through signals from the scientists"], "a": 0, "hint": "看 Crucially, this was social learning rather than…"}, {"after": 3, "q": "What happened in September 2023?", "opts": ["No crow scolded the caveman mask.", "All the crows attacked Marzluff.", "The seven banded crows were caught again."], "a": 0, "hint": "看 was met with complete ____。"}]];
const VPRAC = [[{"s": "Don't ____ in the library; people are studying.", "opts": ["shout", "hurt", "mask", "campus"], "a": 0, "w": "shout"}, {"s": "It is ____ to swim in the river after heavy rain.", "opts": ["dangerous", "noisy", "smart", "campus"], "a": 0, "w": "dangerous"}, {"s": "The kids wore ____ to the Halloween party.", "opts": ["masks", "crows", "campuses", "shouts"], "a": 0, "w": "mask"}, {"s": "The fisherman ____ a huge fish this morning.", "opts": ["caught", "hurt", "shouted", "masked"], "a": 0, "w": "caught"}, {"s": "Our school ____ has a big library and two gyms.", "opts": ["campus", "mask", "crow", "shout"], "a": 0, "w": "campus"}], [{"s": "I didn't ____ my teacher at first because she had cut her hair short.", "opts": ["recognize", "release", "ignore", "scold"], "a": 0, "w": "recognize"}, {"s": "Mom will ____ me if I come home late again.", "opts": ["scold", "release", "recognize", "spread"], "a": 0, "w": "scold"}, {"s": "The scientists did an ____ to test the new medicine.", "opts": ["experiment", "intelligence", "warning", "pest"], "a": 0, "w": "experiment"}, {"s": "The colors of my old T-shirt have started to ____.", "opts": ["fade", "scold", "release", "spread"], "a": 0, "w": "fade"}, {"s": "Rats are a common ____ in big cities.", "opts": ["pest", "warning", "experiment", "intelligence"], "a": 0, "w": "pest"}], [{"s": "Many people say I ____ my mother, especially my eyes.", "opts": ["resemble", "distinguish", "propagate", "acquire"], "a": 0, "w": "resemble"}, {"s": "I still remember my first day at school ____.", "opts": ["vividly", "deliberate", "sophisticated", "subsequent"], "a": 0, "w": "vividly"}, {"s": "Can you ____ between a crow and a raven?", "opts": ["distinguish", "resemble", "linger", "witness"], "a": 0, "w": "distinguish"}, {"s": "Three people ____ the accident and called the police.", "opts": ["witnessed", "resembled", "acquired", "propagated"], "a": 0, "w": "witness"}, {"s": "The barking dog next door is a real ____.", "opts": ["nuisance", "cue", "encounter", "fashion"], "a": 0, "w": "nuisance"}]];
return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE,GUIDE,VPRAC});
})();
