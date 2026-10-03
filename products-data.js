const PRODUCTS = [
  {
    "name": "Herbal Cough Syrup",
    "image": "assets/herbal-cough-syrup.webp",
    "category": "botanical",
    "description": {
      "en": "A 150 mL herbal syrup packaging concept featuring thyme, mallow, elderflower, honey and lemon. Final ingredients, product classification and any cough-relief claims require regulatory review.",
      "de": "Verpackungskonzept für einen 150-ml-Kräutersirup mit Thymian, Malve, Holunderblüten, Honig und Zitrone. Endgültige Zutaten, Produkteinstufung und Aussagen zur Hustenlinderung bedürfen einer rechtlichen Prüfung.",
      "ar": "تصميم أولي لشراب عشبي بحجم 150 مل يضم الزعتر والخبيزة وزهر البيلسان والعسل والليمون. يجب مراجعة المكونات النهائية والتصنيف القانوني وأي ادعاءات بشأن تخفيف السعال قبل التسويق."
    },
    "id": "herbal-cough-syrup"
  },
  {
    "name": "Omega-3 Gum",
    "image": "assets/omega-3-gum.webp",
    "category": "functional",
    "description": {
      "en": "Omega-3 chewing gum concept with an easy-to-use format. Final fatty-acid content and sourcing require verification.",
      "de": "Omega-3-Kaugummi als praktisches Produktkonzept. Fettsäuregehalt und Herkunft sind noch zu prüfen.",
      "ar": "مفهوم علكة أوميغا 3 بشكل عملي. يجب التحقق من المحتوى النهائي ومصادر الأحماض الدهنية."
    },
    "id": "omega-3-gum"
  },
  {
    "name": "Probio Gum",
    "image": "assets/probio-gum.webp",
    "category": "functional",
    "description": {
      "en": "Chewing-gum concept featuring selected bacterial cultures. Strain identity, viable count and permitted wording require review.",
      "de": "Kaugummi-Konzept mit ausgewählten Bakterienkulturen. Stamm, Keimzahl und zulässige Angaben sind zu prüfen.",
      "ar": "مفهوم علكة يحتوي على مزارع بكتيرية مختارة. تتطلب السلالة والعدد الحي والعبارات المسموحة المراجعة."
    },
    "id": "probio-gum"
  },
  {
    "name": "Vita Straw",
    "image": "assets/vita-straw.webp",
    "category": "functional",
    "description": {
      "en": "Vitamin straw concept for preparing a flavoured drink. Final vitamin and mineral quantities are pending confirmation.",
      "de": "Vitamin-Trinkhalm-Konzept für ein aromatisiertes Getränk. Die endgültigen Vitamin- und Mineralstoffmengen sind zu bestätigen.",
      "ar": "مفهوم شفاطة فيتامينات لتحضير مشروب منكّه. كميات الفيتامينات والمعادن النهائية قيد التحقق."
    },
    "id": "vita-straw"
  },
  {
    "name": "Carbohydrate Blocker",
    "image": "assets/carbohydrate-blocker.webp",
    "category": "nutrition",
    "description": {
      "en": "A proposed botanical supplement concept. Formula, suitability and any weight-related claims require careful review.",
      "de": "Vorgesehenes pflanzliches Nahrungsergänzungskonzept. Rezeptur, Eignung und gewichtsbezogene Angaben sind sorgfältig zu prüfen.",
      "ar": "مفهوم مكمل نباتي مقترح. يجب مراجعة التركيبة والملاءمة وأي ادعاءات متعلقة بالوزن بعناية."
    },
    "id": "carbohydrate-blocker"
  },
  {
    "name": "Cleanox",
    "image": "assets/cleanox.webp",
    "category": "botanical",
    "description": {
      "en": "Botanical blend concept featuring artichoke, milk thistle, turmeric, grape seed and dandelion.",
      "de": "Pflanzliches Mischungskonzept mit Artischocke, Mariendistel, Kurkuma, Traubenkernen und Löwenzahn.",
      "ar": "مزيج نباتي مقترح من الخرشوف وشوك الحليب والكركم وبذور العنب والهندباء."
    },
    "id": "cleanox"
  },
  {
    "name": "Cranberry Concentrate",
    "image": "assets/cranberry-concentrate.webp",
    "category": "botanical",
    "description": {
      "en": "Cranberry-based supplement concept with proposed vitamin C and other plant ingredients.",
      "de": "Nahrungsergänzungskonzept auf Cranberry-Basis mit vorgesehenem Vitamin C und weiteren Pflanzenstoffen.",
      "ar": "مكمل غذائي مقترح يعتمد على التوت البري مع فيتامين C ومكونات نباتية أخرى."
    },
    "id": "cranberry-concentrate"
  },
  {
    "name": "Golden Maca",
    "image": "assets/golden-maca.webp",
    "category": "botanical",
    "description": {
      "en": "Maca root supplement concept featuring yellow, red and black maca varieties.",
      "de": "Maca-Wurzel-Konzept mit gelber, roter und schwarzer Maca.",
      "ar": "مكمل مقترح من جذور الماكا الصفراء والحمراء والسوداء."
    },
    "id": "golden-maca"
  },
  {
    "name": "Mental Focus",
    "image": "assets/mental-focus.webp",
    "category": "botanical",
    "description": {
      "en": "Proposed botanical and nutrient blend including ginkgo, ginseng, bacopa and B vitamins.",
      "de": "Vorgesehene Kombination aus Ginkgo, Ginseng, Bacopa und B-Vitaminen.",
      "ar": "مزيج مقترح من الجنكو والجنسنغ والباكوبا وفيتامينات B."
    },
    "id": "mental-focus"
  },
  {
    "name": "Joint Support",
    "image": "assets/joint-support.webp",
    "category": "botanical",
    "description": {
      "en": "Concept combining glucosamine, chondroitin, MSM and selected plant extracts; suitability and allergens need review.",
      "de": "Konzept mit Glucosamin, Chondroitin, MSM und Pflanzenextrakten; Eignung und Allergene sind zu prüfen.",
      "ar": "تركيبة مقترحة من الغلوكوزامين والكوندرويتين وMSM ومستخلصات نباتية؛ يلزم تقييم الملاءمة ومسببات الحساسية."
    },
    "id": "joint-support"
  },
  {
    "name": "Oxy Protect",
    "image": "assets/oxy-protect.webp",
    "category": "botanical",
    "description": {
      "en": "Proposed blend of grape seed, blueberry, turmeric and selected vitamins.",
      "de": "Vorgesehene Kombination aus Traubenkernen, Heidelbeeren, Kurkuma und ausgewählten Vitaminen.",
      "ar": "مزيج مقترح من بذور العنب والتوت الأزرق والكركم وفيتامينات مختارة."
    },
    "id": "oxy-protect"
  },
  {
    "name": "Meta Booster",
    "image": "assets/meta-booster.webp",
    "category": "botanical",
    "description": {
      "en": "Maca, ginseng, ginger and B-vitamin supplement concept.",
      "de": "Nahrungsergänzungskonzept mit Maca, Ginseng, Ingwer und B-Vitaminen.",
      "ar": "مكمل مقترح يحتوي على الماكا والجنسنغ والزنجبيل وفيتامينات B."
    },
    "id": "meta-booster"
  },
  {
    "name": "Superfood",
    "image": "assets/superfood.webp",
    "category": "botanical",
    "description": {
      "en": "Plant-based blend concept featuring spirulina, chlorella, berries and seeds.",
      "de": "Pflanzliches Mischungskonzept mit Spirulina, Chlorella, Beeren und Samen.",
      "ar": "مزيج نباتي مقترح من السبيرولينا والكلوريلا والتوت والبذور."
    },
    "id": "superfood"
  },
  {
    "name": "BCAA",
    "image": "assets/bcaa.webp",
    "category": "nutrition",
    "description": {
      "en": "Branched-chain amino acid concept featuring leucine, isoleucine and valine.",
      "de": "Konzept mit verzweigtkettigen Aminosäuren: Leucin, Isoleucin und Valin.",
      "ar": "مفهوم للأحماض الأمينية متفرعة السلسلة: ليوسين وآيزوليوسين وفالين."
    },
    "id": "bcaa"
  },
  {
    "name": "Power Shake Vegan",
    "image": "assets/power-shake-vegan.webp",
    "category": "nutrition",
    "description": {
      "en": "Plant-protein shake concept featuring pea, rice and hemp protein.",
      "de": "Pflanzliches Proteinshake-Konzept mit Erbsen-, Reis- und Hanfprotein.",
      "ar": "مخفوق بروتين نباتي مقترح من بروتين البازلاء والأرز والقنب."
    },
    "id": "power-shake-vegan"
  },
  {
    "name": "Saline Nasal Drops",
    "image": "assets/saline-nasal-drops.webp",
    "category": "special",
    "description": {
      "en": "Isotonic saline nasal-drop concept. Product classification, sterility and labelling must be established.",
      "de": "Isotonisches Kochsalz-Nasentropfenkonzept. Einstufung, Sterilität und Kennzeichnung sind noch zu klären.",
      "ar": "مفهوم قطرات أنف ملحية متساوية التوتر. يجب تحديد التصنيف والتعقيم ومتطلبات الملصق."
    },
    "id": "saline-nasal-drops"
  },
  {
    "name": "Eye Drops",
    "image": "assets/eye-drops.webp",
    "category": "special",
    "description": {
      "en": "Hyaluronic-acid eye-drop concept. No use or contact-lens suitability claims are confirmed.",
      "de": "Augentropfenkonzept mit Hyaluronsäure. Angaben zur Anwendung oder Kontaktlinseneignung sind nicht bestätigt.",
      "ar": "مفهوم قطرات عين بحمض الهيالورونيك. لم يتم تأكيد تعليمات الاستخدام أو ملاءمتها للعدسات اللاصقة."
    },
    "id": "eye-drops"
  },
  {
    "name": "Animal Supplements",
    "image": "assets/animal-supplements.webp",
    "category": "special",
    "description": {
      "en": "Species-specific animal nutrition concepts; individual formulations and veterinary requirements remain under review.",
      "de": "Tierernährungskonzepte für unterschiedliche Tierarten; Rezepturen und veterinärrechtliche Anforderungen sind zu prüfen.",
      "ar": "مفاهيم مكملات تغذية للحيوانات حسب النوع؛ التركيبات والمتطلبات البيطرية قيد المراجعة."
    },
    "id": "animal-supplements"
  }
];
