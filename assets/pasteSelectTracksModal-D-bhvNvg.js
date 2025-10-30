import{t as r,c}from"./main-bO_aDfSQ.js";function k(o,x){return new Promise(s=>{const t=document.createElement("div");t.style.cssText="position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000;";const u=`
            <div style="background:#fff; width:420px; max-width:90%; max-height:80%; display:flex; flex-direction:column; border-radius:10px; box-shadow:0 4px 18px rgba(0,0,0,.35);">
                <div style="font:600 16px/1.3 system-ui,Segoe UI,Roboto,sans-serif; padding:16px 18px 8px;" data-i18n="pasteSelectTracksTitle">${r[c].pasteSelectTracksTitle||"Select Tracks"}</div>
                <div style="padding:0 18px 12px; color:#444; font:500 13px/1.4 system-ui,Segoe UI,Roboto,sans-serif;" data-i18n="pasteSelectTracksDesc">${(r[c].pasteSelectTracksDesc||"Select exactly {n} tracks to paste onto.").replace("{n}",String(o))}</div>
                <div style="flex:1 1 auto; overflow:auto; padding:0 18px 4px;">
                    <ul style="list-style:none; margin:0; padding:0; display:grid; gap:4px; grid-template-columns:1fr 1fr;">
                        ${x.map((e,n)=>{const l=typeof e.mmlString=="string"?e.mmlString.length:0;return`
                                <li style="border:1px solid #d0d7de; border-radius:8px; padding:8px 10px; display:flex; align-items:center; gap:8px; background:#f8f9fa;">
                                    <input type="checkbox" id="paste-track-${e.id}" data-idx="${n}" style="cursor:pointer;">
                                    <label for="paste-track-${e.id}" style="cursor:pointer; flex:1 1 auto; display:flex; flex-direction:column;">
                                        <div style="font:600 13px/1.2 system-ui,Segoe UI,Roboto,sans-serif; color:#111;">${e.name||`Track ${n+1}`}</div>
                                        <div style="font:500 11px/1.2 system-ui,Segoe UI,Roboto,sans-serif; color:#555;">${l} 자</div>
                                    </label>
                                </li>
                            `}).join("")}
                    </ul>
                </div>
                <div style="padding:12px 18px 18px; display:flex; align-items:center; justify-content:space-between; gap:12px;">
                    <div class="modal-remaining" style="font:600 12px/1 system-ui,Segoe UI,Roboto,sans-serif; color:#555;"></div>
                    <div style="display:flex; gap:8px;">
                        <button type="button" class="modal-cancel" data-i18n="cancel" style="padding:8px 14px; font:500 13px/1 system-ui,Segoe UI,Roboto,sans-serif; border-radius:8px; border:1px solid #cfd3d8; background:#fff; cursor:pointer;">${r[c].cancel||"Cancel"}</button>
                        <button type="button" class="modal-confirm" data-i18n="ok" style="padding:8px 14px; font:500 13px/1 system-ui,Segoe UI,Roboto,sans-serif; border-radius:8px; border:1px solid #2f65d2; background:#3a7afe; color:#fff; cursor:pointer;" disabled>${r[c].ok||"OK"}</button>
                    </div>
                </div>
            </div>
        `;t.innerHTML=u,document.body.appendChild(t);const p=t.querySelectorAll("input[type=checkbox]"),a=t.querySelector(".modal-confirm"),y=t.querySelector(".modal-cancel"),g=t.querySelector(".modal-remaining"),i=[];function f(){i.length>=o?p.forEach(e=>{e.checked||(e.disabled=!0)}):p.forEach(e=>{e.checked||(e.disabled=!1)}),a.disabled=i.length!==o,g.textContent=`${i.length}/${o}`}p.forEach(e=>{e.addEventListener("change",()=>{const n=parseInt(e.getAttribute("data-idx"));if(e.checked)i.includes(n)||i.push(n);else{const l=i.indexOf(n);l>=0&&i.splice(l,1)}f()})}),y.addEventListener("click",()=>{d(),s(null)}),a.addEventListener("click",()=>{a.disabled||(d(),s([...i]))});function d(){t.parentNode&&document.body.removeChild(t)}function m(e){e.key==="Escape"&&(d(),s(null)),e.key==="Enter"&&(a.disabled||(d(),s([...i])))}window.addEventListener("keydown",m,{once:!0}),f()})}export{k as showPasteSelectTracksModal};
