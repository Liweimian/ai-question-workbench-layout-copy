# AGENT HANDOFF

## Current request

- Work only in this copied static site; never modify the original published link.
- Preserve all product text, mock data, and existing product interactions.
- Layout-only changes: add the supplied pale background treatment, place AI search at the right of the header, and add a compact left navigation state matching the reference.
- Publish this copy as a new GitHub repository and return a new link.

## Implementation boundary

- Base files now exactly mirror the user-provided live `new-scheme-two/?v=749ddc7@` page: `index-DM2c5YM-.js`, `index-Bf_IkZE1.css`, and its `motion/` assets. Do not substitute `new-scheme-two-modes` or the newer cached `gh-pages` bundle.
- Original compiled assets remain untouched.
- `layout-polish.css` contains all visual overrides.
- `layout-polish.js` only adds the sidebar collapse toggle and persists that display preference locally.
- Sidebar navigation icons are original SVG exports from Figma node `1459:347086`; expanded and collapsed layouts share the same assets.
- Navigation icons intentionally keep the original monochrome Figma treatment: no colored backgrounds or category color filters.
- Collapsed navigation uses a 112px rail so Chinese labels remain legible instead of being clipped at the former 68px width.
- Collapsed navigation shows concise labels; expanding restores every original full label. Accessible names and hover titles remain the full wording.
- Expanded navigation title is “从以下方式添加题目”; its four existing entry groups use separate translucent white rounded cards. The collapsed rail intentionally keeps its current unboxed compact treatment.
- Expanded sidebar now follows Figma node `2013:137454`: 258px total width, a 210px navigation column with 24px side gutters, `rgba(245,253,253,.6)` group fills, white 1px borders, 6px group radii, and the cyan-green title treatment. Collapsed sizing remains unchanged.
- `index.html` only loads those two additive files.
