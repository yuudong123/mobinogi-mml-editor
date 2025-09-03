import{e as re,c as D}from"./button-WIurEURm.js";import{t as T,c as L}from"./languages-Cgt_gsPd.js";import{notesToMMLWithTempos as ae,notesToMML as ce,notesToMMLRaw as ie,newOptimizeBody as le}from"./converter-Bxff0mca.js";function fe(C){const w=document.createElement("div");w.style.cssText=`
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
   `;const O=document.createElement("div");O.style.cssText=`
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
   `;const E=document.createElement("div");E.style.cssText=`
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 8px;
      margin-bottom: 16px;
   `;const W=document.createElement("div");W.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const $=document.createElement("label");$.setAttribute("for","convertFilenameInput"),$.textContent=T[L].convertFilenameLabel||"파일명",$.setAttribute("data-i18n","convertFilenameLabel"),$.style.cssText=`
            min-width: 72px;
            color: #666;
            font-size: 12px;
        `;const y=document.createElement("input");y.type="text",y.id="convertFilenameInput",y.placeholder=T[L].convertFilenamePlaceholder||"예: my-song.txt",y.setAttribute("data-i18n-placeholder","convertFilenamePlaceholder"),y.style.cssText=`
            flex: 1 1 auto;
            padding: 6px 8px;
            border: 1px solid #cfcfcf;
            border-radius: 6px;
            font-size: 12px;
        `;const Y=new Date().toISOString().replace(/[:.]/g,"-");y.value=`mml-${Y}.txt`,W.append($,y);const j=document.createElement("div");j.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const M=document.createElement("input");M.type="checkbox",M.id="convertMidTempoFix",M.style.cursor="pointer";const B=document.createElement("label");B.htmlFor="convertMidTempoFix",B.textContent="중간템포버그수정",B.style.cssText=`
            color: #666;
            font-size: 12px;
        `;let A=M.checked;M.addEventListener("change",()=>{const s=M.checked;!A&&s?ee():A&&!s&&N(),A=s}),j.append(M,B);const h=document.createElement("textarea");h.style.cssText=`
            width: 100%;
            min-height: 200px;
            box-sizing: border-box;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            word-break: break-all;
            overflow-y: auto;
        `,h.readOnly=!0;const R=document.createElement("div");R.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 8px;
   `,re();const F=D({label:T[L].convertCopy,variant:"primary",attrs:{"data-i18n":"convertCopy"}}),_=D({label:T[L].convertSaveTxt,variant:"secondary",attrs:{"data-i18n":"convertSaveTxt"}}),K=D({label:T[L].modalClose,variant:"secondary",attrs:{"data-i18n":"modalClose"}});R.append(F,_,K),O.append(E,W,j,h,R),w.appendChild(O),document.body.appendChild(w);function z(){window.removeEventListener("keydown",q,!0),w.parentNode&&document.body.removeChild(w)}function q(s){s.key==="Escape"&&z()}E.innerHTML="";let H=[];const J=new Map,G=()=>{let r=h.value||"";r.startsWith("MML@")&&(r=r.slice(4)),r.endsWith(";")&&(r=r.slice(0,-1));const c=r.length>0?r.split(",").map(o=>o.trim()):[];for(const o of C.tracks){const p=J.get(o.id);if(!p)continue;const g=H.indexOf(o.id),v=g>=0&&g<c.length?c[g].length:0;p.textContent=`${o.name} (${v}${T[L].charUnit})`}};[...C.tracks].slice().sort((s,r)=>s.order-r.order).forEach(s=>{const r=document.createElement("div");r.style.cssText=`
            display: flex;
            align-items: center;
            margin-bottom: 8px;
         `;const c=document.createElement("input");c.type="checkbox",c.id=`track-${s.id}`,c.value=String(s.id),c.checked=s.notes.length>0,c.disabled=s.notes.length===0,c.style.margin="0 4px 0 0",c.style.cursor="pointer";const o=document.createElement("label");o.htmlFor=`track-${s.id}`,J.set(s.id,o),o.textContent=`${s.name}`,o.style.cssText=`
                margin-left: 8px;
                ${s.notes.length===0?"color: #aaa;":""}
            `,c.addEventListener("change",()=>{N(),G()}),r.append(c,o),E.appendChild(r)});function Z(s,r){const c=s.slice().sort((p,g)=>p.order-g.order),o=[];for(const p of c){if(!(Array.isArray(p.notes)&&p.notes.length>0))continue;const v=C.tempoAnchors;let k=ae(p.notes??[],v??[],r)||ce(p.notes??[])||ie(p.notes??"")||"";k&&(k=le(k,!0)||k),k&&o.push(k)}return`MML@${o.join(",")};`}function N(){const s=[];E.querySelectorAll('input[type="checkbox"]').forEach(o=>{o.checked&&s.push(parseInt(o.value))});const r=C.tracks.filter(o=>s.includes(o.id));H=r.slice().sort((o,p)=>o.order-p.order).map(o=>o.id);const c=Z(r,C.bpm);h.value=c,G()}function ee(){let s=h.value;if(!s.startsWith("MML@")||!s.endsWith(";"))return;const r=s.slice(4,-1),c=r.length>0?r.split(",").map(o=>o.trim()).filter(o=>o.length>0):[];if(c.length>=2){const o=()=>({c:0,d:0,e:0,f:0,g:0,a:0,b:0,r:0,n:0}),p=e=>e.split(/t\s*[1-9]\d*/i).filter(Boolean),g=e=>{const t=o(),d=e.toLowerCase();for(let n=0;n<d.length;n++)switch(d[n]){case"c":t.c++;break;case"d":t.d++;break;case"e":t.e++;break;case"f":t.f++;break;case"g":t.g++;break;case"a":t.a++;break;case"b":t.b++;break;case"r":t.r++;break;case"n":t.n++;break}return t};c.map(e=>{const t=p(e).map(g),d=t.reduce((n,i)=>({c:n.c+i.c,d:n.d+i.d,e:n.e+i.e,f:n.f+i.f,g:n.g+i.g,a:n.a+i.a,b:n.b+i.b,r:n.r+i.r,n:n.n+i.n}),o());return{perSegment:t,total:d}});const v=c.map(e=>p(e)),k=e=>{const t=e.split(/(t\s*[1-9]\d*)/ig),d=[];let n=[];for(let i=0;i<t.length;i++){const m=t[i];i%2===1?m&&n.push(m):m&&m.length>0&&(d.push(n),n=[])}return{tempoBefore:d,trailing:n}},te=c.map(e=>k(e)),Q=v.length>0?Math.min(...v.map(e=>e.length)):0,I=Array.from({length:Q},(e,t)=>v.map(d=>d[t])),V=I.map(e=>e.map(t=>g(t))),X=e=>e.c+e.d+e.e+e.f+e.g+e.a+e.b+e.r+e.n;I.map((e,t)=>e.map((d,n)=>[d,X(V[t][n])]));const P=(e,t,d)=>{if(d<=0)return e==="r"?`r${t}`:`${e}${t}`;const i=1<<Math.floor(Math.log2(d+1)),m=t*i,x=d-(i-1),a=[];for(let l=0;l<i;l++)l<Math.min(x,i)?a.push(m*2,m*2):a.push(m);let u="",f=-1;const b=l=>{f!==l&&(u+=`l${l}`,f=l)};if(e==="r"){for(let l=0;l<a.length;l++)b(a[l]),u+="r";return u}else{for(let l=0;l<a.length;l++)b(a[l]),l>0&&(u+="&"),u+=e;return u}},U=e=>{let t=null;const d=/l\s*(\d+)/ig;let n;for(;n=d.exec(e);)t=parseInt(n[1],10);return t},ne=(e,t)=>{if(t<=0)return e;const n=/r(\d+)/i.exec(e);if(n){const u=parseInt(n[1],10),f=e.slice(0,n.index),b=U(f);let l=P("r",u,t);return l+=`l${b??4}`,f+l+e.slice(n.index+n[0].length)}const m=/r(?!\d)/i.exec(e);if(m){const f=e.slice(0,m.index),b=U(f);let l=P("r",8,t);return l+=`l${b??4}`,f+l+e.slice(m.index+1)}const a=/([cdefgabn])(\d+)/i.exec(e);if(a){const u=a[1],f=parseInt(a[2],10),b=e.slice(0,a.index),l=U(b);let S=P(u,f,t);return S+=`l${l??4}`,b+S+e.slice(a.index+a[0].length)}return e},oe=I.map((e,t)=>{if(t===I.length-1)return e.slice();const n=V[t].map(X),i=Math.max(...n);return e.map((m,x)=>{const a=n[x],u=i-a;return ne(m,u)})}),se=c.map((e,t)=>{const d=oe.map(a=>a[t]||""),n=(v[t]||[]).slice(Q),{tempoBefore:i,trailing:m}=te[t],x=[];for(let a=0;a<d.length;a++){const u=i[a]||[];u.length&&x.push(u.join("")),x.push(d[a])}for(let a=0;a<n.length;a++){const u=d.length+a,f=i[u]||[];f.length&&x.push(f.join("")),x.push(n[a])}return m&&m.length&&x.push(m.join("")),x.join("")});h.value=`MML@${se.join(",")};`,G()}}N(),K.onclick=z,w.onclick=s=>{s.target===w&&z()},F.onclick=()=>{navigator.clipboard.writeText(h.value),F.textContent=T[L].copied,setTimeout(()=>{F.textContent=T[L].convertCopy},2e3)},_.onclick=()=>{try{const s=new Blob([h.value],{type:"text/plain;charset=utf-8"}),r=document.createElement("a");r.href=URL.createObjectURL(s);const c=(y.value||"").trim(),o=`mml-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;let p=c.length>0?c:o;p=p.replace(/[\\\/:*?"<>|]/g,"_"),/\.txt$/i.test(p)||(p+=".txt"),r.download=p,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.parentNode&&r.parentNode.removeChild(r)},0)}catch{}},window.addEventListener("keydown",q,!0)}export{fe as showConvertModal};
