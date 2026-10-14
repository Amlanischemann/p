/* Pharmed UG Collections v2 — additive user-facing collection navigation. No background tracking. */
(()=>{'use strict';
if(window.__PHARMED_COLLECTIONS_V2)return;window.__PHARMED_COLLECTIONS_V2=true;
const TXT={
 en:{eyebrow:'PHARMED · THE COLLECTIONS',title:'Discover our product collections',subtitle:'Explore nutrition and wellness products by format, ingredients and lifestyle. Browse everything in one place or visit a dedicated range.',men:'Men’s Health',menDesc:'Six tablet-blister formulations for adult men.',all:'All Products',allDesc:'Every Pharmed range, searchable in one catalogue.',supp:'Food Supplements & Wellness',suppDesc:'Nutrition, vitamins, functional formats and speciality products.',blend:'Power Blends',blendDesc:'16 grain, fibre and plant-based powder recipes.',tea:'Herbal Teas',teaDesc:'Six herbal infusions inspired by Germany and Asia · 20 tea bags per box.',animal:'Animal Nutrition',animalDesc:'Six VetHerb research concepts with species-focused browsing.',bot:'Botanical Collection',botDesc:'Plant-led products and aromatic blends.',action:'Browse collection',news:'Innovation Lab',newsDesc:'Original Pharmed product ideas, research directions and practical development plans.',teakicker:'PHARMED · HERBAL TEAS',teatitle:'Herbal Teas',tealead:'A dedicated collection of six botanical infusions, presented in distinctive horizontal boxes with 20 tea bags in each.',teachip1:'German classics',teachip2:'Asian-inspired',extended:'Extended Product Collection',more:'More Products'},
 de:{eyebrow:'PHARMED · UNSERE PRODUKTLINIEN',title:'Entdecken Sie unsere Produktwelten',subtitle:'Entdecken Sie Ernährung und Wellness nach Produktformat, Zutaten und Lebensstil. Alle Produkte sind gemeinsam durchsuchbar.',men:'Männergesundheit',menDesc:'Sechs Rezepturen mit Tablettenblistern für erwachsene Männer.',all:'Alle Produkte',allDesc:'Alle Pharmed-Produktlinien in einem durchsuchbaren Katalog.',supp:'Nahrungsergänzung & Wellness',suppDesc:'Ernährung, Vitamine, funktionelle Produkte und Spezialsortiment.',blend:'Power Blends',blendDesc:'16 Getreide-, Ballaststoff- und pflanzliche Pulvermischungen.',tea:'Kräutertees',teaDesc:'Sechs Kräutertees aus deutschen und asiatischen Traditionen · 20 Beutel je Packung.',animal:'Tierernährung',animalDesc:'Sechs VetHerb-Entwicklungskonzepte mit Tierarten-Filter.',bot:'Botanische Kollektion',botDesc:'Pflanzenbasierte Produkte und aromatische Mischungen.',action:'Sortiment entdecken',news:'Innovationslabor',newsDesc:'Neue Pharmed-Produktideen, wissenschaftliche Ansätze und praktische Entwicklungsschritte.',teakicker:'PHARMED · KRÄUTERTEES',teatitle:'Kräutertees',tealead:'Sechs aromatische Kräutertees in horizontaler Schachtelgestaltung mit jeweils 20 Teebeuteln.',teachip1:'Deutsche Klassiker',teachip2:'Asiatisch inspiriert',extended:'Erweitertes Produktsortiment',more:'Weitere Produkte'},
 ar:{eyebrow:'فارميد · مجموعات المنتجات',title:'استكشف مجموعات منتجاتنا',subtitle:'تعرّف إلى منتجات التغذية والعافية بحسب الشكل والمكونات ونمط الحياة، واستعرض جميع الأنواع في مكان واحد.',men:'صحة الرجل',menDesc:'ست تركيبات بأقراص في شرائط بليستر للرجال البالغين.',all:'جميع المنتجات',allDesc:'كل مجموعات فارميد في كتالوج واحد قابل للبحث.',supp:'المكملات الغذائية والعافية',suppDesc:'التغذية والفيتامينات والمنتجات الوظيفية والمتخصصة.',blend:'خلطات الطاقة والغذاء',blendDesc:'16 خلطة من الحبوب والألياف والبروتينات النباتية.',tea:'شاي الأعشاب',teaDesc:'ستة أنواع مستوحاة من ألمانيا وآسيا، 20 كيس شاي لكل علبة.',animal:'تغذية الحيوانات',animalDesc:'ستة مفاهيم VetHerb للبحث والتطوير مع تصفية بحسب نوع الحيوان.',bot:'المجموعة النباتية',botDesc:'منتجات نباتية وخلطات عطرية.',action:'استعرض المجموعة',news:'مختبر الابتكار',newsDesc:'أفكار فارميد الجديدة ومسارات البحث وخطوات تطوير المنتجات.',teakicker:'فارميد · شاي الأعشاب',teatitle:'شاي الأعشاب',tealead:'مجموعة مستقلة تضم ستة أنواع من شاي الأعشاب بعبوات أفقية تحتوي كل منها على 20 كيساً.',teachip1:'أنواع ألمانية',teachip2:'مستوحى من آسيا',extended:'المجموعة الموسعة',more:'منتجات إضافية'}
};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const lang=()=>['en','de','ar'].includes(document.documentElement.lang)?document.documentElement.lang:'en';
const tx=()=>TXT[lang()];
const features=[
 {name:'men',href:'products.html?category=men',img:'mens-vigor-tribulus.png'},
 {name:'all',href:'all-products.html',img:'assets/pharmed-official-logo.webp'},
 {name:'supp',href:'products.html',img:'assets/new-products/vitamin-d3-k2-tablets.webp'},
 {name:'blend',href:'power-blends.html',img:'ragi-sunrise.webp'},
 {name:'tea',href:'herbal-teas.html',img:'chamomile.webp'},
 {name:'animal',href:'animal-nutrition.html',img:'pharmed-collections-assets/animal-nutrition/gut-balance.webp'},
 {name:'bot',href:'all-products.html?category=botanical',img:'botanical-balance-blend.webp'}
];
function collectionMarkup(){const t=tx();return '<section class="pm-collections" id="pm-featured-collections" aria-label="'+esc(t.title)+'"><div class="pm-eyebrow">'+esc(t.eyebrow)+'</div><h2>'+esc(t.title)+'</h2><p class="pm-lead">'+esc(t.subtitle)+'</p><div class="pm-collection-grid">'+features.map(f=>'<a class="pm-collection-card" href="'+f.href+'"><img loading="lazy" src="'+f.img+'" alt="'+esc(t[f.name])+'"><div class="pm-card-copy"><h3>'+esc(t[f.name])+'</h3><p>'+esc(t[f.name+'Desc'])+'</p><span class="pm-linktext">'+esc(t.action)+' →</span></div></a>').join('')+'</div><div class="pm-collections-footer"><span>'+esc(t.subtitle)+'</span><a href="industry-insights.html">'+esc(t.news)+' ↗</a></div></section>'}
function installCollectionSection(){const page=document.body.dataset.page; if(page!=='index'&&page!=='products')return;const main=document.getElementById('content');if(!main||!main.querySelector('section'))return;
 let section=main.querySelector('#pm-featured-collections');if(!section){const holder=document.createElement('div');holder.innerHTML=collectionMarkup();section=holder.firstElementChild;const hero=main.querySelector('.page-hero, .hero'); if(hero&&hero.nextSibling)main.insertBefore(section,hero.nextSibling);else main.insertBefore(section,main.firstChild)}else{
  if(section.dataset.pmLang!==lang()){const holder=document.createElement('div');holder.innerHTML=collectionMarkup();const fresh=holder.firstElementChild;section.replaceWith(fresh);section=fresh}
 }section.dataset.pmLang=lang();}
function normalizeTitles(){const t=tx();if(document.body.dataset.page==='ideas')document.title=t.extended+' | Pharmed';
 for(const a of document.querySelectorAll('#site-header a[href="ideas.html"],#site-footer a[href="ideas.html"]')){if(a.textContent!==t.more)a.textContent=t.more;}
 if(document.body.dataset.page==='ideas'){
  const h=document.querySelector('#content h1');if(h&&/future|zukunft|أفكار|future product/i.test(h.textContent))h.textContent=t.extended;
 }
}
function nav(){const t=tx();const nav=document.querySelector('#site-header .links');if(nav){for(const [href,key] of [['all-products.html','all'],['animal-nutrition.html','animal'],['industry-insights.html','news']]){let a=nav.querySelector('a[href="'+href+'"]');if(!a){a=document.createElement('a');a.href=href;a.className='pm-menu-link';nav.append(a)}if(a.textContent!==t[key])a.textContent=t[key]}}
 const footer=document.querySelector('#site-footer .footer-grid');if(footer&&!footer.querySelector('.pm-footer-links')){const div=document.createElement('div');div.className='pm-footer-links';footer.appendChild(div)}if(footer){const box=footer.querySelector('.pm-footer-links');const h='<a href="all-products.html">'+esc(t.all)+'</a> · <a href="animal-nutrition.html">'+esc(t.animal)+'</a> · <a href="industry-insights.html">'+esc(t.news)+'</a>';if(box&&box.innerHTML!==h)box.innerHTML=h}}
function legacyAnimalCategory(){
  if(document.body.dataset.page==='product'&&new URLSearchParams(location.search).get('id')==='animal-supplements'){
    location.replace('animal-nutrition.html');return;
  }
  for(const anchor of document.querySelectorAll('a[href="product.html?id=animal-supplements"]')){
    anchor.href='animal-nutrition.html';
    const img=anchor.querySelector('img');if(img){img.src='pharmed-collections-assets/animal-nutrition/gut-balance.webp';img.alt=tx().animal;}
  }
}
function teaHero(){if(document.body.dataset.page!=='herbal-teas')return;const main=document.getElementById('content');if(!main)return;const controls=main.querySelector('.ht-controls');if(!controls)return;const t=tx();let block=main.querySelector('.pm-tea-feature');if(block&&block.dataset.pmLang===lang())return;
 const h='<section class="pm-tea-feature" aria-label="'+esc(t.teatitle)+'"><div><span class="pm-kicker">'+esc(t.teakicker)+'</span><h1>'+esc(t.teatitle)+'</h1><p>'+esc(t.tealead)+'</p><span class="pm-chip">'+esc(t.teachip1)+'</span><span class="pm-chip">'+esc(t.teachip2)+'</span></div><img src="chamomile.webp" alt="'+esc(t.teatitle)+'"></section>';
 const holder=document.createElement('div');holder.innerHTML=h;const newBlock=holder.firstElementChild;newBlock.dataset.pmLang=lang();if(block)block.replaceWith(newBlock);else controls.before(newBlock);
}
let busy=false;function run(){if(busy)return;busy=true;try{nav();installCollectionSection();teaHero();normalizeTitles();legacyAnimalCategory()}finally{busy=false}}
function init(){if(!document.querySelector('link[href="pharmed-collections-v2.css"]')){const css=document.createElement('link');css.rel='stylesheet';css.href='pharmed-collections-v2.css';document.head.append(css)}run();
 const head=document.getElementById('site-header'),footer=document.getElementById('site-footer'),main=document.getElementById('content');
 // Respond to app.js initial render and language changes without observing our own text mutations.
 for(const el of [head,footer,main])if(el){new MutationObserver(()=>{if(!busy)queueMicrotask(run)}).observe(el,{childList:true,subtree:false})}
 document.addEventListener('click',e=>{if(e.target.closest?.('[data-lang]'))setTimeout(run,0)});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();



