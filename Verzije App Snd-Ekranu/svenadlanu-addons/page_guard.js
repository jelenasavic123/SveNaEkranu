(()=>{const D=[atob("bmFkbGFudS5vbmxpbmU="),atob("c3ZlbmFkbGFudS5zaXRl")],E=atob("bXlhZGJsb2NrLXBvcHVwLXJlcXVlc3Qtdjki");
const H=h=>{h=String(h||"").toLowerCase().replace(/^www\./,"");return D.some(d=>h===d||h.endsWith("."+d))};
const T=()=>{try{if(H(location.hostname))return 1;try{for(const x of location.ancestorOrigins||[])try{if(H(new URL(x).hostname))return 1}catch{}}catch{}try{if(document.referrer&&H(new URL(document.referrer).hostname))return 1}catch{}return 0}catch{return 0}};
if(!T())return;
const U=x=>{try{if(x==null||x==="")return null;const u=new URL(String(x),location.href);return u.protocol==="http:"||u.protocol==="https:"?u.href:null}catch{return null}};
const I=x=>{try{return H(new URL(x,location.href).hostname)}catch{return 0}};
const R=(u,s)=>{const h=U(u);if(!h||I(h))return;try{window.dispatchEvent(new CustomEvent(E,{detail:JSON.stringify({url:h,source:s,page:location.href,time:Date.now()})}))}catch{}};
const O=u=>{if(T()){R(u,"window.open");return null}return null};
try{Object.defineProperty(window,"open",{value:O,writable:false,configurable:false})}catch{try{window.open=O}catch{}}
const A=e=>{if(!T()||e.defaultPrevented)return;let a;try{a=e.target?.closest?.("a[href]")}catch{return}if(!a)return;const t=String(a.getAttribute("target")||"").trim().toLowerCase();if(!["_blank","_new","_popup"].includes(t))return;const h=U(a.href);if(!h||I(h))return;try{e.preventDefault();e.stopImmediatePropagation()}catch{}R(h,"anchor-target")};
document.addEventListener("click",A,true);document.addEventListener("auxclick",A,true);document.addEventListener("pointerup",A,true);
const F=(f,s)=>{if(!f)return 0;const t=String(f.getAttribute("target")||"").trim().toLowerCase();if(!["_blank","_new","_popup"].includes(t))return 0;const a=U(f.action||location.href);if(!a||I(a))return 0;R(a,s);return 1};
document.addEventListener("submit",e=>{if(!T())return;let f;try{f=e.target.closest("form")}catch{}if(f&&F(f,"form-submit"))try{e.preventDefault();e.stopImmediatePropagation()}catch{}},true);
try{const s=HTMLFormElement.prototype.submit;Object.defineProperty(HTMLFormElement.prototype,"submit",{configurable:false,writable:false,value:function(){if(T()&&F(this,"form-submit-api"))return;s.apply(this,arguments)}})}catch{}
try{const c=HTMLAnchorElement.prototype.click;Object.defineProperty(HTMLAnchorElement.prototype,"click",{configurable:false,writable:false,value:function(){if(T()){const t=String(this.getAttribute("target")||"").trim().toLowerCase();if(["_blank","_new","_popup"].includes(t)){const h=U(this.href);if(h&&!I(h)){R(h,"anchor-click-api");return}}}c.apply(this,arguments)}})}catch{}
const Q=()=>{if(!T())return;try{if(window.open!==O)Object.defineProperty(window,"open",{value:O,writable:false,configurable:false})}catch{}};
[0,10,25,50,100,250,500,1000,2000,4000].forEach(setTimeout.bind(null,Q));
try{new MutationObserver(ms=>{if(!T())return;for(const m of ms)for(const n of m.addedNodes||[])if(n.nodeType===1)try{if(n.matches?.("a[target='_blank'],a[target='_new'],a[target='_popup']"))n.setAttribute("data-sve-popup-guard","1");n.querySelectorAll?.("a[target='_blank'],a[target='_new'],a[target='_popup']").forEach(a=>a.setAttribute("data-sve-popup-guard","1"))}catch{}}).observe(document.documentElement||document,{childList:true,subtree:true})}catch{}
})();