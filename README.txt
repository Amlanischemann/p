PHARMED VETHERB: SIX INGREDIENT TABLES IN MAIN PRODUCT RENDERER

Upload the three files in this archive to the GitHub repository ROOT (Amlanischemann/p). REPLACE all three matching files; do not upload the containing folder. Commit, allow Cloudflare deployment, and hard-refresh your browser.

This fixes all six links using animal-nutrition.html?product=<id>. Do not add the former pharmed-animal-ingredients.js script tag back to the HTML. Existing products, assets and other JS scripts stay in place.

Check: liver-support, gut-balance, calm-support, immune-force, para-balance, respira-comfort. The table is rendered inside the product-detail HTML when the main product script runs. Quantities are not stated in source data.
