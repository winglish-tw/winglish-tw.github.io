/* winglish.tw 閱讀館文章資料：Why Does Spicy Food Feel Hot? */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1,2,3,4],[5,6,7],[8,9,10],[11,12,13]], figs:{2:"scoville"}, heads:{1:"Milk, Not Water",2:"How Hot Is Hot?",3:"A Pepper's Plan"},
   sents:[
    ["Why does your mouth feel like it is on fire when you eat a chili pepper?","為什麼吃辣椒的時候，嘴巴會覺得像著火了一樣？"],
    ["The answer is a chemical called capsaicin.","答案是一種叫做「辣椒素」的化學物質。"],
    ["Capsaicin is not really a taste like sweet or salty.","辣椒素其實不像甜或鹹那樣是一種味道。"],
    ["It tricks the nerves in your mouth, so your brain thinks something hot is burning you.","它會騙過你嘴巴裡的神經，讓大腦以為有很燙的東西正在燙你。"],
    ["That is why you sweat, your face turns red, and you want to drink something cold.","這就是為什麼你會流汗、臉變紅，還很想喝冰的東西。"],
    ["Many people drink water after eating spicy food, but water does not help much.","很多人吃了辣的東西會喝水，但喝水其實沒什麼用。"],
    ["Capsaicin is like oil, so water just moves it around your mouth.","辣椒素就像油一樣，所以水只會把它在嘴巴裡推來推去。"],
    ["Milk works better because it can wash the capsaicin away.","牛奶比較有效，因為它能把辣椒素沖走。"],
    ["In 1912, an American scientist named Wilbur Scoville made a way to measure how hot peppers are.","1912 年，一位叫威爾伯．史高維爾的美國科學家，發明了一種測量辣椒有多辣的方法。"],
    ["A bell pepper has 0 heat units, and a jalapeño has a few thousand.","甜椒是 0 個辣度單位，墨西哥青辣椒則有幾千個。"],
    ["In 2023, a pepper called Pepper X became the hottest pepper in the world, with about 2.69 million heat units!","2023 年，一種叫做「X 辣椒」的辣椒成為全世界最辣的辣椒，大約有 269 萬個辣度單位！"],
    ["Here is a fun fact: birds do not feel the heat of chili peppers at all.","有個有趣的冷知識：鳥完全感覺不到辣椒的辣。"],
    ["They eat the peppers and fly far away, and the seeds come out in their droppings, so new chili plants can grow in new places.","牠們吃了辣椒、飛到很遠的地方，種子跟著糞便排出來，新的辣椒就能在新的地方長出來。"],
    ["Maybe the chili pepper's fire is only a warning for animals like us!","也許辣椒的「火」，只是用來警告像我們這樣的動物吧！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1,2,3,4],[5,6,7],[8,9,10,11],[12,13,14]], figs:{2:"scoville"}, heads:{1:"Putting Out the Fire",2:"Measuring the Heat",3:"Why Birds Don't Care"},
   sents:[
    ["For some people, a meal without chili is not a meal at all; for others, a single bite is enough to bring tears to their eyes.","對有些人來說，沒有辣椒就不算一餐；對另一些人來說，咬一口就足以讓他們眼淚直流。"],
    ["Either way, the burning feeling comes from capsaicin, a chemical found mostly in the white inner parts of the pepper that hold the seeds.","不管是哪一種，那種灼熱的感覺都來自辣椒素；這種化學物質主要藏在辣椒裡面、連著種子的白色部分。"],
    ["Surprisingly, spiciness is not a taste at all.","令人意外的是，「辣」根本不是一種味道。"],
    ["Capsaicin attaches to pain receptors in the mouth that normally warn us about high temperatures, so the brain reacts as if the tongue were actually being burned.","辣椒素會黏在嘴巴裡平常負責警告高溫的痛覺受器上，於是大腦的反應就好像舌頭真的被燙傷了一樣。"],
    ["This explains why spicy food makes us sweat and breathe faster even though its temperature has not changed.","這說明了為什麼辣的食物溫度明明沒變，卻會讓我們流汗、呼吸變快。"],
    ["When our mouths are on fire, most of us reach for a glass of cold water, but this is not the best choice.","嘴巴辣到冒火的時候，大部分人都會伸手拿一杯冰水，但這並不是最好的選擇。"],
    ["Since capsaicin dissolves in oil rather than water, water simply spreads it around.","因為辣椒素溶於油、不溶於水，喝水只會把它推散到整個嘴巴。"],
    ["Milk is more effective because a protein in it called casein surrounds the capsaicin and carries it away.","牛奶比較有效，因為牛奶裡有一種叫酪蛋白的蛋白質，能把辣椒素包住、帶走。"],
    ["In 1912, an American chemist named Wilbur Scoville created a scale to measure how spicy a pepper is.","1912 年，美國化學家威爾伯．史高維爾設計了一套量表，用來測量辣椒有多辣。"],
    ["On this Scoville scale, a sweet bell pepper scores zero, while a jalapeño scores a few thousand units.","在這個史高維爾辣度表上，甜椒是零分，墨西哥青辣椒則有幾千個單位。"],
    ["Pepper growers have since competed to create hotter and hotter peppers.","從那之後，辣椒農就一直在比賽，要種出越來越辣的辣椒。"],
    ["In 2023, Guinness World Records named Pepper X the world's hottest chili, at an average of about 2.69 million units, hotter than many pepper sprays used by police.","2023 年，金氏世界紀錄宣布「X 辣椒」為全世界最辣的辣椒，平均大約 269 萬個單位，比許多警察用的辣椒噴霧還辣。"],
    ["Interestingly, birds cannot feel capsaicin's heat at all.","有趣的是，鳥完全感覺不到辣椒素的辣。"],
    ["Scientists believe this benefits the plant: mammals chew up and destroy the seeds, but birds swallow them whole and spread them over long distances in their droppings.","科學家認為這對植物有好處：哺乳動物會把種子嚼爛，鳥卻會把種子整顆吞下，再隨著糞便散播到很遠的地方。"],
    ["In other words, the \"fire\" in chili peppers may be a clever way to choose which animals get to eat them.","換句話說，辣椒裡的「火」，可能是一種聰明的方法，用來挑選哪些動物可以吃它。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1,2,3,4],[5,6,7],[8,9,10],[11,12,13,14]], figs:{2:"scoville"}, heads:{1:"Why Water Fails",2:"Quantifying Pain",3:"An Evolutionary Gamble"},
   sents:[
    ["Every day, people around the world deliberately eat a substance that their bodies interpret as pain, a habit that, from a biological standpoint, is distinctly odd.","每天，世界各地的人都刻意吃下一種會被身體當成「疼痛」的物質；從生物學的角度看，這個習慣實在相當古怪。"],
    ["The culprit is capsaicin, a compound concentrated not in the seeds, as is widely believed, but in the pale, spongy tissue to which the seeds are attached.","罪魁禍首是辣椒素；這種化合物並不像一般人以為的集中在種子裡，而是集中在種子附著的那片淡色、海綿狀的組織中。"],
    ["Capsaicin binds to a receptor known as TRPV1, which ordinarily fires when the tongue encounters temperatures above roughly 43°C.","辣椒素會和一種叫做 TRPV1 的受器結合；這種受器平常在舌頭碰到大約 43°C 以上的溫度時才會被觸發。"],
    ["Fooled into perceiving a burn where none exists, the brain responds accordingly: heart rate climbs, sweat glands activate and the eyes begin to water.","大腦被騙得以為有灼傷，其實根本沒有，於是做出相應的反應：心跳加快、汗腺啟動、眼睛開始流淚。"],
    ["Some researchers suggest that the brain also releases endorphins in response, which may partly explain why chili lovers keep coming back for more.","有些研究者認為，大腦也會因此釋放腦內啡，這或許能部分解釋為什麼愛吃辣的人會一吃再吃。"],
    ["The chemistry of capsaicin also explains why the instinctive remedy so often fails.","辣椒素的化學性質，也說明了人們直覺想到的解辣方法為什麼常常沒用。"],
    ["Being fat-soluble, the compound does not dissolve in water; gulping a glass merely redistributes it across the mouth.","這種化合物是脂溶性的，不溶於水；大口灌下一杯水，只會把它重新分散到整個嘴巴。"],
    ["Dairy products fare better because casein, a protein in milk, acts somewhat like a detergent, binding to capsaicin molecules and rinsing them away.","乳製品的效果比較好，因為牛奶裡的酪蛋白有點像清潔劑，會和辣椒素分子結合，把它們沖走。"],
    ["In 1912, the American pharmacist Wilbur Scoville devised a method of quantifying this heat: a pepper extract was diluted in sugar water until a panel of tasters could no longer detect any burn.","1912 年，美國藥劑師威爾伯．史高維爾設計出一套把辣度量化的方法：把辣椒萃取液加進糖水裡稀釋，直到一組試吃員再也嚐不出任何辣味為止。"],
    ["The degree of dilution required became the pepper's rating in Scoville Heat Units, and although laboratories today rely on chromatography rather than human tongues, the name has stuck.","需要稀釋的倍數，就成了這種辣椒的「史高維爾辣度單位」；雖然現在的實驗室改用層析法，而不是靠人的舌頭，這個名稱卻一直沿用下來。"],
    ["By this measure, a bell pepper registers zero and a jalapeño a few thousand, whereas Pepper X, certified by Guinness World Records in 2023, averages approximately 2.69 million, hot enough to outrank many police pepper sprays.","依照這個標準，甜椒是零，墨西哥青辣椒是幾千，而 2023 年獲金氏世界紀錄認證的「X 辣椒」，平均約達 269 萬，辣到勝過許多警用辣椒噴霧。"],
    ["Perhaps the most intriguing question is why chilies produce capsaicin in the first place.","或許最耐人尋味的問題是：辣椒當初為什麼要製造辣椒素？"],
    ["One leading explanation, known as directed deterrence, holds that the compound discourages mammals, whose teeth crush seeds, while leaving birds unaffected, since their version of the TRPV1 receptor is insensitive to it.","一個主流的解釋叫做「定向嚇阻」：這種化合物能嚇退牙齒會把種子壓碎的哺乳動物，卻對鳥類毫無影響，因為鳥類的 TRPV1 受器對它不敏感。"],
    ["Birds swallow the seeds intact and disperse them far from the parent plant, making them ideal partners.","鳥會把種子完整地吞下，再把它們散播到離母株很遠的地方，因此是最理想的夥伴。"],
    ["Seen in this light, humanity's passion for spicy food is an evolutionary accident: we have learned to crave the very weapon designed to keep us away.","從這個角度來看，人類對辣的熱愛是一場演化上的意外：我們竟然學會了渴望那個本來是用來把我們趕走的武器。"]
 ]}
];

const GLOSS = {
  mouth:["n.","嘴巴"], fire:["n.","火"], chili:["n.","辣椒"], pepper:["n.","辣椒；胡椒；bell pepper 甜椒"], chemical:["n.","化學物質"],
  capsaicin:["n.","辣椒素"], taste:["n.","味道"], sweet:["adj.","甜的"], salty:["adj.","鹹的"], trick:["v.","欺騙"],
  nerve:["n.","神經"], brain:["n.","大腦"], burn:["v.","燒；燙"], sweat:["v.","流汗"], spicy:["adj.","辣的"],
  oil:["n.","油"], milk:["n.","牛奶"], wash:["v.","沖洗"], measure:["v.","測量"], bell:["n.","鈴；bell pepper 甜椒"],
  jalapeño:["n.","墨西哥青辣椒"], jalape:["n.","jalapeño 墨西哥青辣椒"], unit:["n.","單位"], million:["n.","百萬"], hottest:["adj.","最辣的；最熱的"],
  bird:["n.","鳥"], seed:["n.","種子"], droppings:["n.","（動物的）糞便"], warning:["n.","警告"], plant:["n.","植物"],
  meal:["n.","一餐"], bite:["n.","一口"], tear:["n.","眼淚"], inner:["adj.","內部的"], spiciness:["n.","辣度；辣味"],
  attach:["v.","附著"], pain:["n.","疼痛"], receptor:["n.","受器"], normally:["adv.","通常"], temperature:["n.","溫度"],
  react:["v.","反應"], tongue:["n.","舌頭"], breathe:["v.","呼吸"], dissolve:["v.","溶解"], spread:["v.","散開；散播"],
  effective:["adj.","有效的"], protein:["n.","蛋白質"], casein:["n.","酪蛋白"], surround:["v.","包圍"], chemist:["n.","化學家"],
  scale:["n.","量表；等級"], score:["v.","得分"], grower:["n.","種植者"], compete:["v.","競爭"], guinness:["n.","Guinness World Records 金氏世界紀錄"],
  average:["n.","平均"], spray:["n.","噴霧"], police:["n.","警察"], benefit:["v.","對…有益"], mammal:["n.","哺乳動物"],
  chew:["v.","嚼"], destroy:["v.","破壞"], swallow:["v.","吞"], distance:["n.","距離"], clever:["adj.","聰明的"],
  deliberately:["adv.","刻意地"], substance:["n.","物質"], interpret:["v.","解讀；理解為"], biological:["adj.","生物學的"],
  standpoint:["n.","觀點；角度"], distinctly:["adv.","明顯地"], odd:["adj.","古怪的"], culprit:["n.","罪魁禍首"], compound:["n.","化合物"],
  concentrate:["v.","集中"], pale:["adj.","淡色的"], spongy:["adj.","海綿狀的"], tissue:["n.","組織"], bind:["v.","結合"], binds:["v.","結合（bind 的第三人稱單數）"],
  ordinarily:["adv.","平常"], encounter:["v.","碰到"], perceive:["v.","察覺；感知"], accordingly:["adv.","相應地"], gland:["n.","腺體"],
  activate:["v.","啟動"], release:["v.","釋放"], endorphin:["n.","腦內啡"], instinctive:["adj.","本能的；直覺的"], remedy:["n.","解決辦法；療法"],
  soluble:["adj.","可溶的；fat-soluble 脂溶性的"], gulp:["v.","大口吞"], merely:["adv.","只是"], redistribute:["v.","重新分配；重新分散"],
  dairy:["adj.","乳製的"], fare:["v.","進展；表現"], detergent:["n.","清潔劑"], molecule:["n.","分子"], rinse:["v.","沖洗"],
  pharmacist:["n.","藥劑師"], devise:["v.","設計；想出"], quantify:["v.","量化"], extract:["n.","萃取物"], dilute:["v.","稀釋"],
  panel:["n.","一組（專家、評審）"], detect:["v.","察覺"], dilution:["n.","稀釋"], rating:["n.","評等"], chromatography:["n.","層析法"],
  register:["v.","顯示（數值）"], certify:["v.","認證"], approximately:["adv.","大約"], outrank:["v.","勝過；等級高於"],
  intriguing:["adj.","耐人尋味的"], directed:["adj.","定向的"], deterrence:["n.","嚇阻"], discourage:["v.","使打消念頭"],
  crush:["v.","壓碎"], unaffected:["adj.","不受影響的"], insensitive:["adj.","不敏感的"], intact:["adj.","完整的"], disperse:["v.","散播"],
  ideal:["adj.","理想的"], partner:["n.","夥伴"], humanity:["n.","人類"], passion:["n.","熱愛"], evolutionary:["adj.","演化的"],
  crave:["v.","渴望"], weapon:["n.","武器"], scoville:["n.","史高維爾（人名；辣度單位）"]
};
const KEY = [["chili","pepper","chemical","taste","trick","nerve","sweat","spicy","measure","seed"],
             ["bite","receptor","temperature","react","dissolve","effective","protein","scale","compete","mammal","swallow"],
             ["deliberately","interpret","culprit","compound","perceive","remedy","dilute","quantify","intriguing","deterrence","crush","intact","disperse","crave","weapon"]];

const DEFS = {
  "chili": "a small hot-tasting pepper used in cooking",
  "pepper": "a hollow vegetable that can be red, green or yellow; some kinds taste hot",
  "chemical": "a substance made by or used in chemistry",
  "taste": "the flavor of something that you sense in your mouth",
  "trick": "to make someone believe something that is not true",
  "nerve": "a long thin fiber that carries messages between the brain and other parts of the body",
  "sweat": "to produce liquid through your skin when you are hot or nervous",
  "spicy": "having a strong, hot flavor from spices",
  "measure": "to find out the size, amount or degree of something",
  "seed": "a small hard part of a plant from which a new plant grows",
  "bite": "the amount of food you take into your mouth at one time",
  "receptor": "a nerve ending or cell that receives signals such as heat, light or chemicals",
  "temperature": "how hot or cold something is",
  "react": "to change or behave in a certain way because of something",
  "dissolve": "to mix with a liquid and become part of it",
  "effective": "working well and producing the result you want",
  "protein": "a substance found in foods such as meat and milk that the body needs to grow",
  "scale": "a range of numbers or levels used to measure something",
  "compete": "to try to get something that others are also trying to get",
  "mammal": "an animal that drinks milk from its mother when young, such as a dog or a human",
  "swallow": "to make food or drink go down your throat",
  "deliberately": "on purpose; intentionally",
  "interpret": "to understand something in a particular way",
  "culprit": "the person or thing responsible for a problem",
  "compound": "a substance made of two or more elements joined together",
  "perceive": "to notice or experience something through the senses",
  "remedy": "a way of dealing with or curing a problem",
  "dilute": "to make a liquid weaker by adding water or another liquid",
  "quantify": "to measure or express something as a number",
  "intriguing": "very interesting because it is unusual or mysterious",
  "deterrence": "the act of stopping someone from doing something by making them afraid",
  "crush": "to press something so hard that it breaks or loses its shape",
  "intact": "not damaged; complete",
  "disperse": "to spread or send things over a wide area",
  "crave": "to want something very strongly",
  "weapon": "an object used for fighting or attacking"
};

const FIGS = {
  scoville:{svg:`<svg viewBox="0 0 600 350" role="img" aria-label="The Scoville scale from bell pepper to Pepper X" style="display:block;width:100%;height:auto;border-radius:6px;background:#FFF7EC">
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238">
<text x="24" y="30" font-size="15" font-weight="700">The Scoville Scale: How hot is it?</text><text x="24" y="48" font-size="11" fill="#5A6478">史高維爾辣度表（SHU 辣度單位，數字越大越辣）</text>
</g>
<g stroke="#E7D6BF" stroke-width="1"><path d="M190 70 V320"/><path d="M290 70 V320"/><path d="M390 70 V320"/><path d="M440 70 V320"/></g>
<g>
<path d="M190 82 h4 c3 0 3 26 0 26 h-4Z" fill="#7FB08F"/>
<path d="M190 130 h135 c8 0 8 26 0 26 h-135Z" fill="#9CC46A"/>
<path d="M190 178 h200 c8 0 8 26 0 26 h-200Z" fill="#F2A541"/>
<path d="M190 226 h261 c8 0 8 26 0 26 h-261Z" fill="#E4573D"/>
<path d="M190 274 h272 c8 0 8 26 0 26 h-272Z" fill="#B0263C"/>
</g>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238" font-size="13" font-weight="700">
<text x="24" y="100">Bell pepper</text><text x="24" y="148">Jalapeño</text><text x="24" y="196">Habanero</text><text x="24" y="244">Carolina Reaper</text><text x="24" y="292">Pepper X</text>
</g>
<g font-family="Noto Sans TC,sans-serif" font-size="10.5" fill="#5A6478">
<text x="24" y="114">甜椒</text><text x="24" y="162">墨西哥青辣椒</text><text x="24" y="210">哈瓦那辣椒</text><text x="24" y="258">卡羅萊納死神</text><text x="24" y="306">X 辣椒（2023 年世界紀錄）</text>
</g>
<g font-family="Noto Sans TC,sans-serif" font-size="12.5" font-weight="700" fill="#1A2238">
<text x="202" y="100">0</text><text x="338" y="148">about 2,500–8,000</text><text x="402" y="196">100,000+</text><text x="464" y="244">1.64 million</text><text x="475" y="292" fill="#B0263C">2.69 million</text>
</g>
<g font-family="Noto Sans TC,sans-serif" font-size="10" fill="#8A7A66"><text x="186" y="336">0</text><text x="276" y="336">1,000</text><text x="368" y="336">100,000</text><text x="420" y="336">1 million</text></g>
</svg>`,
    cap:"從不辣的甜椒到 2023 年的世界紀錄「X 辣椒」。量表用對數刻度畫，每往右一格，辣度都差了很多倍。",
    credit:"圖解：winglish.tw（資料：金氏世界紀錄等）"}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["How to grow chili peppers at home","Why chili peppers feel hot and some fun facts about them","Why milk is good for your bones","How birds find food"],
   "a":1,"exp":"文章講辣椒為什麼會辣、怎麼解辣、怎麼測辣度，還有鳥不怕辣的冷知識，答案是 (B)。"},
  {"q":"2. According to the passage, what should you drink after eating very spicy food?","tag":"細節",
   "opts":["Milk","Cold water","Hot tea","Nothing"],
   "a":0,"exp":"第二段：喝水沒什麼用，牛奶比較有效，答案是 (A)。"},
  {"q":"3. Why can birds help chili plants?","tag":"因果",
   "opts":["They eat the bugs on the plants.","They make the peppers hotter.","They carry the seeds to new places.","They protect the plants from people."],
   "a":2,"exp":"第四段：鳥吃了辣椒飛到遠處，種子跟著糞便排出，新的辣椒就能在新的地方長出來，答案是 (C)。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["The Hottest Restaurants in the World","Why We Should Not Eat Chili","The Science Behind the Burn","How Birds Sing"],
   "a":2,"exp":"全文用科學解釋辣的感覺、解辣方法、辣度量表和鳥為什麼不怕辣，(C) 最適合。"},
  {"q":"2. Why does spicy food make us sweat?","tag":"因果",
   "opts":["Its temperature is very high.","It contains a lot of salt.","Capsaicin makes the brain think the tongue is being burned.","It makes us drink too much water."],
   "a":2,"exp":"第一段：辣椒素黏在警告高溫的痛覺受器上，大腦以為舌頭真的被燙到，所以流汗；溫度其實沒變，答案是 (C)。"},
  {"q":"3. Why does water not help much?","tag":"細節",
   "opts":["Capsaicin dissolves in oil, not in water.","Water makes capsaicin hotter.","Water has casein in it.","Water is usually too warm."],
   "a":0,"exp":"第二段：辣椒素溶於油、不溶於水，喝水只會把它推散，答案是 (A)。"},
  {"q":"4. Which of the following is TRUE according to the passage?","tag":"細節",
   "opts":["Capsaicin is found mostly in the skin of the pepper.","A bell pepper scores a few thousand units.","Birds feel the heat of chili more than mammals.","Pepper X is hotter than many police pepper sprays."],
   "a":3,"exp":"(D) 正確（第三段）。(A) 錯，主要在連著種子的白色部分；(B) 錯，甜椒是零；(C) 錯，鳥完全感覺不到。"}
 ],
 [
  {"q":"1. What does the author mean in the last sentence?","tag":"主旨",
   "opts":["Humans have learned to love something that evolved to keep mammals away.","Chili peppers are dangerous weapons.","People should stop eating spicy food.","Birds and humans like the same food."],
   "a":0,"exp":"最後一句：辣椒素本來是用來趕走哺乳動物的「武器」，人類卻學會了渴望它，答案是 (A)。"},
  {"q":"2. The word \"culprit\" in the first paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["a kind of seed","the cause of a problem","a sweet taste","a type of bird"],
   "a":1,"exp":"前文提到身體把辣當成疼痛，接著說 The culprit is capsaicin，指「造成這個現象的元兇」，答案是 (B)。"},
  {"q":"3. How did Scoville originally measure the heat of a pepper?","tag":"細節",
   "opts":["By using machines in a laboratory","By measuring the size of the pepper","By diluting pepper extract until tasters could not feel the burn","By testing how birds reacted to it"],
   "a":2,"exp":"第三段：把辣椒萃取液加進糖水稀釋，直到試吃員嚐不出辣為止，答案是 (C)。現在才改用層析法。"},
  {"q":"4. What can be inferred about the TRPV1 receptor?","tag":"推論",
   "opts":["Only humans have it.","It is found in chili seeds.","It makes milk taste sweet.","It normally helps protect us from dangerous heat."],
   "a":3,"exp":"第一段：TRPV1 平常在碰到約 43°C 以上的溫度時被觸發，可推知它的功能是警告危險的高溫，答案是 (D)。"},
  {"q":"5. Which of the following is NOT true according to the passage?","tag":"細節",
   "opts":["Casein can bind to capsaicin molecules.","Capsaicin is mostly concentrated in the seeds.","Birds' TRPV1 receptors are insensitive to capsaicin.","Pepper X was certified in 2023."],
   "a":1,"exp":"第一段特別說明：辣椒素並不像一般人以為的集中在種子，而是在種子附著的組織裡，所以 (B) 不正確。"}
 ]
];

const META = {
 id:"chili", title:"Why Does Spicy Food Feel Hot?", category:"食物",
 dek:"辣其實不是一種味道，而是大腦被騙了！為什麼解辣要喝牛奶不喝水？世界最辣的辣椒有多辣？還有，為什麼鳥吃辣椒一點感覺都沒有？",
 date:"2026/11/2",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1741963201583-390e6aeb0166?auto=format&fit=crop&w=1600&q=70" data-local="chili-hero.jpg" alt="A pile of red chili peppers" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#FFE9D6"/>
<g stroke-linecap="round"><path d="M240 160 C300 150 420 170 520 230 C580 266 620 300 640 330 C590 316 520 300 450 286 C360 268 280 230 240 190Z" fill="#D23F57"/><path d="M240 160 C222 150 210 132 214 112" fill="none" stroke="#3E7D4A" stroke-width="10"/><path d="M226 170 C236 156 252 150 268 156 C262 170 246 180 230 180Z" fill="#3E7D4A"/>
<path d="M300 210 C340 206 410 220 470 252" fill="none" stroke="#fff" stroke-width="8" opacity=".35"/></g>
<g fill="none" stroke="#F2A541" stroke-width="6" stroke-linecap="round"><path d="M660 250 C680 230 670 210 690 190"/><path d="M690 290 C716 270 706 246 730 226"/><path d="M630 216 C644 198 636 180 652 164"/></g></svg>
<figcaption>辣椒的辣，主要來自連著種子的白色部分，而不是種子本身。<span class="credit">Photo: Tanmay Mohapatra / Unsplash</span></figcaption>`,
 fact:"在植物學上，辣椒其實是「水果」！只要是由花發育而來、裡面有種子的部分就算果實，所以辣椒和番茄一樣，都是水果。",
 next:{title:"The Man Who Invented Instant Noodles", href:"read.html#noodles"}
};
const USAGE = {
  "chili": ["chili sauce · hot chili · add some chili", "Do you want some chili sauce with your dumplings?", "你的水餃要不要加點辣椒醬？"],
  "pepper": ["a green pepper · black pepper · salt and pepper", "Add a little salt and black pepper to the soup.", "在湯裡加一點鹽和黑胡椒。"],
  "chemical": ["harmful chemicals · chemical reaction · use chemicals", "Farmers try to use fewer chemicals on their vegetables.", "農夫們試著在蔬菜上少用化學物質。"],
  "taste": ["a sweet taste · taste of sth · a bitter taste", "This medicine has a very bitter taste.", "這個藥的味道很苦。"],
  "trick": ["trick sb into doing sth · be tricked", "The fox tricked the crow into dropping its cheese.", "狐狸騙烏鴉把起司掉下來。"],
  "nerve": ["nerve cells · nerves in the skin · a nerve signal", "Nerves carry messages from your body to your brain very quickly.", "神經能很快地把訊息從身體傳到大腦。"],
  "sweat": ["sweat a lot · sweat heavily · start to sweat", "I always sweat a lot when I play basketball in summer.", "我夏天打籃球時總是流很多汗。"],
  "spicy": ["spicy food · too spicy · a spicy hot pot", "I can't eat spicy food, so I'll order the mild one.", "我不能吃辣，所以我點不辣的。"],
  "measure": ["measure the length · measure one's temperature · measure sth in …", "The nurse measured my temperature before I saw the doctor.", "看醫生前，護理師先幫我量體溫。"],
  "seed": ["plant seeds · sunflower seeds · grow from a seed", "We planted some sunflower seeds in the school garden.", "我們在學校花園種了一些向日葵種子。"],
  "bite": ["take a bite of · have a bite · one bite", "Can I take a bite of your sandwich?", "我可以咬一口你的三明治嗎？"],
  "receptor": ["pain receptors · taste receptors · bind to a receptor", "Cats lack the taste receptors for sweet flavors.", "貓沒有感受甜味的味覺受器。"],
  "temperature": ["body temperature · high temperatures · the temperature drops", "The temperature drops quickly in the mountains at night.", "山上的氣溫在晚上降得很快。"],
  "react": ["react to sth · react quickly · react badly", "How did your parents react to your test results?", "你爸媽對你的考試成績有什麼反應？"],
  "dissolve": ["dissolve in water · sugar dissolves · dissolve completely", "Stir the tea until the sugar dissolves completely.", "攪拌茶，直到糖完全溶解。"],
  "effective": ["an effective way · highly effective · effective against …", "Regular exercise is an effective way to reduce stress.", "規律運動是減輕壓力的有效方法。"],
  "protein": ["high in protein · a source of protein · plant protein", "Eggs and tofu are cheap sources of protein.", "蛋和豆腐是便宜的蛋白質來源。"],
  "scale": ["on a scale of 1 to 10 · a large scale · rating scale", "On a scale of 1 to 10, how would you rate the movie?", "從一到十分，你會給這部電影幾分？"],
  "compete": ["compete with/against … · compete for sth · compete in a race", "Hundreds of students compete for only a few scholarships.", "好幾百個學生在爭取僅有的幾個獎學金。"],
  "mammal": ["a large mammal · marine mammals · mammals feed their babies milk", "Whales and dolphins are mammals, not fish.", "鯨魚和海豚是哺乳動物，不是魚。"],
  "swallow": ["swallow food · swallow a pill · hard to swallow", "Chew your food well before you swallow it.", "食物吞下去之前要好好咀嚼。"],
  "deliberately": ["deliberately design · deliberately hide · deliberately set", "Some games are deliberately designed to keep players hooked.", "有些遊戲是刻意設計來讓玩家上癮的。"],
  "interpret": ["interpret A as B · interpret data · be interpreted as", "The teacher's silence was interpreted as anger by the class.", "全班把老師的沉默解讀成生氣。"],
  "culprit": ["the main culprit · the real culprit · catch the culprit", "Sugar is often the main culprit behind tooth decay.", "糖往往是蛀牙背後的主要元兇。"],
  "compound": ["a chemical compound · organic compound · a natural compound", "Caffeine is a natural compound found in coffee and tea.", "咖啡因是存在於咖啡和茶中的一種天然化合物。"],
  "perceive": ["perceive pain · perceive differences · be perceived as", "Older people often perceive time as passing more quickly.", "年長的人常覺得時間過得比較快。"],
  "remedy": ["a home remedy · a natural remedy · a remedy for …", "Ginger tea is a popular home remedy for colds.", "薑茶是很受歡迎的感冒居家療法。"],
  "dilute": ["dilute A with B · diluted juice · dilute the effect", "Dilute the juice with water so it's not too sweet for the baby.", "用水稀釋果汁，免得寶寶喝起來太甜。"],
  "quantify": ["quantify the impact · difficult to quantify · quantify the risk", "The damage to the town's reputation is hard to quantify.", "對小鎮名聲造成的傷害很難量化。"],
  "intriguing": ["an intriguing question · find sth intriguing · intriguing possibility", "Scientists find it intriguing that some birds can sense magnetic fields.", "科學家覺得有些鳥能感應磁場這件事很耐人尋味。"],
  "deterrence": ["nuclear deterrence · act as a deterrence", "Security cameras act as a deterrence against shoplifting.", "監視器能嚇阻順手牽羊。"],
  "crush": ["crush garlic · crush ice · be crushed under …", "Crush two cloves of garlic and fry them in oil.", "壓碎兩瓣大蒜，下油鍋炒。"],
  "intact": ["remain intact · fully intact · keep sth intact", "Amazingly, the glass vase remained intact after the fall.", "神奇的是，那個玻璃花瓶摔下來還是完好無缺。"],
  "disperse": ["disperse seeds · the crowd dispersed · disperse quickly", "The wind disperses dandelion seeds over long distances.", "風把蒲公英的種子散播到很遠的地方。"],
  "crave": ["crave sugar · crave attention · crave sth sweet", "When I'm stressed, I always crave something sweet.", "我壓力大的時候總是很想吃甜的。"],
  "weapon": ["a secret weapon · chemical weapons · use sth as a weapon", "Skunks use their smell as a weapon against enemies.", "臭鼬用牠們的臭味當作對付敵人的武器。"]
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
