# Small logo catalog

Generated PNG copies of the GorettiFest wordmarks and sponsor artwork. Originals stay unchanged. The dated brand variants are included but not featured by default; check their text before reusing them.

- Browse after deployment: https://www.gorettifest.com/img/small/index.html
- Machine-readable catalog: https://www.gorettifest.com/img/small/catalog.json
- Images fit inside 480 × 240 pixels, preserving aspect ratio, transparent pixels, existing padding, and colors. Raster inputs are never enlarged. Display at the catalog's half-size dimensions for 2× email density.
- White logos require a dark background. Both preview backgrounds are available; no logo colors are altered.
- Paths mirror the source folders. The source extension is part of each output name to avoid collisions between original PNG/JPG/SVG variants.
- `featured` selects the site's current sponsor artwork plus the undated full GorettiFest wordmark. Other source variants remain discoverable.
- `url` is the public production image URL; `path` works on preview deployments. These URLs only become available after merging and deploying.

Run `npm ci` then `npm run logos:small` to regenerate PNGs and `catalog.json`. Sources and labels are declared in `scripts/small-logo-sources.json`. To add or retire artwork, update that list and regenerate; remove obsolete generated files explicitly.

The redundant Sigercon PDF is represented by its existing PNG source. The NALL information QR code is excluded because it is not a logo. Symphony Arlington's source SVG was copied from the URL already used in `components/sections/sponsors.tsx`: https://symphonyarlington.org/wp-content/uploads/2023/10/SA-Logo-wh.svg.

A browser-based studio on another origin can load the catalog using the public CORS header configured for `catalog.json`. PNG URLs can be placed directly in email `<img>` elements; do not embed them as data URLs or reference private preview hosts.
