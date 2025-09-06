import{e as de,c as K}from"./button-WIurEURm.js";import{t as w,c as M}from"./languages-Cgt_gsPd.js";import{notesToMMLWithTempos as pe,notesToMML as me,notesToMMLRaw as ue,newOptimizeBody as fe}from"./converter-Bxff0mca.js";function be(I){const C=document.createElement("div");C.style.cssText=`
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
   `;const A=document.createElement("div");A.style.cssText=`
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
   `;const F=document.createElement("div");F.style.cssText=`
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 8px;
      margin-bottom: 16px;
   `;const R=document.createElement("div");R.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const S=document.createElement("label");S.setAttribute("for","convertFilenameInput"),S.textContent=w[M].convertFilenameLabel||"파일명",S.setAttribute("data-i18n","convertFilenameLabel"),S.style.cssText=`
            min-width: 72px;
            color: #666;
            font-size: 12px;
        `;const T=document.createElement("input");T.type="text",T.id="convertFilenameInput",T.placeholder=w[M].convertFilenamePlaceholder||"예: my-song.txt",T.setAttribute("data-i18n-placeholder","convertFilenamePlaceholder"),T.style.cssText=`
            flex: 1 1 auto;
            padding: 6px 8px;
            border: 1px solid #cfcfcf;
            border-radius: 6px;
            font-size: 12px;
        `;const oe=new Date().toISOString().replace(/[:.]/g,"-");T.value=`mml-${oe}.txt`,R.append(S,T);const z=document.createElement("div");z.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const E=document.createElement("input");E.type="checkbox",E.id="convertMidTempoFix",E.style.cursor="pointer";const $=document.createElement("label");$.htmlFor="convertMidTempoFix",$.textContent="중간템포버그수정",$.style.cssText=`
            color: #666;
            font-size: 12px;
        `;let G=E.checked;E.addEventListener("change",()=>{const a=E.checked;!G&&a?re():G&&!a&&D(),G=a}),z.append(E,$);const b=document.createElement("textarea");b.style.cssText=`
            width: 100%;
            min-height: 200px;
            box-sizing: border-box;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            word-break: break-all;
            overflow-y: auto;
        `,b.readOnly=!0;const N=document.createElement("div");N.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 8px;
   `,de();const O=K({label:w[M].convertCopy,variant:"primary",attrs:{"data-i18n":"convertCopy"}}),J=K({label:w[M].convertSaveTxt,variant:"secondary",attrs:{"data-i18n":"convertSaveTxt"}}),Q=K({label:w[M].modalClose,variant:"secondary",attrs:{"data-i18n":"modalClose"}});N.append(O,J,Q),A.append(F,R,z,b,N),C.appendChild(A),document.body.appendChild(C);function U(){window.removeEventListener("keydown",V,!0),C.parentNode&&document.body.removeChild(C)}function V(a){a.key==="Escape"&&U()}F.innerHTML="";let X=[];const Y=new Map,P=()=>{let c=b.value||"";c.startsWith("MML@")&&(c=c.slice(4)),c.endsWith(";")&&(c=c.slice(0,-1));const l=c.length>0?c.split(",").map(r=>r.trim()):[];for(const r of I.tracks){const m=Y.get(r.id);if(!m)continue;const y=X.indexOf(r.id),v=y>=0&&y<l.length?l[y].length:0;m.textContent=`${r.name} (${v}${w[M].charUnit})`}};[...I.tracks].slice().sort((a,c)=>a.order-c.order).forEach(a=>{const c=document.createElement("div");c.style.cssText=`
            display: flex;
            align-items: center;
            margin-bottom: 8px;
         `;const l=document.createElement("input");l.type="checkbox",l.id=`track-${a.id}`,l.value=String(a.id),l.checked=a.notes.length>0,l.disabled=a.notes.length===0,l.style.margin="0 4px 0 0",l.style.cursor="pointer";const r=document.createElement("label");r.htmlFor=`track-${a.id}`,Y.set(a.id,r),r.textContent=`${a.name}`,r.style.cssText=`
                margin-left: 8px;
                ${a.notes.length===0?"color: #aaa;":""}
            `,l.addEventListener("change",()=>{D(),P()}),c.append(l,r),F.appendChild(c)});function se(a,c){const l=a.slice().sort((m,y)=>m.order-y.order),r=[];for(const m of l){if(!(Array.isArray(m.notes)&&m.notes.length>0))continue;const v=I.tempoAnchors;let L=pe(m.notes??[],v??[],c)||me(m.notes??[])||ue(m.notes??"")||"";L&&(L=fe(L,!0)||L),L&&r.push(L)}return`MML@${r.join(",")};`}function D(){const a=[];F.querySelectorAll('input[type="checkbox"]').forEach(r=>{r.checked&&a.push(parseInt(r.value))});const c=I.tracks.filter(r=>a.includes(r.id));X=c.slice().sort((r,m)=>r.order-m.order).map(r=>r.id);const l=se(c,I.bpm);b.value=l,P()}function re(){let a=b.value;if(!a.startsWith("MML@")||!a.endsWith(";"))return;const c=a.slice(4,-1),l=c.length>0?c.split(",").map(r=>r.trim()).filter(r=>r.length>0):[];if(l.length>=2){const r=()=>({c:0,d:0,e:0,f:0,g:0,a:0,b:0,r:0,n:0}),m=e=>e.split(/t\s*[1-9]\d*/i).filter(Boolean),y=e=>{const n=r(),i=e.toLowerCase();for(let t=0;t<i.length;t++)switch(i[t]){case"c":n.c++;break;case"d":n.d++;break;case"e":n.e++;break;case"f":n.f++;break;case"g":n.g++;break;case"a":n.a++;break;case"b":n.b++;break;case"r":n.r++;break;case"n":n.n++;break}return n};l.map(e=>{const n=m(e).map(y),i=n.reduce((t,o)=>({c:t.c+o.c,d:t.d+o.d,e:t.e+o.e,f:t.f+o.f,g:t.g+o.g,a:t.a+o.a,b:t.b+o.b,r:t.r+o.r,n:t.n+o.n}),r());return{perSegment:n,total:i}});const v=l.map(e=>m(e)),L=e=>{const n=e.split(/(t\s*[1-9]\d*)/ig),i=[];let t=[];for(let o=0;o<n.length;o++){const u=n[o];o%2===1?u&&t.push(u):u&&u.length>0&&(i.push(t),t=[])}return{tempoBefore:i,trailing:t}},Z=l.map(e=>L(e)),ee=v.length>0?Math.min(...v.map(e=>e.length)):0,W=Array.from({length:ee},(e,n)=>v.map(i=>i[n])),te=W.map(e=>e.map(n=>y(n))),ne=e=>e.c+e.d+e.e+e.f+e.g+e.a+e.b+e.r+e.n;W.map((e,n)=>e.map((i,t)=>[i,ne(te[n][t])]));const _=(e,n,i)=>{const t=[];let o=n.den;t.push(o);for(let s=0;s<n.dots;s++)o*=2,t.push(o);const u=Math.max(1,1+i);for(;t.length<u;){let s=0;for(let x=1;x<t.length;x++)t[x]<t[s]&&(s=x);const k=t[s];t.splice(s,1,k*2,k*2)}let p="",f=-1;const d=s=>{f!==s&&(p+=`l${s}`,f=s)};if(e==="r"){for(let s=0;s<t.length;s++)d(t[s]),p+="r";return p}else{for(let s=0;s<t.length;s++)d(t[s]),s>0&&(p+="&"),p+=e;return p}},j=e=>{let n=null;const i=/l\s*(\d+)(\.*)/ig;let t;for(;t=i.exec(e);)n={den:parseInt(t[1],10),dots:(t[2]||"").length};return n},q=e=>`l${e.den}${e.dots>0?".".repeat(e.dots):""}`,B=e=>/\bl\s*\d+/i.test(e),ae=(e,n,i)=>{if(n<=0)return e;const o=/r(\d+)/i.exec(e);if(o){const s=parseInt(o[1],10),k=e.slice(0,o.index),x=j(k)??i;let h=_("r",{den:s,dots:0},n);const g=e.slice(o.index+o[0].length);return x&&!B(g)?h+=q(x):!x&&!B(g)&&(h+="l4"),k+h+g}const p=/r(?!\d)/i.exec(e);if(p){const s=e.slice(0,p.index),k=j(s)??i??{den:4,dots:0},x=j(s)??i;let h=_("r",k,n);const g=e.slice(p.index+1);return x&&!B(g)?h+=q(x):!x&&!B(g)&&(h+="l4"),s+h+g}const d=/([cdefgabn])(\d+)/i.exec(e);if(d){const s=d[1],k=parseInt(d[2],10),x=e.slice(0,d.index),h=j(x)??i;let g=_(s,{den:k,dots:0},n);const H=e.slice(d.index+d[0].length);return h&&!B(H)?g+=q(h):!h&&!B(H)&&(g+="l4"),x+g+H}return e},ce=v.map((e,n)=>{const i=[];let t=null;const o=/l\s*(\d+)(\.*)/ig;for(let u=0;u<e.length;u++){const p=(Z[n]?.tempoBefore?.[u]||[]).join("");o.lastIndex=0;for(let d;d=o.exec(p);)t={den:parseInt(d[1],10),dots:(d[2]||"").length};i[u]=t;const f=e[u]||"";o.lastIndex=0;for(let d;d=o.exec(f);)t={den:parseInt(d[1],10),dots:(d[2]||"").length}}return i}),ie=W.map((e,n)=>{if(n===W.length-1)return e.slice();const t=te[n].map(ne),o=Math.max(...t);return e.map((u,p)=>{const f=t[p],d=o-f,s=ce[p]?.[n]??null;return ae(u,d,s)})}),le=l.map((e,n)=>{const i=ie.map(f=>f[n]||""),t=(v[n]||[]).slice(ee),{tempoBefore:o,trailing:u}=Z[n],p=[];for(let f=0;f<i.length;f++){const d=o[f]||[];d.length&&p.push(d.join("")),p.push(i[f])}for(let f=0;f<t.length;f++){const d=i.length+f,s=o[d]||[];s.length&&p.push(s.join("")),p.push(t[f])}return u&&u.length&&p.push(u.join("")),p.join("")});b.value=`MML@${le.join(",")};`,P()}}D(),Q.onclick=U,C.onclick=a=>{a.target===C&&U()},O.onclick=()=>{navigator.clipboard.writeText(b.value),O.textContent=w[M].copied,setTimeout(()=>{O.textContent=w[M].convertCopy},2e3)},J.onclick=()=>{try{const a=new Blob([b.value],{type:"text/plain;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(a);const l=(T.value||"").trim(),r=`mml-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;let m=l.length>0?l:r;m=m.replace(/[\\\/:*?"<>|]/g,"_"),/\.txt$/i.test(m)||(m+=".txt"),c.download=m,document.body.appendChild(c),c.click(),setTimeout(()=>{URL.revokeObjectURL(c.href),c.parentNode&&c.parentNode.removeChild(c)},0)}catch{}},window.addEventListener("keydown",V,!0)}export{be as showConvertModal};
