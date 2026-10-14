PHARMED UG COLLECTION RESTORE - SAFE REPAIR

DO NOT replace the existing root index.html.

1. Extract this ZIP into the EXISTING website repository ROOT, keeping existing files.
2. Upload/overwrite ONLY: all-products.html, assets/catalog/*, weight-management/index.html, weight-management/assets/*.jpg.
3. Merge with the existing repository. Do NOT delete existing mens-health.html, animal-nutrition.html, CSS, scripts, categories or assets.
4. Add navigation link <a href="/all-products.html">All products</a> into your existing header/index.html. Add <a href="/weight-management/">Weight Management</a> if desired.
5. All-products.html is standalone (no dependency on prior missing product-data scripts) and displays all 64 products with local catalogue images, category filters, search and product detail overlay.
6. Original six weight product images also exist at weight-management/assets/*.jpg for their independent collection page.
7. If the live homepage itself was overwritten or its product sections removed, restore the old root index.html from GitHub commit history; this package deliberately avoids altering unknown homepage code.
8. The current live repository was not available for a full regression test. Check actual deployment after merging.
