/* winglish.tw 閱讀館文章資料：Hotter Than the Sun */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1],[2,3,4],[5,6,7],[8,9,10,11]], figs:{2:"count"}, heads:{1:"A Very Hot Spark",2:"Counting to the Storm",3:"The Same Place Again and Again"},
   sents:[
    ["Lightning is beautiful, but it is also very powerful.","閃電很美，但也非常強大。"],
    ["It is really a giant spark of electricity in the sky.","它其實是天空中一道巨大的電火花。"],
    ["When lightning goes through the air, it makes the air very hot.","閃電穿過空氣時，會讓空氣變得非常熱。"],
    ["The air can get to about 30,000 degrees Celsius, which is five times hotter than the surface of the sun!","空氣可以熱到大約攝氏三萬度，比太陽表面還要熱五倍！"],
    ["The hot air gets bigger very quickly, and that makes the loud sound we call thunder.","熱空氣一下子快速膨脹，就發出了我們叫做「雷聲」的巨響。"],
    ["Light travels much faster than sound, so we always see lightning before we hear thunder.","光跑得比聲音快很多，所以我們總是先看到閃電，才聽到雷聲。"],
    ["Count the seconds between the flash and the thunder.","數一數從看到閃光到聽見雷聲之間有幾秒。"],
    ["Every three seconds means the storm is about one kilometer away.","每三秒，就代表暴風雨大約在一公里外。"],
    ["Some people say lightning never hits the same place twice, but that is not true.","有些人說閃電不會打中同一個地方兩次，但這不是真的。"],
    ["The Empire State Building in New York is hit about 23 times every year.","紐約的帝國大廈每年大約被閃電打中 23 次。"],
    ["Lightning likes tall things, so stay away from tall trees in a storm.","閃電喜歡打高的東西，所以暴風雨時要遠離大樹。"],
    ["When you hear thunder, go inside a building right away!","聽到雷聲，就要馬上躲進建築物裡！"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1],[2,3,4,5],[6,7,8,9],[10,11,12,13]], figs:{2:"count"}, heads:{1:"Five Times Hotter Than the Sun",2:"How Far Away Is the Storm?",3:"A Myth That Won't Die"},
   sents:[
    ["Every second, somewhere on Earth, lightning strikes about 100 times.","每一秒鐘，地球上某處都有大約 100 次閃電落下。"],
    ["We see it so often that we rarely stop to think about how extreme it really is.","我們太常看到閃電，所以很少停下來想想它其實有多極端。"],
    ["A lightning bolt is a giant electric spark that jumps between a cloud and the ground, or between different parts of a cloud.","一道閃電是巨大的電火花，在雲和地面之間，或在雲的不同部分之間跳躍。"],
    ["As it passes through the air, it heats the air to about 30,000 degrees Celsius, roughly five times hotter than the surface of the sun.","它穿過空氣時，會把空氣加熱到大約攝氏三萬度，約是太陽表面溫度的五倍。"],
    ["The superheated air expands so suddenly that it creates a powerful shock wave, which we hear as thunder.","超高溫的空氣突然膨脹，產生強大的震波，我們聽到的就是雷聲。"],
    ["When lightning hits sand, the heat can even melt the sand into hollow glass tubes called fulgurites.","閃電打到沙子時，高溫甚至能把沙熔成中空的玻璃管，叫做「閃電熔岩」。"],
    ["Because light travels almost a million times faster than sound, the flash reaches us first.","因為光的速度幾乎是聲音的一百萬倍，所以閃光會先傳到我們這裡。"],
    ["By counting the seconds between the flash and the thunder, you can estimate how far away the storm is.","數一數閃光和雷聲之間隔了幾秒，就能估計暴風雨有多遠。"],
    ["Sound travels about one kilometer every three seconds, so a gap of nine seconds means the lightning struck about three kilometers away.","聲音每三秒大約前進一公里，所以相隔九秒，代表閃電打在大約三公里外。"],
    ["Experts warn, however, that if you can hear thunder at all, you are close enough to be struck.","不過專家提醒，只要你聽得到雷聲，就已經近到可能被閃電打中了。"],
    ["Many people believe that lightning never strikes the same place twice.","很多人相信閃電不會打中同一個地方兩次。"],
    ["In fact, tall, pointed objects are hit again and again; the Empire State Building in New York is struck about 23 times a year.","事實上，又高又尖的東西會一再被打中；紐約的帝國大廈每年大約被打中 23 次。"],
    ["That is why tall buildings have lightning rods, metal bars that guide the electricity safely into the ground.","這就是為什麼高樓都裝有避雷針：一種把電安全引導到地下的金屬棒。"],
    ["So the next time a storm rolls in, remember the saying: \"When thunder roars, go indoors.\"","所以下次暴風雨來臨時，記住這句話：「雷聲一響，快進屋裡。」"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4],[5,6,7],[8,9,10],[11,12]], figs:{2:"count"}, heads:{1:"Anatomy of a Bolt",2:"Reading the Gap",3:"Debunking an Old Saying",4:"Respect the Storm"},
   sents:[
    ["Few natural phenomena are as familiar, or as routinely underestimated, as lightning.","很少有自然現象像閃電這樣，既為人熟悉，又經常被低估。"],
    ["Satellite observations suggest that the planet is struck roughly 100 times every second, adding up to several million flashes a day, most of them concentrated over the tropics.","衛星觀測顯示，地球每秒大約被閃電打中 100 次，一天累積數百萬次，而且大多集中在熱帶地區。"],
    ["Each bolt is an enormous electrical discharge that equalizes the charge built up between a storm cloud and the ground, or within the cloud itself.","每一道閃電都是一次巨大的放電，用來平衡雷雨雲和地面之間、或雲層內部累積的電荷。"],
    ["In a fraction of a second, the narrow channel it carves through the atmosphere is heated to around 30,000 degrees Celsius, roughly five times the temperature of the sun's visible surface.","在一瞬間，它在大氣中劃出的狹窄通道被加熱到大約攝氏三萬度，約是太陽可見表面溫度的五倍。"],
    ["The air in the channel expands so violently that it generates a shock wave, which decays into the sound we perceive as thunder; where a bolt hits sand, the heat can even fuse the grains into fragile glass tubes known as fulgurites.","通道裡的空氣劇烈膨脹，產生震波，震波減弱後就成了我們聽到的雷聲；閃電打到沙地時，高溫甚至能把沙粒熔合成易碎的玻璃管，稱為「閃電熔岩」。"],
    ["The interval between the flash and the thunder offers a surprisingly reliable means of gauging a storm's distance.","閃光和雷聲之間的間隔，是估算暴風雨距離一個出奇可靠的方法。"],
    ["Light covers the distance almost instantaneously, whereas sound travels at only about 340 meters per second, or roughly one kilometer every three seconds.","光幾乎是瞬間抵達，而聲音每秒只前進大約 340 公尺，也就是每三秒約一公里。"],
    ["A nine-second delay, therefore, places the strike about three kilometers away, though meteorologists caution that lightning can strike more than ten kilometers from the storm that produced it.","因此，延遲九秒代表閃電打在大約三公里外；不過氣象學家提醒，閃電可能打在離雷雨雲十公里以外的地方。"],
    ["Perhaps the most persistent misconception is that lightning never strikes the same place twice.","或許最根深蒂固的誤解，就是「閃電不會打中同一個地方兩次」。"],
    ["On the contrary, tall, isolated, pointed structures are struck repeatedly: the Empire State Building is hit an average of 23 times a year, according to the U.S. National Weather Service.","恰恰相反，高聳、孤立、尖頂的建築會一再被打中：根據美國國家氣象局，帝國大廈平均每年被打中 23 次。"],
    ["Lightning rods, first proposed by Benjamin Franklin in the 1750s, exploit this tendency by offering the current a safe path to the ground.","避雷針是富蘭克林在 1750 年代首先提出的，它利用這個特性，為電流提供一條安全通往地面的路徑。"],
    ["Equally dangerous is the belief that a person is safe as long as it is not raining, since a bolt can emerge from a seemingly clear patch of sky.","同樣危險的是「只要沒下雨就安全」的想法，因為閃電可能從一片看似晴朗的天空中出現。"],
    ["Meteorologists sum up the evidence in a single rule: if you can hear thunder, you are within striking distance, and the only truly safe places are enclosed buildings and hard-topped vehicles.","氣象學家把這些證據歸納成一條規則：聽得到雷聲，就在閃電的攻擊範圍內；真正安全的地方只有密閉的建築物和有硬車頂的車輛。"]
 ]}
];

const GLOSS = {
  lightning:["n.","閃電"], beautiful:["adj.","美麗的"], powerful:["adj.","強大的"], giant:["adj.","巨大的"], spark:["n.","火花"],
  electricity:["n.","電"], surface:["n.","表面"], celsius:["adj.","攝氏的"], degree:["n.","度"], thunder:["n.","雷聲"],
  travel:["v.","行進；傳播"], flash:["n.","閃光"], second:["n.","秒"], kilometer:["n.","公里"], storm:["n.","暴風雨"],
  empire:["n.","帝國；Empire State Building 帝國大廈"], building:["n.","建築物"], tall:["adj.","高的"], inside:["prep.","在…裡面"],
  hit:["v.","打中"], strike:["v.","（閃電）擊中"], struck:["v.","strike 的過去式／過去分詞"], rarely:["adv.","很少"],
  extreme:["adj.","極端的"], bolt:["n.","（一道）閃電"], electric:["adj.","電的"], jump:["v.","跳躍"], cloud:["n.","雲"],
  heat:["v.","加熱"], roughly:["adv.","大約"], superheated:["adj.","超高溫的"], expand:["v.","膨脹"], suddenly:["adv.","突然地"],
  shock:["n.","shock wave 震波"], wave:["n.","波"], melt:["v.","熔化"], hollow:["adj.","中空的"], glass:["n.","玻璃"],
  fulgurite:["n.","閃電熔岩（閃電熔沙形成的玻璃管）"], estimate:["v.","估計"], gap:["n.","間隔"], expert:["n.","專家"], warn:["v.","警告"],
  myth:["n.","迷思；錯誤的說法"], believe:["v.","相信"], pointed:["adj.","尖的"], object:["n.","物體"], rod:["n.","棒；lightning rod 避雷針"],
  metal:["n.","金屬"], guide:["v.","引導"], safely:["adv.","安全地"], ground:["n.","地面"], roar:["v.","吼叫；轟鳴"], indoors:["adv.","在室內"],
  phenomenon:["n.","現象（複數 phenomena）"], phenomena:["n.","現象（phenomenon 的複數）"], familiar:["adj.","熟悉的"],
  routinely:["adv.","經常地"], underestimate:["v.","低估"], satellite:["n.","衛星"], observation:["n.","觀測"],
  concentrate:["v.","集中"], tropics:["n.","熱帶地區"], enormous:["adj.","巨大的"], electrical:["adj.","電的"], discharge:["n.","放電"],
  equalize:["v.","使相等；平衡"], charge:["n.","電荷"], fraction:["n.","一小部分；in a fraction of a second 一瞬間"], narrow:["adj.","狹窄的"],
  channel:["n.","通道"], carve:["v.","刻出；劃出"], atmosphere:["n.","大氣"], temperature:["n.","溫度"], visible:["adj.","看得見的"],
  violently:["adv.","劇烈地"], generate:["v.","產生"], decay:["v.","衰減"], perceive:["v.","察覺；感知"], fuse:["v.","熔合"],
  grain:["n.","顆粒"], fragile:["adj.","易碎的"], interval:["n.","間隔"], reliable:["adj.","可靠的"], means:["n.","方法"],
  gauge:["v.","估算；測量"], distance:["n.","距離"], instantaneously:["adv.","瞬間地"], whereas:["conj.","然而；而"],
  meter:["n.","公尺"], delay:["n.","延遲"], therefore:["adv.","因此"], meteorologist:["n.","氣象學家"], caution:["v.","提醒；告誡"],
  persistent:["adj.","持續的；根深蒂固的"], misconception:["n.","誤解"], contrary:["n.","on the contrary 恰恰相反"],
  isolated:["adj.","孤立的"], structure:["n.","建築物；結構"], repeatedly:["adv.","一再地"], average:["n.","平均"],
  propose:["v.","提出"], exploit:["v.","利用"], tendency:["n.","傾向；特性"], current:["n.","電流"], path:["n.","路徑"],
  equally:["adv.","同樣地"], belief:["n.","想法；信念"], emerge:["v.","出現"], seemingly:["adv.","看似"], patch:["n.","一小片"],
  evidence:["n.","證據"], enclosed:["adj.","密閉的"], vehicle:["n.","車輛"], dangerous:["adj.","危險的"], sand:["n.","沙"]
};
const KEY = [["lightning","powerful","giant","spark","surface","thunder","flash","storm"],
             ["strike","extreme","bolt","expand","shock","melt","hollow","estimate","gap","myth","pointed","rod"],
             ["phenomenon","underestimate","discharge","fraction","channel","fuse","fragile","interval","gauge","instantaneously","misconception","exploit","tendency","emerge"]];

const DEFS = {
  "lightning": "a flash of bright light in the sky during a storm",
  "powerful": "very strong",
  "giant": "extremely large",
  "spark": "a very small flash of fire or electricity",
  "surface": "the outside or top layer of something",
  "thunder": "the loud noise that comes after lightning",
  "flash": "a sudden bright light that lasts a very short time",
  "storm": "very bad weather with strong winds, rain and often thunder",
  "strike": "to hit something suddenly and with force",
  "extreme": "very great or intense; far from ordinary",
  "bolt": "a single flash of lightning",
  "expand": "to become larger",
  "shock": "a shock wave is a strong wave of pressure caused by a sudden powerful event",
  "melt": "to change from solid to liquid because of great heat",
  "hollow": "having an empty space inside",
  "estimate": "to guess the size or amount of something using available information",
  "gap": "the space or time between two things",
  "myth": "an idea that many people believe but that is not true",
  "pointed": "having a sharp end",
  "rod": "a long thin bar; a lightning rod carries lightning safely to the ground",
  "phenomenon": "a fact or event in nature or society, especially one that is studied",
  "underestimate": "to think something is smaller or less important than it really is",
  "discharge": "a flow of electricity from one place to another",
  "fraction": "a small part of something; in a fraction of a second means almost instantly",
  "channel": "a narrow passage through which something flows",
  "fuse": "to join or melt together because of great heat",
  "fragile": "easily broken or damaged",
  "interval": "the period of time between two events",
  "gauge": "to judge or measure something, especially by estimating",
  "instantaneously": "happening immediately, with no delay at all",
  "misconception": "a wrong idea or belief",
  "exploit": "to use something to get an advantage from it",
  "tendency": "a natural way of behaving or happening that is likely to be repeated",
  "emerge": "to appear or come out from somewhere"
};

const FIGS = {
  count:{svg:`<svg viewBox="0 0 600 320" role="img" aria-label="Count the seconds to find the storm" style="display:block;width:100%;height:auto;border-radius:6px;background:#EEF2FA">
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238">
<text x="300" y="28" font-size="18" font-weight="900" text-anchor="middle" fill="#2C355A">How Far Away Is the Storm?</text><text x="300" y="46" font-size="12" text-anchor="middle" fill="#5A6478">暴風雨離你多遠？</text>
<text x="300" y="70" font-size="14" font-weight="700" text-anchor="middle" fill="#B8322E">Seconds ÷ 3 ≈ Kilometers</text><text x="300" y="86" font-size="11" text-anchor="middle" fill="#5A6478">秒數 ÷ 3 ≈ 距離（公里）</text>
<path d="M0 240 C120 236 240 243 360 239 S520 236 600 240" fill="none" stroke="#6B8F5A" stroke-width="3"/>
<g fill="#C9D3E6"><path d="M190 128 c-18 0 -24 -20 -8 -26 c0 -16 22 -22 32 -10 c10 -14 34 -8 34 8 c18 2 18 28 -2 28 Z"/><path d="M330 128 c-18 0 -24 -20 -8 -26 c0 -16 22 -22 32 -10 c10 -14 34 -8 34 8 c18 2 18 28 -2 28 Z"/><path d="M470 128 c-18 0 -24 -20 -8 -26 c0 -16 22 -22 32 -10 c10 -14 34 -8 34 8 c18 2 18 28 -2 28 Z"/></g>
<g fill="none" stroke="#E8B500" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"><path d="M220 130 l-9 34 l13 -3 l-12 40 l11 -3 l-9 42"/><path d="M360 130 l-9 34 l13 -3 l-12 40 l11 -3 l-9 42"/><path d="M500 130 l-9 34 l13 -3 l-12 40 l11 -3 l-9 42"/></g>
<g stroke="#1A2238" stroke-width="3" fill="none" stroke-linecap="round"><circle cx="70" cy="178" r="10" fill="#F4D9B8"/><path d="M70 188 q-2 14 0 30"/><path d="M70 218 q-5 10 -9 21"/><path d="M70 218 q5 10 9 21"/><path d="M70 196 q-9 6 -13 15"/><path d="M70 196 q9 -1 11 -14"/></g>
<g fill="none" stroke="#5A6478" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M96 168 q8 12 0 24"/><path d="M106 160 q12 20 0 40"/><path d="M116 152 q16 28 0 56"/></g>
<g text-anchor="middle"><text x="215" y="262" font-size="14" font-weight="900">1 km</text><text x="215" y="280" font-size="12">3 seconds</text><text x="215" y="295" font-size="10" fill="#5A6478">3 秒</text>
<text x="355" y="262" font-size="14" font-weight="900">2 km</text><text x="355" y="280" font-size="12">6 seconds</text><text x="355" y="295" font-size="10" fill="#5A6478">6 秒</text>
<text x="495" y="262" font-size="14" font-weight="900">3 km</text><text x="495" y="280" font-size="12">9 seconds</text><text x="495" y="295" font-size="10" fill="#5A6478">9 秒</text>
<text x="70" y="262" font-size="13" font-weight="700">You</text><text x="70" y="277" font-size="10" fill="#5A6478">你</text></g>
</g>
</svg>`,
    cap:"看到閃光後開始數秒，聽到雷聲時停下：秒數除以 3，大約就是閃電離你幾公里。",
    credit:"圖解：winglish.tw"}
};

const QUIZ = [
 [
  {
   "q": "1. What is the passage mainly about?",
   "tag": "主旨",
   "opts": [
    "How to take good photos of storms",
    "Some surprising facts about lightning and thunder",
    "Why the sun is so hot",
    "How the Empire State Building was built"
   ],
   "a": 1,
   "exp": "全文介紹閃電有多熱、雷聲怎麼來、怎麼算暴風雨的距離，以及閃電會打同一個地方，答案是 (B)。"
  },
  {
   "q": "2. How can you tell how far away a storm is?",
   "tag": "細節",
   "opts": [
    "Look at the color of the clouds",
    "Listen to how loud the rain is",
    "Watch which way the birds fly",
    "Count the seconds between the flash and the thunder"
   ],
   "a": 3,
   "exp": "第三段：數閃光和雷聲之間的秒數，每三秒約一公里，答案是 (D)。"
  },
  {
   "q": "3. Which of the following is TRUE according to the passage?",
   "tag": "細節",
   "opts": [
    "Lightning can make the air hotter than the surface of the sun.",
    "Lightning never hits the same place twice.",
    "We hear thunder before we see lightning.",
    "It is safe to stand under a tall tree in a storm."
   ],
   "a": 0,
   "exp": "(A) 正確（第二段：約攝氏三萬度，比太陽表面熱五倍）。(B) 錯，帝國大廈每年被打中約 23 次；(C) 錯，先看到閃電；(D) 錯，要遠離大樹。"
  }
 ],
 [
  {
   "q": "1. Which of the following is the best title for the passage?",
   "tag": "主旨",
   "opts": [
    "How to Build a Lightning Rod",
    "Why Sand Turns into Glass",
    "The History of New York",
    "Lightning: Hot, Fast, and Often Misunderstood"
   ],
   "a": 3,
   "exp": "文章談閃電的高溫、用雷聲估距離，以及「不會打同一處」的迷思，(D) 最能涵蓋全文。(B) 只是第二段的一個細節。"
  },
  {
   "q": "2. Which of the following is TRUE according to the passage?",
   "tag": "細節",
   "opts": [
    "Sound travels faster than light.",
    "Lightning only happens between a cloud and the ground.",
    "Thunder is caused by air expanding very suddenly.",
    "Fulgurites are made of metal."
   ],
   "a": 2,
   "exp": "(C) 正確（第二段：超高溫空氣突然膨脹產生震波，就是雷聲）。(A) 錯，光快得多；(B) 錯，也會發生在雲的不同部分之間；(D) 錯，閃電熔岩是沙熔成的玻璃管。"
  },
  {
   "q": "3. If you hear thunder six seconds after you see a flash, about how far away is the lightning?",
   "tag": "推論",
   "opts": [
    "About 1 kilometer",
    "About 2 kilometers",
    "About 6 kilometers",
    "About 18 kilometers"
   ],
   "a": 1,
   "exp": "第三段：聲音每三秒約前進一公里，6 ÷ 3 ＝ 2，答案是 (B)。"
  },
  {
   "q": "4. What is the purpose of a lightning rod?",
   "tag": "細節",
   "opts": [
    "To guide electricity safely into the ground",
    "To make lightning hotter",
    "To stop thunder from being heard",
    "To help people count seconds"
   ],
   "a": 0,
   "exp": "最後一段：避雷針是把電安全引導到地下的金屬棒，答案是 (A)。"
  }
 ],
 [
  {
   "q": "1. What is the main purpose of the passage?",
   "tag": "作者用意",
   "opts": [
    "To explain the science of lightning and correct some common mistaken beliefs about it",
    "To describe the life of Benjamin Franklin",
    "To argue that weather satellites are too expensive",
    "To compare lightning in different countries"
   ],
   "a": 0,
   "exp": "文章說明閃電的成因、溫度與估距離的方法，並破除「不會打同一處」「沒下雨就安全」等誤解，答案是 (A)。"
  },
  {
   "q": "2. The word \"gauging\" in the third paragraph is closest in meaning to ______.",
   "tag": "字義",
   "opts": [
    "hiding",
    "estimating",
    "increasing",
    "ignoring"
   ],
   "a": 1,
   "exp": "後面接著說明怎麼用秒數算出距離，gauge a storm's distance ＝ 估算暴風雨的距離，答案是 (B)。"
  },
  {
   "q": "3. Why does the author mention the Empire State Building?",
   "tag": "推論",
   "opts": [
    "To describe where most lightning happens",
    "To prove that tall buildings are unsafe to live in",
    "To explain how thunder is produced",
    "To show that lightning can strike the same place many times"
   ],
   "a": 3,
   "exp": "第四段用帝國大廈每年平均被打中 23 次，來反駁「閃電不會打同一個地方兩次」，答案是 (D)。"
  },
  {
   "q": "4. According to the passage, which of the following is a safe place during a thunderstorm?",
   "tag": "細節",
   "opts": [
    "Under a tall, isolated tree",
    "An open field, as long as it is not raining",
    "A hard-topped car",
    "A sandy beach"
   ],
   "a": 2,
   "exp": "最後一段：真正安全的地方只有密閉建築物和有硬車頂的車輛，答案是 (C)。(B) 錯，閃電可能從晴朗的天空打下來。"
  },
  {
   "q": "5. Which of the following is NOT true according to the passage?",
   "tag": "細節",
   "opts": [
    "Most lightning is concentrated over the tropics.",
    "Benjamin Franklin first proposed lightning rods.",
    "Lightning cannot strike when the sky overhead looks clear.",
    "Sound travels about 340 meters per second."
   ],
   "a": 2,
   "exp": "最後一段說閃電可能從一片看似晴朗的天空出現，所以 (C) 不正確。其他三項文中都有提到。"
  }
 ]
];

const META = {
 id:"lightning", title:"Hotter Than the Sun", category:"科學",
 dek:"一道閃電能把空氣加熱到比太陽表面還熱五倍。數一數秒數，就知道暴風雨離你多遠；而「閃電不會打同一個地方兩次」，其實是錯的。",
 date:"2026/11/8",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&w=1600&q=70" data-local="lightning-hero.jpg" alt="A lightning bolt in a dark blue night sky" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#1A2238"/><path d="M0 120 C120 70 260 130 400 90 S660 60 800 100 V0 H0Z" fill="#2C355A"/><path d="M0 360 C200 340 420 372 800 350 V420 H0Z" fill="#0F1526"/><path d="M430 60 l-34 110 l40 -10 l-44 120 l36 -10 l-40 110" fill="none" stroke="#FFE14D" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/><path d="M430 60 l-34 110 l40 -10 l-44 120 l36 -10 l-40 110" fill="none" stroke="#FFFBE0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M402 220 q-30 30 -70 40" fill="none" stroke="#FFE14D" stroke-width="4" stroke-linecap="round"/></svg>
<figcaption>閃電只出現一瞬間，卻比太陽表面還要熱。<span class="credit">Photo: Michał Mancewicz / Unsplash</span></figcaption>`,
 fact:"閃電打到沙地時，會把沙子熔成中空的玻璃管，叫做「閃電熔岩」（fulgurite），形狀就像閃電在地下留下的樹枝。",
 next:{title:"The Moon Is Running Away", href:"read.html#moon"}
};
const USAGE = {
  "lightning": ["a flash of lightning · be struck by lightning · thunder and lightning", "A flash of lightning lit up the whole sky.", "一道閃電照亮了整片天空。"],
  "powerful": ["a powerful engine · a powerful storm · powerful enough to …", "The wind was powerful enough to knock down trees.", "風大到足以吹倒樹木。"],
  "giant": ["a giant wave · giant pandas · a giant screen", "We watched the game on a giant screen in the square.", "我們在廣場的超大螢幕上看比賽。"],
  "spark": ["a spark of … · spark plug · sparks fly", "Sparks flew from the fireworks into the dark sky.", "煙火的火花飛向漆黑的天空。"],
  "surface": ["the surface of the water · the earth's surface · on the surface", "Leaves floated on the surface of the pond.", "葉子漂浮在池塘水面上。"],
  "thunder": ["a clap of thunder · loud thunder · thunder rumbles", "My dog hides under the bed whenever it hears thunder.", "我家的狗一聽到打雷就躲到床底下。"],
  "flash": ["a flash of light · camera flash · in a flash", "The camera flash made everyone blink.", "相機的閃光讓每個人都眨了眼睛。"],
  "storm": ["a heavy storm · a storm hits … · during the storm", "The ferry was canceled because of the storm.", "渡輪因為暴風雨停駛了。"],
  "strike": ["lightning strikes · be struck by … · strike a tree", "Lightning struck the tall tree in the middle of the field.", "閃電擊中了田中央那棵高大的樹。"],
  "extreme": ["extreme heat · extreme weather · extreme sports", "Extreme weather is becoming more common around the world.", "極端天氣在世界各地變得愈來愈常見。"],
  "bolt": ["a bolt of lightning · like a bolt from the blue", "The news hit us like a bolt from the blue.", "這個消息對我們來說就像晴天霹靂。"],
  "expand": ["expand quickly · expand one's business · metals expand when heated", "Metal expands when it is heated.", "金屬受熱會膨脹。"],
  "shock": ["shock wave · culture shock · electric shock", "The explosion sent a shock wave through the building.", "爆炸的震波傳遍了整棟大樓。"],
  "melt": ["melt metal · melt at … degrees · melt down", "Gold melts at about 1,064 degrees Celsius.", "黃金大約在攝氏一千零六十四度熔化。"],
  "hollow": ["a hollow tree · a hollow tube · sound hollow", "An owl was living in a hollow tree near the river.", "一隻貓頭鷹住在河邊一棵樹幹中空的樹裡。"],
  "estimate": ["estimate the distance · estimate that … · a rough estimate", "Can you estimate how far it is to the next town?", "你能估計到下一個鎮有多遠嗎？"],
  "gap": ["a gap between A and B · fill the gap · a time gap", "There is a big gap between the rich and the poor.", "貧富之間有很大的差距。"],
  "myth": ["a common myth · the myth that … · break a myth", "It's a common myth that goldfish only remember things for three seconds.", "金魚只有三秒記憶是一個常見的迷思。"],
  "pointed": ["pointed ears · a pointed roof · a pointed stick", "Elves in stories often have pointed ears.", "故事裡的精靈常常有尖尖的耳朵。"],
  "rod": ["a lightning rod · a fishing rod · a metal rod", "He bought a new fishing rod for his trip to the lake.", "他為了去湖邊玩買了一根新釣竿。"],
  "phenomenon": ["a weather phenomenon · natural phenomena · a rare phenomenon", "Rainbows are a common weather phenomenon after rain.", "彩虹是雨後常見的天氣現象。"],
  "underestimate": ["underestimate the danger · underestimate the power of …", "Many swimmers underestimate the power of ocean waves.", "許多泳客低估了海浪的力量。"],
  "discharge": ["electrical discharge · the discharge of …", "Static shock is a tiny electrical discharge from your body.", "靜電電擊是你身體發出的微小放電。"],
  "fraction": ["a fraction of the cost · in a fraction of a second", "The new train covers the distance in a fraction of the time.", "新列車只花一小部分的時間就跑完這段距離。"],
  "channel": ["a narrow channel · TV channel · through official channels", "The water flows through a narrow channel into the sea.", "水經過一條狹窄的水道流入大海。"],
  "fuse": ["fuse together · be fused into … · fuse A with B", "The singer's music fuses Taiwanese folk songs with hip-hop.", "那位歌手的音樂融合了台灣民謠與嘻哈。"],
  "fragile": ["fragile glass · a fragile ecosystem · handle with care: fragile", "The box was marked \"Fragile\" because it contained glasses.", "那個箱子標示「易碎」，因為裡面裝著玻璃杯。"],
  "interval": ["at regular intervals · an interval of … · time interval", "Buses leave the station at ten-minute intervals.", "公車每隔十分鐘從車站發車。"],
  "gauge": ["gauge the distance · gauge sb's reaction · hard to gauge", "It's hard to gauge how people will react to the news.", "很難估計大家對這個消息會有什麼反應。"],
  "instantaneously": ["happen instantaneously · react instantaneously", "The message was sent around the world almost instantaneously.", "這則訊息幾乎在一瞬間就傳遍全世界。"],
  "misconception": ["a common misconception · a misconception about … · correct a misconception", "It's a common misconception that bats are blind.", "蝙蝠是瞎子是一個常見的誤解。"],
  "exploit": ["exploit a weakness · exploit resources · exploit an opportunity", "The team exploited the other side's weak defense to score.", "這支隊伍利用對方的防守弱點得分。"],
  "tendency": ["a tendency to do sth · a growing tendency · natural tendency", "He has a tendency to talk too fast when he's nervous.", "他緊張時往往會說得太快。"],
  "emerge": ["emerge from … · a picture emerges · new problems emerge", "The sun emerged from behind the clouds.", "太陽從雲後露出來了。"]
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
