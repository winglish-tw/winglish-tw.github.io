/* 新增閱讀館文章後，在網站資料夾執行 node tools/count-words.js：計算每篇出現的大考中心 7000 單字表第 3–6 級單字數（寫到 tools/word-counts.json，再填進 articles.js 的 words 欄位）。
   單字表來源：大考中心高中英文參考詞彙表（6 級），由 GitHub 公開整理版轉成 { 單字: 級數 }。 */
const fs=require("fs");const L=JSON.parse(fs.readFileSync(__dirname+"/ceec-levels.json"));
global.window={};require(process.cwd()+"/articles.js");
const IRR={caught:"catch",struck:"strike",paid:"pay",hidden:"hide",frozen:"freeze",taught:"teach",thought:"think",brought:"bring",bought:"buy",fought:"fight",began:"begin",begun:"begin",ate:"eat",eaten:"eat",flew:"fly",flown:"fly",grew:"grow",grown:"grow",knew:"know",known:"know",wrote:"write",written:"write",spoke:"speak",spoken:"speak",chose:"choose",chosen:"choose",fell:"fall",fallen:"fall",took:"take",taken:"take",gave:"give",given:"give",drove:"drive",driven:"drive",rose:"rise",risen:"rise",sang:"sing",sung:"sing",swam:"swim",threw:"throw",thrown:"throw",wore:"wear",worn:"wear",tore:"tear",torn:"tear",stole:"steal",stolen:"steal",broke:"break",broken:"break",froze:"freeze",hid:"hide",shook:"shake",shaken:"shake",fed:"feed",led:"lead",held:"hold",built:"build",lost:"lose",kept:"keep",slept:"sleep",felt:"feel",left:"leave",meant:"mean",sent:"send",spent:"spend",lent:"lend",bent:"bend",dug:"dig",hung:"hang",stuck:"stick",won:"win",sold:"sell",told:"tell",found:"find",bound:"bind",wound:"wind",ran:"run",sat:"sit",lay:"lie",lain:"lie",laid:"lay",bit:"bite",bitten:"bite",blew:"blow",blown:"blow",drew:"draw",drawn:"draw",drank:"drink",drunk:"drink",forgot:"forget",forgotten:"forget",forgave:"forgive",forgiven:"forgive",understood:"understand",stood:"stand",women:"woman",men:"man",children:"child",teeth:"tooth",feet:"foot",mice:"mouse",geese:"goose"};
function lem(w){w=w.toLowerCase().replace(/['’]s$/,"");if(IRR[w]&&L[IRR[w]])return IRR[w];const c=[w,w.replace(/ies$/,"y"),w.replace(/es$/,""),w.replace(/s$/,""),w.replace(/ied$/,"y"),w.replace(/ed$/,""),w.replace(/d$/,""),w.replace(/ing$/,""),w.replace(/ing$/,"e"),w.replace(/(.)\1ing$/,"$1"),w.replace(/(.)\1ed$/,"$1"),w.replace(/er$/,""),w.replace(/est$/,""),w.replace(/ly$/,"")];for(const k of c)if(L[k])return k;return null}
const out={};
for(const a of window.ARTICLES){eval(fs.readFileSync("a-"+a.id+".js","utf8"));const R=window.ARTICLE;
 const key=[...new Set(R.KEY.flat())];const kin=key.filter(w=>L[w.toLowerCase()]||lem(w));
 const txt=R.LEVELS.map(l=>l.sents.map(s=>s[0]).join(" ")).join(" ");const ws=new Set();for(const t of txt.match(/[A-Za-z][A-Za-z'’-]*/g)){const k=lem(t);if(k)ws.add(k)}
 const adv=[...ws].filter(w=>L[w]>=3);
 out[a.id]=[kin.length,key.length,ws.size,adv.length,key.filter(w=>!(L[w.toLowerCase()]||lem(w)))];
}
for(const[k,v]of Object.entries(out))console.log(k,v[0]+"/"+v[1],"all:",v[2],"lv3+:",v[3],v[4].join(","));
fs.writeFileSync(__dirname+"/word-counts.json",JSON.stringify(Object.fromEntries(Object.entries(out).map(([k,v])=>[k,v[3]]))));
