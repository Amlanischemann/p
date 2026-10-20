/* PHARMED Functional Health integrated product cards | R&D preview. Existing products untouched. */
(()=>{'use strict';
const items=[{"code":"FH01","name":"THYMOQUIN 20 COMPLEX","img":"functional-health-assets/FH01.webp","ingredients":[["Black seed extract (Nigella sativa), 20% thymoquinone","To be determined after safety/legal review"]],"search":"Black seed extract (Nigella sativa), 20% thymoquinone"},{"code":"FH02","name":"THYRO BALANCE","img":"functional-health-assets/FH02.webp","ingredients":[["Selenium","55 µg"],["Zinc","10 mg"],["Vitamin B12","2.5 µg"]],"search":"Selenium Zinc Vitamin B12"},{"code":"FH03","name":"GASTRO COMFORT","img":"functional-health-assets/FH03.webp","ingredients":[["Calcium (from calcium carbonate)","240 mg"],["Vitamin B6","1.4 mg"]],"search":"Calcium (from calcium carbonate) Vitamin B6"},{"code":"FH04","name":"PANCREA METABOLIC","img":"functional-health-assets/FH04.webp","ingredients":[["Chromium","40 µg"],["Zinc","10 mg"],["Vitamin B1","1.1 mg"]],"search":"Chromium Zinc Vitamin B1"},{"code":"FH05","name":"RENAL NUTRI CARE","img":"functional-health-assets/FH05.webp","ingredients":[["Vitamin B6","1.4 mg"],["Vitamin B12","2.5 µg"],["Folate","200 µg"]],"search":"Vitamin B6 Vitamin B12 Folate"},{"code":"FH06","name":"URO BLADDER COMPLEX","img":"functional-health-assets/FH06.webp","ingredients":[["Cranberry extract","300 mg"],["Vitamin C","80 mg"]],"search":"Cranberry extract Vitamin C"},{"code":"FH07","name":"VISION MACULA+","img":"functional-health-assets/FH07.webp","ingredients":[["Lutein","10 mg"],["Zeaxanthin","2 mg"],["Zinc","10 mg"],["Vitamin A","400 µg RE"]],"search":"Lutein Zeaxanthin Zinc Vitamin A"},{"code":"FH08","name":"NEURO FOCUS","img":"functional-health-assets/FH08.webp","ingredients":[["Vitamin B6","1.4 mg"],["Vitamin B12","2.5 µg"],["Magnesium","100 mg"]],"search":"Vitamin B6 Vitamin B12 Magnesium"},{"code":"FH09","name":"MUSCLE RECOVERY","img":"functional-health-assets/FH09.webp","ingredients":[["Magnesium","200 mg"],["Vitamin D3","20 µg"],["Vitamin B6","1.4 mg"]],"search":"Magnesium Vitamin D3 Vitamin B6"},{"code":"FH10","name":"CELL PROTECT+","img":"functional-health-assets/FH10.webp","ingredients":[["Vitamin C","160 mg"],["Vitamin E","12 mg α-TE"],["Selenium","55 µg"]],"search":"Vitamin C Vitamin E Selenium"}];
function safe(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function init(){
 const cards=document.getElementById('cards'), filters=document.getElementById('filters'), count=document.getElementById('count');
 if(!cards||!filters)return;
 const originalCount=cards.querySelectorAll('.card').length;
 const existing=new Set([...cards.querySelectorAll('.card .sku')].map(e=>e.textContent.trim()));
 const add=items.filter(p=>!existing.has(p.code));
 add.forEach(p=>{
  const node=document.createElement('article');node.className='card';node.dataset.group='FH';node.dataset.name=(p.code+' '+p.name+' '+p.search).toLowerCase();node.dataset.pharmedFunctional='yes';
  node.innerHTML=`<img src="${p.img}" loading="lazy" alt="PHARMED ${safe(p.name)} original reference bottle with gold cap"><div class="cardbody"><span class="sku">${p.code}</span><h3>${safe(p.name)}</h3><p>Functional Health · R&D formulation concept, pending safety and regulatory review.</p><button type="button" class="details fh-details">Ingredients & amounts</button></div>`;
  node.querySelector('button').addEventListener('click',()=>{
    const dialog=document.getElementById('detail'),body=document.getElementById('detailbody'); if(!dialog||!body)return;
    const rows=p.ingredients.map(a=>`<tr><td>${safe(a[0])}</td><td>${safe(a[1])}</td></tr>`).join('');
    body.innerHTML=`<img class="detailimg" src="${p.img}" alt="${safe(p.name)}"><p class="sku">${p.code} · FUNCTIONAL HEALTH</p><h2>${safe(p.name)}</h2><p>Proposed active ingredients per daily serving</p><table class="fh-table"><thead><tr><th>Ingredient</th><th>Amount</th></tr></thead><tbody>${rows}</tbody></table><p class="note">Research and development concept only. Packaging artwork may depict different ingredient combinations. Safety, regulatory classification, health claims and final labelling require review before marketing.</p>`;
    dialog.showModal();
  });
  cards.append(node);
 });
 const total=originalCount+add.length;
 document.title=`All ${total} PHARMED Products | Full Collections`;
 const description=document.querySelector('meta[name="description"]');if(description)description.content=`Browse ${total} PHARMED product concepts in one complete catalogue, including the Functional Health range.`;
 document.querySelectorAll('.filter').forEach(b=>{if(/^All \d+/.test(b.textContent.trim()))b.textContent='All '+total;});
 const filter=document.createElement('button');filter.type='button';filter.className='filter';filter.textContent='Functional Health (10)';filter.setAttribute('aria-pressed','false');filter.id='fh-filter';filters.append(filter);
 const originalButtons=[...filters.querySelectorAll('button.filter')].filter(b=>b!==filter);
 let fhOnly=false;
 function visible(){const q=(document.getElementById('search')?.value||'').trim().toLowerCase(); const isAll=originalButtons.some(b=>/^All \d+/.test(b.textContent.trim())&&b.getAttribute('aria-pressed')==='true');
  const fh=cards.querySelectorAll('[data-pharmed-functional]');let active=0;
  fh.forEach(e=>{const match=e.dataset.name.includes(q);e.hidden=!match||(!fhOnly&&!isAll);if(!e.hidden)active++;});
  if(fhOnly){const all=[...cards.querySelectorAll('.card')]; all.forEach(e=>{if(!e.hasAttribute('data-pharmed-functional'))e.hidden=true;}); if(count)count.textContent=active+' products';}
  else if(isAll&&count){const existingVisible=[...cards.querySelectorAll('.card:not([data-pharmed-functional])')].filter(e=>!e.hidden).length;count.textContent=(existingVisible+active)+' products';}
 }
 filter.addEventListener('click',()=>{fhOnly=true;originalButtons.forEach(b=>b.setAttribute('aria-pressed','false'));filter.setAttribute('aria-pressed','true');visible();});
 originalButtons.forEach(b=>b.addEventListener('click',()=>{fhOnly=false;filter.setAttribute('aria-pressed','false');setTimeout(visible,0);}));
 document.getElementById('search')?.addEventListener('input',()=>setTimeout(visible,0));
 const style=document.createElement('style');style.textContent='.fh-table{border-collapse:collapse;width:100%;font-size:14px}.fh-table th,.fh-table td{padding:8px;border-bottom:1px solid #dcdcdc;text-align:left}.fh-table th{background:#f6f0dc}.card[data-pharmed-functional] .sku{color:#a67c22}';document.head.append(style);
 const hero=document.querySelector('.hero p');if(hero)hero.innerHTML=hero.innerHTML.replace(/107 product profiles/i,total+' product profiles');
 visible();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();