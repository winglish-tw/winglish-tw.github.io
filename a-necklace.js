/* winglish.tw 閱讀館文章資料：The Necklace: Ten Years for One Night（經典文學：莫泊桑〈項鍊〉） */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1],[2,3,4,5,6,7],[8,9,10,11],[12,13,14]], figs:{3:"price"}, heads:{1:"A Beautiful Night",2:"A Terrible Mistake",3:"The Surprise Ending"},
   sents:[
    ["Can one night at a party change your whole life?","一個晚上的派對，能改變你的一生嗎？"],
    ["In \"The Necklace,\" a famous short story by the French writer Guy de Maupassant, it does.","在法國作家莫泊桑的著名短篇小說〈項鍊〉裡，答案是可以。"],
    ["Mathilde is a pretty young woman, but her family is not rich.","瑪蒂德是個漂亮的年輕女子，可是她家並不富有。"],
    ["Her husband is a clerk, and they live in a small, plain apartment in Paris.","她的丈夫是個小職員，他們住在巴黎一間又小又樸素的公寓裡。"],
    ["Mathilde always dreams of a life with fine clothes and jewelry.","瑪蒂德總是夢想著有漂亮衣服和珠寶的生活。"],
    ["One day, her husband brings home an invitation to a fancy party.","有一天，她的丈夫帶回一張高級舞會的邀請函。"],
    ["Mathilde buys a new dress and borrows a diamond necklace from a rich friend.","瑪蒂德買了一件新禮服，又向一位有錢的朋友借了一條鑽石項鍊。"],
    ["At the party, she is the most beautiful woman there, and everyone wants to dance with her.","在舞會上，她是全場最美的女人，每個人都想和她跳舞。"],
    ["But when she gets home, the necklace is gone!","可是回到家，項鍊竟然不見了！"],
    ["The couple cannot find it anywhere.","夫妻倆怎麼找都找不到。"],
    ["They borrow a lot of money and buy a new necklace that looks the same.","他們借了一大筆錢，買了一條看起來一模一樣的新項鍊。"],
    ["Then they work very hard for ten years to pay back the money.","接下來，他們辛苦工作了整整十年，才把錢還清。"],
    ["One day, Mathilde meets her rich friend again and tells her the truth.","有一天，瑪蒂德又遇到那位有錢的朋友，把實話告訴了她。"],
    ["Her friend is shocked: the first necklace was fake and worth very little!","朋友大吃一驚：原來那條項鍊是假的，根本不值什麼錢！"],
    ["Was it bad luck, or did Mathilde's pride cost her ten years?","這是運氣不好，還是瑪蒂德的虛榮和自尊讓她賠上了十年？"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1],[2,3,4,5,6],[7,8,9,10,11],[12,13,14,15,16]], figs:{3:"price"}, heads:{1:"Dreams of a Richer Life",2:"One Night, Ten Years",3:"The Twist"},
   sents:[
    ["Published in a Paris newspaper in 1884, Guy de Maupassant's \"The Necklace\" is famous for one of the most surprising endings in literature.","莫泊桑的〈項鍊〉1884 年刊登在巴黎的一份報紙上，以文學史上最出人意料的結局之一聞名。"],
    ["Its message is simple but powerful: things are not always what they seem.","它要說的道理簡單卻有力：事情不一定是表面看起來的樣子。"],
    ["Mathilde Loisel is charming and pretty, but she was born into a family of clerks and married a clerk in the Ministry of Education.","瑪蒂德．羅瓦賽迷人又漂亮，但她出生在小職員家庭，也嫁給了教育部的一個小職員。"],
    ["She feels she deserves luxury, so she is always unhappy with her simple home.","她覺得自己應該過奢華的生活，所以總是不滿意自己簡樸的家。"],
    ["When her husband proudly brings home an invitation to a grand ball, she bursts into tears because she has nothing to wear.","丈夫得意地帶回一張盛大舞會的邀請函，她卻因為沒有衣服可穿而哭了出來。"],
    ["He gives her the 400 francs he had been saving to buy a gun, and she gets a lovely dress.","他把原本存來買獵槍的 400 法郎給了她，她買到一件漂亮的禮服。"],
    ["Still, she wants jewels, so she borrows a sparkling diamond necklace from her wealthy friend, Madame Forestier.","可是她還想要珠寶，就向有錢的朋友佛雷斯蒂埃太太借了一條閃閃發亮的鑽石項鍊。"],
    ["At the ball, Mathilde is a great success.","在舞會上，瑪蒂德大受歡迎。"],
    ["But at home, she discovers that the necklace is missing.","可是一回到家，她發現項鍊不見了。"],
    ["Too ashamed to tell her friend, the couple replace it with a similar one that costs 36,000 francs.","夫妻倆羞於向朋友坦白，就買了一條相似的項鍊來替代，花了 36,000 法郎。"],
    ["To pay for it, they borrow money from everyone they know.","為了付這筆錢，他們向每一個認識的人借錢。"],
    ["For the next ten years, they live in poverty: Mathilde washes dishes, carries water and bargains over every coin, and she gradually loses her beauty.","接下來的十年，他們過著貧窮的日子：瑪蒂德洗碗、提水、每一分錢都要討價還價，美貌也漸漸消失了。"],
    ["Finally, with every debt paid, Mathilde meets Madame Forestier in the street.","終於，所有的債都還清了；瑪蒂德在街上遇到了佛雷斯蒂埃太太。"],
    ["Her friend hardly recognizes her.","朋友幾乎認不出她來。"],
    ["Proudly, Mathilde explains what happened.","瑪蒂德帶著幾分驕傲，說出了事情的經過。"],
    ["Shocked, Madame Forestier takes her hands: the original necklace was fake, worth at most 500 francs.","佛雷斯蒂埃太太震驚地握住她的雙手：原本那條項鍊是假的，最多只值 500 法郎。"],
    ["The story ends there, leaving readers to imagine how Mathilde feels.","故事就在這裡結束，讓讀者自己去想像瑪蒂德的心情。"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12,13,14]], figs:{3:"price"}, heads:{1:"The Price of Appearances",2:"A Decade of Debt",3:"A Single Line"},
   sents:[
    ["When \"The Necklace\" appeared in the Paris daily Le Gaulois on February 17, 1884, readers were stunned by its final line, and the story has remained a model of the twist ending ever since.","1884 年 2 月 17 日，〈項鍊〉刊登在巴黎的《高盧人報》上，讀者被它的最後一句話震住了；從那時起，這篇小說一直是「逆轉結局」的典範。"],
    ["Its author, Guy de Maupassant, a student of the novelist Gustave Flaubert, published nearly three hundred short stories in about a decade, and this remains perhaps the most celebrated of them all.","作者莫泊桑是小說家福樓拜的學生，大約十年間發表了將近三百篇短篇小說，而這篇也許是其中最有名的一篇。"],
    ["The heroine, Mathilde Loisel, is convinced she was born for elegance, yet she is trapped, by what she sees as a mistake of fate, in a family of clerks.","女主角瑪蒂德．羅瓦賽深信自己生來就該過優雅的生活，卻被她眼中命運的錯誤，困在一個小職員的家庭裡。"],
    ["Her modest apartment, her worn furniture and even her kind, contented husband feed a constant sense of humiliation.","簡陋的公寓、破舊的家具，甚至她那知足又善良的丈夫，都不斷加深她的屈辱感。"],
    ["When an invitation to a ministry ball arrives, her husband sacrifices the money he had set aside for a hunting rifle, and Mathilde borrows what she believes is a diamond necklace from her wealthy school friend, Madame Forestier.","部裡舞會的邀請函寄來時，丈夫犧牲了原本存來買獵槍的錢；瑪蒂德則向有錢的老同學佛雷斯蒂埃太太，借來一條她以為是鑽石的項鍊。"],
    ["For one evening, she enjoys exactly the admiration she has always craved.","有那麼一個晚上，她享受到了她一直渴望的讚嘆目光。"],
    ["Then the necklace vanishes.","然後，項鍊不見了。"],
    ["Rather than confess the loss, the Loisels secretly buy a nearly identical piece for 36,000 francs, borrowing from moneylenders at ruinous interest.","羅瓦賽夫婦不肯坦白弄丟了項鍊，而是偷偷花 36,000 法郎買了一條幾乎一模一樣的，錢則是向放款人借來的，利息高得嚇人。"],
    ["The next ten years strip Mathilde of every illusion: she dismisses the maid, scrubs floors, haggles with shopkeepers and ages far beyond her years.","接下來的十年，把瑪蒂德的幻想剝得一乾二淨：她辭掉女傭、刷地板、跟店家討價還價，老得遠遠超過實際年齡。"],
    ["Ironically, hardship reveals a quiet courage in her that comfort never did, and she endures her fate with a kind of heroism.","諷刺的是，苦日子讓她顯露出安逸生活從未激發的沉靜勇氣；她以近乎英雄般的姿態，承受了自己的命運。"],
    ["When the debts are finally cleared, Mathilde approaches Madame Forestier with something close to pride.","債務終於還清時，瑪蒂德幾乎帶著驕傲，走向佛雷斯蒂埃太太。"],
    ["Her friend's reply ends the story: the original necklace was paste, worth no more than five hundred francs.","朋友的回答結束了整個故事：原來那條項鍊是人造寶石做的，頂多值五百法郎。"],
    ["Readers still debate the lesson.","讀者至今仍在爭論這個故事的寓意。"],
    ["Is the story a warning against vanity, a critique of a society obsessed with appearances, or a portrait of a woman who was unlucky rather than foolish?","它是在警告虛榮，是在批判一個執著於外表的社會，還是在描寫一個只是運氣不好、而不是愚蠢的女人？"],
    ["The novelist Henry James was so intrigued by the plot that he reversed it in his own story \"Paste\" (1899), in which pearls believed to be fake turn out to be real.","小說家亨利．詹姆斯對這個情節著迷到把它反過來，寫成自己的小說〈人造寶石〉（1899）：在他的故事裡，大家以為是假的珍珠，竟然是真的。"]
 ]}
];

const GLOSS = {
  party:["n.","派對；舞會"], whole:["adj.","整個的"], famous:["adj.","有名的"], french:["adj.","法國的"], writer:["n.","作家"], story:["n.","故事"],
  pretty:["adj.","漂亮的"], rich:["adj.","有錢的"], husband:["n.","丈夫"], clerk:["n.","職員；辦事員"], plain:["adj.","樸素的；簡單的"],
  apartment:["n.","公寓"], dream:["v.","夢想"], fine:["adj.","精緻的；高級的"], jewelry:["n.","珠寶；首飾"], invitation:["n.","邀請；邀請函"],
  fancy:["adj.","高級的；華麗的"], dress:["n.","洋裝；禮服"], borrow:["v.","借（入）"], diamond:["n.","鑽石"], necklace:["n.","項鍊"],
  couple:["n.","夫妻；一對"], anywhere:["adv.","任何地方"], truth:["n.","實話；真相"], shocked:["adj.","震驚的"], fake:["adj.","假的"],
  worth:["adj.","值…的"], luck:["n.","運氣"], pride:["n.","自尊；驕傲；虛榮"], cost:["v.","使付出代價；花費"],
  publish:["v.","出版；刊登"], newspaper:["n.","報紙"], surprising:["adj.","令人驚訝的"], literature:["n.","文學"], message:["n.","寓意；訊息"],
  powerful:["adj.","有力的"], charming:["adj.","迷人的"], ministry:["n.","（政府的）部"], education:["n.","教育"], deserve:["v.","應得"],
  luxury:["n.","奢華；奢侈"], simple:["adj.","簡樸的"], proudly:["adv.","得意地；驕傲地"], grand:["adj.","盛大的；豪華的"], ball:["n.","舞會"],
  burst:["v.","突然…；burst into tears 突然哭出來"], tear:["n.","眼淚"], franc:["n.","法郎（法國舊貨幣）"], lovely:["adj.","可愛的；漂亮的"],
  jewel:["n.","珠寶"], sparkling:["adj.","閃閃發亮的"], wealthy:["adj.","富有的"], success:["n.","成功；受歡迎的人"], discover:["v.","發現"],
  missing:["adj.","不見的；失蹤的"], ashamed:["adj.","感到羞恥的"], replace:["v.","替換；取代"], similar:["adj.","相似的"],
  poverty:["n.","貧窮"], bargain:["v.","討價還價"], coin:["n.","硬幣"], gradually:["adv.","逐漸地"], beauty:["n.","美貌"],
  debt:["n.","債務"], hardly:["adv.","幾乎不"], recognize:["v.","認出"], explain:["v.","解釋"], original:["adj.","原本的；最初的"],
  imagine:["v.","想像"], daily:["n.","日報"], stunned:["adj.","震驚的；愣住的"], model:["n.","典範；模範"], twist:["n.","（情節的）轉折"],
  author:["n.","作者"], novelist:["n.","小說家"], decade:["n.","十年"], celebrated:["adj.","著名的；受讚揚的"], heroine:["n.","女主角"],
  convinced:["adj.","深信的"], elegance:["n.","優雅"], trap:["v.","困住"], fate:["n.","命運"], modest:["adj.","簡樸的；不起眼的"],
  worn:["adj.","破舊的"], furniture:["n.","家具"], contented:["adj.","知足的"], feed:["v.","助長；餵"], constant:["adj.","持續不斷的"],
  humiliation:["n.","屈辱；丟臉"], sacrifice:["v.","犧牲"], rifle:["n.","步槍；獵槍"], admiration:["n.","讚賞；欽佩"], crave:["v.","渴望"],
  vanish:["v.","消失"], confess:["v.","坦白；承認"], loss:["n.","遺失；損失"], secretly:["adv.","偷偷地"], identical:["adj.","一模一樣的"],
  moneylender:["n.","放款人；放高利貸的人"], ruinous:["adj.","毀滅性的；（花費）高得嚇人的"], interest:["n.","利息"], strip:["v.","剝奪；剝去"],
  illusion:["n.","幻想；錯覺"], dismiss:["v.","解雇"], maid:["n.","女傭"], scrub:["v.","用力刷洗"], haggle:["v.","討價還價"],
  shopkeeper:["n.","店主"], age:["v.","變老"], ironically:["adv.","諷刺的是"], hardship:["n.","艱苦；困苦"], reveal:["v.","顯露；揭露"],
  courage:["n.","勇氣"], comfort:["n.","安逸；舒適"], endure:["v.","忍受；承受"], heroism:["n.","英雄氣概"], clear:["v.","還清（債務）"],
  approach:["v.","走近；接近"], reply:["n.","回答"], paste:["n.","（做假寶石的）鉛玻璃；人造寶石"], debate:["v.","爭論；辯論"],
  lesson:["n.","教訓；寓意"], warning:["n.","警告"], vanity:["n.","虛榮"], critique:["n.","批判；評論"], society:["n.","社會"],
  obsessed:["adj.","著迷的；執著的"], appearance:["n.","外表；表象"], portrait:["n.","描寫；肖像"], unlucky:["adj.","不幸的；運氣差的"],
  foolish:["adj.","愚蠢的"], intrigued:["adj.","被吸引的；好奇的"], plot:["n.","情節"], reverse:["v.","反轉；顛倒"], pearl:["n.","珍珠"]
};

const KEY = [["plain","jewelry","invitation","borrow","diamond","couple","truth","shocked","fake","pride"],
             ["charming","luxury","grand","sparkling","wealthy","ashamed","replace","similar","poverty","bargain","recognize","original"],
             ["stunned","celebrated","elegance","humiliation","sacrifice","crave","vanish","identical","ruinous","illusion","haggle","endure","vanity","obsessed"]];

const DEFS = {
  "plain": "simple, with no decoration or special features",
  "jewelry": "objects such as rings and necklaces that people wear for decoration",
  "invitation": "a written or spoken request asking someone to come to an event",
  "borrow": "to take and use something that belongs to someone else, and return it later",
  "diamond": "a very hard, clear, valuable stone used in jewelry",
  "couple": "two people who are married or in a romantic relationship",
  "truth": "the real facts about something",
  "shocked": "very surprised and upset by something unexpected",
  "fake": "not real, but made to look real",
  "pride": "a feeling that you are better or more important than others; also, a feeling of self-respect",
  "charming": "very pleasant and attractive",
  "luxury": "great comfort and expensive things that you do not really need",
  "grand": "large, impressive and important",
  "sparkling": "shining brightly with small flashes of light",
  "wealthy": "having a lot of money or property; rich",
  "ashamed": "feeling embarrassed and guilty because of something you have done",
  "replace": "to get something new to take the place of something lost or broken",
  "similar": "almost the same, but not exactly the same",
  "poverty": "the state of being very poor",
  "bargain": "to argue about the price of something to make it cheaper",
  "recognize": "to know who someone is because you have seen them before",
  "original": "existing at the beginning; the first one, before any copies",
  "stunned": "so surprised or shocked that you cannot react",
  "celebrated": "famous and praised by many people",
  "elegance": "the quality of being stylish, graceful and attractive",
  "humiliation": "a feeling of shame and loss of self-respect",
  "sacrifice": "to give up something valuable in order to help someone or get something else",
  "crave": "to want something very strongly",
  "vanish": "to disappear suddenly and completely",
  "identical": "exactly the same in every way",
  "ruinous": "causing great financial damage; extremely expensive",
  "illusion": "a false belief or idea about what is real",
  "haggle": "to argue with someone, especially a seller, to agree on a lower price",
  "endure": "to suffer something painful or difficult patiently for a long time",
  "vanity": "too much pride in your own appearance or abilities",
  "obsessed": "thinking about someone or something all the time, too much"
};

const USAGE = {
  "plain": ["a plain dress · plain food · plain and simple", "She wore a plain white T-shirt with jeans.", "她穿了一件素面白 T 恤配牛仔褲。"],
  "jewelry": ["wear jewelry · a piece of jewelry · gold jewelry", "My grandmother keeps her jewelry in a small wooden box.", "我奶奶把她的首飾放在一個小木盒裡。"],
  "invitation": ["an invitation to … · accept/turn down an invitation · send out invitations", "I got an invitation to my cousin's wedding.", "我收到了表姊婚禮的邀請函。"],
  "borrow": ["borrow A from B · borrow money · borrow a book", "Can I borrow your umbrella? It's raining outside.", "我可以跟你借雨傘嗎？外面在下雨。"],
  "diamond": ["a diamond ring · diamond necklace · as hard as diamond", "Her ring has a tiny diamond in the middle.", "她的戒指中間有一顆小小的鑽石。"],
  "couple": ["a young/old couple · a married couple · a couple of …", "An old couple runs the noodle shop near our school.", "我們學校附近的麵店是一對老夫妻開的。"],
  "truth": ["tell the truth · the truth is … · to tell the truth", "To tell the truth, I didn't finish my homework.", "老實說，我沒有寫完作業。"],
  "shocked": ["be shocked at/by … · be shocked to V · a shocked look", "We were shocked to hear that the shop had closed.", "聽到那家店關門了，我們都很震驚。"],
  "fake": ["a fake bag · fake news · fake smile", "Don't believe everything online; some news is fake.", "不要相信網路上的一切，有些新聞是假的。"],
  "pride": ["take pride in … · swallow one's pride · out of pride", "Out of pride, he refused to ask anyone for help.", "出於自尊，他拒絕向任何人求助。"],
  "charming": ["a charming smile · a charming little town · find sb charming", "We stayed in a charming little town by the sea.", "我們住在海邊一個迷人的小鎮。"],
  "luxury": ["live in luxury · a luxury hotel · luxury goods", "Some people think a car is a luxury, not a need.", "有些人認為汽車是奢侈品，不是必需品。"],
  "grand": ["a grand ball · a grand opening · grand hotel", "The hotel held a grand party for its 100th birthday.", "那家飯店為了一百週年舉辦了一場盛大的派對。"],
  "sparkling": ["sparkling eyes · sparkling water · sparkling lights", "The city looked beautiful with its sparkling lights.", "城市在閃閃發亮的燈光下看起來好美。"],
  "wealthy": ["a wealthy family · become wealthy · the wealthy", "He was born into a wealthy family but chose a simple life.", "他出生在富有的家庭，卻選擇了簡單的生活。"],
  "ashamed": ["be ashamed of … · be ashamed to V · feel ashamed", "I was ashamed of shouting at my little sister.", "我對自己吼了妹妹感到很羞愧。"],
  "replace": ["replace A with B · replace sth lost · be replaced by …", "I need to replace my phone screen; it's cracked.", "我得換手機螢幕，它裂了。"],
  "similar": ["be similar to … · similar in size · a similar problem", "My sister and I have similar tastes in music.", "我和姊姊喜歡的音樂很相似。"],
  "poverty": ["live in poverty · fight poverty · the poverty line", "Many children around the world still live in poverty.", "世界上仍有許多孩子生活在貧窮中。"],
  "bargain": ["bargain with sb · bargain over the price · a real bargain", "My mom always bargains with sellers at the market.", "我媽在市場總是跟攤販討價還價。"],
  "recognize": ["recognize sb · hardly recognize … · recognize sb's voice", "I hardly recognized my teacher without her glasses.", "老師沒戴眼鏡，我幾乎認不出她。"],
  "original": ["the original version · original plan · an original idea", "I prefer the original movie to the new one.", "比起新版，我比較喜歡原版電影。"],
  "stunned": ["be stunned by … · a stunned silence · stunned to hear …", "The whole class was stunned by the news.", "全班都被這個消息震住了。"],
  "celebrated": ["a celebrated writer · celebrated for … · a celebrated case", "Taipei is celebrated for its night markets.", "台北以夜市聞名。"],
  "elegance": ["with elegance · simple elegance · a touch of elegance", "The dancer moved across the stage with great elegance.", "舞者以極優雅的姿態滑過舞台。"],
  "humiliation": ["suffer humiliation · a sense of humiliation · public humiliation", "Losing 10 to 0 was a humiliation for the team.", "以十比零落敗，對這支隊伍來說是一大恥辱。"],
  "sacrifice": ["sacrifice A for B · make sacrifices · sacrifice one's time", "Her parents sacrificed a lot so she could study abroad.", "她的父母犧牲了很多，讓她能出國念書。"],
  "crave": ["crave sth · crave attention · crave for …", "After the long hike, I craved a cold drink.", "長途健行之後，我好想喝一杯冰飲料。"],
  "vanish": ["vanish into thin air · vanish without a trace · suddenly vanish", "My keys seem to have vanished into thin air.", "我的鑰匙好像憑空消失了。"],
  "identical": ["be identical to … · identical twins · almost identical", "The two pictures look identical, but there are five differences.", "這兩張圖看起來一模一樣，但其實有五個不同之處。"],
  "ruinous": ["ruinous interest · ruinous cost · prove ruinous", "The war had a ruinous effect on the country's economy.", "這場戰爭對國家經濟造成了毀滅性的影響。"],
  "illusion": ["have no illusions about … · an illusion of … · optical illusion", "I have no illusions about how hard the exam will be.", "我對這次考試有多難，不抱任何幻想。"],
  "haggle": ["haggle over the price · haggle with sb", "Tourists often haggle over prices at street markets.", "觀光客常在街頭市集討價還價。"],
  "endure": ["endure pain · endure hardship · can't endure …", "The climbers endured cold and hunger to reach the top.", "登山者忍受寒冷和飢餓，才登上山頂。"],
  "vanity": ["out of vanity · personal vanity · vanity and pride", "He bought the expensive watch out of vanity, not need.", "他買那支貴手錶是出於虛榮，不是因為需要。"],
  "obsessed": ["be obsessed with … · become obsessed · obsessed with one's looks", "My brother is obsessed with basketball cards.", "我哥對籃球卡著迷得不得了。"]
};

const FIGS = {
  price:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="The price of one night" style="display:block;width:100%;height:auto;border-radius:6px;background:#F4EEF3">
<path d="M40 176 C130 168 190 186 290 176 S450 166 560 180" fill="none" stroke="#6B4C77" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 7"/>
<g transform="translate(90,170)">
<path d="M-8 -78 C-4 -74 4 -74 8 -78 C10 -70 12 -62 10 -54 C18 -36 26 -16 30 0 C10 4 -10 4 -30 0 C-26 -16 -18 -36 -10 -54 C-12 -62 -10 -70 -8 -78Z" fill="#C86B98" stroke="#7A3558" stroke-width="2" stroke-linejoin="round"/>
<path d="M-10 -54 C-4 -51 4 -51 10 -54" fill="none" stroke="#7A3558" stroke-width="1.6"/>
</g>
<g transform="translate(225,170)">
<path d="M-30 -66 C-24 -36 24 -36 30 -66" fill="none" stroke="#9AA3B5" stroke-width="2"/>
<g fill="#F7F4EC" stroke="#9AA3B5" stroke-width="1"><circle cx="-30" cy="-66" r="3.5"/><circle cx="-26" cy="-54" r="4"/><circle cx="-18" cy="-45" r="4.5"/><circle cx="-8" cy="-40" r="5"/><circle cx="8" cy="-40" r="5"/><circle cx="18" cy="-45" r="4.5"/><circle cx="26" cy="-54" r="4"/><circle cx="30" cy="-66" r="3.5"/></g>
<path d="M0 -36 C-10 -28 -8 -16 0 -10 C8 -16 10 -28 0 -36Z" fill="#DDE7F3" stroke="#9AA3B5" stroke-width="1.6"/>
</g>
<g transform="translate(365,170)">
<path d="M-30 -66 C-24 -36 24 -36 30 -66" fill="none" stroke="#C9A227" stroke-width="2"/>
<g fill="#FFFFFF" stroke="#C9A227" stroke-width="1.2"><circle cx="-30" cy="-66" r="3.5"/><circle cx="-26" cy="-54" r="4"/><circle cx="-18" cy="-45" r="4.5"/><circle cx="-8" cy="-40" r="5"/><circle cx="8" cy="-40" r="5"/><circle cx="18" cy="-45" r="4.5"/><circle cx="26" cy="-54" r="4"/><circle cx="30" cy="-66" r="3.5"/></g>
<path d="M0 -36 C-10 -28 -8 -16 0 -10 C8 -16 10 -28 0 -36Z" fill="#EAF3FF" stroke="#C9A227" stroke-width="1.8"/>
<path d="M22 -20 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2Z M-26 -26 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5Z" fill="#E3B341"/>
</g>
<g transform="translate(505,170)">
<path d="M-18 -76 C-6 -78 6 -78 18 -76 M-18 -2 C-6 0 6 0 18 -2" stroke="#6B4C77" stroke-width="4" stroke-linecap="round" fill="none"/>
<path d="M-14 -74 C-14 -56 -4 -46 0 -40 C4 -46 14 -56 14 -74Z M-14 -4 C-14 -22 -4 -32 0 -38 C4 -32 14 -22 14 -4Z" fill="#F6E7B8" stroke="#6B4C77" stroke-width="2" stroke-linejoin="round"/>
<path d="M-10 -6 C-6 -14 6 -14 10 -6Z" fill="#C9A227"/>
</g>
<g font-family="Noto Sans TC,sans-serif" text-anchor="middle">
<text x="90" y="204" font-size="13" font-weight="700" fill="#2E1F33">400 francs</text><text x="90" y="222" font-size="11" fill="#6B4C77">新禮服</text>
<text x="225" y="204" font-size="13" font-weight="700" fill="#2E1F33">500 francs</text><text x="225" y="222" font-size="11" fill="#6B4C77">借來的項鍊真正價值</text>
<text x="365" y="204" font-size="13" font-weight="700" fill="#2E1F33">36,000 francs</text><text x="365" y="222" font-size="11" fill="#6B4C77">買來賠的真鑽項鍊</text>
<text x="505" y="204" font-size="13" font-weight="700" fill="#2E1F33">10 years</text><text x="505" y="222" font-size="11" fill="#6B4C77">還債的時間</text>
<text x="300" y="266" font-size="12" font-weight="700" fill="#2E1F33">The price of one night</text>
<text x="300" y="284" font-size="10.5" fill="#6B4C77">一個晚上的代價</text>
</g>
</svg>`, cap:"〈項鍊〉裡的數字：一件 400 法郎的禮服、一條其實只值 500 法郎的假項鍊，卻換來 36,000 法郎的債和十年的辛苦。", credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {q:"1. What is the passage mainly about?", tag:"主旨",
   opts:["A woman who loses a borrowed necklace","How to pick the right jewelry for a party","The life of the writer Maupassant","Why Paris is a city of fashion"], a:0,
   exp:"文章介紹莫泊桑〈項鍊〉的故事：瑪蒂德弄丟了借來的項鍊，辛苦十年才還清債務，答案是 (A)。"},
  {q:"2. Why does Mathilde borrow a necklace?", tag:"細節",
   opts:["She wants to look rich at the party.","She plans to sell it to pay for food.","Her husband asks her to wear it.","She wants to give it to a friend."], a:0,
   exp:"第二段說瑪蒂德一直夢想有漂亮衣服和珠寶，為了參加高級舞會，她向有錢的朋友借了鑽石項鍊，答案是 (A)。"},
  {q:"3. Which of the following is TRUE according to the passage?", tag:"是非",
   opts:["Mathilde's family is very rich.","The couple work hard for ten years.","The necklace is found the next day.","Her husband buys her a real necklace."], a:1,
   exp:"(B) 正確，第三段說 they work very hard for ten years to pay back the money。(A) 她家並不富有；(C) 項鍊一直沒找到；(D) 是夫妻倆借錢買新項鍊還給朋友。"}
 ],
 [
  {q:"1. Which of the following is the best title for the passage?", tag:"主旨",
   opts:["The Hidden Cost of Wanting More","A Guide to Paris Fashion in 1884","How to Throw a Grand Ball","Why Diamonds Are Worth So Much"], a:0,
   exp:"瑪蒂德想要更好的生活、借了項鍊，最後卻付出十年辛苦的代價，最好的標題是 (A)。"},
  {q:"2. Why do the Loisels buy a new necklace instead of telling Madame Forestier the truth?", tag:"因果",
   opts:["They are too ashamed to tell her.","They want to keep the first one.","Madame Forestier asks them to.","The jeweler gives them a discount."], a:0,
   exp:"第三段說 Too ashamed to tell her friend（羞於向朋友坦白），他們就買了相似的項鍊來替代，答案是 (A)。"},
  {q:"3. What can we infer about Mathilde's life during the ten years?", tag:"推論",
   opts:["It is hard, and it changes her looks.","It is easy because her friend helps.","She becomes rich by selling jewels.","She travels around France with friends."], a:0,
   exp:"第三段說他們 live in poverty，她洗碗、提水、斤斤計較，gradually loses her beauty；最後一段朋友也 hardly recognizes her，可見日子很苦，連外貌都變了，答案是 (A)。"},
  {q:"4. How much was the original necklace really worth?", tag:"細節",
   opts:["At most 500 francs","About 400 francs","Exactly 36,000 francs","More than 40,000 francs"], a:0,
   exp:"最後一段說 the original necklace was fake, worth at most 500 francs，答案是 (A)。(B) 400 法郎是禮服的錢；(C) 36,000 法郎是買來賠的項鍊。"}
 ],
 [
  {q:"1. Which of the following best expresses the main idea of the passage?", tag:"主旨",
   opts:["A woman's vanity and pride cost her ten hard years.","A rich friend tricks a poor clerk's wife on purpose.","A clever couple grow rich by trading fine jewelry.","A writer explains why diamonds lose their value."], a:0,
   exp:"文章介紹瑪蒂德渴望優雅生活、借項鍊、弄丟後辛苦還債十年，最後才知道項鍊是假的，並討論虛榮與外表的主題，(A) 最符合。(B) 錯，朋友並不是故意騙她。"},
  {q:"2. The word \"ruinous\" in the third paragraph is closest in meaning to ______.", tag:"字義",
   opts:["very damaging","quite modest","easy to repay","legally banned"], a:0,
   exp:"他們向放款人借錢，接下來十年過得極苦，可見利息高得毀了他們的生活，ruinous 是「毀滅性的；代價極高的」，答案是 (A) very damaging。"},
  {q:"3. Why does the writer call it ironic that hardship reveals Mathilde's courage?", tag:"推論",
   opts:["Comfort never brought out this strength in her.","Her friend expected her to fail completely.","The necklace was worth much more than she thought.","She had always worked hard as a young girl."], a:0,
   exp:"第三段說 hardship reveals a quiet courage in her that comfort never did：她一直嚮往安逸，真正讓她變堅強的卻是苦日子，這就是諷刺之處，答案是 (A)。"},
  {q:"4. What does the final line of the story reveal?", tag:"細節",
   opts:["The lost necklace was only paste.","Madame Forestier stole the necklace.","Mathilde's husband had hidden it.","The replacement was also a fake."], a:0,
   exp:"第四段說朋友的回答結束了故事：the original necklace was paste（原本的項鍊是人造寶石），答案是 (A)。"},
  {q:"5. Which of the following is NOT mentioned in the passage?", tag:"細節",
   opts:["When the story was first published","Whose student Maupassant was","How much the replacement cost","How Mathilde's husband died"], a:3,
   exp:"(A) 1884 年 2 月 17 日、(B) 福樓拜、(C) 36,000 法郎，文中都有提到。文章沒有提到丈夫過世，答案是 (D)。"}
 ]
];

const META = {
 id:"necklace", title:"The Necklace: Ten Years for One Night", category:"經典文學",
 dek:"為了參加一場舞會，她借來一條閃亮的鑽石項鍊，卻在回家後發現項鍊不見了。夫妻倆借錢買了一條一模一樣的賠給朋友，辛苦還債整整十年──直到最後一句話，才揭開真相。走進莫泊桑最有名的短篇小說〈項鍊〉。",
 date:"2026/11/12",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1620650893164-fb56b7e66067?auto=format&fit=crop&w=1600&q=70" data-local="necklace-hero.jpg" alt="A beaded necklace beside a perfume bottle" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#3B2346"/><path d="M0 360 C200 340 600 380 800 350 V420 H0Z" fill="#2A1833"/><circle cx="190.0" cy="70.0" r="7.0" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="191.2" cy="90.1" r="7.3" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="194.6" cy="110.4" r="7.5" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="200.3" cy="130.6" r="7.8" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="208.2" cy="150.2" r="8.0" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="218.1" cy="168.8" r="8.2" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="230.1" cy="185.9" r="8.4" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="243.9" cy="201.2" r="8.6" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="259.5" cy="214.5" r="8.8" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="276.6" cy="225.6" r="9.0" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="295.0" cy="234.5" r="9.1" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="314.6" cy="241.4" r="9.2" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="335.1" cy="246.5" r="9.3" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="356.3" cy="249.8" r="9.4" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="378.0" cy="251.8" r="9.4" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="400.0" cy="252.4" r="9.5" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="422.0" cy="251.8" r="9.4" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="443.7" cy="249.8" r="9.4" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="464.9" cy="246.5" r="9.3" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="485.4" cy="241.4" r="9.2" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="505.0" cy="234.5" r="9.1" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="523.4" cy="225.6" r="9.0" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="540.5" cy="214.5" r="8.8" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="556.1" cy="201.2" r="8.6" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="569.9" cy="185.9" r="8.4" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="581.9" cy="168.8" r="8.2" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="591.8" cy="150.2" r="8.0" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="599.7" cy="130.6" r="7.8" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="605.4" cy="110.4" r="7.5" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="608.8" cy="90.1" r="7.3" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><circle cx="610.0" cy="70.0" r="7.0" fill="#F4F1EA" stroke="#9AA3B5" stroke-width="1"/><path d="M400 258 C372 280 378 312 400 326 C422 312 428 280 400 258Z" fill="#DDE7F3" stroke="#9AA3B5" stroke-width="2.4"/><path d="M391 280 L400 270 L409 280" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>
<figcaption>一條閃閃發亮的項鍊。在莫泊桑的〈項鍊〉裡，看起來珍貴的東西，不一定真的珍貴。<span class="credit">Photo: Erika Fletcher / Unsplash</span></figcaption>`,
 fact:"莫泊桑被譽為「短篇小說之王」，最擅長出人意料的結局；美國作家歐亨利（O. Henry）的逆轉結局，也深受他的影響。另外，據說莫泊桑很討厭剛蓋好的艾菲爾鐵塔，卻常在塔裡的餐廳吃飯，理由是：那是全巴黎唯一看不到鐵塔的地方。",
 next:{title:"A Journey Through Taiwan, One Dish at a Time", href:"read.html#travelogue"}
};


/* 導讀模式＋單字小練習 */
const GUIDE = [
 [
  {after:0, q:"Who wrote \"The Necklace\"?", opts:["Guy de Maupassant","Madame Forestier","Mathilde's husband"], a:0, hint:"看 a famous short story by the French writer…"},
  {after:1, q:"What does Mathilde borrow from her friend?", opts:["A diamond necklace","A new party gown","A lot of gold coins"], a:0, hint:"看 borrows a ____ necklace from a rich friend"},
  {after:2, q:"How long do they work to pay back the money?", opts:["Ten years","Ten months","Ten days"], a:0, hint:"看 they work very hard for…"}
 ],
 [
  {after:0, q:"What is the story famous for?", opts:["Its surprising ending","Its long love scenes","Its funny characters too"], a:0, hint:"看 famous for one of the most surprising…"},
  {after:1, q:"Where does the money for the dress come from?", opts:["Her husband's savings for a gun","A gift from rich Madame Forestier","A loan from Mathilde's parents"], a:0, hint:"看 the 400 francs he had been saving to…"},
  {after:2, q:"Why do they need to borrow so much money?", opts:["To buy a replacement necklace","To move into a much bigger home","To pay for another grand ball"], a:0, hint:"看 replace it with a similar one that costs…"}
 ],
 [
  {after:0, q:"What was Maupassant's connection to Flaubert?", opts:["He was Flaubert's student.","He was Flaubert's cousin.","He was Flaubert's publisher."], a:0, hint:"看 a student of the novelist…"},
  {after:1, q:"What does Mathilde enjoy for one evening?", opts:["The admiration she has always craved","A quiet dinner alone with her husband","A long, friendly talk with her old friend"], a:0, hint:"看 she enjoys exactly the ____ she has always craved"},
  {after:2, q:"What does Mathilde's hard life reveal in her?", opts:["A quiet courage","A love of luxury","A talent for lying"], a:0, hint:"看 hardship reveals a quiet ____ in her"}
 ]
];
const VPRAC = [
 [
  {s:"Can I ____ your pen? I forgot mine at home.", opts:["borrow","pride","truth","couple"], a:0, w:"borrow"},
  {s:"Thank you for the ____ to your birthday party!", opts:["invitation","jewelry","diamond","truth"], a:0, w:"invitation"},
  {s:"Please tell me the ____. Did you break the window?", opts:["truth","couple","jewelry","invitation"], a:0, w:"truth"},
  {s:"That bag is ____; it's not a real designer bag.", opts:["fake","shocked","couple","truth"], a:0, w:"fake"},
  {s:"The young ____ just got married last month.", opts:["couple","pride","diamond","truth"], a:0, w:"couple"}
 ],
 [
  {s:"Her ____ smile makes everyone like her at once.", opts:["charming","ashamed","similar","original"], a:0, w:"charming"},
  {s:"He was ____ of himself for lying to his teacher.", opts:["ashamed","wealthy","sparkling","grand"], a:0, w:"ashamed"},
  {s:"We need to ____ the broken light bulb with a new one.", opts:["replace","recognize","bargain","original"], a:0, w:"replace"},
  {s:"Many families still live in ____ and cannot buy enough food.", opts:["poverty","luxury","bargain","sparkling"], a:0, w:"poverty"},
  {s:"I didn't ____ you with your new haircut!", opts:["recognize","replace","bargain","ashamed"], a:0, w:"recognize"}
 ],
 [
  {s:"Firefighters sometimes ____ their own safety to save others.", opts:["sacrifice","crave","haggle","vanish"], a:0, w:"sacrifice"},
  {s:"After the long exam, I ____ a big bowl of ice cream.", opts:["craved","vanished","endured","haggled"], a:0, w:"crave"},
  {s:"The twins look ____; I can't tell them apart.", opts:["identical","ruinous","obsessed","celebrated"], a:0, w:"identical"},
  {s:"Tourists often ____ over prices at the night market.", opts:["haggle","vanish","sacrifice","endure"], a:0, w:"haggle"},
  {s:"He is ____ with video games and plays them all night.", opts:["obsessed","identical","ruinous","celebrated"], a:0, w:"obsessed"}
 ]
];
return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE,GUIDE,VPRAC});
})();
