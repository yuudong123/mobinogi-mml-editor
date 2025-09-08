import{e as l,c as r}from"./button-WIurEURm.js";import{t as c,c as p,C as u}from"./languages-B3gKcd-W.js";function y(n){const d=n==="desktop"||n==="mobile"?n:"desktop",e=document.createElement("div");e.style.cssText=`
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
    `;const t=document.createElement("div");t.id="guideModalContent",t.setAttribute("data-mode",d),t.style.cssText=`
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-width: 600px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
    `,l();const o=r({label:"✕",variant:"ghost",size:"sm",title:c[p].modalClose,attrs:{"data-i18n-title":"modalClose"}});o.style.position="absolute",o.style.top="10px",o.style.right="10px";const i=s=>{s.key==="Escape"&&a()};function a(){window.removeEventListener("keydown",i,!0),e.parentNode&&document.body.removeChild(e)}o.onclick=a,u(t,d),t.appendChild(o),e.appendChild(t),document.body.appendChild(e),window.addEventListener("keydown",i,!0)}export{y as showGuideModal};
