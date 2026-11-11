/* winglish.tw 閱讀館文章資料：A Feast, a Letter and a Lucky Turkey（感恩節） */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12],[13]], figs:{2:"timeline"}, heads:{1:"The First Feast",2:"A Woman Who Never Gave Up",3:"A Lucky Turkey"},
   sents:[
    ["Every November, families in the United States sit down for a big dinner on Thanksgiving Day.","每年十一月，美國的家家戶戶會在感恩節坐下來一起吃一頓大餐。"],
    ["It is a day to say thank you for the good things in life.","這是一個為生活中美好的事物說聲謝謝的日子。"],
    ["In 1620, a group of people from England sailed to America on a ship called the Mayflower.","1620 年，一群英國人搭乘一艘叫「五月花號」的船航行到美洲。"],
    ["Their first winter was very cold, and about half of them died.","他們的第一個冬天非常寒冷，大約有一半的人死去。"],
    ["Native people who already lived there taught them how to grow corn and catch fish.","原本就住在那裡的原住民教他們怎麼種玉米、怎麼捕魚。"],
    ["In the fall of 1621, they had a good harvest, so they shared a feast that lasted three days.","1621 年秋天，他們有了好收成，於是一起分享了一場持續三天的盛宴。"],
    ["For many years after that, Thanksgiving was not a national holiday.","在那之後的很多年，感恩節都還不是全國性的節日。"],
    ["A writer named Sarah Josepha Hale wanted to change that, so she sent letters to five presidents.","一位名叫莎拉．約瑟法．海爾的作家想改變這件事，於是寫信給五位總統。"],
    ["She kept writing for 17 years, and in 1863 President Abraham Lincoln finally said yes.","她持續寫了 17 年，1863 年林肯總統終於答應了。"],
    ["By the way, she also wrote the famous children's poem \"Mary Had a Little Lamb.\"","順帶一提，有名的兒歌〈瑪莉有隻小綿羊〉也是她寫的。"],
    ["Today, Americans eat more than 40 million turkeys on Thanksgiving.","現在，美國人在感恩節要吃掉四千多萬隻火雞。"],
    ["But every year, the president saves one or two turkeys from the dinner table.","不過每一年，總統都會從餐桌上「救下」一兩隻火雞。"],
    ["These lucky birds go to live on a farm instead.","這些幸運的火雞改到農場去生活。"],
    ["So this November, why not say \"thank you\" to someone special?","所以這個十一月，何不對某個特別的人說聲「謝謝」呢？"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1],[2,3,4,5,6],[7,8,9,10],[11,12,13],[14,15,16]], figs:{2:"timeline"}, heads:{1:"A Harvest Shared",2:"Seventeen Years of Letters",3:"Pardoned Birds and Leftovers",4:"Not Everyone Celebrates"},
   sents:[
    ["On the fourth Thursday of November, millions of Americans gather around tables loaded with roast turkey, mashed potatoes and pumpkin pie.","每年十一月的第四個星期四，數百萬美國人圍坐在擺滿烤火雞、馬鈴薯泥和南瓜派的餐桌旁。"],
    ["Thanksgiving is often described as the most American of holidays, yet its story is more complicated, and more surprising, than most people realize.","感恩節常被說成是最具美國味的節日，但它的故事比大多數人以為的更複雜，也更令人意外。"],
    ["In 1620, about 100 English settlers, later known as the Pilgrims, crossed the Atlantic on the Mayflower.","1620 年，大約一百名英國移民──後來被稱為「清教徒移民」──搭乘五月花號橫越大西洋。"],
    ["Unprepared for the harsh New England winter, nearly half of them died within a few months.","他們沒有準備好面對新英格蘭嚴酷的冬天，幾個月內就有將近一半的人死去。"],
    ["Those who survived owed much to Tisquantum, or Squanto, a Native American man who spoke English and showed them how to plant corn using fish as fertilizer.","活下來的人要大大感謝提斯匡騰（又叫史廣多），一位會說英語的美洲原住民，他教他們用魚當肥料來種玉米。"],
    ["When the harvest of 1621 turned out well, the settlers held a celebration, and about 90 Wampanoag men led by their leader, Massasoit, joined them for three days of eating and games.","1621 年的收成很好，移民們舉辦了慶祝活動，大約九十名萬帕諾亞格族男子在首領馬薩索伊特的帶領下加入，一起吃喝、遊戲了三天。"],
    ["Interestingly, there was probably no pumpkin pie, since the settlers had neither ovens nor much sugar, and the main meat may have been deer rather than turkey.","有趣的是，當時大概沒有南瓜派，因為移民們既沒有烤箱，糖也不多；而主要的肉可能是鹿肉，不是火雞。"],
    ["For the next two centuries, days of thanks were held at different times in different states.","接下來的兩百年，各州在不同的時間舉行感恩的日子。"],
    ["Sarah Josepha Hale, a magazine editor best known today for the poem \"Mary Had a Little Lamb,\" believed the country needed one shared holiday.","雜誌編輯莎拉．約瑟法．海爾──今天最為人所知的是她寫了〈瑪莉有隻小綿羊〉──認為全國需要一個共同的節日。"],
    ["Starting in 1846, she wrote letter after letter to politicians and presidents.","從 1846 年起，她寫了一封又一封的信給政治人物和總統。"],
    ["In 1863, in the middle of the Civil War, President Abraham Lincoln declared a national day of thanksgiving, hoping it would help heal a divided nation.","1863 年南北戰爭正打得激烈，林肯總統宣布設立全國感恩日，希望它能幫助撫平一個分裂的國家。"],
    ["Modern Thanksgiving comes with its own odd traditions.","現代的感恩節也有一些自己的奇特傳統。"],
    ["Each year, the president \"pardons\" a turkey, sparing it from the oven and sending it to live on a farm.","每年，總統都會「特赦」一隻火雞，讓牠免進烤箱，送去農場生活。"],
    ["According to a popular story, a food company found itself with about 260 tons of unsold turkey in 1953 and solved the problem by inventing the frozen \"TV dinner.\"","有個流傳很廣的說法：1953 年，一家食品公司多出約 260 噸賣不掉的火雞，結果發明了冷凍「電視餐」來解決問題。"],
    ["Not everyone celebrates in the same way, however.","不過，並不是每個人都用同樣的方式過這個節日。"],
    ["Since 1970, some Native Americans have marked the day as a National Day of Mourning, remembering what their people lost after the settlers arrived.","從 1970 年起，有些美洲原住民把這一天當作「全國哀悼日」，紀念移民到來後他們的族人所失去的一切。"],
    ["For them, and for many others, the holiday is a reminder that saying thanks also means remembering the whole story.","對他們，以及許多其他人來說，這個節日提醒我們：說謝謝，也代表要記得完整的故事。"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1],[2,3,4,5,6],[7,8,9,10],[11,12,13]], figs:{2:"timeline"}, heads:{1:"What Really Happened in 1621",2:"A Holiday Built on Persistence",3:"A Day of Thanks, and of Mourning"},
   sents:[
    ["Few holidays are as wrapped in myth as Thanksgiving, an occasion that most Americans picture as a harmonious meal shared by grateful Pilgrims and welcoming Native Americans.","很少有節日像感恩節這樣被神話包裹著──大多數美國人想像中的感恩節，是心懷感激的清教徒移民和熱情好客的美洲原住民共享的一頓和樂融融的大餐。"],
    ["The historical record, however, paints a picture that is at once more modest and more intriguing.","然而，史料所描繪的景象既更樸實，也更耐人尋味。"],
    ["The Pilgrims who disembarked from the Mayflower in late 1620 were woefully ill-equipped for a New England winter, and by spring roughly half of the 102 passengers had perished.","1620 年底從五月花號下船的清教徒移民，完全沒有能力應付新英格蘭的冬天；到了春天，102 名乘客中大約一半已經喪命。"],
    ["Their survival hinged in large part on Tisquantum, a Patuxet man who had been kidnapped and taken to Europe years earlier, and who consequently spoke English.","他們能存活，很大程度取決於提斯匡騰──一位帕圖克西特族男子，他多年前曾被綁架帶到歐洲，因此會說英語。"],
    ["It was he who taught the newcomers to cultivate corn, burying fish in the soil to enrich it.","正是他教這些新來的人種植玉米，把魚埋進土裡讓土壤變肥沃。"],
    ["The so-called first Thanksgiving, held in the autumn of 1621, is described in just one eyewitness letter, which mentions three days of feasting attended by Massasoit and some ninety of his men, who contributed five deer to the table.","所謂的第一個感恩節在 1621 年秋天舉行，只有一封目擊者的信提到它：信中說馬薩索伊特和他大約九十名手下參加了三天的宴會，還帶來五頭鹿加菜。"],
    ["Turkey is never named in that letter, and pumpkin pie, which required ovens and sugar the settlers lacked, almost certainly did not feature.","那封信從頭到尾沒提到火雞；而南瓜派需要移民們缺少的烤箱和糖，幾乎可以確定沒有出現在餐桌上。"],
    ["That the event became a national institution at all is owed largely to Sarah Josepha Hale, an influential magazine editor and the author of \"Mary Had a Little Lamb.\"","這場活動之所以能成為全國性的制度，主要得歸功於莎拉．約瑟法．海爾──一位很有影響力的雜誌編輯，也是〈瑪莉有隻小綿羊〉的作者。"],
    ["She spent seventeen years lobbying five presidents, arguing that a common day of gratitude could bind together an increasingly fractured country.","她花了十七年遊說五位總統，主張一個共同的感恩日能把日益分裂的國家凝聚在一起。"],
    ["Her persistence was finally rewarded in 1863 when Abraham Lincoln, amid the carnage of the Civil War, proclaimed a national day of thanksgiving.","1863 年，她的堅持終於有了回報：在南北戰爭的血腥殺戮中，林肯宣布設立全國感恩日。"],
    ["Even then the date remained contested: when Franklin Roosevelt moved it a week earlier in 1939 to lengthen the holiday shopping season, critics mockingly dubbed it \"Franksgiving,\" and Congress did not settle on the fourth Thursday until 1941.","即使如此，日期仍然爭議不斷：1939 年小羅斯福總統把它提早一週，好拉長節日購物季，批評者嘲諷地稱之為「富蘭克林感恩節」；國會一直到 1941 年才確定為十一月的第四個星期四。"],
    ["Today the holiday has accumulated its own rituals, from the president's tongue-in-cheek \"pardon\" of a turkey to the parades and football games that fill the afternoon.","如今這個節日累積了自己的一套儀式，從總統半開玩笑地「特赦」火雞，到占滿整個下午的遊行和美式足球賽。"],
    ["Yet for some Native Americans, the day is anything but festive; since 1970, many have gathered in Plymouth to observe a National Day of Mourning.","然而對一些美洲原住民來說，這一天一點也不歡樂；從 1970 年起，許多人聚集在普利茅斯，舉行「全國哀悼日」。"],
    ["Acknowledging both perspectives need not diminish the holiday; if anything, gratitude is all the more meaningful when it is grounded in an honest account of the past.","承認兩種觀點，並不會讓這個節日失色；反而，當感恩建立在對過去誠實的認識上，才更有意義。"]
 ]}
];

const GLOSS = {
  thanksgiving:["n.","感恩節；感恩"], november:["n.","十一月"], family:["n.","家庭"], dinner:["n.","晚餐；正餐"], england:["n.","英格蘭"],
  sail:["v.","航行"], ship:["n.","船"], mayflower:["n.","五月花號（船名）"], winter:["n.","冬天"], half:["n.","一半"], die:["v.","死亡"],
  native:["adj.","本地的；原住民的"], taught:["v.","教（teach 的過去式）"], corn:["n.","玉米"], catch:["v.","捕捉"], fall:["n.","秋天"],
  harvest:["n.","收成；收穫"], share:["v.","分享"], feast:["n.","盛宴；大餐"], last:["v.","持續"], national:["adj.","全國的；國家的"],
  holiday:["n.","節日；假日"], writer:["n.","作家"], letter:["n.","信"], president:["n.","總統"], famous:["adj.","有名的"],
  poem:["n.","詩"], lamb:["n.","小羊"], million:["n.","百萬"], turkey:["n.","火雞"], lucky:["adj.","幸運的"], farm:["n.","農場"],
  instead:["adv.","反而；改為"], special:["adj.","特別的"], bird:["n.","鳥；禽類"],
  gather:["v.","聚集"], load:["v.","裝滿；堆滿"], roast:["adj.","烤的"], mashed:["adj.","搗成泥的"], potato:["n.","馬鈴薯"], potatoe:["n.","馬鈴薯"], pumpkin:["n.","南瓜"], pie:["n.","派"],
  describe:["v.","描述"], complicated:["adj.","複雜的"], surprising:["adj.","令人驚訝的"], realize:["v.","了解；意識到"],
  settler:["n.","移民；開拓者"], pilgrim:["n.","清教徒移民（大寫 Pilgrims）；朝聖者"], atlantic:["n.","大西洋"], unprepared:["adj.","沒有準備好的"],
  harsh:["adj.","嚴酷的"], survive:["v.","存活"], owe:["v.","owe much to… 多虧了…"], plant:["v.","種植"], fertilizer:["n.","肥料"],
  celebration:["n.","慶祝活動"], wampanoag:["n.","萬帕諾亞格族（美洲原住民）"], leader:["n.","領袖"], interestingly:["adv.","有趣的是"],
  probably:["adv.","大概"], oven:["n.","烤箱"], sugar:["n.","糖"], deer:["n.","鹿"], century:["n.","世紀"], centurie:["n.","世紀"], editor:["n.","編輯"],
  politician:["n.","政治人物"], declare:["v.","宣布"], civil:["adj.","Civil War（美國）南北戰爭"], heal:["v.","治癒；撫平"], divided:["adj.","分裂的"],
  nation:["n.","國家"], modern:["adj.","現代的"], odd:["adj.","奇特的"], tradition:["n.","傳統"], pardon:["v.","赦免；特赦"],
  spare:["v.","使免於；饒恕"], unsold:["adj.","賣不掉的"], frozen:["adj.","冷凍的"], invent:["v.","發明"], ton:["n.","公噸"],
  mourning:["n.","哀悼"], reminder:["n.","提醒的事物"], remember:["v.","記得；紀念"], celebrate:["v.","慶祝"],
  myth:["n.","神話；迷思"], occasion:["n.","場合；節日"], picture:["v.","想像"], harmonious:["adj.","和諧的"], grateful:["adj.","感激的"],
  welcoming:["adj.","熱情歡迎的"], historical:["adj.","歷史的"], record:["n.","紀錄"], modest:["adj.","樸實的；不起眼的"], intriguing:["adj.","耐人尋味的"],
  disembark:["v.","下船"], woefully:["adv.","嚴重地；可悲地"], equipped:["adj.","ill-equipped 準備不足的"], passenger:["n.","乘客"],
  perish:["v.","死亡；喪命"], hinge:["v.","hinge on… 取決於…"], patuxet:["n.","帕圖克西特族（美洲原住民）"], kidnap:["v.","綁架"], kidnapp:["v.","綁架"],
  consequently:["adv.","因此"], newcomer:["n.","新來的人"], cultivate:["v.","種植；栽培"], bury:["v.","埋"], burying:["v.","埋（bury）"], soil:["n.","土壤"], enrich:["v.","使肥沃；使豐富"],
  eyewitness:["n.","目擊者"], attend:["v.","參加"], contribute:["v.","貢獻；提供"], require:["v.","需要"], lack:["v.","缺少"],
  feature:["v.","出現；占重要地位"], institution:["n.","制度；慣例"], influential:["adj.","有影響力的"], author:["n.","作者"],
  lobby:["v.","遊說"], gratitude:["n.","感激"], bind:["v.","bind together 團結；凝聚"], increasingly:["adv.","越來越"],
  fractured:["adj.","分裂的"], persistence:["n.","堅持不懈"], reward:["v.","回報；獎賞"], amid:["prep.","在…之中"], carnage:["n.","大屠殺；殺戮"],
  proclaim:["v.","宣告"], contested:["adj.","有爭議的"], lengthen:["v.","延長"], critic:["n.","批評者"], mockingly:["adv.","嘲弄地"],
  dub:["v.","給…取綽號"], dubb:["v.","給…取綽號"], congress:["n.","（美國）國會"], settle:["v.","settle on… 決定"], accumulate:["v.","累積"], ritual:["n.","儀式"],
  parade:["n.","遊行"], festive:["adj.","歡樂的；節慶的"], observe:["v.","舉行（節日、儀式）；遵守"], acknowledge:["v.","承認"],
  perspective:["n.","觀點"], diminish:["v.","減少；貶低"], meaningful:["adj.","有意義的"], ground:["v.","be grounded in… 以…為基礎"],
  account:["n.","描述；記述"], tongue:["n.","tongue-in-cheek 半開玩笑的"], cheek:["n.","tongue-in-cheek 半開玩笑的"]
};
const KEY = [["sail","harvest","share","feast","last","national","president","famous","million","instead"],
             ["gather","settler","harsh","survive","fertilizer","celebration","declare","divided","pardon","spare","mourning","reminder"],
             ["myth","harmonious","modest","intriguing","perish","hinge","cultivate","persistence","lobby","fractured","contested","accumulate","diminish","gratitude"]];

const DEFS = {
  "sail": "to travel across water in a boat or ship",
  "harvest": "the crops that are collected from the fields",
  "share": "to have or use something together with other people",
  "feast": "a large, special meal for many people",
  "last": "to continue for a period of time",
  "national": "relating to a whole country",
  "president": "the leader of a country such as the United States",
  "famous": "known by many people",
  "million": "the number 1,000,000",
  "instead": "in place of someone or something else",
  "gather": "to come together in one place",
  "settler": "a person who moves to a new country or area to live there",
  "harsh": "very difficult and unpleasant to live in",
  "survive": "to continue to live after a difficult or dangerous time",
  "fertilizer": "something added to soil to help plants grow",
  "celebration": "a party or event held to enjoy a special occasion",
  "declare": "to say something officially and publicly",
  "divided": "split into groups that disagree with each other",
  "pardon": "to officially forgive someone and free them from punishment",
  "spare": "to save someone or something from harm",
  "mourning": "great sadness because someone has died or something has been lost",
  "reminder": "something that makes you remember something",
  "myth": "an idea or story that many people believe but that is not true",
  "harmonious": "friendly and peaceful, without disagreement",
  "modest": "not large, grand or impressive",
  "intriguing": "very interesting because it is unusual",
  "perish": "to die, especially in a terrible way",
  "hinge": "to depend completely on something (hinge on)",
  "cultivate": "to prepare land and grow crops on it",
  "persistence": "continuing to try to do something even when it is difficult",
  "lobby": "to try to persuade a politician to support a law or idea",
  "fractured": "broken into parts that no longer work well together",
  "contested": "causing a lot of disagreement",
  "accumulate": "to gradually get more and more of something",
  "diminish": "to make something seem less important or valuable",
  "gratitude": "the feeling of being thankful"
};

const USAGE = {
  "sail": ["sail to … · sail across the sea · set sail", "The ship set sail for Japan early in the morning.", "那艘船一大早就啟航前往日本。"],
  "harvest": ["a good harvest · rice harvest · harvest time", "Farmers were happy because of the good rice harvest this year.", "今年稻米收成很好，農夫們都很開心。"],
  "share": ["share A with B · share an idea · share a room", "I share a bedroom with my little sister.", "我和妹妹共用一間臥室。"],
  "feast": ["a wedding feast · have a feast · a feast for the eyes", "Grandma made a big feast for the Lunar New Year.", "奶奶為了農曆新年煮了一大桌菜。"],
  "last": ["last for … hours · last long · last until …", "The typhoon lasted for two days.", "颱風持續了兩天。"],
  "national": ["a national holiday · national park · national team", "Double Tenth Day is a national holiday in Taiwan.", "雙十節是台灣的國定假日。"],
  "president": ["the president of … · become president · class president", "She was elected class president last week.", "她上週被選為班長。"],
  "famous": ["be famous for … · a famous singer · world-famous", "Tainan is famous for its delicious street food.", "台南以美味的小吃聞名。"],
  "million": ["millions of … · two million people · one in a million", "Millions of people watched the game online.", "有好幾百萬人在網路上看那場比賽。"],
  "instead": ["instead of … · … instead", "Let's take the MRT instead of a taxi.", "我們改搭捷運，不要坐計程車吧。"],
  "gather": ["gather around … · gather information · gather together", "The students gathered around the teacher's desk.", "學生們圍在老師的桌子旁邊。"],
  "settler": ["early settlers · European settlers · new settlers", "Early settlers in Taiwan built their homes near rivers.", "早期來台的移民把家蓋在河邊。"],
  "harsh": ["harsh weather · a harsh winter · harsh words", "Few plants can survive the harsh desert climate.", "很少植物能在嚴酷的沙漠氣候中存活。"],
  "survive": ["survive a fire · survive on … · survive the winter", "Camels can survive for days without water.", "駱駝可以好幾天不喝水也活得下去。"],
  "fertilizer": ["natural fertilizer · use fertilizer · chemical fertilizer", "Coffee grounds can be used as a natural fertilizer.", "咖啡渣可以當天然肥料。"],
  "celebration": ["a birthday celebration · in celebration of … · hold a celebration", "The school held a celebration for its 50th birthday.", "學校為五十週年校慶舉辦了慶祝活動。"],
  "declare": ["declare war · declare that … · declare independence", "The city declared a typhoon day, so schools were closed.", "市府宣布放颱風假，學校停課。"],
  "divided": ["a divided country · be divided over … · deeply divided", "The class was divided over where to go for the trip.", "全班對畢旅要去哪裡意見分歧。"],
  "pardon": ["pardon a prisoner · grant a pardon · Pardon me?", "The king pardoned the prisoner on his birthday.", "國王在生日那天赦免了那名囚犯。"],
  "spare": ["spare sb from … · spare sb's life · spare time", "The rain spared us from the hot afternoon sun.", "這場雨讓我們不用曬下午的大太陽。"],
  "mourning": ["in mourning · a day of mourning · period of mourning", "Flags flew at half-mast as a sign of mourning.", "降半旗表示哀悼。"],
  "reminder": ["a reminder of … · a reminder to … · send a reminder", "The teacher sent us a reminder about tomorrow's quiz.", "老師傳了提醒，說明天要小考。"],
  "myth": ["a common myth · the myth that … · myths and legends", "It's a myth that goldfish only remember things for three seconds.", "金魚只有三秒記憶，其實是個迷思。"],
  "harmonious": ["a harmonious relationship · harmonious society · live in harmony", "The two families have a harmonious relationship.", "這兩家人相處得很和睦。"],
  "modest": ["a modest home · a modest income · modest success", "They live in a modest apartment near the station.", "他們住在車站附近一間簡樸的公寓。"],
  "intriguing": ["an intriguing question · intriguing story · find sth intriguing", "Scientists find the octopus's brain truly intriguing.", "科學家覺得章魚的大腦真的很耐人尋味。"],
  "perish": ["perish in a fire · perish at sea · perish the thought", "Hundreds of sailors perished in the storm.", "數百名水手在暴風雨中喪生。"],
  "hinge": ["hinge on … · everything hinges on …", "Whether we go hiking hinges on the weather.", "我們去不去爬山，要看天氣而定。"],
  "cultivate": ["cultivate rice · cultivate land · cultivate a habit", "Farmers in Chiayi cultivate rice and sugarcane.", "嘉義的農民種植稻米和甘蔗。"],
  "persistence": ["with persistence · persistence pays off · show persistence", "Her persistence paid off when she finally passed the exam.", "她終於考過了，堅持有了回報。"],
  "lobby": ["lobby for … · lobby against … · lobby the government", "Parents lobbied the city to build a new park.", "家長們遊說市政府蓋一座新公園。"],
  "fractured": ["a fractured society · fractured bone · fractured relationship", "After the election, the town felt deeply fractured.", "選舉過後，這個小鎮感覺嚴重分裂。"],
  "contested": ["a contested election · hotly contested · contested issue", "The new school rule became a hotly contested issue.", "新的校規成了爭議很大的話題。"],
  "accumulate": ["accumulate wealth · dust accumulates · accumulate knowledge", "Small savings accumulate into a big amount over time.", "一點一滴的存款，久了就累積成一大筆錢。"],
  "diminish": ["diminish the value · diminish in size · never diminish", "One bad game does not diminish his talent.", "一場比賽打不好，並不會減損他的天分。"],
  "gratitude": ["express gratitude · a sense of gratitude · with gratitude", "She wrote a card to express her gratitude to her teacher.", "她寫了一張卡片向老師表達感謝。"]
};

const FIGS = {
  timeline:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="How Thanksgiving became a national holiday" style="display:block;width:100%;height:auto;border-radius:6px;background:#FFF6DC">
<path d="M34 152 C120 147 200 156 290 150 S470 146 566 153" fill="none" stroke="#6B4A2E" stroke-width="3.2" stroke-linecap="round"/>
<g transform="translate(90,150)">
<path d="M-26 -36 C-14 -38 14 -38 26 -36 L20 -16 C6 -13 -6 -13 -20 -16Z" fill="#8A5A35" stroke="#5A3A20" stroke-width="2" stroke-linejoin="round"/>
<path d="M-2 -38 C-1 -52 -1 -64 0 -76" stroke="#5A3A20" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<path d="M1 -73 C14 -66 20 -56 18 -44 C10 -46 4 -48 1 -50Z" fill="#FFFDF6" stroke="#5A3A20" stroke-width="1.8"/>
<path d="M-34 -10 C-20 -5 -8 -12 2 -7 S22 -3 34 -10" fill="none" stroke="#5B9BC4" stroke-width="2.2" stroke-linecap="round"/>
<circle r="7" fill="#D9483F" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(240,150)">
<path d="M-6 -20 C-14 -30 -12 -46 -6 -60 C0 -50 4 -36 0 -20Z" fill="#E8B23A" stroke="#8C6512" stroke-width="1.8"/>
<path d="M-2 -20 C-8 -34 -16 -40 -26 -42 C-22 -32 -14 -24 -4 -20Z" fill="#7BA05B" stroke="#4B6B33" stroke-width="1.6"/>
<path d="M2 -20 C10 -32 18 -38 26 -40 C22 -30 14 -23 4 -19Z" fill="#7BA05B" stroke="#4B6B33" stroke-width="1.6"/>
<path d="M14 -18 C20 -30 34 -32 40 -24 C44 -16 36 -12 28 -14 C24 -12 18 -12 14 -18Z" fill="#E07A3A" stroke="#8C4512" stroke-width="1.6"/>
<circle r="7" fill="#D9483F" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(390,150)">
<path d="M-22 -58 C-8 -60 10 -59 24 -57 C25 -46 24 -34 23 -22 C8 -21 -8 -21 -22 -23 C-23 -35 -23 -47 -22 -58Z" fill="#FFFDF6" stroke="#5A3A20" stroke-width="2" stroke-linejoin="round"/>
<path d="M-22 -57 C-8 -46 6 -45 24 -56" fill="none" stroke="#5A3A20" stroke-width="1.8"/>
<path d="M-10 -32 C-3 -33 4 -33 11 -31" stroke="#B9A88F" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<circle r="7" fill="#D9483F" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(520,150)">
<path d="M-20 -60 C-6 -61 8 -61 20 -60 C21 -46 21 -32 20 -18 C6 -17 -6 -17 -20 -18 C-21 -32 -21 -46 -20 -60Z" fill="#FFFDF6" stroke="#5A3A20" stroke-width="2"/>
<path d="M-20 -48 C-6 -49 8 -49 20 -48" stroke="#D9483F" stroke-width="5" fill="none"/>
<g fill="#5A3A20"><circle cx="-9" cy="-37" r="2"/><circle cx="0" cy="-37" r="2"/><circle cx="9" cy="-37" r="2"/><circle cx="-9" cy="-28" r="2"/><circle cx="0" cy="-28" r="3.4" fill="#D9483F"/><circle cx="9" cy="-28" r="2"/></g>
<circle r="7" fill="#D9483F" stroke="#3A2E25" stroke-width="2"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#3A2E25" text-anchor="middle">
<text x="90" y="186" font-size="17" font-weight="800">1620</text><text x="90" y="206" font-size="12">The Mayflower sails</text><text x="90" y="222" font-size="10" fill="#6B5B4E">五月花號橫越大西洋</text>
<text x="240" y="186" font-size="17" font-weight="800">1621</text><text x="240" y="206" font-size="12">A 3-day harvest feast</text><text x="240" y="222" font-size="10" fill="#6B5B4E">收成後一起吃了三天</text>
<text x="390" y="186" font-size="17" font-weight="800">1863</text><text x="390" y="206" font-size="12">Lincoln makes it national</text><text x="390" y="222" font-size="10" fill="#6B5B4E">林肯定為全國節日</text><text x="390" y="238" font-size="10" fill="#6B5B4E">（海爾寫信 17 年）</text>
<text x="520" y="186" font-size="17" font-weight="800">1941</text><text x="520" y="206" font-size="12">4th Thursday of Nov.</text><text x="520" y="222" font-size="10" fill="#6B5B4E">定在十一月第四個星期四</text>
</g>
<text x="300" y="276" font-family="Noto Sans TC,sans-serif" font-size="11" fill="#6B5B4E" text-anchor="middle">From a harvest meal to a national holiday　從一頓收成大餐到全國節日</text>
</svg>`,
    cap:"感恩節的四個重要年份：從五月花號、第一次收成大餐，到成為全國節日。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["How to cook a turkey","The history and traditions of Thanksgiving","A trip on the Mayflower","A famous children's poem"],
   "a":1,"exp":"文章從 1621 年的第一場盛宴，講到海爾寫信讓感恩節變成全國節日，再講到總統救火雞的傳統，主旨是 (B) 感恩節的歷史和傳統。(C)(D) 都只是其中一小部分。"},
  {"q":"2. Who helped Thanksgiving become a national holiday?","tag":"細節",
   "opts":["A farmer","Sarah Josepha Hale","The captain of the Mayflower","A turkey company"],
   "a":1,"exp":"第三段說作家莎拉．約瑟法．海爾寫信給五位總統，寫了 17 年，1863 年林肯終於答應，答案是 (B)。"},
  {"q":"3. Which of the following is TRUE according to the passage?","tag":"是非",
   "opts":["The first feast lasted only one day.","President Lincoln said no to Hale's letters.","Every year, the president saves one or two turkeys.","The people on the Mayflower had a warm first winter."],
   "a":2,"exp":"(C) 正確，第四段說總統每年從餐桌上救下一兩隻火雞。(A) 盛宴持續三天；(B) 林肯 1863 年答應了；(D) 第一個冬天很冷，大約一半的人死了。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["The Best Recipes for Pumpkin Pie","Thanksgiving: More Than a Turkey Dinner","The Life of President Lincoln","How Frozen Food Was Invented"],
   "a":1,"exp":"文章講感恩節的起源、海爾如何讓它變成全國節日、現代的奇特傳統，以及原住民的不同看法，比單純吃火雞的故事更豐富，最好的標題是 (B)。(D) 電視餐只是其中一個小故事。"},
  {"q":"2. Why was there probably no pumpkin pie at the 1621 feast?","tag":"因果",
   "opts":["Pumpkins did not grow in America.","The Wampanoag did not like sweet food.","The settlers had no ovens and little sugar.","Pie was not invented until the 1800s."],
   "a":2,"exp":"第二段最後一句：since the settlers had neither ovens nor much sugar──既沒有烤箱、糖也不多，所以大概做不出南瓜派，答案是 (C)。"},
  {"q":"3. The word \"pardons\" in paragraph 4 is closest in meaning to ______.","tag":"字義",
   "opts":["cooks","forgives and saves","sells","gives a name to"],
   "a":1,"exp":"後面接 sparing it from the oven and sending it to live on a farm（讓牠免進烤箱、送去農場），可見 pardon 是「赦免、饒過」的意思，答案是 (B)。"},
  {"q":"4. Which of the following is TRUE according to the passage?","tag":"是非",
   "opts":["Hale wrote only one letter, to Abraham Lincoln.","Squanto could not speak any English.","Lincoln hoped the holiday would help bring the country together.","All Native Americans celebrate Thanksgiving with a turkey dinner."],
   "a":2,"exp":"(C) 正確：林肯在南北戰爭期間宣布感恩日，hoping it would help heal a divided nation。(A) 她從 1846 年起寫了一封又一封的信；(B) Squanto 會說英語；(D) 有些原住民把這天當作全國哀悼日。"}
 ],
 [
  {"q":"1. What is the author's main purpose in writing this passage?","tag":"作者目的",
   "opts":["To argue that Thanksgiving should be cancelled","To show that the real history of Thanksgiving is more complex than the popular myth","To explain how to prepare a traditional Thanksgiving meal","To praise Franklin Roosevelt for changing the date"],
   "a":1,"exp":"第一段就說感恩節 wrapped in myth，史料描繪的景象 more modest and more intriguing，接著一一說明真實的歷史和不同的觀點，目的是 (B)。最後一段說承認兩種觀點 need not diminish the holiday，所以不是要取消它，(A) 錯。"},
  {"q":"2. The phrase \"hinged ... on\" in paragraph 2 is closest in meaning to ______.","tag":"字義",
   "opts":["depended on","was hidden from","was written about","was harmful to"],
   "a":0,"exp":"Their survival hinged in large part on Tisquantum：他們能不能活下來，很大程度要看提斯匡騰。hinge on ＝ depend on 取決於，答案是 (A)。"},
  {"q":"3. Why was Tisquantum able to speak English?","tag":"細節",
   "opts":["He had learned it from the Pilgrims during their first winter.","He had been kidnapped and taken to Europe years before.","He had worked on the Mayflower.","He had studied it at a school in Plymouth."],
   "a":1,"exp":"第二段：a Patuxet man who had been kidnapped and taken to Europe years earlier, and who consequently spoke English。consequently（因此）說明會英語是被綁架到歐洲的結果，答案是 (B)。"},
  {"q":"4. Why did critics most likely call the holiday \"Franksgiving\" in 1939?","tag":"推論",
   "opts":["They wanted to honor Roosevelt's leadership.","They disapproved of Roosevelt moving the date for shopping reasons.","Roosevelt was the first president to celebrate it.","The name was chosen by Congress in 1941."],
   "a":1,"exp":"文中說小羅斯福為了拉長購物季把日期提早，critics mockingly dubbed it（批評者嘲諷地稱它）。用總統的名字 Franklin 改造節日名稱是在嘲笑，可推論他們不贊成，答案是 (B)。"},
  {"q":"5. Which of the following is NOT mentioned in the passage?","tag":"細節",
   "opts":["How many deer Massasoit's men brought","The year Congress fixed the date","Where the National Day of Mourning is held","How many turkeys Americans eat each year"],
   "a":3,"exp":"(A) 五頭鹿、(B) 1941 年、(C) 普利茅斯，文中都有提到。Level 3 的文章沒有提到美國人每年吃幾隻火雞，答案是 (D)。"}
 ]
];

const META = {
 id:"thanksgiving", title:"A Feast, a Letter and a Lucky Turkey", category:"文化節慶",
 dek:"第一次感恩節其實可能沒有火雞？一位作家寫信寫了 17 年，才讓它變成全國節日；而每年總統還會「特赦」一隻火雞。",
 date:"2026/11/10",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1763689454945-4b0f3b151969?auto=format&fit=crop&w=1600&q=70" data-local="thanksgiving-hero.jpg" alt="A roasted turkey on a dinner table" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#F3D9A4"/><path d="M0 300 C200 290 600 290 800 300 V420 H0Z" fill="#B9773E"/><ellipse cx="400" cy="300" rx="230" ry="44" fill="#FFFDF6"/><path d="M250 290 C250 200 320 150 400 150 C480 150 550 200 550 290Z" fill="#C46A2B"/><path d="M300 270 C310 210 350 180 400 178" fill="none" stroke="#E39A57" stroke-width="10" stroke-linecap="round"/><g fill="#7BA05B"><circle cx="210" cy="300" r="16"/><circle cx="592" cy="300" r="16"/></g><g fill="#E07A3A"><circle cx="230" cy="310" r="12"/><circle cx="574" cy="312" r="12"/></g></svg>
<figcaption>感恩節餐桌上的主角：烤火雞。不過第一次感恩節的餐桌上，可能根本沒有牠。<span class="credit">Photo: Prachi Palwe / Unsplash</span></figcaption>`,
 fact:"加拿大也過感恩節，但日期是十月的第二個星期一，比美國早了一個多月。因為加拿大比較北邊，秋天的收成來得早！",
 next:{title:"When Spirits Come Home", href:"read.html#spirits"}
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
