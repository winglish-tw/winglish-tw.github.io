/* winglish.tw 閱讀館文章資料：The Black Cat: Who Is the Real Monster?（經典文學：愛倫坡〈黑貓〉） */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1],[2,3,4,5],[6,7,8,9,10],[11,12,13,14]], figs:{3:"plot"}, heads:{1:"A Man Who Loved Animals",2:"A Second Cat",3:"A Cry from the Wall"},
   sents:[
    ["Do black cats bring bad luck?","黑貓會帶來厄運嗎？"],
    ["In 1843, the American writer Edgar Allan Poe wrote a famous scary story about this idea: \"The Black Cat.\"","1843 年，美國作家愛倫坡就以這個想法，寫了一篇有名的恐怖故事──〈黑貓〉。"],
    ["The man in the story loves animals when he is young.","故事裡的男人年輕時很愛動物。"],
    ["He has a big black cat named Pluto, and the cat follows him everywhere.","他養了一隻叫普路托的大黑貓，那隻貓走到哪裡都跟著他。"],
    ["But the man starts to drink too much, and he becomes angry and cruel.","可是這個男人開始酗酒，變得暴躁又殘忍。"],
    ["One night, he hurts Pluto badly, and later he kills the cat.","某天晚上，他把普路托傷得很重，後來還殺了那隻貓。"],
    ["Soon after, a second black cat comes into his life.","不久之後，第二隻黑貓走進了他的生活。"],
    ["It looks just like Pluto, but it has a white mark on its chest.","牠長得跟普路托一模一樣，只是胸前有一塊白色的斑紋。"],
    ["The man begins to hate and fear this cat.","男人開始討厭、也害怕這隻貓。"],
    ["One day, he tries to kill it, and when his wife tries to protect the cat, he kills her instead.","有一天，他想殺了這隻貓；妻子出手保護貓，他竟然把妻子殺了。"],
    ["He hides her body behind a wall in the cellar.","他把妻子的屍體藏在地窖的一面牆後面。"],
    ["When the police come, they find nothing.","警察來搜查，什麼也沒找到。"],
    ["Then the man proudly knocks on the wall, and a terrible cry comes from inside.","這時男人得意地敲了敲那面牆，牆裡竟傳出一聲可怕的叫聲。"],
    ["Without knowing it, he had shut the cat inside the wall, too!","原來他不知不覺中，把那隻貓也一起封進了牆裡！"],
    ["So, is the black cat bad luck, or is the real problem the man himself?","所以，黑貓真的是厄運嗎？還是真正的問題，其實是這個男人自己？"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1],[2,3,4,5,6,7],[8,9,10,11],[12,13,14,15,16]], figs:{3:"plot"}, heads:{1:"From Pet Lover to Monster",2:"The Mark on the Cat",3:"The Voice in the Wall"},
   sents:[
    ["Few stories have made black cats look as frightening as Edgar Allan Poe's \"The Black Cat,\" first published on the front page of a Philadelphia newspaper in 1843.","很少有故事能把黑貓寫得像愛倫坡的〈黑貓〉那麼嚇人；這篇小說 1843 年首次刊登在費城一家報紙的頭版。"],
    ["Poe was paid just $20 for it, yet it became one of the best-known horror stories in English.","愛倫坡只拿到 20 美元的稿費，但它後來成了英語世界最有名的恐怖故事之一。"],
    ["The story is told by a man who will be put to death the next day.","說故事的人，是一個隔天就要被處死的男人。"],
    ["He insists that he is not mad, and he promises to tell only the facts.","他堅稱自己沒有發瘋，並保證只說出事實。"],
    ["As a boy, he was so gentle that his friends laughed at him, and his favorite pet was a large black cat named Pluto.","他小時候心腸軟到被朋友取笑；他最愛的寵物，是一隻叫普路托的大黑貓。"],
    ["However, alcohol slowly changes his personality.","然而，酒精慢慢改變了他的個性。"],
    ["He becomes violent toward his wife and his pets, and one morning, in cold blood, he hangs Pluto from a tree.","他開始對妻子和寵物動粗；某天早上，他冷血地把普路托吊死在樹上。"],
    ["That same night, his house burns down.","就在當天晚上，他的房子燒毀了。"],
    ["Later, a second black cat follows him home.","後來，第二隻黑貓跟著他回了家。"],
    ["This one has a patch of white fur that gradually takes the shape of a gallows, the wooden frame used to hang criminals.","這隻貓身上有一塊白毛，漸漸變成絞刑台的形狀──也就是用來吊死犯人的木架。"],
    ["Driven half mad by guilt and fear, the man attacks the cat, and when his wife stops him, he kills her instead.","被罪惡感和恐懼逼得半瘋的男人攻擊那隻貓；妻子出手阻止，他竟轉而殺了妻子。"],
    ["He hides her body inside a cellar wall, and the cat seems to have disappeared.","他把妻子的屍體藏進地窖的牆裡，而那隻貓似乎也消失了。"],
    ["Four days later, the police search the house and find nothing.","四天後，警察搜查整棟房子，卻什麼也沒找到。"],
    ["Feeling safe, the man taps the wall to show how solid it is.","男人覺得自己安全了，就敲敲那面牆，炫耀它有多堅固。"],
    ["At once, a long, inhuman cry answers from inside.","牆裡立刻傳出一聲又長又不像人聲的哀號。"],
    ["Without knowing it, he had walled the cat up with his wife's body.","原來他不知不覺中，把那隻貓和妻子的屍體一起砌進了牆裡。"],
    ["Readers still argue: is the cat a supernatural avenger, or is the narrator simply a man who cannot escape his own guilt?","讀者到現在還在爭論：這隻貓是超自然的復仇者嗎？還是說故事的人只是一個逃不出自己罪惡感的男人？"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1],[2,3,4,5,6],[7,8,9,10,11],[12,13,14]], figs:{3:"plot"}, heads:{1:"A Confession on the Eve of Death",2:"Omens or Guilt?",3:"A Cat Lover's Nightmare"},
   sents:[
    ["On August 19, 1843, readers of a Philadelphia weekly found a chilling confession on its front page: \"The Black Cat,\" by Edgar Allan Poe, a story for which the struggling author had been paid a mere twenty dollars.","1843 年 8 月 19 日，費城一份週報的讀者在頭版讀到一篇令人毛骨悚然的自白──愛倫坡的〈黑貓〉；當時生活拮据的作者，只為它拿到區區二十美元。"],
    ["Nearly two centuries later, it remains one of the most unsettling tales in the English language, largely because of the voice that tells it.","將近兩百年後，它仍是英語世界最令人不安的故事之一，很大一部分原因在於說故事的那個聲音。"],
    ["The narrator writes on the eve of his execution, insisting that he is neither mad nor dreaming and that he will simply set down \"a series of mere household events.\"","敘事者在行刑前夕寫下這篇文字，堅稱自己既沒有發瘋、也不是在做夢，只是要寫下「一連串再平常不過的家務事」。"],
    ["The events he describes, however, are anything but ordinary.","然而，他描述的事件一點也不平常。"],
    ["A tender-hearted man who once found more loyalty in animals than in people, he slides into cruelty, first toward his pets and then toward his wife, whom he finally murders and conceals behind the bricks of a cellar wall.","他原本心腸柔軟，覺得動物比人更忠誠，卻一步步滑向殘忍──先是對寵物，接著是對妻子；最後他殺了妻子，把屍體藏在地窖的磚牆後面。"],
    ["He blames this descent partly on alcohol, which he calls \"the Fiend Intemperance,\" but he also offers a far more disturbing explanation: the spirit of \"perverseness,\" an urge to do wrong for no other reason than that we know it is wrong.","他把這段墮落部分歸咎於酒精，稱它為「酗酒這個惡魔」；但他還提出一個更令人不安的解釋──「反常的衝動」：明知是錯，偏偏就是想去做。"],
    ["Who has not, he asks, done something foolish precisely because he knew he should not?","他反問：誰不曾正因為知道不該做，反而做了蠢事？"],
    ["Superstition hangs over every page.","迷信的氣氛籠罩著每一頁。"],
    ["The narrator's wife half-jokingly recalls the old belief that all black cats are witches in disguise, and the second cat's white patch slowly sharpens into the outline of a gallows, as if foretelling its owner's fate.","敘事者的妻子半開玩笑地提起一個古老的說法：所有黑貓都是女巫變的；而第二隻貓身上的白斑，也慢慢清晰成絞刑台的輪廓，彷彿預告了主人的命運。"],
    ["Yet Poe never confirms that anything supernatural is at work; every omen could just as easily be the invention of a guilty, alcohol-soaked mind.","然而愛倫坡從未證實真有什麼超自然的力量在作祟；每一個不祥之兆，也都可能只是一個充滿罪惡感、泡在酒精裡的腦袋自己編出來的。"],
    ["Critics call such a storyteller an unreliable narrator, and the reader is left to decide how much of his account to trust.","評論家把這種說故事的人稱為「不可靠的敘事者」，他的說法能信幾分，要讀者自己判斷。"],
    ["Even the ending refuses to settle the question: when the police tear down the wall, they find the cat, which the narrator had unknowingly bricked in, sitting on the corpse and shrieking like a creature from hell.","就連結局也不肯給出答案：警察拆開牆，發現那隻被敘事者不知不覺砌進牆裡的貓，正坐在屍體上，發出彷彿來自地獄的尖叫。"],
    ["Ironically, Poe himself adored cats.","諷刺的是，愛倫坡本人非常愛貓。"],
    ["His tortoiseshell cat, Catterina, is said to have perched on his shoulder as he wrote, and in the bitter winter before his young wife, Virginia, died of tuberculosis, she reportedly lay on the sick woman to keep her warm.","據說他的玳瑁貓凱特琳娜常在他寫作時蹲在他肩上；而在年輕的妻子維吉尼亞死於肺結核之前的那個嚴冬，這隻貓據說還趴在病重的她身上替她取暖。"],
    ["Perhaps that is why, in his most famous animal tale, the cat is never truly the villain: it brings no curse, but simply refuses to let a murderer hide from what he has done.","或許正因如此，在他最有名的這篇動物故事裡，貓從來不是真正的壞人：牠沒有帶來詛咒，只是不讓一個殺人兇手逃避自己犯下的罪。"]
 ]}
];

const GLOSS = {
  luck:["n.","運氣"], famous:["adj.","有名的"], scary:["adj.","嚇人的；恐怖的"], idea:["n.","想法；觀念"], writer:["n.","作家"],
  american:["adj.","美國的"], cruel:["adj.","殘忍的"], follow:["v.","跟隨"], everywhere:["adv.","到處"], hurt:["v.","傷害"], badly:["adv.","嚴重地"],
  mark:["n.","斑紋；記號"], chest:["n.","胸部；胸口"], hate:["v.","討厭；憎恨"], fear:["v./n.","害怕；恐懼"], protect:["v.","保護"],
  instead:["adv.","反而；取而代之"], hide:["v.","藏；躲"], body:["n.","身體；屍體"], cellar:["n.","地窖"], police:["n.","警察"],
  proudly:["adv.","得意地；驕傲地"], knock:["v.","敲"], terrible:["adj.","可怕的"], cry:["n.","叫聲；哭聲"], shut:["v.","關；封住"],
  problem:["n.","問題"], wife:["n.","妻子"], drink:["v.","喝酒"], angry:["adj.","生氣的"],
  frightening:["adj.","嚇人的"], publish:["v.","出版；刊登"], newspaper:["n.","報紙"], horror:["n.","恐怖"], insist:["v.","堅稱；堅持"],
  mad:["adj.","發瘋的"], promise:["v.","保證；答應"], fact:["n.","事實"], gentle:["adj.","溫和的；心腸軟的"], favorite:["adj.","最喜愛的"],
  pet:["n.","寵物"], alcohol:["n.","酒精；酒"], personality:["n.","個性"], violent:["adj.","暴力的；粗暴的"], blood:["n.","血；in cold blood 冷血地"],
  hang:["v.","吊；吊死"], burn:["v.","燒；burn down 燒毀"], patch:["n.","一塊（斑）"], fur:["n.","毛皮；毛"], gradually:["adv.","逐漸地"],
  shape:["n.","形狀"], gallows:["n.","絞刑台"], wooden:["adj.","木製的"], frame:["n.","框架；架子"], criminal:["n.","罪犯"],
  guilt:["n.","罪惡感；內疚"], attack:["v.","攻擊"], disappear:["v.","消失"], search:["v.","搜查；搜尋"], safe:["adj.","安全的"],
  tap:["v.","輕敲"], solid:["adj.","堅固的；實心的"], inhuman:["adj.","不像人的"], wall:["v./n.","用牆圍住；牆"], argue:["v.","爭論"],
  supernatural:["adj.","超自然的"], avenger:["n.","復仇者"], narrator:["n.","敘事者；說故事的人"], escape:["v.","逃離；擺脫"],
  weekly:["n.","週報；週刊"], chilling:["adj.","令人毛骨悚然的"], confession:["n.","自白；招供"], struggling:["adj.","生活困苦的"],
  author:["n.","作者"], mere:["adj.","僅僅的；區區的"], century:["n.","世紀"], unsettling:["adj.","令人不安的"], tale:["n.","故事"],
  largely:["adv.","主要地；大部分"], eve:["n.","前夕"], execution:["n.","處決；死刑"], dream:["v.","做夢"], series:["n.","一連串"],
  household:["adj.","家庭的；家務的"], ordinary:["adj.","平常的"], tender:["adj.","溫柔的；tender-hearted 心腸軟的"], loyalty:["n.","忠誠"],
  slide:["v.","滑；逐漸陷入"], cruelty:["n.","殘忍"], murder:["v.","謀殺"], conceal:["v.","隱藏"], brick:["n./v.","磚；用磚封住"],
  blame:["v.","把…歸咎於"], descent:["n.","墮落；下降"], partly:["adv.","部分地"], fiend:["n.","惡魔"], intemperance:["n.","酗酒；放縱"],
  disturbing:["adj.","令人不安的"], explanation:["n.","解釋"], spirit:["n.","精神；心態"], perverseness:["n.","故意作對的心態；反常"],
  urge:["n.","衝動"], foolish:["adj.","愚蠢的"], precisely:["adv.","正是；恰好"], superstition:["n.","迷信"], belief:["n.","信念；說法"],
  witch:["n.","女巫"], disguise:["n.","偽裝"], sharpen:["v.","變清晰；變銳利"], outline:["n.","輪廓"], foretell:["v.","預言；預示"],
  fate:["n.","命運"], confirm:["v.","證實"], omen:["n.","預兆"], invention:["n.","編造；發明"], guilty:["adj.","有罪惡感的"],
  soak:["v.","浸泡；alcohol-soaked 泡在酒裡的"], critic:["n.","評論家"], unreliable:["adj.","不可靠的"], account:["n.","說法；敘述"],
  settle:["v.","解決；確定"], unknowingly:["adv.","不知不覺地"], corpse:["n.","屍體"], shriek:["v.","尖叫"], creature:["n.","生物；怪物"],
  ironically:["adv.","諷刺的是"], adore:["v.","非常喜愛"], tortoiseshell:["adj.","玳瑁色的（三花毛色）"], perch:["v.","（鳥般）停歇；蹲坐"],
  bitter:["adj.","嚴寒的；苦的"], tuberculosis:["n.","肺結核"], reportedly:["adv.","據說；據報導"], villain:["n.","壞人；反派"],
  curse:["n.","詛咒"], refuse:["v.","拒絕"], whom:["pron.","（關係代名詞）…的人"]
};

const KEY = [["luck","cruel","follow","mark","chest","fear","protect","hide","knock","terrible"],
             ["publish","horror","insist","gentle","alcohol","personality","violent","patch","gradually","guilt","search","supernatural"],
             ["chilling","confession","unsettling","execution","conceal","descent","superstition","foretell","omen","unreliable","ironically","adore","villain","curse"]];

const DEFS = {
  "luck": "the good or bad things that happen to you by chance",
  "cruel": "happy to cause pain or suffering to people or animals",
  "follow": "to go or come after someone or something",
  "mark": "a small area of a different colour on an animal's fur or skin",
  "chest": "the front part of the body between the neck and the stomach",
  "fear": "to be afraid of someone or something",
  "protect": "to keep someone or something safe from harm",
  "hide": "to put something in a place where it cannot be seen or found",
  "knock": "to hit a door or wall with your hand to make a noise",
  "terrible": "very bad, unpleasant or frightening",
  "publish": "to print a story, book or article so that people can buy and read it",
  "horror": "a kind of story or film that is meant to frighten people",
  "insist": "to say firmly that something is true, especially when others may not believe you",
  "gentle": "kind and calm, and careful not to hurt anyone",
  "alcohol": "drinks such as beer and wine that can make people drunk",
  "personality": "the qualities that make a person's character different from other people's",
  "violent": "using force to hurt or attack people or animals",
  "patch": "a small area that looks different from the area around it",
  "gradually": "slowly, over a period of time",
  "guilt": "the unhappy feeling of knowing you have done something wrong",
  "search": "to look carefully through a place to find something",
  "supernatural": "caused by forces that cannot be explained by science or nature",
  "chilling": "very frightening, often in a cold, quiet way",
  "confession": "a statement in which you admit that you have done something wrong",
  "unsettling": "making you feel nervous, worried or uncomfortable",
  "execution": "the act of killing someone as an official punishment for a crime",
  "conceal": "to hide something carefully so that it cannot be seen or known",
  "descent": "a gradual change to a worse state or condition",
  "superstition": "a belief in luck or magic that is not based on reason or science",
  "foretell": "to say or show what will happen in the future",
  "omen": "a sign of what will happen in the future, often something bad",
  "unreliable": "not able to be trusted or believed",
  "ironically": "used to say that something is the opposite of what you would expect",
  "adore": "to love someone or something very much",
  "villain": "the bad character in a story who harms others",
  "curse": "a magic spell or force that is believed to bring bad luck or harm"
};

const USAGE = {
  "luck": ["good luck · bad luck · bring luck · Good luck with …!", "Some people believe a four-leaf clover brings good luck.", "有些人相信四葉幸運草會帶來好運。"],
  "cruel": ["be cruel to … · a cruel joke · cruel to animals", "It is cruel to leave a dog in a hot car.", "把狗留在很熱的車子裡是很殘忍的。"],
  "follow": ["follow sb (around) · follow sb home · follow the rules", "A stray puppy followed me all the way to school.", "一隻流浪小狗一路跟著我到學校。"],
  "mark": ["a white mark · a birth mark · leave a mark", "My cat has a small brown mark on its nose.", "我的貓鼻子上有一小塊咖啡色的斑。"],
  "chest": ["on one's chest · chest pain · a broad chest", "The robin has a bright red patch on its chest.", "知更鳥胸前有一塊鮮紅色的羽毛。"],
  "fear": ["fear sth · fear that … · fear of …", "Many people fear the dark more than they admit.", "很多人怕黑的程度，比他們承認的還嚴重。"],
  "protect": ["protect A from B · protect oneself · be protected by …", "Sunscreen protects your skin from the sun.", "防曬乳保護你的皮膚不被太陽曬傷。"],
  "hide": ["hide sth from sb · hide behind … · hide-and-seek", "He hid the birthday gift under his bed.", "他把生日禮物藏在床底下。"],
  "knock": ["knock on/at the door · knock over … · a knock at the door", "Please knock before you come into my room.", "進我房間前請先敲門。"],
  "terrible": ["a terrible mistake · feel terrible · terrible weather", "I had a terrible dream about falling off a cliff.", "我做了一個從懸崖掉下去的可怕的夢。"],
  "publish": ["be published in … · publish a book · first published in …", "Her first short story was published in the school magazine.", "她的第一篇短篇小說刊登在校刊上。"],
  "horror": ["a horror story/movie · in horror · to one's horror", "I can't watch horror movies alone at night.", "我沒辦法晚上一個人看恐怖片。"],
  "insist": ["insist that … · insist on V-ing · insist on sth", "My brother insisted that he had not eaten my cake.", "我弟堅稱他沒有吃我的蛋糕。"],
  "gentle": ["be gentle with … · a gentle voice · gentle by nature", "Be gentle with the kitten; it's only two weeks old.", "對小貓溫柔一點，牠才兩個星期大。"],
  "alcohol": ["drink alcohol · alcohol-free · the effects of alcohol", "Selling alcohol to people under 18 is against the law.", "賣酒給未滿十八歲的人是違法的。"],
  "personality": ["a strong personality · personality traits · change one's personality", "She has a cheerful personality and makes friends easily.", "她個性開朗，很容易交到朋友。"],
  "violent": ["become violent · a violent crime · violent toward …", "Some video games are too violent for young children.", "有些電玩對小孩子來說太暴力了。"],
  "patch": ["a patch of … · a bald patch · in patches", "There was a patch of ice on the road, so we drove slowly.", "路上有一塊結冰，所以我們開得很慢。"],
  "gradually": ["gradually improve · gradually become … · change gradually", "The sky gradually turned from orange to dark blue.", "天空漸漸從橘色變成深藍色。"],
  "guilt": ["feel guilt · a sense of guilt · be full of guilt", "He felt a sense of guilt after lying to his mother.", "對媽媽說謊之後，他心裡有種罪惡感。"],
  "search": ["search a place (for sth) · search for … · a search party", "The police searched the whole park for the missing boy.", "警方把整座公園都搜了一遍，尋找失蹤的男孩。"],
  "supernatural": ["supernatural powers · the supernatural · a supernatural event", "Many old stories describe ghosts with supernatural powers.", "許多古老的故事描寫擁有超自然力量的鬼魂。"],
  "chilling": ["a chilling story · a chilling scream · chilling words", "The movie ends with a chilling scream in the dark.", "這部電影以黑暗中一聲令人毛骨悚然的尖叫結束。"],
  "confession": ["make a confession · a full confession · a confession of …", "The thief finally made a full confession to the police.", "小偷終於向警方完整招供了。"],
  "unsettling": ["an unsettling feeling · unsettling news · find sth unsettling", "There was something unsettling about the empty, silent house.", "那棟空蕩又安靜的房子，有種令人不安的感覺。"],
  "execution": ["face execution · public execution · on the eve of one's execution", "In the past, public executions drew large crowds.", "過去，公開處決會吸引大批人群圍觀。"],
  "conceal": ["conceal sth from sb · conceal one's feelings · be concealed in …", "She tried to conceal her tears from her friends.", "她試著不讓朋友看到她的眼淚。"],
  "descent": ["a descent into … · a slow descent · descent into madness", "The film shows a good man's slow descent into crime.", "這部電影描寫一個好人慢慢墮落成罪犯的過程。"],
  "superstition": ["an old superstition · according to superstition · believe in superstition", "According to an old superstition, opening an umbrella indoors brings bad luck.", "根據一個古老的迷信，在室內打開雨傘會帶來厄運。"],
  "foretell": ["foretell the future · foretell sb's fate · be foretold", "No one can truly foretell the future.", "沒有人能真正預知未來。"],
  "omen": ["a good/bad omen · an omen of … · see sth as an omen", "Some sailors saw a storm on the first day as a bad omen.", "有些水手把出航第一天遇上暴風雨視為不祥之兆。"],
  "unreliable": ["an unreliable narrator · unreliable information · prove unreliable", "Information from that website is often unreliable.", "那個網站的資訊常常不可靠。"],
  "ironically": ["Ironically, … · somewhat ironically", "Ironically, the fire station itself burned down last night.", "諷刺的是，消防局本身昨晚被燒毀了。"],
  "adore": ["adore sb/sth · adore V-ing · be adored by …", "My grandmother adores her three noisy parrots.", "我奶奶超愛她那三隻吵鬧的鸚鵡。"],
  "villain": ["the villain of the story · play the villain · a cartoon villain", "In most fairy tales, the villain is punished in the end.", "在大多數童話裡，壞人最後都會受到懲罰。"],
  "curse": ["put a curse on … · under a curse · lift a curse", "In the story, a witch puts a curse on the prince.", "在故事裡，女巫對王子下了詛咒。"]
};

const FIGS = {
  plot:{svg:`<svg viewBox="0 0 600 300" role="img" aria-label="The Black Cat in four steps" style="display:block;width:100%;height:auto;border-radius:6px;background:#EEE9E1">
<path d="M40 176 C120 168 170 186 250 176 S420 166 560 180" fill="none" stroke="#5A4A3E" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 7"/>
<g transform="translate(90,170)">
<path d="M-17 0 C-25 -12 -23 -32 -13 -43 C-15 -49 -15 -55 -13 -61 C-14 -66 -15 -71 -14 -76 C-10 -73 -7 -69 -5 -66 C-1 -67 3 -67 6 -66 C8 -69 11 -73 15 -76 C16 -71 15 -66 13 -61 C15 -55 15 -49 13 -43 C23 -32 25 -12 17 0 C6 3 -6 3 -17 0Z" fill="#231F20"/>
<path d="M15 -3 C30 -2 38 -10 36 -22 C35 -29 30 -32 27 -30" fill="none" stroke="#231F20" stroke-width="5" stroke-linecap="round"/>
</g>
<g transform="translate(225,170)">
<path d="M-30 0 L-30 -38 C-20 -48 -10 -56 0 -62 C10 -56 20 -48 30 -38 L30 0Z" fill="#CDBBA6" stroke="#5A4A3E" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M-8 0 L-8 -18 C-8 -22 8 -22 8 -18 L8 0" fill="#5A4A3E"/>
<path d="M-24 -40 C-30 -54 -20 -62 -22 -74 C-12 -66 -10 -58 -12 -50 C-8 -62 -2 -72 -4 -86 C8 -74 12 -62 6 -50 C12 -56 18 -62 16 -72 C26 -60 28 -48 22 -40" fill="#E8783A" stroke="#B4471E" stroke-width="2" stroke-linejoin="round"/>
<path d="M-12 -44 C-14 -52 -8 -56 -8 -62 C-2 -56 0 -50 -2 -46 M8 -46 C8 -52 12 -54 12 -58 C16 -52 16 -48 14 -44" fill="#FFD25A"/>
</g>
<g transform="translate(365,170)">
<path d="M-17 0 C-25 -12 -23 -32 -13 -43 C-15 -49 -15 -55 -13 -61 C-14 -66 -15 -71 -14 -76 C-10 -73 -7 -69 -5 -66 C-1 -67 3 -67 6 -66 C8 -69 11 -73 15 -76 C16 -71 15 -66 13 -61 C15 -55 15 -49 13 -43 C23 -32 25 -12 17 0 C6 3 -6 3 -17 0Z" fill="#231F20"/>
<path d="M-15 -3 C-30 -2 -38 -10 -36 -22 C-35 -29 -30 -32 -27 -30" fill="none" stroke="#231F20" stroke-width="5" stroke-linecap="round"/>
<path d="M-7 -36 C-5 -39 5 -39 7 -36 C5 -35 2 -35 1 -34 C1 -28 1 -22 2 -16 C0 -15 -2 -15 -3 -16 C-2 -22 -2 -28 -2 -34 C-4 -35 -6 -35 -7 -36Z" fill="#FBF8F2"/>
</g>
<g transform="translate(505,170)">
<g fill="#B5654A" stroke="#6E3A2A" stroke-width="1.6" stroke-linejoin="round">
<path d="M-34 -2 C-24 -3 -14 -1 -4 -2 L-4 -16 C-14 -15 -24 -17 -34 -16Z"/><path d="M0 -2 C10 -3 22 -1 32 -2 L32 -16 C22 -15 10 -17 0 -16Z"/>
<path d="M-34 -20 C-30 -21 -24 -19 -18 -20 L-18 -34 C-24 -33 -30 -35 -34 -34Z"/><path d="M-14 -20 C-4 -21 6 -19 14 -20 L14 -34 C6 -33 -4 -35 -14 -34Z"/><path d="M18 -20 C24 -21 28 -19 32 -20 L32 -34 C28 -33 24 -35 18 -34Z"/>
<path d="M-34 -38 C-24 -39 -14 -37 -4 -38 L-4 -52 C-14 -51 -24 -53 -34 -52Z"/><path d="M0 -38 C10 -39 22 -37 32 -38 L32 -52 C22 -51 10 -53 0 -52Z"/>
</g>
<path d="M40 -44 C46 -38 46 -26 40 -20 M48 -52 C58 -40 58 -24 48 -12" fill="none" stroke="#5A4A3E" stroke-width="2.4" stroke-linecap="round"/>
</g>
<g font-family="Noto Sans TC,sans-serif" text-anchor="middle">
<text x="90" y="204" font-size="13" font-weight="700" fill="#231F20">1. Pluto</text><text x="90" y="222" font-size="11" fill="#5A4A3E">愛貓變成虐貓</text>
<text x="225" y="204" font-size="13" font-weight="700" fill="#231F20">2. The Fire</text><text x="225" y="222" font-size="11" fill="#5A4A3E">當晚房子燒毀</text>
<text x="365" y="204" font-size="13" font-weight="700" fill="#231F20">3. The White Mark</text><text x="365" y="222" font-size="11" fill="#5A4A3E">白斑變成絞刑台</text>
<text x="505" y="204" font-size="13" font-weight="700" fill="#231F20">4. The Wall</text><text x="505" y="222" font-size="11" fill="#5A4A3E">牆裡傳出貓叫聲</text>
<text x="300" y="266" font-size="12" font-weight="700" fill="#231F20">"The Black Cat" in four steps</text>
<text x="300" y="284" font-size="10.5" fill="#5A4A3E">〈黑貓〉的故事四步驟</text>
</g>
</svg>`, cap:"〈黑貓〉的故事主線：第一隻貓普路托、大火、胸前有白斑的第二隻貓，最後是藏著祕密的那面牆。", credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {q:"1. What is the passage mainly about?", tag:"主旨",
   opts:["Ways to take good care of black cats at home","A scary story about a cruel man and two cats","The life story of the writer Edgar Allan Poe","Why many people think black cats are lucky"], a:1,
   exp:"文章介紹愛倫坡〈黑貓〉的故事：一個變得殘忍的男人、兩隻黑貓，以及藏在牆裡的祕密，答案是 (B)。"},
  {q:"2. What is special about the second cat?", tag:"細節",
   opts:["It has a long, fluffy white tail.","It is much smaller than Pluto.","It has a white mark on its chest.","It only comes out late at night."], a:2,
   exp:"第三段說第二隻貓 has a white mark on its chest（胸前有一塊白斑），答案是 (C)。(B) 錯，文中說牠長得跟普路托一模一樣。"},
  {q:"3. Which of the following is TRUE according to the passage?", tag:"是非",
   opts:["The man hates animals when he is young.","The police find the body without any help.","Poe wrote the story in the year 1843.","The man's wife kills the first cat."], a:2,
   exp:"(C) 正確，第一段說 In 1843, … Edgar Allan Poe wrote a famous scary story。(A) 他年輕時很愛動物；(B) 是男人自己敲牆、牆裡傳出貓叫，才露出馬腳；(D) 是男人殺了貓。"}
 ],
 [
  {q:"1. Which of the following is the best title for the passage?", tag:"主旨",
   opts:["How to Keep Your Pet Cat Happy","A Murderer Betrayed by a Cat","The History of Philadelphia","Why Alcohol Is Bad for Pets"], a:1,
   exp:"文章講一個殺妻兇手把屍體藏進牆裡，最後卻因為牆裡傳出的貓叫聲而被揭穿，最好的標題是 (B)。"},
  {q:"2. What does the white patch on the second cat gradually look like?", tag:"細節",
   opts:["A broken heart","A full moon","A gallows","A house key"], a:2,
   exp:"第三段說白毛 gradually takes the shape of a gallows（漸漸變成絞刑台的形狀），答案是 (C)。"},
  {q:"3. Why does the man tap on the wall when the police are there?", tag:"推論",
   opts:["He hears a strange noise inside.","He wants to look calm and confident.","He is trying to find his missing cat.","The police order him to do it."], a:1,
   exp:"最後一段說 Feeling safe（覺得自己安全了），他敲牆炫耀牆有多堅固，可見他想表現得鎮定、有把握，答案是 (B)。(A) 他是敲了牆之後才聽到叫聲。"},
  {q:"4. What happened on the same night that Pluto died?", tag:"細節",
   opts:["His wife left him.","His house burned down.","The police came.","A second cat appeared."], a:1,
   exp:"第二段說 That same night, his house burns down（當天晚上他的房子燒毀了），答案是 (B)。(D) 第二隻貓是 later（後來）才出現的。"}
 ],
 [
  {q:"1. Which of the following best expresses the main idea of the passage?", tag:"主旨",
   opts:["Poe's tale shows how guilt, not a curse, exposes a killer.","Poe wrote the tale mainly to warn readers about black cats.","Poe's tale was popular mostly because it paid him so well.","Poe's tale proves that cats can sense the evil in people."], a:0,
   exp:"文章談敘事者的自白、反常的衝動、迷信與罪惡感，最後指出貓不是壞人，沒有帶來詛咒，只是不讓兇手逃避罪行，(A) 最完整。(C) 錯，他只拿到二十美元。"},
  {q:"2. The phrase \"anything but ordinary\" in the second paragraph is closest in meaning to ______.", tag:"字義",
   opts:["very common","far from normal","slightly boring","easy to explain"], a:1,
   exp:"anything but 是「一點也不」，anything but ordinary 就是「一點也不平常」；後面接著描述他虐待寵物、殺妻藏屍，答案是 (B) far from normal。"},
  {q:"3. What does the narrator mean by the spirit of \"perverseness\"?", tag:"細節",
   opts:["A love of animals that grows too strong","An urge to do wrong because it is wrong","A fear of black cats and of witches","An illness caused by drinking too much"], a:1,
   exp:"第二段說 perverseness 是 an urge to do wrong for no other reason than that we know it is wrong（明知是錯，偏偏想去做的衝動），答案是 (B)。(D) 酒精是他另外提出的原因。"},
  {q:"4. Why do critics call the narrator \"unreliable\"?", tag:"推論",
   opts:["He keeps forgetting the order of events.","He lies to the police on purpose.","His story may be shaped by his guilt.","He was not there when it happened."], a:2,
   exp:"第三段說每個不祥之兆都可能是 a guilty, alcohol-soaked mind（充滿罪惡感、泡在酒裡的腦袋）編出來的，所以他的說法未必可信，答案是 (C)。"},
  {q:"5. Which of the following is NOT mentioned in the passage?", tag:"細節",
   opts:["How much Poe was paid for the story","The name of Poe's own pet cat","What illness Poe's wife died of","How many copies the story sold"], a:3,
   exp:"(A) 二十美元、(B) 凱特琳娜、(C) 肺結核，文中都有提到。文章沒有說這篇小說賣了多少份，答案是 (D)。"}
 ]
];

const META = {
 id:"blackcat", title:"The Black Cat: Who Is the Real Monster?", category:"經典文學",
 dek:"一個從小愛動物的男人，怎麼一步步變成虐貓、殺妻的兇手？把屍體封進牆裡的那一刻，他以為天衣無縫──直到牆裡傳出一聲貓叫。走進愛倫坡 1843 年的經典恐怖小說〈黑貓〉。",
 date:"2026/11/12",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1546618389-edc7251944b1?auto=format&fit=crop&w=1600&q=70" data-local="blackcat-hero.jpg" alt="A black cat lying on a white knit blanket" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#2B2F45"/><circle cx="640" cy="96" r="46" fill="#F3E9C6"/><path d="M0 300 C160 292 300 304 440 296 C580 288 700 300 800 294 V420 H0Z" fill="#8C5E4A"/><g fill="none" stroke="#5E3B2E" stroke-width="3" stroke-linecap="round"><path d="M0 334 C140 330 300 338 460 332 S700 336 800 332"/><path d="M0 372 C160 368 320 376 480 370 S700 374 800 370"/><path d="M90 300 C92 312 90 322 92 334 M250 334 C252 348 250 358 252 372 M380 298 C382 310 380 320 382 332 M560 334 C562 348 560 358 562 370 M690 296 C692 310 690 320 692 334"/></g>
<g transform="translate(400,298) scale(2.6)"><path d="M-17 0 C-25 -12 -23 -32 -13 -43 C-15 -49 -15 -55 -13 -61 C-14 -66 -15 -71 -14 -76 C-10 -73 -7 -69 -5 -66 C-1 -67 3 -67 6 -66 C8 -69 11 -73 15 -76 C16 -71 15 -66 13 -61 C15 -55 15 -49 13 -43 C23 -32 25 -12 17 0 C6 3 -6 3 -17 0Z" fill="#121216"/><path d="M15 -3 C30 -2 38 -10 36 -22 C35 -29 30 -32 27 -30" fill="none" stroke="#121216" stroke-width="5" stroke-linecap="round"/></g></svg>
<figcaption>一隻安靜休息的黑貓。在愛倫坡的〈黑貓〉裡，真正可怕的也許不是貓，而是人心。<span class="credit">Photo: Alexander McFeron / Unsplash</span></figcaption>`,
 fact:"黑貓不一定代表厄運：在英國和日本，黑貓常被當成好運的象徵，日本的黑色招財貓據說還能擋災。愛倫坡寫〈黑貓〉的同一年（1843），也發表了另一篇經典恐怖小說〈告密的心〉（The Tell-Tale Heart），同樣是一個堅稱自己沒瘋的兇手的自白。",
 next:{title:"A Journey Through Taiwan, One Dish at a Time", href:"read.html#travelogue"}
};


/* 導讀模式＋單字小練習 */
const GUIDE = [
 [
  {after:0, q:"When did Poe write \"The Black Cat\"?", opts:["In 1843","In 1943","In 2003"], a:0, hint:"看 In 1843, the American writer…"},
  {after:1, q:"What makes the man angry and cruel?", opts:["He starts to drink too much.","He loses his job in the city.","His cat runs away from home."], a:0, hint:"看 But the man starts to drink too…"},
  {after:2, q:"Where does the man hide his wife's body?", opts:["Behind a wall in the cellar","Under a tree in the garden","Inside a box in the kitchen"], a:0, hint:"看 He hides her body behind a…"}
 ],
 [
  {after:0, q:"How much was Poe paid for the story?", opts:["Just $20","About $200","Nothing at all"], a:0, hint:"看 Poe was paid just…"},
  {after:1, q:"What happens on the night Pluto dies?", opts:["The man's house burns down.","The police knock on the door.","A second cat follows him home."], a:0, hint:"看 That same night, his house…"},
  {after:2, q:"What does the white patch slowly turn into?", opts:["The shape of a gallows","The shape of a heart","The shape of a moon"], a:0, hint:"看 gradually takes the shape of a…"}
 ],
 [
  {after:0, q:"Why is the story still so unsettling?", opts:["Largely because of the voice that tells it","Mostly because it is long and hard to read","Mainly because it is based on a true crime"], a:0, hint:"看 largely because of the ____ that tells it"},
  {after:1, q:"What is the spirit of \"perverseness\"?", opts:["An urge to do wrong because it is wrong","A deep love for animals of every kind","A belief that black cats are really witches"], a:0, hint:"看 an urge to do wrong for no other reason than…"},
  {after:2, q:"Does Poe confirm that something supernatural is happening?", opts:["No, every omen could come from guilt.","Yes, the cat turns out to be a witch.","Yes, the gallows mark proves it is real."], a:0, hint:"看 Yet Poe never confirms that…"}
 ]
];
const VPRAC = [
 [
  {s:"Good ____ on your English test tomorrow!", opts:["luck","mark","chest","fear"], a:0, w:"luck"},
  {s:"It is ____ to hurt animals just for fun.", opts:["cruel","hide","knock","follow"], a:0, w:"cruel"},
  {s:"Wear a helmet to ____ your head when you ride a bike.", opts:["protect","follow","knock","hide"], a:0, w:"protect"},
  {s:"Please ____ on the door before you come in.", opts:["knock","protect","follow","fear"], a:0, w:"knock"},
  {s:"The kids ran to ____ behind the big tree.", opts:["hide","knock","protect","mark"], a:0, w:"hide"}
 ],
 [
  {s:"Her first story was ____ in a magazine when she was only 19.", opts:["published","insisted","searched","patched"], a:0, w:"publish"},
  {s:"My grandma is a ____ woman who never shouts at anyone.", opts:["gentle","violent","supernatural","gradually"], a:0, w:"gentle"},
  {s:"He ____ that he was right, even after we showed him the facts.", opts:["insisted","published","searched","patched"], a:0, w:"insist"},
  {s:"The police ____ the whole house but found nothing.", opts:["searched","insisted","published","gentle"], a:0, w:"search"},
  {s:"She felt deep ____ after lying to her best friend.", opts:["guilt","patch","alcohol","personality"], a:0, w:"guilt"}
 ],
 [
  {s:"The thief tried to ____ the stolen ring inside his sock.", opts:["conceal","adore","foretell","curse"], a:0, w:"conceal"},
  {s:"Children ____ the little puppy and play with it every day.", opts:["adore","conceal","foretell","curse"], a:0, w:"adore"},
  {s:"In the movie, the ____ wants to destroy the whole city.", opts:["villain","omen","confession","execution"], a:0, w:"villain"},
  {s:"Some people think a broken mirror is an ____ of bad luck.", opts:["omen","villain","execution","confession"], a:0, w:"omen"},
  {s:"____, the fire station itself burned down last night.", opts:["Ironically","Unsettling","Chilling","Unreliable"], a:0, w:"ironically"}
 ]
];
return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE,GUIDE,VPRAC});
})();
