/* winglish.tw 閱讀館文章資料：The Man Who Invented Instant Noodles */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1,2],[3,4,5,6,7,8,9],[10,11,12],[13,14]], figs:{1:"fry",2:"photo"}, heads:{1:"A Little Shed",2:"Noodles in a Cup and in Space"},
   sents:[
    ["Do you like instant noodles?","你喜歡吃泡麵嗎？"],
    ["The man who invented them was born in Chiayi, Taiwan, in 1910.","發明泡麵的人，1910 年出生在台灣嘉義。"],
    ["His Chinese name was Wu Bai-fu, and later he became known in Japan as Momofuku Ando.","他的中文名字叫吳百福，後來在日本以「安藤百福」這個名字為人所知。"],
    ["After World War II, Ando saw long lines of hungry people waiting for a bowl of noodles in the cold.","第二次世界大戰後，安藤百福看到很多餓肚子的人，在寒冷的天氣裡排著長長的隊伍，只為了等一碗麵。"],
    ["He wanted to make noodles that anyone could cook quickly at home.","他想做出一種任何人在家都能很快煮好的麵。"],
    ["He worked alone every day in a small shed behind his house.","他每天一個人在家後面的一間小屋裡做實驗。"],
    ["One day, he watched his wife fry food in hot oil and got an idea.","有一天，他看到太太用熱油炸東西，突然想到一個點子。"],
    ["If he fried the noodles, the water inside would come out and leave tiny holes.","如果把麵拿去炸，裡面的水分就會跑出來，留下很多小洞。"],
    ["Later, hot water could go back into the holes and make the noodles soft again.","之後，熱水就能再流進這些小洞，讓麵重新變軟。"],
    ["In 1958, when he was 48 years old, his Chicken Ramen went on sale.","1958 年，他 48 歲的時候，他的「雞汁拉麵」開始販賣。"],
    ["Years later, he visited the United States and saw people break his noodles into cups and eat them with forks.","幾年後，他到美國參觀，看到有人把他的麵掰碎放進杯子裡，再用叉子吃。"],
    ["This gave him the idea for Cup Noodles, which came out in 1971.","這讓他想到了杯麵；杯麵在 1971 年推出。"],
    ["When he was 95, his team even made noodles for an astronaut to eat in space!","他 95 歲的時候，他的團隊甚至做出了讓太空人在太空中吃的麵！"],
    ["Today, people around the world eat more than 100 billion servings of instant noodles every year.","現在，全世界的人每年吃掉超過 1000 億份泡麵。"],
    ["Ando liked to say that in life, it is never too late to start something new.","安藤百福常說，人生中，開始做新的事永遠不嫌晚。"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1,2],[3,4,5,6,7,8],[9,10,11],[12,13]], figs:{1:"fry",2:"photo"}, heads:{1:"Starting Over at 48",2:"From a Cup to Outer Space"},
   sents:[
    ["Instant noodles are so common today that it is hard to imagine a world without them.","泡麵現在普遍到讓人很難想像沒有它的世界。"],
    ["Yet they were invented less than seventy years ago by a man born in Puzi, Chiayi, in 1910, when Taiwan was under Japanese rule.","但它們是在不到七十年前，由一個 1910 年出生在嘉義朴子的人發明的；當時台灣在日本統治之下。"],
    ["His name was Wu Bai-fu, but he later became a Japanese citizen and is remembered as Momofuku Ando.","他的名字叫吳百福，後來成為日本公民，大家記得的是他的日本名字──安藤百福。"],
    ["After World War II, food was scarce in Japan, and Ando never forgot the sight of people standing in a long line in the cold just to buy a bowl of ramen.","二次大戰後，日本糧食短缺，安藤百福一直忘不了人們在寒風中排著長長的隊伍、只為買一碗拉麵的景象。"],
    ["By 1957, however, he had lost nearly everything when a credit union he ran went bankrupt.","然而到了 1957 年，他經營的信用合作社破產，讓他幾乎失去了一切。"],
    ["With only a small shed behind his house in Ikeda, Osaka, he began experimenting alone, day after day.","他只剩大阪池田家後面的一間小屋，就在那裡一個人日復一日地做實驗。"],
    ["The breakthrough came when he watched his wife cooking tempura.","突破發生在他看著太太炸天婦羅的時候。"],
    ["Frying noodles in hot oil drove out their water and left countless tiny holes, so later, when hot water was poured over them, the noodles softened in just a few minutes.","把麵放進熱油裡炸，能把水分逼出來，留下無數的小洞；之後只要倒入熱水，麵條幾分鐘內就會變軟。"],
    ["In August 1958, at the age of 48, he launched Chicken Ramen, the world's first instant noodles.","1958 年 8 月，48 歲的他推出了「雞汁拉麵」，這是全世界第一款泡麵。"],
    ["On a trip to the United States, Ando noticed supermarket managers breaking his noodles into paper cups and eating them with forks.","到美國出差時，安藤百福注意到超市經理把他的麵掰碎放進紙杯裡，再用叉子吃。"],
    ["Inspired, he developed Cup Noodles, which went on sale in 1971.","他因此得到靈感，研發出杯麵，在 1971 年開始販賣。"],
    ["He never stopped inventing: at 95, he created Space Ram, a vacuum-packed ramen with a thick soup that would not float away, which Japanese astronaut Soichi Noguchi ate aboard the space shuttle Discovery in 2005.","他從來沒停止發明：95 歲時，他做出了「太空拉麵」，這是一種真空包裝、湯汁濃稠不會飄走的拉麵；2005 年，日本太空人野口聰一在發現號太空梭上吃了它。"],
    ["Today, people eat over 100 billion servings of instant noodles each year.","現在，人們每年吃掉超過 1000 億份泡麵。"],
    ["Not bad for a man who began his greatest success after losing almost everything.","對一個在幾乎失去一切之後，才開始他最大成就的人來說，這實在很不簡單。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4,5,6,7,8],[9,10,11],[12,13]], figs:{1:"fry",2:"photo"}, heads:{1:"A Second Chance in a Backyard Shed",2:"Reinvention"},
   sents:[
    ["It is one of the most widely eaten processed foods on the planet, yet few people who tear open a packet of instant noodles know that its inventor was born in Taiwan.","泡麵是全世界最多人吃的加工食品之一，但撕開一包泡麵的人，很少知道它的發明者是在台灣出生的。"],
    ["Wu Bai-fu, born in 1910 in Puzi, Chiayi, during the Japanese colonial era, later moved to Japan, took Japanese citizenship and became known as Momofuku Ando, the founder of Nissin Foods.","吳百福在日治時期的 1910 年出生於嘉義朴子，後來移居日本、取得日本國籍，成為大家所知道的安藤百福，也就是日清食品的創辦人。"],
    ["Ando's path to fame was anything but direct.","安藤百福的成名之路一點都不順遂。"],
    ["In the hungry years after World War II, he was struck by the sight of people queuing in the bitter cold outside a black-market noodle stall, an image that convinced him that peace depends on people having enough to eat.","在二戰後的飢荒年代，他看到人們在刺骨的寒風中，於黑市的麵攤外大排長龍，深受震撼；這個畫面讓他確信，和平的前提是人人都能吃飽。"],
    ["Yet by 1957, the credit union he chaired had collapsed, leaving him with little more than his house.","然而到了 1957 年，他擔任理事長的信用合作社倒閉，讓他幾乎只剩下自己的房子。"],
    ["At an age when many people are settling into their careers, he retreated to a modest shed in his backyard in Ikeda, Osaka, and set out to create noodles that could be prepared simply by adding hot water.","在許多人事業早已安定下來的年紀，他退回大阪池田自家後院一間簡陋的小屋，立志做出只要加熱水就能吃的麵。"],
    ["After months of trial and error, inspiration came from his wife's kitchen: watching her fry tempura, he realized that flash-frying steamed, seasoned noodles would drive off their moisture and riddle them with microscopic pores.","經過好幾個月的反覆試驗，靈感來自太太的廚房：看著她炸天婦羅，他領悟到，把蒸過、調好味的麵條用高溫油快速油炸，就能逼出水分，並在麵條上留下無數微小的孔洞。"],
    ["Those pores would later absorb boiling water, restoring the noodles' texture within minutes while allowing them to be stored for months.","這些孔洞之後能吸收滾水，讓麵條在幾分鐘內恢復口感，同時又能保存好幾個月。"],
    ["Chicken Ramen reached shops in August 1958, when Ando was 48; at first it cost several times as much as fresh udon, but demand soon soared.","1958 年 8 月，安藤 48 歲時，雞汁拉麵上市了；一開始它的價格是新鮮烏龍麵的好幾倍，但需求很快就暴增。"],
    ["Ando's second masterstroke came from careful observation.","安藤百福的第二個神來之筆，來自細心的觀察。"],
    ["Visiting the United States, he noticed supermarket buyers who, lacking bowls, broke his noodle blocks into paper cups and ate them with forks, a habit that led to Cup Noodles in 1971, a product whose clever packaging helped instant noodles spread worldwide.","他到美國時，注意到超市採購人員因為沒有碗，就把麵塊掰碎放進紙杯、用叉子吃；這個習慣催生了 1971 年的杯麵，而杯麵巧妙的包裝，幫助泡麵紅遍全世界。"],
    ["Remarkably, his curiosity never faded: in 2005, at the age of 95, he oversaw the development of Space Ram, featuring a thickened broth that would not drift away in weightlessness, which astronaut Soichi Noguchi ate aboard the space shuttle Discovery.","令人佩服的是，他的好奇心從未消退：2005 年，95 歲的他主導開發了「太空拉麵」，湯汁經過增稠，在無重力狀態下不會飄走；太空人野口聰一就在發現號太空梭上吃了它。"],
    ["Today, the world consumes more than 100 billion servings of instant noodles annually.","如今，全世界每年吃掉超過 1000 億份泡麵。"],
    ["Ando, who died in 2007 at 96, liked to remind people that it is never too late in life to begin something new, a philosophy he proved more convincingly than most.","安藤百福在 2007 年以 96 歲辭世，他生前常提醒大家：人生中開始新的事永遠不嫌晚；而他比大多數人更有說服力地證明了這個信念。"]
 ]}
];

const GLOSS = {
  instant:["adj.","即食的；instant noodles 泡麵"], noodle:["n.","麵條"], invent:["v.","發明"], chiayi:["n.","嘉義"], taiwan:["n.","台灣"],
  war:["n.","戰爭"], hungry:["adj.","飢餓的"], line:["n.","隊伍"], bowl:["n.","碗"], cold:["n.","寒冷"],
  quickly:["adv.","很快地"], alone:["adv.","獨自"], shed:["n.","小屋；棚子"], wife:["n.","太太"], fry:["v.","油炸"], fried:["v.","油炸（fry 的過去式）"],
  oil:["n.","油"], idea:["n.","點子"], tiny:["adj.","微小的"], hole:["n.","洞"], soft:["adj.","軟的"],
  ramen:["n.","拉麵"], sale:["n.","販賣；on sale 上市"], fork:["n.","叉子"], astronaut:["n.","太空人"], space:["n.","太空"],
  billion:["n.","十億"], serving:["n.","一份（食物）"], common:["adj.","普遍的"], imagine:["v.","想像"], rule:["n.","統治"],
  citizen:["n.","公民"], scarce:["adj.","缺乏的；稀少的"], sight:["n.","景象"], credit:["n.","信用；credit union 信用合作社"], union:["n.","聯盟；credit union 信用合作社"],
  bankrupt:["adj.","破產的"], experiment:["v.","做實驗"], breakthrough:["n.","突破"], tempura:["n.","天婦羅"], countless:["adj.","無數的"],
  pour:["v.","倒"], soften:["v.","變軟"], launch:["v.","推出"], notice:["v.","注意到"], supermarket:["n.","超市"],
  manager:["n.","經理"], inspired:["adj.","受到啟發的"], develop:["v.","研發"], vacuum:["n.","真空"], packed:["adj.","包裝好的"],
  float:["v.","飄浮"], aboard:["prep.","在（交通工具）上"], shuttle:["n.","太空梭；接駁車"], discovery:["n.","發現號（太空梭名）"], success:["n.","成功"],
  processed:["adj.","加工的"], planet:["n.","星球；地球"], packet:["n.","小包"], inventor:["n.","發明者"], colonial:["adj.","殖民的"],
  era:["n.","時代"], citizenship:["n.","國籍；公民身分"], founder:["n.","創辦人"], nissin:["n.","日清（食品公司）"], fame:["n.","名聲"],
  direct:["adj.","直接的；順利的"], struck:["adj.","被打動的；be struck by 對…印象深刻"], queue:["v.","排隊"], bitter:["adj.","刺骨的；苦的"],
  stall:["n.","攤位"], convince:["v.","使確信"], peace:["n.","和平"], chair:["v.","擔任主席"], collapse:["v.","倒閉；崩潰"],
  settle:["v.","安定下來"], career:["n.","事業；職涯"], retreat:["v.","退回；撤退"], modest:["adj.","簡樸的"], backyard:["n.","後院"],
  prepare:["v.","準備；烹調"], trial:["n.","試驗；trial and error 反覆試驗"], error:["n.","錯誤"], inspiration:["n.","靈感"], realize:["v.","領悟"],
  flash:["adj.","快速的；flash-frying 高溫快速油炸"], steamed:["adj.","蒸過的"], seasoned:["adj.","調過味的"], moisture:["n.","水分"],
  riddle:["v.","使布滿（孔洞）"], microscopic:["adj.","極小的；顯微鏡才看得到的"], pore:["n.","細孔"], absorb:["v.","吸收"], boiling:["adj.","滾燙的"],
  restore:["v.","恢復"], texture:["n.","口感；質地"], store:["v.","保存"], udon:["n.","烏龍麵"], demand:["n.","需求"],
  soar:["v.","飆升"], masterstroke:["n.","高招；神來之筆"], observation:["n.","觀察"], lack:["v.","缺少"], block:["n.","塊"],
  habit:["n.","習慣"], packaging:["n.","包裝"], worldwide:["adv.","全世界地"], remarkably:["adv.","令人驚訝地；非凡地"], curiosity:["n.","好奇心"],
  fade:["v.","消退"], oversee:["v.","監督；主導"], oversaw:["v.","監督（oversee 的過去式）"], thickened:["adj.","增稠的"], broth:["n.","湯；高湯"],
  drift:["v.","飄移"], weightlessness:["n.","失重；無重力狀態"], consume:["v.","吃；消耗"], annually:["adv.","每年"], remind:["v.","提醒"],
  philosophy:["n.","人生觀；哲學"], convincingly:["adv.","有說服力地"], ando:["n.","安藤（百福）"], momofuku:["n.","百福（安藤百福）"],
  osaka:["n.","大阪"], ikeda:["n.","池田（大阪的城市）"], puzi:["n.","朴子（嘉義）"], noguchi:["n.","野口（聰一）"]
};
const KEY = [["instant","noodle","invent","hungry","shed","fry","tiny","hole","soft","astronaut"],
             ["scarce","bankrupt","experiment","breakthrough","countless","launch","notice","inspired","vacuum","float","aboard"],
             ["processed","colonial","struck","queue","convince","collapse","modest","inspiration","moisture","microscopic","absorb","soar","masterstroke","retreat","philosophy"]];

const FIGS = {
  fry:{svg:`<svg viewBox="0 0 600 330" role="img" aria-label="How flash-frying makes instant noodles" style="display:block;width:100%;height:auto;border-radius:6px;background:#FFF7EC">
<defs><marker id="nh" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1A2238"/></marker></defs>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238"><text x="24" y="30" font-size="15" font-weight="700">How instant noodles work</text><text x="24" y="48" font-size="11" fill="#5A6478">泡麵的祕密：油炸留下小洞，熱水再把洞填滿</text></g>
<g fill="none" stroke="#E2B65C" stroke-width="5" stroke-linecap="round">
<path d="M46 110 C60 96 76 124 90 110 S120 96 134 110"/><path d="M46 126 C60 112 76 140 90 126 S120 112 134 126"/><path d="M46 142 C60 128 76 156 90 142 S120 128 134 142"/></g>
<g fill="#5BA4D6"><circle cx="66" cy="96" r="3"/><circle cx="104" cy="120" r="3"/><circle cx="84" cy="150" r="3"/><circle cx="122" cy="102" r="3"/></g>
<path d="M190 150 C190 176 216 190 250 190 C284 190 310 176 310 150Z" fill="#8C5A2B"/><path d="M196 150 C196 140 304 140 304 150" fill="#F2C14E" opacity=".85"/>
<g fill="none" stroke="#E2B65C" stroke-width="5" stroke-linecap="round"><path d="M214 128 C226 116 238 140 250 128 S274 116 286 128"/><path d="M214 114 C226 102 238 126 250 114 S274 102 286 114"/></g>
<g fill="none" stroke="#9CC1DE" stroke-width="2.5" stroke-linecap="round"><path d="M226 96 C222 84 230 76 226 64"/><path d="M252 92 C248 78 258 70 252 56"/><path d="M276 96 C272 84 280 76 276 64"/></g>
<rect x="362" y="96" width="92" height="62" rx="10" fill="#F2C14E" stroke="#C99A2E" stroke-width="2.5"/>
<g fill="#FFF7EC" stroke="#C99A2E" stroke-width="1"><circle cx="382" cy="112" r="4"/><circle cx="404" cy="124" r="3"/><circle cx="430" cy="110" r="4"/><circle cx="446" cy="138" r="3"/><circle cx="390" cy="142" r="3.5"/><circle cx="418" cy="146" r="4"/><circle cx="414" cy="104" r="2.5"/></g>
<path d="M500 104 C500 150 512 176 540 176 C568 176 580 150 580 104Z" fill="#fff" stroke="#1A2238" stroke-width="2.5"/><path d="M504 112 C520 106 560 106 576 112 C574 140 566 166 540 166 C514 166 506 140 504 112Z" fill="#D9A441" opacity=".65"/>
<g fill="none" stroke="#E2B65C" stroke-width="4" stroke-linecap="round"><path d="M512 124 C522 116 532 132 542 124 S562 116 570 124"/><path d="M512 140 C522 132 532 148 542 140 S562 132 570 140"/></g>
<g fill="none" stroke="#9CC1DE" stroke-width="2.5" stroke-linecap="round"><path d="M526 90 C522 78 530 70 526 58"/><path d="M552 90 C548 78 556 70 552 58"/></g>
<g stroke="#1A2238" stroke-width="2" fill="none" marker-end="url(#nh)"><path d="M142 126 C158 120 170 126 182 132"/><path d="M318 130 C332 124 344 124 356 128"/><path d="M462 128 C474 122 484 122 494 128"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238">
<text x="40" y="196" font-size="13" font-weight="700">1. Steamed noodles</text><text x="40" y="212" font-size="11" fill="#5A6478">蒸好、調味的麵條</text><text x="40" y="226" font-size="11" fill="#5A6478">裡面有很多水分</text>
<text x="196" y="214" font-size="13" font-weight="700">2. Flash-fried</text><text x="196" y="230" font-size="11" fill="#5A6478">高溫油炸，水分變成</text><text x="196" y="244" font-size="11" fill="#5A6478">蒸氣跑掉，留下小洞</text>
<text x="352" y="182" font-size="13" font-weight="700">3. Dry block</text><text x="352" y="198" font-size="11" fill="#5A6478">乾燥的麵塊</text><text x="352" y="212" font-size="11" fill="#5A6478">可以保存好幾個月</text>
<text x="490" y="200" font-size="13" font-weight="700">4. Add hot water</text><text x="490" y="216" font-size="11" fill="#5A6478">熱水流進小洞</text><text x="490" y="230" font-size="11" fill="#5A6478">幾分鐘就變軟</text>
</g>
<path d="M24 268 C200 262 400 274 576 266" stroke="#E7D6BF" stroke-width="2" fill="none"/>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238" font-size="12"><text x="24" y="294" font-weight="700">1958 Chicken Ramen (age 48)</text><text x="230" y="294" font-weight="700">1971 Cup Noodles (61)</text><text x="414" y="294" font-weight="700">2005 Space Ram (95)</text>
<text x="24" y="312" font-size="11" fill="#5A6478">雞汁拉麵（48 歲）</text><text x="230" y="312" font-size="11" fill="#5A6478">杯麵（61 歲）</text><text x="414" y="312" font-size="11" fill="#5A6478">太空拉麵（95 歲）</text></g>
</svg>`,
    cap:"泡麵的原理：先用熱油把麵裡的水分逼出來、留下小洞，吃的時候熱水再把小洞填滿，麵就變軟了。",
    credit:"圖解：winglish.tw"},
  photo:{src:"https://images.unsplash.com/photo-1566841518968-94f239e7cb1a?auto=format&fit=crop&w=1400&q=70", local:"noodles-2.jpg", alt:"Neon lights at the Cup Noodles Museum in Yokohama", fb:"（橫濱杯麵博物館的照片）",
    cap:"日本橫濱的杯麵博物館，介紹安藤百福發明泡麵和杯麵的故事。",
    credit:'Photo: Matt &amp; Chris Pua / <a href="https://unsplash.com/photos/cup-noodles-drama-theater-neon-light-signage-7Z_vOw_z4ZY" target="_blank" rel="noopener">Unsplash</a>'}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["How to cook ramen at home","The man who invented instant noodles","Why noodles are healthy","Life in Chiayi a hundred years ago"],
   "a":1,"exp":"文章介紹出生在嘉義的安藤百福怎麼發明泡麵、杯麵和太空拉麵，答案是 (B)。"},
  {"q":"2. How did Ando get the idea of frying the noodles?","tag":"細節",
   "opts":["He read about it in a book.","A friend in America told him.","He watched his wife fry food in hot oil.","He saw it in a restaurant in Taiwan."],
   "a":2,"exp":"第二段：他看到太太用熱油炸東西，想到這個點子，答案是 (C)。"},
  {"q":"3. Why do fried noodles become soft again in hot water?","tag":"因果",
   "opts":["The hot water fills the tiny holes left by frying.","The noodles are made of rice.","The oil makes them soft.","The cup keeps them warm."],
   "a":0,"exp":"第二段：炸過後水分跑出來留下小洞，熱水再流進洞裡，麵就變軟了，答案是 (A)。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["The Best Ramen Shops in Japan","How to Become Rich Quickly","A Late Bloomer Who Changed the Way the World Eats","Why Astronauts Like Noodles"],
   "a":2,"exp":"安藤百福 48 歲失去一切後才發明泡麵，改變了全世界的飲食，(C)「大器晚成、改變世界吃法的人」最適合。"},
  {"q":"2. What happened to Ando in 1957?","tag":"細節",
   "opts":["He moved to the United States.","He invented Cup Noodles.","He went to space.","He lost nearly everything when his credit union went bankrupt."],
   "a":3,"exp":"第二段：1957 年他經營的信用合作社破產，幾乎失去一切，答案是 (D)。"},
  {"q":"3. What gave Ando the idea for Cup Noodles?","tag":"因果",
   "opts":["Supermarket managers eating his noodles from paper cups","A Japanese astronaut","His wife's tempura","A long line of hungry people"],
   "a":0,"exp":"第三段：他看到美國超市經理把麵掰碎放進紙杯、用叉子吃，因此研發出杯麵，答案是 (A)。"},
  {"q":"4. Why did Space Ram have a thick soup?","tag":"推論",
   "opts":["To make it taste better","So that it would not float away in space","Because astronauts like spicy food","To keep it cheap"],
   "a":1,"exp":"第三段：太空拉麵的湯汁濃稠、不會飄走，因為太空中沒有重力，答案是 (B)。"}
 ],
 [
  {"q":"1. What point does the author make in the last paragraph?","tag":"主旨",
   "opts":["Instant noodles are not healthy.","Ando's life proved it is never too late to start something new.","Ando should have stayed in Taiwan.","Most people eat too many instant noodles."],
   "a":1,"exp":"最後一段：安藤常說開始新的事永遠不嫌晚，而他用自己的人生證明了這一點，答案是 (B)。"},
  {"q":"2. The word \"masterstroke\" in the third paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["a terrible mistake","a famous painting","a very clever and successful idea","a kind of noodle"],
   "a":2,"exp":"masterstroke 指的是杯麵這個「高招、神來之筆」，後面也說杯麵幫助泡麵紅遍全世界，答案是 (C)。"},
  {"q":"3. According to the passage, what does flash-frying do to the noodles?","tag":"細節",
   "opts":["It makes them sweeter.","It adds more water to them.","It removes their moisture and leaves tiny pores.","It turns them into udon."],
   "a":2,"exp":"第二段：高溫快速油炸能逼出水分，在麵上留下微小孔洞，答案是 (C)。"},
  {"q":"4. What can be inferred from the sight of people queuing in the cold?","tag":"推論",
   "opts":["It made Ando want to provide food that people could easily eat.","Ando owned the noodle stall.","Noodles were cheap after the war.","Ando did not like ramen."],
   "a":0,"exp":"這個畫面讓他確信和平的前提是人人都能吃飽，之後他著手做出加熱水就能吃的麵，可推知 (A)。"},
  {"q":"5. Which of the following is NOT true according to the passage?","tag":"細節",
   "opts":["Ando was born in Puzi, Chiayi.","Chicken Ramen was cheaper than fresh udon at first.","Cup Noodles came out in 1971.","Ando died in 2007 at the age of 96."],
   "a":1,"exp":"第二段說雞汁拉麵一開始的價格是新鮮烏龍麵的好幾倍，不是比較便宜，所以 (B) 不正確。"}
 ]
];

const META = {
 id:"noodles", title:"The Man Who Invented Instant Noodles", category:"食物",
 dek:"泡麵的發明者，是在嘉義朴子出生的吳百福。他 48 歲時失去一切，卻在後院小屋裡發明了泡麵，95 歲還把拉麵送上了太空。",
 date:"2026/11/2",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1766871138762-51db92945bbc?auto=format&fit=crop&w=1600&q=70" data-local="noodles-hero.jpg" alt="Shelves of instant noodle cups in a Japanese supermarket" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#FCE6EA"/>
<path d="M290 140 C290 260 320 330 400 330 C480 330 510 260 510 140Z" fill="#fff" stroke="#1A2238" stroke-width="5"/><path d="M296 190 C360 180 440 180 504 190 L500 230 C440 222 360 222 300 230Z" fill="#D23F57"/>
<path d="M280 130 C330 116 470 116 520 130 L516 146 C470 136 330 136 284 146Z" fill="#E9EEF5" stroke="#1A2238" stroke-width="4"/>
<g fill="none" stroke="#9CC1DE" stroke-width="6" stroke-linecap="round"><path d="M350 100 C342 80 358 64 350 44"/><path d="M400 96 C392 74 410 58 400 36"/><path d="M450 100 C442 80 458 64 450 44"/></g></svg>
<figcaption>現在全世界每年吃掉超過 1000 億份泡麵。<span class="credit">Photo: Nathan Cima / Unsplash</span></figcaption>`,
 fact:"日清在大阪池田和神奈川橫濱都有杯麵博物館，遊客可以自己設計杯麵的杯子、挑選湯頭和配料，做一個獨一無二的杯麵帶回家。",
 next:{title:"The World's Biggest Mirror", href:"read.html#uyuni"}
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
