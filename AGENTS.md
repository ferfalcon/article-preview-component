# Repository Guidelines

## Environment & Toolchain

Windows is the host OS; all development work happens in Ubuntu 24.04 on WSL2. Open a WSL terminal and work from `/home/fer/code/Article preview component/article-preview-component`; do not run Git, Node, package-manager, build, or preview commands from PowerShell or Windows paths.

Manage Node inside WSL with `nvm` (version `0.40.4` is installed). Before installing dependencies, run `nvm install --lts`, `nvm use --lts`, and `node --version`. Windows-installed Node is unsupported. Enable Corepack (`corepack enable`) after Node is active to use pnpm where required.

## Project Structure & Module Organization

All new work belongs in `frontend/`, the TypeScript app (`src/`, `public/`, and `tsconfig.json`). `vite/` is the previous article implementation; use it as a behavior and visual reference, not an active target. `docs/initial-code/` and `docs/design/` are references. Deployment is configured in `.github/workflows/main.yml`.

## Build, Test, and Development Commands

Run these commands in WSL from the workspace you are changing.

- `cd frontend && pnpm install` installs the TypeScript workspace dependencies from its `pnpm-lock.yaml`.
- `cd frontend && pnpm dev` starts the local Vite development server with hot reload.
- `cd frontend && pnpm build` type-checks with `tsc` and creates the production bundle.
- `cd frontend && pnpm preview` serves the built bundle for final inspection.
- `cd vite && npm ci` installs the existing component's dependencies from `package-lock.json`.
- `cd vite && npm run dev|build|preview` develops, builds, or previews that workspace.

There is no root-level package script; do not run package commands from the repository root.

## Coding Style & Naming Conventions

Use two-space indentation in TypeScript and new CSS unless local style differs. Keep TypeScript ESM-compatible and resolve errors enforced by `tsconfig.json`. Use `camelCase` variables/functions, `PascalCase` types, kebab-case assets, and BEM classes (for example, `article__share-button`). Prefer semantic, accessible HTML, explicit image dimensions, mobile-first queries, and existing custom properties.

## Testing Guidelines

No automated test framework or coverage target is configured. Before submitting, run the relevant production build and manually check desktop/mobile layouts, share interaction, keyboard focus, image loading, and console errors against `docs/design/`. If adding tests, colocate `*.test.ts` files with source and add a package script.

## Commit & Pull Request Guidelines

Recent commits favor Conventional Commit prefixes (`feat:`, `fix:`, `refactor:`). Use short imperative subjects for one logical change. PRs should name the workspace, summarize behavior and validation, link issues, and include before/after screenshots for visual changes. Do not commit `dist/`, dependencies, or editor files.
