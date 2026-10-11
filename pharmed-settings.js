/* PHARMED UG WEBSITE SETTINGS 2026 - safe to edit in GitHub. */
window.PHARMED_SETTINGS = {
  companyName: 'Pharmed UG',
  officialLogo: 'assets/pharmed-official-logo.webp',
  officialMark: 'assets/pharmed-official-mark.webp',
  heroMascot: 'fox', // fox, owl, rabbit, bee, otter, leaf-spirit
  showProposedProducts: true, // true shows clearly marked ideas; false hides additional ideas
  showMascotGallery: true,
  showWishlist: true, // saved only in visitor's own browser
  contactEmail: '' // leave blank until official company email is verified
};

/* Short company-status line in the existing footer. All existing pages,
 * including Impressum and Privacy, remain unchanged. */
(function () {
  'use strict';
  var translations = {
    de: 'Pharmed – Unternehmen im Aufbau',
    en: 'Pharmed – Company Under Development',
    ar: 'فارميد – الشركة قيد التأسيس'
  };

  function updateCompanyStatus() {
    var footer = document.querySelector('#site-footer footer');
    if (!footer) return;
    var notice = footer.querySelector('#pharmed-formation-notice');
    if (!notice) {
      notice = document.createElement('p');
      notice.id = 'pharmed-formation-notice';
      notice.style.cssText = 'margin:0;padding:14px 20px;text-align:center;' +
        'border-top:1px solid rgba(255,255,255,.18);' +
        'font-size:14px;line-height:1.7;font-weight:600;';
      footer.appendChild(notice);
    }
    var lang = document.documentElement.lang || 'en';
    if (!Object.prototype.hasOwnProperty.call(translations, lang)) lang = 'en';
    notice.textContent = translations[lang];
    notice.lang = lang;
    notice.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCompanyStatus);
  } else {
    updateCompanyStatus();
  }
  // The existing language buttons re-render the footer. Restore the notice.
  document.addEventListener('click', function (event) {
    if (event.target && event.target.closest && event.target.closest('[data-lang]')) {
      queueMicrotask(updateCompanyStatus);
    }
  }, true);
})();
