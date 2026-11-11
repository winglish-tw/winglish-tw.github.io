/* 產生 key-levels.js：每篇文章「本篇單字」在大考中心 7000 單字表的級數（0＝不在表內，超出學測）。
   新增文章後在網站資料夾執行：node tools/key-levels.js */
const fs=require("fs");const L=JSON.parse(fs.readFileSync(__dirname+"/ceec-levels.json"));
const IRR={caught:"catch",struck:"strike",paid:"pay",hidden:"hide",frozen:"freeze",fed:"feed",led:"lead",held:"hold",built:"build",lost:"lose",kept:"keep",felt:"feel",left:"leave",meant:"mean",sent:"send",spent:"spend",told:"tell",found:"find",sold:"sell",won:"win",taught:"teach",thought:"think",brought:"bring",bought:"buy",fought:"fight",broken:"break",chosen:"choose",driven:"drive",given:"give",taken:"take",written:"write",spoken:"speak",shaken:"shake",stolen:"steal",grown:"grow",known:"know",thrown:"throw",worn:"wear",torn:"tear"};
function cands(w){const c=[w];
  if(w.endsWith("ically"))c.push(w.slice(0,-4),w.slice(0,-6)+"ic");
  if(w.endsWith("ily"))c.push(w.slice(0,-3)+"y");
  if(w.endsWith("ly"))c.push(w.slice(0,-2),w.slice(0,-2)+"e",w.slice(0,-1)+"e");
  if(w.endsWith("ied"))c.push(w.slice(0,-3)+"y");
  if(w.endsWith("ed"))c.push(w.slice(0,-2),w.slice(0,-1),w.slice(0,-3));
  if(w.endsWith("ing"))c.push(w.slice(0,-3),w.slice(0,-3)+"e",w.slice(0,-4));
  for(const suf of ["ness","less","ful","ment"])if(w.endsWith(suf)){const b=w.slice(0,-suf.length);c.push(b,b.replace(/i$/,"y"));}
  if(w.startsWith("un"))c.push(w.slice(2));
  c.push(w.replace(/ies$/,"y"),w.replace(/es$/,""),w.replace(/s$/,""));
  return c}
function lv(w){w=w.toLowerCase();if(L[w])return L[w];if(IRR[w]&&L[IRR[w]])return L[IRR[w]];
  for(const k of cands(w)){if(L[k])return L[k];for(const k2 of cands(k))if(L[k2])return L[k2];}return 0}
global.window={};require(process.cwd()+"/articles.js");const out={};
for(const a of window.ARTICLES){eval(fs.readFileSync("a-"+a.id+".js","utf8"));for(const k of window.ARTICLE.KEY.flat())out[k]=lv(k)}
fs.writeFileSync("key-levels.js","/* 自動產生（tools/key-levels.js）：本篇單字在大考中心 7000 單字表的級數，0＝超出學測 */\nwindow.KEYLV="+JSON.stringify(out)+";\n");
const v=Object.values(out);console.log(v.length,"words,",v.filter(x=>!x).length,"outside list");
