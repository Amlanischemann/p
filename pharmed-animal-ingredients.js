/* Pharmed VetHerb: preliminary ingredient-development matrices, not feeding formulas. */
(() => {
'use strict';
const candidates={
'liver-support':[
['Milk-thistle seed (Silybum marianum)','Mariendistelsamen','بذور شوك الحليب','Botanical material'],['Choline source (form TBD)','Cholinquelle (Form offen)','مصدر الكولين','Nutritional component'],['Betaine','Betain','البيتين','Nutritional component'],['Vitamin E source','Vitamin-E-Quelle','مصدر فيتامين E','Micronutrient']],
'gut-balance':[
['Chicory inulin','Chicorée-Inulin','إينولين الهندباء البرية','Plant fibre'],['Yeast mannan-oligosaccharides (MOS)','Hefe-MOS','مانان أوليغوسكاريد الخميرة','Yeast fraction'],['Yeast beta-glucans','Hefe-Beta-Glucane','بيتا غلوكانات الخميرة','Yeast fraction'],['Pectin-rich plant fibre','Pektinreiche Pflanzenfaser','ألياف غنية بالبكتين','Plant fibre']],
'calm-support':[
['L-tryptophan','L-Tryptophan','إل-تريبتوفان','Amino acid'],['Magnesium source','Magnesiumquelle','مصدر المغنيسيوم','Mineral'],['Thiamine (vitamin B1)','Thiamin (Vitamin B1)','الثيامين','Vitamin'],['Plant-fibre carrier','Pflanzenfaser-Träger','حامل من الألياف','Feed carrier']],
'immune-force':[
['Vitamin E source','Vitamin-E-Quelle','مصدر فيتامين E','Vitamin'],['Zinc source','Zinkquelle','مصدر الزنك','Mineral'],['Selenium source','Selenquelle','مصدر السيلينيوم','Mineral'],['Yeast beta-glucans','Hefe-Beta-Glucane','بيتا غلوكانات الخميرة','Yeast fraction']],
'para-balance':[
['Chicory-root fibre','Chicorée-Wurzelfaser','ألياف جذور الهندباء البرية','Feed fibre'],['Yeast MOS','Hefe-MOS','مانان أوليغوسكاريد الخميرة','Yeast fraction'],['Beet pulp fibre','Rübenschnitzelfaser','ألياف لب الشمندر','Feed fibre'],['Species-specific mineral premix','Tierartspezifischer Mineralmix','خليط معادن حسب الحيوان','Mineral']],
'respira-comfort':[
['Vitamin E source','Vitamin-E-Quelle','مصدر فيتامين E','Vitamin'],['Algal omega-3 oil','Omega-3-Algenöl','زيت أوميغا 3 الطحلبي','Fatty acids'],['Vitamin C source','Vitamin-C-Quelle','مصدر فيتامين C','Vitamin'],['Botanical polyphenol fraction (plant TBD)','Pflanzliche Polyphenole (Quelle offen)','بوليفينولات نباتية','Botanical material']]
};
const UI={en:['Proposed ingredients table','Potential ingredient','Research category','Quantity / inclusion','Verification needed','Not established','These are only formulation-development candidates. Final composition, percentages, inclusion rate, suitability and feeding directions have not been established. No animal feeding is recommended.','Check feed-law status, species safety, quality, specifications and total diet.'],de:['Tabelle möglicher Inhaltsstoffe','Möglicher Inhaltsstoff','Forschungsbereich','Menge / Einsatzrate','Erforderliche Prüfung','Nicht festgelegt','Nur Kandidaten für die Rezepturentwicklung. Endrezeptur, Prozentangaben, Einsatzmenge, Eignung und Fütterungsempfehlung sind nicht bestätigt. Keine Anwendung am Tier.','Futtermittelrecht, Tierart-Sicherheit, Qualität, Spezifikationen und Gesamtration prüfen.'],ar:['جدول المكونات المقترحة','المكوّن المحتمل','الفئة البحثية','الكمية / نسبة الإضافة','التحقق المطلوب','غير محددة','هذه مكونات محتملة للبحث والتطوير فقط. لم تُعتمد التركيبة أو النسب أو جرعات التغذية أو ملاءمة الأنواع. لا يُنصح بإعطائها للحيوانات.','يجب التحقق من قانون الأعلاف والسلامة لكل نوع والمواصفات والجودة والغذاء الكامل.']};
const css=`.pa-ingredient-box{margin-top:20px}.pa-ingredient-box h2{font:normal 26px Georgia,serif;color:#214a34}.pa-ingredient-scroll{overflow-x:auto;max-width:100%;border:1px solid #d4e2d5;border-radius:9px}.pa-ingredient-table{width:100%;min-width:650px;border-collapse:collapse;font-size:13px;text-align:start}.pa-ingredient-table th,.pa-ingredient-table td{padding:11px;text-align:start;border-bottom:1px solid #e1e9e0;vertical-align:top;line-height:1.5}.pa-ingredient-table thead{background:#e8f2e7;color:#204a35}.pa-ingredient-table tbody tr:nth-child(even){background:#f7faf6}.pa-ingredient-table tbody th{font-weight:700}.pa-ingredient-warning{font-size:13px;line-height:1.65;padding:11px 13px;border-inline-start:3px solid #ae8c47;background:#fff9ec;color:#65512f}.pa-ingredient-source{font-size:12px}.pa-ingredient-source a{color:#126044;text-decoration:underline}`;
if(!document.getElementById('pa-ingredient-css')){let style=document.createElement('style');style.id='pa-ingredient-css';style.textContent=css;document.head.append(style);}
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function render(){
 const id=new URLSearchParams(location.search).get('product');if(!candidates[id])return;
 const lang=['en','de','ar'].includes(document.documentElement.lang)?document.documentElement.lang:'en';const k=lang==='de'?1:lang==='ar'?2:0;const t=UI[lang];
 const target=document.querySelector('.pa-detail-grid > div:last-child');if(!target)return;
 target.querySelector('#pa-ingredients')?.remove();
 const html=candidates[id].map(r=>`<tr><th scope="row">${escape(r[k])}</th><td>${escape(r[3])}</td><td>${escape(t[5])}</td><td>${escape(t[7])}</td></tr>`).join('');
 const section=document.createElement('section');section.id='pa-ingredients';section.className='pa-checks pa-ingredient-box';section.innerHTML=`<h2>${escape(t[0])}</h2><div class="pa-ingredient-scroll" role="region" tabindex="0" aria-label="${escape(t[0])}"><table class="pa-ingredient-table"><thead><tr><th scope="col">${escape(t[1])}</th><th scope="col">${escape(t[2])}</th><th scope="col">${escape(t[3])}</th><th scope="col">${escape(t[4])}</th></tr></thead><tbody>${html}</tbody></table></div><p class="pa-ingredient-warning">${escape(t[6])}</p><p class="pa-ingredient-source"><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32009R0767" target="_blank" rel="noopener noreferrer">EU feed labelling law</a> · <a href="https://food.ec.europa.eu/food-safety/animal-feed/feed-additives/legislation-feed-additives_en" target="_blank" rel="noopener noreferrer">EU feed additives</a></p>`;
 const blocks=target.querySelectorAll('.pa-checks');if(blocks.length>1)blocks[1].before(section);else target.append(section);
}
let busy=false;
function schedule(){if(busy)return;busy=true;queueMicrotask(()=>{busy=false;render()});}
function init(){render();const root=document.getElementById('content');if(root)new MutationObserver(schedule).observe(root,{childList:true,subtree:false});document.addEventListener('click',e=>{if(e.target.closest?.('[data-lang]'))setTimeout(render,0)});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
