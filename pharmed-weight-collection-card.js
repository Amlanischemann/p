/* PHARMED additive collection card. Preserves existing website and seven cards. */
(()=>{'use strict';
 const link='products.html#pharmed-weight-collection';
 const words={
 en:{name:'Weight Management',desc:'Six nutrition concepts, two delicious SLIM MEAL flavours, ingredient details and a 28-day meal routine.',action:'Browse collection'},
 de:{name:'Gewichtsmanagement',desc:'Sechs Ernährungskonzepte, zwei SLIM-MEAL-Sorten, Zutatenangaben und ein 28-Tage-Ernährungsplan.',action:'Kollektion entdecken'},
 ar:{name:'إدارة الوزن',desc:'ستة منتجات غذائية، ونكهتان من سليم ميل، وتفاصيل المكونات، وبرنامج غذائي لمدة 28 يوماً.',action:'استعرض المجموعة'}
 };
 let scheduled=false;
 function add(){
  const grid=document.querySelector('#pm-featured-collections .pm-collection-grid');
  if(!grid)return;
  let card=grid.querySelector('[data-pharmed-weight-card]');
  const lang=(document.documentElement.lang||localStorage.getItem('pharmed-language')||'en').toLowerCase();
  const t=words[lang]||words.en;
  if(!card){
   card=document.createElement('a');card.className='pm-collection-card';
   card.dataset.pharmedWeightCard='true';card.href=link;
   card.innerHTML='<img loading="lazy" src="W03.webp" alt="PHARMED SLIM MEAL Vanilla Cinnamon"><div class="pm-card-copy"><h3></h3><p></p><span class="pm-linktext"></span></div>';
   grid.appendChild(card);
  }
  const h=card.querySelector('h3'),p=card.querySelector('p'),cta=card.querySelector('.pm-linktext');
  if(h.textContent!==t.name)h.textContent=t.name;
  if(p.textContent!==t.desc)p.textContent=t.desc;
  if(cta.textContent!==t.action+' →')cta.textContent=t.action+' →';
  card.setAttribute('aria-label',t.name+' – '+t.action);
 }
 function queue(){if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;add()})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{add();watch()});
 else {add();watch()}
 function watch(){
  const main=document.getElementById('content');
  if(main)new MutationObserver(queue).observe(main,{childList:true,subtree:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-lang]'))setTimeout(add,0)});
 }
})();
