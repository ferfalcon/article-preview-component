# Article Preview Component Specification

## 1. Scope

This specification implements `FR-001`–`FR-004`, `AR-001`, `AR-002`, `NFR-001`, and `NFR-002` as a single static TypeScript/Vite page.

## 2. Observable Behavior

### SP-001 — Article content

The page contains one `main > article` with one `h1`, article image, summary, author name, machine-readable date `2020-06-28`, decorative avatar, and share control. The article image alternative is: “Green dresser with framed art and a vase of dried flowers against a white brick wall.”

### SP-002 — Layout

The default card is stacked below 48rem and horizontal at 48rem or wider. At 90rem it grows to the desktop maximum. It uses content-driven block sizing and must not create horizontal scroll at 320 px or under text zoom.

### SP-003 — Disclosure state

The trigger is `<button type="button">` with `aria-controls="share-panel"` and `aria-expanded`. The closed panel has `hidden`; the open panel does not. A single controller toggles `hidden`, `aria-expanded`, and `.article__share--open` together.

### SP-004 — Share URLs

On startup, create safe new-tab links using the current `location.href`, document title, and the built article image URL:

- Facebook: `https://www.facebook.com/sharer/sharer.php?u={url}`
- X/Twitter: `https://twitter.com/intent/tweet?url={url}&text={title}`
- Pinterest: `https://www.pinterest.com/pin/create/button/?url={url}&media={imageUrl}&description={description}`

Each link has `target="_blank"`, `rel="noopener noreferrer"`, and an accessible name that includes its destination.

### SP-005 — Semantic and visual accessibility

Native semantics take precedence over ARIA roles. Decorative SVGs and avatar use empty alternatives; the primary image is informative. Interactive elements expose visible `:focus-visible` styles. The closed panel contains no tab stops because `hidden` removes it from rendering and the accessibility tree.

### SP-006 — Keyboard and dismissal

Native button activation handles Enter and Space. Clicking the trigger toggles the panel. Escape closes it and focuses the trigger. Pointer events outside the article share region close it. Opening does not move focus; normal Tab reaches the links. Clicking a share destination proceeds with its normal new-tab navigation.

### SP-007 — Image performance

The primary image uses source width and height `660` and `528`, has `fetchpriority="high"`, and omits `loading="lazy"`.

### SP-008 — Delivery

Vite uses a relative base. The GitHub Pages workflow runs Corepack/pnpm in `frontend`, uses the committed lockfile, builds the same application, and publishes `frontend/dist`.

## 3. Edge Cases

- Long text wraps and grows the card.
- Missing media retains its declared layout slot and exposes its alternative text if the browser renders the fallback.
- Resizing while open reuses the same open state and changes only the CSS presentation.
- No request, loading, empty, disabled, or success state applies because all content is static.
- No modal focus trap, browser polyfill, or scripted animation is used.

## 4. Acceptance Criteria

- [ ] SP-001 through SP-008 are verifiable in the built application.
- [ ] The default and expanded Figma reference states match at 375, 768, and 1440 px.
- [ ] Keyboard, focus, dismissal, and link behavior pass manual validation.
- [ ] `cd frontend && pnpm build` passes.
