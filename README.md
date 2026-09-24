# ExtraMiles Web

React + TypeScript + Vite + Tailwind CSS v4 implementation for the ExtraMiles experience.

## Structure

```text
src/
  app/                    # application shell, routes, and bootstrap
  components/
    homePage/             # Home page and its sections
    partnerPage/          # Partner page and its sections
    layout/               # shared Navbar, Footer, Logo, and store buttons
    ui/                   # future generic UI primitives
  assets/                 # typed PNG/SVG asset registry
  constants/              # typed navigation and shared configuration
  styles/                 # global CSS and Tailwind theme tokens
public/assets/            # downloaded PNG/SVG media files
```

Page-specific components stay directly inside `components/homePage` or `components/partnerPage`. Shared UI belongs in `components/layout`; generic reusable primitives can be added to `components/ui` when needed.

## Scripts

```bash
npm install
npm run assets
npm run dev
npm run typecheck
npm run build
```

The desktop design frame is 1440px wide and the responsive breakpoint is defined in `src/styles/index.css`.
