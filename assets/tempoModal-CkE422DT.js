import{t as p,c as r,M as x}from"./languages-B3gKcd-W.js";function f(l,u){const o=document.createElement("div");o.style.cssText=`
    position: fixed; inset: 0; background: rgba(0,0,0,0.5);
    display: flex; align-items: center; justify-content: center; z-index: 1000;`;const d=document.createElement("div");d.style.cssText=`
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        width: 320px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        gap: 12px;
    `;const s=document.createElement("div");s.textContent=p[r].tempoModalTitle,s.setAttribute("data-i18n","tempoModalTitle"),s.style.cssText=`
        font-weight: 600;
        font-size: 15px;
    `;const t=document.createElement("input");t.type="number",t.min="20",t.max=String(x),t.step="1",t.value=String(l.bpm),t.style.cssText=`
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        /* iOS 자동 확대 방지: 16px 이상 */
        font-size: 16px;
    `;const a=document.createElement("div");a.style.cssText=`
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    `;const n=document.createElement("button");n.type="button",n.textContent=p[r].cancel,n.setAttribute("data-i18n","cancel"),n.style.cssText=`
        padding: 8px 12px; border-radius: 8px; border:1px solid #cfd3d8; background:#fff; color:#1f2937; cursor:pointer;
        font: 500 14px/1 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;`;const e=document.createElement("button");e.type="button",e.textContent=p[r].ok,e.setAttribute("data-i18n","ok"),e.style.cssText=`
        padding: 8px 12px; border-radius: 8px; border:1px solid #2f65d2; background:#3a7afe; color:#fff; cursor:pointer;
        font: 500 14px/1 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;`,a.append(n,e),d.append(s,t,a),o.appendChild(d),document.body.appendChild(o);const c=()=>{o.parentNode&&document.body.removeChild(o)};n.onclick=c,e.onclick=()=>{const i=Math.max(20,Math.min(x,Math.round(Number(t.value||l.bpm))));u(i),c()},t.addEventListener("keydown",i=>{i.key==="Enter"&&e.click(),i.key==="Escape"&&c()}),setTimeout(()=>t.focus(),0)}export{f as showTempoModal};
