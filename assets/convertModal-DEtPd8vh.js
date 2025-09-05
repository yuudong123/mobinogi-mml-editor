import{e as de,c as H}from"./button-WIurEURm.js";import{t as w,c as M}from"./languages-Cgt_gsPd.js";import{notesToMMLWithTempos as pe,notesToMML as me,notesToMMLRaw as ue,newOptimizeBody as fe}from"./converter-Bxff0mca.js";function be(B){const C=document.createElement("div");C.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
   `;const j=document.createElement("div");j.style.cssText=`
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      width: 90%;
      max-width: 600px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      display: flex;
      flex-direction: column;
      gap: 16px;
      position: relative;
   `;const I=document.createElement("div");I.style.cssText=`
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 8px;
      margin-bottom: 16px;
   `;const A=document.createElement("div");A.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const F=document.createElement("label");F.setAttribute("for","convertFilenameInput"),F.textContent=w[M].convertFilenameLabel||"파일명",F.setAttribute("data-i18n","convertFilenameLabel"),F.style.cssText=`
            min-width: 72px;
            color: #666;
            font-size: 12px;
        `;const v=document.createElement("input");v.type="text",v.id="convertFilenameInput",v.placeholder=w[M].convertFilenamePlaceholder||"예: my-song.txt",v.setAttribute("data-i18n-placeholder","convertFilenamePlaceholder"),v.style.cssText=`
            flex: 1 1 auto;
            padding: 6px 8px;
            border: 1px solid #cfcfcf;
            border-radius: 6px;
            font-size: 12px;
        `;const oe=new Date().toISOString().replace(/[:.]/g,"-");v.value=`mml-${oe}.txt`,A.append(F,v);const R=document.createElement("div");R.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const E=document.createElement("input");E.type="checkbox",E.id="convertMidTempoFix",E.style.cursor="pointer";const S=document.createElement("label");S.htmlFor="convertMidTempoFix",S.textContent="중간템포버그수정",S.style.cssText=`
            color: #666;
            font-size: 12px;
        `;let z=E.checked;E.addEventListener("change",()=>{const a=E.checked;!z&&a?re():z&&!a&&P(),z=a}),R.append(E,S);const h=document.createElement("textarea");h.style.cssText=`
            width: 100%;
            min-height: 200px;
            box-sizing: border-box;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            word-break: break-all;
            overflow-y: auto;
        `,h.readOnly=!0;const G=document.createElement("div");G.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 8px;
   `,de();const $=H({label:w[M].convertCopy,variant:"primary",attrs:{"data-i18n":"convertCopy"}}),K=H({label:w[M].convertSaveTxt,variant:"secondary",attrs:{"data-i18n":"convertSaveTxt"}}),J=H({label:w[M].modalClose,variant:"secondary",attrs:{"data-i18n":"modalClose"}});G.append($,K,J),j.append(I,A,R,h,G),C.appendChild(j),document.body.appendChild(C);function N(){window.removeEventListener("keydown",Q,!0),C.parentNode&&document.body.removeChild(C)}function Q(a){a.key==="Escape"&&N()}I.innerHTML="";let V=[];const X=new Map,U=()=>{let c=h.value||"";c.startsWith("MML@")&&(c=c.slice(4)),c.endsWith(";")&&(c=c.slice(0,-1));const l=c.length>0?c.split(",").map(r=>r.trim()):[];for(const r of B.tracks){const m=X.get(r.id);if(!m)continue;const g=V.indexOf(r.id),b=g>=0&&g<l.length?l[g].length:0;m.textContent=`${r.name} (${b}${w[M].charUnit})`}};[...B.tracks].slice().sort((a,c)=>a.order-c.order).forEach(a=>{const c=document.createElement("div");c.style.cssText=`
            display: flex;
            align-items: center;
            margin-bottom: 8px;
         `;const l=document.createElement("input");l.type="checkbox",l.id=`track-${a.id}`,l.value=String(a.id),l.checked=a.notes.length>0,l.disabled=a.notes.length===0,l.style.margin="0 4px 0 0",l.style.cursor="pointer";const r=document.createElement("label");r.htmlFor=`track-${a.id}`,X.set(a.id,r),r.textContent=`${a.name}`,r.style.cssText=`
                margin-left: 8px;
                ${a.notes.length===0?"color: #aaa;":""}
            `,l.addEventListener("change",()=>{P(),U()}),c.append(l,r),I.appendChild(c)});function se(a,c){const l=a.slice().sort((m,g)=>m.order-g.order),r=[];for(const m of l){if(!(Array.isArray(m.notes)&&m.notes.length>0))continue;const b=B.tempoAnchors;let k=pe(m.notes??[],b??[],c)||me(m.notes??[])||ue(m.notes??"")||"";k&&(k=fe(k,!0)||k),k&&r.push(k)}return`MML@${r.join(",")};`}function P(){const a=[];I.querySelectorAll('input[type="checkbox"]').forEach(r=>{r.checked&&a.push(parseInt(r.value))});const c=B.tracks.filter(r=>a.includes(r.id));V=c.slice().sort((r,m)=>r.order-m.order).map(r=>r.id);const l=se(c,B.bpm);h.value=l,U()}function re(){let a=h.value;if(!a.startsWith("MML@")||!a.endsWith(";"))return;const c=a.slice(4,-1),l=c.length>0?c.split(",").map(r=>r.trim()).filter(r=>r.length>0):[];if(l.length>=2){const r=()=>({c:0,d:0,e:0,f:0,g:0,a:0,b:0,r:0,n:0}),m=e=>e.split(/t\s*[1-9]\d*/i).filter(Boolean),g=e=>{const n=r(),i=e.toLowerCase();for(let t=0;t<i.length;t++)switch(i[t]){case"c":n.c++;break;case"d":n.d++;break;case"e":n.e++;break;case"f":n.f++;break;case"g":n.g++;break;case"a":n.a++;break;case"b":n.b++;break;case"r":n.r++;break;case"n":n.n++;break}return n};l.map(e=>{const n=m(e).map(g),i=n.reduce((t,o)=>({c:t.c+o.c,d:t.d+o.d,e:t.e+o.e,f:t.f+o.f,g:t.g+o.g,a:t.a+o.a,b:t.b+o.b,r:t.r+o.r,n:t.n+o.n}),r());return{perSegment:n,total:i}});const b=l.map(e=>m(e)),k=e=>{const n=e.split(/(t\s*[1-9]\d*)/ig),i=[];let t=[];for(let o=0;o<n.length;o++){const u=n[o];o%2===1?u&&t.push(u):u&&u.length>0&&(i.push(t),t=[])}return{tempoBefore:i,trailing:t}},Y=l.map(e=>k(e)),Z=b.length>0?Math.min(...b.map(e=>e.length)):0,O=Array.from({length:Z},(e,n)=>b.map(i=>i[n])),ee=O.map(e=>e.map(n=>g(n))),te=e=>e.c+e.d+e.e+e.f+e.g+e.a+e.b+e.r+e.n;O.map((e,n)=>e.map((i,t)=>[i,te(ee[n][t])]));const D=(e,n,i)=>{const t=[];let o=n.den;t.push(o);for(let s=0;s<n.dots;s++)o*=2,t.push(o);const u=Math.max(1,1+i);for(;t.length<u;){let s=0;for(let x=1;x<t.length;x++)t[x]<t[s]&&(s=x);const y=t[s];t.splice(s,1,y*2,y*2)}let p="",f=-1;const d=s=>{f!==s&&(p+=`l${s}`,f=s)};if(e==="r"){for(let s=0;s<t.length;s++)d(t[s]),p+="r";return p}else{for(let s=0;s<t.length;s++)d(t[s]),s>0&&(p+="&"),p+=e;return p}},W=e=>{let n=null;const i=/l\s*(\d+)(\.*)/ig;let t;for(;t=i.exec(e);)n={den:parseInt(t[1],10),dots:(t[2]||"").length};return n},_=e=>`l${e.den}${e.dots>0?".".repeat(e.dots):""}`,q=e=>/\bl\s*\d+/i.test(e),ae=(e,n,i)=>{if(n<=0)return e;const o=/r(\d+)/i.exec(e);if(o){const s=parseInt(o[1],10),y=e.slice(0,o.index),x=W(y)??i;let T=D("r",{den:s,dots:0},n);const L=e.slice(o.index+o[0].length);return x&&!q(L)&&(T+=_(x)),y+T+L}const p=/r(?!\d)/i.exec(e);if(p){const s=e.slice(0,p.index),y=W(s)??i??{den:4,dots:0},x=W(s)??i;let T=D("r",y,n);const L=e.slice(p.index+1);return x&&!q(L)&&(T+=_(x)),s+T+L}const d=/([cdefgabn])(\d+)/i.exec(e);if(d){const s=d[1],y=parseInt(d[2],10),x=e.slice(0,d.index),T=W(x)??i;let L=D(s,{den:y,dots:0},n);const ne=e.slice(d.index+d[0].length);return T&&!q(ne)&&(L+=_(T)),x+L+ne}return e},ce=b.map((e,n)=>{const i=[];let t=null;const o=/l\s*(\d+)(\.*)/ig;for(let u=0;u<e.length;u++){const p=(Y[n]?.tempoBefore?.[u]||[]).join("");o.lastIndex=0;for(let d;d=o.exec(p);)t={den:parseInt(d[1],10),dots:(d[2]||"").length};i[u]=t;const f=e[u]||"";o.lastIndex=0;for(let d;d=o.exec(f);)t={den:parseInt(d[1],10),dots:(d[2]||"").length}}return i}),ie=O.map((e,n)=>{if(n===O.length-1)return e.slice();const t=ee[n].map(te),o=Math.max(...t);return e.map((u,p)=>{const f=t[p],d=o-f,s=ce[p]?.[n]??null;return ae(u,d,s)})}),le=l.map((e,n)=>{const i=ie.map(f=>f[n]||""),t=(b[n]||[]).slice(Z),{tempoBefore:o,trailing:u}=Y[n],p=[];for(let f=0;f<i.length;f++){const d=o[f]||[];d.length&&p.push(d.join("")),p.push(i[f])}for(let f=0;f<t.length;f++){const d=i.length+f,s=o[d]||[];s.length&&p.push(s.join("")),p.push(t[f])}return u&&u.length&&p.push(u.join("")),p.join("")});h.value=`MML@${le.join(",")};`,U()}}P(),J.onclick=N,C.onclick=a=>{a.target===C&&N()},$.onclick=()=>{navigator.clipboard.writeText(h.value),$.textContent=w[M].copied,setTimeout(()=>{$.textContent=w[M].convertCopy},2e3)},K.onclick=()=>{try{const a=new Blob([h.value],{type:"text/plain;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(a);const l=(v.value||"").trim(),r=`mml-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;let m=l.length>0?l:r;m=m.replace(/[\\\/:*?"<>|]/g,"_"),/\.txt$/i.test(m)||(m+=".txt"),c.download=m,document.body.appendChild(c),c.click(),setTimeout(()=>{URL.revokeObjectURL(c.href),c.parentNode&&c.parentNode.removeChild(c)},0)}catch{}},window.addEventListener("keydown",Q,!0)}export{be as showConvertModal};
