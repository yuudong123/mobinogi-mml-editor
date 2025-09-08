import{e as S,c as v}from"./button-WIurEURm.js";import{t as s,c as i}from"./languages-B3gKcd-W.js";import{notesToMML as B,notesToMMLRaw as F,newOptimizeBody as I}from"./converter-ClmyNRW0.js";function N(x){const l=document.createElement("div");l.style.cssText=`
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
   `;const f=document.createElement("div");f.style.cssText=`
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
   `;const p=document.createElement("div");p.style.cssText=`
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 8px;
      margin-bottom: 16px;
   `;const h=document.createElement("div");h.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const m=document.createElement("label");m.setAttribute("for","convertFilenameInput"),m.textContent=s[i].convertFilenameLabel||"파일명",m.setAttribute("data-i18n","convertFilenameLabel"),m.style.cssText=`
            min-width: 72px;
            color: #666;
            font-size: 12px;
        `;const r=document.createElement("input");r.type="text",r.id="convertFilenameInput",r.placeholder=s[i].convertFilenamePlaceholder||"예: my-song.txt",r.setAttribute("data-i18n-placeholder","convertFilenamePlaceholder"),r.style.cssText=`
            flex: 1 1 auto;
            padding: 6px 8px;
            border: 1px solid #cfcfcf;
            border-radius: 6px;
            font-size: 12px;
        `;const M=new Date().toISOString().replace(/[:.]/g,"-");r.value=`mml-${M}.txt`,h.append(m,r);const d=document.createElement("textarea");d.style.cssText=`
            width: 100%;
            min-height: 200px;
            box-sizing: border-box;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            word-break: break-all;
            overflow-y: auto;
        `,d.readOnly=!1;const y=document.createElement("div");y.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 8px;
   `,S();const u=v({label:s[i].convertCopy,variant:"primary",attrs:{"data-i18n":"convertCopy"}}),g=v({label:s[i].convertSaveTxt,variant:"secondary",attrs:{"data-i18n":"convertSaveTxt"}}),w=v({label:s[i].modalClose,variant:"secondary",attrs:{"data-i18n":"modalClose"}});y.append(u,g,w),f.append(p,h,y,d),l.appendChild(f),document.body.appendChild(l);function b(){window.removeEventListener("keydown",k,!0),l.parentNode&&document.body.removeChild(l)}function k(n){n.key==="Escape"&&b()}p.innerHTML="";let T=[];const C=new Map,L=()=>{let t=d.value||"";t.startsWith("MML@")&&(t=t.slice(4)),t.endsWith(";")&&(t=t.slice(0,-1));const o=t.length>0?t.split(",").map(e=>e.trim()):[];for(const e of x.tracks){const a=C.get(e.id);if(!a)continue;const c=T.indexOf(e.id),O=c>=0&&c<o.length?o[c].length:0;a.textContent=`${e.name} (${O}${s[i].charUnit})`}};[...x.tracks].slice().sort((n,t)=>n.order-t.order).forEach(n=>{const t=document.createElement("div");t.style.cssText=`
            display: flex;
            align-items: center;
            margin-bottom: 8px;
         `;const o=document.createElement("input");o.type="checkbox",o.id=`track-${n.id}`,o.value=String(n.id),o.checked=n.notes.length>0,o.disabled=n.notes.length===0,o.style.margin="0 4px 0 0",o.style.cursor="pointer";const e=document.createElement("label");e.htmlFor=`track-${n.id}`,C.set(n.id,e),e.textContent=`${n.name}`,e.style.cssText=`
                margin-left: 8px;
                ${n.notes.length===0?"color: #aaa;":""}
            `,o.addEventListener("change",()=>{E(),L()}),t.append(o,e),p.appendChild(t)});function $(n){const t=n.slice().sort((e,a)=>e.order-a.order),o=[];for(const e of t){if(!(Array.isArray(e.notes)&&e.notes.length>0))continue;let c=B(e.notes??[])||F(e.notes??[])||"";c&&(c=I(c,!0)||c),c&&o.push(c)}return`MML@${o.join(",")};`}function E(){const n=[];p.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.checked&&n.push(parseInt(e.value))});const t=x.tracks.filter(e=>n.includes(e.id));T=t.slice().sort((e,a)=>e.order-a.order).map(e=>e.id);const o=$(t);d.value=o,L()}E(),w.onclick=b,l.onclick=n=>{n.target===l&&b()},u.onclick=()=>{navigator.clipboard.writeText(d.value),u.textContent=s[i].copied,setTimeout(()=>{u.textContent=s[i].convertCopy},2e3)},g.onclick=()=>{try{const n=new Blob([d.value],{type:"text/plain;charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(n);const o=(r.value||"").trim(),e=`mml-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;let a=o.length>0?o:e;a=a.replace(/[\\\/:*?"<>|]/g,"_"),/\.txt$/i.test(a)||(a+=".txt"),t.download=a,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.parentNode&&t.parentNode.removeChild(t)},0)}catch{}},window.addEventListener("keydown",k,!0)}export{N as showConvertModal};
