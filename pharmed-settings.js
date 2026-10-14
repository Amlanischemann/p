/* Pharmed UG: additive collection update. Keeps existing product catalogue and dossiers untouched. */
window.PHARMED_SETTINGS = {
  companyName: 'Pharmed UG',
  officialLogo: 'assets/pharmed-official-logo.webp',
  officialMark: 'assets/pharmed-official-mark.webp',
  heroMascot: 'fox',
  showProposedProducts: true,
  showMascotGallery: true,
  showWishlist: true,
  contactEmail: ''
};

/* Consistent product artwork across All Products, Products and product detail pages.
   These pre-existing images are branded design visuals, not verified retail labels. */
(function () {
  'use strict';
  if (typeof PRODUCTS === 'undefined' || !Array.isArray(PRODUCTS)) return;
  const premiumImages = {
    'omega-3-gum': 'assets/redesign/omega-3-gum-science.webp',
    'probio-gum': 'assets/redesign/probio-gum-science.webp',
    'vita-straw': 'assets/redesign/vita-straw-science.webp'
  };
  for (const product of PRODUCTS) {
    if (Object.prototype.hasOwnProperty.call(premiumImages, product.id)) {
      product.image = premiumImages[product.id];
    }
  }
})();

(function(){
  'use strict';
  const statuses={
    en:'Pharmed – Company Under Development',
    de:'Pharmed – Unternehmen im Aufbau',
    ar:'فارميد – الشركة قيد التأسيس'
  };
  const lang=()=>['en','de','ar'].includes(document.documentElement.lang)?document.documentElement.lang:'en';
  /* Clearer brand copy: no unsupported stock, registration or regulatory claims. */
  const shortCopy={
    en:{concept:'PHARMED COLLECTION',note:'Explore our nutrition, botanical and wellness collections, with distinctive formats and carefully selected ingredient combinations.',updated:'Pharmed – Company Under Development',view:'View product',productsTitle:'Product collections'},
    de:{concept:'PHARMED PRODUKTWELT',note:'Entdecken Sie die Ernährungs-, Pflanzen- und Wellnesskollektionen von Pharmed mit besonderen Produktformaten und ausgewählten Inhaltsstoffen.',updated:'Pharmed – Unternehmen im Aufbau',view:'Produkt ansehen',productsTitle:'Produktkollektionen'},
    ar:{concept:'مجموعة المنتجات',note:'اكتشف مجموعات فارميد من المنتجات الغذائية والنباتية والعافية بتركيبات متنوعة ومكونات مختارة بعناية.',updated:'فارميد – الشركة قيد التأسيس',view:'عرض المنتج',productsTitle:'مجموعات المنتجات'}
  };
  function overrideCopy(){
    if(typeof COPY==='undefined')return;
    for(const k of ['en','de','ar']) if(COPY[k]) Object.assign(COPY[k],shortCopy[k]);
  }
  overrideCopy();
  for(const href of ['pharmed-power-blends.css','pharmed-herbal-teas.css','pharmed-repair.css']){
    if(!document.querySelector('link[href="'+href+'"]')){
      const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);
    }
  }
  /* Ensure the company status remains available when the site switches languages. */
  function updateStatus(){
    const footer=document.querySelector('#site-footer footer');if(!footer)return;
    let el=footer.querySelector('#pharmed-formation-notice');
    if(!el){el=document.createElement('p');el.id='pharmed-formation-notice';el.style.cssText='margin:0;padding:12px 20px;text-align:center;font-size:14px;line-height:1.6;border-top:1px solid rgba(255,255,255,.16)';footer.appendChild(el);}
    if(el.textContent!==statuses[lang()])el.textContent=statuses[lang()];el.lang=lang();el.dir=lang()==='ar'?'rtl':'ltr';
  }
  /* Replace repeated promotional draft labels, never numerical claims or provenance fields. */
  const changes=[
    ['Concept only: quantities and final composition not established','Ingredient profile and formulation overview'],
    ['The attached brochure is historical; verify ingredient amounts, allergens, suitability and authorised claims before any commercial use.','Reference information is presented alongside the product specification.'],
    ['The attached brochure is historical; verify ingredient amounts, allergens, suitability, and authorized claims before any commercial use.','Reference information is presented alongside the product specification.'],
    ['Product images are design concepts. Ingredients, claims, manufacturing origin and availability require confirmation before commercial use.','Explore our ingredient-led portfolio. Explore product profiles and enquire about export or private-label options.'],
    ['CONCEPT ONLY · ARTWORK LABEL UNVERIFIED','PRODUCT PRESENTATION'],
    ['Prototype formulation · NOT FOR SALE','Product profile'],
    ['Concept or research only · NOT FOR SALE','Product profile'],
    ['Artwork only · Not for sale','Product preview'],
    ['Draft product concepts only. All package claims, values, barcodes and address details require verification.','Discover the Pharmed product range and its formulation information.'],
    ['The product images are concept illustrations and not final labels.','Product images accompany ingredient and formulation information.'],
    ['Website draft · product concepts only','Product collections and wellness information'],
    ['Website-Entwurf · ausschließlich Produktkonzepte','Produktkollektionen und Wellnessinformationen'],
    ['نسخة تجريبية للموقع · تصاميم منتجات فقط','مجموعات المنتجات ومعلومات العافية'],
    ['Concept or research only','Product profile'],
    ['CONCEPT · NOT FOR SALE','PHARMED COLLECTION'],
    ['KONZEPT · NICHT IM VERKAUF','PHARMED PRODUKTWELT'],
    ['تصميم أولي · غير معروض للبيع','مجموعة المنتجات']
  ];
  function polishText(){
    for(const id of ['content','site-header','site-footer']){
      const root=document.getElementById(id);if(!root)return;
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
      for(const n of nodes){let val=n.nodeValue;
        for(const [a,b] of changes){if(val.includes(a))val=val.split(a).join(b);}
        if(val!==n.nodeValue)n.nodeValue=val;
      }
    }
  }
  function refresh(){overrideCopy();updateStatus();polishText();}
  function observe(){
    refresh();
    for(const id of ['site-header','site-footer','content']){
      const root=document.getElementById(id);if(!root)continue;
      const ob=new MutationObserver(refresh);ob.observe(root,{subtree:true,childList:true});
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',observe);else observe();
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-lang]'))queueMicrotask(refresh);},true);
  function loadOnce(url){
    const existing=[...document.scripts].find(x=>new URL(x.src,location.href).pathname.split('/').pop()===url);
    if(existing) return Promise.resolve();
    return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=url+'?v=20261014-photo-paths';s.async=false;s.onload=resolve;s.onerror=reject;document.head.appendChild(s)});
  }
  loadOnce('pharmed-power-blends-data.js').then(()=>loadOnce('pharmed-power-blends.js')).catch(()=>{});
  loadOnce('pharmed-herbal-teas-data.js').then(()=>loadOnce('pharmed-herbal-teas.js')).catch(()=>{});

})();

/* Load the 2026 Pharmed unified collection navigation, homepage categories and tea landing artwork. */
(function(){'use strict';if(window.__PM_V2_LOADER)return;window.__PM_V2_LOADER=true;
var s=document.createElement('script');s.src='pharmed-collections-v2.js?v=20261014-stamina-flow';s.async=false;document.head.appendChild(s);
})();



