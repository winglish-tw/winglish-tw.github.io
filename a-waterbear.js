/* Winglish 閱讀館文章資料：The Toughest Tiny Animal */
window.ARTICLE = (function(){
const LEVELS = [
 {
  "name": "Level 1",
  "rec": "國三（會考程度）",
  "paras": [
   [
    0,
    1,
    2,
    3
   ],
   [
    4,
    5,
    6,
    7,
    8
   ],
   [
    9,
    10,
    11
   ],
   [
    12,
    13,
    14,
    15,
    16
   ]
  ],
  "figs": {
   "1": "wb"
  },
  "heads": {
   "0": "Tiny Bears",
   "1": "A Clever Trick",
   "2": "Trip to Space",
   "3": "Not a Superhero"
  },
  "sents": [
   [
    "Some of the toughest animals on Earth are only about half a millimeter long.",
    "地球上有些最強悍的動物，身長只有大約半公釐。"
   ],
   [
    "They are called tardigrades, or \"water bears.\"",
    "牠們叫做緩步動物，也叫「水熊蟲」。"
   ],
   [
    "Under a microscope, they look like tiny bears with eight short legs.",
    "在顯微鏡下，牠們看起來像有八條短腿的小熊。"
   ],
   [
    "They live almost everywhere, from wet moss to the deep ocean.",
    "牠們幾乎無所不在，從潮濕的苔蘚到深海都有。"
   ],
   [
    "Water bears have an amazing trick.",
    "水熊蟲有一個驚人的絕招。"
   ],
   [
    "When their home dries up, they pull in their heads and legs and lose almost all the water in their bodies.",
    "當牠們的家變乾時，牠們會把頭和腳縮起來，排出身體裡幾乎所有的水。"
   ],
   [
    "They become a dry little ball called a \"tun.\"",
    "牠們變成一個乾乾的小球，叫做「小桶」。"
   ],
   [
    "In this state, they can survive extreme cold, great heat, and strong radiation.",
    "在這種狀態下，牠們能撐過極冷、高溫和強烈的輻射。"
   ],
   [
    "When water comes back, they wake up and start walking again.",
    "當水回來時，牠們就會醒過來，再次開始走動。"
   ],
   [
    "In 2007, scientists even sent dry water bears into space.",
    "2007 年，科學家甚至把乾燥的水熊蟲送上太空。"
   ],
   [
    "They stayed outside a spacecraft for 10 days.",
    "牠們在太空船外面待了 10 天。"
   ],
   [
    "Back on Earth, some of them came back to life and even laid eggs.",
    "回到地球後，有些水熊蟲活了過來，甚至還產了卵。"
   ],
   [
    "But water bears are not superheroes all the time.",
    "但水熊蟲並不是隨時都是超級英雄。"
   ],
   [
    "When they are active, they are actually quite weak.",
    "當牠們在活動時，其實相當脆弱。"
   ],
   [
    "Two days in water at about 37°C, the temperature of the human body, can kill half of them.",
    "在大約 37°C、也就是人體溫度的水裡泡兩天，就能讓一半的水熊蟲死亡。"
   ],
   [
    "Their secret is not being strong all the time; it is knowing when to rest.",
    "牠們的祕訣不是一直很強，而是知道什麼時候該休息。"
   ],
   [
    "Scientists are now studying them to learn how to protect human cells.",
    "科學家現在正研究牠們，想學會如何保護人類的細胞。"
   ]
  ]
 },
 {
  "name": "Level 2",
  "rec": "高二",
  "paras": [
   [
    0,
    1,
    2,
    3
   ],
   [
    4,
    5,
    6,
    7
   ],
   [
    8,
    9,
    10
   ],
   [
    11,
    12,
    13
   ],
   [
    14,
    15
   ]
  ],
  "figs": {
   "1": "wb"
  },
  "heads": {
   "0": "Little Water Bears",
   "1": "Turning into a Tun",
   "2": "Tardigrades in Space",
   "3": "A Protective Protein",
   "4": "Tough but Not Unbeatable"
  },
  "sents": [
   [
    "In 1773, a German scientist looked through a microscope and saw a chubby creature slowly crawling on eight stubby legs.",
    "1773 年，一位德國科學家透過顯微鏡，看到一隻胖嘟嘟的生物用八條短短的腿慢慢爬行。"
   ],
   [
    "He named it a \"little water bear.\"",
    "他把牠取名為「小水熊」。"
   ],
   [
    "Today, scientists know of more than 1,000 species of these animals, officially called tardigrades.",
    "今天，科學家已知這類動物超過 1,000 種，正式名稱是緩步動物。"
   ],
   [
    "Most are about half a millimeter long and live in moss, soil, lakes, and oceans.",
    "牠們大多長約半公釐，生活在苔蘚、土壤、湖泊和海洋中。"
   ],
   [
    "Tardigrades are famous for surviving conditions that would kill almost anything else.",
    "緩步動物以能在幾乎會殺死所有生物的環境中存活而聞名。"
   ],
   [
    "When their surroundings dry out, they curl up, lose nearly all their water, and slow their metabolism almost to zero.",
    "當周遭環境變乾時，牠們會蜷縮起來，失去幾乎所有的水分，並把新陳代謝降到幾乎為零。"
   ],
   [
    "In this state, called a tun, they can survive brief exposure to temperatures close to absolute zero and as high as about 150°C.",
    "在這種被稱為「小桶」的狀態下，牠們能短暫撐過接近絕對零度、以及高達約 150°C 的溫度。"
   ],
   [
    "Add water, and many of them return to normal life within hours.",
    "加點水，許多水熊蟲在幾小時內就能恢復正常生活。"
   ],
   [
    "In 2007, European scientists put dried tardigrades on the outside of a spacecraft, exposing them to the vacuum of space for 10 days.",
    "2007 年，歐洲科學家把乾燥的水熊蟲放在太空船外面，讓牠們暴露在太空真空中 10 天。"
   ],
   [
    "After returning to Earth, many of them revived, and some even produced healthy young.",
    "回到地球後，許多水熊蟲復活了，有些甚至產下健康的後代。"
   ],
   [
    "They became the first animals known to survive direct exposure to space.",
    "牠們成為已知第一種直接暴露在太空中還能存活的動物。"
   ],
   [
    "Scientists have also discovered a protein in one species that protects its DNA from radiation.",
    "科學家也在其中一種水熊蟲身上發現了一種能保護 DNA 不受輻射傷害的蛋白質。"
   ],
   [
    "When researchers added this protein to human cells in the lab, the cells suffered much less damage from X-rays.",
    "研究人員在實驗室裡把這種蛋白質加入人類細胞時，細胞受到的 X 光傷害少了很多。"
   ],
   [
    "This could one day help protect healthy cells during cancer treatment.",
    "這也許有一天能幫助癌症治療時保護健康的細胞。"
   ],
   [
    "Still, tardigrades are not indestructible, since active ones can die after two days in water at about 37°C.",
    "不過，水熊蟲並不是打不死的，活動中的水熊蟲在約 37°C 的水裡待兩天就可能死亡。"
   ],
   [
    "Their real strength is not toughness but the ability to pause life until conditions improve.",
    "牠們真正的本事不是強壯，而是能讓生命暫停，等待環境好轉。"
   ]
  ]
 },
 {
  "name": "Level 3",
  "rec": "比學測更難（進階挑戰）",
  "paras": [
   [
    0,
    1,
    2
   ],
   [
    3,
    4,
    5,
    6
   ],
   [
    7,
    8,
    9
   ],
   [
    10,
    11,
    12
   ],
   [
    13,
    14
   ]
  ],
  "figs": {
   "1": "wb"
  },
  "heads": {
   "0": "An Unlikely Champion",
   "1": "The Science of Suspended Animation",
   "2": "Beyond Earth",
   "3": "Lessons for Medicine",
   "4": "The Myth of Invincibility"
  },
  "sents": [
   [
    "Among the animals that have captured public imagination, few are as improbable as the tardigrade, a creature roughly half a millimeter long that resembles a miniature, eight-legged bear.",
    "在引起大眾好奇的動物中，很少有像緩步動物這樣出人意料的：牠長約半公釐，看起來像一隻迷你的八腳熊。"
   ],
   [
    "First described in 1773 and nicknamed the \"water bear,\" it is now known to comprise more than a thousand species inhabiting environments from mountain moss to deep-sea sediments.",
    "牠在 1773 年首次被描述，綽號「水熊」，如今已知超過一千種，棲息在從高山苔蘚到深海沉積物的各種環境中。"
   ],
   [
    "Its reputation rests on a capacity for survival that seems to defy biology.",
    "牠的名聲建立在一種似乎違反生物學的生存能力上。"
   ],
   [
    "The key is a process called anhydrobiosis, or life without water.",
    "關鍵在於一種稱為「乾眠」的過程，也就是在沒有水的情況下維持生命。"
   ],
   [
    "As its habitat dries, a tardigrade retracts its head and limbs into a compact shape known as a tun and loses most of its body water.",
    "當棲地變乾時，水熊蟲會把頭和四肢縮成一個緊密的形狀，稱為「小桶」，並失去大部分體內的水分。"
   ],
   [
    "Its metabolism slows to an almost undetectable level, and specialized proteins and sugars form a glass-like matrix that holds delicate cellular structures in place.",
    "牠的新陳代謝減慢到幾乎偵測不到的程度，特殊的蛋白質和糖類會形成類似玻璃的基質，把脆弱的細胞結構固定在原處。"
   ],
   [
    "In this suspended state, tardigrades have endured brief exposure to temperatures near absolute zero and around 150°C, as well as radiation doses far above those lethal to humans.",
    "在這種暫停狀態下，水熊蟲曾短暫承受接近絕對零度和約 150°C 的溫度，以及遠超過人類致死劑量的輻射。"
   ],
   [
    "In 2007, researchers tested these limits beyond Earth by attaching dried tardigrades to the exterior of the FOTON-M3 spacecraft for ten days.",
    "2007 年，研究人員把乾燥的水熊蟲固定在 FOTON-M3 太空船外部十天，在地球之外測試牠們的極限。"
   ],
   [
    "Many survived the vacuum of space, and some even withstood unfiltered solar ultraviolet radiation, making tardigrades the first animals known to survive direct exposure to space.",
    "許多水熊蟲在太空真空中存活下來，有些甚至撐過未經過濾的太陽紫外線，使緩步動物成為已知第一種直接暴露在太空中還能存活的動物。"
   ],
   [
    "Such findings have made them important models for astrobiology, the study of whether life could exist elsewhere in the universe.",
    "這些發現讓牠們成為天體生物學的重要研究對象；天體生物學探討宇宙其他地方是否可能存在生命。"
   ],
   [
    "Medicine may also benefit.",
    "醫學也可能從中受益。"
   ],
   [
    "In 2016, Japanese researchers identified a tardigrade protein called Dsup that binds to DNA and shields it from damage, and human cells engineered to produce it showed significantly less harm from X-rays.",
    "2016 年，日本研究人員發現一種名為 Dsup 的水熊蟲蛋白質，它能與 DNA 結合並保護它免受損傷；經過改造、能產生這種蛋白質的人類細胞，受到的 X 光傷害明顯減少。"
   ],
   [
    "Other tardigrade proteins are being investigated as a way to preserve vaccines and medicines without refrigeration.",
    "其他水熊蟲的蛋白質也正被研究，希望能在不冷藏的情況下保存疫苗和藥物。"
   ],
   [
    "Nevertheless, the popular image of an indestructible animal is misleading, because active tardigrades are surprisingly fragile, and two days in water at about 37°C can kill half of them.",
    "儘管如此，「打不死的動物」這個流行形象其實是誤導，因為活動中的水熊蟲出奇地脆弱，在約 37°C 的水中待兩天就能讓一半死亡。"
   ],
   [
    "Their genius lies not in resisting harsh conditions while active but in knowing how to stop living, temporarily, until the world becomes kinder.",
    "牠們的高明之處不在於活動時抵抗嚴酷的環境，而在於懂得暫時停止生命活動，等待世界變得溫和一些。"
   ]
  ]
 }
];
const GLOSS = {"tough": ["adj.", "強悍的"], "toughest": ["adj.", "最強悍的"], "millimeter": ["n.", "公釐"], "microscope": ["n.", "顯微鏡"], "moss": ["n.", "苔蘚"], "ocean": ["n.", "海洋"], "amazing": ["adj.", "驚人的"], "trick": ["n.", "絕招；把戲"], "dry": ["v./adj.", "變乾；乾的"], "extreme": ["adj.", "極端的"], "radiation": ["n.", "輻射"], "spacecraft": ["n.", "太空船"], "egg": ["n.", "卵；蛋"], "superhero": ["n.", "超級英雄"], "active": ["adj.", "活動中的"], "weak": ["adj.", "脆弱的"], "temperature": ["n.", "溫度"], "protect": ["v.", "保護"], "cell": ["n.", "細胞"], "chubby": ["adj.", "胖嘟嘟的"], "creature": ["n.", "生物"], "species": ["n.", "物種"], "surroundings": ["n.", "周遭環境"], "curl": ["v.", "蜷縮"], "metabolism": ["n.", "新陳代謝"], "brief": ["adj.", "短暫的"], "exposure": ["n.", "暴露"], "vacuum": ["n.", "真空"], "revive": ["v.", "復活；甦醒"], "protein": ["n.", "蛋白質"], "damage": ["n.", "傷害"], "treatment": ["n.", "治療"], "indestructible": ["adj.", "摧毀不了的"], "pause": ["v.", "暫停"], "improbable": ["adj.", "不太可能的；出人意料的"], "miniature": ["adj.", "迷你的"], "comprise": ["v.", "包含；由…組成"], "inhabit": ["v.", "棲息於"], "sediment": ["n.", "沉積物"], "defy": ["v.", "違抗；無法以…解釋"], "retract": ["v.", "縮回"], "limb": ["n.", "四肢"], "compact": ["adj.", "緊密的"], "undetectable": ["adj.", "偵測不到的"], "matrix": ["n.", "基質"], "suspended": ["adj.", "暫停的"], "lethal": ["adj.", "致命的"], "exterior": ["n.", "外部"], "withstand": ["v.", "承受"], "ultraviolet": ["adj.", "紫外線的"], "astrobiology": ["n.", "天體生物學"], "bind": ["v.", "結合"], "shield": ["v.", "保護；遮擋"], "engineered": ["adj.", "經過改造的"], "preserve": ["v.", "保存"], "refrigeration": ["n.", "冷藏"], "misleading": ["adj.", "誤導的"], "fragile": ["adj.", "脆弱的"], "harsh": ["adj.", "嚴酷的"], "temporarily": ["adv.", "暫時地"]};
const KEY = [["tough", "millimeter", "microscope", "moss", "trick", "extreme", "radiation", "spacecraft", "weak"], ["creature", "species", "metabolism", "brief", "exposure", "vacuum", "revive", "protein", "indestructible"], ["improbable", "inhabit", "defy", "retract", "suspended", "lethal", "exterior", "shield", "preserve", "fragile"]];
const FIGS = {"wb": {"svg": "<svg viewBox=\"0 0 600 310\" role=\"img\" aria-label=\"How a tardigrade survives\" style=\"display:block;width:100%;height:auto;border-radius:6px;background:#F4F9FD\"><g font-family=\"Noto Sans TC,sans-serif\" fill=\"#1A2238\"><text x=\"300\" y=\"26\" font-size=\"18\" font-weight=\"900\" text-anchor=\"middle\" fill=\"#1F6FAE\">The Water Bear's Survival Trick</text><text x=\"300\" y=\"44\" font-size=\"12\" text-anchor=\"middle\" fill=\"#5A6478\" >水熊蟲的求生絕招</text>\n<g>\n<g transform=\"translate(0,2)\"><g opacity=\".7\"><path d=\"M65 118 C63 128 64 137 70 142 C75 145 82 143 84 137 C86 129 84 122 82 118Z\" fill=\"#D9BFA0\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M66 130 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/></g><g opacity=\".7\"><path d=\"M93 118 C91 128 92 137 98 142 C103 145 110 143 112 137 C114 129 112 122 110 118Z\" fill=\"#D9BFA0\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M94 130 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/></g><g opacity=\".7\"><path d=\"M121 118 C119 128 120 137 126 142 C131 145 138 143 140 137 C142 129 140 122 138 118Z\" fill=\"#D9BFA0\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M122 130 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/></g><g opacity=\".7\"><path d=\"M147 118 C145 128 146 137 152 142 C157 145 164 143 166 137 C168 129 166 122 164 118Z\" fill=\"#D9BFA0\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M148 130 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/></g><path d=\"M42 104 C40 82 62 72 90 74 C118 71 150 74 170 86 C188 97 190 114 178 124 C160 136 126 138 98 136 C70 138 44 128 42 104Z\" fill=\"#E8D2B4\" stroke=\"#8C6B4A\" stroke-width=\"2.5\"/>\n<g fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M72 78 C64 96 66 116 72 134\"/><path d=\"M100 75 C92 95 93 117 100 136\"/><path d=\"M128 76 C120 96 121 118 128 136\"/><path d=\"M155 82 C149 98 149 116 155 130\"/></g>\n<path d=\"M60 92 q10 -6 20 -2\" fill=\"none\" stroke=\"#F5E6D2\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<g><path d=\"M53 126 C51 136 52 145 58 150 C63 153 70 151 72 145 C74 137 72 130 70 126Z\" fill=\"#E8D2B4\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M54 138 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/><g fill=\"none\" stroke=\"#5A4632\" stroke-width=\"1.8\" stroke-linecap=\"round\"><path d=\"M58 150 q-3 3 -2 7 q1 1 3 -1\"/><path d=\"M63 152 q-1 4 1 7 q2 0 2 -2\"/><path d=\"M68 150 q2 3 4 6 q1 1 2 -1\"/></g></g><g><path d=\"M83 126 C81 136 82 145 88 150 C93 153 100 151 102 145 C104 137 102 130 100 126Z\" fill=\"#E8D2B4\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M84 138 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/><g fill=\"none\" stroke=\"#5A4632\" stroke-width=\"1.8\" stroke-linecap=\"round\"><path d=\"M88 150 q-3 3 -2 7 q1 1 3 -1\"/><path d=\"M93 152 q-1 4 1 7 q2 0 2 -2\"/><path d=\"M98 150 q2 3 4 6 q1 1 2 -1\"/></g></g><g><path d=\"M113 126 C111 136 112 145 118 150 C123 153 130 151 132 145 C134 137 132 130 130 126Z\" fill=\"#E8D2B4\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M114 138 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/><g fill=\"none\" stroke=\"#5A4632\" stroke-width=\"1.8\" stroke-linecap=\"round\"><path d=\"M118 150 q-3 3 -2 7 q1 1 3 -1\"/><path d=\"M123 152 q-1 4 1 7 q2 0 2 -2\"/><path d=\"M128 150 q2 3 4 6 q1 1 2 -1\"/></g></g><g><path d=\"M143 126 C141 136 142 145 148 150 C153 153 160 151 162 145 C164 137 162 130 160 126Z\" fill=\"#E8D2B4\" stroke=\"#8C6B4A\" stroke-width=\"2\"/><path d=\"M144 138 q8 3 16 0\" fill=\"none\" stroke=\"#C4A27E\" stroke-width=\"1.6\"/><g fill=\"none\" stroke=\"#5A4632\" stroke-width=\"1.8\" stroke-linecap=\"round\"><path d=\"M148 150 q-3 3 -2 7 q1 1 3 -1\"/><path d=\"M153 152 q-1 4 1 7 q2 0 2 -2\"/><path d=\"M158 150 q2 3 4 6 q1 1 2 -1\"/></g></g><path d=\"M176 100 C186 100 192 106 191 112 C190 118 184 122 176 122\" fill=\"#E8D2B4\" stroke=\"#8C6B4A\" stroke-width=\"2.2\"/>\n<circle cx=\"188\" cy=\"111\" r=\"2.2\" fill=\"#8C6B4A\"/>\n<circle cx=\"168\" cy=\"98\" r=\"2.8\" fill=\"#3A2A1C\"/><circle cx=\"169\" cy=\"97\" r=\".9\" fill=\"#fff\"/>\n</g>\n<text x=\"110\" y=\"178\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">Active</text><text x=\"110\" y=\"194\" font-size=\"12\" text-anchor=\"middle\">needs water</text><text x=\"110\" y=\"210\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >活動狀態：需要水</text>\n<path d=\"M200 114 h50\" stroke=\"#1F6FAE\" stroke-width=\"4\"/><path d=\"M248 106 l12 8 l-12 8z\" fill=\"#1F6FAE\"/>\n<text x=\"226\" y=\"100\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1F6FAE\" font-weight=\"700\">dries out</text><text x=\"226\" y=\"136\" font-size=\"10\" text-anchor=\"middle\" fill=\"#5A6478\" >變乾</text>\n<path d=\"M282 114 C282 96 296 92 310 92 C324 92 338 96 338 114 C338 132 324 136 310 136 C296 136 282 132 282 114Z\" fill=\"#C9A97E\" stroke=\"#8C6B4A\" stroke-width=\"2.5\"/><g fill=\"none\" stroke=\"#9E7E58\" stroke-width=\"2\"><path d=\"M296 94 q-4 20 0 40\"/><path d=\"M310 92 q-4 22 0 44\"/><path d=\"M324 94 q-4 20 0 40\"/></g>\n<text x=\"310\" y=\"178\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">Tun</text><text x=\"310\" y=\"194\" font-size=\"12\" text-anchor=\"middle\">almost no water</text><text x=\"310\" y=\"210\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >乾燥休眠的「小桶」</text>\n</g>\n<g font-size=\"12\">\n<text x=\"380\" y=\"72\" font-weight=\"900\" fill=\"#17875C\">As a tun it can survive:</text><text x=\"380\" y=\"87\" font-size=\"10\" text-anchor=\"start\" fill=\"#5A6478\" >變成小桶後能撐過：</text>\n<text x=\"380\" y=\"108\">❄️ about −272°C (briefly)</text>\n<text x=\"380\" y=\"128\">🔥 about 150°C (briefly)</text>\n<text x=\"380\" y=\"148\">☢️ strong radiation</text>\n<text x=\"380\" y=\"168\">🚀 10 days in space</text>\n<text x=\"380\" y=\"196\" font-weight=\"900\" fill=\"#C2385A\">But when active:</text><text x=\"380\" y=\"211\" font-size=\"10\" text-anchor=\"start\" fill=\"#5A6478\" >但活動時：</text>\n<text x=\"380\" y=\"230\">🌡️ 2 days at 37°C kills half</text><text x=\"380\" y=\"245\" font-size=\"10\" text-anchor=\"start\" fill=\"#5A6478\" >在 37°C 水中兩天就死一半</text>\n</g>\n<rect x=\"60\" y=\"258\" width=\"300\" height=\"40\" rx=\"20\" fill=\"#E3F1FB\"/>\n<text x=\"210\" y=\"276\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\">Size: about 0.5 mm, 8 legs</text><text x=\"210\" y=\"291\" font-size=\"11\" text-anchor=\"middle\" fill=\"#5A6478\" >大小約 0.5 公釐、8 條腿</text></g></svg>", "cap": "水熊蟲變乾成「小桶」後幾乎刀槍不入，但活動時其實很怕熱。", "credit": "圖解：Winglish"}};
const QUIZ = [
 {
  "q": "1. What is the passage mainly about?",
  "tag": "主旨",
  "opts": [
   "How to find bears in the forest",
   "A tiny animal that survives extreme conditions by drying out",
   "Why the ocean is deep",
   "How to build a spacecraft"
  ],
  "a": 1,
  "exp": "全文介紹水熊蟲如何靠變乾成「小桶」撐過極端環境，以及牠的弱點。"
 },
 {
  "q": "2. What happened to the water bears sent into space in 2007?",
  "tag": "細節",
  "opts": [
   "They all died",
   "Some of them came back to life and laid eggs",
   "They grew much bigger",
   "They stayed in space forever"
  ],
  "a": 1,
  "exp": "回到地球後，有些水熊蟲復活了，甚至產卵或產下後代。"
 },
 {
  "q": "3. Which of the following is true about water bears?",
  "tag": "細節",
  "opts": [
   "They are larger than real bears",
   "They can never be killed",
   "Active water bears can die in warm water",
   "They only live in space"
  ],
  "a": 2,
  "exp": "活動中的水熊蟲在約 37°C 的水裡待兩天，就會有一半死亡，所以牠們並非打不死。"
 }
];
const META = {
 "title": "The Toughest Tiny Animal",
 "category": "醫學生物",
 "dek": "牠只有半公釐長，卻能在接近絕對零度的低溫和太空中活下來。不過，這種「最強生物」其實有一個弱點。",
 "hero": "<img class=\"photo\" src=\"https://images.unsplash.com/photo-1725714871758-aed5cd8e8745?auto=format&fit=crop&w=1600&q=70\" data-local=\"waterbear-hero.jpg\" alt=\"A moss-covered rock in a forest\" onerror=\"if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}\"><svg viewBox=\"0 0 800 420\" aria-hidden=\"true\"><rect width=\"800\" height=\"420\" fill=\"#E3F1FB\"/><circle cx=\"400\" cy=\"190\" r=\"110\" fill=\"#fff\" opacity=\".8\"/><text x=\"400\" y=\"230\" text-anchor=\"middle\" font-size=\"120\">🧬</text></svg><figcaption>森林裡長滿青苔的石頭。水熊蟲最常住在這種潮濕的苔蘚裡，你家附近的青苔裡也可能有。<span class=\"credit\">Photo: K8 / Unsplash</span></figcaption>",
 "fact": "2019 年，以色列的登月艇「創世紀號」墜毀在月球上，船上載著數千隻乾燥的水熊蟲。不過科學家認為，就算牠們撐過撞擊，月球上沒有液態水，也不可能「醒來」。",
 "next": {
  "title": "You Are Not Alone",
  "href": "read.html#microbes"
 },
 "id": "waterbear",
 "date": "2026/11/1"
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
