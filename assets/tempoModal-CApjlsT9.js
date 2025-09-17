import{t as r,c as p,M as l}from"./main-ChrLvuNY.js";function f(u,x){const o=document.createElement("div");o.style.cssText=`
    position: fixed; inset: 0; background: rgba(0,0,0,0.5);
    display: flex; align-items: center; justify-content: center; z-index: 1000;`;const i=document.createElement("div");i.style.cssText=`
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        width: 320px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        gap: 12px;
    `;const s=document.createElement("div");s.textContent=r[p].tempoModalTitle,s.setAttribute("data-i18n","tempoModalTitle"),s.style.cssText=`
        font-weight: 600;
        font-size: 15px;
    `;const e=document.createElement("input");e.type="number",e.min="20",e.max=String(l),e.step="1",e.value="120",e.style.cssText=`
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        /* iOS 자동 확대 방지: 16px 이상 */
        font-size: 16px;
    `;const a=document.createElement("div");a.style.cssText=`
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    `;const n=document.createElement("button");n.type="button",n.textContent=r[p].cancel,n.setAttribute("data-i18n","cancel"),n.style.cssText=`
        padding: 8px 12px; border-radius: 8px; border:1px solid #cfd3d8; background:#fff; color:#1f2937; cursor:pointer;
        font: 500 14px/1 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;`;const t=document.createElement("button");t.type="button",t.textContent=r[p].ok,t.setAttribute("data-i18n","ok"),t.style.cssText=`
        padding: 8px 12px; border-radius: 8px; border:1px solid #2f65d2; background:#3a7afe; color:#fff; cursor:pointer;
        font: 500 14px/1 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;`,a.append(n,t),i.append(s,e,a),o.appendChild(i),document.body.appendChild(o);const c=()=>{o.parentNode&&document.body.removeChild(o)};n.onclick=c,t.onclick=()=>{const d=Math.max(20,Math.min(l,Math.round(Number(e.value||120))));x(d),c()},e.addEventListener("keydown",d=>{d.key==="Enter"&&t.click(),d.key==="Escape"&&c()}),setTimeout(()=>e.focus(),0)}export{f as showTempoModal};
