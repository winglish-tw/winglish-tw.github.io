/* Winglish 閱讀館文章資料：When Spirits Come Home */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0],[1,2],[3,4,5,6,7,8],[9,10,11,12],[13]], figs:{2:"horse",3:"fama"}, heads:{1:"Summer Visitors in Japan",3:"A Party in Madagascar"},
   sents:[
    ["Mexico is not the only country with a special holiday for people who have died.","墨西哥並不是唯一有紀念過世親人節日的國家。"],
    ["In Japan, this holiday is called Obon, and it comes every summer.","在日本，這個節日叫做「盂蘭盆節」，每年夏天到來。"],
    ["People believe that the spirits of their family members come home for a few days.","人們相信家人的靈魂會回家住幾天。"],
    ["To welcome them, families make tiny animals from vegetables.","為了迎接他們，家家戶戶會用蔬菜做成小動物。"],
    ["They put four sticks into a cucumber, and it becomes a horse.","他們在小黃瓜上插四根小棒子，它就變成一匹馬。"],
    ["The horse is fast, so the spirits can come home quickly.","馬跑得快，所以靈魂能很快回到家。"],
    ["An eggplant becomes a cow, and the cow is slow.","茄子變成一頭牛，而牛走得很慢。"],
    ["It takes the spirits back slowly, so they can stay with their families a little longer.","牛慢慢載靈魂回去，讓他們能多陪家人一會兒。"],
    ["On the last night, people in some towns put paper lanterns on rivers to say goodbye.","最後一晚，一些城鎮的人會把紙燈籠放到河上，向靈魂道別。"],
    ["In Madagascar, an island near Africa, some families do something very different.","在非洲附近的島嶼馬達加斯加，有些家庭的做法非常不一樣。"],
    ["Every few years, they open the family tomb and take out the bodies of their ancestors.","每隔幾年，他們會打開家族墳墓，把祖先的遺體抬出來。"],
    ["They wrap the bodies in new cloth.","他們用新的布包裹遺體。"],
    ["Then they sing, dance, and even carry their ancestors around!","接著他們唱歌、跳舞，甚至抱著祖先四處走！"],
    ["It may sound scary, but for these families, it is a happy party, not a sad day.","聽起來也許有點可怕，但對這些家庭來說，這是快樂的派對，而不是悲傷的日子。"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1],[2,3],[4,5,6,7],[8,9,10,11],[12,13]], figs:{2:"horse",4:"fama"}, heads:{1:"Obon: A Journey by Horse and Cow",3:"Famadihana: Dancing With Ancestors"},
   sents:[
    ["Mexico's Day of the Dead, with its marigolds and painted skulls, has become one of the most recognizable festivals on the planet.","墨西哥的亡靈節有萬壽菊和彩繪骷髏，已成為全世界最具辨識度的節慶之一。"],
    ["Yet it is far from the only tradition built on the belief that the dead do not simply disappear but continue to share in the lives of the living.","然而，建立在「亡者並不會就此消失，而是持續參與生者生活」這個信念上的傳統，遠遠不只這一個。"],
    ["In Japan, this belief takes shape every summer during Obon, a Buddhist-influenced festival that sends millions of people back to their hometowns.","在日本，這個信念每年夏天在盂蘭盆節期間具體呈現；這個受佛教影響的節日讓數百萬人返回故鄉。"],
    ["There, families tidy ancestral graves, hang lanterns at their doorsteps, and prepare offerings for the spirits, who are believed to return for a brief visit.","在那裡，家人整理祖墳、在門口掛起燈籠，並為靈魂準備供品；人們相信靈魂會短暫回家探望。"],
    ["Perhaps the most charming custom involves two ordinary vegetables.","或許最可愛的習俗，和兩種普通的蔬菜有關。"],
    ["With four sticks inserted as legs, a cucumber is transformed into a horse, allowing the spirits to arrive as swiftly as possible.","插上四根小棒子當腳之後，小黃瓜就變成一匹馬，讓靈魂能儘快抵達。"],
    ["An eggplant, by contrast, becomes a slow-moving cow, which ensures that the spirits can linger on their journey back, weighed down by the gifts they have received.","相反地，茄子變成走得慢的牛，確保靈魂在回程路上能多逗留一會兒，因為他們背著收到的禮物。"],
    ["As the festival draws to a close, glowing lanterns are set afloat on rivers in some regions, gently guiding the spirits back to the other world.","節日接近尾聲時，有些地區會把發亮的燈籠放到河面上，輕柔地引領靈魂回到另一個世界。"],
    ["Thousands of kilometers away, the Malagasy people of Madagascar honor their dead in a far more hands-on manner.","在數千公里之外，馬達加斯加的馬拉加西人用更「親手」的方式紀念亡者。"],
    ["Known as Famadihana, which literally means \"the turning of the bones,\" the ceremony is typically held every five to seven years during the dry winter months.","這個儀式叫做 Famadihana，字面意思是「翻轉屍骨」，通常每五到七年、在乾燥的冬季舉行。"],
    ["Relatives travel from across the country to the family tomb, where they carefully remove their ancestors' remains and rewrap them in fresh silk shrouds.","親戚們從全國各地來到家族墳墓，小心取出祖先的遺骸，再用新的絲質裹屍布重新包好。"],
    ["Far from being a somber occasion, the gathering is filled with live music and dancing, as family members lift the bodies onto their shoulders and whirl them around.","這場聚會一點也不沉重，而是充滿現場音樂與舞蹈；家族成員把遺體扛上肩膀，帶著他們旋轉起舞。"],
    ["While outsiders may find the ritual unsettling, participants regard it as an expression of gratitude and a chance to share the latest family news with their ancestors.","外人也許會覺得這個儀式令人不安，參與者卻把它看作表達感謝的方式，也是向祖先報告家族近況的機會。"],
    ["Whether through floating lanterns or joyful dances, these customs reflect a shared conviction: death may separate families, but it cannot break the bonds between them.","無論是透過漂流的燈籠還是歡樂的舞蹈，這些習俗都反映了同一個信念：死亡或許會讓家人分開，卻無法切斷彼此之間的羈絆。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3],[4,5,6],[7,8,9,10],[11,12]], figs:{2:"horse",3:"fama"}, heads:{1:"Obon: Hospitality for the Departed",3:"Famadihana: A Reunion With the Departed"},
   sents:[
    ["Few celebrations have captured the global imagination quite like Mexico's Day of the Dead, whose marigold-strewn altars and sugar skulls have migrated from village cemeteries to cinema screens and fashion runways.","很少有節慶像墨西哥的亡靈節那樣擄獲全世界的想像；它鋪滿萬壽菊的祭壇和糖做的骷髏，已經從鄉村墓地一路走進電影銀幕和時裝伸展台。"],
    ["Its fame, however, has tended to obscure a broader truth: across cultures, the boundary between the living and the dead has long been regarded as porous rather than absolute.","然而，它的盛名往往掩蓋了一個更普遍的事實：在許多文化裡，生者與亡者之間的界線長久以來被視為可以穿越的，而不是絕對的。"],
    ["Nowhere is this conviction more tenderly expressed than in Japan, where Obon, a midsummer observance rooted in Buddhist tradition, prompts an annual exodus from crowded cities to ancestral hometowns.","這個信念在日本表達得最為溫柔：盂蘭盆節是植根於佛教傳統的仲夏祭儀，每年都引發一波從擁擠城市返回祖籍故鄉的人潮。"],
    ["Graves are scrubbed, lanterns are hung, and household altars are laden with fruit, rice and incense, all in preparation for the spirits, who are thought to return for a fleeting visit.","墳墓被刷洗乾淨、燈籠掛起，家中的祭壇擺滿水果、米飯和線香，一切都是為了迎接被認為會短暫回家的靈魂。"],
    ["Among the most endearing of these preparations is the shoryo-uma, or \"spirit vehicle.\"","這些準備裡最惹人憐愛的，莫過於「精靈馬」，也就是「靈魂的坐騎」。"],
    ["A cucumber propped up on four sticks is fashioned into a horse so that the ancestors may hasten home, whereas an eggplant is turned into a plodding cow, ensuring that their departure is unhurried and that they can carry back the abundant offerings bestowed upon them.","用四根小棒子撐起的小黃瓜被做成一匹馬，好讓祖先能盡快趕回家；茄子則被做成一頭慢吞吞的牛，確保他們離開時不疾不徐，還能把人們獻上的豐盛供品帶回去。"],
    ["Once the festivities have run their course, lanterns are released onto rivers in certain regions, their flickering lights escorting the visitors back to the realm from which they came.","慶典告一段落後，某些地區會把燈籠放入河中，搖曳的燈光護送這些訪客回到他們來時的國度。"],
    ["If Obon treats the dead as honored guests, the Famadihana of Madagascar treats them as participants.","如果說盂蘭盆節把亡者當成貴客，那麼馬達加斯加的翻屍節則是把他們當成參與者。"],
    ["Practiced chiefly in the central highlands and typically held every five to seven years during the dry winter months, the ceremony, whose name translates as \"the turning of the bones,\" begins with the opening of the family tomb.","這個儀式主要在中部高地舉行，通常每五到七年一次、在乾燥的冬季進行；它的名稱可以翻成「翻轉屍骨」，而儀式就從打開家族墳墓開始。"],
    ["The remains of ancestors are carried out, swathed in fresh silk shrouds and, to the accompaniment of brass bands, hoisted onto the shoulders of relatives, who dance with them in exuberant circles.","祖先的遺骸被抬出來，裹上嶄新的絲質裹屍布，接著在銅管樂隊的伴奏下被親戚們扛上肩膀，大家興高采烈地帶著他們繞圈起舞。"],
    ["Far from being macabre, the occasion is marked by laughter, feasting and the recounting of family news, as though the deceased had merely been away on a long journey.","這個場合一點也不陰森，反而充滿笑聲、宴飲和家族近況的分享，彷彿亡者只是出了一趟遠門。"],
    ["To an outside observer, such intimacy with the dead may seem unsettling, even taboo.","對外來的旁觀者來說，和亡者這麼親近，也許令人不安，甚至像是禁忌。"],
    ["Yet what unites these rituals is not so much a preoccupation with death as an insistence on continuity: the dead, they suggest, remain family, and to forget them would be the true loss.","然而，串連起這些儀式的，與其說是對死亡的執著，不如說是對延續的堅持：它們彷彿在說，亡者依然是家人，而遺忘他們才是真正的失去。"]
 ]}
];

const GLOSS = {
  spirit:["n.","靈魂；鬼魂"], ancestor:["n.","祖先"], lantern:["n.","燈籠"], tomb:["n.","墳墓"], grave:["n.","墳墓"],
  cucumber:["n.","小黃瓜"], eggplant:["n.","茄子"], wrap:["v.","包裹"], celebrate:["v.","慶祝"], guide:["v.","引導；帶領"],
  custom:["n.","習俗"], remains:["n.","遺骸"], relative:["n.","親戚"], joyful:["adj.","歡樂的"], reunion:["n.","團聚"],
  float:["v.","漂浮"], afloat:["adv.","漂浮著"], linger:["v.","逗留；徘徊"], honor:["v.","尊敬；紀念"],
  participant:["n.","參與者"], outsider:["n.","外人"], shocking:["adj.","令人震驚的"], bond:["n.","情感連結；羈絆"],
  connection:["n.","連結；關係"], literally:["adv.","字面上地"], charming:["adj.","迷人的；可愛的"], festival:["n.","節慶"],
  belief:["n.","信念"], cloth:["n.","布"], silk:["n.","絲綢"], gather:["v.","聚集"], tradition:["n.","傳統"],
  hometown:["n.","故鄉"], journey:["n.","旅程"], glowing:["adj.","發光的"], gently:["adv.","輕柔地"], roughly:["adv.","大約"],
  practice:["v.","實行（習俗）；練習"], remove:["v.","取出；移除"], involve:["v.","包含；涉及"], speedy:["adj.","快速的"],
  invite:["v.","邀請"], strange:["adj.","奇怪的"], halfway:["adv.","在中途；一半"], bone:["n.","骨頭"], band:["n.","樂團"],
  holiday:["n.","節日；假日"], tiny:["adj.","很小的"], meanwhile:["adv.","同時；在此期間"], whether:["conj.","無論是…（或…）"],
  living:["n.","the living 生者"], dead:["adj./n.","死的；the dead 亡者"], die:["v.","死亡"], believe:["v.","相信"],
  welcome:["v.","歡迎；迎接"], return:["v.","返回"], vegetable:["n.","蔬菜"], shoulder:["n.","肩膀"],
  describe:["v.","描述"], arrive:["v.","抵達"], allow:["v.","允許；讓"], carry:["v.","攜帶；抱著"], fresh:["adj.","新的；新鮮的"],
  island:["n.","島嶼"], scary:["adj.","可怕的"], stick:["n.","小棍子；小棒子"], body:["n.","身體；遺體"], member:["n.","成員"],
  attract:["v.","吸引"], colorful:["adj.","色彩繽紛的"], connected:["adj.","有連結的"], prepare:["v.","準備"], according:["prep.","according to 根據"],
  common:["adj.","常見的"], add:["v.","加上"], meant:["adj.","be meant to 目的是…"], place:["v.","放置"], carefully:["adv.","小心地"],
  ceremony:["n.","儀式；典禮"], frightening:["adj.","令人害怕的"], however:["adv.","然而"], visitor:["n.","遊客"], create:["v.","創造；發展出"],
  recognizable:["adj.","容易辨認的；有辨識度的"], marigold:["n.","萬壽菊"], skull:["n.","頭骨；骷髏"], disappear:["v.","消失"], simply:["adv.","僅僅；就此"],
  share:["v.","分享；共同參與"], buddhist:["adj.","佛教的"], influenced:["adj.","受…影響的"], tidy:["v.","整理；打掃"], ancestral:["adj.","祖先的"],
  doorstep:["n.","門口台階"], offering:["n.","供品；祭品"], brief:["adj.","短暫的"], ordinary:["adj.","普通的"], insert:["v.","插入"],
  transform:["v.","使轉變"], swiftly:["adv.","迅速地"], contrast:["n.","by contrast 相反地"], ensure:["v.","確保"], weigh:["v.","weigh down 使負重"],
  close:["n.","draw to a close 接近尾聲"], region:["n.","地區"], manner:["n.","方式"], typically:["adv.","通常；典型地"], shroud:["n.","裹屍布"],
  somber:["adj.","陰沉的；嚴肅的"], occasion:["n.","場合"], gathering:["n.","聚會"], whirl:["v.","旋轉"], unsettling:["adj.","令人不安的"],
  ritual:["n.","儀式"], regard:["v.","regard A as B 把 A 看作 B"], expression:["n.","表達"], gratitude:["n.","感激"], latest:["adj.","最新的"],
  reflect:["v.","反映"], conviction:["n.","堅定的信念"], separate:["v.","使分開"], kilometer:["n.","公里"], rewrap:["v.","重新包裹"],
  imagination:["n.","想像力"], strewn:["adj.","撒滿…的"], altar:["n.","祭壇"], migrate:["v.","遷移；轉移"], runway:["n.","伸展台"],
  cemetery:["n.","墓地"], obscure:["v.","掩蓋；使模糊"], broad:["adj.","廣泛的"], boundary:["n.","界線"], porous:["adj.","可穿透的；有漏洞的"],
  absolute:["adj.","絕對的"], tenderly:["adv.","溫柔地"], observance:["n.","（宗教）儀式；奉行"], rooted:["adj.","植根於…的"], prompt:["v.","引發；促使"],
  exodus:["n.","大批離開；人潮外移"], crowded:["adj.","擁擠的"], scrubbed:["v.","刷洗（scrub）"], laden:["adj.","滿載的"], incense:["n.","香；線香"],
  preparation:["n.","準備"], fleeting:["adj.","短暫的；轉瞬即逝的"], endearing:["adj.","惹人憐愛的"], vehicle:["n.","交通工具；坐騎"], propped:["v.","prop up 撐起"],
  fashion:["v.","製作；塑造"], hasten:["v.","趕緊；加速"], whereas:["conj.","然而；而"], plodding:["adj.","步履沉重的；慢吞吞的"], departure:["n.","離開"],
  unhurried:["adj.","不慌不忙的"], abundant:["adj.","豐富的"], bestow:["v.","贈與；給予"], festivity:["n.","慶祝活動"], course:["n.","run its course 告一段落"],
  release:["v.","放出；釋放"], flicker:["v.","閃爍；搖曳"], escort:["v.","護送"], realm:["n.","國度；領域"], chiefly:["adv.","主要地"],
  highland:["n.","高地"], translate:["v.","翻譯"], swathe:["v.","包裹"], accompaniment:["n.","伴奏"], brass:["n.","銅管（樂器）"],
  hoist:["v.","舉起；扛起"], exuberant:["adj.","興高采烈的"], macabre:["adj.","陰森的；以死亡為題的"], feast:["v.","宴飲"], recount:["v.","敘述"],
  deceased:["n.","the deceased 亡者"], merely:["adv.","只是；僅僅"], observer:["n.","觀察者；旁觀者"], intimacy:["n.","親密"], taboo:["n.","禁忌"],
  unite:["v.","使團結；串連"], preoccupation:["n.","執著；全神貫注"], insistence:["n.","堅持"], continuity:["n.","延續；連續性"], departed:["n.","the departed 亡者"],
  hospitality:["n.","款待；好客"], honored:["adj.","受尊敬的"], guest:["n.","客人"], capture:["v.","擄獲；捕捉"], global:["adj.","全球的"],
  obon:["n.","盂蘭盆節（日本夏季祭祖節日）"], famadihana:["n.","翻屍節（馬達加斯加的祭祖習俗）"],
  madagascar:["n.","馬達加斯加（非洲東南方島國）"], malagasy:["adj./n.","馬拉加西人（的）"], mexico:["n.","墨西哥"]
};
const KEY = [["spirit","ancestor","lantern","tomb","cucumber","eggplant","welcome","wrap","cloth","island"],
             ["recognizable","ancestral","offering","transform","linger","literally","shroud","somber","unsettling","gratitude","conviction","bond"],
             ["obscure","porous","observance","exodus","laden","fleeting","endearing","hasten","plodding","bestow","realm","exuberant","macabre","preoccupation","continuity"]];
const FIGS = {
  horse:{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Syoryou-uma,obon,katori-city,japan.JPG?width=1280", local:"spirits-horse.jpg", alt:"A cucumber horse and an eggplant cow for Obon", fb:"（小黃瓜馬和茄子牛的照片）",
    cap:"小黃瓜做的馬和茄子做的牛，腳是用竹籤或免洗筷插成的。",
    credit:'Photo: katorisi, via <a href="https://commons.wikimedia.org/wiki/File:Syoryou-uma,obon,katori-city,japan.JPG" target="_blank" rel="noopener">Wikimedia Commons</a>'},
  fama:{svg:`<svg viewBox="0 0 600 400" role="img" aria-label="Illustration: a brass band plays and relatives dance in the highlands of Madagascar" style="display:block;width:100%;height:auto;border-radius:6px">
<defs><linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd3f0"/><stop offset="1" stop-color="#e8f5fb"/></linearGradient></defs>
<rect width="600" height="400" fill="url(#fsky)"/>
<circle cx="500" cy="70" r="34" fill="#FFE14D"/>
<path d="M0 230 C90 170 170 200 250 180 S420 150 600 190 V400 H0Z" fill="#8cc084"/>
<path d="M0 260 C120 230 260 250 360 235 S520 225 600 240 V400 H0Z" fill="#6aa96a"/>
<path d="M0 300 C200 285 420 290 600 300 V400 H0Z" fill="#c9a36b"/>
<g transform="translate(470,170)"><rect x="0" y="20" width="80" height="50" fill="#f3ead8"/><path d="M-6 22 L40 -4 L86 22Z" fill="#b5462e"/><rect x="32" y="40" width="16" height="30" fill="#7a5a3a"/></g>
<g stroke="#1A2238" stroke-width="2" stroke-linecap="round"><path d="M60 180 V300"/><path d="M200 175 V300"/><path d="M380 182 V300"/></g>
<path d="M60 182 l46 8 -46 10Z" fill="#D23F57"/><path d="M200 177 l46 8 -46 10Z" fill="#FFE14D"/><path d="M380 184 l46 8 -46 10Z" fill="#17875C"/>
<!-- band -->
<g transform="translate(70,250)">
 <circle cx="20" cy="0" r="11" fill="#7a4a2a"/><path d="M8 12 h24 l6 50 h-36Z" fill="#ffffff"/><path d="M4 30 q16 -6 32 0 v8 q-16 -6 -32 0Z" fill="#D23F57"/>
 <path d="M30 16 l26 -8" stroke="#E8B500" stroke-width="4" stroke-linecap="round"/><path d="M56 8 l10 -6 v14Z" fill="#E8B500"/>
 <rect x="10" y="62" width="7" height="22" fill="#3b2a1a"/><rect x="23" y="62" width="7" height="22" fill="#3b2a1a"/>
</g>
<g transform="translate(140,256)">
 <circle cx="18" cy="0" r="10" fill="#5b3a22"/><path d="M6 11 h24 l5 46 h-34Z" fill="#2E5AA8"/>
 <circle cx="18" cy="40" r="14" fill="#E8B500" stroke="#8a5a12" stroke-width="2"/><path d="M4 20 l-12 -10 M32 20 l12 -10" stroke="#5b3a22" stroke-width="4" stroke-linecap="round"/>
 <rect x="9" y="57" width="7" height="22" fill="#3b2a1a"/><rect x="21" y="57" width="7" height="22" fill="#3b2a1a"/>
</g>
<!-- dancers -->
<g transform="translate(250,236)">
 <circle cx="20" cy="0" r="12" fill="#7a4a2a"/><path d="M4 14 q16 -4 32 0 l10 60 h-52Z" fill="#FFE14D"/><path d="M0 40 q20 8 40 0" stroke="#D23F57" stroke-width="5" fill="none"/>
 <path d="M6 18 l-20 -26 M34 18 l18 -28" stroke="#7a4a2a" stroke-width="5" stroke-linecap="round"/>
 <rect x="10" y="74" width="7" height="18" fill="#3b2a1a"/><rect x="24" y="74" width="7" height="18" fill="#3b2a1a" transform="rotate(12 27 74)"/>
</g>
<g transform="translate(330,244)">
 <circle cx="18" cy="0" r="11" fill="#5b3a22"/><path d="M4 12 h28 l8 56 h-44Z" fill="#17875C"/><path d="M0 30 h36" stroke="#fff" stroke-width="4"/>
 <path d="M5 16 l-22 -14 M31 16 l20 -24" stroke="#5b3a22" stroke-width="5" stroke-linecap="round"/>
 <rect x="8" y="68" width="7" height="18" fill="#3b2a1a" transform="rotate(-10 11 68)"/><rect x="22" y="68" width="7" height="18" fill="#3b2a1a"/>
</g>
<g transform="translate(410,240)">
 <circle cx="20" cy="0" r="12" fill="#7a4a2a"/><path d="M4 14 q16 -4 32 0 l10 60 h-52Z" fill="#D23F57"/><path d="M-2 46 q22 8 44 0" stroke="#FFE14D" stroke-width="5" fill="none"/>
 <path d="M6 18 l-18 -28 M34 18 l22 -22" stroke="#7a4a2a" stroke-width="5" stroke-linecap="round"/>
 <rect x="11" y="74" width="7" height="18" fill="#3b2a1a"/><rect x="24" y="74" width="7" height="18" fill="#3b2a1a"/>
</g>
<g transform="translate(495,252)">
 <circle cx="15" cy="0" r="9" fill="#5b3a22"/><path d="M3 10 h24 l6 44 h-36Z" fill="#9a5bb5"/>
 <path d="M4 14 l-14 -20 M26 14 l14 -20" stroke="#5b3a22" stroke-width="4" stroke-linecap="round"/>
 <rect x="7" y="54" width="6" height="16" fill="#3b2a1a"/><rect x="18" y="54" width="6" height="16" fill="#3b2a1a"/>
</g>
<g fill="#1A2238"><path d="M120 225 q4 -10 8 0 v14 q-4 4 -8 0Z" opacity=".0"/></g>
<g font-family="serif" font-size="22" fill="#1A2238" opacity=".75"><text x="110" y="226">♪</text><text x="300" y="206">♫</text><text x="470" y="216">♪</text></g>
</svg>`,
    cap:"馬達加斯加的翻屍節：銅管樂隊演奏，親友們一起跳舞，是熱鬧的家族團聚。",
    credit:"插圖：Winglish"}
};
const QUIZ = [
  { q:"1. What is the passage mainly about?", tag:"主旨",
    opts:["How to make animals out of vegetables","Different ways people welcome back the spirits of the dead","Why Mexico's Day of the Dead is famous","How to travel to Japan and Madagascar"],
    a:1, exp:"文章介紹日本盂蘭盆節和馬達加斯加翻屍節兩種迎接亡靈的方式，所以主旨是 (B)。(A) 只是盂蘭盆節裡的一個細節。"},
  { q:"2. Which of the following is TRUE?", tag:"細節",
    opts:["The eggplant cow carries the spirits home quickly.","Families in Madagascar open the tomb every year.","Paper lanterns are put on rivers to say goodbye to the spirits.","Famadihana is a sad and quiet ceremony."],
    a:2, exp:"(C) 正確：節日最後把燈籠放到河上送靈魂回去。(A) 茄子牛是「慢慢」載回去；(B) 是每隔幾年，不是每年；(D) 翻屍節是歡樂、有音樂跳舞的家族團聚。"},
  { q:"3. Why do people in Japan make a cucumber horse?", tag:"推論",
    opts:["To cook it for dinner","So the spirits can come home fast","So the spirits can leave slowly","To give children a toy"],
    a:1, exp:"馬跑得快，小黃瓜馬是讓祖先的靈魂「快點回家」。慢慢離開的是茄子做的牛。"}
];


const META = {
 "id": "spirits",
 "title": "When Spirits Come Home",
 "category": "文化節慶",
 "dek": "小黃瓜做成馬、茄子做成牛，還有抱著祖先跳舞的節日？從亡靈節出發，看看世界各地怎麼迎接亡靈回家。",
 "date": "2026/11/1",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1761139844053-48346487b456?auto=format&fit=crop&w=1600&q=70\" data-local=\"spirits-lanterns.jpg\" alt=\"Floating paper lanterns glowing on dark water at night\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\">\n      <svg viewBox=\"0 0 800 420\" aria-hidden=\"true\">\n        <defs>\n          <linearGradient id=\"sk\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#121a33\"/><stop offset=\".7\" stop-color=\"#3B4670\"/><stop offset=\"1\" stop-color=\"#55608c\"/></linearGradient>\n          <linearGradient id=\"rv\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#2a3563\"/><stop offset=\"1\" stop-color=\"#151c38\"/></linearGradient>\n          <radialGradient id=\"gl\"><stop offset=\"0\" stop-color=\"#FFE14D\" stop-opacity=\".95\"/><stop offset=\".5\" stop-color=\"#FFB84D\" stop-opacity=\".35\"/><stop offset=\"1\" stop-color=\"#FFB84D\" stop-opacity=\"0\"/></radialGradient>\n          <linearGradient id=\"refl\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#FFE14D\" stop-opacity=\".5\"/><stop offset=\"1\" stop-color=\"#FFE14D\" stop-opacity=\"0\"/></linearGradient>\n        </defs>\n        <rect width=\"800\" height=\"420\" fill=\"url(#sk)\"/>\n        <g fill=\"#fff\"><circle cx=\"60\" cy=\"40\" r=\"1.6\" opacity=\".8\"/><circle cx=\"150\" cy=\"90\" r=\"1.1\" opacity=\".6\"/><circle cx=\"250\" cy=\"30\" r=\"1.8\" opacity=\".8\"/><circle cx=\"360\" cy=\"70\" r=\"1\" opacity=\".6\"/><circle cx=\"470\" cy=\"24\" r=\"1.5\" opacity=\".8\"/><circle cx=\"560\" cy=\"96\" r=\"1\" opacity=\".5\"/><circle cx=\"740\" cy=\"50\" r=\"1.6\" opacity=\".8\"/><circle cx=\"420\" cy=\"120\" r=\".9\" opacity=\".5\"/></g>\n        <circle cx=\"650\" cy=\"88\" r=\"40\" fill=\"#FFF6C9\"/><circle cx=\"667\" cy=\"77\" r=\"37\" fill=\"#1b2445\"/>\n        <path d=\"M0 210 C70 170 140 180 210 196 S330 150 420 176 S560 150 640 172 S760 160 800 170 V250 H0Z\" fill=\"#0f1529\"/>\n        <g fill=\"#0f1529\"><rect x=\"96\" y=\"178\" width=\"5\" height=\"22\"/><path d=\"M84 182 h30 l-6 -8 h-18Z\"/><rect x=\"560\" y=\"160\" width=\"4\" height=\"18\"/><path d=\"M548 163 h28 l-5 -7 h-18Z\"/></g>\n        <path d=\"M0 240 C200 228 600 228 800 240 V420 H0Z\" fill=\"url(#rv)\"/>\n        <g stroke=\"#6b78ad\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\".55\"><path d=\"M40 300 h80\"/><path d=\"M300 330 h120\"/><path d=\"M560 360 h90\"/><path d=\"M180 390 h70\"/><path d=\"M660 296 h60\"/><path d=\"M460 290 h50\"/></g>\n        <!-- lanterns -->\n        <g>\n          <circle cx=\"170\" cy=\"300\" r=\"56\" fill=\"url(#gl)\"/><rect x=\"160\" y=\"316\" width=\"22\" height=\"50\" rx=\"6\" fill=\"url(#refl)\"/>\n          <rect x=\"148\" y=\"276\" width=\"44\" height=\"40\" rx=\"4\" fill=\"#FFF0C2\"/><rect x=\"148\" y=\"276\" width=\"44\" height=\"7\" fill=\"#C9483A\"/><rect x=\"142\" y=\"314\" width=\"56\" height=\"10\" rx=\"2\" fill=\"#7a4a22\"/>\n          <circle cx=\"400\" cy=\"342\" r=\"64\" fill=\"url(#gl)\"/><rect x=\"388\" y=\"360\" width=\"26\" height=\"56\" rx=\"6\" fill=\"url(#refl)\"/>\n          <rect x=\"374\" y=\"314\" width=\"52\" height=\"46\" rx=\"4\" fill=\"#FFF0C2\"/><rect x=\"374\" y=\"314\" width=\"52\" height=\"8\" fill=\"#C9483A\"/><rect x=\"367\" y=\"358\" width=\"66\" height=\"11\" rx=\"2\" fill=\"#7a4a22\"/>\n          <circle cx=\"600\" cy=\"290\" r=\"44\" fill=\"url(#gl)\"/><rect x=\"592\" y=\"302\" width=\"18\" height=\"40\" rx=\"5\" fill=\"url(#refl)\"/>\n          <rect x=\"584\" y=\"272\" width=\"34\" height=\"30\" rx=\"3\" fill=\"#FFF0C2\"/><rect x=\"584\" y=\"272\" width=\"34\" height=\"6\" fill=\"#C9483A\"/><rect x=\"579\" y=\"300\" width=\"44\" height=\"8\" rx=\"2\" fill=\"#7a4a22\"/>\n          <circle cx=\"720\" cy=\"330\" r=\"40\" fill=\"url(#gl)\"/><rect x=\"706\" y=\"314\" width=\"28\" height=\"26\" rx=\"3\" fill=\"#FFF0C2\"/><rect x=\"706\" y=\"314\" width=\"28\" height=\"5\" fill=\"#C9483A\"/><rect x=\"702\" y=\"338\" width=\"36\" height=\"7\" rx=\"2\" fill=\"#7a4a22\"/>\n          <circle cx=\"60\" cy=\"350\" r=\"36\" fill=\"url(#gl)\"/><rect x=\"48\" y=\"336\" width=\"24\" height=\"22\" rx=\"3\" fill=\"#FFF0C2\"/><rect x=\"48\" y=\"336\" width=\"24\" height=\"5\" fill=\"#C9483A\"/><rect x=\"44\" y=\"356\" width=\"32\" height=\"6\" rx=\"2\" fill=\"#7a4a22\"/>\n        </g>\n        <!-- cucumber horse & eggplant cow on the bank -->\n        <g transform=\"translate(250,196)\">\n          <path d=\"M4 18 C14 6 54 4 70 12 C76 15 76 22 70 24 C52 30 16 30 6 26 C0 24 0 21 4 18Z\" fill=\"#4f9a55\"/>\n          <path d=\"M70 12 c6 -4 10 -10 9 -16\" stroke=\"#3a7a40\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/>\n          <g stroke=\"#d8c08a\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M16 27 l-2 16\"/><path d=\"M28 29 l1 15\"/><path d=\"M50 29 l-1 15\"/><path d=\"M62 27 l3 15\"/></g>\n          <g fill=\"#7fc184\" opacity=\".7\"><circle cx=\"24\" cy=\"15\" r=\"1.4\"/><circle cx=\"40\" cy=\"12\" r=\"1.4\"/><circle cx=\"56\" cy=\"14\" r=\"1.4\"/></g>\n        </g>\n        <g transform=\"translate(470,186)\">\n          <ellipse cx=\"38\" cy=\"22\" rx=\"38\" ry=\"17\" fill=\"#5a2c6e\"/><ellipse cx=\"26\" cy=\"15\" rx=\"14\" ry=\"5\" fill=\"#7d4a93\" opacity=\".6\"/>\n          <path d=\"M74 16 c8 -2 12 -8 12 -14 c-6 2 -10 4 -13 8\" fill=\"#3f8a46\"/>\n          <g stroke=\"#d8c08a\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M16 34 v14\"/><path d=\"M30 37 v12\"/><path d=\"M48 37 v12\"/><path d=\"M62 34 v14\"/></g>\n        </g>\n      </svg>\n      <figcaption>盂蘭盆節的最後一晚，有些地方會把燈籠放到河上，送祖先的靈魂回去。<span class=\"credit\">Photo: Maximilian Brol / Unsplash</span></figcaption>",
 "fact": "小黃瓜馬和茄子牛在日文叫「精霊馬」。節日結束後，傳統上會把它們放進河裡流走或燒掉，不會拿來吃喔！",
 "next": {
  "title": "Three Hearts and Blue Blood",
  "href": "read.html#octopus"
 }
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
