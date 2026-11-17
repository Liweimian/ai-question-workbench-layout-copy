# AGENT HANDOFF

## Current request

- Work only in this copied static site; never modify the original published link.
- Preserve all product text, mock data, and existing product interactions.
- Layout-only changes: add the supplied pale background treatment, place AI search at the right of the header, and add a compact left navigation state matching the reference.
- Publish this copy as a new GitHub repository and return a new link.

## Implementation boundary

- Base files now use the user-requested `new-scheme-two/?v=c9bf4b9` interaction build: `index-CxbbLG97.js`, `index-O9EOGKlL.css`, and the existing `motion/` assets. This build adds direct-save behavior and the synchronized exercise/paper answer-mode switcher; do not substitute `new-scheme-two-modes`.
- Original compiled assets remain untouched.
- `layout-polish.css` contains all visual overrides.
- `layout-polish.js` only adds the sidebar collapse toggle and persists that display preference locally.
- Sidebar navigation icons are original SVG exports from Figma node `1459:347086`; expanded and collapsed layouts share the same assets.
- Navigation icons intentionally keep the original monochrome Figma treatment: no colored backgrounds or category color filters.
- Collapsed navigation uses a 112px rail so Chinese labels remain legible instead of being clipped at the former 68px width.
- Collapsed navigation shows concise labels; expanding restores every original full label. Accessible names and hover titles remain the full wording.
- Expanded navigation title is “从以下方式添加题目”; its four existing entry groups use separate translucent white rounded cards. The collapsed rail intentionally keeps its current unboxed compact treatment.
- Expanded sidebar now follows Figma node `2013:137454`: 258px total width, a 210px navigation column with 24px side gutters, `rgba(245,253,253,.6)` group fills, white 1px borders, and 6px group radii. Collapsed sizing remains unchanged.
- Per the latest review, the expanded navigation title is transparent (no fill or border), and navigation rows are tightened to 36px with no extra row gap. The sidebar width and grouped card treatment remain unchanged.
- The expanded navigation title is plain left-aligned secondary text (`#6b6f78`, 14px/22px, regular) with 12px spacing before the first card; it must not be centered or styled as a title bar.
- The sidebar already supplies 14px outer padding, so expanded `.document-center-nav` uses 10px horizontal padding to produce equal 24px left/right gutters around its 210px cards. Horizontal overflow and visible scrollbars are suppressed while scrolling remains available.
- The manually expanded source-navigation panel must visually match the home expanded sidebar: 258px total width, 24px gutters, 210px grouped cards, transparent left-aligned heading, compact rows, monochrome icons, and hidden scrollbars. Its only intentional additions are the retained subject/stage selector and current-source active state.
- The collapsed source-navigation rail uses the same pale cyan-to-green background treatment as the expanded/home sidebar; active items, icons, labels, and sizing remain unchanged.
- Document type defaults to “练习”. Save acts on the current type without opening a type picker. The type switch supports “练习 / 试卷”, and “试卷” opens “原卷作答 / 答题卡作答”; the compact editor shows the synchronized compact variant.
- `index.html` only loads those two additive files.
