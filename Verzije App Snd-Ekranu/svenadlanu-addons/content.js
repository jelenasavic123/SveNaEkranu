(()=>{const M="POPUP_DETECTED";let B=new Set,P=new Set;
const N=d=>String(d||"").toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0].split(":")[0].trim();
const G=async()=>{try{const r=await chrome.runtime.sendMessage({type:"GET_BLOCKED_DOMAINS"});if(r?.ok&&Array.isArray(r.domains))B=new Set(r.domains.map(N).filter(Boolean));}catch{}};
G();
window.addEventListener("myadblock-popup-request-v9",async e=>{
 let q;try{q=typeof e.detail==="string"?JSON.parse(e.detail):e.detail}catch{return}
 if(!q?.url||P.has(q.url))return;
 P.add(q.url);
 try{const r=await chrome.runtime.sendMessage({type:M,url:q.url});if(r?.ok&&r.domain)B.add(N(r.domain));}catch{}finally{P.delete(q.url)}
});
setInterval(G,30000);
})();