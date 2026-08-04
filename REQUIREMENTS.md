# Project Requirements

## 1. Document Information

- Status: Approved for implementation
- Version: 1.0
- Last updated: 2026-08-03
- Related documents: `DESIGN-AUDIT.md`, `DESIGN.md`, `SPEC.md`, `PLAN.md`

## 2. Overview

Build the supplied Article Preview Component in the active TypeScript/Vite application. It must reproduce the documented responsive article card and expose an accessible share interaction.

## 3. Goals and Non-Goals

Goals: accurate responsive presentation, accessible keyboard operation, real social-share intents, local asset reuse, and working GitHub Pages delivery.

Non-goals: article fetching, CMS or accounts, persistence, analytics, dark mode, localization, custom animation, or a component library.

## 4. Requirements

### FR-001 — Render article content

**Priority:** Must  
**Description:** Render the supplied title, summary, author, date, article image, and author image as one article preview.  
**Acceptance criteria:** content and supplied assets are visible; the date is a valid `time` value; the article image has explicit source dimensions.  
**Evidence:** EVD-001, EVD-005.

### FR-002 — Responsive card presentation

**Priority:** Must  
**Description:** Present the mobile stacked and tablet/desktop horizontal layouts with content-driven sizing.  
**Acceptance criteria:** reference compositions are matched at 375, 768, and 1440 px without horizontal overflow; content remains usable at 320 px and 200% zoom.  
**Evidence:** EVD-001, EVD-004.

### FR-003 — Share disclosure

**Priority:** Must  
**Description:** A user can reveal and hide one social-share panel from the share button.  
**Acceptance criteria:** mobile uses an integrated footer bar; tablet/desktop uses an arrowed popover; the visual state and programmatic state stay synchronized.  
**Evidence:** EVD-002, EVD-003.

### FR-004 — Social-share destinations

**Priority:** Must  
**Description:** Facebook, X/Twitter, and Pinterest controls open encoded sharing destinations for the current article page.  
**Acceptance criteria:** each destination contains the current page URL; Pinterest also contains the built article-image URL and article description; links open safely in a new tab.  
**Evidence:** EVD-002; approved implementation decision.

### AR-001 — Semantic structure and names

**Priority:** Must  
**Description:** Use native semantic HTML and accessible names.  
**Acceptance criteria:** one `h1`, a `main` and `article`, native button, labelled links, informative article image alternative, decorative avatar/icon alternatives, and no focusable hidden content.  
**Evidence:** EVD-001, AUD-001.

### AR-002 — Keyboard and focus behavior

**Priority:** Must  
**Description:** The share interaction is operable without a pointer.  
**Acceptance criteria:** native Enter/Space activation works; Escape closes and returns focus to the trigger; outside click closes; focus is visible; normal tab order reaches opened links.  
**Evidence:** AUD-001.

### NFR-001 — Image loading stability

**Priority:** Should  
**Description:** The primary image is the page LCP candidate.  
**Acceptance criteria:** it uses explicit dimensions and `fetchpriority="high"`, and is not lazy-loaded.  
**Evidence:** EVD-001; current image-priority guidance.

### NFR-002 — Maintainable delivery

**Priority:** Must  
**Description:** The active frontend builds with pnpm and GitHub Pages deploys its built output.  
**Acceptance criteria:** `pnpm build` succeeds in `frontend`; the workflow installs from `frontend/pnpm-lock.yaml`, builds `frontend`, and uploads `frontend/dist`.  
**Evidence:** EVD-006.

### CON-001 — Workspace boundary

The implementation resides in `frontend/`. `vite/` is a non-active reference only. No runtime dependency or test framework is added for this isolated component.

## 5. Risks and Definition of Done

| Risk | Mitigation |
|---|---|
| Unshown responsive behavior | Validate narrow, intermediate, wide, zoomed, and long-content layouts |
| External share services change | Generate standards-based encoded URLs and validate the final destinations manually |
| Delivery divergence | Build relative Vite output and retain Vercel compatibility |

Done means every Must requirement passes its acceptance checks, the build succeeds, documentation and task statuses are current, no critical finding remains, and the implementation review is completed.

## 6. Traceability

| Requirement | Design audit | Specification |
|---|---|---|
| FR-001 | EVD-001, EVD-005 | SP-001 |
| FR-002 | EVD-001, AUD-002 | SP-002 |
| FR-003 | EVD-002, EVD-003 | SP-003 |
| FR-004 | EVD-002, AUD-004 | SP-004 |
| AR-001 | AUD-001 | SP-005 |
| AR-002 | AUD-001 | SP-006 |
| NFR-001 | EVD-001 | SP-007 |
| NFR-002 | EVD-006 | SP-008 |
