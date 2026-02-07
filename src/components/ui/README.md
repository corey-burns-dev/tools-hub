# Tools Hub UI Primitives

Use these components for all new tools to keep spacing and card layout consistent.

## Components

- `ToolPage.astro`
  - Wraps a page with standard vertical rhythm.
  - Optional `description` renders the pill-style intro text.
- `ToolGrid.astro`
  - Standardized responsive grid.
  - `cols={2}` for most tools, `cols={3}` for settings/results layouts.
- `ToolCard.astro`
  - Standardized card shell with header/body spacing.
  - Supports `title`, `step`, and `slot="header-actions"` for right-side controls.

## Shared Classes (from `src/styles/global.css`)

- `ui-input`, `ui-select`, `ui-textarea`: consistent form control sizing.
- `ui-option-row`: consistent checkbox/toggle rows.
- `ui-action-row`: consistent button row spacing.
- `ui-output-box`: padded output container.

## Recommended Pattern

1. `Layout`
2. `ToolPage`
3. `ToolGrid`
4. one or more `ToolCard` sections

Avoid page-specific CSS unless the tool needs unique behavior/animation.
