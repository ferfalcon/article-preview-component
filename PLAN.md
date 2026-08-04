# Implementation Plan

## 1. Overview and Current State

The active `frontend/` is a vanilla TypeScript/Vite starter; the deployed Vercel site matches it. `vite/` is a partial static reference. The active build already succeeds, but GitHub Pages installs from the wrong directory and publishes the wrong artifact.

This is a simple static component with local content and transient disclosure state. A separate `ARCHITECTURE.md` is unnecessary: there is no routing, persistence, API, authentication, integration boundary, or shared application state. This document owns the resulting module, styling, asset, and delivery decisions.

## 2. Technical Approach

- Render one semantic article from `frontend/src/main.ts`; retain presentation in `frontend/src/style.css`.
- Add `frontend/src/share.ts` for `ShareTarget`, encoded URL construction, and disclosure event handling.
- Copy the exact supplied source assets to `frontend/src/assets/`; keep only the favicon in public content when required by `index.html`.
- Use custom properties, mobile-first CSS, flex/grid, fixed reference maxima, intrinsic media cropping, and content-driven block sizing.
- Use a conventional controller rather than `popover`, Invoker Commands, or a polyfill. The same panel must become an integrated mobile footer while remaining anchored at larger widths.
- Keep all accessibility behavior within the task that introduces it. No test framework is added; use the current build and required manual validation.

## 3. Files and Modules

| Path | Action | Responsibility |
|---|---|---|
| `frontend/src/main.ts` | Modify | Semantic article markup and bootstrap |
| `frontend/src/share.ts` | Create | Typed share URLs and disclosure state |
| `frontend/src/style.css` | Replace | Tokens, layout, states, responsive behavior |
| `frontend/src/assets/*` | Replace | Supplied image and SVG resources |
| `frontend/index.html` | Modify | Page metadata, font, favicon |
| `frontend/vite.config.ts` | Create | Relative output base |
| `frontend/package.json` | Modify | Exact pnpm package manager declaration |
| `.github/workflows/main.yml` | Modify | Build and publish active workspace |
| `README.md` | Modify | Current developer instructions |

## 4. Implementation Phases

### Phase 01 — Article foundation and default layout

1. Move exact supplied assets into the active source tree and remove unused starter source assets.
2. Replace starter markup with semantic article content, metadata, source dimensions, alternative text, and LCP priority.
3. Implement the mobile, tablet, and desktop default layout with tokens, focus styles, and overflow-safe content behavior.
4. Validate the production build and reference viewport layout.

### Phase 02 — Share interaction

1. Add typed social destination generation using current URL/title/image context.
2. Implement a single disclosure state that updates `hidden`, open class, and `aria-expanded`.
3. Implement repeat-click, Escape/focus return, outside-click dismissal, and desktop/mobile visual presentations.
4. Validate pointer, keyboard, focus, and responsive state changes.

### Phase 03 — Delivery and documentation

1. Set a relative Vite base and exact pnpm manager declaration.
2. Correct GitHub Pages working directory, installation, build, and upload path.
3. Update README, task reports, index, and workflow review documents.

## 5. Dependencies and Risks

`P01-T01` precedes `P01-T02`; both precede sharing. Delivery can proceed after the active app builds. The only material external risk is third-party share URL behavior; local link construction remains testable. Use explicit image dimensions, `min-inline-size: 0`, and manual width/zoom checks to mitigate layout risk.

## 6. Definition of Done

- [ ] All requirement and specification IDs map to a complete task.
- [ ] The app builds from `frontend`.
- [ ] Visual, responsive, keyboard, focus, link, and asset checks pass or are documented honestly.
- [ ] GitHub Pages configuration builds and publishes `frontend/dist`.
- [ ] Final implementation review is complete.
