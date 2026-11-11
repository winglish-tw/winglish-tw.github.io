/* winglish.tw 閱讀館文章資料：A Journey Through Taiwan, One Dish at a Time（好書介紹：臺灣漫遊錄） */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1],[2,3,4,5,6],[7,8,9],[10,11,12,13]], figs:{3:"awards"}, heads:{1:"A Trip Full of Food",2:"Friends, but Not Equal",3:"A Big Prize"},
   sents:[
    ["Imagine traveling around Taiwan almost 90 years ago and tasting a new dish in every town.","想像一下，在將近九十年前環遊台灣，每到一個城鎮就嘗一道新的料理。"],
    ["That is the story of Taiwan Travelogue, a novel by the Taiwanese writer Yang Shuang-zi.","這就是台灣作家楊双子的小說《臺灣漫遊錄》的故事。"],
    ["In 1938, Taiwan was ruled by Japan.","1938 年，台灣是由日本統治的。"],
    ["In the story, a young Japanese writer named Aoyama Chizuko comes to Taiwan for a year.","故事裡，一位叫青山千鶴子的年輕日本作家來到台灣，待了一年。"],
    ["A Taiwanese woman named Ō Chizuru becomes her interpreter and guide.","一位名叫王千鶴的台灣女子，成了她的口譯和嚮導。"],
    ["Together, they travel around the island and eat many kinds of Taiwanese food.","她們一起在島上四處旅行，吃了好多種台灣食物。"],
    ["Each chapter of the book is built around a different dish.","這本書的每一章都圍繞著一道不同的料理。"],
    ["The two women become very close.","兩個女人變得非常親近。"],
    ["But Chizuko is from Japan, the ruling country, and Chizuru is from Taiwan, a colony.","但是千鶴子來自統治者日本，千鶴則來自殖民地台灣。"],
    ["Because of this, their friendship is not as simple as it looks.","因為這樣，她們的友誼並不像表面上那麼單純。"],
    ["In 2026, the English version of the book won the International Booker Prize, one of the most famous book prizes in the world.","2026 年，這本書的英文版贏得了國際布克獎──世界上最有名的文學獎之一。"],
    ["It was the first book translated from Chinese to win this prize.","它是第一本從中文翻譯過去而得到這個獎的書。"],
    ["The writer and the translator, Lin King, shared the prize.","作者和譯者金翎一起分享了這個獎。"],
    ["If you love Taiwan and good food, this book is a great place to start!","如果你愛台灣，也愛美食，這本書會是很棒的起點！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1,2],[3,4,5,6],[7,8,9],[10,11,12,13,14]], figs:{3:"awards"}, heads:{1:"A Memoir That Never Was",2:"Who Holds the Power?",3:"Twins Behind the Name"},
   sents:[
    ["In May 2026, a novel about two women eating their way across Taiwan made history in London.","2026 年 5 月，一本關於兩個女人吃遍台灣的小說，在倫敦創下了歷史。"],
    ["Taiwan Travelogue, written by Yang Shuang-zi and translated into English by Lin King, won the International Booker Prize, which honors the best fiction translated into English each year.","楊双子所著、金翎英譯的《臺灣漫遊錄》贏得了國際布克獎；這個獎每年頒給最好的英譯小說。"],
    ["It was the first winner translated from Mandarin Chinese, and the £50,000 award was split equally between the author and the translator.","它是第一部從中文翻譯而得獎的作品，五萬英鎊的獎金由作者和譯者平分。"],
    ["The novel pretends to be a real travel memoir by a Japanese novelist, Aoyama Chizuko, who spends a year in Taiwan starting in 1938, when the island was a Japanese colony.","這本小說假裝自己是一本真實的旅行回憶錄，作者是日本小說家青山千鶴子；她從 1938 年起在台灣待了一年，當時台灣是日本的殖民地。"],
    ["Chizuko is a cheerful traveler with an enormous appetite, and her interpreter, a young Taiwanese woman named Ō Chizuru, leads her to one local dish after another.","千鶴子是個開朗、食量驚人的旅人；她的口譯──一位名叫王千鶴的台灣年輕女子──帶著她嘗遍一道又一道的在地料理。"],
    ["Each chapter is built around a different dish, so readers travel the island through its food.","每一章都圍繞著一道不同的料理，讀者就跟著食物遊歷整座島。"],
    ["The book even includes made-up forewords, afterwords and translator's notes, which make the story feel like a document rediscovered decades later.","書裡甚至還有虛構的序、後記和譯註，讓這個故事讀起來就像幾十年後才被重新發現的文件。"],
    ["Beneath the delicious meals lies a more serious question.","在美味的餐點底下，藏著一個更嚴肅的問題。"],
    ["Chizuko sincerely wants to be Chizuru's friend, but she often fails to notice the gap between a Japanese guest and a colonized Taiwanese woman.","千鶴子真心想和千鶴做朋友，但她常常沒注意到，日本客人和被殖民的台灣女子之間存在著一道鴻溝。"],
    ["The judges praised the novel for working both as a romance and as a sharp study of colonial power.","評審稱讚這本小說既是一部愛情故事，也是一部對殖民權力的犀利探討。"],
    ["The author's pen name also has a story.","作者的筆名也有一段故事。"],
    ["\"Shuang-zi\" means \"twins.\"","「双子」的意思是「雙胞胎」。"],
    ["Yang first shared the name with her twin sister, who did the historical research while Yang wrote the stories.","楊最初和她的雙胞胎妹妹共用這個筆名：妹妹負責歷史研究，她負責寫故事。"],
    ["After her sister died of cancer in 2015, Yang kept the name to honor her.","2015 年妹妹因癌症過世後，楊繼續使用這個筆名來紀念她。"],
    ["In a way, every book by \"Yang Shuang-zi\" is still written by two people.","從某個角度來說，每一本「楊双子」的書，仍然是兩個人一起寫的。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4],[5,6,7,8],[9,10,11,12]], figs:{3:"awards"}, heads:{1:"A Forgery by Design",2:"The Politics of a Meal",3:"Two Voices, One Name"},
   sents:[
    ["When Taiwan Travelogue won the 2026 International Booker Prize, it completed a remarkable journey for a novel that publishers had reportedly once considered too local, too layered, or simply untranslatable.","《臺灣漫遊錄》贏得 2026 年國際布克獎，替一本據說曾被出版社認為太在地、太多層次，甚至根本無法翻譯的小說，走完了一段非凡的旅程。"],
    ["Originally published in Taiwan in 2020, Yang Shuang-zi's novel had already collected the Golden Tripod Award at home, Japan's Best Translation Award and the 2024 U.S. National Book Award for Translated Literature before Lin King's English version was crowned in London.","楊双子的這本小說 2020 年在台灣出版；在金翎的英譯本於倫敦封冠之前，它已經拿下台灣的金鼎獎、日本翻譯大賞，以及 2024 年美國國家圖書獎翻譯文學獎。"],
    ["The book is an elaborate literary disguise.","這本書是一場精心設計的文學偽裝。"],
    ["It presents itself as the rediscovered memoir of Aoyama Chizuko, a fictional Japanese novelist who arrives in colonial Taiwan in 1938, complete with invented prefaces, afterwords and footnotes attributed to her descendants and to Yang herself.","它把自己包裝成虛構的日本小說家青山千鶴子被重新發現的回憶錄──她在 1938 年來到殖民時期的台灣──還附上捏造的序文、後記和註釋，分別署名為她的後人和楊双子本人。"],
    ["Within this frame, Chizuko, a woman of formidable appetite, crisscrosses the island with her interpreter, Ō Chizuru, and each chapter unfolds around a particular dish.","在這個框架裡，食量驚人的千鶴子和她的口譯王千鶴走遍全島，每一章都圍繞著一道特定的料理展開。"],
    ["What begins as a lighthearted culinary adventure gradually deepens into something more searching.","一開始輕鬆愉快的美食冒險，漸漸轉為更深刻的探問。"],
    ["Chizuko genuinely adores her companion, yet she rarely stops to consider that Chizuru, as a colonial subject employed by a Japanese visitor, cannot afford to speak her mind.","千鶴子真心喜愛她的旅伴，卻很少停下來想一想：身為受雇於日本訪客的殖民地子民，千鶴根本沒有暢所欲言的本錢。"],
    ["Even the interpreter's name is telling: Chizuru is the Japanese reading of her Chinese name, a reminder of how colonial rule reshaped identities down to what people were called.","就連這位口譯的名字也耐人尋味：「Chizuru」是她中文名字的日語讀法，提醒我們殖民統治如何重塑人的身分，甚至深入到一個人被怎麼稱呼。"],
    ["The judges described the result as both a romance and an incisive postcolonial novel, a pairing the book achieves without ever lecturing its readers.","評審形容這部作品既是愛情故事，也是犀利的後殖民小說──而這本書從頭到尾沒有對讀者說教，就做到了這樣的結合。"],
    ["Behind the fictional translator's notes lies a real loss.","虛構的譯註背後，是一段真實的失去。"],
    ["Yang Shuang-zi, whose pen name means \"twins,\" originally shared it with her twin sister, Yang Jo-hui, a researcher of women's lives under Japanese rule who died of cancer in 2015 at the age of thirty.","楊双子的筆名意思是「雙胞胎」，原本和雙胞胎妹妹楊若暉共用；若暉研究日治時期女性的生活，2015 年因癌症過世，年僅三十歲。"],
    ["The surviving twin has kept the name, and in the novel she lets her sister appear as the book's imaginary translator, so that, as she has explained, her sister is included in the act of creation.","活下來的姊姊保留了這個筆名，還在小說中讓妹妹化身為書裡虛構的譯者；正如她自己的解釋，這樣妹妹也參與了創作。"],
    ["For Taiwanese readers, the novel offers the pleasure of recognizing familiar flavors; for everyone else, it is an invitation to see how a single meal can carry history, power and longing all at once.","對台灣讀者來說，這本小說提供了認出熟悉滋味的樂趣；對其他讀者來說，它則是一份邀請，讓人看見一頓飯如何同時承載歷史、權力與渴望。"]
 ]}
];

const GLOSS = {
  imagine:["v.","想像"], taste:["v.","品嘗"], dish:["n.","一道菜；料理"], novel:["n.","小說"], taiwanese:["adj.","台灣的"], writer:["n.","作家"],
  rule:["v.","統治"], japanese:["adj.","日本的"], interpreter:["n.","口譯員"], guide:["n.","嚮導"], island:["n.","島"], chapter:["n.","（書的）章"],
  close:["adj.","親近的"], colony:["n.","殖民地"], friendship:["n.","友誼"], simple:["adj.","單純的；簡單的"], version:["n.","版本"],
  prize:["n.","獎"], international:["adj.","國際的"], translate:["v.","翻譯"], translator:["n.","譯者"], share:["v.","分享；共用"],
  travelogue:["n.","遊記"], history:["n.","歷史"], honor:["v.","表揚；紀念"], fiction:["n.","小說；虛構作品"], mandarin:["n.","華語；中文"],
  award:["n.","獎；獎金"], split:["v.","分攤；平分"], equally:["adv.","平均地"], author:["n.","作者"], pretend:["v.","假裝"], memoir:["n.","回憶錄"],
  cheerful:["adj.","開朗的"], enormous:["adj.","巨大的"], appetite:["n.","食慾；胃口"], local:["adj.","當地的"], foreword:["n.","序；前言"],
  afterword:["n.","後記"], document:["n.","文件"], rediscover:["v.","重新發現"], decade:["n.","十年"], beneath:["prep.","在…底下"],
  serious:["adj.","嚴肅的"], sincerely:["adv.","真誠地"], gap:["n.","差距；鴻溝"], colonize:["v.","殖民"], judge:["n.","評審"], praise:["v.","稱讚"],
  romance:["n.","愛情故事"], sharp:["adj.","犀利的；敏銳的"], colonial:["adj.","殖民的"], pen:["n.","筆；pen name 筆名"], twin:["n.","雙胞胎之一"],
  historical:["adj.","歷史的"], research:["n.","研究"], cancer:["n.","癌症"],
  remarkable:["adj.","非凡的；了不起的"], publisher:["n.","出版社"], reportedly:["adv.","據說；據報導"], layered:["adj.","多層次的"],
  untranslatable:["adj.","無法翻譯的"], originally:["adv.","原本；最初"], collect:["v.","獲得；收集"], tripod:["n.","鼎；Golden Tripod Award 金鼎獎"],
  literature:["n.","文學"], crown:["v.","加冕；授予最高榮譽"], elaborate:["adj.","精心設計的"], literary:["adj.","文學的"], disguise:["n.","偽裝"],
  fictional:["adj.","虛構的"], invented:["adj.","捏造的；虛構的"], preface:["n.","序文"], footnote:["n.","註腳"], attribute:["v.","把…歸於（某人）"],
  descendant:["n.","後代"], frame:["n.","框架"], formidable:["adj.","驚人的；令人敬畏的"], crisscross:["v.","縱橫穿越；走遍"], unfold:["v.","展開"],
  particular:["adj.","特定的"], lighthearted:["adj.","輕鬆愉快的"], culinary:["adj.","烹飪的；美食的"], adventure:["n.","冒險"], gradually:["adv.","逐漸地"],
  searching:["adj.","深刻探究的"], genuinely:["adv.","真誠地"], adore:["v.","非常喜愛"], companion:["n.","同伴；旅伴"], subject:["n.","（君主或國家統治下的）臣民"],
  employ:["v.","雇用"], afford:["v.","負擔得起"], telling:["adj.","有說明性的；耐人尋味的"], reshape:["v.","重塑"], identity:["n.","身分；認同"],
  incisive:["adj.","犀利的；一針見血的"], postcolonial:["adj.","後殖民的"], pairing:["n.","組合；搭配"], lecture:["v.","說教"], loss:["n.","失去"],
  researcher:["n.","研究者"], surviving:["adj.","倖存的；活下來的"], imaginary:["adj.","虛構的；想像的"], creation:["n.","創作"],
  pleasure:["n.","樂趣"], recognize:["v.","認出"], familiar:["adj.","熟悉的"], flavor:["n.","味道"], invitation:["n.","邀請"], longing:["n.","渴望"]
};
const KEY = [["imagine","novel","rule","interpreter","guide","chapter","dish","colony","prize","translate"],
             ["honor","fiction","memoir","pretend","appetite","rediscover","sincerely","gap","colonize","praise","romance","research"],
             ["remarkable","layered","untranslatable","elaborate","disguise","attribute","descendant","formidable","crisscross","culinary","genuinely","telling","incisive","longing"]];

const DEFS = {
  "imagine": "to form a picture of something in your mind",
  "novel": "a long written story about imaginary people and events",
  "rule": "to control and govern a country",
  "interpreter": "a person whose job is to change spoken words into another language",
  "guide": "a person who shows other people the way and tells them about a place",
  "chapter": "one of the parts that a book is divided into",
  "dish": "food prepared in a particular way as part of a meal",
  "colony": "a country or area that is ruled by another country",
  "prize": "an award given to someone who wins a competition or does excellent work",
  "translate": "to change words from one language into another",
  "honor": "to show great respect for someone, often with a prize or in their memory",
  "fiction": "books and stories about imaginary people and events",
  "memoir": "a written account of someone's own life and experiences",
  "pretend": "to behave as if something is true when it is not",
  "appetite": "the feeling that you want to eat food",
  "rediscover": "to find something again after it has been lost or forgotten",
  "sincerely": "in a way that shows you really mean what you say or do",
  "gap": "a big difference between two people or groups",
  "colonize": "to take control of another country and rule it",
  "praise": "to say that you admire someone or something",
  "romance": "a story about love",
  "research": "careful study of a subject to discover new facts",
  "remarkable": "unusual or surprising in a way that makes people notice",
  "layered": "having many levels of meaning",
  "untranslatable": "impossible to express well in another language",
  "elaborate": "carefully planned with many detailed parts",
  "disguise": "something that hides what a person or thing really is",
  "attribute": "to say that something was written or done by a particular person",
  "descendant": "a person who is related to someone who lived long ago",
  "formidable": "very large, strong or impressive",
  "crisscross": "to travel back and forth across an area many times",
  "culinary": "connected with cooking or food",
  "genuinely": "truly; in a real and honest way",
  "telling": "showing more than it first seems to, especially about the truth",
  "incisive": "showing clear thinking and quickly getting to the important point",
  "longing": "a strong feeling of wanting something or someone"
};

const USAGE = {
  "imagine": ["imagine V-ing · imagine that … · can't imagine", "Imagine living without a smartphone for a week!", "想像一下一整個星期沒有智慧型手機的生活！"],
  "novel": ["write a novel · a historical novel · a novel by …", "She is reading a historical novel about old Tainan.", "她正在讀一本關於老台南的歷史小說。"],
  "rule": ["be ruled by … · rule a country · rule over …", "The island was ruled by different countries in the past.", "這座島過去曾被不同的國家統治。"],
  "interpreter": ["work as an interpreter · through an interpreter · sign language interpreter", "The singer spoke to Taiwanese fans through an interpreter.", "那位歌手透過口譯和台灣的粉絲說話。"],
  "guide": ["a tour guide · act as a guide · a local guide", "Our tour guide showed us the best night market in Tainan.", "我們的導遊帶我們去台南最棒的夜市。"],
  "chapter": ["the first chapter · in chapter 3 · a new chapter in …", "Please read chapter five before next class.", "下次上課前請先讀第五章。"],
  "dish": ["a local dish · a side dish · the national dish", "Beef noodle soup is a dish many visitors love.", "牛肉麵是很多遊客喜愛的一道料理。"],
  "colony": ["a former colony · a British colony · become a colony", "Hong Kong was once a British colony.", "香港曾經是英國的殖民地。"],
  "prize": ["win a prize · first prize · a prize for …", "Our class won first prize in the singing contest.", "我們班在歌唱比賽中得了第一名。"],
  "translate": ["translate A into B · be translated from … · hard to translate", "This poem has been translated into ten languages.", "這首詩已經被翻譯成十種語言。"],
  "honor": ["honor sb for … · in honor of … · honor sb's memory", "The town built a statue to honor the brave firefighter.", "小鎮建了一座雕像來紀念那位勇敢的消防員。"],
  "fiction": ["science fiction · a work of fiction · fiction writer", "I prefer fiction to history books.", "比起歷史書，我比較喜歡讀小說。"],
  "memoir": ["write a memoir · a travel memoir · publish a memoir", "The old doctor wrote a memoir about his years in the mountains.", "那位老醫師寫了一本回憶錄，記錄他在山區的歲月。"],
  "pretend": ["pretend to V · pretend that … · pretend to be …", "He pretended to be asleep when his mom came in.", "媽媽進來時，他假裝在睡覺。"],
  "appetite": ["a big appetite · lose your appetite · have no appetite", "Teenage boys often have huge appetites.", "十幾歲的男生常常食量很大。"],
  "rediscover": ["rediscover an old hobby · be rediscovered · rediscover yourself", "During the holiday, she rediscovered her love of drawing.", "放假期間，她重新找回對畫畫的熱愛。"],
  "sincerely": ["sincerely hope · sincerely apologize · Yours sincerely", "I sincerely hope you feel better soon.", "我真心希望你早日康復。"],
  "gap": ["a gap between A and B · the generation gap · close the gap", "There is a big gap between rich and poor in many cities.", "很多城市的貧富差距很大。"],
  "colonize": ["be colonized by … · colonize a land · colonized people", "Many parts of Asia were colonized by European countries.", "亞洲很多地方曾被歐洲國家殖民。"],
  "praise": ["praise sb for … · be highly praised · win praise", "The teacher praised him for his honest answer.", "老師稱讚他回答得很誠實。"],
  "romance": ["a summer romance · romance novel · a touch of romance", "The movie is a sweet romance set in Kyoto.", "這部電影是一段發生在京都的甜蜜愛情故事。"],
  "research": ["do research on … · historical research · research shows that …", "She did research on old photos of Taipei for her report.", "她為了報告研究台北的老照片。"],
  "remarkable": ["a remarkable story · remarkable progress · it is remarkable that …", "He made remarkable progress in English this year.", "他今年英文進步得非常驚人。"],
  "layered": ["a layered story · layered meaning · layered cake", "The film has a layered story that rewards a second viewing.", "這部電影的故事很有層次，值得再看一次。"],
  "untranslatable": ["an untranslatable word · almost untranslatable · untranslatable jokes", "Some Taiwanese jokes are almost untranslatable.", "有些台灣的笑話幾乎沒辦法翻譯。"],
  "elaborate": ["an elaborate plan · elaborate design · elaborate costume", "The students made an elaborate plan for the school fair.", "學生們為園遊會擬定了一個很周詳的計畫。"],
  "disguise": ["in disguise · a clever disguise · a blessing in disguise", "Missing the bus was a blessing in disguise—I met an old friend.", "錯過公車反而是因禍得福──我遇到了一位老朋友。"],
  "attribute": ["attribute A to B · be attributed to … · wrongly attributed", "This famous saying is often wrongly attributed to Einstein.", "這句名言常被誤認為是愛因斯坦說的。"],
  "descendant": ["a direct descendant · descendants of … · distant descendant", "He is a descendant of farmers who came from Fujian.", "他是從福建來的農民的後代。"],
  "formidable": ["a formidable opponent · formidable task · formidable appetite", "The final team was a formidable opponent.", "決賽的對手是一支非常強勁的隊伍。"],
  "crisscross": ["crisscross the country · crisscrossing roads · crisscross the island", "Train lines crisscross the western plains of Taiwan.", "鐵路縱橫交錯在台灣的西部平原上。"],
  "culinary": ["culinary skills · culinary tour · culinary tradition", "Tainan is famous for its culinary traditions.", "台南以它的飲食傳統聞名。"],
  "genuinely": ["genuinely care · genuinely interested · genuinely surprised", "She was genuinely surprised by the birthday party.", "她對這場生日派對真的很驚訝。"],
  "telling": ["a telling detail · a telling sign · it is telling that …", "It is telling that nobody answered his question.", "沒有人回答他的問題，這件事很能說明問題。"],
  "incisive": ["an incisive question · incisive analysis · incisive comments", "The reporter asked an incisive question about the new law.", "記者針對新法提出了一個一針見血的問題。"],
  "longing": ["a longing for … · a sense of longing · deep longing", "The song is full of longing for home.", "這首歌充滿了對家鄉的思念。"]
};

const FIGS = {
  awards:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="The awards won by Taiwan Travelogue" style="display:block;width:100%;height:auto;border-radius:6px;background:#FBF1E4">
<path d="M34 150 C110 156 170 142 250 150 S420 158 568 146" fill="none" stroke="#7A4B2A" stroke-width="3" stroke-linecap="round"/>
<g transform="translate(76,150)">
<path d="M-20 -24 C-20 -40 -18 -54 -16 -62 C-6 -60 2 -56 0 -52 C2 -56 10 -60 18 -62 C20 -54 22 -40 20 -24 C12 -26 4 -26 0 -22 C-4 -26 -12 -26 -20 -24Z" fill="#FFF8EC" stroke="#7A4B2A" stroke-width="2" stroke-linejoin="round"/>
<path d="M0 -52 C-1 -42 -1 -32 0 -22" stroke="#7A4B2A" stroke-width="1.6" fill="none"/>
<path d="M-13 -48 C-9 -49 -6 -49 -4 -48 M-13 -40 C-9 -41 -6 -41 -4 -40 M5 -48 C8 -49 11 -49 13 -48" stroke="#C49A6C" stroke-width="1.4" fill="none" stroke-linecap="round"/>
<circle r="7" fill="#B2442E" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(184,150)">
<path d="M-18 -50 C-10 -54 10 -54 18 -50 C18 -40 14 -32 0 -30 C-14 -32 -18 -40 -18 -50Z" fill="#E3B341" stroke="#8C6512" stroke-width="2" stroke-linejoin="round"/>
<path d="M-12 -32 C-14 -26 -16 -22 -18 -18 M12 -32 C14 -26 16 -22 18 -18 M0 -30 C0 -25 0 -22 0 -18" stroke="#8C6512" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<path d="M-14 -51 C-15 -58 -11 -62 -7 -60 C-6 -57 -7 -54 -8 -52 M14 -51 C15 -58 11 -62 7 -60 C6 -57 7 -54 8 -52" stroke="#8C6512" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<circle r="7" fill="#B2442E" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(298,150)">
<circle cx="0" cy="-44" r="14" fill="#F4F0E6" stroke="#B2442E" stroke-width="2.4"/><circle cx="0" cy="-44" r="6" fill="#D9483F"/>
<path d="M-8 -32 C-10 -26 -12 -22 -14 -18 L-8 -20 L-4 -16 C-3 -22 -2 -27 -2 -31 M8 -32 C10 -26 12 -22 14 -18 L8 -20 L4 -16 C3 -22 2 -27 2 -31" fill="#C9D7E6" stroke="#4A6A8A" stroke-width="1.4" stroke-linejoin="round"/>
<circle r="7" fill="#B2442E" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(410,150)">
<circle cx="0" cy="-44" r="14" fill="#D6E3F0" stroke="#3E5F8A" stroke-width="2.4"/>
<path d="M-6 -46 C-4 -50 4 -50 6 -46 C4 -42 -4 -42 -6 -46Z" fill="#3E5F8A"/>
<path d="M-8 -32 C-10 -26 -12 -22 -14 -18 L-8 -20 L-4 -16 C-3 -22 -2 -27 -2 -31 M8 -32 C10 -26 12 -22 14 -18 L8 -20 L4 -16 C3 -22 2 -27 2 -31" fill="#E8C7C2" stroke="#B2442E" stroke-width="1.4" stroke-linejoin="round"/>
<circle r="7" fill="#B2442E" stroke="#3A2E25" stroke-width="2"/></g>
<g transform="translate(524,146)">
<path d="M-16 -62 C-8 -64 8 -64 16 -62 C16 -48 10 -38 0 -36 C-10 -38 -16 -48 -16 -62Z" fill="#F2C14E" stroke="#8C6512" stroke-width="2" stroke-linejoin="round"/>
<path d="M-16 -58 C-24 -58 -26 -48 -14 -44 M16 -58 C24 -58 26 -48 14 -44" stroke="#8C6512" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M0 -36 C-1 -32 -1 -28 0 -26 M-10 -22 C-4 -26 4 -26 10 -22 L10 -18 C4 -20 -4 -20 -10 -18Z" fill="#8C6512" stroke="#8C6512" stroke-width="2" stroke-linejoin="round"/>
<circle r="7" fill="#B2442E" stroke="#3A2E25" stroke-width="2"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#3A2E25" text-anchor="middle">
<text x="76" y="184" font-size="16" font-weight="800">2020</text><text x="76" y="201" font-size="11">Published</text><text x="76" y="215" font-size="11">in Taiwan</text><text x="76" y="232" font-size="10" fill="#6B5B4E">在台灣出版</text>
<text x="184" y="184" font-size="16" font-weight="800">2021</text><text x="184" y="201" font-size="11">Golden Tripod</text><text x="184" y="215" font-size="11">Award</text><text x="184" y="232" font-size="10" fill="#6B5B4E">金鼎獎</text>
<text x="298" y="184" font-size="16" font-weight="800">2024</text><text x="298" y="201" font-size="11">Japan: Best</text><text x="298" y="215" font-size="11">Translation Award</text><text x="298" y="232" font-size="10" fill="#6B5B4E">日本翻譯大賞</text>
<text x="410" y="184" font-size="16" font-weight="800">2024</text><text x="410" y="201" font-size="11">U.S. National</text><text x="410" y="215" font-size="11">Book Award</text><text x="410" y="232" font-size="10" fill="#6B5B4E">美國國家圖書獎</text>
<text x="524" y="184" font-size="16" font-weight="800">2026</text><text x="524" y="201" font-size="11">International</text><text x="524" y="215" font-size="11">Booker Prize</text><text x="524" y="232" font-size="10" fill="#6B5B4E">國際布克獎</text>
</g>
<text x="300" y="266" font-family="Noto Sans TC,sans-serif" font-size="12" fill="#3A2E25" text-anchor="middle" font-weight="700">From Taiwan to the world</text>
<text x="300" y="284" font-family="Noto Sans TC,sans-serif" font-size="10.5" fill="#6B5B4E" text-anchor="middle">《臺灣漫遊錄》從台灣走向世界的得獎之路</text>
</svg>`,
    cap:"《臺灣漫遊錄》的得獎之路：先在台灣、日本、美國得獎，最後拿下國際布克獎。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["The history of Japan", "How to become a translator", "How to cook Taiwanese food", "A prize-winning novel about a trip around Taiwan"],
   "a":3,"exp":"文章介紹《臺灣漫遊錄》的故事內容，以及它贏得國際布克獎的事，答案是 (D)。"},
  {"q":"2. Who is Ō Chizuru in the story?","tag":"細節",
   "opts":["Chizuko's interpreter and guide", "A famous cook", "A Japanese writer", "The translator of the English version"],
   "a":0,"exp":"第二段說王千鶴是一位台灣女子，becomes her interpreter and guide（成為她的口譯和嚮導），答案是 (A)。(D) 英文版譯者是金翎。"},
  {"q":"3. Which of the following is TRUE according to the passage?","tag":"是非",
   "opts":["The book was first written in English.", "The story happens in 2026.", "Each chapter is built around a different dish.", "Chizuko and Chizuru are both from Japan."],
   "a":2,"exp":"(C) 正確，第二段最後一句說每一章都圍繞一道不同的料理。(B) 故事發生在 1938 年；(D) 千鶴是台灣人；(A) 這本書是從中文翻譯成英文的。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["A Guide to Taiwanese Night Markets", "The Life of Lin King", "Taiwan Travelogue: Food, Power and a Name with a Story", "How to Win the Booker Prize"],
   "a":2,"exp":"文章介紹得獎經過、小說的美食與形式、背後的殖民權力問題，以及筆名的故事，最好的標題是 (C)。"},
  {"q":"2. Why does the story feel like \"a document rediscovered decades later\"?","tag":"因果",
   "opts":["Because it includes made-up forewords, afterwords and notes", "Because it is very old", "Because it has many photos", "Because it was really found in Japan"],
   "a":0,"exp":"第二段說書裡有虛構的序、後記和譯註，which make the story feel like a document rediscovered decades later，答案是 (A)。(D) 錯，那是虛構的設定。"},
  {"q":"3. What \"more serious question\" lies beneath the meals?","tag":"推論",
   "opts":["Whether Chizuko can learn to cook", "How much the trip cost", "Whether Taiwanese food is healthy", "The unequal power between a Japanese guest and a colonized Taiwanese woman"],
   "a":3,"exp":"第三段說千鶴子常沒注意到日本客人和被殖民台灣女子之間的 gap（鴻溝），評審也提到這是對殖民權力的探討，答案是 (D)。"},
  {"q":"4. Why did Yang keep the pen name \"Shuang-zi\"?","tag":"細節",
   "opts":["To hide from her readers", "To honor her twin sister", "Because her publisher asked her to", "Because it is a Japanese word for food"],
   "a":1,"exp":"第四段說妹妹 2015 年過世後，楊 kept the name to honor her（保留筆名來紀念她），答案是 (B)。"}
 ],
 [
  {"q":"1. Which of the following best expresses the main idea of the passage?","tag":"主旨",
   "opts":["Taiwan Travelogue uses a playful form and food to explore colonial power, and carries a personal story behind its name.", "The International Booker Prize is given only to Asian writers.", "Yang Shuang-zi wrote the novel to criticize Japanese food.", "Taiwan Travelogue is a simple food guide to 1930s Taiwan."],
   "a":0,"exp":"文章談到小說偽裝成回憶錄的形式、以料理串起旅程、探討殖民權力，以及筆名背後雙胞胎妹妹的故事，(A) 最完整。(D) 太簡化，文中說它不只是美食冒險。"},
  {"q":"2. Why does the writer call the book \"an elaborate literary disguise\"?","tag":"推論",
   "opts":["Because the characters wear costumes", "Because the translator changed the story", "Because the author used a fake name to hide her identity", "Because it is a novel dressed up as a real, rediscovered memoir"],
   "a":3,"exp":"第二段接著說它 presents itself as the rediscovered memoir（把自己包裝成被重新發現的回憶錄），還有捏造的序文和註釋，所以說它是偽裝，答案是 (D)。"},
  {"q":"3. The word \"telling\" in \"Even the interpreter's name is telling\" is closest in meaning to ______.","tag":"字義",
   "opts":["famous", "talkative", "revealing", "boring"],
   "a":2,"exp":"後面解釋 Chizuru 是她中文名字的日語讀法，顯示殖民統治連名字都改變了。名字「透露」出更深的事實，telling 在此是「很能說明問題的」，答案是 (C) revealing。"},
  {"q":"4. According to the passage, why can't Chizuru \"afford to speak her mind\"?","tag":"因果",
   "opts":["She does not speak Japanese well.", "She is a colonial subject working for a Japanese visitor.", "She is too shy to talk.", "She is not interested in Chizuko."],
   "a":1,"exp":"第三段說千鶴 as a colonial subject employed by a Japanese visitor（身為受雇於日本訪客的殖民地子民），沒有暢所欲言的本錢，答案是 (B)。"},
  {"q":"5. Which of the following is NOT mentioned in the passage?","tag":"細節",
   "opts":["The year the novel was first published in Taiwan", "How old Yang Jo-hui was when she died", "Which awards the book won before the Booker", "How many copies the book has sold"],
   "a":3,"exp":"(A) 2020 年、(B) 三十歲、(C) 金鼎獎、日本翻譯大賞、美國國家圖書獎，文中都有提到。文章沒有說賣了幾本，答案是 (D)。"}
 ]
];

const META = {
 id:"travelogue", title:"A Journey Through Taiwan, One Dish at a Time", category:"好書介紹",
 dek:"一個胃口驚人的日本作家，一位台灣口譯，1938 年一起吃遍台灣。楊双子的《臺灣漫遊錄》拿下 2026 年國際布克獎，美食背後藏著殖民時代的權力，還有雙胞胎姊妹的故事。",
 date:"2026/11/11",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1745324212400-bcdf7224e1e9?auto=format&fit=crop&w=1600&q=70" data-local="travelogue-hero.jpg" alt="A yellow train arriving at Shifen Station in the green mountains of Taiwan" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#DDE9D2"/><path d="M0 230 C140 170 260 200 380 160 C500 120 640 170 800 140 V420 H0Z" fill="#7FA36A"/><path d="M0 320 C200 314 600 326 800 318 V420 H0Z" fill="#8C7A66"/><path d="M180 312 C180 270 196 256 230 254 L560 252 C590 254 604 270 604 312Z" fill="#F2C14E" stroke="#8C6512" stroke-width="4"/><g fill="#FFF8E1"><rect x="250" y="268" width="60" height="26" rx="4"/><rect x="340" y="268" width="60" height="26" rx="4"/><rect x="430" y="268" width="60" height="26" rx="4"/></g></svg>
<figcaption>平溪線的黃色小火車。《臺灣漫遊錄》的主角在 1938 年走遍台灣，一路嘗遍各地的料理。<span class="credit">Photo: Kounotori / Unsplash</span></figcaption>`,
 fact:"國際布克獎的獎金一定由作者和譯者平分，等於肯定翻譯和寫作一樣重要。英譯者金翎是台裔美國人，她在英文版裡讓同一個漢字可能有三種不同的唸法，刻意保留台灣多語言的樣貌。",
 next:{title:"The Raincoat Inside a Seal", href:"read.html#sealgut"}
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
