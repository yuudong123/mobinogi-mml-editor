import{e as xe,c as J}from"./button-WIurEURm.js";import{t as I,c as $}from"./languages-Cgt_gsPd.js";import{notesToMMLWithTempos as ne,notesToMML as Q,notesToMMLRaw as V,newOptimizeBody as he}from"./converter-DVCNpaWl.js";function ve(W){const B=document.createElement("div");B.style.cssText=`
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
   `;const z=document.createElement("div");z.style.cssText=`
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
   `;const S=document.createElement("div");S.style.cssText=`
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 8px;
      margin-bottom: 16px;
   `;const G=document.createElement("div");G.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const D=document.createElement("label");D.setAttribute("for","convertFilenameInput"),D.textContent=I[$].convertFilenameLabel||"파일명",D.setAttribute("data-i18n","convertFilenameLabel"),D.style.cssText=`
            min-width: 72px;
            color: #666;
            font-size: 12px;
        `;const C=document.createElement("input");C.type="text",C.id="convertFilenameInput",C.placeholder=I[$].convertFilenamePlaceholder||"예: my-song.txt",C.setAttribute("data-i18n-placeholder","convertFilenamePlaceholder"),C.style.cssText=`
            flex: 1 1 auto;
            padding: 6px 8px;
            border: 1px solid #cfcfcf;
            border-radius: 6px;
            font-size: 12px;
        `;const oe=new Date().toISOString().replace(/[:.]/g,"-");C.value=`mml-${oe}.txt`,G.append(D,C);const P=document.createElement("div");P.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const F=document.createElement("input");F.type="checkbox",F.id="convertMidTempoFix",F.style.cursor="pointer";const j=document.createElement("label");j.htmlFor="convertMidTempoFix",j.textContent="중간템포버그수정",j.style.cssText=`
            color: #666;
            font-size: 12px;
        `;let U=F.checked;F.addEventListener("change",()=>{const r=F.checked;!U&&r?(R(),re()):R(),U=r}),P.append(F,j);const w=document.createElement("textarea");w.style.cssText=`
            width: 100%;
            min-height: 200px;
            box-sizing: border-box;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            word-break: break-all;
            overflow-y: auto;
        `,w.readOnly=!1;const _=document.createElement("div");_.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 8px;
   `,xe();const A=J({label:I[$].convertCopy,variant:"primary",attrs:{"data-i18n":"convertCopy"}}),X=J({label:I[$].convertSaveTxt,variant:"secondary",attrs:{"data-i18n":"convertSaveTxt"}}),Y=J({label:I[$].modalClose,variant:"secondary",attrs:{"data-i18n":"modalClose"}});_.append(A,X,Y),z.append(S,G,P,w,_),B.appendChild(z),document.body.appendChild(B);function H(){window.removeEventListener("keydown",Z,!0),B.parentNode&&document.body.removeChild(B)}function Z(r){r.key==="Escape"&&H()}S.innerHTML="";let ee=[];const te=new Map,q=()=>{let s=w.value||"";s.startsWith("MML@")&&(s=s.slice(4)),s.endsWith(";")&&(s=s.slice(0,-1));const p=s.length>0?s.split(",").map(c=>c.trim()):[];for(const c of W.tracks){const y=te.get(c.id);if(!y)continue;const E=ee.indexOf(c.id),x=E>=0&&E<p.length?p[E].length:0;y.textContent=`${c.name} (${x}${I[$].charUnit})`}};[...W.tracks].slice().sort((r,s)=>r.order-s.order).forEach(r=>{const s=document.createElement("div");s.style.cssText=`
            display: flex;
            align-items: center;
            margin-bottom: 8px;
         `;const p=document.createElement("input");p.type="checkbox",p.id=`track-${r.id}`,p.value=String(r.id),p.checked=r.notes.length>0,p.disabled=r.notes.length===0,p.style.margin="0 4px 0 0",p.style.cursor="pointer";const c=document.createElement("label");c.htmlFor=`track-${r.id}`,te.set(r.id,c),c.textContent=`${r.name}`,c.style.cssText=`
                margin-left: 8px;
                ${r.notes.length===0?"color: #aaa;":""}
            `,p.addEventListener("change",()=>{R(),q()}),s.append(p,c),S.appendChild(s)});function se(r,s){const p=r.slice().sort((x,N)=>x.order-N.order),c=[],y=document.getElementById("convertMidTempoFix")?.checked===!0;let E=!1;for(const x of p){if(!(Array.isArray(x.notes)&&x.notes.length>0))continue;const O=W.tempoAnchors;let L;y?L=ne(x.notes??[],O??[],s)||Q(x.notes??[])||V(x.notes??"")||"":E?L=Q(x.notes??[])||V(x.notes??"")||"":(L=ne(x.notes??[],O??[],s)||Q(x.notes??[])||V(x.notes??"")||"",E=!0),L&&(L=he(L,!0,y)||L),L&&c.push(L)}return`MML@${c.join(",")};`}function re(){let r=w.value;if(!r.startsWith("MML@")||!r.endsWith(";"))return;const s=r.slice(4,-1),p=s.length>0?s.split(",").map(c=>c.trim()).filter(c=>c.length>0):[];if(p.length>=2){const c=()=>({c:0,d:0,e:0,f:0,g:0,a:0,b:0,r:0,n:0}),y=t=>t.split(/t\s*[1-9]\d*/i).filter(Boolean),E=t=>{const n=c(),u=t.toLowerCase();for(let o=0;o<u.length;o++)switch(u[o]){case"c":n.c++;break;case"d":n.d++;break;case"e":n.e++;break;case"f":n.f++;break;case"g":n.g++;break;case"a":n.a++;break;case"b":n.b++;break;case"r":n.r++;break;case"n":n.n++;break}return n},x=p.map(t=>y(t)),N=t=>{const n=t.split(/(t\s*[1-9]\d*)/ig),u=[];let o=[];for(let l=0;l<n.length;l++){const a=n[l];l%2===1?a&&o.push(a):a&&a.length>0&&(u.push(o),o=[])}return{tempoBefore:u,trailing:o}},O=p.map(t=>N(t)),L=x.length>0?Math.min(...x.map(t=>t.length)):0,K=Array.from({length:L},(t,n)=>x.map(u=>u[n])),ce=K.map(t=>t.map(n=>E(n))),ie=t=>t.c+t.d+t.e+t.f+t.g+t.a+t.b+t.r+t.n,le=t=>`l${t.den}${t.dots>0?".".repeat(t.dots):""}`,ae=t=>{let n=null;const u=/l\s*(\d+)(\.*)/ig;let o;for(;o=u.exec(t);)n={den:parseInt(o[1],10),dots:(o[2]||"").length};return n},de=(t,n,u)=>{const o=[];let l=n.den;o.push(l);for(let e=0;e<n.dots;e++)l*=2,o.push(l);const a=Math.max(1,1+u);for(;o.length<a;){let e=0;for(let d=1;d<o.length;d++)o[d]<o[e]&&(e=d);const i=o[e];o.splice(e,1,i*2,i*2)}let m="",f=-1;const g=e=>{f!==e&&(m+=`l${e}`,f=e)};if(t==="r"){for(let e=0;e<o.length;e++)g(o[e]),m+="r";return m}for(let e=0;e<o.length;e++)g(o[e]),e>0&&(m+="&"),m+=t;return m},pe=(t,n,u)=>{if(n<=0)return t;const o={rWithLen:/r(\d+)(?!\.)/i,rWithLenDot:/r(\d+)\./i,bareRDot:/r\./i,bareR:/r(?![0-9\.])/i,noteWithLen:/([cdefgabn])(\d+)(?!\.)/i,noteWithLenDot:/([cdefgabn])(\d+)\./i,bareNoteDot:/([cdefgabn])\./i},l=e=>ae(e)??u,a=(e,i,d)=>i?e+le(i):e+"l4",m=(e,i,d,b)=>de(b?"r":e,i,d),f=e=>({base:{den:e,dots:0},tail:{den:e*2,dots:0}}),g=[()=>{const e=o.rWithLen.exec(t);if(!e)return null;const i=parseInt(e[1],10),d=t.slice(0,e.index),b=t.slice(e.index+e[0].length),v=l(d);let h=m("r",{den:i,dots:0},n,!0);return h=a(h,v),d+h+b},()=>{const e=o.rWithLenDot.exec(t);if(!e)return null;const i=parseInt(e[1],10),d=t.slice(0,e.index),b=t.slice(e.index+e[0].length),v=l(d),h=f(i);let T=Math.max(0,n-1),k=m("r",h.base,T,!0),M="";return M+=`l${h.tail.den}r`,k+=M,k=a(k,v),d+k+b},()=>{const e=o.bareRDot.exec(t);if(!e)return null;const i=t.slice(0,e.index),d=t.slice(e.index+e[0].length),b=l(i)??{den:4},v=l(i),h=f(b.den);let T=Math.max(0,n-1),k=m("r",h.base,T,!0);return k+=`l${h.tail.den}r`,k=a(k,v),i+k+d},()=>{const e=o.bareR.exec(t);if(!e)return null;const i=t.slice(0,e.index),d=t.slice(e.index+e[0].length),b=l(i)??{den:4,dots:0},v=l(i);let h=m("r",b,n,!0);return h=a(h,v),i+h+d},()=>{const e=o.noteWithLen.exec(t);if(!e)return null;const i=e[1],d=parseInt(e[2],10),b=t.slice(0,e.index),v=t.slice(e.index+e[0].length),h=l(b);let T=m(i,{den:d,dots:0},n,!1);return T=a(T,h),b+T+v},()=>{const e=o.noteWithLenDot.exec(t);if(!e)return null;const i=e[1],d=parseInt(e[2],10),b=t.slice(0,e.index),v=t.slice(e.index+e[0].length),h=l(b),T=f(d);let k=Math.max(0,n-1),M=m(i,T.base,k,!1);return M+=`&l${T.tail.den}${i}`,M=a(M,h),b+M+v},()=>{const e=o.bareNoteDot.exec(t);if(!e)return null;const i=e[1],d=t.slice(0,e.index),b=t.slice(e.index+e[0].length),v=l(d)??{den:4},h=l(d),T=f(v.den);let k=Math.max(0,n-1),M=m(i,T.base,k,!1);return M+=`&l${T.tail.den}${i}`,M=a(M,h),d+M+b}];for(const e of g){const i=e();if(i!==null)return i}return t},ue=x.map((t,n)=>{const u=[];let o=null;const l=/l\s*(\d+)(\.*)/ig;for(let a=0;a<t.length;a++){const m=(O[n]?.tempoBefore?.[a]||[]).join("");l.lastIndex=0;for(let g;g=l.exec(m);)o={den:parseInt(g[1],10),dots:(g[2]||"").length};u[a]=o;const f=t[a]||"";l.lastIndex=0;for(let g;g=l.exec(f);)o={den:parseInt(g[1],10),dots:(g[2]||"").length}}return u}),me=K.map((t,n)=>{if(n===K.length-1)return t.slice();const u=ce[n].map(ie),o=Math.max(...u);return t.map((l,a)=>pe(l,o-u[a],ue[a]?.[n]??null))}),fe=p.map((t,n)=>{const u=me.map(f=>f[n]||""),o=(x[n]||[]).slice(L),{tempoBefore:l,trailing:a}=O[n],m=[];for(let f=0;f<u.length;f++){const g=l[f]||[];g.length&&m.push(g.join("")),m.push(u[f])}for(let f=0;f<o.length;f++){const g=u.length+f,e=l[g]||[];e.length&&m.push(e.join("")),m.push(o[f])}return a&&a.length&&m.push(a.join("")),m.join("")});w.value=`MML@${fe.join(",")};`,q()}}function R(){const r=[];S.querySelectorAll('input[type="checkbox"]').forEach(c=>{c.checked&&r.push(parseInt(c.value))});const s=W.tracks.filter(c=>r.includes(c.id));ee=s.slice().sort((c,y)=>c.order-y.order).map(c=>c.id);const p=se(s,W.bpm);w.value=p,q()}R(),Y.onclick=H,B.onclick=r=>{r.target===B&&H()},A.onclick=()=>{navigator.clipboard.writeText(w.value),A.textContent=I[$].copied,setTimeout(()=>{A.textContent=I[$].convertCopy},2e3)},X.onclick=()=>{try{const r=new Blob([w.value],{type:"text/plain;charset=utf-8"}),s=document.createElement("a");s.href=URL.createObjectURL(r);const p=(C.value||"").trim(),c=`mml-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;let y=p.length>0?p:c;y=y.replace(/[\\\/:*?"<>|]/g,"_"),/\.txt$/i.test(y)||(y+=".txt"),s.download=y,document.body.appendChild(s),s.click(),setTimeout(()=>{URL.revokeObjectURL(s.href),s.parentNode&&s.parentNode.removeChild(s)},0)}catch{}},window.addEventListener("keydown",Z,!0)}export{ve as showConvertModal};
