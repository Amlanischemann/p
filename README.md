# Pharmed UG: multipage DE / EN / AR website

This is a **static, multipage, trilingual review draft** for GitHub Pages. It is not a live e-commerce store.

## Update your existing repository `Amlanischemann/p`

1. **Keep a backup** of the existing repository by downloading its ZIP (green Code button → Download ZIP).
2. Extract this ZIP. Upload **all its contents**, including `assets/`, to the root of your repository on `main` (not the ZIP itself). When GitHub says a file already exists, use the web editor to update that text file or use GitHub Desktop to copy the extracted folder into your cloned repository and commit/push all changes. GitHub's web upload interface may reject files that already exist; GitHub Desktop is easier for this full-site replacement.
3. In Settings → Pages select Deploy from branch, `main`, `/(root)`. Wait for the Actions deployment, then open `https://amlanischemann.github.io/p/`.
4. The old `catalogue.js` and root-level PNGs are no longer required. They may remain temporarily but can be deleted after checking the new site. **Do not delete `assets/`.**

## Page navigation

- `index.html`: homepage
- `about.html`, `vision.html`, `philosophy.html`: company information
- `products.html`: searchable and filterable catalogue
- `product.html?id=golden-maca`: product detail pages
- `wellness.html`, `services.html`, `quality.html`, `contact.html`
- `impressum.html`, `privacy.html`: **incomplete placeholders, must be replaced before public business launch**

## Editing

- **Text:** `copy.js`, grouped by `en`, `de`, `ar`. Edit each language and keep valid JavaScript syntax.
- **Products:** `products-data.js`. Each product has `id`, `name`, `image`, `category` and descriptions for `en`, `de`, `ar`. Add products to this array. The site creates a new detail page dynamically from its `id`.
- **Photos:** upload a `.webp` image to `assets/` and set its path in `products-data.js`, e.g. `assets/new-product.webp`. Use the exact case-sensitive filename.
- **Appearance:** `style.css`; **layout and navigation:** `app.js`.
- To avoid broken links, keep filenames and the `assets/` directory structure unchanged.

## Important pre-publication checks

All displayed products are **design concepts**. Some underlying packaging illustrations contain unverified claims or “Made in Germany” flags. Do not market these as verified. Confirm formula, classification, labels, allergen statements, permitted health claims and manufacturing origin. Obtain appropriate legal review and complete Impressum, GDPR privacy information and official company contact details before launching commercially. GitHub Pages has restrictions on hosting websites primarily intended for commercial transactions; move to business-compatible hosting for e-commerce.
