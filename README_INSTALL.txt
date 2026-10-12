PHARMED UG — Fix blank / frozen Power Blends and Herbal Teas pages

VERIFIED: The scripts in this package pass JavaScript syntax checks and an isolated Chromium test showed 16 Power Blends cards and 6 Herbal Teas cards.

PROBLEM: The previous scripts repeatedly updated header/footer text, which triggered their own MutationObserver callbacks, potentially freezing page rendering.

INSTALL IN ONE OPERATION (VS CODE WEB):
1. Make a backup using https://github.com/Amlanischemann/p -> Code -> Download ZIP.
2. Open https://github.dev/Amlanischemann/p (branch main).
3. Extract this ZIP; open the folder containing the three .js files.
4. Drag all THREE JavaScript files to the ROOT of the GitHub repository (alongside index.html).
5. When requested, replace/overwrite the existing files of the same name.
6. Source Control -> stage all -> commit message: Fix Pharmed collection page rendering -> Commit & Push.
7. Open Cloudflare Dashboard -> Workers & Pages -> pharmed-ug -> Deployments and check that the latest production deployment corresponds to the new commit.
8. Refresh https://pharmed-ug.pages.dev/power-blends.html and https://pharmed-ug.pages.dev/herbal-teas.html using Ctrl+Shift+R.

DO NOT DELETE: assets, pharmed-collections-assets, any product photos, Google verification, impressum.html, privacy.html or existing product data.

NOTE: This fixes browser script loops; it cannot force a Cloudflare deployment. If Cloudflare is still publishing an older GitHub commit, its deployment configuration must be checked separately.
