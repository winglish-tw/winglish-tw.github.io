/* winglish.tw 閱讀館文章資料：The World's Biggest Mirror */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1,2,3,4],[5,6,7,8,9],[10,11,12],[13]], figs:{1:"layers",2:"photo"}, heads:{1:"A Giant Mirror",2:"Flat and Useful"},
   sents:[
    ["Imagine standing in a place where the sky is above you and also under your feet.","想像你站在一個地方，天空在你頭上，也在你的腳下。"],
    ["This place is real.","這個地方是真的。"],
    ["It is the Salar de Uyuni in Bolivia, South America, the biggest salt flat in the world.","它是南美洲玻利維亞的烏尤尼鹽沼，全世界最大的鹽原。"],
    ["It is about one-third the size of Taiwan.","它大約有台灣的三分之一那麼大。"],
    ["It is also very high, more than 3,600 meters above the sea.","它的位置也非常高，海拔超過 3,600 公尺。"],
    ["Long ago, there were huge lakes here.","很久以前，這裡有好幾個巨大的湖。"],
    ["When the water dried up, it left a thick layer of salt behind.","湖水乾掉之後，留下了一層厚厚的鹽。"],
    ["In the rainy season, a thin layer of water covers the salt.","雨季的時候，一層薄薄的水會蓋住鹽。"],
    ["Because the ground is so flat, the water becomes a giant mirror, and the clouds look like they are on the ground.","因為地面非常平，水就變成一面巨大的鏡子，雲看起來就像在地上一樣。"],
    ["Visitors love to take fun photos there.","遊客很喜歡在那裡拍有趣的照片。"],
    ["The salt flat is so flat that the highest and lowest points are less than one meter apart.","這片鹽原平到最高點和最低點相差不到一公尺。"],
    ["Scientists use it to check the instruments on satellites in space.","科學家用它來校正太空中人造衛星上的儀器。"],
    ["Under the salt, there is also a lot of lithium, a metal used to make phone and car batteries.","鹽的下面還有很多鋰，鋰是一種用來做手機和汽車電池的金屬。"],
    ["If you visit, bring sunglasses, because all that white salt is very bright!","如果你去玩，記得帶太陽眼鏡，因為一大片白色的鹽非常刺眼！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1,2],[3,4,5,6,7],[8,9,10,11],[12]], figs:{1:"layers",2:"photo"}, heads:{1:"From Lake to Salt",2:"Help from Space"},
   sents:[
    ["Every year, travelers from around the world make a long journey to a remote corner of Bolivia to see something that looks unreal: a white plain where the sky seems to continue under their feet.","每年都有來自世界各地的旅客，長途跋涉到玻利維亞一個偏遠的角落，只為了看一個看起來不像真的景象：一片白色的平原，天空好像一路延伸到他們的腳下。"],
    ["This is the Salar de Uyuni, the largest salt flat on Earth.","這裡就是烏尤尼鹽沼，地球上最大的鹽原。"],
    ["Covering about 10,500 square kilometers, nearly a third the size of Taiwan, it lies more than 3,600 meters above sea level in the Andes.","它的面積約 10,500 平方公里，將近台灣的三分之一大，位在安地斯山脈、海拔超過 3,600 公尺的地方。"],
    ["Tens of thousands of years ago, the area was covered by a series of prehistoric lakes.","幾萬年前，這一帶被好幾個史前湖泊覆蓋。"],
    ["As the climate grew drier, the water slowly evaporated and left behind a crust of salt several meters thick.","隨著氣候變得越來越乾燥，湖水慢慢蒸發，留下了一層好幾公尺厚的鹽殼。"],
    ["In the dry season, the salt cracks into countless six-sided shapes that stretch as far as the eye can see.","乾季時，鹽殼會裂成無數個六角形，一路延伸到視線的盡頭。"],
    ["In the rainy season, roughly from December to April, a shallow layer of water spreads across the surface, turning the flat into the world's largest natural mirror.","雨季時，大約從 12 月到隔年 4 月，一層淺淺的水會鋪滿整個表面，讓鹽原變成全世界最大的天然鏡子。"],
    ["Tourists take advantage of the lack of landmarks to create funny photos in which a friend seems small enough to stand on a shoe.","遊客利用這裡沒有任何參考地標的特點，拍出有趣的照片，例如朋友看起來小到可以站在一隻鞋子上。"],
    ["The salt flat is not only beautiful but also useful.","這片鹽原不只美麗，也很有用。"],
    ["Across its whole area, the height of the surface changes by less than one meter, which makes it one of the flattest places on the planet.","在它的整個範圍內，地表的高度變化不到一公尺，是地球上最平坦的地方之一。"],
    ["For this reason, scientists use it to check and adjust satellites that measure the height of the Earth's surface.","因為這樣，科學家用它來檢查、校正那些測量地表高度的人造衛星。"],
    ["Beneath the crust lies salty water rich in lithium, a metal used in batteries for phones and electric cars, and Bolivia is now trying to turn this treasure into income.","鹽殼底下是富含鋰的鹹水；鋰是一種用在手機和電動車電池裡的金屬，玻利維亞現在正努力把這個寶藏變成收入。"],
    ["For now, though, most visitors come for a simpler reason: to stand in the middle of the sky.","不過目前，大部分的遊客來這裡是為了一個更簡單的理由：站在天空的正中央。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4,5],[6,7,8],[9,10,11]], figs:{1:"layers",2:"photo"}, heads:{1:"A Landscape Shaped by Evaporation",2:"A Target for Satellites",3:"Treasure Beneath the Salt"},
   sents:[
    ["There are few places on Earth where the horizon simply disappears, but on the Salar de Uyuni, in southwestern Bolivia, sky and ground can merge so completely that visitors lose all sense of scale.","地球上很少有地方能讓地平線就這樣消失；但在玻利維亞西南部的烏尤尼鹽沼，天空和地面可以完全融為一體，讓遊客失去所有的大小比例感。"],
    ["Spanning roughly 10,582 square kilometers at an altitude of about 3,656 meters, it is the largest salt flat in the world, almost a third the size of Taiwan and around a hundred times larger than the famous Bonneville Salt Flats in the United States.","它的面積約 10,582 平方公里，海拔約 3,656 公尺，是全世界最大的鹽原，將近台灣的三分之一大，大約是美國著名的邦納維爾鹽灘的一百倍。"],
    ["The salar is the remnant of prehistoric lakes that once filled this part of the Altiplano, the high plateau of the central Andes.","這片鹽沼是史前湖泊的遺跡；這些湖泊曾經填滿了阿爾蒂普拉諾高原──安地斯山脈中部的高原──的這一帶。"],
    ["As the region dried out, the water evaporated and its dissolved minerals accumulated into a salt crust several meters thick, beneath which lies a reservoir of brine.","隨著這個地區逐漸乾涸，湖水蒸發，溶在水裡的礦物質累積成好幾公尺厚的鹽殼，鹽殼底下則是一大片鹵水。"],
    ["During the dry months, the surface is etched with a seemingly endless network of polygons, many of them roughly hexagonal, formed as salt crystallizes and salty water slowly circulates beneath the crust.","乾季的幾個月裡，地表上刻滿了看似無窮無盡的多邊形網絡，其中許多大致是六角形；這是鹽結晶時、鹹水在鹽殼底下緩慢循環所形成的。"],
    ["When seasonal rains arrive, typically between December and April, a film of still water a few centimeters deep transforms the plain into the planet's largest mirror, a phenomenon that draws photographers from every continent.","當季節性的雨水來臨，通常在 12 月到隔年 4 月之間，一層只有幾公分深、平靜無波的水膜，會把平原變成地球上最大的鏡子；這個景象吸引了來自各大洲的攝影師。"],
    ["The salar's extraordinary flatness has given it an unexpected scientific role.","鹽沼極度平坦的特性，讓它意外地扮演了一個科學上的角色。"],
    ["Over its entire area, surface elevation varies by less than a meter, and its clear skies, dry air and bright, reflective surface make it an ideal target for calibrating satellite altimeters, instruments that measure the height of land, ice and ocean from orbit.","在整個範圍內，地表高度的變化不到一公尺；再加上晴朗的天空、乾燥的空氣，以及明亮、會反光的地表，使它成為校正衛星高度計的理想目標──高度計是從軌道上測量陸地、冰層和海洋高度的儀器。"],
    ["Researchers have estimated that it works about five times better for this purpose than the surface of the ocean.","研究人員估計，就這個用途來說，它的效果大約比海面好五倍。"],
    ["The brine beneath the crust holds another, more contentious distinction: it contains one of the largest known lithium resources on Earth.","鹽殼底下的鹵水還有另一個更具爭議的特點：它蘊藏著地球上已知最大的鋰資源之一。"],
    ["As demand for lithium-ion batteries in electric vehicles has surged, Bolivia has sought to develop the deposit, but high altitude, frequent rain and impurities in the brine have made extraction difficult, while local communities have insisted on sharing in the profits.","隨著電動車對鋰電池的需求激增，玻利維亞一直想開發這個礦藏，但高海拔、頻繁的降雨和鹵水裡的雜質讓開採困難重重，當地社區也堅持要分享利潤。"],
    ["The challenge facing the country is how to profit from this resource without spoiling a landscape that is, quite literally, a reflection of the sky.","這個國家面臨的挑戰是：如何從這項資源獲利，又不破壞一片名副其實「倒映著天空」的地景。"]
 ]}
];

const GLOSS = {
  imagine:["v.","想像"], sky:["n.","天空"], feet:["n.","腳（foot 的複數）"], real:["adj.","真的"], salar:["n.","（西班牙文）鹽原；鹽沼"],
  uyuni:["n.","烏尤尼（玻利維亞地名）"], bolivia:["n.","玻利維亞"], salt:["n.","鹽"], flat:["n.","平地；adj. 平的；salt flat 鹽原"], meter:["n.","公尺"],
  lake:["n.","湖"], layer:["n.","層"], thick:["adj.","厚的"], rainy:["adj.","下雨的；rainy season 雨季"], season:["n.","季節"],
  thin:["adj.","薄的"], ground:["n.","地面"], giant:["adj.","巨大的"], mirror:["n.","鏡子"], cloud:["n.","雲"], visitor:["n.","遊客"],
  scientist:["n.","科學家"], instrument:["n.","儀器"], satellite:["n.","人造衛星"], lithium:["n.","鋰"], metal:["n.","金屬"],
  battery:["n.","電池"], sunglasses:["n.","太陽眼鏡"], bright:["adj.","明亮的；刺眼的"],
  traveler:["n.","旅客"], journey:["n.","旅程"], remote:["adj.","偏遠的"], corner:["n.","角落"], unreal:["adj.","不真實的"],
  plain:["n.","平原"], cover:["v.","覆蓋"], kilometer:["n.","公里"], square:["adj.","平方的"], level:["n.","水平面；sea level 海平面"],
  andes:["n.","安地斯山脈"], series:["n.","一系列"], prehistoric:["adj.","史前的"], climate:["n.","氣候"], evaporate:["v.","蒸發"],
  crust:["n.","硬殼；外殼"], crack:["v.","裂開"], countless:["adj.","無數的"], stretch:["v.","延伸"], shallow:["adj.","淺的"],
  surface:["n.","表面"], natural:["adj.","天然的"], advantage:["n.","好處；take advantage of 利用"], lack:["n.","缺乏"], landmark:["n.","地標"],
  useful:["adj.","有用的"], adjust:["v.","調整"], beneath:["prep.","在…之下"], electric:["adj.","電動的"], treasure:["n.","寶藏"], income:["n.","收入"],
  horizon:["n.","地平線"], merge:["v.","融合"], scale:["n.","比例；規模"], span:["v.","橫跨；面積達"], altitude:["n.","海拔高度"],
  bonneville:["n.","邦納維爾（美國鹽灘名）"], remnant:["n.","殘餘；遺跡"], altiplano:["n.","阿爾蒂普拉諾高原"], plateau:["n.","高原"],
  region:["n.","地區"], dissolved:["adj.","溶解的"], mineral:["n.","礦物質"], accumulate:["v.","累積"], reservoir:["n.","蓄積處；水庫"],
  brine:["n.","鹵水；濃鹽水"], etch:["v.","蝕刻；刻畫"], seemingly:["adv.","看似"], network:["n.","網絡"], polygon:["n.","多邊形"],
  hexagonal:["adj.","六角形的"], crystallize:["v.","結晶"], circulate:["v.","循環"], seasonal:["adj.","季節性的"], typically:["adv.","通常"],
  film:["n.","薄膜"], transform:["v.","轉變"], phenomenon:["n.","現象"], continent:["n.","洲；大陸"], extraordinary:["adj.","非凡的"],
  flatness:["n.","平坦"], unexpected:["adj.","意外的"], role:["n.","角色"], elevation:["n.","海拔；高度"], vary:["v.","變化"], varies:["v.","變化（vary 的第三人稱單數）"],
  reflective:["adj.","會反光的"], ideal:["adj.","理想的"], target:["n.","目標"], calibrate:["v.","校正"], altimeter:["n.","高度計"],
  orbit:["n.","軌道"], estimate:["v.","估計"], purpose:["n.","用途；目的"], contentious:["adj.","有爭議的"], distinction:["n.","特點；殊榮"],
  resource:["n.","資源"], demand:["n.","需求"], ion:["n.","離子；lithium-ion 鋰離子"], vehicle:["n.","車輛"], surge:["v.","激增"],
  seek:["v.","尋求"], sought:["v.","尋求（seek 的過去式）"], deposit:["n.","礦藏；沉積物"], frequent:["adj.","頻繁的"], impurity:["n.","雜質"],
  extraction:["n.","開採；提取"], insist:["v.","堅持"], profit:["n.","利潤；v. 獲利"], challenge:["n.","挑戰"],
  spoil:["v.","破壞"], landscape:["n.","地景；風景"], literally:["adv.","照字面地；真正地"], reflection:["n.","倒影；反射"]
};
const KEY = [["salt","flat","lake","layer","thick","thin","mirror","cloud","satellite","battery"],
             ["remote","plain","prehistoric","evaporate","crust","shallow","surface","landmark","adjust","beneath","treasure"],
             ["horizon","merge","altitude","remnant","accumulate","brine","crystallize","circulate","phenomenon","elevation","calibrate","contentious","surge","impurity","spoil"]];

const FIGS = {
  layers:{svg:`<svg viewBox="0 0 600 340" role="img" aria-label="Diagram of the Uyuni salt flat in the rainy and dry seasons" style="display:block;width:100%;height:auto;border-radius:6px;background:#EEF6FB">
<path d="M0 0 H300 V150 H0Z" fill="#BFE0F5"/><path d="M300 0 H600 V150 H300Z" fill="#D6ECFA"/>
<g fill="#fff"><path d="M60 60 C60 46 80 40 92 50 C100 38 122 40 126 56 C140 56 144 74 130 78 H66 C52 78 50 64 60 60Z"/><path d="M190 40 C190 30 204 26 212 32 C218 24 234 26 236 38 C246 38 248 50 238 52 H196 C186 52 184 44 190 40Z"/>
<path d="M440 82 C440 70 458 64 468 72 C476 62 496 64 498 78 C510 78 512 94 500 96 H446 C434 96 432 86 440 82Z"/></g>
<g fill="#8A9AB0" opacity=".55"><path d="M0 150 C40 130 70 122 110 134 C150 112 180 118 220 136 C250 126 280 130 300 150Z"/><path d="M300 150 C340 128 380 120 420 136 C460 116 500 120 540 138 C566 130 586 136 600 150Z"/></g>
<rect x="0" y="150" width="300" height="34" fill="#9FD0EE"/>
<g fill="#fff" opacity=".75"><path d="M60 170 C60 182 80 186 92 178 C100 188 122 186 126 172 C140 172 144 160 130 158 H66 C52 158 50 166 60 170Z"/><path d="M190 168 C190 176 204 178 212 174 C218 180 234 178 236 170 C246 170 248 162 238 160 H196 C186 160 184 166 190 168Z"/></g>
<path d="M0 184 H300 V214 H0Z" fill="#F4F6F8"/>
<path d="M300 150 H600 V214 H300Z" fill="#F4F6F8"/>
<g fill="none" stroke="#C9D3DE" stroke-width="2" stroke-linejoin="round"><path d="M312 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M344 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M376 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M408 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M440 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M472 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M504 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M536 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M568 162 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/>
<path d="M328 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M360 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M392 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M424 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M456 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M488 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M520 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/><path d="M552 186 l16 -8 l16 8 v16 l-16 8 l-16 -8Z"/></g>
<path d="M0 214 C100 210 200 218 300 214 S500 210 600 216 V270 H0Z" fill="#E3E8EE"/>
<path d="M0 270 C120 266 240 276 360 270 S520 266 600 272 V340 H0Z" fill="#7FA8C9"/>
<g fill="#fff" opacity=".6"><circle cx="80" cy="300" r="3"/><circle cx="200" cy="314" r="2.5"/><circle cx="330" cy="296" r="3"/><circle cx="470" cy="318" r="2.5"/><circle cx="540" cy="300" r="3"/></g>
<line x1="300" y1="0" x2="300" y2="214" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238">
<text x="16" y="24" font-size="14" font-weight="700">Rainy season (Dec–Apr)</text><text x="16" y="40" font-size="11" fill="#5A6478">雨季：薄薄一層水變成大鏡子</text>
<text x="316" y="24" font-size="14" font-weight="700">Dry season</text><text x="316" y="40" font-size="11" fill="#5A6478">乾季：鹽殼裂成一片片六角形</text>
<text x="16" y="178" font-size="12" font-weight="700" fill="#1F5C8C">A few cm of water</text>
<text x="16" y="236" font-size="13" font-weight="700">Salt crust: several meters thick</text><text x="16" y="254" font-size="11" fill="#5A6478">鹽殼：好幾公尺厚，高低差不到 1 公尺</text>
<text x="16" y="296" font-size="13" font-weight="700" fill="#fff">Brine (salty water) rich in lithium</text><text x="16" y="314" font-size="11" fill="#EAF3FA">鹽殼底下的鹵水，含有大量的鋰</text>
</g></svg>`,
    cap:"烏尤尼鹽沼的兩種面貌：雨季是一面大鏡子，乾季是一片六角形的鹽田；鹽殼底下藏著富含鋰的鹵水。",
    credit:"圖解：winglish.tw"},
  photo:{src:"https://images.unsplash.com/photo-1526029655228-b7ee496c7819?auto=format&fit=crop&w=1400&q=70", local:"uyuni-2.jpg", alt:"Cracked salt crust on the Uyuni salt flat under a blue sky", fb:"（乾季的烏尤尼鹽沼照片）",
    cap:"乾季的烏尤尼鹽沼，白色的鹽殼裂成一塊一塊，一路延伸到地平線。",
    credit:'Photo: Samuel Scrimshaw / <a href="https://unsplash.com/photos/dry-soil-under-white-clouds-and-blue-sky-at-daytime-kp_87tExCwI" target="_blank" rel="noopener">Unsplash</a>'}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["A famous lake for swimming","How to make salt at home","A huge, flat salt flat in Bolivia","The weather in South America"],
   "a":2,"exp":"文章介紹玻利維亞的烏尤尼鹽沼：怎麼形成、為什麼像鏡子、有什麼用途，答案是 (C)。"},
  {"q":"2. Why does the salt flat look like a mirror in the rainy season?","tag":"因果",
   "opts":["The salt is made of glass.","A thin layer of water covers the very flat ground.","People clean it every day.","The sun is very strong there."],
   "a":1,"exp":"第二段：雨季時一層薄薄的水蓋住鹽，地面又非常平，水就變成一面大鏡子，答案是 (B)。"},
  {"q":"3. What do scientists use the salt flat for?","tag":"細節",
   "opts":["To check the instruments on satellites","To build space rockets","To study fish","To grow vegetables"],
   "a":0,"exp":"第三段：科學家用它來校正人造衛星上的儀器，答案是 (A)。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["How to Travel Cheaply in Bolivia","The Uyuni Salt Flat: Beautiful, Flat and Valuable","Why Lakes Dry Up","The History of Electric Cars"],
   "a":1,"exp":"全文講鹽沼的美景（鏡子）、平坦（校正衛星）和價值（鋰），(B) 最完整。"},
  {"q":"2. How was the salt flat formed?","tag":"細節",
   "opts":["Seawater flooded the area.","People brought salt there.","Prehistoric lakes evaporated and left salt behind.","A volcano erupted."],
   "a":2,"exp":"第二段：史前湖泊的水因氣候變乾而蒸發，留下好幾公尺厚的鹽殼，答案是 (C)。"},
  {"q":"3. Why can tourists take funny photos in which people look very small?","tag":"推論",
   "opts":["There are no landmarks to show how big or far things are.","The salt makes people shrink.","The cameras there are special.","The tourists are standing in water."],
   "a":0,"exp":"第二段：遊客利用這裡沒有地標可以參考的特點，所以看不出遠近大小，才能拍出這種照片，答案是 (A)。"},
  {"q":"4. Which of the following is TRUE according to the passage?","tag":"細節",
   "opts":["The salt flat is bigger than Taiwan.","The rainy season is from June to September.","The surface height changes by several meters.","There is salty water rich in lithium under the crust."],
   "a":3,"exp":"(D) 正確（第三段）。(A) 錯，約台灣的三分之一；(B) 錯，雨季約 12 月到 4 月；(C) 錯，高度變化不到一公尺。"}
 ],
 [
  {"q":"1. What challenge does the author describe in the last paragraph?","tag":"主旨",
   "opts":["How to attract more photographers","How to make the salt flat flatter","How to profit from lithium without ruining the landscape","How to stop the rainy season"],
   "a":2,"exp":"最後一段：玻利維亞要想辦法從鋰資源獲利，又不破壞這片「倒映著天空」的地景，答案是 (C)。"},
  {"q":"2. The word \"contentious\" in the last paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["causing disagreement","very beautiful","easy to find","completely useless"],
   "a":0,"exp":"後文提到開採困難、地方社區堅持分享利潤，可知鋰資源是「有爭議的」，答案是 (A)。"},
  {"q":"3. According to the passage, what forms the polygon shapes on the surface?","tag":"細節",
   "opts":["Car tires driving across the salt","Salt crystallizing as salty water circulates beneath the crust","Heavy rain hitting the ground","Workers cutting the salt into blocks"],
   "a":1,"exp":"第二段：多邊形是鹽結晶、鹹水在鹽殼下緩慢循環所形成的，答案是 (B)。"},
  {"q":"4. Why is the salar good for calibrating satellite altimeters?","tag":"因果",
   "opts":["It is close to a space center.","It has a lot of lithium.","It is the highest place in the world.","It is extremely flat and has clear skies and a bright surface."],
   "a":3,"exp":"第三段：高度變化不到一公尺，加上晴朗、乾燥和明亮反光的地表，答案是 (D)。"},
  {"q":"5. Which of the following is NOT mentioned as a difficulty in extracting lithium?","tag":"細節",
   "opts":["High altitude","Frequent rain","A lack of tourists","Impurities in the brine"],
   "a":2,"exp":"第四段提到的困難是高海拔、頻繁降雨和鹵水裡的雜質，沒有提到「缺少遊客」，答案是 (C)。"}
 ]
];

const META = {
 id:"uyuni", title:"The World's Biggest Mirror", category:"旅行",
 dek:"玻利維亞的烏尤尼鹽沼，下過雨後天空和地面連成一片，像走在雲上。它平到能幫人造衛星校正儀器，鹽殼底下還藏著大量的鋰。",
 date:"2026/11/2",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1583901370237-2befec865f88?auto=format&fit=crop&w=1600&q=70" data-local="uyuni-hero.jpg" alt="Blue sky and white clouds reflected on the Uyuni salt flat" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="210" fill="#9FD0EE"/><rect y="210" width="800" height="210" fill="#B9DDF3"/>
<g fill="#fff"><path d="M120 110 C120 86 154 76 174 92 C188 72 226 76 232 102 C258 102 264 134 240 140 H130 C104 140 100 116 120 110Z"/><path d="M500 80 C500 62 526 54 540 66 C552 50 582 54 586 74 C606 74 610 98 592 102 H508 C488 102 486 86 500 80Z"/></g>
<g fill="#fff" opacity=".6"><path d="M120 310 C120 334 154 344 174 328 C188 348 226 344 232 318 C258 318 264 286 240 280 H130 C104 280 100 304 120 310Z"/><path d="M500 340 C500 358 526 366 540 354 C552 370 582 366 586 346 C606 346 610 322 592 318 H508 C488 318 486 334 500 340Z"/></g>
<g fill="#1A2238"><circle cx="400" cy="160" r="9"/><path d="M392 172 h16 l4 38 h-24Z"/></g><g fill="#1A2238" opacity=".35"><circle cx="400" cy="260" r="9"/><path d="M392 248 h16 l4 -38 h-24Z"/></g></svg>
<figcaption>雨季的烏尤尼鹽沼，天空倒映在薄薄的水面上，分不出哪裡是天、哪裡是地。<span class="credit">Photo: Javier Collarte / Unsplash</span></figcaption>`,
 fact:"每年大約 11 月，智利紅鶴、安地斯紅鶴和詹氏紅鶴這三種紅鶴，會來到烏尤尼鹽沼一帶繁殖，讓白色的鹽原多了一點粉紅色。",
 next:{title:"Why Flying East Is Harder", href:"read.html#jetlag"}
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
