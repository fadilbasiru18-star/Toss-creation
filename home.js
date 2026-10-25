const img=(id,w=1200,h=1000)=>`<img src="img/${id}.jpg" alt="${byId[id].alt}" width="${w}" height="${h}" loading="lazy">`;
/* ---- audience tiles, gallery, bags ---- */
$('#aud').innerHTML=WHO.map(w=>`<button type="button" data-who="${w.k}">${w.img?`<span class="ph">${img(w.img)}</span>`:''}<span class="tx"><h3>${w.title}</h3><p>${w.text}</p></span></button>`).join('');
let filter='all';
const CHIPS=[['all','All styles'],['students','Students'],['men','Working men'],['women','Working women'],['heels','Heels'],['bags','Bags']];
function renderChips(){$('#chips').innerHTML=CHIPS.map(([k,l])=>`<button type="button" class="chip" data-f="${k}" aria-pressed="${filter===k}">${l}</button>`).join('')}
function card(i){return `<article class="item"><div class="ph">${img(i.id)}</div><div class="bd"><h3>${i.name}</h3><button type="button" class="btn btn-line" data-pick="${i.id}">Make it yours</button></div></article>`}
function renderGrid(){
  const list=ITEMS.filter(i=>filter==='all'||i.tags.includes(filter));
  $('#grid').innerHTML=list.length?list.map(card).join(''):'<p class="empty">No styles here yet. Choose another group.</p>';
}
$('#bagGrid').innerHTML=ITEMS.filter(i=>i.tags.includes('bags')).map(card).join('');
renderChips();renderGrid();
$('#chips').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(!b)return;filter=b.dataset.f;renderChips();renderGrid()});
$('#aud').addEventListener('click',e=>{const b=e.target.closest('[data-who]');if(!b)return;filter=b.dataset.who;renderChips();renderGrid();document.getElementById('collection').scrollIntoView({behavior:'smooth'})});
document.addEventListener('click',e=>{const b=e.target.closest('[data-pick]');if(!b)return;location.href='order.html?pick='+encodeURIComponent(b.dataset.pick)});
