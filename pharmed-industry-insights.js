/* Pharmed Innovation Lab, 12 October 2026. Original product R&D ideas, not a news feed. */
(() => {
  'use strict';
  if (document.body.dataset.page !== 'industry-insights') return;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const languages = ['en','de','ar'];
  const lang = () => languages.includes(document.documentElement.lang) ? document.documentElement.lang : 'en';
  const read = (item, field) => (item[field] && (item[field][lang()] || item[field].en)) || '';
  const copy = {
    en: {
      brow:'PHARMED · PRODUCT INNOVATION', title:'Innovation Lab',
      sub:'Tomorrow’s food and botanical products start with a better question. Explore original Pharmed ideas, practical formulation experiments and responsible routes from ingredient to finished product.',
      updated:'Research directions · October 2026', explore:'Explore opportunities', catalogue:'Explore all products',
      signalTitle:'What is changing in food & wellness?', signalDesc:'Research signals inform the questions. The product ideas below are Pharmed proposals, not announcements by publishers.',
      s1:'Protein + fibre together',s1d:'2026 natural-food reporting highlights interest in protein-rich formats and fibre-forward foods. The opportunity is to improve flavour, texture and everyday convenience.',
      s2:'Heritage ingredients, modern convenience',s2d:'Traditional grains and botanicals offer compelling food stories when sourced transparently and processed for consistent taste and safety.',
      s3:'Evidence and traceability by design',s3d:'Ingredient novelty, nutrition claims, microbiological safety and source documentation must be resolved before a formulation can move toward commercial labelling.',
      featured:'Three directions to explore first', featuredIntro:'Built around the current Pharmed Power Blends, herbal teas and nutrition ranges.',
      pipeline:'Product opportunity library', pipelineIntro:'Select a research direction. Each card includes the experiment and the question that should be answered first.',
      all:'All',grains:'Grains & fibre',tea:'Herbal & beverages',protein:'Nutrition & protein',quality:'Quality & technology',
      search:'Search ideas, ingredients or methods…',experiment:'Product innovation focus',gate:'Quality focus',exploreRange:'See related range',
      none:'No matching opportunities. Select another research area.',
      methodTitle:'How Pharmed evaluates new ideas',methodIntro:'Every strong idea needs clear evidence, a workable manufacturing process and a transparent product specification.',
      gate1:'1 · Screen ingredients',gate1d:'Confirm identity, supplier documentation, allergen status, EU food status and relevant use restrictions.',
      gate2:'2 · Prototype the experience',gate2d:'Make small batches and test sensory quality, dispersibility, preparation, process compatibility and packaging.',
      gate3:'3 · Verify safety & quality',gate3d:'Assess contaminants, microbes, stability, nutrition values and allowed communications as appropriate.',
      gate4:'4 · Prepare the product file',gate4d:'Approve specifications, traceability, required labels and supplier records before announcing any retail offer.',
      refs:'Sources informing the research direction', refsIntro:'Selected primary regulatory guidance and 2026 market analysis. These inform investigation; they do not prove an individual Pharmed formula works.',
      ref1:'2026 natural products and ingredient trends',ref2:'EU Novel Food Status Catalogue',ref3:'EU rules for nutrition and health claims',
      disclosure:'Pharmed is a business in preparation. Items in the Innovation Lab are proposed development priorities, not claims of clinical benefit, certification or product availability.',
      ctaTitle:'Explore the current Pharmed collections',ctaText:'Browse Power Blends, Herbal Teas and the combined product catalogue for established themes and packaging formats.',
      browseBlends:'Power Blends',browseTeas:'Herbal Teas',browseAll:'All Products',
      phase:'Research opportunity'
    },
    de: {
      brow:'PHARMED · PRODUKTINNOVATION',title:'Innovationslabor',
      sub:'Die Lebensmittel und Pflanzenprodukte von morgen beginnen mit der richtigen Forschungsfrage. Entdecken Sie eigenständige Pharmed-Ideen, praxisnahe Rezepturversuche und verantwortungsvolle Entwicklungspfade.',
      updated:'Forschungsansätze · Oktober 2026',explore:'Ideen entdecken',catalogue:'Alle Produkte ansehen',
      signalTitle:'Was verändert Ernährung und Wellness?',signalDesc:'Markt- und Forschungsimpulse liefern Fragen. Die Produktideen unten sind Pharmed-Vorschläge, keine Ankündigungen der Quellen.',
      s1:'Protein und Ballaststoffe kombinieren',s1d:'Marktanalysen 2026 zeigen Interesse an proteinreichen und ballaststoffbetonten Lebensmitteln. Entscheidend sind Geschmack, Textur und Alltagstauglichkeit.',
      s2:'Traditionelle Rohstoffe, moderne Formate',s2d:'Herkunftsgetreide und pflanzliche Zutaten sind interessant, wenn Lieferketten, Verarbeitung, Geschmack und Sicherheit nachvollziehbar sind.',
      s3:'Evidenz und Rückverfolgbarkeit',s3d:'Novel-Food-Status, zulässige Angaben, mikrobiologische Sicherheit und Lieferantendokumente müssen vor der Etikettierung geprüft werden.',
      featured:'Drei Schwerpunkte für den Start',featuredIntro:'Ausgehend von Pharmed Power Blends, Kräutertees und Ernährung.',
      pipeline:'Bibliothek der Produktideen',pipelineIntro:'Wählen Sie ein Forschungsfeld. Jede Karte zeigt ein Experiment und einen zentralen Prüfschritt.',
      all:'Alle',grains:'Getreide & Ballaststoffe',tea:'Kräuter & Getränke',protein:'Ernährung & Protein',quality:'Qualität & Technologie',
      search:'Ideen, Zutaten oder Verfahren suchen…',experiment:'Fokus Produktinnovation',gate:'Qualitätsfokus',exploreRange:'Passendes Sortiment',
      none:'Keine passenden Ideen gefunden. Bitte anderen Bereich wählen.',
      methodTitle:'Wie Pharmed neue Ideen bewertet',methodIntro:'Eine gute Idee benötigt belastbare Grundlagen, ein geeignetes Verfahren und klare Produktspezifikationen.',
      gate1:'1 · Rohstoffe prüfen',gate1d:'Identität, Lieferantendokumente, Allergene, EU-Lebensmittelstatus und Verwendungsbeschränkungen prüfen.',
      gate2:'2 · Produkt erleben',gate2d:'Kleinchargen herstellen und Sensorik, Löslichkeit, Zubereitung, Prozess und Verpackung beurteilen.',
      gate3:'3 · Sicherheit und Qualität',gate3d:'Je nach Produkt Kontaminanten, Mikrobiologie, Haltbarkeit, Nährwerte und zulässige Angaben untersuchen.',
      gate4:'4 · Produktakte vorbereiten',gate4d:'Spezifikationen, Rückverfolgbarkeit, erforderliche Kennzeichnung und Lieferantennachweise freigeben.',
      refs:'Quellen als Forschungsgrundlage',refsIntro:'Regulatorische Primärquellen und Marktanalyse aus 2026. Daraus folgt keine Wirksamkeit einzelner Pharmed-Rezepturen.',
      ref1:'Naturprodukte und Zutatentrends 2026',ref2:'EU Novel-Food-Statuskatalog',ref3:'EU-Recht zu Nährwert- und Gesundheitsangaben',
      disclosure:'Pharmed befindet sich im Aufbau. Die Ideen im Innovationslabor sind Entwicklungsschwerpunkte und keine Zusagen zu klinischer Wirksamkeit, Zertifizierung oder Verfügbarkeit.',
      ctaTitle:'Entdecken Sie die Pharmed-Produktwelten',ctaText:'Power Blends, Kräutertees und den Gesamtkatalog mit Produkten und Verpackungsformaten ansehen.',
      browseBlends:'Power Blends',browseTeas:'Kräutertees',browseAll:'Alle Produkte',phase:'Forschungsansatz'
    },
    ar: {
      brow:'فارميد · ابتكار المنتجات',title:'مختبر الابتكار',
      sub:'تبدأ منتجات الغذاء والأعشاب المستقبلية بسؤال بحثي جيد. اكتشف أفكار فارميد الخاصة وتجارب التركيب المقترحة وخطوات تطوير مسؤولة من المادة الخام إلى المنتج.',
      updated:'اتجاهات بحثية · أكتوبر 2026',explore:'استكشف الأفكار',catalogue:'عرض جميع المنتجات',
      signalTitle:'ما الذي يتغير في قطاع الغذاء والعافية؟',signalDesc:'الاتجاهات البحثية والسوقية تساعد في تحديد الأسئلة، أما الأفكار أدناه فهي مقترحات أصلية من فارميد وليست إعلانات من الجهات المرجعية.',
      s1:'دمج البروتين مع الألياف',s1d:'تُظهر تحليلات 2026 اهتماماً بالأغذية الغنية بالبروتين والألياف. تكمن الفرصة في تحسين الطعم والقوام وسهولة التحضير اليومي.',
      s2:'محاصيل تراثية بأشكال حديثة',s2d:'تتميز الحبوب التقليدية والمكونات النباتية عندما تكون مصادرها واضحة وتُعالج لتحقيق مذاق وسلامة وجودة متسقة.',
      s3:'الأدلة والتتبع منذ التصميم',s3d:'يجب التحقق من وضع المكون الغذائي والادعاءات المسموحة والسلامة الميكروبية ووثائق المورد قبل إعداد الملصق التجاري.',
      featured:'ثلاث أولويات للبحث',featuredIntro:'مرتبطة بخلطات فارميد وشاي الأعشاب والتغذية.',
      pipeline:'مكتبة فرص تطوير المنتجات',pipelineIntro:'اختر مجالاً بحثياً؛ لكل فكرة تجربة أولى وسؤال فني يجب الإجابة عنه.',
      all:'الكل',grains:'الحبوب والألياف',tea:'الأعشاب والمشروبات',protein:'التغذية والبروتين',quality:'الجودة والتقنية',
      search:'ابحث عن فكرة أو مكون أو تقنية…',experiment:'محور ابتكار المنتج',gate:'التركيز على الجودة',exploreRange:'استكشف المجموعة المرتبطة',
      none:'لا توجد أفكار مطابقة. اختر فئة أخرى.',
      methodTitle:'كيف تقيم فارميد الأفكار الجديدة؟',methodIntro:'الفكرة الواعدة تتطلب أساساً علمياً وعملية تصنيع مناسبة ومواصفة منتج واضحة.',
      gate1:'1 · التحقق من المواد الخام',gate1d:'الهوية ووثائق المورد والمسببات التحسسية والوضع القانوني الأوروبي وقيود الاستعمال.',
      gate2:'2 · تطوير النموذج الأولي',gate2d:'دفعات صغيرة لاختبار الطعم والتجانس والتحضير وإمكانية التصنيع والتعبئة.',
      gate3:'3 · تقييم السلامة والجودة',gate3d:'فحص الملوثات والميكروبات والثبات والقيم الغذائية والادعاءات المسموحة حسب المنتج.',
      gate4:'4 · إعداد ملف المنتج',gate4d:'اعتماد المواصفات والتتبع والبطاقات المطلوبة ومستندات المورد قبل الإعلان عن التوفر.',
      refs:'مصادر توجه البحث',refsIntro:'مصادر أوروبية تنظيمية وتحليل سوق لعام 2026. لا تعني هذه المعلومات إثبات فعالية تركيبة فارميد بعينها.',
      ref1:'اتجاهات المنتجات الطبيعية والمكونات 2026',ref2:'فهرس الاتحاد الأوروبي للأغذية الجديدة',ref3:'قواعد الاتحاد الأوروبي للادعاءات الغذائية والصحية',
      disclosure:'فارميد مشروع قيد التأسيس. أفكار مختبر الابتكار أولويات للتطوير وليست ادعاءات بفعالية سريرية أو اعتماد أو توافر تجاري.',
      ctaTitle:'استكشف مجموعات فارميد الحالية',ctaText:'تصفح خلطات الحبوب وشاي الأعشاب والكتالوج الموحد لمنتجات فارميد.',
      browseBlends:'خلطات الحبوب',browseTeas:'شاي الأعشاب',browseAll:'جميع المنتجات',phase:'فرصة بحثية'
    }
  };
  const ideas = [
    {id:'heritage-bowl',cat:'grains',image:'ragi-sunrise.webp',href:'power-blends.html',
      name:{en:'Heritage Grain Breakfast 2.0',de:'Traditionsgetreide-Frühstück 2.0',ar:'فطور الحبوب التراثية 2.0'},
      summary:{en:'Ragi, amaranth and heat-treated oat in a quick-preparation bowl with a familiar flavour profile.',de:'Ragi, Amaranth und thermisch behandelter Hafer als schnell zubereitbare Frühstücksschale.',ar:'الراجي والأمارانث والشوفان المعالج حرارياً في وجبة فطور سريعة التحضير.'},
      test:{en:'Compare 3 ratios for texture, mouthfeel and rehydration.',de:'Drei Mischungsverhältnisse hinsichtlich Textur und Quellfähigkeit vergleichen.',ar:'مقارنة ثلاث نسب تركيبية من حيث القوام وإعادة الترطيب.'},
      risk:{en:'Validated heat treatment, allergen cross-contact and nutrition testing.',de:'Validierte Erhitzung, Allergenkreuzkontakt und Nährwertanalytik.',ar:'التحقق من المعالجة الحرارية والتلامس التحسسي والتحليل الغذائي.'}},
    {id:'dual-fibre',cat:'grains',image:'psyllium-citrus.webp',href:'power-blends.html',
      name:{en:'Dual-Fibre Citrus Mix',de:'Zitrus-Ballaststoff-Duo',ar:'مزيج ألياف الحمضيات المزدوج'},
      summary:{en:'A food-format powder combining psyllium husk and citrus fibre with a fruit-led taste.',de:'Pulvermischung aus Flohsamenschalen und Zitrusfaser mit fruchtbetontem Geschmack.',ar:'مسحوق غذائي يجمع قشور السيليوم وألياف الحمضيات بطعم فاكهي.'},
      test:{en:'Measure viscosity and dispersion at realistic serving concentrations.',de:'Viskosität und Dispergierbarkeit unter realistischen Portionsbedingungen messen.',ar:'قياس اللزوجة والتشتت عند تراكيز الاستعمال الواقعية.'},
      risk:{en:'Swallowing precautions, water instructions and permitted claims.',de:'Schluckhinweise, Wasserempfehlungen und zulässige Angaben.',ar:'احتياطات البلع وتناول الماء والادعاءات المسموح بها.'}},
    {id:'protein',cat:'protein',image:'active-protein.webp',href:'power-blends.html',
      name:{en:'Protein + Whole-Grain Fusion',de:'Protein-Vollkorn-Fusion',ar:'مزيج البروتين والحبوب الكاملة'},
      summary:{en:'Plant-protein shakes combining familiar grains, cocoa and balanced flavour design.',de:'Pflanzliche Proteinshakes mit Getreide, Kakao und sensorisch abgestimmtem Geschmack.',ar:'مشروبات بروتين نباتي بالحبوب والكاكاو ونكهة متوازنة.'},
      test:{en:'Screen protein solubility, sedimentation and consumer sensory acceptance.',de:'Proteinlöslichkeit, Sedimentation und sensorische Akzeptanz prüfen.',ar:'فحص ذوبان البروتين والترسب والتقبل الحسي.'},
      risk:{en:'Measured protein content, allergens and amino-acid suitability.',de:'Analysierter Proteingehalt, Allergene und Aminosäureprofil.',ar:'قياس البروتين والمسببات التحسسية وملاءمة الأحماض الأمينية.'}},
    {id:'tea-cold',cat:'tea',image:'hibiscus.webp',href:'herbal-teas.html',
      name:{en:'Botanical Cold Infusion Sachets',de:'Botanische Cold-Infusion-Beutel',ar:'أكياس منقوع الأعشاب البارد'},
      summary:{en:'Hibiscus and fruit-forward infusion formats for convenient chilled beverages.',de:'Hibiskus und fruchtige Aufgussmischungen für gekühlte Getränke.',ar:'خلطات الكركديه والفواكه لتحضير مشروبات مبردة بسهولة.'},
      test:{en:'Compare hot-brew-then-chill with a validated cold-preparation process.',de:'Heißaufguss mit anschließender Kühlung und validiertes Kaltverfahren vergleichen.',ar:'مقارنة النقع الساخن ثم التبريد مع طريقة تحضير بارد معتمدة.'},
      risk:{en:'Microbiological safety of cold preparation and accurate brewing directions.',de:'Mikrobiologische Sicherheit bei Kaltzubereitung und korrekte Ziehanleitung.',ar:'السلامة الميكروبية للتحضير البارد وتعليمات النقع الصحيحة.'}},
    {id:'moringa-herb',cat:'tea',image:'moringa.webp',href:'herbal-teas.html',
      name:{en:'Moringa–Lemongrass Aroma Series',de:'Moringa-Zitronengras-Aromenlinie',ar:'سلسلة المورينغا وحشيشة الليمون'},
      summary:{en:'Single-herb and paired botanical teas with clear origin and identity information.',de:'Einzelkräuter- und Kombinationsaufgüsse mit transparenter Herkunft und Identität.',ar:'شاي عشبي منفرد أو مركب مع توضيح المنشأ وهوية النباتات.'},
      test:{en:'Develop sensory panels for bitter notes, aroma retention and brewing consistency.',de:'Sensorik für Bitterkeit, Aromastabilität und gleichmäßige Extraktion entwickeln.',ar:'اختبارات حسية للمرارة وثبات النكهة واتساق الاستخلاص.'},
      risk:{en:'Botanical identity, contaminants and EU status for the intended use.',de:'Pflanzenidentität, Schadstoffe und EU-Status der beabsichtigten Verwendung.',ar:'هوية النباتات والملوثات والوضع الأوروبي للاستعمال المقصود.'}},
    {id:'fermented-grain',cat:'grains',image:'amaranth-cacao.webp',href:'power-blends.html',
      name:{en:'Fermented-Grain Breakfast',de:'Fermentiertes Getreidefrühstück',ar:'فطور الحبوب المخمرة'},
      summary:{en:'Investigate controlled fermentation as a processing step for grain-based breakfast mixes.',de:'Kontrollierte Fermentation als Verfahrensschritt für Getreide-Frühstücksmischungen untersuchen.',ar:'دراسة التخمير المضبوط كخطوة تصنيع لخلطات فطور الحبوب.'},
      test:{en:'Compare defined starter cultures, acidity, sensory profile and shelf life.',de:'Definierte Starterkulturen, Säuregrad, Sensorik und Haltbarkeit vergleichen.',ar:'مقارنة البادئات الميكروبية والحموضة والطعم وفترة الثبات.'},
      risk:{en:'Microbial control, process validation and ingredient regulatory status.',de:'Mikrobiologische Kontrolle, Prozessvalidierung und rechtlicher Rohstoffstatus.',ar:'التحكم الميكروبي وتوثيق العملية والوضع القانوني للمكونات.'}},
    {id:'protein-snack',cat:'protein',image:'cocoa-hazelnut-energy.webp',href:'power-blends.html',
      name:{en:'Date–Cocoa Nutrient Shake',de:'Dattel-Kakao-Nährshake',ar:'مخفوق التمر والكاكاو الغذائي'},
      summary:{en:'An energy-containing grain, nut and date drink mix designed around natural flavour.',de:'Getreide-Nuss-Dattel-Getränkepulver mit natürlich geprägtem Geschmack.',ar:'مزيج شراب من الحبوب والمكسرات والتمر بطعم طبيعي.'},
      test:{en:'Compare fat oxidation, powder flow and perceived sweetness during shelf life.',de:'Fettoxidation, Fließfähigkeit und wahrgenommene Süße über die Haltbarkeit testen.',ar:'قياس أكسدة الدهون وانسيابية المسحوق وحلاوته أثناء التخزين.'},
      risk:{en:'Nut allergens, food labelling and accurate energy calculations.',de:'Nussallergene, Kennzeichnung und korrekte Energieberechnung.',ar:'حساسية المكسرات ومتطلبات الملصق والحساب الصحيح للطاقة.'}},
    {id:'traceable',cat:'quality',image:'ingredient-passport.svg',href:'quality.html',
      name:{en:'Digital Ingredient Passport',de:'Digitaler Rohstoffpass',ar:'جواز المادة الخام الرقمي'},
      summary:{en:'Build an internal source-to-batch record for botanical identity, certificates and traceability.',de:'Interne digitale Rückverfolgung für Pflanzenidentität, Zertifikate und Chargen.',ar:'سجل رقمي داخلي يربط هوية النبات والشهادات بالدفعات.'},
      test:{en:'Pilot batch-level ingredient records with two suppliers and one finished product.',de:'Chargendaten mit zwei Lieferanten und einem Fertigprodukt testen.',ar:'تجربة سجلات دفعات مع موردين اثنين ومنتج نهائي واحد.'},
      risk:{en:'Document authenticity, controlled access and traceability accuracy.',de:'Dokumentenechtheit, Zugriffssteuerung und korrekte Rückverfolgung.',ar:'صحة الوثائق وضبط الوصول ودقة التتبع.'}},
    {id:'ai-label',cat:'quality',image:'assets/pharmed-official-logo.webp',href:'quality.html',
      name:{en:'AI-Assisted Label Preflight',de:'KI-gestützte Etikettenvorprüfung',ar:'مراجعة أولية للملصقات بمساعدة الذكاء الاصطناعي'},
      summary:{en:'A controlled checklist that flags missing label fields and unsupported claim wording before expert review.',de:'Eine kontrollierte Prüfliste, die fehlende Pflichtangaben und riskante Aussagen vor der Fachprüfung markiert.',ar:'قائمة فحص ترصد البيانات الناقصة والادعاءات غير المدعومة قبل مراجعة الخبير.'},
      test:{en:'Benchmark results against human review across 20 anonymized sample labels.',de:'Ergebnisse mit menschlicher Fachprüfung anhand von 20 anonymisierten Musteretiketten vergleichen.',ar:'مقارنة النتائج بمراجعة بشرية لـ20 ملصقاً تجريبياً مجهول البيانات.'},
      risk:{en:'Human final approval, current rules, records and confidential data handling.',de:'Menschliche Endfreigabe, aktuelle Vorschriften, Nachweise und Datenschutz.',ar:'الاعتماد النهائي البشري وتحديث القواعد وحفظ الأدلة وسرية المعلومات.'}}
  ];
  const refs = [
    {url:'https://nielseniq.com/global/en/insights/analysis/2026/expo-west-2026-trends/',label:'ref1'},
    {url:'https://food.ec.europa.eu/food-safety/novel-food/novel-food-status-catalogue_en',label:'ref2'},
    {url:'https://food.ec.europa.eu/food-safety/labelling-and-nutrition/nutrition-and-health-claims_en',label:'ref3'}
  ];
  let filter='all', search='';
  const main=document.getElementById('content');
  const catLabel=(cat)=>copy[lang()][cat]||cat;
  const itemCard=(it)=>{
    const t=copy[lang()];
    return `<article class="pi-idea-card" data-cat="${it.cat}"><div class="pi-card-img"><img src="${esc(it.image)}" alt="${esc(read(it,'name'))}" loading="lazy"></div><div class="pi-card-body"><div class="pi-pill">${esc(catLabel(it.cat))} · ${esc(t.phase)}</div><h3>${esc(read(it,'name'))}</h3><p>${esc(read(it,'summary'))}</p><div class="pi-card-divider"></div><span class="pi-micro">${esc(t.experiment)}</span><p class="pi-small">${esc(read(it,'test'))}</p><span class="pi-micro">${esc(t.gate)}</span><p class="pi-small">${esc(read(it,'risk'))}</p><a href="${esc(it.href)}" class="pi-card-link">${esc(t.exploreRange)} <span aria-hidden="true">↗</span></a></div></article>`;
  };
  function paintCards(){
    const holder=main.querySelector('#pi-ideas');if(!holder)return;
    const choices=ideas.filter(it=>(filter==='all'||filter===it.cat)&&(!search||(Object.values(it.name).join(' ')+ ' '+Object.values(it.summary).join(' ')).toLocaleLowerCase().includes(search)));
    holder.innerHTML=choices.length?choices.map(itemCard).join(''):`<p class="pi-empty">${esc(copy[lang()].none)}</p>`;
    main.querySelectorAll('[data-pi-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.piFilter===filter)));
  }
  function render(){
    if(!main)return;const t=copy[lang()];
    document.title=t.title+' | Pharmed';
    const chipKeys=['all','grains','tea','protein','quality'];
    const prio=[ideas[0],ideas[3],ideas[7]];
    main.innerHTML=`<div class="pi-lab" dir="${lang()==='ar'?'rtl':'ltr'}">
      <header class="pi-hero"><div class="pi-hero-inner"><div class="pi-hero-copy"><div class="pi-brow">${esc(t.brow)} <span class="pi-sep">•</span> ${esc(t.updated)}</div><h1>${esc(t.title)}</h1><p>${esc(t.sub)}</p><div class="pi-actions"><a class="pi-btn" href="#pi-opportunities">${esc(t.explore)} →</a><a class="pi-btn pi-btn-outline" href="all-products.html">${esc(t.catalogue)}</a></div></div><div class="pi-montage" aria-hidden="true"><img src="ragi-sunrise.webp" alt=""><img src="moringa.webp" alt=""><img src="active-protein.webp" alt=""></div></div></header>
      <section class="pi-wrap pi-signals"><div class="pi-headline"><span class="pi-section-eyebrow">RESEARCH × PRODUCT DESIGN</span><h2>${esc(t.signalTitle)}</h2><p>${esc(t.signalDesc)}</p></div><div class="pi-signal-grid">${[1,2,3].map((n)=>`<div class="pi-signal"><span class="pi-signal-num">0${n}</span><h3>${esc(t['s'+n])}</h3><p>${esc(t['s'+n+'d'])}</p></div>`).join('')}</div></section>
      <section class="pi-focus"><div class="pi-wrap"><div class="pi-headline"><span class="pi-section-eyebrow">FROM IDEA TO TEST</span><h2>${esc(t.featured)}</h2><p>${esc(t.featuredIntro)}</p></div><div class="pi-focus-grid">${prio.map(x=>`<a href="${esc(x.href)}" class="pi-focus-item"><img src="${esc(x.image)}" alt="${esc(read(x,'name'))}" loading="lazy"><div><small>${esc(catLabel(x.cat))}</small><h3>${esc(read(x,'name'))}</h3><span>${esc(t.exploreRange)} ↗</span></div></a>`).join('')}</div></div></section>
      <section class="pi-wrap pi-opportunities" id="pi-opportunities"><div class="pi-headline"><span class="pi-section-eyebrow">R&D OPPORTUNITIES</span><h2>${esc(t.pipeline)}</h2><p>${esc(t.pipelineIntro)}</p></div><div class="pi-tools"><div class="pi-filters">${chipKeys.map(k=>`<button type="button" data-pi-filter="${k}" aria-pressed="${filter===k}">${esc(t[k])}</button>`).join('')}</div><label class="pi-search"><span class="pi-sr">${esc(t.search)}</span><input id="pi-query" type="search" placeholder="${esc(t.search)}" value="${esc(search)}"></label></div><div class="pi-idea-grid" id="pi-ideas"></div></section>
      <section class="pi-process"><div class="pi-wrap"><div class="pi-headline"><span class="pi-section-eyebrow">IDEA → EVIDENCE → FORMULATION</span><h2>${esc(t.methodTitle)}</h2><p>${esc(t.methodIntro)}</p></div><div class="pi-steps">${[1,2,3,4].map(n=>`<article><h3>${esc(t['gate'+n])}</h3><p>${esc(t['gate'+n+'d'])}</p></article>`).join('')}</div></div></section>
      <section class="pi-wrap pi-references"><h2>${esc(t.refs)}</h2><p>${esc(t.refsIntro)}</p><div class="pi-ref-list">${refs.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(t[r.label])} ↗</a>`).join('')}</div><p class="pi-disclosure">${esc(t.disclosure)}</p></section>
      <section class="pi-closing"><div class="pi-wrap"><h2>${esc(t.ctaTitle)}</h2><p>${esc(t.ctaText)}</p><div class="pi-actions"><a class="pi-btn" href="power-blends.html">${esc(t.browseBlends)}</a><a class="pi-btn pi-btn-outline" href="herbal-teas.html">${esc(t.browseTeas)}</a><a class="pi-btn pi-btn-outline" href="all-products.html">${esc(t.browseAll)}</a></div></div></section>
    </div>`;
    main.querySelectorAll('[data-pi-filter]').forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.piFilter;paintCards()}));
    const searchBox=main.querySelector('#pi-query');searchBox.addEventListener('input',()=>{search=searchBox.value.trim().toLocaleLowerCase();paintCards()});
    paintCards();
  }
  function init(){render();document.addEventListener('click',event=>{if(event.target.closest?.('[data-lang]'))setTimeout(render,0);});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();


