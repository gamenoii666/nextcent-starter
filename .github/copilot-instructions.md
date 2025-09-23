<!--
Purpose: Short, practical guidance for AI coding agents working on this repo.
Keep this file ~20-50 lines: include architecture, build/use commands, patterns, and file examples.
-->
# Copilot instructions for nextcent-starter

- **Big Picture:** This is a minimal React + Vite starter (client-only). UI is implemented with React components in `src/` and styled primarily with Tailwind utility classes. Vite handles dev server, HMR, and build.

- **How to run:** use npm scripts in `package.json`:
  - `npm run dev` — start Vite dev server with HMR
  - `npm run build` — produce production build
  - `npm run preview` — preview production build locally
  - `npm run lint` — run ESLint across the project

- **Key files & folders:**
  - `src/main.jsx` — app bootstrap and React root
  - `src/App.jsx` — main application shell (mounts `Navbar`)
  - `src/components/` — UI components (e.g., `Navbar.jsx`)
  - `src/assets/` — images and static assets referenced by components
  - `vite.config.js` — Vite config; plugins: `@vitejs/plugin-react`, Tailwind Vite plugin
  - `README.md` — template README for the Vite + React starter

- **Patterns & conventions found in repo:**
  - Components are default-exported functional React components (JSX, not TS).
  - Styling is by Tailwind utility classes in JSX; avoid adding global CSS unless necessary.
  - Assets are imported as modules, e.g. `import Logo from '../assets/img/logo-black.png'` and used as `src={Logo}`.
  - Keep container widths consistent using `container mx-auto max-w-[1320px]` pattern.

- **Common issues & fixes:**
  - Un-ordered list elements default styles can break layout. When presenting horizontal navs, use `className="flex list-none m-0 p-0"` and spacing helpers like `space-x-4`.
  - Ensure parent uses `flex` and `items-center`/`justify-between`/`flex-1` to align children across the row (see `src/components/Navbar.jsx`).

- **Examples from codebase:**
  - Navbar layout: `div` wrapper uses `flex items-center` and three children: logo, centered nav `ul` with `flex-1 justify-center`, and auth `ul` with right-aligned buttons. Use `list-none m-0 p-0` to neutralize default list styling.
  - Importing assets: `import Logo from '../assets/img/logo-black.png'` then `<img src={Logo} alt="" />`.

- **When editing:**
  - Prefer small, focused changes and run `npm run dev` to visually verify layout/HMR behavior.
  - Run `npm run lint` after code changes. ESLint config targets React rules; keep JSX consistent with present plugin setup.

- **What not to change without confirmation:**
  - `vite.config.js` plugin list and `package.json` dependency versions — changing may alter dev behavior.
  - Tailwind setup (if present in project root or future PRs) — check for `tailwind.config.js` before modifying.

- **If you need more context:**
  - Look at `src/components` for component patterns and `src/assets` for asset usage.
  - If adding new components, follow the functional default-export pattern and place files under `src/components/`.

Please ask maintainers for design system or Tailwind token changes; this file documents only discoverable conventions.
