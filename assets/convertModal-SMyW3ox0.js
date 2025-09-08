import{e as I,c as g}from"./button-WIurEURm.js";import{t as i,c as r}from"./languages-BPqcXAKa.js";import{notesToMML as R,notesToMMLRaw as A,newOptimizeBody as z}from"./converter-D_KhkxFU.js";function j(x){const l=document.createElement("div");l.style.cssText=`
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
   `;const h=document.createElement("div");h.style.cssText=`
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
   `;const m=document.createElement("div");m.style.cssText=`
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 8px;
      margin-bottom: 16px;
   `;const y=document.createElement("div");y.style.cssText=`
            display: flex;
            align-items: center;
            gap: 8px;
        `;const u=document.createElement("label");u.setAttribute("for","convertFilenameInput"),u.textContent=i[r].convertFilenameLabel||"파일명",u.setAttribute("data-i18n","convertFilenameLabel"),u.style.cssText=`
            min-width: 72px;
            color: #666;
            font-size: 12px;
        `;const c=document.createElement("input");c.type="text",c.id="convertFilenameInput",c.placeholder=i[r].convertFilenamePlaceholder||"예: my-song.txt",c.setAttribute("data-i18n-placeholder","convertFilenamePlaceholder"),c.style.cssText=`
            flex: 1 1 auto;
            padding: 6px 8px;
            border: 1px solid #cfcfcf;
            border-radius: 6px;
            font-size: 12px;
        `;const B=new Date().toISOString().replace(/[:.]/g,"-");c.value=`mml-${B}.txt`,y.append(u,c);const d=document.createElement("textarea");d.style.cssText=`
            width: 100%;
            min-height: 200px;
            box-sizing: border-box;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            word-break: break-all;
            overflow-y: auto;
        `,d.readOnly=!1;const b=document.createElement("div");b.style.cssText=`
      display: flex;
      justify-content: flex-end;
      gap: 8px;
   `,I();const f=g({label:i[r].convertCopy,variant:"primary",attrs:{"data-i18n":"convertCopy"}}),w=g({label:i[r].convertSaveTxt,variant:"secondary",attrs:{"data-i18n":"convertSaveTxt"}}),k=g({label:i[r].modalClose,variant:"secondary",attrs:{"data-i18n":"modalClose"}});b.append(f,w,k),h.append(m,y,b,d),l.appendChild(h),document.body.appendChild(l);function v(){window.removeEventListener("keydown",T,!0),l.parentNode&&document.body.removeChild(l)}function T(n){n.key==="Escape"&&v()}m.innerHTML="";let C=[];const L=new Map,M=()=>{let e=d.value||"";e.startsWith("MML@")&&(e=e.slice(4)),e.endsWith(";")&&(e=e.slice(0,-1));const o=e.length>0?e.split(",").map(t=>t.trim()):[];for(const t of x.tracks){const a=L.get(t.id);if(!a)continue;const p=C.indexOf(t.id),s=p>=0&&p<o.length?o[p].length:0;a.textContent=`${t.name} (${s}${i[r].charUnit})`}};[...x.tracks].slice().sort((n,e)=>n.order-e.order).forEach(n=>{const e=document.createElement("div");e.style.cssText=`
            display: flex;
            align-items: center;
            margin-bottom: 8px;
         `;const o=document.createElement("input");o.type="checkbox",o.id=`track-${n.id}`,o.value=String(n.id),o.checked=n.notes.length>0,o.disabled=n.notes.length===0,o.style.margin="0 4px 0 0",o.style.cursor="pointer";const t=document.createElement("label");t.htmlFor=`track-${n.id}`,L.set(n.id,t),t.textContent=`${n.name}`,t.style.cssText=`
                margin-left: 8px;
                ${n.notes.length===0?"color: #aaa;":""}
            `,o.addEventListener("change",()=>{E(),M()}),e.append(o,t),m.appendChild(e)});function F(n){const e=n.slice().sort((a,p)=>a.order-p.order),o=[];let t=!0;for(const a of e){if(!(Array.isArray(a.notes)&&a.notes.length>0))continue;let s=R(a.notes??[])||A(a.notes??[])||"";if(t&&s){const $=Math.max(20,Math.min(300,x.bpm|0)),O=s.match(/^(o\d+)?(l\d+\.?)/i);if(O){const S=O[0].length;s=s.slice(0,S)+"t"+$+s.slice(S)}else s="t"+$+s;t=!1}s&&(s=z(s,!0)||s),s&&o.push(s)}return`MML@${o.join(",")};`}function E(){const n=[];m.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.checked&&n.push(parseInt(t.value))});const e=x.tracks.filter(t=>n.includes(t.id));C=e.slice().sort((t,a)=>t.order-a.order).map(t=>t.id);const o=F(e);d.value=o,M()}E(),k.onclick=v,l.onclick=n=>{n.target===l&&v()},f.onclick=()=>{navigator.clipboard.writeText(d.value),f.textContent=i[r].copied,setTimeout(()=>{f.textContent=i[r].convertCopy},2e3)},w.onclick=()=>{try{const n=new Blob([d.value],{type:"text/plain;charset=utf-8"}),e=document.createElement("a");e.href=URL.createObjectURL(n);const o=(c.value||"").trim(),t=`mml-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;let a=o.length>0?o:t;a=a.replace(/[\\\/:*?"<>|]/g,"_"),/\.txt$/i.test(a)||(a+=".txt"),e.download=a,document.body.appendChild(e),e.click(),setTimeout(()=>{URL.revokeObjectURL(e.href),e.parentNode&&e.parentNode.removeChild(e)},0)}catch{}},window.addEventListener("keydown",T,!0)}export{j as showConvertModal};
