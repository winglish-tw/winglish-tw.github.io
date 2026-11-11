/* winglish.tw 閱讀館文章資料：The Raincoat Inside a Seal（海豹腸子做的防水外套） */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1,2],[3,4,5,6],[7,8,9,10],[11,12,13]], figs:{1:"steps"}, heads:{1:"From Seal to Coat",2:"Light, Dry and Clever",3:"An Old Skill, Still Alive"},
   sents:[
    ["What do you wear on a rainy day?","下雨天你都穿什麼？"],
    ["Most of us put on a raincoat made of plastic.","我們大多數人會穿上塑膠做的雨衣。"],
    ["But long ago, people in the cold Arctic made raincoats from something very surprising: the intestines of seals.","但很久以前，住在寒冷北極地區的人，用一種非常令人意外的東西做雨衣：海豹的腸子。"],
    ["First, women cleaned the long intestines very carefully.","首先，婦女們會非常仔細地把長長的腸子清洗乾淨。"],
    ["Then they blew air into them, like long balloons, and hung them outside to dry.","接著她們往腸子裡吹氣，像長長的氣球一樣，再掛到外面晾乾。"],
    ["After that, they cut the dry intestines into long strips.","之後，她們把乾掉的腸子剪成一條一條的長條。"],
    ["Finally, they sewed the strips together with special stitches that kept water out.","最後，她們用一種能擋住水的特殊針法，把長條縫在一起。"],
    ["The finished coat was very light, and you could almost see through it.","做好的外套非常輕，而且幾乎是半透明的。"],
    ["Hunters wore these coats in their kayaks on the cold sea.","獵人們划獨木舟到冰冷的海上時，就穿著這種外套。"],
    ["They tied the bottom of the coat around the kayak, so no water could get in.","他們把外套的下襬綁在獨木舟的開口上，這樣水就進不來。"],
    ["The coat also let sweat out, so the hunters did not get wet inside.","這種外套還能讓汗水散出去，所以獵人的身體在裡面也不會濕。"],
    ["Making one coat took many weeks of hard work.","做一件外套要花好幾個星期的辛苦工夫。"],
    ["Today, only some elders still know how to make them, and they are teaching young people.","現在只剩一些長者還會做，他們正在教年輕人。"],
    ["Next time it rains, think about the clever people who made raincoats from seals!","下次下雨的時候，想想那些用海豹做雨衣的聰明人吧！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1],[2,3,4,5,6],[7,8,9,10],[11,12],[13,14,15]], figs:{1:"steps"}, heads:{1:"Turning Guts into Cloth",2:"A Coat That Breathes",3:"A Work of Art",4:"Passing It On"},
   sents:[
    ["Long before plastic raincoats, people living along the coasts of Alaska and Siberia had already solved a tricky problem: how to stay dry in a land of icy rain and sea spray.","早在塑膠雨衣出現之前，住在阿拉斯加和西伯利亞沿海的人就已經解決了一個棘手的問題：在冰冷雨水和海浪飛沫不斷的地方，要怎麼保持乾爽。"],
    ["Their answer was the gut parka, a hooded coat sewn from the intestines of seals, walruses and other sea animals.","他們的答案是「腸衣大衣」──一種用海豹、海象等海洋動物的腸子縫成的連帽外套。"],
    ["Making one was slow, careful work, usually done by women.","做一件腸衣大衣是緩慢又細心的工作，通常由婦女來完成。"],
    ["After a hunt, the small intestines of a bearded seal were emptied, washed and scraped until only a thin, clean layer remained.","打獵之後，髯海豹的小腸會被清空、洗淨、刮薄，直到只剩下一層又薄又乾淨的膜。"],
    ["The women then inflated each intestine like a long balloon and hung it outside to dry.","接著婦女們把每條腸子像長氣球一樣吹脹，掛在外面晾乾。"],
    ["Once dry, the tubes were split open into flat ribbons about seven or eight centimeters wide.","晾乾之後，這些管子會被剖開，變成大約七、八公分寬的扁平長條。"],
    ["These were joined with a special folded seam that did not let water through, and the seams were often reinforced with beach grass.","這些長條用一種特殊的摺邊縫法接起來，水滲不過去；縫線處還常用海邊的草來加固。"],
    ["The result was surprisingly light and nearly see-through, yet tough enough for life at sea.","成品出乎意料地輕，幾乎是半透明的，卻又堅韌到足以應付海上生活。"],
    ["Hunters pulled the hood tight around their faces and tied the bottom of the coat to the opening of their kayaks, turning person and boat into one watertight unit.","獵人會把帽子拉緊貼住臉，再把外套下襬綁在獨木舟的開口上，讓人和船變成一個滴水不漏的整體。"],
    ["Even more impressive, the material was breathable: it kept rain out while allowing moisture from the body to escape.","更厲害的是，這種材料會「呼吸」：它能擋住雨水，同時讓身體的濕氣散出去。"],
    ["Gut parkas were not warm, however, so people usually wore them over fur clothing.","不過，腸衣大衣並不保暖，所以人們通常把它穿在毛皮衣服的外面。"],
    ["Some parkas were works of art, decorated with feathers, colored yarn and the bright orange beaks of small seabirds called auklets.","有些腸衣大衣根本是藝術品，上面裝飾著羽毛、彩色毛線，還有一種叫「海雀」的小海鳥鮮橘色的鳥喙。"],
    ["Interestingly, the season mattered: guts dried in the freezing winter wind turned white and were often saved for ceremonies, while summer-dried guts stayed clear and were used for everyday wear.","有趣的是，季節很重要：在冬天寒風中晾乾的腸子會變白，常被留來做儀式用的衣服；夏天晾乾的則保持透明，用來做平常穿的衣服。"],
    ["When rubber and plastic arrived, fewer and fewer people kept up the skill.","橡膠和塑膠傳進來之後，還保有這項技藝的人就越來越少了。"],
    ["Today, elders in Alaska are working hard to pass it on to younger generations.","現在，阿拉斯加的長者們正努力把它傳給年輕一代。"],
    ["Next to a modern rain jacket, a gut parka may look strange, but it proves that clever design does not always need a laboratory.","和現代的雨衣比起來，腸衣大衣也許看起來很奇怪，但它證明了聰明的設計不一定需要實驗室。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12,13]], figs:{1:"steps"}, heads:{1:"An Unlikely Fabric",2:"Engineering for the Open Sea",3:"Spiritual Armor, Fragile Legacy"},
   sents:[
    ["For most of human history, waterproof clothing was something of a contradiction: a garment that kept rain out tended to trap sweat in, leaving its wearer soaked from the inside.","在人類歷史的大部分時間裡，防水衣物幾乎是一種矛盾：能把雨擋在外面的衣服，往往也會把汗悶在裡面，讓穿的人從裡面濕透。"],
    ["Yet long before chemists engineered breathable synthetic membranes, the Indigenous peoples of the Bering Sea region had perfected a material that did both, and they harvested it from the bellies of the animals they hunted.","然而，早在化學家研發出透氣的合成薄膜之前，白令海一帶的原住民族就已經把一種兩者兼具的材料做到近乎完美──而且這種材料是從他們獵捕的動物肚子裡取出來的。"],
    ["The gut parka, known by different names among the Yup'ik, Inupiaq, Alutiiq and Aleut peoples, was typically fashioned from the small intestines of bearded seals, though walrus, sea lion and even bear gut were also used.","腸衣大衣在尤皮克、伊努皮亞克、阿魯提克和阿留申等民族之間有不同的名稱，通常用髯海豹的小腸製成，不過海象、海獅，甚至熊的腸子也會被拿來用。"],
    ["Transforming raw intestines into fabric was an exacting process.","把生的腸子變成布料，是一道要求極高的工序。"],
    ["The gut was emptied, scraped with a crescent-shaped knife until only a translucent membrane remained, inflated, and left to dry in the wind before being slit lengthwise into ribbons roughly three inches wide.","腸子先被清空，再用半月形的刀刮到只剩一層半透明的薄膜，接著吹脹、放在風中晾乾，最後縱向剖開成大約三吋寬的長條。"],
    ["Seamstresses then joined these ribbons with a folded stitch that never fully pierced the material, often tucking dried grass into each seam to keep the thread from tearing through the delicate gut.","女裁縫師再用一種不會完全刺穿材料的摺邊針法把長條接起來，還常在每道縫線裡塞進乾草，以免縫線把脆弱的腸衣扯破。"],
    ["The garment's real genius became apparent at sea.","這件衣服真正巧妙的地方，要到了海上才看得出來。"],
    ["A hunter would cinch the hood around his face and lash the hem to the cockpit of his kayak, so that if he capsized, he could roll upright again without a drop of icy water entering the boat.","獵人會把帽子束緊在臉的四周，再把下襬牢牢綁在獨木舟的座艙口；這樣萬一翻船，他也能翻轉回正，而且不會讓一滴冰冷的海水灌進船裡。"],
    ["Because the membrane resisted liquid water while letting water vapor escape, it stayed comfortable during hours of strenuous paddling, a combination that outdoor-clothing makers would not reliably achieve until the 1970s.","因為這層膜能擋住液態的水，卻讓水蒸氣散出去，所以在好幾個小時吃力的划槳中依然舒適──戶外服飾廠商一直要到 1970 年代才能穩定做出這種組合。"],
    ["The parkas did little to insulate their wearers, however; they served as a shell over warmer layers of fur.","不過，這種大衣幾乎沒有保暖作用；它是套在較暖的毛皮衣服外面的一層外殼。"],
    ["Function was only part of the story.","實用功能只是故事的一部分。"],
    ["Gut prepared in the bitter winter wind turned an opaque white and was often reserved for ceremonies, some parkas were adorned with feathers and the beaks of crested auklets, and among the Alutiiq, gutskin was even believed to shield its wearer from evil spirits.","在刺骨冬風中處理的腸衣會變成不透明的白色，常被保留給儀式使用；有些大衣還用羽毛和冠海雀的鳥喙裝飾；在阿魯提克人之中，腸衣甚至被認為能保護穿著者不受惡靈侵擾。"],
    ["With the arrival of rubber, nylon and cheap factory-made rain gear, the knowledge needed to make such garments began to fade, and today relatively few people can produce one from start to finish.","隨著橡膠、尼龍和便宜的工廠製雨具傳入，製作這種衣服所需的知識開始消失；如今能從頭到尾做出一件的人已經不多了。"],
    ["Their efforts to teach the craft are a reminder that \"primitive\" technology is often anything but: the gut parka was a sophisticated solution, refined over generations, to one of the harshest environments on Earth.","他們傳授這項手藝的努力提醒我們：所謂「原始」的技術，往往一點也不原始──腸衣大衣是經過世世代代改良、用來對付地球上最嚴酷環境之一的精巧解法。"]
 ]}
];

const GLOSS = {
  rainy:["adj.","下雨的"], raincoat:["n.","雨衣"], plastic:["n.","塑膠"], arctic:["n.","北極地區"], surprising:["adj.","令人意外的"],
  intestine:["n.","腸子"], seal:["n.","海豹"], carefully:["adv.","仔細地；小心地"], blew:["v.","吹（blow 的過去式）"], balloon:["n.","氣球"],
  hung:["v.","掛（hang 的過去式）"], strip:["n.","長條"], sew:["v.","縫"], sewn:["v.","縫（sew 的過去分詞）"], stitch:["n.","針腳；針法"], light:["adj.","輕的"],
  hunter:["n.","獵人"], kayak:["n.","獨木舟（愛斯基摩式小艇）"], tie:["v.","綁"], sweat:["n.","汗"], elder:["n.","長者；長輩"], clever:["adj.","聰明的"],
  coast:["n.","海岸"], alaska:["n.","阿拉斯加"], siberia:["n.","西伯利亞"], tricky:["adj.","棘手的"], icy:["adj.","冰冷的"], spray:["n.","（海浪的）飛沫；水花"],
  gut:["n.","腸子"], parka:["n.","連帽大衣"], hooded:["adj.","有帽子的"], walrus:["n.","海象"], hunt:["n.","打獵"], bearded:["adj.","有鬍子的；bearded seal 髯海豹"],
  empty:["v.","清空"], scrape:["v.","刮"], layer:["n.","層"], remain:["v.","留下；剩下"], inflate:["v.","吹脹；使充氣"], tube:["n.","管子"],
  split:["v.","剖開；裂開"], ribbon:["n.","帶子；長條"], centimeter:["n.","公分"], seam:["n.","接縫；縫線"], reinforce:["v.","加固；強化"],
  tough:["adj.","堅韌的"], hood:["n.","兜帽"], watertight:["adj.","不透水的；滴水不漏的"], unit:["n.","單位；整體"], impressive:["adj.","令人佩服的"],
  breathable:["adj.","透氣的"], moisture:["n.","濕氣；水分"], escape:["v.","逸出；逃脫"], fur:["n.","毛皮"], decorate:["v.","裝飾"],
  feather:["n.","羽毛"], yarn:["n.","毛線"], beak:["n.","鳥喙"], seabird:["n.","海鳥"], auklet:["n.","海雀（一種小海鳥）"], ceremony:["n.","儀式；典禮"],
  freezing:["adj.","極冷的"], rubber:["n.","橡膠"], generation:["n.","世代"], laboratory:["n.","實驗室"], design:["n.","設計"],
  waterproof:["adj.","防水的"], contradiction:["n.","矛盾"], garment:["n.","衣服；服裝"], trap:["v.","困住"], wearer:["n.","穿戴者"], soak:["v.","浸濕；濕透"],
  chemist:["n.","化學家"], engineer:["v.","設計製造"], synthetic:["adj.","合成的"], membrane:["n.","薄膜"], indigenous:["adj.","原住民的；本土的"],
  perfect:["v.","使完美；改進"], harvest:["v.","取得；收穫"], belly:["n.","肚子"], fashion:["v.","製作；做成"], typically:["adv.","通常；典型地"],
  transform:["v.","轉變"], fabric:["n.","布料"], exacting:["adj.","要求嚴格的；費心費力的"], crescent:["n.","新月；crescent-shaped 半月形的"],
  translucent:["adj.","半透明的"], slit:["v.","切開；劃開"], lengthwise:["adv.","縱向地"], roughly:["adv.","大約"], seamstress:["n.","女裁縫師"],
  pierce:["v.","刺穿"], tuck:["v.","塞進"], tear:["v.","撕破"], delicate:["adj.","脆弱的；精細的"], genius:["n.","巧妙之處；天才"], apparent:["adj.","明顯的"],
  cinch:["v.","束緊"], lash:["v.","（用繩子）綁緊"], hem:["n.","下襬"], cockpit:["n.","座艙"], capsize:["v.","翻船"], upright:["adv.","直立地"],
  resist:["v.","抵擋"], liquid:["adj.","液態的"], vapor:["n.","蒸氣"], strenuous:["adj.","費力的；吃力的"], paddle:["v.","划槳"], reliably:["adv.","可靠地；穩定地"],
  achieve:["v.","達成"], insulate:["v.","使隔熱保暖"], shell:["n.","外殼"], function:["n.","功能"], bitter:["adj.","刺骨的；嚴寒的"], opaque:["adj.","不透明的"],
  reserve:["v.","保留"], adorn:["v.","裝飾"], crested:["adj.","有冠毛的"], gutskin:["n.","腸衣（處理過的腸子）"], shield:["v.","保護；遮擋"], spirit:["n.","靈；鬼魂"],
  nylon:["n.","尼龍"], fade:["v.","逐漸消失"], relatively:["adv.","相對地"], craft:["n.","手藝；工藝"], reminder:["n.","提醒"], primitive:["adj.","原始的"],
  sophisticated:["adj.","精密的；複雜精巧的"], refine:["v.","改良；精煉"], harsh:["adj.","嚴酷的"], environment:["n.","環境"]
};
const KEY = [["surprising","intestine","carefully","balloon","strip","sew","light","hunter","tie","elder"],
             ["tricky","spray","scrape","inflate","split","reinforce","tough","watertight","breathable","moisture","decorate","ceremony"],
             ["contradiction","garment","exacting","translucent","membrane","slit","pierce","cinch","lash","capsize","strenuous","insulate","adorn","sophisticated"]];

const DEFS = {
  "surprising": "unusual or unexpected, so that it makes you feel surprised",
  "intestine": "the long tube in the body that carries food from the stomach",
  "carefully": "with a lot of attention, so that you do not make mistakes",
  "balloon": "a small, thin bag that you fill with air",
  "strip": "a long, narrow piece of something",
  "sew": "to join pieces of cloth together with a needle and thread",
  "light": "not heavy",
  "hunter": "a person who catches and kills wild animals for food",
  "tie": "to fasten something with a string or rope",
  "elder": "an older person who is respected in a community",
  "tricky": "difficult to deal with",
  "spray": "very small drops of water blown from the sea",
  "scrape": "to remove something from a surface by rubbing it with a sharp edge",
  "inflate": "to fill something with air so that it gets bigger",
  "split": "to cut or break something along its length",
  "reinforce": "to make something stronger",
  "tough": "strong and not easily broken or damaged",
  "watertight": "not allowing any water to get in or out",
  "breathable": "letting air and water vapor pass through",
  "moisture": "a small amount of water in the air or on something",
  "decorate": "to make something look more beautiful by adding things to it",
  "ceremony": "a formal event held on an important social or religious occasion",
  "contradiction": "a situation in which two things are opposite and cannot both be true",
  "garment": "a piece of clothing",
  "exacting": "needing a lot of care, effort and skill",
  "translucent": "allowing some light to pass through, but not completely clear",
  "membrane": "a very thin layer of tissue or material",
  "slit": "to make a long, narrow cut in something",
  "pierce": "to make a hole in something with a sharp point",
  "cinch": "to pull something tight around something else",
  "lash": "to tie something firmly to something else with rope",
  "capsize": "(of a boat) to turn over in the water",
  "strenuous": "needing a lot of effort or strength",
  "insulate": "to protect something from heat loss or cold",
  "adorn": "to make something more beautiful by decorating it",
  "sophisticated": "cleverly designed and able to do complicated things"
};

const USAGE = {
  "surprising": ["a surprising fact · it is surprising that … · not surprising", "It is surprising that this tiny bird can fly so far.", "這麼小的鳥竟然能飛這麼遠，真令人意外。"],
  "intestine": ["small intestine · large intestine · pig intestines", "Pig intestines are a popular snack at night markets in Taiwan.", "豬大腸是台灣夜市很受歡迎的小吃。"],
  "carefully": ["listen carefully · check carefully · carefully read …", "Please read the questions carefully before you answer.", "作答前請仔細讀題。"],
  "balloon": ["blow up a balloon · a hot-air balloon · balloon festival", "The kids blew up balloons for the class party.", "孩子們為了班上的派對吹氣球。"],
  "strip": ["a strip of paper · cut into strips · a strip of land", "Cut the paper into long strips and glue them together.", "把紙剪成長條，再黏在一起。"],
  "sew": ["sew a button on · sew by hand · sewing machine", "My grandma sewed a button back on my shirt.", "奶奶幫我把襯衫的釦子縫回去。"],
  "light": ["light as a feather · a light bag · travel light", "This jacket is light enough to carry in your backpack.", "這件外套輕到可以放進背包帶著走。"],
  "hunter": ["a skilled hunter · deer hunter · treasure hunter", "Owls are excellent hunters at night.", "貓頭鷹是夜晚的優秀獵人。"],
  "tie": ["tie a knot · tie A to B · tie your shoes", "Remember to tie your shoes before you run.", "跑步前記得把鞋帶綁好。"],
  "elder": ["village elders · respect your elders · tribal elders", "The village elders still remember the old songs.", "部落的長者還記得那些古老的歌。"],
  "tricky": ["a tricky question · tricky situation · the tricky part", "The last math question on the test was really tricky.", "考卷最後一題數學真的很棘手。"],
  "spray": ["sea spray · spray paint · a spray of water", "The sea spray made our glasses wet on the boat.", "在船上，浪花把我們的眼鏡都弄濕了。"],
  "scrape": ["scrape off … · scrape a knee · scrape the plate", "He scraped the mud off his shoes before going inside.", "他進屋前把鞋上的泥巴刮掉。"],
  "inflate": ["inflate a tire · inflate a balloon · inflated prices", "We need to inflate the bike tires before the trip.", "出發前我們得幫腳踏車輪胎打氣。"],
  "split": ["split A into B · split the bill · split in half", "Let's split the cake into eight pieces.", "我們把蛋糕切成八塊吧。"],
  "reinforce": ["reinforce a wall · reinforced concrete · reinforce learning", "Workers reinforced the bridge before the typhoon came.", "颱風來之前，工人加固了那座橋。"],
  "tough": ["tough material · a tough job · tough times", "These hiking boots are tough enough for rocky trails.", "這雙登山鞋夠堅固，可以走碎石步道。"],
  "watertight": ["a watertight box · watertight seal · a watertight plan", "Keep your phone in a watertight bag when you go rafting.", "去泛舟時，把手機放進防水袋裡。"],
  "breathable": ["breathable fabric · breathable shoes · light and breathable", "In summer, I prefer shirts made of breathable cotton.", "夏天我比較喜歡透氣的棉質上衣。"],
  "moisture": ["absorb moisture · moisture in the air · lock in moisture", "Rice in the jar keeps salt from absorbing moisture.", "罐子裡放米，可以讓鹽不容易吸濕。"],
  "decorate": ["decorate A with B · decorate a room · beautifully decorated", "We decorated the classroom with paper lanterns.", "我們用紙燈籠布置教室。"],
  "ceremony": ["a wedding ceremony · opening ceremony · graduation ceremony", "The graduation ceremony will be held in the school gym.", "畢業典禮會在學校體育館舉行。"],
  "contradiction": ["a contradiction between A and B · in contradiction to … · a contradiction in terms", "There is a contradiction between what he says and what he does.", "他說的和做的互相矛盾。"],
  "garment": ["a woolen garment · garment factory · outer garment", "The museum shows garments made by hand a hundred years ago.", "博物館展出一百年前手工做的衣服。"],
  "exacting": ["exacting standards · an exacting task · exacting work", "Making traditional paper umbrellas is exacting work.", "製作傳統紙傘是很費工的工作。"],
  "translucent": ["translucent paper · translucent skin · semi-translucent", "Light came softly through the translucent paper screen.", "光線柔和地透過半透明的紙屏風照進來。"],
  "membrane": ["a thin membrane · cell membrane · waterproof membrane", "An egg has a thin membrane just under its shell.", "蛋殼底下有一層薄膜。"],
  "slit": ["slit open … · slit a bag · a narrow slit", "She slit open the envelope with a small knife.", "她用小刀劃開信封。"],
  "pierce": ["pierce a hole · pierce the skin · pierced ears", "The thorn pierced his finger while he was gardening.", "他在整理花園時，手指被刺扎到了。"],
  "cinch": ["cinch a belt · cinch tight · cinch the strap", "Cinch the straps of your backpack so it doesn't swing.", "把背包的背帶束緊，背包才不會晃。"],
  "lash": ["lash A to B · lash together · lash down", "The sailors lashed the boxes to the deck before the storm.", "暴風雨來前，水手把箱子綁緊在甲板上。"],
  "capsize": ["the boat capsized · capsize in a storm · risk of capsizing", "The small boat capsized, but everyone wore life jackets.", "小船翻了，不過每個人都穿著救生衣。"],
  "strenuous": ["strenuous exercise · a strenuous climb · avoid strenuous activity", "Avoid strenuous exercise right after a big meal.", "飽餐之後要避免激烈運動。"],
  "insulate": ["insulate a house · insulate A from B · well insulated", "A thick wall helps insulate the house from the summer heat.", "厚牆有助於隔絕夏天的熱氣。"],
  "adorn": ["adorn A with B · adorned with flowers · richly adorned", "The temple roof is adorned with colorful dragons.", "廟宇的屋頂用色彩鮮豔的龍裝飾著。"],
  "sophisticated": ["a sophisticated system · sophisticated technology · highly sophisticated", "Bats use a sophisticated system of sound to find food.", "蝙蝠用一套精密的聲音系統來尋找食物。"]
};

const FIGS = {
  steps:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="How a gut parka is made" style="display:block;width:100%;height:auto;border-radius:6px;background:#EEF4F6">
<path d="M40 150 C130 140 180 160 270 150 S430 140 560 152" fill="none" stroke="#9FB6BE" stroke-width="2.4" stroke-dasharray="6 7" stroke-linecap="round"/>
<g transform="translate(90,110)">
<path d="M-44 6 C-30 -16 -14 20 0 0 S30 -18 44 4" fill="none" stroke="#C9A27A" stroke-width="13" stroke-linecap="round"/>
<path d="M-44 6 C-30 -16 -14 20 0 0 S30 -18 44 4" fill="none" stroke="#E7CFAE" stroke-width="7" stroke-linecap="round"/>
<path d="M-18 -30 C-10 -36 4 -36 14 -28" fill="none" stroke="#3E6B7A" stroke-width="2.4" stroke-linecap="round"/>
<path d="M14 -28 C10 -22 4 -20 -2 -21" fill="none" stroke="#3E6B7A" stroke-width="2.4" stroke-linecap="round"/>
</g>
<g transform="translate(230,110)">
<path d="M-46 -44 C-16 -48 16 -48 46 -44" fill="none" stroke="#6B5B4E" stroke-width="2" stroke-linecap="round"/>
<path d="M-30 -45 C-34 -20 -26 4 -30 30 C-27 40 -19 40 -17 30 C-14 6 -22 -20 -18 -45" fill="#F4E6CF" stroke="#B48A5C" stroke-width="2"/>
<path d="M-4 -46 C-8 -20 0 8 -4 34 C-1 44 7 44 9 34 C12 8 4 -20 8 -46" fill="#F4E6CF" stroke="#B48A5C" stroke-width="2"/>
<path d="M22 -46 C18 -22 26 2 22 26 C25 36 33 36 35 26 C38 2 30 -22 34 -46" fill="#F4E6CF" stroke="#B48A5C" stroke-width="2"/>
<path d="M44 -20 C50 -24 56 -18 52 -12 M50 -32 C58 -36 64 -28 58 -22" fill="none" stroke="#7FA7B5" stroke-width="2" stroke-linecap="round"/>
</g>
<g transform="translate(370,110)">
<path d="M-40 -34 C-14 -37 14 -31 40 -34 L40 -22 C14 -19 -14 -25 -40 -22Z" fill="#F7EEDD" stroke="#B48A5C" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M-40 -10 C-14 -13 14 -7 40 -10 L40 2 C14 5 -14 -1 -40 2Z" fill="#F7EEDD" stroke="#B48A5C" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M-40 14 C-14 11 14 17 40 14 L40 26 C14 29 -14 23 -40 26Z" fill="#F7EEDD" stroke="#B48A5C" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M30 -48 C36 -42 40 -40 46 -42 L36 -30" fill="none" stroke="#3E6B7A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(510,110)">
<path d="M-12 -52 C-20 -50 -24 -40 -22 -32 C-34 -28 -46 -14 -52 2 L-40 8 C-36 0 -32 -6 -28 -10 C-30 10 -30 30 -32 46 C-10 50 10 50 32 46 C30 30 30 10 28 -10 C32 -6 36 0 40 8 L52 2 C46 -14 34 -28 22 -32 C24 -40 20 -50 12 -52 C6 -56 -6 -56 -12 -52Z" fill="#F7EEDD" stroke="#8C6A45" stroke-width="2" stroke-linejoin="round"/>
<ellipse cx="0" cy="-38" rx="9" ry="10" fill="#EEF4F6" stroke="#8C6A45" stroke-width="1.6"/>
<path d="M-29 -2 C-10 0 10 -4 29 -2 M-30 14 C-10 16 10 12 30 14 M-31 30 C-10 32 10 28 31 30" fill="none" stroke="#B48A5C" stroke-width="1.6" stroke-linecap="round"/>
<path d="M-32 46 C-10 50 10 50 32 46" fill="none" stroke="#D9693A" stroke-width="3" stroke-linecap="round"/>
</g>
<g fill="#3E6B7A"><circle cx="90" cy="151" r="7"/><circle cx="230" cy="149" r="7"/><circle cx="370" cy="147" r="7"/><circle cx="510" cy="151" r="7"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#24414B" text-anchor="middle">
<text x="90" y="186" font-size="15" font-weight="800">1. Clean &amp; scrape</text><text x="90" y="204" font-size="10.5" fill="#5B6E74">清空、洗淨、刮成薄膜</text>
<text x="230" y="186" font-size="15" font-weight="800">2. Inflate &amp; dry</text><text x="230" y="204" font-size="10.5" fill="#5B6E74">像氣球一樣吹脹、晾乾</text>
<text x="370" y="186" font-size="15" font-weight="800">3. Cut into strips</text><text x="370" y="204" font-size="10.5" fill="#5B6E74">剖開成約 7–8 公分寬的長條</text>
<text x="510" y="186" font-size="15" font-weight="800">4. Sew &amp; seal</text><text x="510" y="204" font-size="10.5" fill="#5B6E74">用防水針法橫向縫合</text>
</g>
<text x="300" y="258" font-family="Noto Sans TC,sans-serif" font-size="12" fill="#24414B" text-anchor="middle" font-weight="700">Keeps rain out, lets sweat escape</text>
<text x="300" y="276" font-family="Noto Sans TC,sans-serif" font-size="10.5" fill="#5B6E74" text-anchor="middle">擋雨又透氣：比 Gore-Tex 早了好幾百年</text>
</svg>`,
    cap:"一件腸衣大衣的四個步驟：從清洗腸子到縫成防水外套，常常要花上好幾個星期。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["Why plastic raincoats are better", "How to paddle a kayak", "How seals catch fish in the Arctic", "Raincoats that Arctic people made from seal intestines"],
   "a":3,"exp":"整篇文章都在介紹北極地區的人怎麼用海豹的腸子做雨衣、這種雨衣有什麼厲害的地方，答案是 (D)。"},
  {"q":"2. What did the women do right after the intestines were dry?","tag":"細節",
   "opts":["They blew air into them.", "They washed them.", "They cut them into long strips.", "They gave them to the hunters."],
   "a":2,"exp":"第二段的順序是：洗乾淨 → 吹氣晾乾 → After that 剪成長條 → 縫起來。晾乾之後的下一步是剪成長條，答案是 (C)。"},
  {"q":"3. Which of the following is TRUE according to the passage?","tag":"是非",
   "opts":["The coat let sweat out of it.", "Only men made the coats.", "Many young people already know how to make the coats.", "The coat was very heavy."],
   "a":0,"exp":"(A) 正確，第三段說這種外套 let sweat out（讓汗水散出去）。(D) 外套很輕；(B) 是婦女在做；(C) 現在只剩一些長者會做，正在教年輕人。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["The Gut Parka: An Ancient Rain Jacket", "How to Hunt Bearded Seals", "Why Plastic Changed the World", "The Seabirds of Alaska"],
   "a":0,"exp":"文章介紹腸衣大衣怎麼做、為什麼防水又透氣、怎麼裝飾，以及現在的傳承，最好的標題是 (A)。(D) 海雀只是裝飾的一小部分。"},
  {"q":"2. Why did people usually wear gut parkas over fur clothing?","tag":"因果",
   "opts":["Because fur was more beautiful", "Because hunters had to hide from seals", "Because gut parkas were too heavy", "Because gut parkas did not keep people warm"],
   "a":3,"exp":"第三段說 Gut parkas were not warm, however, so people usually wore them over fur clothing. 因為它不保暖，答案是 (D)。"},
  {"q":"3. According to the passage, what were guts dried in winter often used for?","tag":"細節",
   "opts":["Everyday raincoats", "Fishing nets", "Clothes for ceremonies", "Kayak seats"],
   "a":2,"exp":"第四段說冬天寒風中晾乾的腸子會變白，常被留來做 ceremonies（儀式）用的衣服；夏天晾乾的才拿來平常穿，答案是 (C)。"},
  {"q":"4. What does the writer most likely want to show in the last sentence?","tag":"推論",
   "opts":["Modern rain jackets are useless.", "Smart ideas can come from traditional knowledge.", "Scientists copied the gut parka.", "Gut parkas are sold in many stores today."],
   "a":1,"exp":"最後一句說腸衣大衣證明 clever design does not always need a laboratory（聰明的設計不一定需要實驗室），作者想表達傳統智慧也能有很聰明的設計，答案是 (B)。文中沒說科學家抄襲 (C)，也沒說現在店裡有賣 (D)。"}
 ],
 [
  {"q":"1. Which of the following best expresses the main idea of the passage?","tag":"主旨",
   "opts":["Modern waterproof jackets were invented by copying Arctic clothing.", "The gut parka was a clever, carefully made garment with both practical and spiritual value.", "Bearded seals are hunted mainly for their intestines.", "Indigenous peoples of the Bering Sea no longer use gut parkas at all."],
   "a":1,"exp":"文章先講腸衣大衣解決了「防水卻不透氣」的矛盾，再講它的製作工序和在海上的用途，最後提到儀式與信仰的意義，以及技藝的傳承，(B) 最完整。(A) 文中沒說是抄來的；(D) 說得太絕對，文中說還有人在傳授。"},
  {"q":"2. Why did seamstresses tuck dried grass into the seams?","tag":"細節",
   "opts":["To make the parka warmer", "To decorate the parka", "To stop the thread from tearing the gut", "To make the parka smell better"],
   "a":2,"exp":"第二段說她們塞乾草是 to keep the thread from tearing through the delicate gut（以免縫線把脆弱的腸衣扯破），答案是 (C)。"},
  {"q":"3. The word \"capsized\" in the third paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["turned over in the water", "ran out of food", "got lost at sea", "caught a seal"],
   "a":0,"exp":"句子說萬一 capsized，獵人能 roll upright again（再翻轉回正），可知 capsize 是「翻船」，答案是 (A)。"},
  {"q":"4. What does the writer suggest by saying \"primitive\" technology is often \"anything but\"?","tag":"推論",
   "opts":["People should stop using old technology.", "Primitive technology is hard to describe in words.", "Old technology is usually simple and weak.", "Technology called primitive can actually be highly advanced."],
   "a":3,"exp":"anything but 是「一點也不」。作者把 primitive 加上引號，意思是這些被叫做「原始」的技術其實一點也不原始，接著說腸衣大衣是 a sophisticated solution（精巧的解法），答案是 (D)。"},
  {"q":"5. Which of the following is NOT mentioned in the passage?","tag":"細節",
   "opts":["The tool used to scrape the gut", "How wide the gut ribbons were", "How much a gut parka was sold for", "When outdoor-clothing makers achieved a similar material"],
   "a":2,"exp":"(A) 半月形的刀、(B) 大約三吋寬、(D) 1970 年代，文中都有提到。文章沒有提到腸衣大衣賣多少錢，答案是 (C)。"}
 ]
];

const META = {
 id:"sealgut", title:"The Raincoat Inside a Seal", category:"服飾時尚",
 dek:"海豹的腸子洗乾淨、吹氣、晾乾，再一條條縫起來，竟然變成又輕又防水、還會「呼吸」的外套。北極的人比 Gore-Tex 早了好幾百年。",
 date:"2026/11/11",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1730330727667-952f0b8fb436?auto=format&fit=crop&w=1600&q=70" data-local="sealgut-hero.jpg" alt="A seal resting on floating ice in Alaska" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#DCEAF0"/><path d="M0 250 C200 238 600 262 800 248 V420 H0Z" fill="#7FA7B5"/><path d="M220 260 C300 238 470 236 560 258 C520 280 280 282 220 260Z" fill="#F7FBFC"/><path d="M300 248 C320 212 380 196 430 204 C470 210 500 230 510 246 C470 252 360 254 300 248Z" fill="#8C8178"/><circle cx="470" cy="214" r="3" fill="#2D2A28"/></svg>
<figcaption>阿拉斯加浮冰上休息的海豹。北極的原住民族會用髯海豹等海洋動物的腸子，做成防水的外套。<span class="credit">Photo: Vadym Shashkov / Unsplash</span></figcaption>`,
 fact:"腸衣大衣濕濕軟軟的時候，可以捲成小小一捆收起來；除了外套，阿拉斯加人還用海豹腸縫成連身防水衣，穿著站在水裡下網捕鮭魚！",
 next:{title:"The King Who Dressed for Power", href:"read.html#louis"}
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
