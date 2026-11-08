/* winglish.tw 閱讀館文章資料：Why Flying East Is Harder */
window.ARTICLE = (function(){
const LEVELS = [
 { name:"Level 1", rec:"國三（會考程度）",
   paras:[[0,1,2,3],[4,5,6],[7,8,9,10,11],[12,13]], figs:{2:"clock",3:"photo"}, heads:{1:"A Clock in Your Brain",2:"East or West?",3:"How to Feel Better"},
   sents:[
    ["Have you ever flown to another country and felt sleepy in the middle of the day?","你有沒有飛到別的國家，結果大白天卻一直想睡覺？"],
    ["This problem is called jet lag.","這個問題叫做「時差」。"],
    ["It happens when you fly across many time zones very quickly.","當你很快地飛過好幾個時區，就會發生時差。"],
    ["Your watch can change in one second, but your body cannot.","你的手錶一秒鐘就能調好，你的身體卻不行。"],
    ["Inside your brain, there is a tiny clock that tells your body when to sleep and when to wake up.","你的大腦裡有一個小小的時鐘，告訴身體什麼時候該睡覺、什麼時候該起床。"],
    ["This clock is a little slow: its day is a bit longer than 24 hours.","這個時鐘走得有點慢：它的一天比 24 小時長一點點。"],
    ["Every morning, sunlight helps to set it to the right time.","每天早上，陽光會幫忙把它調回正確的時間。"],
    ["When you fly west, for example from Taiwan to London, your day becomes longer.","往西飛的時候，例如從台灣飛到倫敦，你的一天會變長。"],
    ["You just need to stay up later, and that is easy for your body clock.","你只要晚一點睡就好，這對身體的時鐘來說很容易。"],
    ["When you fly east, from London back to Taiwan, your day becomes shorter.","往東飛的時候，從倫敦飛回台灣，你的一天會變短。"],
    ["You have to go to sleep earlier, and that is much harder.","你得早一點睡覺，這就困難多了。"],
    ["This is why many travelers feel worse after flying east.","這就是為什麼很多旅客往東飛之後覺得比較難受。"],
    ["To feel better, get some sunlight in the morning after you arrive, and try to eat and sleep at local times.","想舒服一點的話，抵達後早上去曬曬太陽，並且試著照當地的時間吃飯、睡覺。"],
    ["People often say it takes about one day to get used to each hour of time difference.","大家常說，每差一個小時，大約需要一天來適應。"]
 ]},
 { name:"Level 2", rec:"高二",
   paras:[[0,1,2],[3,4,5,6],[7,8,9,10],[11,12,13]], figs:{2:"clock",3:"photo"}, heads:{1:"The Body's Master Clock",2:"Why East Hurts More",3:"Resetting the Clock"},
   sents:[
    ["A long flight can be exciting, but the excitement often ends the moment you land, when you find yourself wide awake at 3 a.m. and fighting to keep your eyes open at lunchtime.","長途飛行可能很令人興奮，但這份興奮常常在降落的那一刻就結束了：你發現自己凌晨三點還睡不著，到了午餐時間卻拚命撐著不讓眼睛閉上。"],
    ["This uncomfortable feeling is known as jet lag.","這種不舒服的感覺就叫做時差。"],
    ["It happens because airplanes can carry us across several time zones in a few hours, while our bodies need days to catch up.","會有時差，是因為飛機能在幾個小時內帶我們跨過好幾個時區，身體卻需要好幾天才跟得上。"],
    ["Deep inside the brain, a tiny group of about 20,000 nerve cells works as the body's master clock.","在大腦深處，有一小群大約兩萬個神經細胞，扮演身體的「主時鐘」。"],
    ["It controls when we feel sleepy, when we feel hungry, and even when our body temperature rises and falls.","它控制我們什麼時候想睡、什麼時候會餓，甚至體溫什麼時候升高、什麼時候下降。"],
    ["Interestingly, for most people this clock does not run on exactly 24 hours but on a cycle slightly longer than that.","有趣的是，對大部分的人來說，這個時鐘不是剛好 24 小時一輪，而是比 24 小時稍微長一點。"],
    ["Each day, light, especially morning sunlight, resets it to match the outside world.","每一天，光線──尤其是早晨的陽光──會把它重新調整，跟外面的世界對齊。"],
    ["This small detail explains why the direction of travel matters.","這個小細節，說明了為什麼飛行的方向很重要。"],
    ["Flying west, say from Taipei to London, makes your day longer, so your body simply has to stay awake a little later, which its slightly slow clock does quite naturally.","往西飛，例如從台北到倫敦，會讓你的一天變長，所以身體只要晚一點睡就好；對這個本來就走得有點慢的時鐘來說，這相當自然。"],
    ["Flying east makes the day shorter and forces you to fall asleep earlier than your body wants.","往東飛則會讓一天變短，逼你比身體想要的時間更早入睡。"],
    ["A study by researchers at the University of Maryland estimated that recovering from a trip across six time zones takes about six days going west but more than eight days going east.","美國馬里蘭大學研究人員的一項研究估計，跨越六個時區的旅程，往西飛大約需要六天恢復，往東飛卻要超過八天。"],
    ["The good news is that you can help your clock adjust.","好消息是，你可以幫助你的時鐘調整過來。"],
    ["After flying east, try to get bright light in the morning; after flying west, evening light helps you stay up later.","往東飛之後，試著在早上多照亮光；往西飛之後，傍晚的光線能幫助你晚一點睡。"],
    ["Eating meals and going to bed at local times also sends your body the message that it has arrived somewhere new.","照當地時間吃飯、睡覺，也是在告訴你的身體：它已經到了一個新的地方。"]
 ]},
 { name:"Level 3", rec:"比學測更難（進階挑戰）",
   paras:[[0,1],[2,3,4],[5,6,7,8],[9,10,11,12]], figs:{2:"clock",3:"photo"}, heads:{1:"A Clock That Runs Slow",2:"The Asymmetry of Travel",3:"Strategies That Work"},
   sents:[
    ["Modern aviation allows us to cross half the globe between breakfast and dinner, but the human body still behaves as if it were traveling on foot.","現代航空讓我們能在早餐和晚餐之間橫越半個地球，但人體的反應，卻仍然像是靠雙腳在旅行。"],
    ["The result, which includes fatigue, insomnia, poor concentration and an upset stomach in the days after a long-haul flight, is known as jet lag, or more technically, circadian misalignment.","結果就是長途飛行後幾天裡的疲倦、失眠、注意力不集中和腸胃不適，這叫做時差，更專業的說法是「晝夜節律失調」。"],
    ["At the root of the problem is the suprachiasmatic nucleus, a cluster of roughly 20,000 neurons in the hypothalamus that serves as the body's master clock, coordinating the daily rhythms of sleep, hormone release, body temperature and digestion.","問題的根源在於「視交叉上核」，它是下視丘裡大約兩萬個神經元組成的細胞團，扮演身體的主時鐘，協調睡眠、荷爾蒙分泌、體溫和消化的每日節律。"],
    ["Remarkably, when people are kept in isolation from daylight, their internal rhythms drift, revealing a natural cycle slightly longer than 24 hours.","值得注意的是，當人們被隔絕在日光之外，他們體內的節律就會逐漸漂移，顯示出一個比 24 小時稍長的自然週期。"],
    ["Under normal conditions, this discrepancy is corrected every morning, primarily by light entering the eyes, which signals the clock to keep pace with the solar day.","在正常情況下，這個落差每天早上都會被修正，主要是靠進入眼睛的光線；光線會通知時鐘，跟上太陽的一天。"],
    ["This slight sluggishness accounts for a familiar asymmetry.","這一點點的「慢」，說明了一個大家熟悉的不對稱現象。"],
    ["Westbound travelers must lengthen their day, delaying sleep, which a slow clock accommodates with relative ease, whereas eastbound travelers must shorten it, advancing their bedtime against the clock's natural tendency.","往西的旅客必須把一天拉長、延後睡覺，這對走得慢的時鐘來說相對容易配合；往東的旅客卻必須把一天縮短、提早就寢，違背了時鐘的自然傾向。"],
    ["In 2016, physicists at the University of Maryland modeled the synchronization of these clock neurons and found that the common rule of \"one day of recovery per time zone\" underestimates the eastward penalty: crossing nine time zones, for instance, might require less than eight days going west but more than twelve going east.","2016 年，馬里蘭大學的物理學家為這些時鐘神經元的同步建立了模型，發現「每個時區需要一天恢復」這條常見的規則，低估了往東飛的代價：例如跨越九個時區，往西可能不到八天就能恢復，往東卻要十二天以上。"],
    ["Curiously, the model suggests that for very long journeys of about twelve time zones, direction ceases to matter, since the clock can adjust in either direction.","奇妙的是，模型顯示，當旅程長到跨越約十二個時區時，方向就不再重要了，因為時鐘往哪個方向調整都可以。"],
    ["Because light is the clock's most powerful cue, timing exposure to it is the most effective countermeasure.","因為光線是時鐘最強的提示，所以掌握照光的時機，就是最有效的對策。"],
    ["Morning light tends to advance the clock, which is helpful after flying east, while evening light delays it, which is useful after flying west.","早晨的光線往往會讓時鐘提前，對往東飛之後有幫助；傍晚的光線則會讓時鐘延後，對往西飛之後很有用。"],
    ["Some flight crews on short trips choose not to adapt at all, keeping to their home schedules because they will be flying back before their bodies could adjust.","有些短程任務的機組人員乾脆選擇完全不調整，維持原本家裡的作息，因為在身體適應之前，他們就要飛回去了。"],
    ["For the rest of us, the lesson is simple: the body can be persuaded, but it cannot be rushed.","對我們其他人來說，教訓很簡單：身體可以被說服，卻不能被催促。"]
 ]}
];

const GLOSS = {
  flown:["v.","飛（fly 的過去分詞）"], fly:["v.","飛"], country:["n.","國家"], sleepy:["adj.","想睡的"], middle:["n.","中間"],
  jet:["n.","噴射機；jet lag 時差"], lag:["n.","落後；jet lag 時差"], zone:["n.","區域；time zone 時區"], quickly:["adv.","很快地"], watch:["n.","手錶"],
  brain:["n.","大腦"], tiny:["adj.","微小的"], clock:["n.","時鐘"], wake:["v.","醒來"], slow:["adj.","慢的"],
  sunlight:["n.","陽光"], west:["adv.","往西"], east:["adv.","往東"], london:["n.","倫敦"], traveler:["n.","旅客"],
  worse:["adj.","更糟的"], arrive:["v.","抵達"], local:["adj.","當地的"], difference:["n.","差異；time difference 時差"],
  flight:["n.","班機；飛行"], exciting:["adj.","令人興奮的"], excitement:["n.","興奮"], land:["v.","降落"], awake:["adj.","醒著的"],
  lunchtime:["n.","午餐時間"], uncomfortable:["adj.","不舒服的"], airplane:["n.","飛機"], several:["adj.","幾個的"], nerve:["n.","神經"],
  cell:["n.","細胞"], master:["adj.","主要的；master clock 主時鐘"], control:["v.","控制"], hungry:["adj.","餓的"], temperature:["n.","溫度"],
  exactly:["adv.","剛好；精確地"], cycle:["n.","週期"], slightly:["adv.","稍微"], especially:["adv.","尤其"], reset:["v.","重設"],
  match:["v.","配合；對齊"], detail:["n.","細節"], direction:["n.","方向"], matter:["v.","重要"], naturally:["adv.","自然地"],
  force:["v.","強迫"], researcher:["n.","研究人員"], maryland:["n.","馬里蘭（美國州名）"], estimate:["v.","估計"], recover:["v.","恢復"],
  adjust:["v.","調整"], bright:["adj.","明亮的"], evening:["n.","傍晚"], message:["n.","訊息"],
  modern:["adj.","現代的"], aviation:["n.","航空"], globe:["n.","地球"], behave:["v.","表現；舉止"], fatigue:["n.","疲勞"],
  insomnia:["n.","失眠"], concentration:["n.","專注"], upset:["adj.","不舒服的；upset stomach 腸胃不適"], stomach:["n.","胃"],
  haul:["n.","距離；long-haul 長途的"], technically:["adv.","專業上地"], circadian:["adj.","晝夜節律的"], misalignment:["n.","失調；不對齊"],
  root:["n.","根源"], suprachiasmatic:["adj.","視交叉上的"], nucleus:["n.","核"], cluster:["n.","一團"], neuron:["n.","神經元"],
  hypothalamus:["n.","下視丘"], coordinate:["v.","協調"], rhythm:["n.","節律；節奏"], hormone:["n.","荷爾蒙"], release:["n.","釋放；分泌"],
  digestion:["n.","消化"], remarkably:["adv.","值得注意地"], isolation:["n.","隔離"], daylight:["n.","日光"], internal:["adj.","內部的"],
  drift:["v.","漂移"], reveal:["v.","顯示"], discrepancy:["n.","落差；不一致"], primarily:["adv.","主要地"], signal:["v.","發出信號"],
  pace:["n.","步調；keep pace with 跟上"], solar:["adj.","太陽的"], sluggishness:["n.","遲緩"], account:["v.","account for 說明"], asymmetry:["n.","不對稱"],
  westbound:["adj.","往西的"], eastbound:["adj.","往東的"], lengthen:["v.","延長"], delay:["v.","延後"], accommodate:["v.","配合；適應"],
  relative:["adj.","相對的"], ease:["n.","容易"], advance:["v.","提前"], tendency:["n.","傾向"], physicist:["n.","物理學家"],
  model:["v.","建立模型"], synchronization:["n.","同步"], underestimate:["v.","低估"], eastward:["adj.","往東的"], penalty:["n.","代價；懲罰"],
  require:["v.","需要"], curiously:["adv.","奇妙地"], cease:["v.","停止"], powerful:["adj.","強大的"], cue:["n.","提示"],
  exposure:["n.","暴露；照射"], effective:["adj.","有效的"], countermeasure:["n.","對策"], crew:["n.","機組人員"], adapt:["v.","適應"],
  schedule:["n.","作息；行程"], persuade:["v.","說服"], rush:["v.","催促"]
};
const KEY = [["jet","lag","zone","clock","wake","slow","sunlight","west","east","local"],
             ["exciting","awake","uncomfortable","master","cycle","slightly","reset","direction","force","recover","adjust"],
             ["aviation","fatigue","insomnia","circadian","neuron","coordinate","rhythm","isolation","discrepancy","asymmetry","accommodate","underestimate","penalty","countermeasure","persuade"]];

const DEFS = {
  "jet": "a fast aircraft; jet lag is the tired feeling after a long flight",
  "lag": "a delay in time; jet lag is tiredness after flying across time zones",
  "zone": "an area with a particular feature; a time zone shares the same time",
  "clock": "something that shows the time; the body's clock controls daily cycles",
  "wake": "to stop sleeping",
  "slow": "not moving or happening quickly",
  "sunlight": "the light that comes from the sun",
  "west": "toward the direction where the sun goes down",
  "east": "toward the direction where the sun comes up",
  "local": "belonging to the particular place you are in",
  "exciting": "making you feel very happy and enthusiastic",
  "awake": "not sleeping",
  "uncomfortable": "not feeling physically relaxed or pleasant",
  "master": "most important; controlling all the others",
  "cycle": "a period of time in which a set of events happens again and again",
  "slightly": "a little",
  "reset": "to change something back to a new or starting time or setting",
  "direction": "the way something is moving or pointing",
  "force": "to make someone do something they do not want to do",
  "recover": "to get well again after being ill, hurt or tired",
  "adjust": "to change slightly to get used to a new situation",
  "aviation": "the designing, building and flying of aircraft",
  "fatigue": "a feeling of being extremely tired",
  "insomnia": "the condition of being unable to sleep",
  "circadian": "connected with the body's 24-hour cycle of sleeping and waking",
  "neuron": "a cell that carries messages in the brain and nerves",
  "coordinate": "to organize different parts so that they work together well",
  "rhythm": "a regular repeated pattern of movement, sound or activity",
  "isolation": "the state of being separated from other people or things",
  "discrepancy": "a difference between things that should be the same",
  "asymmetry": "a lack of balance between two sides",
  "accommodate": "to adjust to or make room for something",
  "underestimate": "to think something is smaller or less important than it really is",
  "penalty": "a disadvantage or bad result caused by an action",
  "countermeasure": "an action taken to reduce or prevent something harmful",
  "persuade": "to make someone agree to do something by giving reasons"
};

const FIGS = {
  clock:{svg:`<svg viewBox="0 0 600 340" role="img" aria-label="Why flying east causes worse jet lag than flying west" style="display:block;width:100%;height:auto;border-radius:6px;background:#F3F5FA">
<defs><marker id="jh" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1A2238"/></marker></defs>
<path d="M30 120 C120 96 220 92 300 100 C380 92 480 96 570 120 C540 150 470 166 400 170 C330 176 270 176 200 170 C130 166 60 150 30 120Z" fill="#DDE7D6"/>
<g fill="#1A2238"><circle cx="490" cy="132" r="6"/><circle cx="120" cy="118" r="6"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238"><text x="502" y="150" font-size="13" font-weight="700">Taipei</text><text x="504" y="164" font-size="10" fill="#5A6478">台北</text><text x="56" y="122" font-size="13" font-weight="700">London</text><text x="62" y="136" font-size="10" fill="#5A6478">倫敦</text></g>
<path d="M480 116 C400 50 220 46 132 104" fill="none" stroke="#17875C" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#jh)"/>
<path d="M146 128 C230 212 400 214 484 146" fill="none" stroke="#D23F57" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#jh)"/>
<g font-family="Noto Sans TC,sans-serif">
<text x="210" y="24" font-size="14" font-weight="700" fill="#17875C">Fly WEST: the day gets longer</text><text x="210" y="41" font-size="11" fill="#5A6478">往西飛：一天變長 → 晚點睡就好（比較容易）</text>
<text x="196" y="236" font-size="14" font-weight="700" fill="#D23F57">Fly EAST: the day gets shorter</text><text x="196" y="254" font-size="11" fill="#5A6478">往東飛：一天變短 → 要提早睡（比較困難）</text>
</g>
<rect x="30" y="272" width="540" height="56" rx="12" fill="#fff" stroke="#E4E9F2" stroke-width="1.5"/>
<g transform="translate(64 300)"><circle r="20" fill="#FFF6C9" stroke="#1A2238" stroke-width="2.5"/><path d="M0 0 V-13 M0 0 L9 5" stroke="#1A2238" stroke-width="2.5" stroke-linecap="round"/><path d="M14 -16 C20 -12 22 -6 22 0" fill="none" stroke="#D23F57" stroke-width="2.5" stroke-linecap="round"/></g>
<g font-family="Noto Sans TC,sans-serif" fill="#1A2238"><text x="98" y="296" font-size="13" font-weight="700">Your body clock runs a little longer than 24 hours.</text><text x="98" y="314" font-size="11" fill="#5A6478">身體的時鐘一輪比 24 小時長一點，所以「延後」比「提前」容易</text></g>
</svg>`,
    cap:"為什麼往東飛時差比較嚴重？因為身體的時鐘本來就走得有點慢，把一天拉長容易，縮短就難了。",
    credit:"圖解：winglish.tw"},
  photo:{src:"https://images.unsplash.com/photo-1713201746661-7176fc733a14?auto=format&fit=crop&w=1400&q=70", local:"jetlag-2.jpg", alt:"View of the sky from an airplane window", fb:"（從飛機窗戶看出去的天空照片）",
    cap:"照光的時機，是調整時差最有效的方法。",
    credit:'Photo: Christian Lue / <a href="https://unsplash.com/photos/a-view-of-the-night-sky-from-an-airplane-YVZX2ksshrM" target="_blank" rel="noopener">Unsplash</a>'}
};

const QUIZ = [
 [
  {"q":"1. What is the passage mainly about?","tag":"主旨",
   "opts":["How to buy cheap plane tickets","What jet lag is and why flying east is harder","Why London is a good place to visit","How to fix a broken watch"],
   "a":1,"exp":"文章解釋時差是什麼、為什麼往東飛比較難受，以及怎麼改善，答案是 (B)。"},
  {"q":"2. What helps set your body clock to the right time every morning?","tag":"細節",
   "opts":["Sunlight","Your watch","Coffee","Breakfast"],
   "a":0,"exp":"第二段：每天早上，陽光會幫忙把身體的時鐘調回正確的時間，答案是 (A)。"},
  {"q":"3. Why is flying east harder than flying west?","tag":"因果",
   "opts":["Planes fly more slowly to the east.","The food on the plane is worse.","You have to go to sleep earlier, which is hard for your body clock.","It is always raining in the east."],
   "a":2,"exp":"第三段：往東飛一天變短，要提早睡，對走得有點慢的身體時鐘來說比較困難，答案是 (C)。"}
 ],
 [
  {"q":"1. Which of the following is the best title for the passage?","tag":"主旨",
   "opts":["The Best Airlines in the World","Why Breakfast Is Important","How to Sleep on a Plane","Jet Lag: Why Direction Matters and What Helps"],
   "a":3,"exp":"全文說明時差的原因、方向為什麼重要，以及怎麼調整，(D) 最完整。"},
  {"q":"2. What does the body's master clock control?","tag":"細節",
   "opts":["When we feel sleepy or hungry, and our body temperature","How fast airplanes fly","Which time zone we live in","How tall we grow"],
   "a":0,"exp":"第二段：主時鐘控制我們什麼時候想睡、會餓，以及體溫的升降，答案是 (A)。"},
  {"q":"3. According to the University of Maryland study, how long does it take to recover from crossing six time zones going east?","tag":"細節",
   "opts":["About three days","About six days","More than eight days","Exactly one day"],
   "a":2,"exp":"第三段：跨越六個時區，往西約六天，往東要超過八天，答案是 (C)。"},
  {"q":"4. What should you do after flying east?","tag":"推論",
   "opts":["Stay in a dark room all morning","Get bright light in the morning","Sleep during the day","Keep your home schedule"],
   "a":1,"exp":"第四段：往東飛之後，試著在早上多照亮光，答案是 (B)。"}
 ],
 [
  {"q":"1. What does the author mean by \"the body can be persuaded, but it cannot be rushed\"?","tag":"主旨",
   "opts":["We can help the body clock adjust, but it still needs time.","We should never take long flights.","The body clock never changes.","Medicine can cure jet lag right away."],
   "a":0,"exp":"最後一句：用照光等方法可以「說服」身體調整，但不能要它馬上適應，答案是 (A)。"},
  {"q":"2. The word \"discrepancy\" in the second paragraph is closest in meaning to ______.","tag":"字義",
   "opts":["a kind of light","a difference between two things","a type of neuron","a long journey"],
   "a":1,"exp":"discrepancy 指的是體內週期（比 24 小時稍長）和太陽一天（24 小時）之間的「落差」，答案是 (B)。"},
  {"q":"3. According to the passage, why can westbound travelers adjust more easily?","tag":"因果",
   "opts":["They usually fly in the morning.","Westbound flights are shorter.","They see more sunlight on the plane.","Delaying sleep suits a clock that runs slightly slow."],
   "a":3,"exp":"第三段：往西要延後睡覺，對走得慢的時鐘來說相對容易配合，答案是 (D)。"},
  {"q":"4. Why do some flight crews choose not to adapt at all?","tag":"推論",
   "opts":["They do not suffer from jet lag.","They will fly back before their bodies could adjust.","Their airlines do not allow it.","They always fly west."],
   "a":1,"exp":"第四段：短程任務的機組人員在身體適應之前就要飛回去，所以乾脆維持原本作息，答案是 (B)。"},
  {"q":"5. Which of the following is NOT true according to the passage?","tag":"細節",
   "opts":["The suprachiasmatic nucleus is in the hypothalamus.","Evening light tends to delay the body clock.","The rule of one day per time zone works perfectly for eastward trips.","For trips of about twelve time zones, direction may not matter."],
   "a":2,"exp":"第三段說「每個時區一天」的規則低估了往東飛的代價，所以 (C) 不正確。"}
 ]
];

const META = {
 id:"jetlag", title:"Why Flying East Is Harder", category:"旅行",
 dek:"從台灣飛到歐洲還好，飛回來卻累好幾天？原來大腦裡的時鐘本來就走得有點慢。看懂時差的祕密，下次出國就知道怎麼調。",
 date:"2026/11/2",
 hero:`<img class="photo" src="https://images.unsplash.com/photo-1751698158488-9faa95a179f8?auto=format&fit=crop&w=1600&q=70" data-local="jetlag-hero.jpg" alt="Night view from an airplane window at an airport" onerror="if(!this.dataset.t){this.dataset.t=1;this.src=this.dataset.local}else{this.remove()}">
<svg viewBox="0 0 800 420" aria-hidden="true"><rect width="800" height="420" fill="#16213E"/>
<path d="M260 60 C260 30 290 10 330 10 H470 C510 10 540 30 540 60 V340 C540 380 510 400 470 400 H330 C290 400 260 380 260 340Z" fill="#2C355A" stroke="#E4E9F2" stroke-width="10"/>
<path d="M290 80 C290 54 314 40 340 40 H460 C486 40 510 54 510 80 V320 C510 348 486 368 460 368 H340 C314 368 290 348 290 320Z" fill="#0F1730"/>
<circle cx="440" cy="120" r="26" fill="#FFF6C9"/><circle cx="452" cy="112" r="24" fill="#0F1730"/>
<g fill="#fff"><circle cx="330" cy="90" r="2"/><circle cx="370" cy="150" r="1.5"/><circle cx="470" cy="200" r="2"/><circle cx="340" cy="230" r="1.5"/></g>
<path d="M290 280 C350 262 420 270 510 250 V320 C510 348 486 368 460 368 H340 C314 368 290 348 290 320Z" fill="#3B4A78"/></svg>
<figcaption>長途飛行後的時差，來自大腦裡跟不上時區變化的「主時鐘」。<span class="credit">Photo: Nejc Soklič / Unsplash</span></figcaption>`,
 fact:"從台灣往東飛到美國，因為會越過國際換日線，常會出現「降落時間比起飛時間還早」的情況，例如晚上出發，抵達時卻還是同一天的傍晚！",
 next:{title:"Three Hearts and Blue Blood", href:"read.html#octopus"}
};
const USAGE = {
  "jet": ["a jet plane · a private jet · jet engine", "The movie star flew to Paris on a private jet.", "那位電影明星搭私人噴射機飛到巴黎。"],
  "lag": ["jet lag · suffer from jet lag · a time lag", "I suffered from bad jet lag after flying to New York.", "飛到紐約後，我時差很嚴重。"],
  "zone": ["time zone · a danger zone · a no-parking zone", "Japan is in a time zone one hour ahead of Taiwan.", "日本所在的時區比台灣快一小時。"],
  "clock": ["an alarm clock · set the clock · the clock strikes", "I set my alarm clock for six o'clock.", "我把鬧鐘設在六點。"],
  "wake": ["wake up · wake sb up · wake up early", "Please wake me up at seven tomorrow.", "明天七點請叫我起床。"],
  "slow": ["a slow walker · slow down · slow to respond", "The internet is very slow today.", "今天網路好慢。"],
  "sunlight": ["direct sunlight · bright sunlight · get some sunlight", "Keep this medicine out of direct sunlight.", "這個藥要避免陽光直射。"],
  "west": ["head west · travel west · face west", "The birds fly west every autumn.", "那些鳥每年秋天都往西飛。"],
  "east": ["go east · drive east · the sun rises in the east", "We drove east to watch the sunrise over the ocean.", "我們往東開，去看海上日出。"],
  "local": ["local time · local food · local people", "Our plane landed at 3 p.m. local time.", "我們的飛機在當地時間下午三點降落。"],
  "exciting": ["an exciting trip · exciting news · How exciting!", "We have some exciting news: we're getting a puppy!", "我們有個令人興奮的消息：我們要養小狗了！"],
  "awake": ["stay awake · wide awake · lie awake", "I drank coffee to stay awake during the long drive.", "長途開車時我喝咖啡保持清醒。"],
  "uncomfortable": ["feel uncomfortable · uncomfortable shoes · an uncomfortable silence", "These new shoes are really uncomfortable.", "這雙新鞋真的很不舒服。"],
  "master": ["master clock · master bedroom · master key", "The master bedroom has its own bathroom.", "主臥室有自己的浴室。"],
  "cycle": ["a sleep cycle · the life cycle · a 24-hour cycle", "A normal sleep cycle lasts about 90 minutes.", "一個正常的睡眠週期大約九十分鐘。"],
  "slightly": ["slightly different · slightly better · slightly higher", "My answer was slightly different from yours.", "我的答案和你的稍微不一樣。"],
  "reset": ["reset a password · reset the clock · reset a machine", "I forgot my password, so I had to reset it.", "我忘了密碼，只好重設。"],
  "direction": ["in the direction of · the opposite direction · a sense of direction", "I have no sense of direction, so I often get lost.", "我沒有方向感，所以常常迷路。"],
  "force": ["force sb to do sth · be forced to …", "The rain forced us to cancel the picnic.", "下雨迫使我們取消野餐。"],
  "recover": ["recover from an illness · fully recover · recover quickly", "It took her two weeks to fully recover from the flu.", "她花了兩個星期才從流感中完全康復。"],
  "adjust": ["adjust to sth · adjust the volume · adjust quickly", "It took me a month to adjust to life in a new city.", "我花了一個月才適應新城市的生活。"],
  "aviation": ["the aviation industry · civil aviation · aviation safety", "She wants to work in the aviation industry as a pilot.", "她想進入航空業當機師。"],
  "fatigue": ["chronic fatigue · driver fatigue · suffer from fatigue", "Driver fatigue causes many accidents on highways.", "駕駛疲勞造成許多高速公路上的事故。"],
  "insomnia": ["suffer from insomnia · chronic insomnia", "Drinking coffee late at night can cause insomnia.", "深夜喝咖啡可能導致失眠。"],
  "circadian": ["circadian rhythm · circadian clock", "Night-shift work can disturb your circadian rhythm.", "上夜班可能打亂你的晝夜節律。"],
  "neuron": ["brain neurons · nerve cells / neurons · neurons fire", "The human brain contains about 86 billion neurons.", "人腦大約有八百六十億個神經元。"],
  "coordinate": ["coordinate efforts · coordinate with sb · well coordinated", "The two teams coordinated their efforts to find the lost child.", "兩個團隊協調合作尋找走失的孩子。"],
  "rhythm": ["a steady rhythm · the rhythm of life · keep the rhythm", "The drummer kept a steady rhythm throughout the song.", "鼓手整首歌都維持穩定的節奏。"],
  "isolation": ["in isolation · social isolation · isolation ward", "Social isolation can be as harmful as smoking.", "社會孤立的害處可能跟抽菸一樣大。"],
  "discrepancy": ["a discrepancy between A and B · a large discrepancy", "There was a discrepancy between the price on the shelf and the price at the counter.", "架上標的價格和櫃檯的價格不一致。"],
  "asymmetry": ["facial asymmetry · an asymmetry between A and B", "There is an asymmetry between how easily we gain weight and how hard it is to lose it.", "變胖有多容易和瘦下來有多難，兩者並不對等。"],
  "accommodate": ["accommodate the needs of · accommodate change · accommodate guests", "The new schedule accommodates students who have part-time jobs.", "新的課表配合了有打工的學生。"],
  "underestimate": ["underestimate the cost · underestimate sb · seriously underestimate", "Never underestimate how long a group project will take.", "千萬別低估分組報告會花多少時間。"],
  "penalty": ["pay a penalty · a heavy penalty · the penalty for …", "The penalty for littering in Singapore is very heavy.", "在新加坡亂丟垃圾的罰則非常重。"],
  "countermeasure": ["take countermeasures · effective countermeasures", "The city took countermeasures to stop the spread of dengue fever.", "市政府採取對策阻止登革熱擴散。"],
  "persuade": ["persuade sb to do sth · persuade sb into … · try to persuade", "I persuaded my parents to let me join the trip.", "我說服爸媽讓我參加這趟旅行。"]
};

return Object.assign(META,{LEVELS,GLOSS,KEY,DEFS,FIGS,QUIZ,USAGE});
})();
