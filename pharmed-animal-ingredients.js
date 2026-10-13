/* Pharmed VetHerb | multilingual proposed ingredient compositions for six concepts. */
(()=>{'use strict';
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

const translations={
 en:{title:'Ingredients & Composition',ingredient:'Ingredient',category:'Ingredient class',purpose:'Formulation role',amount:'Amount per serving',notset:'To be determined',note:'Illustrative ingredient concept. Final composition and inclusion quantities will be provided when the species-specific formulation is established.',roles:['Botanical component','Nutrient source','Fibre component','Functional nutritional component']},
 de:{title:'Inhaltsstoffe & Zusammensetzung',ingredient:'Inhaltsstoff',category:'Bestandteiltyp',purpose:'Rolle in der Rezeptur',amount:'Menge pro Portion',notset:'In Entwicklung',note:'Beispielhafte Inhaltsstoffauswahl. Die endgültige Zusammensetzung und Einsatzmengen werden mit der tierartspezifischen Rezeptur festgelegt.'},
 ar:{title:'المكونات والتركيب',ingredient:'المكوّن',category:'نوع المكوّن',purpose:'دوره في التركيبة',amount:'الكمية لكل حصة',notset:'قيد التطوير',note:'مكونات مقترحة لتطوير المنتج. سيتم تحديد التركيبة النهائية والكميات وفقاً للنوع الحيواني المستهدف.'}
};
const categories={
 'Botanical material':{de:'Pflanzlicher Rohstoff',ar:'مكوّن نباتي'},
 'Nutritional component':{de:'Ernährungsbezogener Bestandteil',ar:'مكوّن غذائي'},
 'Micronutrient':{de:'Mikronährstoff',ar:'عنصر غذائي دقيق'},
 'Plant fibre':{de:'Pflanzenfaser',ar:'ألياف نباتية'},
 'Yeast fraction':{de:'Hefebestandteil',ar:'مكوّن خميرة'},
 'Amino acid':{de:'Aminosäure',ar:'حمض أميني'},
 'Mineral':{de:'Mineralstoff',ar:'معدن'},
 'Vitamin':{de:'Vitamin',ar:'فيتامين'},
 'Feed carrier':{de:'Futtermittelträger',ar:'مادة حاملة'},
 'Feed fibre':{de:'Futterfaser',ar:'ألياف علفية'},
 'Fatty acids':{de:'Fettsäuren',ar:'أحماض دهنية'}
};
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
window.PHARMED_VETHERB_INGREDIENTS_RENDER=(id,requestedLang)=>{
 const rows=candidates[id];if(!rows)return '';
 const lang=['en','de','ar'].includes(requestedLang)?requestedLang:'en',tr=translations[lang],col=lang==='de'?1:lang==='ar'?2:0;
 const body=rows.map(r=>'<tr><th scope="row">'+esc(r[col])+'</th><td>'+esc(lang==='en'?r[3]:(categories[r[3]]?.[lang]||r[3]))+'</td><td>'+esc(tr.notset)+'</td></tr>').join('');
 return '<section class="pa-checks pa-ingredient-box" id="pa-ingredients" aria-labelledby="pa-ingredients-title"><h2 id="pa-ingredients-title">'+esc(tr.title)+'</h2><div class="pa-ingredient-scroll" role="region" tabindex="0" aria-label="'+esc(tr.title)+'"><table class="pa-ingredient-table"><thead><tr><th scope="col">'+esc(tr.ingredient)+'</th><th scope="col">'+esc(tr.category)+'</th><th scope="col">'+esc(tr.amount)+'</th></tr></thead><tbody>'+body+'</tbody></table></div><p class="pa-ingredient-footnote">'+esc(tr.note)+'</p></section>';
};
})();
