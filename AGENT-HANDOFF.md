# AGENT HANDOFF

## Current request

- Work only in this copied static site; never modify the original published link.
- Preserve all product text, mock data, and existing product interactions.
- Layout-only changes: add the supplied pale background treatment, place AI search at the right of the header, and add a compact left navigation state matching the reference.
- Publish this copy as a new GitHub repository and return a new link.

## Implementation boundary

- Original compiled assets remain untouched.
- `layout-polish.css` contains all visual overrides.
- `layout-polish.js` only adds the sidebar collapse toggle and persists that display preference locally.
- Sidebar navigation icons are original SVG exports from Figma node `1459:347086`; expanded and collapsed layouts share the same assets.
- Navigation icons intentionally keep the original monochrome Figma treatment: no colored backgrounds or category color filters.
- Collapsed navigation uses a 112px rail so Chinese labels remain legible instead of being clipped at the former 68px width.
- `index.html` only loads those two additive files.
