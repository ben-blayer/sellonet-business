# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Base44 platform application - a React/Vite frontend that connects to Base44's backend services. The app is for Sellonet, a business connecting technology startups with corporate partners.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint (quiet mode, errors only)
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking via jsconfig.json

## Architecture

### Base44 Integration
- **@base44/sdk**: Backend client for auth, data, and server functions
- **@base44/vite-plugin**: Development tooling with HMR, navigation tracking, and visual edit support
- Client configured in `src/api/base44Client.js` with app params from environment/URL

### Environment Variables
Required in `.env.local`:
```
VITE_BASE44_APP_ID=<app_id>
VITE_BASE44_APP_BASE_URL=<backend_url>
```

### Application Structure
- `src/App.jsx` - Root component with auth flow, routing, and providers
- `src/pages.config.js` - Page registry (add pages here, they auto-route by key name)
- `src/lib/AuthContext.jsx` - Authentication state and Base44 auth integration
- `src/lib/app-params.js` - Handles app configuration from URL params, localStorage, or env vars

### UI Components
- Uses **shadcn/ui** (new-york style) with Radix primitives
- Components in `src/components/ui/` - do not modify these directly
- Tailwind CSS with custom theme variables defined in `tailwind.config.js`
- Icons from **lucide-react**
- Animations via **framer-motion**

### Import Alias
`@/` maps to `src/` (configured in jsconfig.json and vite)

## ESLint Configuration

Linting only runs on:
- `src/components/**/*.{js,jsx}` (excluding `src/components/ui/`)
- `src/pages/**/*.{js,jsx}`
- `src/Layout.jsx`

Files in `src/lib/` and `src/components/ui/` are excluded from linting.

## Adding New Pages

1. Create page component in `src/pages/`
2. Add to `PAGES` object in `src/pages.config.js`
3. Route is automatically created based on the key name
