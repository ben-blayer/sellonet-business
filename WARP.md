# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Base44 platform application - a React/Vite frontend for Sellonet, a business connecting technology startups with corporate partners. The app connects to Base44's backend services for authentication, data management, and server functions.

## Commands

### Development
- `npm run dev` - Start Vite development server (default port 5173)
- `npm run preview` - Preview production build locally

### Build
- `npm run build` - Create production build

### Code Quality
- `npm run lint` - Run ESLint in quiet mode (errors only)
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking via jsconfig.json

Note: Linting only applies to `src/components/**/*.{js,jsx}` (excluding ui/), `src/pages/**/*.{js,jsx}`, and `src/Layout.jsx`. Files in `src/lib/` and `src/components/ui/` are excluded.

## Environment Setup

Required environment variables in `.env.local`:
```
VITE_BASE44_APP_ID=<your_app_id>
VITE_BASE44_APP_BASE_URL=<your_backend_url>
```

Optional:
```
VITE_BASE44_FUNCTIONS_VERSION=<version>
```

The app also supports dynamic configuration via URL parameters which are managed by `src/lib/app-params.js`.

## Architecture

### Base44 Integration

**Core SDK**: `@base44/sdk`
- Authentication methods via `base44.auth` (login, logout, me)
- App logging via `base44.appLogs`
- Backend client configured in `src/api/base44Client.js`

**Development Plugin**: `@base44/vite-plugin`
- Provides HMR notifier, navigation notifier, and visual edit agent
- Configured in `vite.config.js` with legacy SDK import support

### Application Flow

1. **Entry Point**: `src/main.jsx` → `src/App.jsx`
2. **App.jsx**: Root component that wraps the app with:
   - `AuthProvider` - Authentication state management
   - `QueryClientProvider` - TanStack Query for data fetching
   - `Router` - React Router for routing
   - `NavigationTracker` - Logs user navigation to Base44
   - `Toaster` - Toast notifications

3. **Authentication Flow** (managed by `src/lib/AuthContext.jsx`):
   - Checks app public settings on mount
   - Validates user authentication if token exists
   - Handles auth errors (user_not_registered, auth_required, etc.)
   - Shows loading spinner during auth checks
   - Auto-redirects to login or shows error states

4. **Routing**:
   - Pages registered in `src/pages.config.js`
   - Routes auto-generated from `PAGES` object keys
   - Main page defined by `mainPage` property
   - Optional Layout component wraps all pages
   - 404 handled by `PageNotFound` component

### Configuration

**pages.config.js**: Central page registry
- Add pages to `PAGES` object - routes are created automatically based on key names
- Example: `"Home": Home` creates route `/Home` (case-insensitive matching)
- Set `mainPage` to define the root `/` route

**app-params.js**: Handles app configuration
- Reads from URL params → localStorage → environment variables (in that order)
- Converts camelCase to snake_case for storage keys
- Prefixes all storage keys with `base44_`
- Supports parameter cleanup from URL

### Data Fetching

**TanStack Query** configured in `src/lib/query-client.js`:
- `refetchOnWindowFocus: false`
- `retry: 1`
- Use React Query hooks for all data fetching

### UI Components

**shadcn/ui** (new-york style):
- Components in `src/components/ui/` - **do not modify directly**
- Based on Radix UI primitives
- Configured via `components.json`
- Add new components with shadcn CLI (not installed locally)

**Styling**:
- Tailwind CSS with CSS variables for theming
- Light/dark mode support (class-based)
- Custom theme variables in `src/index.css` (`:root` and `.dark`)
- Extended config in `tailwind.config.js`

**Icon Library**: lucide-react

**Animations**: framer-motion for complex animations, tailwindcss-animate for basic transitions

### Import Aliases

`@/` maps to `src/` directory (configured in jsconfig.json and vite.config.js)

Example:
```javascript
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/AuthContext'
import { base44 } from '@/api/base44Client'
```

## Adding New Features

### Adding a Page
1. Create component in `src/pages/` (e.g., `Profile.jsx`)
2. Add to `PAGES` in `src/pages.config.js`: `"profile": Profile`
3. Route automatically available at `/profile`
4. Page receives optional Layout wrapper if defined

### Adding a Custom Component
1. Create in `src/components/` (not in `ui/`)
2. Custom components are linted; follow ESLint rules
3. Use existing ui components from `src/components/ui/`

### Using Authentication
```javascript
import { useAuth } from '@/lib/AuthContext'

const { user, isAuthenticated, logout, navigateToLogin } = useAuth()
```

### Accessing Base44 SDK
```javascript
import { base44 } from '@/api/base44Client'

// Example: Fetch data
const data = await base44.entities.find('EntityName', { filters })

// Example: Call server function
const result = await base44.functions.invoke('functionName', params)
```

## Key Patterns

### Loading States
The app shows a centered loading spinner during auth checks:
```jsx
<div className="fixed inset-0 flex items-center justify-center">
  <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
</div>
```

### Error Handling
- Authentication errors handled by AuthContext
- `user_not_registered` shows UserNotRegisteredError component
- `auth_required` auto-redirects to login
- Use try-catch with appropriate error messages

### Navigation Tracking
Navigation is automatically logged to Base44 when authenticated (via NavigationTracker component).

## Important Notes

- **Do not modify** files in `src/components/ui/` - these are managed by shadcn
- **Do not lint** files in `src/lib/` or `src/api/` - they are excluded from ESLint
- Use `@/` imports consistently instead of relative paths
- Always use the `base44` client from `src/api/base44Client.js` for backend calls
- Forms should use react-hook-form with zod validation
- Unused imports are treated as errors by ESLint (unused-imports plugin)
