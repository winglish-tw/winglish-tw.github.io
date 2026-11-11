/* winglish.tw 閱讀館文章資料：The Animal That Never Grows Up */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"單字量約 2000",
   paras:[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14]], figs:{2:"regen"}, heads:{1:"A Baby Forever",2:"A Super Power",3:"In Danger"},
   sents:[
    ["Have you ever seen a pink animal with a big smile and six feathery things on its head?","你看過一種粉紅色、笑咪咪，頭上還有六根像羽毛一樣的東西的動物嗎？"],
    ["It is called an axolotl, and in Taiwan many people call it the \"six-horned dinosaur.\"","牠叫做墨西哥鈍口螈，在台灣很多人叫牠「六角恐龍」。"],
    ["But it is not a dinosaur at all.","但牠根本不是恐龍。"],
    ["It is a kind of salamander from Mexico.","牠是一種來自墨西哥的蠑螈。"],
    ["Most salamanders are born in water and later move onto land.","大部分的蠑螈在水裡出生，長大後才搬到陸地上。"],
    ["The axolotl is different.","六角恐龍不一樣。"],
    ["It keeps its baby body all its life, so it never leaves the water.","牠一輩子都保持寶寶的身體，所以從來不離開水。"],
    ["The six \"horns\" on its head are really gills, and they help it breathe underwater.","牠頭上的六隻「角」其實是鰓，幫助牠在水裡呼吸。"],
    ["The axolotl also has a super power.","六角恐龍還有一種超能力。"],
    ["If it loses a leg, a new leg will grow back in a few weeks.","如果牠失去一條腿，幾個星期內就會長出一條新的。"],
    ["It can even repair parts of its heart and brain!","牠甚至能修補部分的心臟和大腦！"],
    ["Scientists study axolotls because they hope to help people heal one day.","科學家研究六角恐龍，因為他們希望有一天能幫助人類把傷治好。"],
    ["Sadly, wild axolotls live in only one place: the old canals of Mexico City.","可惜的是，野生的六角恐龍只住在一個地方：墨西哥市古老的運河。"],
    ["Because the water is dirty and other fish eat their babies, very few are left.","因為水很髒，別的魚又會吃牠們的寶寶，所以剩下的非常少。"],
    ["There are many axolotls in pet shops and labs around the world, but in the wild, they may soon be gone.","世界各地的寵物店和實驗室裡有很多六角恐龍，但在野外，牠們可能很快就會消失。"]
 ]},
 { name:"Level 2", rec:"單字量約 4500",
   paras:[[0,1,2],[3,4,5,6],[7,8,9,10],[11,12,13,14],[15]], figs:{2:"regen"}, heads:{1:"The Peter Pan of Animals",2:"Rebuilding the Body",3:"Disappearing from Home"},
   sents:[
    ["With its wide smile, tiny eyes and pink, feathery \"horns,\" the axolotl looks more like a cartoon character than a real animal.","嘴巴笑得開開的、眼睛小小的，頭上還有粉紅色、像羽毛一樣的「角」，六角恐龍看起來比較像卡通人物，不太像真的動物。"],
    ["In Taiwan, it is often sold as the \"six-horned dinosaur,\" yet it is actually a salamander that comes from Mexico.","在台灣，牠常常以「六角恐龍」的名字販賣，但牠其實是一種來自墨西哥的蠑螈。"],
    ["Its name comes from Nahuatl, the language of the Aztecs, and is often translated as \"water monster.\"","牠的英文名字來自阿茲特克人的語言──納瓦特爾語，常被翻成「水怪」。"],
    ["Most salamanders go through a big change as they grow: they lose their gills, develop lungs and walk onto land.","大部分的蠑螈在長大的過程中會經歷很大的變化：鰓會消失、長出肺，然後走上陸地。"],
    ["The axolotl skips this step.","六角恐龍跳過了這一步。"],
    ["Even as an adult, it keeps the features of a baby, including the six feathery gills on its head, so it spends its whole life in water.","就算已經是成年了，牠還是保有寶寶的特徵，包括頭上那六根像羽毛的鰓，所以牠一輩子都待在水裡。"],
    ["Scientists call this neoteny, and some people call the axolotl the \"Peter Pan\" of animals.","科學家把這種現象叫做「幼態延續」，有些人也叫六角恐龍是動物界的「彼得潘」。"],
    ["Its most famous ability, however, is regeneration.","不過，牠最有名的能力是「再生」。"],
    ["If an axolotl loses a leg, it can grow a complete new one, with bones, muscles and nerves, usually without leaving a scar.","如果六角恐龍失去一條腿，牠能長出一條完整的新腿，骨頭、肌肉、神經都有，而且通常不會留下疤痕。"],
    ["It can also repair damage to its spinal cord, heart and even parts of its brain.","牠也能修復脊髓、心臟、甚至部分大腦的損傷。"],
    ["Because humans can only heal small wounds, researchers around the world keep axolotls in labs, hoping to learn how their cells \"remember\" what to rebuild.","因為人類只能治好小傷口，世界各地的研究人員都在實驗室裡養六角恐龍，希望弄懂牠們的細胞怎麼「記得」要重建什麼。"],
    ["Ironically, this amazing animal is in serious trouble in the wild.","諷刺的是，這種神奇的動物在野外的處境非常危險。"],
    ["Wild axolotls live only in the canals of Xochimilco, in the south of Mexico City.","野生的六角恐龍只住在墨西哥市南邊、霍奇米爾科的運河裡。"],
    ["In 1998, researchers counted about 6,000 axolotls per square kilometer there, but by 2014 the number had fallen to around 35.","1998 年，研究人員在那裡算到每平方公里大約有 6,000 隻，但到了 2014 年，只剩大約 35 隻。"],
    ["Polluted water and fish such as tilapia, which eat axolotl eggs and babies, are the main reasons.","被汙染的水，還有會吃六角恐龍卵和寶寶的吳郭魚等魚類，是主要的原因。"],
    ["It would be sad if an animal that can rebuild its own heart could not survive the damage humans have done to its home.","一種能重建自己心臟的動物，卻撐不過人類對牠家園造成的破壞，那會是多令人難過的事。"]
 ]},
 { name:"Level 3", rec:"單字量 7000 以上",
   paras:[[0,1,2],[3,4,5,6],[7,8,9,10,11],[12,13,14,15],[16]], figs:{2:"regen"}, heads:{1:"A Life Without Metamorphosis",2:"Masters of Regeneration",3:"A Vanishing Home"},
   sents:[
    ["Few creatures have become internet celebrities as effortlessly as the axolotl, whose permanent grin and frilly pink gills have made it a favorite of aquarium owners and meme makers alike.","很少有動物像六角恐龍這樣，毫不費力就成了網路明星；牠永遠掛在臉上的笑容和粉紅色的荷葉邊外鰓，讓水族愛好者和做迷因的人都愛上了牠。"],
    ["Marketed in Taiwan as the \"six-horned dinosaur,\" it is in fact neither horned nor a dinosaur but an amphibian native to the high valley of central Mexico.","牠在台灣以「六角恐龍」之名販售，但牠其實既沒有角、也不是恐龍，而是原產於墨西哥中部高地谷地的兩棲動物。"],
    ["Its name, borrowed from Nahuatl, the language of the Aztecs, is commonly rendered as \"water monster,\" a label that hardly fits its gentle appearance.","牠的名字借自阿茲特克人的納瓦特爾語，一般譯作「水怪」──這個稱呼和牠溫和的長相實在不太相配。"],
    ["What sets the axolotl apart from its relatives is a phenomenon known as neoteny.","讓六角恐龍和牠的近親不同的，是一種叫做「幼態延續」的現象。"],
    ["Whereas most salamanders undergo metamorphosis, absorbing their gills and developing lungs before crawling ashore, the axolotl reaches adulthood while retaining its larval features.","大多數的蠑螈都會經歷變態，鰓被身體吸收、長出肺，然後爬上岸；六角恐龍卻在長為成體的同時，保留著幼體的特徵。"],
    ["Its external gills, which branch out from either side of its head like feathery antlers, allow it to extract oxygen from the water throughout its life.","牠的外鰓像羽毛般的鹿角，從頭部兩側分岔伸出，讓牠一輩子都能從水中取得氧氣。"],
    ["Interestingly, an axolotl can be made to metamorphose in the laboratory with thyroid hormone, yet the transformed animal is generally thought to live a shorter life.","有趣的是，在實驗室裡用甲狀腺素就能讓六角恐龍變態，但一般認為，變態後的個體壽命比較短。"],
    ["Even more remarkable is the axolotl's capacity for regeneration.","更令人驚嘆的是六角恐龍的再生能力。"],
    ["When a limb is lost, cells near the wound form a cluster called a blastema, which then rebuilds the missing part, including bone, muscle, nerves and skin, in the right order and proportion.","失去一隻腳時，傷口附近的細胞會聚成一團叫做「芽基」的組織，接著按照正確的順序和比例，把缺少的部分──包括骨頭、肌肉、神經和皮膚──重建回來。"],
    ["Unlike most animals, which seal injuries with scar tissue, the axolotl restores damaged tissue so precisely that the new limb is often indistinguishable from the original.","大部分動物會用疤痕組織封住傷口，六角恐龍卻能把受損的組織修復得非常精準，新長出的腳往往和原本的分不出差別。"],
    ["It can likewise mend its spinal cord, portions of its heart and even sections of its brain.","牠同樣能修補自己的脊髓、部分心臟，甚至部分大腦。"],
    ["Biologists hope that by decoding how axolotl cells \"know\" what to rebuild, they may one day unlock similar abilities in human medicine, and the effort was given a boost in 2018, when scientists published its enormous genome, roughly ten times the size of our own.","生物學家希望，只要解開六角恐龍的細胞怎麼「知道」該重建什麼，有一天就能在人類醫學上開啟類似的能力；2018 年，科學家發表了牠龐大的基因組，大約是人類的十倍，讓這項研究大大推進了一步。"],
    ["Paradoxically, while axolotls thrive by the thousands in laboratories and pet shops worldwide, the species is critically endangered in its only natural habitat, the ancient canals of Xochimilco in southern Mexico City.","矛盾的是，六角恐龍在世界各地的實驗室和寵物店裡大量繁衍，在牠唯一的天然棲地──墨西哥市南部霍奇米爾科的古老運河──卻已經極度瀕危。"],
    ["Surveys by researchers at the National Autonomous University of Mexico found that densities fell from roughly 6,000 animals per square kilometer in 1998 to about 35 by 2014.","墨西哥國立自治大學研究人員的調查發現，牠們的密度從 1998 年每平方公里約 6,000 隻，降到 2014 年只剩約 35 隻。"],
    ["Untreated wastewater and the introduction of carp and tilapia, which devour axolotl eggs and young, have been blamed for the collapse.","未經處理的廢水，以及被引進的鯉魚和吳郭魚──牠們會吞食六角恐龍的卵和幼體──被認為是數量崩跌的原因。"],
    ["Conservationists are now working with local farmers to restore clean \"refuges\" within the canals where the animals can breed in safety.","保育人士現在正和當地農民合作，在運河裡恢復一些乾淨的「避難所」，讓牠們能安全地繁殖。"],
    ["The irony is hard to miss: a creature capable of regrowing its own heart may not be able to recover from the harm humans have inflicted on its home.","這其中的諷刺再明顯不過：一種能讓自己的心臟重新長回來的生物，或許卻無法從人類對牠家園造成的傷害中復原。"]
 ]}
];

const GLOSS = {
  axolotl:["n.","墨西哥鈍口螈（六角恐龍）"], pink:["adj.","粉紅色的"], smile:["n.","微笑"], feathery:["adj.","像羽毛的"], dinosaur:["n.","恐龍"],
  salamander:["n.","蠑螈"], mexico:["n.","墨西哥"], born:["adj.","出生的"], land:["n.","陸地"], different:["adj.","不同的"],
  baby:["n.","嬰兒；幼體"], horn:["n.","角"], gill:["n.","鰓"], breathe:["v.","呼吸"], underwater:["adv.","在水中"],
  power:["n.","力量；能力"], lose:["v.","失去"], loses:["v.","失去（lose 的第三人稱單數）"], grow:["v.","生長"], repair:["v.","修補"],
  heart:["n.","心臟"], brain:["n.","大腦"], scientist:["n.","科學家"], heal:["v.","痊癒；治癒"], sadly:["adv.","可惜地；令人難過地"],
  wild:["adj.","野生的；n. 野外"], canal:["n.","運河"], dirty:["adj.","髒的"], lab:["n.","實驗室"],
  cartoon:["n.","卡通"], character:["n.","角色；人物"], actually:["adv.","其實"], nahuatl:["n.","納瓦特爾語"], aztec:["n.","阿茲特克人"],
  translate:["v.","翻譯"], monster:["n.","怪物"], develop:["v.","發展出；長出"], lung:["n.","肺"], skip:["v.","跳過"],
  adult:["n.","成年；成體"], feature:["n.","特徵"], neoteny:["n.","幼態延續"], ability:["n.","能力"], regeneration:["n.","再生"],
  complete:["adj.","完整的"], bone:["n.","骨頭"], muscle:["n.","肌肉"], nerve:["n.","神經"], scar:["n.","疤痕"],
  spinal:["adj.","脊椎的；spinal cord 脊髓"], cord:["n.","索狀物；spinal cord 脊髓"], damage:["n.","損傷；破壞"], wound:["n.","傷口"],
  researcher:["n.","研究人員"], cell:["n.","細胞"], rebuild:["v.","重建"], ironically:["adv.","諷刺地"], serious:["adj.","嚴重的"],
  trouble:["n.","麻煩；困境"], xochimilco:["n.","霍奇米爾科（墨西哥市南部地區）"], kilometer:["n.","公里；square kilometer 平方公里"],
  square:["adj.","平方的"], polluted:["adj.","被汙染的"], tilapia:["n.","吳郭魚"], survive:["v.","存活；撐過"],
  creature:["n.","生物"], celebrity:["n.","名人"], effortlessly:["adv.","毫不費力地"], permanent:["adj.","永久的"], grin:["n.","露齒的笑"],
  frilly:["adj.","有荷葉邊的"], aquarium:["n.","水族箱；水族館"], meme:["n.","迷因"], alike:["adv.","同樣地；…和…都"],
  market:["v.","行銷；販售"], amphibian:["n.","兩棲動物"], native:["adj.","原產於…的"], valley:["n.","山谷"], render:["v.","翻譯；表達"],
  label:["n.","標籤；稱呼"], hardly:["adv.","幾乎不"], gentle:["adj.","溫和的"], appearance:["n.","外表"],
  relative:["n.","親戚；近親"], phenomenon:["n.","現象"], whereas:["conj.","然而；反之"], undergo:["v.","經歷"],
  metamorphosis:["n.","變態（生物的形態轉變）"], metamorphose:["v.","變態；轉變形態"], absorb:["v.","吸收"], ashore:["adv.","上岸"],
  retain:["v.","保留"], larval:["adj.","幼體的"], external:["adj.","外部的"], branch:["v.","分岔"], antler:["n.","鹿角"],
  extract:["v.","取出；提取"], oxygen:["n.","氧氣"], laboratory:["n.","實驗室"], thyroid:["adj.","甲狀腺的"], hormone:["n.","荷爾蒙；激素"],
  transformed:["adj.","變形後的"], generally:["adv.","一般地"], remarkable:["adj.","非凡的；了不起的"], capacity:["n.","能力"],
  limb:["n.","四肢；肢體"], cluster:["n.","一團；一群"], blastema:["n.","芽基（再生時形成的細胞團）"], proportion:["n.","比例"],
  seal:["v.","封住"], injury:["n.","傷害"], tissue:["n.","組織"], restore:["v.","恢復；修復"], precisely:["adv.","精準地"],
  indistinguishable:["adj.","無法區分的"], original:["n.","原本的東西"], likewise:["adv.","同樣地"], mend:["v.","修補"],
  portion:["n.","部分"], biologist:["n.","生物學家"], decode:["v.","解碼；解開"], unlock:["v.","開啟；解鎖"], boost:["n.","推動；提升"],
  enormous:["adj.","巨大的"], genome:["n.","基因組"], roughly:["adv.","大約"], paradoxically:["adv.","矛盾地"], thrive:["v.","繁盛；茁壯"],
  species:["n.","物種"], critically:["adv.","極度地；critically endangered 極度瀕危"], endangered:["adj.","瀕臨絕種的"],
  habitat:["n.","棲地"], ancient:["adj.","古老的"], survey:["n.","調查"], autonomous:["adj.","自治的"], density:["n.","密度"],
  untreated:["adj.","未經處理的"], wastewater:["n.","廢水"], introduction:["n.","引進"], carp:["n.","鯉魚"], devour:["v.","吞食"],
  collapse:["n.","崩潰；崩跌"], conservationist:["n.","保育人士"], refuge:["n.","避難所"], breed:["v.","繁殖"], irony:["n.","諷刺"],
  capable:["adj.","有能力的"], regrow:["v.","重新長出"], recover:["v.","恢復；復原"], inflict:["v.","造成（傷害）"]
};
const KEY = [["salamander","gill","breathe","repair","heart","brain","heal","wild","canal","dirty"],
             ["feature","neoteny","regeneration","complete","nerve","scar","wound","rebuild","ironically","polluted","survive"],
             ["effortlessly","native","undergo","metamorphosis","retain","external","extract","blastema","indistinguishable","mend","decode","thrive","habitat","devour","inflict"]];

const DEFS = {
  "salamander": "an animal like a lizard with soft wet skin that lives on land and in water",
  "gill": "the part of a fish or water animal's body that it uses to breathe",
  "breathe": "to take air into your body and let it out again",
  "repair": "to fix something that is broken or damaged",
  "heart": "the organ in your chest that pumps blood around your body",
  "brain": "the organ inside your head that controls thinking, feeling and movement",
  "heal": "to become healthy again, or to make a wound or injury healthy again",
  "wild": "living in nature without being controlled by people",
  "canal": "a long passage dug in the ground and filled with water for boats to travel on",
  "dirty": "not clean; covered with dust, mud or other unwanted things",
  "feature": "a typical quality or an important part of something",
  "neoteny": "keeping young features, such as a baby's body shape, as an adult",
  "regeneration": "the natural process of growing again after being lost or damaged",
  "complete": "having all the parts; whole",
  "nerve": "a long thin fiber that carries messages between the brain and other parts of the body",
  "scar": "a mark left on the skin after a wound has healed",
  "wound": "an injury in which the skin is cut or broken",
  "rebuild": "to build something again after it has been damaged or destroyed",
  "ironically": "in a way that is the opposite of what you would expect",
  "polluted": "made dirty and harmful by waste or chemicals",
  "survive": "to continue to live or exist, especially in spite of danger or difficulty",
  "effortlessly": "without needing any effort; very easily",
  "native": "growing or living naturally in a particular place",
  "undergo": "to experience something, especially a change or something unpleasant",
  "metamorphosis": "a complete change of form, as when a tadpole becomes a frog",
  "retain": "to keep or continue to have something",
  "external": "on or from the outside",
  "extract": "to remove or take out something, especially by effort",
  "blastema": "a group of cells that forms where a body part was lost and can grow into a new one",
  "indistinguishable": "so similar that you cannot see any difference",
  "mend": "to repair something that is broken or damaged",
  "decode": "to discover the meaning of something difficult or hidden",
  "thrive": "to grow, develop or be very successful",
  "habitat": "the natural home of an animal or plant",
  "devour": "to eat something eagerly and quickly",
  "inflict": "to make someone suffer something unpleasant, such as an injury"
};

const FIGS = {
  regen:{svg:`<svg viewBox="0 0 600 340" role="img" aria-label="Diagram of an axolotl's body and the parts it can regrow" style="display:block;width:100%;height:auto;border-radius:6px;background:#EEF6FB">
<path d="M0 290 C120 276 220 296 330 284 S520 270 600 288 V340 H0Z" fill="#D9E8DF"/>
<g fill="none" stroke="#7FB08F" stroke-width="4" stroke-linecap="round"><path d="M520 300 C512 260 528 230 516 196"/><path d="M540 302 C548 270 536 246 548 214"/></g>
<path d="M150 170 C150 128 196 108 246 112 C300 116 350 128 400 140 C450 152 500 150 548 136 C520 168 470 186 420 190 C370 194 320 198 270 204 C220 210 160 210 150 170Z" fill="#F7C6CF" stroke="#C97A8A" stroke-width="2.5"/>
<path d="M402 142 C450 128 500 120 548 136" fill="none" stroke="#C97A8A" stroke-width="2" opacity=".6"/>
<g fill="#F7C6CF" stroke="#C97A8A" stroke-width="2.5" stroke-linecap="round">
<path d="M222 200 C214 222 204 236 190 246 C200 250 212 246 220 240 C226 230 232 216 236 204Z"/>
<path d="M370 194 C368 216 360 232 348 244 C358 248 370 244 378 236 C382 224 386 210 386 196Z"/>
</g>
<path d="M232 200 C226 222 214 238 200 248" fill="none" stroke="#D23F57" stroke-width="2.5" stroke-dasharray="5 4"/>
<g fill="#E58FA0" stroke="#C97A8A" stroke-width="1.5">
<path d="M176 126 C160 104 150 92 136 86 C146 100 154 112 170 132Z"/><path d="M168 138 C146 126 130 120 114 120 C130 130 144 136 164 146Z"/><path d="M166 152 C144 150 128 152 112 160 C130 162 146 162 166 160Z"/>
</g>
<circle cx="190" cy="146" r="5" fill="#1A2238"/><path d="M160 178 C170 186 184 188 196 182" fill="none" stroke="#1A2238" stroke-width="2.5" stroke-linecap="round"/>
<path d="M262 150 c-6 -8 -18 -2 -10 7 l10 8 10 -8 c8 -9 -4 -15 -10 -7Z" fill="#D23F57" opacity=".85"/>
<path d="M200 128 c4 -8 16 -8 18 0 c2 8 -6 12 -10 12 c-6 0 -10 -6 -8 -12Z" fill="#B28AC9" opacity=".85"/>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238">
<text x="24" y="44" font-size="15" font-weight="700">External gills ×6</text><text x="24" y="62" font-size="11" fill="#5A6478">外鰓（就是「六隻角」）</text><path d="M110 70 C120 80 128 88 136 92" stroke="#1A2238" stroke-width="1.5" fill="none"/>
<text x="250" y="44" font-size="15" font-weight="700" fill="#7A4FA0">Brain: can repair parts</text><text x="250" y="62" font-size="11" fill="#5A6478">部分大腦也能修補</text><path d="M260 68 C240 86 226 104 214 122" stroke="#7A4FA0" stroke-width="1.5" fill="none"/>
<text x="330" y="96" font-size="15" font-weight="700" fill="#D23F57">Heart: can heal</text><text x="330" y="114" font-size="11" fill="#5A6478">心臟受傷也能修復</text><path d="M330 104 C306 116 288 132 272 150" stroke="#D23F57" stroke-width="1.5" fill="none"/>
<text x="24" y="284" font-size="15" font-weight="700" fill="#D23F57">A lost leg grows back</text><text x="24" y="302" font-size="11" fill="#5A6478">斷掉的腳會長回來：骨頭、肌肉、神經、皮膚都有</text><path d="M120 270 C150 262 176 256 196 250" stroke="#D23F57" stroke-width="1.5" fill="none"/>
<text x="400" y="232" font-size="13" font-weight="700">Lives in water all its life</text><text x="400" y="250" font-size="11" fill="#5A6478">一輩子住在水裡，不上岸</text>
</g></svg>`,
    cap:"六角恐龍的「超能力」：斷掉的腳會長回來，連心臟和部分大腦都能修補。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["How to keep a pet dinosaur","An animal that stays like a baby and can regrow its body","Why Mexico City has many canals","How fish eat their babies"],
   "a":1,"exp":"文章介紹六角恐龍一輩子保持寶寶的身體，還能長回失去的腳、修補心臟和大腦，答案是 (B)。"},
  {"q":"2. Why does the axolotl never leave the water?","tag":"因果",
   "opts":["It is afraid of people.","It is too big to walk.","It keeps its baby body and breathes with gills all its life.","The land in Mexico is too hot."],
   "a":2,"exp":"第二段：牠一輩子保持寶寶的身體，頭上的「角」其實是鰓，所以從來不離開水，答案是 (C)。"},
  {"q":"3. Which of the following is TRUE?","tag":"細節",
   "opts":["Axolotls are a kind of dinosaur.","Wild axolotls live all over the world.","There are more axolotls in the wild than in labs.","An axolotl can grow back a lost leg."],
   "a":3,"exp":"第三段：失去一條腿，幾個星期內就會長回來，(D) 正確。(A) 錯，牠是蠑螈；(B) 錯，野生的只住在墨西哥市；(C) 和文意相反。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["The Axolotl: A Forever-Young Healer in Danger","How to Catch Fish in Mexico","Dinosaurs That Still Live Today","Why Salamanders Walk on Land"],
   "a":0,"exp":"全文講六角恐龍「永遠長不大」、「再生能力」和「野外快要消失」三件事，(A) 最完整。"},
  {"q":"2. What does \"neoteny\" in the second paragraph mean?","tag":"字義",
   "opts":["Growing back a lost body part","Keeping baby features as an adult","Living both in water and on land","Changing color to hide"],
   "a":1,"exp":"前文說牠成年後還保有寶寶的特徵，科學家把這叫做 neoteny（幼態延續），答案是 (B)。(A) 是 regeneration。"},
  {"q":"3. Why do researchers keep axolotls in labs?","tag":"因果",
   "opts":["To sell them as pets","To make them grow bigger","To learn how their cells know what to rebuild","To teach them to live on land"],
   "a":2,"exp":"第三段：研究人員希望弄懂牠們的細胞怎麼「記得」要重建什麼，答案是 (C)。"},
  {"q":"4. According to the passage, what is one reason wild axolotls are disappearing?","tag":"細節",
   "opts":["People eat too many of them.","Tilapia eat their eggs and babies.","The canals have become too cold.","They have moved to other countries."],
   "a":1,"exp":"第四段：汙染的水，還有吳郭魚等會吃卵和寶寶的魚，是主要原因，答案是 (B)。"}
 ],
 [
  {"q":"1. What irony does the author point out in the last paragraph?","tag":"主旨",
   "opts":["An animal that can heal itself may not survive the harm done to its home.","Axolotls are popular online but disliked in Mexico.","Scientists study axolotls but cannot find any.","Axolotls look friendly but are actually monsters."],
   "a":0,"exp":"最後一段：能讓心臟重新長回來的生物，卻可能無法從人類對牠家園的傷害中復原，答案是 (A)。"},
  {"q":"2. The word \"indistinguishable\" in the third paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["much stronger","impossible to tell apart","slightly smaller","easy to break"],
   "a":1,"exp":"新長出的腳和原本的 indistinguishable，意思是「分辨不出差別」，答案是 (B)。"},
  {"q":"3. What happens when most salamanders undergo metamorphosis?","tag":"細節",
   "opts":["They grow more gills.","They lose their legs.","They absorb their gills and develop lungs.","They become larger than axolotls."],
   "a":2,"exp":"第二段：大多數蠑螈變態時，鰓被吸收、長出肺，然後爬上岸，答案是 (C)。"},
  {"q":"4. What can be inferred about the axolotls sold in pet shops?","tag":"推論",
   "opts":["They can no longer regrow their limbs.","They are all caught from Xochimilco.","Their large numbers do not mean the species is safe in the wild.","They are a different species from wild axolotls."],
   "a":2,"exp":"第四段用 Paradoxically 點出：實驗室和寵物店裡很多，野外卻極度瀕危，可見數量多不代表野生族群安全，答案是 (C)。"},
  {"q":"5. Which of the following is NOT mentioned in the passage?","tag":"細節",
   "opts":["The axolotl's genome is about ten times the size of a human's.","Thyroid hormone can make an axolotl metamorphose.","Axolotls can live for more than 100 years.","Carp and tilapia eat axolotl eggs and young."],
   "a":2,"exp":"文中沒有提到六角恐龍能活一百年以上，所以 (C) 沒有被提到。其他三項都出現在第二到四段。"}
 ]
];

const META = {
 id:"axolotl", title:"The Animal That Never Grows Up", category:"動物冷知識",
 dek:"笑咪咪的「六角恐龍」其實不是恐龍：牠一輩子長不大，斷了腳會長回來，連心臟都能修補，卻在自己的老家快要消失了。",
 date:"2026/11/2",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1578999621243-9381851a6a84?auto=format&fit=crop&w=1600&q=70" data-local="axolotl-hero.jpg" alt="An axolotl beside a water plant" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#BFE3E8"/><path d="M0 360 C200 340 400 372 600 352 S760 344 800 356 V420 H0Z" fill="#D9E8DF"/>
<g fill="none" stroke="#7FB08F" stroke-width="6" stroke-linecap="round"><path d="M680 370 C668 300 694 250 676 190"/><path d="M710 372 C722 316 704 270 722 220"/></g>
<path d="M200 220 C200 160 270 130 340 136 C420 142 490 160 560 176 C620 190 660 186 700 170 C670 214 610 236 540 240 C470 244 400 250 330 256 C260 262 200 270 200 220Z" fill="#F7C6CF" stroke="#C97A8A" stroke-width="3"/>
<g fill="#E58FA0"><path d="M232 160 C208 128 192 112 170 104 C186 126 198 144 222 172Z"/><path d="M222 178 C190 162 168 154 144 156 C168 170 190 178 218 190Z"/><path d="M220 198 C188 196 166 200 144 212 C170 214 194 214 222 210Z"/></g>
<circle cx="262" cy="192" r="7" fill="#1A2238"/><path d="M220 232 C236 244 256 246 272 238" fill="none" stroke="#1A2238" stroke-width="3" stroke-linecap="round"/></svg>
<figcaption>六角恐龍頭上的「六隻角」其實是鰓，讓牠一輩子都在水裡呼吸。<span class="credit">Photo: Chantal Bodmer / Unsplash</span></figcaption>`,
 fact:"六角恐龍的基因組大約是人類的 10 倍大，是科學家定序過最大的動物基因組之一。科學家正在裡面尋找「再生」的祕密。",
 next:{title:"Never Forget a Face", href:"read.html#crows"}
};
const USAGE = {
  "salamander": ["a fire salamander · salamanders live in/near water", "We found a small salamander hiding under a wet rock by the stream.", "我們在溪邊一塊濕石頭底下發現一隻小蠑螈。"],
  "gill": ["breathe through gills · a fish's gills", "Fish take in oxygen from the water through their gills.", "魚透過鰓從水中吸取氧氣。"],
  "breathe": ["breathe in / breathe out · breathe deeply · breathe fresh air", "Close your eyes and breathe deeply before you start the test.", "考試開始前，閉上眼睛深呼吸。"],
  "repair": ["repair a bike · repair the damage · get sth repaired", "My dad repaired my old bike, so now I can ride it to school.", "爸爸把我的舊腳踏車修好了，所以我現在可以騎它上學。"],
  "heart": ["heart disease · heart attack · my heart beats fast", "My heart beats very fast when I speak in front of the class.", "我在全班面前說話時，心跳得好快。"],
  "brain": ["use your brain · brain damage · the human brain", "Playing chess is a good way to exercise your brain.", "下西洋棋是鍛鍊大腦的好方法。"],
  "heal": ["heal a wound · heal quickly · the cut healed", "The cut on my finger healed in just three days.", "我手指上的傷口只花三天就癒合了。"],
  "wild": ["wild animals · in the wild · grow wild", "Pandas in the wild eat bamboo almost all day.", "野生的貓熊幾乎整天都在吃竹子。"],
  "canal": ["a canal boat · along the canal · dig a canal", "We took a boat ride along the canals of Venice.", "我們搭船遊覽了威尼斯的運河。"],
  "dirty": ["dirty clothes · dirty water · get dirty", "Don't drink that water — it's too dirty.", "別喝那個水，它太髒了。"],
  "feature": ["a key feature · a special feature · facial features", "The most popular feature of the new phone is its camera.", "這支新手機最受歡迎的特色是它的相機。"],
  "neoteny": ["show neoteny · neoteny in animals", "Some scientists think dogs show neoteny, because adult dogs still act like playful puppies.", "有些科學家認為狗有幼態延續的現象，因為成年狗的行為還是像愛玩的小狗。"],
  "regeneration": ["cell regeneration · the regeneration of tissue · urban regeneration", "Sleep is important for cell regeneration in our skin.", "睡眠對我們皮膚的細胞再生很重要。"],
  "complete": ["a complete set · complete silence · complete the form", "I finally have a complete set of the comic books.", "我終於收集到一整套完整的漫畫了。"],
  "nerve": ["nerve cells · a nerve ending · damage a nerve", "The doctor said the accident had damaged a nerve in his arm.", "醫生說那場意外傷到了他手臂的一條神經。"],
  "scar": ["leave a scar · a deep scar · a scar on one's face", "The fall left a small scar on her knee.", "那次跌倒在她膝蓋上留下一個小疤痕。"],
  "wound": ["a deep wound · clean a wound · the wound heals", "The nurse cleaned the wound and covered it with a bandage.", "護理師清洗傷口，然後用繃帶包起來。"],
  "rebuild": ["rebuild a house · rebuild one's life · rebuild trust", "After the earthquake, the town took ten years to rebuild its schools.", "地震過後，這個小鎮花了十年重建學校。"],
  "ironically": ["Ironically, … · ironically enough", "Ironically, the fire station itself caught fire last night.", "諷刺的是，消防局本身昨晚竟然失火了。"],
  "polluted": ["polluted air · heavily polluted · a polluted river", "The river is so heavily polluted that no fish can live in it.", "這條河汙染得非常嚴重，沒有魚能在裡面生存。"],
  "survive": ["survive a crash · survive on sth · barely survive", "Camels can survive for weeks without drinking water.", "駱駝可以好幾個星期不喝水還活得下去。"],
  "effortlessly": ["move effortlessly · effortlessly switch between", "She switches effortlessly between English, Japanese, and Chinese.", "她能毫不費力地在英文、日文和中文之間切換。"],
  "native": ["native to (a place) · native species · native speaker", "Kangaroos are native to Australia and are not found in the wild anywhere else.", "袋鼠原產於澳洲，在其他地方的野外找不到。"],
  "undergo": ["undergo surgery · undergo a change · undergo training", "The old train station is undergoing major repairs this year.", "那座舊火車站今年正在進行大規模整修。"],
  "metamorphosis": ["undergo a metamorphosis · complete metamorphosis", "A caterpillar goes through metamorphosis before it becomes a butterfly.", "毛毛蟲在變成蝴蝶之前要經過變態的過程。"],
  "retain": ["retain heat · retain one's title · retain information", "Clay pots retain heat well, so food stays warm for a long time.", "陶鍋很能保溫，所以食物可以保溫很久。"],
  "external": ["external walls · for external use only · external factors", "This cream is for external use only; do not swallow it.", "這款藥膏僅供外用，請勿吞食。"],
  "extract": ["extract oil from · extract a tooth · extract information", "Olive oil is extracted from fresh olives by pressing them.", "橄欖油是把新鮮橄欖壓榨後提取出來的。"],
  "blastema": ["form a blastema · blastema cells", "When a starfish loses an arm, a blastema forms at the wound and slowly becomes a new arm.", "海星失去一隻腕時，傷口會形成芽基，慢慢長成一隻新腕。"],
  "indistinguishable": ["indistinguishable from · virtually indistinguishable", "The fake painting was almost indistinguishable from the original.", "那幅假畫和真跡幾乎無法分辨。"],
  "mend": ["mend a fence · mend clothes · mend a relationship", "My grandmother mended the hole in my sweater by hand.", "奶奶用手把我毛衣上的破洞補好了。"],
  "decode": ["decode a message · decode the genome · decode body language", "The spy needed a special key to decode the secret message.", "那名間諜需要一把特別的密鑰才能解開這則祕密訊息。"],
  "thrive": ["thrive on · thrive in (a place) · a thriving business", "Cactuses thrive in hot, dry places where other plants die.", "仙人掌在其他植物會死的炎熱乾燥之地反而長得茂盛。"],
  "habitat": ["natural habitat · habitat loss · destroy a habitat", "Habitat loss is the biggest threat to orangutans in Borneo.", "棲地流失是婆羅洲紅毛猩猩面臨的最大威脅。"],
  "devour": ["devour one's food · devour a book", "The hungry kids devoured the whole pizza in five minutes.", "那群餓壞的孩子五分鐘就把整個披薩吃光。"],
  "inflict": ["inflict damage on · inflict pain on · inflict harm on", "The typhoon inflicted serious damage on the island's farms.", "颱風對島上的農場造成了嚴重損害。"]
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
