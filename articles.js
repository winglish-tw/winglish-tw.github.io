/* winglish.tw 閱讀館：文章清單（書架會自動依照這裡排出卡片）
   新增文章：加一筆資料＋上傳 a-<id>.js 即可 */
window.ARTICLES = [
 {"id": "travelogue", "cat": "books", "catName": "好書介紹", "title": "A Journey Through Taiwan, One Dish at a Time", "blurb": "楊双子《臺灣漫遊錄》拿下國際布克獎：1938 年，兩個女人吃遍台灣。", "photo": "photo-1745324212400-bcdf7224e1e9"},
 {"id": "sealgut", "cat": "fashion", "catName": "服飾時尚", "title": "The Raincoat Inside a Seal", "blurb": "海豹的腸子洗淨、吹氣、晾乾，竟能縫成又輕又防水、還會「呼吸」的外套。", "photo": "photo-1730330727667-952f0b8fb436"},
 {"id": "louis", "cat": "fashion", "catName": "服飾時尚", "title": "The King Who Dressed for Power", "blurb": "紅色高跟鞋、巨大捲髮假髮、357 面鏡子──全歐洲最愛漂亮的國王路易十四。", "photo": "photo-1527463945444-74a3bcda664c"},
 {"id": "setjet", "cat": "travel", "catName": "旅行", "title": "Holidays from the Screen", "blurb": "為了一部劇飛去一座城市？追劇旅行 set-jetting 的魅力與煩惱。", "photo": "photo-1565784623522-7fdf499a94a4"},
 {"id": "thanksgiving", "cat": "culture", "catName": "文化節慶", "title": "A Feast, a Letter and a Lucky Turkey", "blurb": "第一次感恩節可能沒有火雞？寫信 17 年的作家，和每年被總統「特赦」的火雞。", "photo": "photo-1763689454945-4b0f3b151969", "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#F3D9A4\"/><path d=\"M0 120 C80 114 240 114 320 120 V170 H0Z\" fill=\"#B9773E\"/><ellipse cx=\"160\" cy=\"122\" rx=\"96\" ry=\"18\" fill=\"#FFFDF6\"/><path d=\"M98 118 C98 80 126 60 160 60 C194 60 222 80 222 118Z\" fill=\"#C46A2B\"/><path d=\"M118 108 C122 84 138 72 158 71\" fill=\"none\" stroke=\"#E39A57\" stroke-width=\"6\" stroke-linecap=\"round\"/><g fill=\"#E07A3A\"><circle cx=\"58\" cy=\"126\" r=\"9\"/><circle cx=\"262\" cy=\"128\" r=\"9\"/></g><g fill=\"#7BA05B\"><circle cx=\"44\" cy=\"120\" r=\"7\"/><circle cx=\"276\" cy=\"120\" r=\"7\"/></g></svg>"},
 {"id": "axolotl", "cat": "animal", "catName": "動物冷知識", "title": "The Animal That Never Grows Up", "blurb": "斷了腳會長回來、連心臟都能修補，一輩子長不大的「六角恐龍」。", "photo": "photo-1578999621243-9381851a6a84"},
 {"id": "crows", "cat": "animal", "catName": "動物冷知識", "title": "Never Forget a Face", "blurb": "戴面具抓了七隻烏鴉，結果整個校園的烏鴉罵了他十幾年。", "photo": "photo-1559649191-b9d89ad31819"},
 {"id": "chili", "cat": "food", "catName": "食物", "title": "Why Does Spicy Food Feel Hot?", "blurb": "辣不是一種味道，是大腦被騙了。解辣為什麼要喝牛奶？", "photo": "photo-1741963201583-390e6aeb0166"},
 {"id": "noodles", "cat": "food", "catName": "食物", "title": "The Man Who Invented Instant Noodles", "blurb": "出生在嘉義的吳百福，48 歲在後院小屋發明了泡麵。", "photo": "photo-1766871138762-51db92945bbc"},
 {"id": "uyuni", "cat": "travel", "catName": "旅行", "title": "The World's Biggest Mirror", "blurb": "下過雨的烏尤尼鹽沼，天和地連成一片，還能幫人造衛星校正儀器。", "photo": "photo-1583901370237-2befec865f88"},
 {"id": "jetlag", "cat": "travel", "catName": "旅行", "title": "Why Flying East Is Harder", "blurb": "飛歐洲還好，飛回台灣卻累好幾天？時差的祕密在大腦的時鐘。", "photo": "photo-1751698158488-9faa95a179f8"},
 {"id":"procrastinate","cat":"psych","catName":"心理學","title":"Why We Put Things Off","blurb":"明天要考試卻一直滑手機？拖延其實不是因為懶。","photo":"photo-1492640728264-201e1aac3504"},
 {"id":"memory","cat":"psych","catName":"心理學","title":"The Forgetting Curve","blurb":"背完一天就忘三分之二？教你對抗遺忘的讀書法。","photo":"photo-1622575402739-6e9edf8073c4"},
 {"id":"sleep","cat":"psych","catName":"心理學","title":"Why Teens Need More Sleep","blurb":"晚上睡不著、早上爬不起來，是生理時鐘在作怪。","photo":"photo-1541697030313-c55aac74fbae"},
 {"id":"penicillin","cat":"bio","catName":"醫學生物","title":"The Mold That Saved Millions","blurb":"一個沒收拾的培養皿，變成人類第一種抗生素。","photo":"photo-1581091007718-0c50d599bfd0"},
 {"id":"waterbear","cat":"bio","catName":"醫學生物","title":"The Toughest Tiny Animal","blurb":"半公釐長、上過太空的水熊蟲，其實也有弱點。","photo":"photo-1725714871758-aed5cd8e8745"},
 {"id":"microbes","cat":"bio","catName":"醫學生物","title":"You Are Not Alone","blurb":"細菌比人體細胞多 10 倍？科學家重算後發現不是這樣。","photo":"photo-1614308459036-779d0dfe51ff"},
 {"id":"bench","cat":"social","catName":"社會關懷","title":"A Seat for a New Friend","blurb":"下課沒人陪？一個二年級男孩想出了「友誼長椅」。","photo":"photo-1727600168098-9288d5be2cac"},
 {"id":"lfl","cat":"social","catName":"社會關懷","title":"Take a Book, Share a Book","blurb":"家門口的一個小書箱，變成全世界十七萬座小圖書館。","photo":"photo-1773224811488-070c7dce2657"},
 {"id":"shokudo","cat":"social","catName":"社會關懷","title":"A Table for Every Child","blurb":"不讓孩子一個人餓著肚子吃飯：日本的兒童食堂。","photo":"photo-1680137248903-7af5d51a3350"},
 {"id":"kailash","cat":"people","catName":"人物","title":"The Boy at the School Gate","blurb":"校門口擦鞋的男孩，讓他救出八萬多名童工，還和馬拉拉同獲諾貝爾獎。","photo":"photo-1761322572550-967ea8c0bfd9"},
 {"id":"ruby","cat":"people","catName":"人物","title":"The Long Walk to First Grade","blurb":"6 歲的她在 4 名法警保護下走進學校，全班只有她一個人。","photo":"photo-1580582932707-520aed937b7b"},
 {"id":"braille","cat":"people","catName":"人物","title":"Six Dots That Changed the World","blurb":"3 歲失明的男孩，15 歲發明了全世界盲人都在用的點字。","photo":"photo-1618411525737-a00b36264665"},
 {
  "id": "spirits",
  "cat": "culture",
  "catName": "文化節慶",
  "title": "When Spirits Come Home",
  "blurb": "小黃瓜馬、茄子牛，和抱著祖先跳舞的節日。",
  "photo": "photo-1761139844053-48346487b456",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#2C355A\"/><path d=\"M0 110 C80 96 240 96 320 110 V170 H0Z\" fill=\"#1A2238\"/><circle cx=\"270\" cy=\"40\" r=\"18\" fill=\"#FFF6C9\"/><circle cx=\"278\" cy=\"35\" r=\"16\" fill=\"#2C355A\"/>\n          <g><circle cx=\"70\" cy=\"122\" r=\"22\" fill=\"#FFE14D\" opacity=\".25\"/><rect x=\"60\" y=\"110\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#FFE9A8\"/><rect x=\"57\" y=\"127\" width=\"26\" height=\"5\" rx=\"2\" fill=\"#8C5A2B\"/>\n          <circle cx=\"160\" cy=\"136\" r=\"24\" fill=\"#FFE14D\" opacity=\".25\"/><rect x=\"149\" y=\"123\" width=\"22\" height=\"20\" rx=\"3\" fill=\"#FFE9A8\"/><rect x=\"146\" y=\"142\" width=\"28\" height=\"5\" rx=\"2\" fill=\"#8C5A2B\"/>\n          <circle cx=\"248\" cy=\"120\" r=\"20\" fill=\"#FFE14D\" opacity=\".25\"/><rect x=\"239\" y=\"110\" width=\"18\" height=\"16\" rx=\"3\" fill=\"#FFE9A8\"/><rect x=\"236\" y=\"125\" width=\"24\" height=\"5\" rx=\"2\" fill=\"#8C5A2B\"/></g></svg>"
 },
 {
  "id": "octopus",
  "cat": "animal",
  "catName": "動物冷知識",
  "title": "Three Hearts and Blue Blood",
  "blurb": "章魚有三顆心臟，血還是藍色的？",
  "photo": "photo-1510637234398-d25c9570a0a0",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#1F5C8C\"/><g fill=\"#fff\" opacity=\".35\"><circle cx=\"40\" cy=\"40\" r=\"5\"/><circle cx=\"52\" cy=\"22\" r=\"3\"/><circle cx=\"270\" cy=\"60\" r=\"4\"/><circle cx=\"282\" cy=\"40\" r=\"2.5\"/></g><path d=\"M0 150 Q80 138 160 150 T320 148 V170 H0Z\" fill=\"#E8D2A6\"/>\n          <g fill=\"#D23F57\"><ellipse cx=\"160\" cy=\"70\" rx=\"40\" ry=\"36\"/><path d=\"M128 92 q-24 30 -50 26 q22 -4 34 -30Z\"/><path d=\"M140 100 q-10 34 -34 46 q16 -16 22 -46Z\"/><path d=\"M156 104 q0 34 -10 50 q16 -14 20 -50Z\"/><path d=\"M168 104 q10 34 22 48 q-4 -18 -12 -48Z\"/><path d=\"M180 100 q18 30 42 38 q-18 -12 -30 -40Z\"/><path d=\"M190 90 q26 22 52 18 q-24 -6 -42 -26Z\"/></g>\n          <circle cx=\"146\" cy=\"68\" r=\"7\" fill=\"#fff\"/><circle cx=\"174\" cy=\"68\" r=\"7\" fill=\"#fff\"/><circle cx=\"148\" cy=\"69\" r=\"3.5\" fill=\"#1A2238\"/><circle cx=\"176\" cy=\"69\" r=\"3.5\" fill=\"#1A2238\"/>\n          <g fill=\"#FFE14D\"><path d=\"M60 50 c-6-8 -18 0 -10 9 l10 9 10-9 c8-9 -4-17 -10-9Z\"/><path d=\"M256 92 c-5-7 -15 0 -8 8 l8 7 8-7 c7-8 -3-15 -8-8Z\"/><path d=\"M90 110 c-4-6 -12 0 -6 6 l6 6 6-6 c6-6 -2-12 -6-6Z\"/></g></svg>"
 },
 {
  "id": "icehotel",
  "cat": "travel",
  "catName": "旅行",
  "title": "A Hotel That Melts Every Spring",
  "blurb": "瑞典的冰旅館，每年都要重新蓋一次。",
  "photo": "photo-1583528187857-27f818f12caf",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#16213E\"/><path d=\"M0 60 C60 20 120 70 180 30 S290 40 320 20 V70 C260 80 200 60 140 85 S40 70 0 95Z\" fill=\"#3DD6A4\" opacity=\".45\"/><path d=\"M0 130 H320 V170 H0Z\" fill=\"#EAF4FB\"/>\n          <path d=\"M80 130 V96 Q160 50 240 96 V130Z\" fill=\"#CFE6F5\"/><path d=\"M80 96 Q160 50 240 96\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\"/><path d=\"M140 130 V108 a20 20 0 0 1 40 0 V130Z\" fill=\"#7FB4D9\"/><g stroke=\"#A9CDE6\" stroke-width=\"2\"><path d=\"M100 104 h120\"/><path d=\"M90 118 h140\"/></g><g fill=\"#fff\"><circle cx=\"40\" cy=\"20\" r=\"1.5\"/><circle cx=\"260\" cy=\"14\" r=\"1.5\"/><circle cx=\"300\" cy=\"50\" r=\"1\"/></g></svg>"
 },
 {
  "id": "popcorn",
  "cat": "food",
  "catName": "食物",
  "title": "Why Does Popcorn Pop?",
  "blurb": "一顆玉米粒裡，藏著一個小小的蒸氣炸彈。",
  "photo": "photo-1512204231446-d520ee0a0873",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#FFE14D\"/><g><path d=\"M120 70 L200 70 L190 160 L130 160Z\" fill=\"#fff\"/><path d=\"M130 70 h12 l-4 90 h-8Z M154 70 h12 v90 h-12Z M178 70 h12 l-6 90 h-6Z\" fill=\"#D23F57\"/></g>\n          <g fill=\"#FFF8E7\" stroke=\"#E7C98A\" stroke-width=\"1.5\"><circle cx=\"135\" cy=\"64\" r=\"12\"/><circle cx=\"155\" cy=\"56\" r=\"14\"/><circle cx=\"178\" cy=\"62\" r=\"13\"/><circle cx=\"195\" cy=\"68\" r=\"10\"/><circle cx=\"125\" cy=\"70\" r=\"9\"/><circle cx=\"166\" cy=\"44\" r=\"11\"/><circle cx=\"90\" cy=\"40\" r=\"8\"/><circle cx=\"236\" cy=\"34\" r=\"9\"/><circle cx=\"250\" cy=\"96\" r=\"7\"/><circle cx=\"70\" cy=\"100\" r=\"7\"/></g>\n          <g stroke=\"#1A2238\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M100 30 l-8-8\"/><path d=\"M226 22 l8-8\"/><path d=\"M262 84 l10-4\"/><path d=\"M60 88 l-10-4\"/></g></svg>"
 },
 {
  "id": "tomatina",
  "cat": "culture",
  "catName": "文化節慶",
  "title": "The Biggest Food Fight on Earth",
  "blurb": "西班牙小鎮一年一度、丟一百多噸番茄的節日。",
  "photo": "photo-1634121192012-16003b5c48e3",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#F4E3C3\"/><g fill=\"#E9CFA0\"><rect x=\"0\" y=\"40\" width=\"70\" height=\"130\"/><rect x=\"250\" y=\"30\" width=\"70\" height=\"140\"/></g><g fill=\"#C9A86E\"><rect x=\"14\" y=\"60\" width=\"16\" height=\"22\" rx=\"8\"/><rect x=\"40\" y=\"60\" width=\"16\" height=\"22\" rx=\"8\"/><rect x=\"266\" y=\"54\" width=\"16\" height=\"22\" rx=\"8\"/><rect x=\"292\" y=\"54\" width=\"16\" height=\"22\" rx=\"8\"/></g>\n          <path d=\"M0 150 H320 V170 H0Z\" fill=\"#B8322E\"/><g fill=\"#D23F57\"><circle cx=\"100\" cy=\"60\" r=\"12\"/><circle cx=\"140\" cy=\"90\" r=\"15\"/><circle cx=\"190\" cy=\"50\" r=\"11\"/><circle cx=\"220\" cy=\"100\" r=\"13\"/><circle cx=\"120\" cy=\"130\" r=\"10\"/><circle cx=\"170\" cy=\"125\" r=\"12\"/><circle cx=\"80\" cy=\"110\" r=\"9\"/><circle cx=\"235\" cy=\"140\" r=\"8\"/></g><g fill=\"#2E7D4F\"><path d=\"M100 48 l-4-4 4 1 4-1Z\"/><path d=\"M140 75 l-5-5 5 1 5-1Z\"/><path d=\"M190 39 l-4-4 4 1 4-1Z\"/><path d=\"M220 87 l-4-4 4 1 4-1Z\"/></g></svg>"
 },
 {
  "id": "plants",
  "cat": "science",
  "catName": "科學",
  "title": "Can Plants Talk?",
  "blurb": "番茄缺水的時候，真的會「喀喀」叫嗎？",
  "photo": "photo-1584748129055-7128427c30f2",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#DDF3E9\"/><path d=\"M0 140 H320 V170 H0Z\" fill=\"#8C5A2B\"/><path d=\"M160 140 V70\" stroke=\"#17875C\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n          <g fill=\"#17875C\"><path d=\"M160 100 C130 100 110 84 106 64 C130 62 154 76 160 100Z\"/><path d=\"M160 86 C188 86 208 70 214 50 C190 48 166 62 160 86Z\"/><path d=\"M160 72 C150 56 152 40 162 28 C172 42 170 58 160 72Z\"/></g>\n          <g fill=\"none\" stroke=\"#1A2238\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".7\"><path d=\"M232 70 q10 14 0 28\"/><path d=\"M248 60 q18 24 0 48\"/><path d=\"M88 70 q-10 14 0 28\"/><path d=\"M72 60 q-18 24 0 48\"/></g></svg>"
 },
 {
  "id": "lightning",
  "cat": "science",
  "catName": "科學",
  "title": "Hotter Than the Sun",
  "blurb": "閃電比太陽表面還熱五倍？「閃電不會打同一個地方兩次」其實是錯的。",
  "photo": "photo-1559087867-ce4c91325525",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#1A2238\"/><path d=\"M0 50 C60 20 120 60 180 34 S280 30 320 44 V0 H0Z\" fill=\"#2C355A\"/><path d=\"M0 148 C90 140 200 154 320 144 V170 H0Z\" fill=\"#0F1526\"/><path d=\"M172 26 l-14 44 l16 -4 l-18 48 l14 -4 l-16 44\" fill=\"none\" stroke=\"#FFE14D\" stroke-width=\"6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M160 88 q-14 14 -32 18\" fill=\"none\" stroke=\"#FFE14D\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>"
 },
 {
  "id": "moon",
  "cat": "science",
  "catName": "科學",
  "title": "The Moon Is Running Away",
  "blurb": "月亮每年離地球遠 3.8 公分，恐龍時代的一天只有 23 個半小時。",
  "photo": "photo-1628003222314-88aa10a0b51f",
  "svg": "<svg viewBox=\"0 0 320 170\" aria-hidden=\"true\"><rect width=\"320\" height=\"170\" fill=\"#141B33\"/><g fill=\"#fff\" opacity=\".6\"><circle cx=\"30\" cy=\"30\" r=\"1.5\"/><circle cx=\"280\" cy=\"40\" r=\"1.5\"/><circle cx=\"150\" cy=\"150\" r=\"1.2\"/></g><circle cx=\"70\" cy=\"110\" r=\"38\" fill=\"#2F7FC1\"/><path d=\"M50 92 c10 -6 20 -2 22 6 c2 8 -8 12 -4 20 c-8 4 -22 -12 -18 -26Z\" fill=\"#3FA96B\"/><circle cx=\"240\" cy=\"70\" r=\"22\" fill=\"#E3E5EA\"/><circle cx=\"233\" cy=\"64\" r=\"5\" fill=\"#C9CCD3\"/><circle cx=\"248\" cy=\"78\" r=\"4\" fill=\"#C9CCD3\"/><path d=\"M108 102 C150 92 190 84 216 76\" fill=\"none\" stroke=\"#FF5A6E\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/><path d=\"M268 62 q14 -4 26 -8\" fill=\"none\" stroke=\"#7CE0B5\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M286 50 l9 4 l-6 8\" fill=\"none\" stroke=\"#7CE0B5\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>"
 },
 {
  "id": "happiness",
  "cat": "life",
  "catName": "生命教育",
  "title": "The 85-Year Secret to Happiness",
  "blurb": "哈佛追蹤一群人八十多年，發現讓人快樂的關鍵不是錢。",
  "photo": "photo-1582298538104-fe2e74c27f59"
 },
 {
  "id": "kintsugi",
  "cat": "life",
  "catName": "生命教育",
  "title": "Golden Cracks",
  "blurb": "碗破了不丟掉，反而用金子把裂痕描出來。",
  "photo": "photo-1654738209839-571e0ff47323"
 },
 {
  "id": "bristlecone",
  "cat": "life",
  "catName": "生命教育",
  "title": "The Tree That Refused to Die",
  "blurb": "活了將近五千年的松樹，只靠一條細細的樹皮撐著。",
  "photo": "photo-1554493767-1fa592e96e26"
 },
 {
  "id": "pinkblue",
  "cat": "gender",
  "catName": "性別平等",
  "title": "When Pink Was for Boys",
  "blurb": "一百年前，粉紅色其實是「男生的顏色」？",
  "photo": "photo-1760727772969-cb5cd59c6f30"
 },
 {
  "id": "switzer",
  "cat": "gender",
  "catName": "性別平等",
  "title": "Runner Number 261",
  "blurb": "1967 年，一位女大學生報名了「只限男性」的馬拉松。",
  "photo": "photo-1571008887538-b36bb32f4571"
 },
 {
  "id": "dads",
  "cat": "gender",
  "catName": "性別平等",
  "title": "The Latte Dads of Sweden",
  "blurb": "在瑞典，推著嬰兒車的爸爸滿街都是，為什麼？",
  "photo": "photo-1733380005522-b8d76ce49d13"
 },
 {
  "id": "garbage",
  "cat": "eco",
  "catName": "環保",
  "title": "The Island That Isn't There",
  "blurb": "太平洋垃圾帶不是一座島，真相更麻煩。",
  "photo": "photo-1760528543790-bb2d3571f813"
 },
 {
  "id": "jeans",
  "cat": "eco",
  "catName": "環保",
  "title": "The Thirsty Jeans",
  "blurb": "做一條牛仔褲，要用掉多少水？答案嚇人。",
  "photo": "photo-1645380672072-43f44d5ee29d"
 },
 {
  "id": "forest",
  "cat": "eco",
  "catName": "環保",
  "title": "The Boy Who Planted a Forest",
  "blurb": "一個 16 歲少年，花了四十年種出一整座森林。",
  "photo": "photo-1766939366704-e4df32f3837a"
 }
];
window.CATS = [["all", "全部"], ["people", "人物"], ["social", "社會關懷"], ["bio", "醫學生物"], ["psych", "心理學"], ["life", "生命教育"], ["gender", "性別平等"], ["eco", "環保"], ["books", "好書介紹"], ["fashion", "服飾時尚"], ["culture", "文化節慶"], ["animal", "動物冷知識"], ["science", "科學"], ["food", "食物"], ["travel", "旅行"]];
