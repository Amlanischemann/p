PHARMED VETHERB — INGREDIENTS TABLE FIX

Upload these files to the root of the existing website repository, preserving the existing images, CSS, product data and other site files. Replace same-named files; do not delete the other repository files.

Key fix: animal-nutrition.html loads pharmed-animal-ingredients.js before pharmed-animal-nutrition.js. Each of the six product details now renders its Ingredients & Composition table directly, without DOM observation or delayed insertion. Tables follow EN/DE/AR selection.

Test paths: animal-nutrition.html?product=liver-support, gut-balance, calm-support, immune-force, para-balance, respira-comfort.

Ingredients are proposed product-development candidates, not confirmed commercial recipes. Quantities intentionally remain “To be determined” pending specifications, species assessment and regulatory review.

This ZIP contains only the user-provided website files and the targeted fixes, not a complete standalone website: retain existing style.css, app.js, assets and remaining dependency files from the repository.
