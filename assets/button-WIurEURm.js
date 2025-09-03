let r=!1;function d(){if(r)return;const n=document.createElement("style");n.id="app-button-styles",n.textContent=`
  :root {
    --btn-font: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    --btn-radius: 8px;
    --btn-pad-y: 6px; --btn-pad-x: 12px;
    --btn-fg: #1f2937; --btn-bg: #ffffff; --btn-bd: #cfd3d8;
    --btn-fg-primary: #ffffff; --btn-bg-primary: #3a7afe; --btn-bd-primary: #2f65d2;
    --btn-fg-danger: #ffffff; --btn-bg-danger: #ef4444; --btn-bd-danger: #dc2626;
    --btn-fg-ghost: #374151; --btn-bg-ghost: transparent; --btn-bd-ghost: #d1d5db;
    --btn-hover: 0.97; --btn-active: 0.94;
  }
    /* NOTE: Don't set font-size on base .btn to avoid shrinking existing buttons. */
    .btn { font-family: var(--btn-font); font-weight: 500; line-height: 1; padding: var(--btn-pad-y) var(--btn-pad-x); border-radius: var(--btn-radius); cursor: pointer; border:1px solid var(--btn-bd); background: var(--btn-bg); color: var(--btn-fg); transition: filter .15s ease, background .15s ease, border-color .15s ease, transform .15s ease, box-shadow .15s ease; }
  .btn:hover { filter: brightness(var(--btn-hover)); }
  .btn:active { filter: brightness(var(--btn-active)); transform: translateY(0.5px); }
  .btn:disabled { opacity: .6; cursor: not-allowed; }
  .btn--primary { color: var(--btn-fg-primary); background: var(--btn-bg-primary); border-color: var(--btn-bd-primary); }
  .btn--danger { color: var(--btn-fg-danger); background: var(--btn-bg-danger); border-color: var(--btn-bd-danger); }
  .btn--ghost { color: var(--btn-fg-ghost); background: var(--btn-bg-ghost); border-color: var(--btn-bd-ghost); }
  .btn--secondary { /* defaults already set by .btn */ }
  .btn--sm { padding: 4px 8px; font-size: 12px; }
  .btn--md { padding: 6px 12px; font-size: 13px; }
  .btn--lg { padding: 10px 16px; font-size: 15px; }
  `,document.head.appendChild(n),r=!0}function i(n,t){d();const e=t?.variant??"secondary",a=t?.size??"md";return n.classList.add("btn",`btn--${e}`,`btn--${a}`),t?.label!=null&&(n.textContent=t.label),t?.title&&(n.title=t.title),t?.disabled!=null&&(n.disabled=t.disabled),t?.onClick&&(n.onclick=t.onClick),t?.attrs&&Object.entries(t.attrs).forEach(([b,o])=>n.setAttribute(b,o)),n}function s(n){const t=document.createElement("button");return i(t,n)}export{s as c,d as e};
