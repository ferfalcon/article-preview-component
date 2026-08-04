# Article Preview Component Design

## 1. Source and Intent

The component lets a reader preview a home-furnishing article and reveal sharing destinations without leaving the reading context. Figma `44:550` defines default states; `44:551` defines expanded states; `44:533` and `44:475` define reusable parts and tokens.

## 2. Structure and Reading Order

`main` contains one `article`: media, title, summary, author metadata, and share action. The DOM order remains media → title → summary → author metadata → share trigger → share links. The share panel is adjacent to its trigger so opened links follow it in tab order.

## 3. Visual System

| Role | Value |
|---|---|
| Page surface | `#ECF2F8` |
| Card surface | `#FFFFFF` |
| Strong ink | `#48556A` |
| Default ink | `#6E8098` |
| Muted ink | `#9DAEC2` |
| Card radius | 10 px |
| Title | Manrope 700, 20 px / 1.3, 0.25 px tracking |
| Summary and metadata | Manrope 500, 13 px / 1.4 |

The card uses a low, wide blue-gray shadow. The supplied image is cropped with `object-fit: cover`; the author avatar is circular and decorative because the adjacent name already identifies it.

## 4. Responsive Behavior

| Range | Layout | Share panel |
|---|---|---|
| Below 48rem | 327 px maximum stacked card with 24 px page gutters | Integrated 76 px bottom bar |
| 48rem–89.999rem | 608 px maximum row with 229 px media column | 248 × 67 px popover centered on trigger |
| 90rem and above | 730 px maximum row with 285 px media column | Same popover with desktop spacing |

**Inferred:** the card becomes fluid below its reference width instead of clipping. Long title and summary content increases height rather than being truncated. No animation is required because the design does not demonstrate one.

## 5. States and Accessibility Intent

The default trigger is a pale circular share button. Its expanded visual changes when the panel is open. The mobile panel covers the visual footer area while the same trigger remains above it. Tablet and desktop panels sit above the trigger with a downward arrow.

Visible focus is a required accessibility addition, not a contradictory visual change. The icon images are decorative within labelled interactive controls. Contrast, 200% reflow, 32 px trigger size, and reduced-motion-safe absence of animation are required by `AR-001` and `AR-002`.

## 6. Asset Mapping

Use the exact supplied drawers image, Michelle avatar, favicon, and share/social SVGs. Do not use temporary Figma exports. Map all decisions to `FR-001` through `FR-004`, `AR-001`, and `AR-002`.
