/* Winglish 閱讀館文章資料：Why Does Popcorn Pop? */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1],[2,3,4,5],[6,7,8],[9,10,11],[12]], figs:{1:"kernel"}, heads:{1:"Water Inside a Hard Shell",2:"Pop!",3:"Caught on Camera"},
   sents:[
    ["Popcorn is a favorite snack at the movies, but have you ever wondered why it pops?","爆米花是看電影時最受歡迎的點心，但你有沒有想過它為什麼會爆開？"],
    ["The secret is hidden inside each little kernel.","秘密就藏在每一顆小小的玉米粒裡。"],
    ["Only one kind of corn can really pop.","只有一種玉米真的能爆。"],
    ["Each kernel has a hard shell, and inside it there is soft starch and a little water.","每顆玉米粒都有硬硬的外殼，裡面有軟軟的澱粉和一點點水。"],
    ["When you heat the kernel, the water turns into steam.","當你加熱玉米粒，裡面的水就會變成水蒸氣。"],
    ["The steam cannot get out, so the pressure inside grows bigger and bigger.","水蒸氣跑不出去，所以裡面的壓力越來越大。"],
    ["At about 180 degrees Celsius, the shell finally breaks.","大約到攝氏 180 度時，外殼終於破了。"],
    ["The hot starch quickly puffs up and turns into the white, fluffy popcorn we love.","熱熱的澱粉很快膨脹起來，變成我們喜歡的白色、鬆軟的爆米花。"],
    ["Not every kernel pops, because some shells have tiny cracks and the steam escapes.","不是每一顆都會爆，因為有些外殼有小裂縫，水蒸氣就跑掉了。"],
    ["In 2015, two French scientists filmed popcorn with a very fast camera.","2015 年，兩位法國科學家用速度非常快的攝影機拍攝爆米花。"],
    ["They found that the \"pop\" sound comes from the steam rushing out, not from the shell breaking.","他們發現「啵」的聲音來自水蒸氣衝出來，而不是外殼破掉。"],
    ["They also saw that popcorn jumps like a gymnast, kicking off the pan with a small \"leg.\"","他們也看到爆米花跳起來就像體操選手，用一隻小小的「腳」踢離鍋子。"],
    ["So next time you eat popcorn, remember that every piece is a tiny science experiment!","所以下次吃爆米花時，記得每一顆都是一個小小的科學實驗！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1],[2,3,4,5],[6,7,8],[9,10,11,12],[13]], figs:{1:"kernel"}, heads:{1:"A Tiny Pressure Cooker",2:"The Moment of Explosion",3:"Solving the Mystery of the Pop"},
   sents:[
    ["Every year, people around the world munch through mountains of popcorn, yet few stop to ask what actually happens inside the pan.","每年，全世界的人都吃掉堆積如山的爆米花，卻很少有人停下來想一想，鍋子裡到底發生了什麼事。"],
    ["The answer involves water, heat and a surprising amount of physics.","答案和水、熱，以及數量驚人的物理學有關。"],
    ["Popcorn comes from a special type of corn whose kernels have an unusually tough outer shell, or hull.","爆米花來自一種特別的玉米，它的玉米粒有異常堅硬的外殼，也就是「種皮」。"],
    ["Inside the hull is a mixture of starch and a small amount of water, usually around 14 percent of the kernel's weight.","種皮裡面是澱粉和少量的水，水通常約占玉米粒重量的百分之十四。"],
    ["As the kernel is heated, this water turns into steam, but because the hull is so strong, the steam is trapped inside.","玉米粒受熱時，這些水會變成水蒸氣，但因為種皮非常堅固，水蒸氣被困在裡面。"],
    ["In effect, each kernel becomes a tiny pressure cooker.","實際上，每一顆玉米粒都變成了一個迷你壓力鍋。"],
    ["When the temperature reaches about 180 degrees Celsius, the pressure inside is roughly ten times that of the air around us, and the hull can no longer hold.","溫度達到大約攝氏 180 度時，裡面的壓力大約是我們周圍空氣的十倍，種皮再也撐不住了。"],
    ["It bursts open, and the hot, soft starch expands rapidly before cooling into a light, crunchy foam.","它爆裂開來，又熱又軟的澱粉迅速膨脹，接著冷卻成輕盈酥脆的泡沫狀。"],
    ["Kernels that are too dry, or that have cracked hulls, often fail to pop at all.","太乾或外殼有裂縫的玉米粒，常常根本爆不開。"],
    ["In 2015, two French engineers, Emmanuel Virot and Alexandre Ponomarenko, recorded popping corn with a camera that shot 2,900 frames per second.","2015 年，兩位法國工程師埃曼紐．維羅和亞歷山大．波諾馬連科，用每秒拍 2,900 格的攝影機記錄玉米爆開的過程。"],
    ["Their footage revealed that the famous \"pop\" does not happen when the hull cracks, but a moment later, when the trapped steam is suddenly released.","他們的影片顯示，那聲有名的「啵」不是在外殼裂開時出現，而是在稍後被困住的水蒸氣突然釋放時才發出。"],
    ["They also discovered that a small \"leg\" of starch pushes against the pan, launching the popcorn into the air like a gymnast doing a somersault.","他們還發現，一小段澱粉形成的「腳」會頂住鍋子，把爆米花彈到空中，就像體操選手翻筋斗一樣。"],
    ["Interestingly, they compared this jump to the way animals use their muscles to leap.","有趣的是，他們把這種跳躍比作動物用肌肉跳起的方式。"],
    ["Who knew that a simple snack could hide so much science?","誰想得到一份簡單的點心，竟藏著這麼多科學？"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4],[5,6,7,8,9],[10,11],[12]], figs:{1:"kernel"}, heads:{1:"A Pressure Vessel in Miniature",2:"Fracture and Flight",3:"The Source of the Sound"},
   sents:[
    ["Few foods are as theatrical as popcorn: a heap of inert, flinty kernels that, given enough heat, erupts into a cascade of edible foam.","很少有食物像爆米花這麼有戲劇效果：一堆毫無動靜、像燧石一樣硬的玉米粒，只要夠熱，就會爆發成一連串可以吃的泡沫。"],
    ["Yet the physics underlying this everyday spectacle remained surprisingly elusive until relatively recently.","然而，這個日常奇景背後的物理原理，直到相當近期之前，都出奇地難以捉摸。"],
    ["Popcorn owes its behavior to a particular variety of maize whose kernels are sheathed in an exceptionally robust hull.","爆米花之所以會這樣，要歸功於一個特別的玉米品種：它的玉米粒包覆著一層格外強韌的種皮。"],
    ["Sealed within this casing is a dense, starchy interior containing roughly 14 percent water, a figure growers monitor closely, since kernels that are either too parched or too damp pop poorly.","封在這層外殼裡的，是含水量大約百分之十四的緻密澱粉；種植者會密切監控這個數字，因為太乾或太濕的玉米粒都爆得不好。"],
    ["As heat accumulates, the moisture vaporizes, but the impermeable hull prevents it from escaping, so pressure mounts steadily, much as it does inside a sealed cooker.","隨著熱度累積，水分汽化，但不透水的種皮讓水蒸氣無法逸出，於是壓力穩定上升，就像在密封的鍋子裡一樣。"],
    ["At approximately 180 degrees Celsius, regardless of the kernel's size or shape, the internal pressure reaches about ten atmospheres, and the hull abruptly ruptures.","不論玉米粒的大小或形狀，大約到攝氏 180 度時，內部壓力會達到約十大氣壓，種皮便突然破裂。"],
    ["The superheated starch, liberated from confinement, swells explosively before solidifying into the familiar airy puff.","從束縛中解放的過熱澱粉劇烈膨脹，接著凝固成我們熟悉的蓬鬆爆米花。"],
    ["Within a fraction of a second, a kernel can expand to many times its original volume.","不到一秒鐘，一顆玉米粒就能膨脹成原本體積的好幾倍。"],
    ["Using high-speed cameras recording 2,900 frames per second, the French researchers Emmanuel Virot and Alexandre Ponomarenko demonstrated in 2015 that the kernel's leap is not propelled by escaping gas, as one might assume.","法國研究者埃曼紐．維羅和亞歷山大．波諾馬連科在 2015 年用每秒 2,900 格的高速攝影機證明，玉米粒的跳躍並不像一般人可能以為的，是由逸出的氣體推動的。"],
    ["Instead, a protruding \"leg\" of starch compresses against the pan and springs back, catapulting the popcorn into a somersault, a mechanism the authors likened to the muscle-powered jumps of animals.","實際上，是一段突出的澱粉「腳」壓向鍋底再彈回，把爆米花彈射出去翻個筋斗；作者把這個機制比作動物靠肌肉起跳的方式。"],
    ["Even more counterintuitive was their finding about the sound itself.","更違反直覺的，是他們對聲音本身的發現。"],
    ["Synchronizing audio recordings with the footage, they found that the pop does not coincide with the hull cracking; rather, it occurs when the pent-up water vapor is released, the sudden pressure drop causing cavities within the kernel to resonate like a tiny musical instrument.","他們把錄音和影片同步比對，發現「啵」聲並不是和種皮破裂同時出現；而是在積壓的水蒸氣釋放時才發生，突然的壓力下降讓玉米粒內部的空腔像小小的樂器一樣共鳴。"],
    ["That a humble snack can illustrate thermodynamics, fracture mechanics and acoustics all at once is precisely why the researchers hoped their work would give physics teachers a delicious new demonstration.","一份不起眼的點心，竟能同時說明熱力學、破壞力學和聲學，這正是研究者希望他們的成果能為物理老師提供一個美味新示範的原因。"]
 ]}
];

const GLOSS = {
  popcorn:["n.","爆米花"], snack:["n.","點心；零食"], wonder:["v.","想知道；納悶"], pop:["v.","爆開；發出啵的一聲"], secret:["n.","秘密"],
  kernel:["n.","（玉米等的）粒；核心"], corn:["n.","玉米"], shell:["n.","外殼"], starch:["n.","澱粉"], heat:["v.","加熱"],
  steam:["n.","水蒸氣"], pressure:["n.","壓力"], degree:["n.","度"], celsius:["n.","攝氏"], puff:["v.","膨脹"],
  fluffy:["adj.","鬆軟的"], crack:["n.","裂縫"], escape:["v.","逃出；漏出"], film:["v.","拍攝"], camera:["n.","攝影機"],
  rush:["v.","衝"], gymnast:["n.","體操選手"], kick:["v.","踢"], pan:["n.","平底鍋"], experiment:["n.","實驗"], french:["adj.","法國的"],
  munch:["v.","大聲咀嚼；吃"], physics:["n.","物理學"], tough:["adj.","堅韌的"], hull:["n.","（種子的）外殼；種皮"], mixture:["n.","混合物"],
  percent:["n.","百分之…"], weight:["n.","重量"], trap:["v.","困住"], cooker:["n.","pressure cooker 壓力鍋"], effect:["n.","in effect 實際上"],
  burst:["v.","爆裂"], expand:["v.","膨脹"], rapidly:["adv.","迅速地"], crunchy:["adj.","酥脆的"], foam:["n.","泡沫"],
  engineer:["n.","工程師"], frame:["n.","（影片的）格"], footage:["n.","影片片段"], reveal:["v.","顯示；揭露"], release:["v.","釋放"],
  launch:["v.","發射；彈出"], somersault:["n.","翻筋斗"], compare:["v.","比較；比作"], muscle:["n.","肌肉"], leap:["v.","跳躍"],
  theatrical:["adj.","戲劇性的"], heap:["n.","一堆"], inert:["adj.","不動的；無生氣的"], flinty:["adj.","像燧石一樣硬的"], erupt:["v.","爆發"],
  cascade:["n.","一連串；瀑布般落下"], edible:["adj.","可食用的"], underlying:["adj.","潛在的；根本的"], spectacle:["n.","奇觀"],
  elusive:["adj.","難以捉摸的"], relatively:["adv.","相對地"], owe:["v.","owe A to B 把 A 歸功於 B"], variety:["n.","品種"], maize:["n.","玉米"],
  sheathe:["v.","包覆"], exceptionally:["adv.","格外地"], robust:["adj.","強韌的"], seal:["v.","密封"], casing:["n.","外殼"],
  dense:["adj.","緻密的"], monitor:["v.","監控"], parched:["adj.","乾透的"], damp:["adj.","潮濕的"], accumulate:["v.","累積"],
  moisture:["n.","水分"], vaporize:["v.","汽化"], impermeable:["adj.","不透水的"], mount:["v.","增加；上升"], approximately:["adv.","大約"],
  regardless:["adv.","regardless of 不論"], internal:["adj.","內部的"], atmosphere:["n.","大氣壓；大氣"], abruptly:["adv.","突然地"],
  rupture:["v.","破裂"], superheated:["adj.","過熱的"], liberate:["v.","解放"], confinement:["n.","束縛；限制"], swell:["v.","膨脹"],
  explosively:["adv.","爆炸性地"], solidify:["v.","凝固"], airy:["adj.","輕飄飄的；蓬鬆的"], fraction:["n.","a fraction of a second 一瞬間"],
  volume:["n.","體積"], demonstrate:["v.","證明；示範"], propel:["v.","推動"], assume:["v.","假定"], protrude:["v.","突出"],
  compress:["v.","壓縮；擠壓"], spring:["v.","彈回"], catapult:["v.","彈射"], mechanism:["n.","機制"], liken:["v.","把…比作"],
  counterintuitive:["adj.","違反直覺的"], synchronize:["v.","使同步"], coincide:["v.","同時發生"], vapor:["n.","蒸氣"],
  cavity:["n.","空腔；洞"], resonate:["v.","共鳴"], instrument:["n.","樂器"], humble:["adj.","不起眼的；樸素的"], illustrate:["v.","說明"],
  thermodynamics:["n.","熱力學"], fracture:["n.","破裂；fracture mechanics 破壞力學"], mechanics:["n.","力學"], acoustics:["n.","聲學"]
};
const KEY = [["snack","wonder","kernel","shell","heat","steam","pressure","escape","camera","experiment"],
             ["munch","tough","hull","trap","burst","expand","rapidly","crunchy","footage","reveal","release","somersault"],
             ["theatrical","inert","elusive","robust","impermeable","accumulate","rupture","liberate","solidify","propel","catapult","counterintuitive","coincide","resonate"]];

const FIGS = {
  kernel:{svg:`<svg viewBox="0 0 600 310" role="img" aria-label="What happens inside a popcorn kernel" style="display:block;width:100%;height:auto;border-radius:6px;background:#FFF8D6">
<defs><marker id="pa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1A2238"/></marker></defs>
<g transform="translate(110,130)">
<path d="M0 -70 C48 -70 62 -20 56 20 C48 64 22 80 0 80 C-22 80 -48 64 -56 20 C-62 -20 -48 -70 0 -70Z" fill="#E8A33D" stroke="#9A5E12" stroke-width="5"/>
<path d="M0 -56 C36 -56 46 -16 42 16 C36 52 16 64 0 64 C-16 64 -36 52 -42 16 C-46 -16 -36 -56 0 -56Z" fill="#FFF3D6"/>
<g fill="#5BA7E0"><circle cx="-14" cy="-10" r="6"/><circle cx="12" cy="6" r="5"/><circle cx="-6" cy="26" r="5"/><circle cx="16" cy="-26" r="4"/></g></g>
<g stroke="#1A2238" stroke-width="2.5" fill="none" marker-end="url(#pa)"><path d="M190 130 H262"/><path d="M380 130 H442"/></g>
<g transform="translate(320,130)">
<rect x="-10" y="-70" width="20" height="110" rx="10" fill="#fff" stroke="#1A2238" stroke-width="2"/><rect x="-5" y="-55" width="10" height="90" rx="5" fill="#D23F57"/><circle cx="0" cy="48" r="18" fill="#D23F57" stroke="#1A2238" stroke-width="2"/></g>
<g transform="translate(510,123)" fill="#FFFDF5" stroke="#E2C27A" stroke-width="3">
<circle cx="-24" cy="-10" r="26"/><circle cx="20" cy="-20" r="30"/><circle cx="6" cy="20" r="28"/><circle cx="-30" cy="26" r="20"/><circle cx="34" cy="22" r="20"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238" text-anchor="middle">
<text x="110" y="240" font-size="15" font-weight="700">A kernel</text>
<text x="110" y="259" font-size="12">hull + starch + ~14% water</text><text x="110" y="276" font-size="10" text-anchor="middle" fill="#5A6478" >玉米粒：硬殼＋澱粉＋約 14% 的水</text>
<text x="320" y="240" font-size="15" font-weight="700">Heat to about 180°C</text>
<text x="320" y="259" font-size="12">water turns into steam</text><text x="320" y="276" font-size="10" text-anchor="middle" fill="#5A6478" >加熱到約 180°C，水變成水蒸氣</text><text x="320" y="291" font-size="10" text-anchor="middle" fill="#5A6478" >壓力約 10 倍大氣壓</text>
<text x="510" y="240" font-size="15" font-weight="700">POP!</text>
<text x="510" y="259" font-size="12">hull bursts, starch puffs up</text><text x="510" y="276" font-size="10" text-anchor="middle" fill="#5A6478" >啵！外殼破裂，澱粉膨脹</text>
<text x="226" y="98" font-size="12" fill="#3B82B8" font-weight="700">💧→ steam</text><text x="226" y="113" font-size="10" text-anchor="middle" fill="#5A6478" >水→蒸氣</text></g>
</svg>`,
    cap:"一顆玉米粒變成爆米花的三個步驟。藍色小點就是藏在裡面的水分。",
    credit:"圖解：Winglish"}
};

const QUIZ = [
  { q:"1. What is the passage mainly about?", tag:"主旨",
    opts:["The history of movie theaters","What happens inside a corn kernel when it pops","How to cook healthy snacks at home","Why corn is yellow"],
    a:1, exp:"文章從玉米粒裡的水、加熱後的壓力，講到外殼爆開和「啵」聲的來源，主旨是 (B)。"},
  { q:"2. Which of the following is TRUE?", tag:"細節",
    opts:["Any kind of corn can become popcorn.","The \"pop\" sound comes from the steam rushing out.","The shell usually breaks at about 100 degrees Celsius.","Popcorn jumps because someone shakes the pan."],
    a:1, exp:"(B) 正確：法國科學家發現「啵」聲來自水蒸氣衝出來的時候，不是外殼破掉的瞬間。(A) 只有特定品種的玉米能爆；(C) 大約是 180 度；(D) 是澱粉形成的「腳」把爆米花彈起來。"},
  { q:"3. Why does the pressure build up inside the kernel?", tag:"因果",
    opts:["The steam cannot get out of the hard shell.","The kernel grows bigger in the sun.","Air is pumped into the kernel.","The starch turns into water."],
    a:0, exp:"玉米粒的外殼非常堅硬，水變成水蒸氣後跑不出去，所以壓力越來越大，直到外殼撐破，答案是 (A)。"}
];

const META = {
 id:"popcorn", title:"Why Does Popcorn Pop?", category:"食物",
 dek:"一顆小小的玉米粒，為什麼加熱就會「啵」一聲爆開？科學家用每秒 2,900 格的高速攝影機，終於拍到了答案。",
 date:"2026/11/1",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1512204231446-d520ee0a0873?auto=format&fit=crop&w=1600&q=70" data-local="popcorn-hero.jpg" alt="A bowl of popcorn" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#FFE14D"/><g><path d="M300 170 L500 170 L476 400 L324 400Z" fill="#fff"/><path d="M324 170 h30 l-10 230 h-20Z M386 170 h30 v230 h-30Z M446 170 h30 l-14 230 h-16Z" fill="#D23F57"/></g>
<g fill="#FFF8E7" stroke="#E7C98A" stroke-width="3"><circle cx="334" cy="156" r="30"/><circle cx="386" cy="140" r="36"/><circle cx="444" cy="152" r="32"/><circle cx="488" cy="168" r="26"/><circle cx="312" cy="172" r="22"/><circle cx="414" cy="108" r="28"/><circle cx="220" cy="100" r="18"/><circle cx="590" cy="86" r="22"/><circle cx="620" cy="240" r="16"/><circle cx="170" cy="250" r="16"/></g></svg>
<figcaption>一碗熱騰騰的爆米花。每一顆都曾經是一顆硬梆梆的玉米粒。<span class="credit">Photo: Annie Spratt / Unsplash</span></figcaption>`,
 fact:"好的爆米花玉米粒大約含 13–14.5% 的水。太乾，水蒸氣不夠撐破外殼；太濕，爆出來的爆米花又會軟軟的。所以爆米花玉米要好好密封保存喔！",
 next:{title:"The Biggest Food Fight on Earth", href:"read.html#tomatina"}
};
return Object.assign(META,{LEVELS,GLOSS,KEY,FIGS,QUIZ});
})();
