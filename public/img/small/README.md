# Small email logos

PNG copies of the GorettiFest wordmarks and sponsor artwork. Originals remain unchanged.

The visual logo picker lives in Donor Letter Studio: https://donor-letter-studio.ktbartholomew.chatgpt.site. This repository hosts only the image assets and machine-readable metadata, not a separate catalog interface.

Catalog URL after deployment: https://www.gorettifest.com/img/small/catalog.json

Images fit within 480 × 240 pixels, preserving aspect ratio, transparency, padding, and colors; raster inputs are never enlarged. Use the catalog's half-size display dimensions for 2× email density. White artwork needs a dark background.

The catalog includes source paths, production URLs, dimensions, sponsor websites, and a featured flag for current artwork. Dated GorettiFest variants contain 2025 dates and are not featured. Filenames include source extensions to avoid variant collisions.

Run `npm ci` and `npm run logos:small` to regenerate PNGs and catalog.json from scripts/small-logo-sources.json. Remove obsolete output files explicitly when retiring artwork.

The Sigercon PDF is represented by its existing PNG. NALL's information QR code is excluded. Symphony Arlington's source SVG was copied from the URL already used by the site: https://symphonyarlington.org/wp-content/uploads/2023/10/SA-Logo-wh.svg.

The catalog has a public CORS header so the studio can read it. Image URLs only become available after merge and deployment.
