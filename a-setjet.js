/* winglish.tw 閱讀館文章資料：Holidays from the Screen（Set-jetting 追劇旅行） */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1,2,3],[4,5,6],[7,8,9,10],[11,12,13]], figs:{1:"map"}, heads:{1:"Famous Places on Screen",2:"Too Many Visitors",3:"Be a Good Visitor"},
   sents:[
    ["Have you ever watched a movie and thought, \"I want to go there\"?","你有沒有看完一部電影，心裡想：「我好想去那裡」？"],
    ["Many people now plan their trips this way.","現在很多人都用這種方式來規劃旅行。"],
    ["This is called \"set-jetting.\"","這就叫做「set-jetting」（追劇旅行）。"],
    ["The word comes from \"jet-setting,\" which means rich people flying around the world for fun.","這個字來自「jet-setting」，意思是有錢人搭飛機到世界各地玩樂。"],
    ["After The Lord of the Rings came out, many fans flew to New Zealand to see the green hills from the movies.","《魔戒》上映之後，許多影迷飛到紐西蘭，去看電影裡那片綠色的山丘。"],
    ["Today, visitors can still walk around the movie set of a little village called Hobbiton.","現在，遊客還可以去逛一座叫「哈比屯」的電影場景小村莊。"],
    ["In Japan, fans of the basketball comic Slam Dunk go to a railroad crossing in Kamakura to take photos.","在日本，籃球漫畫《灌籃高手》的粉絲會到鎌倉的一個平交道拍照。"],
    ["But set-jetting can cause problems.","但是追劇旅行也可能帶來問題。"],
    ["At the Slam Dunk crossing, some tourists stand in the road to get the perfect picture.","在灌籃高手平交道，有些觀光客會站到馬路上，只為了拍到完美的照片。"],
    ["This is dangerous, so the city now sends guards to keep people safe.","這樣很危險，所以市政府現在派警衛來維護大家的安全。"],
    ["Local people also get tired when their quiet streets become crowded every day.","當原本安靜的街道每天都擠滿人，當地居民也會覺得很累。"],
    ["It is fun to visit places from your favorite shows.","去看看你最愛的劇裡出現的地方，是很好玩的事。"],
    ["Just remember that real people live there.","只是要記得，那裡住著真實的人。"],
    ["Be polite, stay safe, and leave nothing behind but your footprints!","要有禮貌、注意安全，除了腳印之外，什麼都別留下！"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14]], figs:{1:"map"}, heads:{1:"From Screen to Suitcase",2:"When Fans Become a Flood",3:"Real or Imagined?"},
   sents:[
    ["When the TV series Game of Thrones needed a setting for its royal capital, King's Landing, the producers chose the old walled city of Dubrovnik in Croatia.","當影集《權力遊戲》需要為劇中的王城「君臨城」找拍攝地時，製作團隊選中了克羅埃西亞的城牆古城──杜布羅夫尼克。"],
    ["The show became a global hit, and soon fans were walking the same stone streets as their favorite characters.","這部劇紅遍全球，很快地，粉絲們就走在和他們最愛的角色一樣的石板街道上。"],
    ["This kind of travel has a name: set-jetting, a play on the word \"jet-setting.\"","這種旅行有個名字：set-jetting，是拿「jet-setting」這個字玩的文字遊戲。"],
    ["The term appeared in an American newspaper around 2008, but the habit is much older.","這個詞大約在 2008 年出現在一份美國報紙上，但這種習慣其實早就有了。"],
    ["Streaming services have made the trend stronger than ever.","串流平台讓這股潮流比以往任何時候都更強。"],
    ["Viewers can watch an entire series in one weekend and book a flight on Monday.","觀眾可以在一個週末一口氣追完整部劇，星期一就訂機票。"],
    ["Travel companies have noticed, and many now sell tours built around filming locations.","旅遊公司注意到了，現在很多公司都在賣以拍攝地點為主題的行程。"],
    ["For small towns, a single hit show can bring jobs and money almost overnight.","對小鎮來說，一部熱門劇幾乎一夜之間就能帶來工作和錢。"],
    ["Success can quickly turn into overtourism, though.","不過，成功也可能很快就變成「過度觀光」。"],
    ["In Dubrovnik, crowds from cruise ships and TV fans grew so large that the mayor limited the number of ships that could dock each day.","在杜布羅夫尼克，郵輪旅客和電視迷的人潮多到市長只好限制每天能停靠的船隻數量。"],
    ["In Kamakura, Japan, a railroad crossing that appears in the opening of the anime Slam Dunk draws thousands of visitors, and some of them step into traffic for a photo.","在日本鎌倉，一個出現在動畫《灌籃高手》片頭的平交道吸引了成千上萬的遊客，其中有些人為了拍照走進車流裡。"],
    ["The city has hired guards and set up a safer photo spot in a nearby park.","市政府雇用了警衛，並在附近的公園設了一個比較安全的拍照點。"],
    ["Sometimes the connection is not even real.","有時候，這種連結甚至不是真的。"],
    ["Jiufen, in northern Taiwan, is often called the town behind the anime Spirited Away, even though director Hayao Miyazaki has denied it.","台灣北部的九份常被說是動畫《神隱少女》的原型，雖然導演宮崎駿早就否認過。"],
    ["Tourists keep coming anyway, proving that a story can be as powerful as the place itself.","遊客還是照樣湧入，證明了一個故事可以和地方本身一樣有力量。"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1,2],[3,4,5],[6,7,8,9],[10,11,12,13]], figs:{1:"map"}, heads:{1:"The Blessing",2:"The Burden",3:"Chasing a Feeling"},
   sents:[
    ["Tourism has always been shaped by stories, but rarely has the link between fiction and footsteps been as direct as it is today.","觀光一向受到故事的影響，但虛構的故事和旅人的腳步之間，很少像今天連得這麼直接。"],
    ["Set-jetting, a playful inversion of \"jet-setting\" first recorded in the American press around 2008, describes travel planned around the filming locations of movies and television series.","Set-jetting 是把「jet-setting」俏皮地倒過來的說法，大約在 2008 年首次出現在美國媒體上，指的是圍繞電影和影集拍攝地點來規劃的旅行。"],
    ["What was once a niche pastime for devoted fans has, in the age of streaming and social media, become a mainstream force capable of remaking local economies.","這原本是死忠粉絲的小眾嗜好，如今在串流和社群媒體的時代，已經成為一股足以重塑地方經濟的主流力量。"],
    ["For destinations that land a starring role, the rewards can be substantial.","對於搶到「主角」位置的旅遊地來說，回報可能相當可觀。"],
    ["New Zealand marketed itself for years as the home of Middle-earth after The Lord of the Rings trilogy, and the preserved Hobbiton set has become one of the country's best-known attractions.","《魔戒》三部曲之後，紐西蘭多年來把自己行銷成「中土世界的故鄉」，而被保存下來的哈比屯片場，也成了該國最知名的景點之一。"],
    ["In Dubrovnik, tours devoted to Game of Thrones have reportedly generated tens of millions of dollars, giving a city that depends heavily on tourism yet another reason to welcome visitors.","在杜布羅夫尼克，以《權力遊戲》為主題的導覽據報導已經創造了數千萬美元的收入，讓這座高度依賴觀光的城市，又多了一個歡迎遊客的理由。"],
    ["Yet the same spotlight can scorch.","然而，同一盞聚光燈也可能把人灼傷。"],
    ["Fans tend to converge on a handful of photogenic spots at the same hours, overwhelming roads, trains and toilets designed for a fraction of the traffic.","粉絲們往往在同樣的時段湧向少數幾個好拍的地點，壓垮了原本只為少量人流設計的道路、電車和廁所。"],
    ["Dubrovnik's authorities eventually limited the number of cruise ships allowed to dock each day, and the Japanese city of Kamakura has posted security guards, installed cameras and created an alternative photo spot to keep crowds off the road at a railway crossing made famous by the basketball anime Slam Dunk.","杜布羅夫尼克當局最後限制了每天准許停靠的郵輪數量；日本鎌倉市則在因籃球動畫《灌籃高手》而出名的平交道派駐保全、裝設攝影機，還設了替代的拍照點，讓人潮遠離馬路。"],
    ["Residents of such places often complain that they have become extras in someone else's fantasy, their daily lives disrupted by strangers reenacting famous scenes.","這些地方的居民常抱怨，自己成了別人幻想裡的臨時演員，日常生活被一群重演經典場景的陌生人打亂。"],
    ["Perhaps the most revealing cases are those in which the connection is imaginary.","或許最能說明問題的，是那些連結根本出於想像的例子。"],
    ["The hillside town of Jiufen in northern Taiwan draws large numbers of visitors who believe it inspired the bathhouse town in Spirited Away, a claim that director Hayao Miyazaki has firmly rejected.","台灣北部的山城九份吸引了大批遊客，他們相信這裡就是《神隱少女》中澡堂小鎮的靈感來源──而導演宮崎駿已經明確否認這個說法。"],
    ["That the rumor persists anyway suggests that set-jetters are chasing not so much a precise location as a feeling: the hope of stepping, however briefly, into a world that once existed only on a screen.","這個傳聞依然流傳，顯示追劇旅人追尋的與其說是一個精確的地點，不如說是一種感覺：渴望走進一個原本只存在於螢幕上的世界，哪怕只有片刻。"],
    ["The challenge for destinations is to welcome that hope without letting it crowd out the people who actually live there.","對旅遊地來說，挑戰在於如何接住這份渴望，同時又不讓它把真正住在那裡的人擠出去。"]
 ]}
];

const GLOSS = {
  movie:["n.","電影"], plan:["v.","計畫；規劃"], trip:["n.","旅行"], rich:["adj.","有錢的"], fan:["n.","粉絲；迷"], flew:["v.","飛（fly 的過去式）"],
  hill:["n.","山丘"], visitor:["n.","遊客；訪客"], village:["n.","村莊"], basketball:["n.","籃球"], comic:["n.","漫畫"], railroad:["n.","鐵路"],
  crossing:["n.","平交道；穿越處"], cause:["v.","造成"], problem:["n.","問題"], tourist:["n.","觀光客"], perfect:["adj.","完美的"], dangerous:["adj.","危險的"],
  guard:["n.","警衛"], local:["adj.","當地的"], crowded:["adj.","擁擠的"], favorite:["adj.","最喜歡的"], polite:["adj.","有禮貌的"], footprint:["n.","腳印"],
  series:["n.","影集；系列"], setting:["n.","背景；場景"], royal:["adj.","皇家的"], capital:["n.","首都"], producer:["n.","製作人"], walled:["adj.","有城牆的"],
  croatia:["n.","克羅埃西亞"], global:["adj.","全球的"], hit:["n.","成功而轟動的事物"], character:["n.","角色"], term:["n.","名詞；術語"], appear:["v.","出現"],
  habit:["n.","習慣"], streaming:["n.","串流"], service:["n.","服務"], trend:["n.","潮流"], viewer:["n.","觀眾"], entire:["adj.","整個的"], book:["v.","預訂"],
  location:["n.","地點"], filming:["n.","拍攝"], tour:["n.","旅遊行程；導覽"], overnight:["adv.","一夜之間"], success:["n.","成功"],
  overtourism:["n.","過度觀光"], cruise:["n.","郵輪旅行"], mayor:["n.","市長"], limit:["v.","限制"], dock:["v.","（船）停靠"], anime:["n.","日本動畫"],
  opening:["n.","片頭；開頭"], draw:["v.","吸引"], traffic:["n.","交通；車流；人流"], hire:["v.","雇用"], nearby:["adj.","附近的"], connection:["n.","連結；關係"],
  director:["n.","導演"], denied:["v.","否認（deny 的過去分詞）"], anyway:["adv.","無論如何；還是"], prove:["v.","證明"],
  tourism:["n.","觀光業"], shape:["v.","塑造；影響"], fiction:["n.","虛構故事；小說"], footstep:["n.","腳步"], playful:["adj.","俏皮的；開玩笑的"],
  inversion:["n.","倒置；顛倒"], press:["n.","新聞界；媒體"], niche:["adj.","小眾的"], pastime:["n.","消遣；嗜好"], devoted:["adj.","忠實的；專心的"],
  mainstream:["adj.","主流的"], capable:["adj.","有能力的"], economy:["n.","經濟"], destination:["n.","旅遊地；目的地"], starring:["adj.","主演的；主角的"],
  reward:["n.","回報；獎勵"], substantial:["adj.","可觀的；大量的"], market:["v.","行銷"], trilogy:["n.","三部曲"], preserve:["v.","保存"],
  attraction:["n.","景點"], reportedly:["adv.","據報導"], generate:["v.","產生；創造"], depend:["v.","依賴"], spotlight:["n.","聚光燈；眾人注目"],
  scorch:["v.","燒焦；灼傷"], converge:["v.","匯集；湧向"], handful:["n.","少數；一把"], photogenic:["adj.","上相的；很好拍的"], overwhelm:["v.","壓垮；使不堪負荷"],
  fraction:["n.","一小部分"], authority:["n.","當局；官方"], eventually:["adv.","最後"], install:["v.","安裝"], alternative:["adj.","替代的；另外的"],
  resident:["n.","居民"], complain:["v.","抱怨"], extra:["n.","臨時演員"], fantasy:["n.","幻想"], disrupt:["v.","打亂；干擾"], reenact:["v.","重演"],
  revealing:["adj.","能說明問題的；有啟發性的"], imaginary:["adj.","想像的；虛構的"], hillside:["adj.","山坡上的"], inspire:["v.","給予靈感"],
  bathhouse:["n.","澡堂"], claim:["n.","說法；主張"], firmly:["adv.","堅定地"], reject:["v.","否定；拒絕"], rumor:["n.","傳聞；謠言"], persist:["v.","持續存在"],
  chase:["v.","追尋"], precise:["adj.","精確的"], briefly:["adv.","短暫地"], exist:["v.","存在"], challenge:["n.","挑戰"]
};
const KEY = [["plan","fan","comic","crossing","cause","tourist","dangerous","guard","crowded","polite"],
             ["setting","producer","global","term","streaming","location","overnight","overtourism","cruise","dock","draw","hire"],
             ["fiction","inversion","niche","mainstream","substantial","generate","scorch","converge","photogenic","overwhelm","disrupt","imaginary","persist","destination"]];

const DEFS = {
  "plan": "to decide in detail what you are going to do",
  "fan": "a person who likes a famous person, team or show very much",
  "comic": "a magazine or book that tells a story with pictures",
  "crossing": "a place where a road crosses a railway, or where people can cross a road",
  "cause": "to make something happen, especially something bad",
  "tourist": "a person who travels to a place for fun",
  "dangerous": "likely to hurt or harm someone",
  "guard": "a person whose job is to protect a place or people",
  "crowded": "full of people",
  "polite": "showing good manners and respect for other people",
  "setting": "the place where a story happens",
  "producer": "a person in charge of making a film or TV show",
  "global": "relating to the whole world",
  "term": "a word or phrase with a particular meaning",
  "streaming": "watching or listening to video or music online without downloading it",
  "location": "a place where a film or TV show is made, outside a studio",
  "overnight": "very quickly or suddenly",
  "overtourism": "a situation in which too many tourists visit a place, causing problems",
  "cruise": "a holiday on a large ship that stops at different places",
  "dock": "(of a ship) to come into a harbor and stop",
  "draw": "to attract people",
  "hire": "to give someone a job",
  "fiction": "stories about imaginary people and events",
  "inversion": "a change in which the order of something is reversed",
  "niche": "interesting to only a small group of people",
  "mainstream": "accepted or liked by most people",
  "substantial": "large in amount or value",
  "generate": "to produce or create something, such as money or jobs",
  "scorch": "to burn the surface of something",
  "converge": "to come together in one place from different directions",
  "photogenic": "looking attractive in photographs",
  "overwhelm": "to be too much for someone or something to deal with",
  "disrupt": "to stop something from continuing in its normal way",
  "imaginary": "existing only in the mind, not real",
  "persist": "to continue to exist",
  "destination": "a place that people travel to"
};

const USAGE = {
  "plan": ["plan a trip · plan to V · plan ahead", "We are planning a trip to Hualien this summer.", "我們正在計畫今年夏天去花蓮玩。"],
  "fan": ["a big fan of … · sports fans · fan club", "My brother is a big fan of Taiwanese baseball.", "我哥哥是台灣棒球的超級粉絲。"],
  "comic": ["comic book · read comics · a comic artist", "He reads comic books on the bus every morning.", "他每天早上在公車上看漫畫。"],
  "crossing": ["a railroad crossing · pedestrian crossing · border crossing", "Always stop and look at a railroad crossing.", "經過平交道一定要停看聽。"],
  "cause": ["cause a problem · cause damage · the cause of …", "Heavy rain caused traffic jams all over the city.", "大雨造成全市大塞車。"],
  "tourist": ["tourist attraction · foreign tourists · tourist information", "Jiufen is a popular tourist attraction near Taipei.", "九份是台北附近熱門的觀光景點。"],
  "dangerous": ["dangerous to V · a dangerous road · highly dangerous", "It is dangerous to use your phone while crossing the street.", "過馬路時滑手機很危險。"],
  "guard": ["security guard · stand guard · guard dog", "A security guard stands at the gate of our school.", "我們學校門口有一位警衛站崗。"],
  "crowded": ["crowded with … · a crowded train · get crowded", "The MRT is always crowded during rush hour.", "捷運在尖峰時段總是很擠。"],
  "polite": ["be polite to … · a polite request · politely", "It is polite to say thank you to the bus driver.", "跟公車司機說謝謝是有禮貌的。"],
  "setting": ["the setting of a story · a beautiful setting · a natural setting", "The setting of the novel is a small town in Tainan.", "這本小說的背景是台南的一個小鎮。"],
  "producer": ["a film producer · TV producer · music producer", "The producer chose a quiet beach for the final scene.", "製作人為最後一幕選了一片安靜的海灘。"],
  "global": ["a global hit · global warming · on a global scale", "Bubble tea has become a global hit.", "珍珠奶茶已經紅遍全球。"],
  "term": ["a new term · in simple terms · a term for …", "\"Selfie\" was a new term just a few years ago.", "「自拍」幾年前還是個新名詞。"],
  "streaming": ["streaming service · live streaming · streaming platform", "Many families now watch shows on streaming services.", "現在很多家庭都用串流平台看節目。"],
  "location": ["filming location · on location · a perfect location", "The movie was shot on location in Kenting.", "這部電影是在墾丁實地拍攝的。"],
  "overnight": ["become famous overnight · overnight success · stay overnight", "The singer became famous overnight after the video went viral.", "影片爆紅之後，那位歌手一夜成名。"],
  "overtourism": ["suffer from overtourism · fight overtourism · overtourism problem", "Some cities charge a tourist tax to fight overtourism.", "有些城市收觀光稅來對抗過度觀光。"],
  "cruise": ["cruise ship · go on a cruise · a river cruise", "A huge cruise ship arrived at Keelung Harbor.", "一艘巨大的郵輪抵達基隆港。"],
  "dock": ["dock at … · ships dock · dock in the harbor", "The ferry docks at Penghu twice a day.", "渡輪每天停靠澎湖兩次。"],
  "draw": ["draw crowds · draw visitors · draw attention", "The lantern festival draws huge crowds every year.", "燈會每年都吸引大批人潮。"],
  "hire": ["hire a guide · hire workers · hire sb to V", "We hired a local guide to show us around Alishan.", "我們請了一位當地導遊帶我們逛阿里山。"],
  "fiction": ["science fiction · a work of fiction · fact and fiction", "It's hard to tell fact from fiction on the Internet.", "在網路上很難分辨事實和虛構。"],
  "inversion": ["an inversion of … · word inversion · role inversion", "\"Never have I seen\" is an example of inversion in English.", "「Never have I seen」是英文倒裝句的例子。"],
  "niche": ["a niche market · niche interest · niche audience", "Vinyl records were once a niche hobby.", "黑膠唱片曾經是很小眾的嗜好。"],
  "mainstream": ["mainstream media · become mainstream · mainstream culture", "Electric scooters have become mainstream in Taiwan.", "電動機車在台灣已經成為主流。"],
  "substantial": ["a substantial amount · substantial changes · substantial income", "The new MRT line brought substantial changes to the area.", "新的捷運線為這一帶帶來了很大的改變。"],
  "generate": ["generate income · generate jobs · generate interest", "The music festival generated a lot of income for the town.", "音樂節為小鎮帶來了大量收入。"],
  "scorch": ["scorched earth · scorching heat · scorch marks", "The hot pan scorched the wooden table.", "熱鍋把木頭桌子燙焦了。"],
  "converge": ["converge on … · paths converge · converge at a point", "Thousands of runners converged on the starting line.", "數千名跑者湧向起跑線。"],
  "photogenic": ["a photogenic spot · photogenic food · very photogenic", "This café is popular because its desserts are so photogenic.", "這家咖啡廳很紅，因為甜點超好拍。"],
  "overwhelm": ["be overwhelmed by … · overwhelm the system · an overwhelming number", "The small hospital was overwhelmed by patients.", "那間小醫院被大量病人壓得喘不過氣。"],
  "disrupt": ["disrupt traffic · disrupt a class · disrupt daily life", "The typhoon disrupted train services across Taiwan.", "颱風打亂了全台的火車班次。"],
  "imaginary": ["an imaginary friend · imaginary world · imaginary line", "As a child, she had an imaginary friend named Momo.", "她小時候有一個叫 Momo 的想像朋友。"],
  "persist": ["the problem persists · persist in V-ing · rumors persist", "If your cough persists, you should see a doctor.", "如果咳嗽一直不好，你應該去看醫生。"],
  "destination": ["a tourist destination · a popular destination · final destination", "Japan is the most popular destination for Taiwanese travelers.", "日本是台灣旅客最熱門的旅遊地。"]
};

const FIGS = {
  map:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="Famous set-jetting destinations" style="display:block;width:100%;height:auto;border-radius:6px;background:#EAF2F7">
<path d="M28 80 C70 60 120 74 150 66 C180 58 210 70 230 92 C246 112 230 132 198 136 C160 140 120 128 90 134 C60 140 34 120 28 100Z" fill="#D6E6C8" opacity=".8"/>
<path d="M360 70 C400 52 452 60 490 72 C526 84 552 104 548 130 C544 152 512 160 480 156 C446 152 420 160 392 150 C364 140 348 120 352 98Z" fill="#D6E6C8" opacity=".8"/>
<path d="M456 200 C474 192 492 200 500 214 C506 228 496 242 480 244 C464 246 452 234 452 220Z" fill="#D6E6C8" opacity=".8"/>
<path d="M150 104 C230 40 330 50 418 94 C440 104 446 118 440 130 M440 130 C452 150 470 180 474 206 M440 130 C430 120 418 122 410 132" fill="none" stroke="#2F6B8A" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round"/>
<g transform="translate(150,104)"><path d="M0 0 C-10 -12 -12 -22 -6 -28 C-2 -32 2 -32 6 -28 C12 -22 10 -12 0 0Z" fill="#D9483F" stroke="#7A1F1A" stroke-width="1.6"/><circle cy="-20" r="3.4" fill="#FFF"/></g>
<g transform="translate(440,130)"><path d="M0 0 C-10 -12 -12 -22 -6 -28 C-2 -32 2 -32 6 -28 C12 -22 10 -12 0 0Z" fill="#D9483F" stroke="#7A1F1A" stroke-width="1.6"/><circle cy="-20" r="3.4" fill="#FFF"/></g>
<g transform="translate(410,132)"><path d="M0 0 C-10 -12 -12 -22 -6 -28 C-2 -32 2 -32 6 -28 C12 -22 10 -12 0 0Z" fill="#E59A2F" stroke="#8A5410" stroke-width="1.6"/><circle cy="-20" r="3.4" fill="#FFF"/></g>
<g transform="translate(474,214)"><path d="M0 0 C-10 -12 -12 -22 -6 -28 C-2 -32 2 -32 6 -28 C12 -22 10 -12 0 0Z" fill="#D9483F" stroke="#7A1F1A" stroke-width="1.6"/><circle cy="-20" r="3.4" fill="#FFF"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#1F3A4A">
<text x="40" y="154" font-size="13" font-weight="800">Dubrovnik, Croatia</text><text x="40" y="170" font-size="11">Game of Thrones</text><text x="40" y="185" font-size="10" fill="#566B78">《權力遊戲》君臨城</text>
<text x="300" y="206" font-size="13" font-weight="800" text-anchor="end">Jiufen, Taiwan</text><text x="300" y="223" font-size="11" text-anchor="end">Spirited Away? (only a rumor)</text><text x="300" y="239" font-size="10" fill="#566B78" text-anchor="end">《神隱少女》？導演否認</text>
<path d="M304 200 C340 176 380 150 404 140" fill="none" stroke="#8A5410" stroke-width="1.2" stroke-dasharray="3 4"/>
<text x="500" y="48" font-size="13" font-weight="800" text-anchor="middle">Kamakura, Japan</text><text x="500" y="65" font-size="11" text-anchor="middle">Slam Dunk crossing</text><text x="500" y="80" font-size="10" fill="#566B78" text-anchor="middle">《灌籃高手》平交道</text>
<path d="M472 84 C462 96 452 108 446 118" fill="none" stroke="#7A1F1A" stroke-width="1.2" stroke-dasharray="3 4"/>
<text x="500" y="262" font-size="13" font-weight="800" text-anchor="middle">Hobbiton, New Zealand</text><text x="500" y="279" font-size="11" text-anchor="middle">The Lord of the Rings</text><text x="500" y="294" font-size="10" fill="#566B78" text-anchor="middle">《魔戒》哈比屯片場</text>
</g>
<text x="30" y="34" font-family="Noto Sans TC,sans-serif" font-size="14" font-weight="800" fill="#1F3A4A">Where screens send travelers</text>
<text x="30" y="51" font-family="Noto Sans TC,sans-serif" font-size="10.5" fill="#566B78">螢幕把旅人帶去了哪裡（示意圖，非實際比例）</text>
</svg>`,
    cap:"幾個有名的「追劇旅行」地點：紅色是真正的拍攝地或作品場景，橘色的九份則只是流傳很廣的傳聞。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["Why basketball is popular in Japan", "How to make a movie", "Traveling to places seen in movies and shows", "The history of New Zealand"],
   "a":2,"exp":"文章介紹 set-jetting（去電影、影集出現過的地方旅行），舉了紐西蘭和鎌倉的例子，也提到它帶來的問題，答案是 (C)。"},
  {"q":"2. Why does the city send guards to the Slam Dunk crossing?","tag":"因果",
   "opts":["Because some tourists stand in the road", "Because the trains are too slow", "To sell tickets to tourists", "To take photos for visitors"],
   "a":0,"exp":"第三段說有些觀光客站到馬路上拍照，This is dangerous（很危險），所以市政府派警衛維護安全，答案是 (A)。"},
  {"q":"3. Which of the following is TRUE according to the passage?","tag":"是非",
   "opts":["Local people always enjoy the crowds.", "The writer tells readers not to visit any movie places.", "Hobbiton is a real village where people live.", "The word \"set-jetting\" comes from \"jet-setting.\""],
   "a":3,"exp":"(D) 正確，第一段說這個字來自 jet-setting。(C) 哈比屯是電影場景；(A) 居民會覺得累；(B) 作者說去很好玩，只是要有禮貌。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["The Making of Game of Thrones", "Set-Jetting: The Good and the Bad of Screen Tourism", "How to Book a Cheap Flight", "Why Miyazaki Visited Taiwan"],
   "a":1,"exp":"文章先說明 set-jetting 是什麼、為什麼越來越流行、能帶來工作和錢，再說過度觀光的問題，最好的標題是 (B)。"},
  {"q":"2. According to the passage, what has made set-jetting stronger than ever?","tag":"細節",
   "opts":["Newspapers", "Basketball games", "Cheaper hotels", "Streaming services"],
   "a":3,"exp":"第二段第一句說 Streaming services have made the trend stronger than ever，答案是 (D)。"},
  {"q":"3. What has Kamakura done to deal with the crowds?","tag":"細節",
   "opts":["Hired guards and set up a safer photo spot", "Charged every tourist a fee", "Closed the railroad", "Stopped showing Slam Dunk"],
   "a":0,"exp":"第三段最後說市政府 hired guards（雇用警衛），並在附近公園設了比較安全的拍照點，答案是 (A)。"},
  {"q":"4. What does the example of Jiufen show?","tag":"推論",
   "opts":["Jiufen does not want any tourists.", "Tourists only visit real filming locations.", "A popular story can attract visitors even if it isn't true.", "Miyazaki made Spirited Away in Jiufen."],
   "a":2,"exp":"導演否認九份是原型，遊客卻照樣湧入，作者說這證明 a story can be as powerful as the place itself，答案是 (C)。(D) 跟文意相反。"}
 ],
 [
  {"q":"1. Which of the following best expresses the main idea of the passage?","tag":"主旨",
   "opts":["Filming locations are usually chosen because they are cheap.", "Most set-jetters are disappointed by what they find.", "Set-jetting should be banned in all tourist cities.", "Set-jetting brings both benefits and burdens, and is driven by a desire to enter a story."],
   "a":3,"exp":"文章分成 The Blessing（好處）、The Burden（負擔）和 Chasing a Feeling（追尋一種感覺）三部分，(D) 最完整。(C) 作者沒有主張禁止；(B) 文中沒提到。"},
  {"q":"2. What does the sentence \"the same spotlight can scorch\" mean?","tag":"修辭",
   "opts":["Filming lights can start fires.", "Fame from the screen can also cause harm.", "Tourists get sunburned easily.", "Only famous places are hot in summer."],
   "a":1,"exp":"spotlight（聚光燈）比喻影視帶來的名氣，scorch（灼傷）比喻造成傷害。這句承接上一段的好處，轉而談壞處，答案是 (B)。"},
  {"q":"3. The word \"converge\" in the third paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["gather", "argue", "escape", "spread out"],
   "a":0,"exp":"句子說粉絲在同樣時段 converge on 少數幾個地點，結果壓垮了道路和廁所，可知 converge 是「聚集、湧向」，答案是 (A) gather。"},
  {"q":"4. Why does the writer call the Jiufen case \"revealing\"?","tag":"推論",
   "opts":["It shows that Taiwan has no real filming locations.", "It reveals that most rumors are true.", "It shows that set-jetters care more about a feeling than an exact location.", "It proves that Miyazaki secretly visited Jiufen."],
   "a":2,"exp":"第四段說這個傳聞即使被否認還是流傳，顯示追劇旅人追的 not so much a precise location as a feeling（與其說是地點，不如說是一種感覺），答案是 (C)。"},
  {"q":"5. Which of the following is NOT mentioned in the passage?","tag":"細節",
   "opts":["When the term set-jetting first appeared", "Money earned from Game of Thrones tours", "Cameras installed in Kamakura", "The number of visitors to Hobbiton each year"],
   "a":3,"exp":"(A) 大約 2008 年、(B) 數千萬美元、(C) 鎌倉裝設攝影機，文中都有提到。文章沒有說哈比屯每年有多少遊客，答案是 (D)。"}
 ]
];

const META = {
 id:"setjet", title:"Holidays from the Screen", category:"旅行",
 dek:"為了一部劇、一部動畫，飛去一座城市？「Set-jetting」正在改變世界的觀光，也讓有些地方快要吃不消。",
 date:"2026/11/11",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1565784623522-7fdf499a94a4?auto=format&fit=crop&w=1600&q=70" data-local="setjet-hero.jpg" alt="The old town walls of Dubrovnik, Croatia, by the sea" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#BFDDEB"/><path d="M0 300 C200 290 600 300 800 292 V420 H0Z" fill="#2F7FA6"/><path d="M120 300 C130 220 180 200 240 196 L560 192 C620 196 660 230 670 300Z" fill="#D9C7A6"/><g fill="#D9683A"><path d="M220 196 L260 160 L300 196Z"/><path d="M330 194 L380 150 L430 194Z"/><path d="M460 194 L500 162 L540 194Z"/></g><path d="M120 300 C130 260 140 250 160 246 L640 246 C656 252 664 270 670 300" fill="none" stroke="#A88E66" stroke-width="10"/></svg>
<figcaption>克羅埃西亞的杜布羅夫尼克古城，影集《權力遊戲》裡「君臨城」的主要拍攝地。<span class="credit">Photo: Cat Bassano / Unsplash</span></figcaption>`,
 fact:"台灣也有追劇景點：電影《那些年，我們一起追的女孩》上映後，片中的平溪放天燈場景和彰化的高中校園，都吸引了許多影迷去朝聖。",
 next:{title:"A Feast, a Letter and a Lucky Turkey", href:"read.html#thanksgiving"}
};


/* 導讀模式＋單字小練習 */
const GUIDE = [[{"after": 0, "q": "What is \"set-jetting\"?", "opts": ["Planning trips to places seen on screen", "Flying around the world on a private jet", "Visiting the studios where films are made"], "a": 0, "hint": "看 Many people now plan their trips this way. This is called…"}, {"after": 1, "q": "Where do Slam Dunk fans go to take photos?", "opts": ["A railroad crossing in Kamakura", "A basketball court in Tokyo", "A movie set in New Zealand"], "a": 0, "hint": "找 go to a railroad crossing in…"}, {"after": 2, "q": "Why does the city send guards to the crossing?", "opts": ["Some tourists stand in the road to take photos.", "Fans were damaging the train tracks at night.", "The guards sell tickets to take photos there."], "a": 0, "hint": "看 some tourists stand in the road… This is dangerous…"}], [{"after": 0, "q": "Which city was used as King's Landing?", "opts": ["Dubrovnik in Croatia", "Kamakura in Japan", "Hobbiton in New Zealand"], "a": 0, "hint": "看 the producers chose the old walled city of…"}, {"after": 1, "q": "How have streaming services affected set-jetting?", "opts": ["They have made the trend stronger.", "They have made people travel less.", "They have made flights much cheaper."], "a": 0, "hint": "看 Streaming services have made the trend…"}, {"after": 2, "q": "What did the mayor of Dubrovnik do?", "opts": ["Limited the cruise ships allowed each day", "Closed the old city to TV fans", "Hired guards to stop people taking photos"], "a": 0, "hint": "找 the mayor limited the number of…"}], [{"after": 0, "q": "What has set-jetting become in the age of streaming and social media?", "opts": ["A mainstream force that can remake local economies", "A small hobby for only a few devoted fans", "A trend that is quickly dying out as streaming grows"], "a": 0, "hint": "看 has… become a mainstream force capable of…"}, {"after": 1, "q": "How much have Game of Thrones tours reportedly brought Dubrovnik?", "opts": ["Tens of millions of dollars", "A few thousand dollars", "Nothing, since tours are free"], "a": 0, "hint": "看 have reportedly generated tens of…"}, {"after": 2, "q": "What do residents of popular spots often complain about?", "opts": ["Crowds disrupt their daily lives.", "They are not paid to be in films.", "Guards stop them from going home."], "a": 0, "hint": "看 their daily lives disrupted by strangers…"}]];
const VPRAC = [[{"s": "The train was so ____ that I had to stand all the way.", "opts": ["crowded", "polite", "dangerous", "comic"], "a": 0, "w": "crowded"}, {"s": "It is ____ to say \"thank you\" when someone helps you.", "opts": ["polite", "crowded", "dangerous", "comic"], "a": 0, "w": "polite"}, {"s": "Many ____ visit Taipei 101 every day.", "opts": ["tourists", "guards", "comics", "crossings"], "a": 0, "w": "tourist"}, {"s": "Look both ways before you walk across the railroad ____.", "opts": ["crossing", "guard", "comic", "plan"], "a": 0, "w": "crossing"}, {"s": "Heavy rain can ____ floods in low areas.", "opts": ["cause", "plan", "guard", "fan"], "a": 0, "w": "cause"}], [{"s": "The company plans to ____ ten new workers.", "opts": ["hire", "dock", "draw", "cruise"], "a": 0, "w": "hire"}, {"s": "My grandparents went on a ____ to Japan.", "opts": ["cruise", "location", "term", "setting"], "a": 0, "w": "cruise"}, {"s": "The story's ____ is a small village in the mountains.", "opts": ["setting", "producer", "cruise", "term"], "a": 0, "w": "setting"}, {"s": "The singer became famous ____ after her video went viral.", "opts": ["overnight", "global", "streaming", "overtourism"], "a": 0, "w": "overnight"}, {"s": "Climate change is a ____ problem that affects every country.", "opts": ["global", "overnight", "streaming", "producer"], "a": 0, "w": "global"}], [{"s": "Bali is a popular holiday ____.", "opts": ["destination", "fiction", "inversion", "niche"], "a": 0, "w": "destination"}, {"s": "The noisy construction ____ our class.", "opts": ["disrupted", "generated", "converged", "persisted"], "a": 0, "w": "disrupt"}, {"s": "Solar panels ____ electricity from sunlight.", "opts": ["generate", "disrupt", "converge", "scorch"], "a": 0, "w": "generate"}, {"s": "If the pain ____, you should see a doctor.", "opts": ["persists", "converges", "disrupts", "generates"], "a": 0, "w": "persist"}, {"s": "Her little sister has an ____ friend she talks to every day.", "opts": ["imaginary", "photogenic", "mainstream", "substantial"], "a": 0, "w": "imaginary"}]];
return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE,GUIDE,VPRAC});
})();
