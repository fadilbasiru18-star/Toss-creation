/* ---- radio helper ---- */
function radios(id,name,list,opts={}){
  const el=$('#'+id); el.innerHTML='';
  list.forEach(v=>{
    const [label,sw]=Array.isArray(v)?v:[v,null];
    const d=document.createElement('label'); d.className='opt';
    d.innerHTML=`<input type="radio" name="${name}" value="${label}"><span${sw?' class="sw"':''}>${sw?`<i style="background:${sw}"></i>`:''}${label}</span>`;
    const inp=d.querySelector('input'); inp.checked=S[opts.key||name]===label;
    inp.addEventListener('change',()=>{S[opts.key||name]=label;opts.after&&opts.after();summary();});
    el.appendChild(d);
  });
}

/* ---- form setup ---- */
function setWho(k){
  S.who=k; const kind=kindOf(k); const f=$('#f'); const changed=f.dataset.kind!==kind; f.dataset.kind=kind;
  if(changed){S.material='';S.sole='';S.closure='';}
  document.querySelectorAll('#who-opts input').forEach(i=>i.checked=i.value===k);
  $('#e-who').textContent='';
  buildChoices(); renderPick(); summary();
}
function buildChoices(){
  const kind=kindOf(S.who||'men');
  radios('o-colour','colour',COLOURS); radios('o-accent','accent',ACCENTS); radios('o-material','material',MATERIALS[kind]);
  radios('o-sole','sole',S.who==='heels'||S.who==='women'?[...SOLES.heels,...SOLES.flat.filter(x=>!SOLES.heels.includes(x))]:SOLES.flat);
  $('#solelab').textContent=S.who==='heels'?'Heel':'Sole or heel';
  radios('o-closure','closure',CLOSURES); radios('o-bagtype','bagtype',BAGTYPES); radios('o-bagsize','bagsize',BAGSIZES); radios('o-strap','strap',STRAPS);
}
$('#who-opts').innerHTML=WHO.map(w=>`<label class="opt"><input type="radio" name="who" value="${w.k}"><span>${w.label}</span></label>`).join('');
$('#who-opts').addEventListener('change',e=>{if(e.target.name==='who'){S.style='';setWho(e.target.value)}});
function renderPick(){
  const list=S.who?ITEMS.filter(i=>i.tags.includes(S.who)):ITEMS;
  const own=`<label class="opt"><input type="radio" name="style" value="own"><span><span class="own">My own design</span><small>I will describe it</small></span></label>`;
  $('#pick').innerHTML=own+list.map(i=>`<label class="opt"><input type="radio" name="style" value="${i.id}"><span><img src="img/${i.id}.jpg" alt="" loading="lazy"><small>${i.name}</small></span></label>`).join('');
  $('#pick').querySelectorAll('input').forEach(inp=>{inp.checked=S.style===inp.value;inp.addEventListener('change',()=>{S.style=inp.value;summary()})});
}
const sz=$('#size'); for(let n=28;n<=47;n++){const o=document.createElement('option');o.value=n;o.textContent='EU '+n;sz.appendChild(o)}
radios('o-fit','fit',FIT,{after:()=>{$('#e-fit').textContent=''}});
radios('o-deliv','deliv',DELIV,{after:()=>{$('#cityField').hidden=S.deliv!=='Deliver to me'}});
buildChoices(); renderPick();
const today=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
$('#fitdate').min=today;$('#needby').min=today;


/* a style chosen on the home page arrives as ?pick=id */
{const id=new URLSearchParams(location.search).get('pick'),it=id&&byId[id];
 if(it){const w=['bags','heels','women','men','students'].find(t=>it.tags.includes(t));setWho(it.tags.includes('heels')?'heels':w);S.style=it.id;renderPick();summary()}}
/* reference photo preview */
$('#ref').addEventListener('change',e=>{
  const f=e.target.files[0]; $('#e-ref').textContent=''; $('#fileprev').innerHTML=''; S.refimg='';
  if(!f)return;
  if(!f.type.startsWith('image/')||f.size>6e6){$('#e-ref').textContent='Choose a photo under 6 MB.';e.target.value='';return}
  const r=new FileReader(); r.onload=()=>{S.refimg=r.result;$('#fileprev').innerHTML=`<img src="${r.result}" alt="Your reference photo"><span>${f.name}. Attach this photo when you send your request.</span>`;summary()}; r.readAsDataURL(f);
});

/* ---- summary ---- */
function gather(){
  const kind=kindOf(S.who||'men'); const it=byId[S.style];
  const rows=[['For',WHO.find(w=>w.k===S.who)?.label],['Starting style',S.style==='own'?'My own design':it?.name],['Main colour',S.colour],['Detail',S.accent],['Material',S.material]];
  if(kind==='bag')rows.push(['Bag type',S.bagtype],['Bag size',S.bagsize],['Straps',S.strap]);
  else rows.push([S.who==='heels'?'Heel':'Sole or heel',S.sole],['Fastening',S.closure],['Size',$('#size').value&&'EU '+$('#size').value],['Foot length',$('#foot').value&&$('#foot').value+' cm']);
  rows.push(['Initials',$('#initials').value],['Quantity',$('#qty').value],['Notes',$('#notes').value.trim()],['Measurements',S.fit],['Fitting date',$('#fitdate').value],['Needed by',$('#needby').value],['Collection',S.deliv==='Deliver to me'?'Delivery to '+($('#city').value||'(city to confirm)'):S.deliv]);
  return rows.filter(r=>r[1]);
}
function summary(){
  const rows=gather(); const it=byId[S.style];
  const t=$('#sumthumb'); t.hidden=!it; t.innerHTML=it?`<img src="img/${it.id}.jpg" alt="${it.alt}">`:'';
  $('#sumnone').hidden=rows.length>0;
  $('#sumlist').innerHTML=rows.map(([k,v])=>`<div><dt>${k}</dt><dd>${String(v).replace(/</g,'&lt;')}</dd></div>`).join('');
}
['initials','qty','notes','size','foot','fitdate','needby','city'].forEach(id=>$('#'+id).addEventListener('input',summary));
summary();

/* ---- submit ---- */
function setErr(id,m){$('#'+id).textContent=m||'';return !m}
$('#f').addEventListener('submit',e=>{
  e.preventDefault();
  const kind=kindOf(S.who||'men'); let ok=true, first=null;
  const chk=(good,id,msg,focus)=>{const g=setErr(id,good?'':msg); if(!g&&!first)first=focus; ok=ok&&g};
  chk(!!S.who,'e-who','Choose who this is for.','#who-opts input');
  chk(kind==='bag'||!!$('#size').value,'e-size','Choose a shoe size.','#size');
  chk(!!S.fit,'e-fit','Choose how we should take your measurements.','#o-fit input');
  chk(S.deliv!=='Deliver to me'||!!$('#city').value.trim(),'e-city','Enter your delivery city or area.','#city');
  chk(!!$('#name').value.trim(),'e-name','Enter your name.','#name');
  chk(/[0-9]{7,}/.test($('#phone').value.replace(/\D/g,'')),'e-phone','Enter a phone number we can reach, with at least 7 digits.','#phone');
  if(!ok){document.querySelector(first)?.focus();return}
  const id='TC-'+new Date().toISOString().slice(2,10).replace(/-/g,'')+'-'+Math.random().toString(36).slice(2,6).toUpperCase();
  const lines=[`New custom order request ${id}`,...gather().map(([k,v])=>`${k}: ${v}`),`Name: ${$('#name').value.trim()}`,`Phone: ${$('#phone').value.trim()}`];
  if($('#email').value)lines.push('Email: '+$('#email').value.trim());
  if(S.refimg)lines.push('(Reference photo to be attached)');
  const msg=lines.join('\n');
  try{const all=JSON.parse(localStorage.getItem('toss:requests')||'[]');all.push({id,date:Date.now(),msg});localStorage.setItem('toss:requests',JSON.stringify(all))}catch(_){}
  const wa=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  $('#formCol').innerHTML=`<div class="done" role="status"><h3 class="gold-text">Almost done: ${id}</h3>
    <p>WhatsApp should open with your order filled in. Press send there and we will reply to talk about the price and payment.${S.refimg?' Attach your reference photo in the chat.':''}</p>
    <div class="acts"><a class="btn btn-gold" id="wa" href="${wa}" target="_blank" rel="noopener">Open WhatsApp</a><button class="btn btn-line" type="button" id="copy">Copy order text</button><button class="btn btn-line" type="button" onclick="location.reload()">Start another order</button></div>
    <p class="hint" style="margin-top:16px">If WhatsApp did not open, tap Open WhatsApp. Your order is not sent until you press send in the chat.</p>
    <textarea readonly aria-label="Your order" id="reqtxt" style="margin-top:14px">${msg.replace(/</g,'&lt;')}</textarea></div>`;
  try{window.open(wa,'_blank')||(location.href=wa)}catch(_){}
  $('#copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(msg)}catch(_){$('#reqtxt').select();document.execCommand('copy')}$('#copy').textContent='Copied'});
  $('#order').scrollIntoView({behavior:'smooth'});
});