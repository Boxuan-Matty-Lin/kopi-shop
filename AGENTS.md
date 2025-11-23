## Runtime & Framework
- Expo SDK `~54.0.25`, React `19.1.0`, React Native `0.81.5`, web via `react-native-web ~0.21.0`.
- `expo-router ~6.0.15` entry (`main: expo-router/entry`), React Navigation 7.x stack libs present.

## Routing & Navigation
- Root stack in `app/_layout.tsx`; tabs group in `app/(tabs)/_layout.tsx` uses custom bottom bar.
- Tabs: Home, Favorites, Kopi (center FAB-style), Orders, Me. Custom tab bar has rounded background, inset, and lifted Kopi button sized via constants at top of the file.
- Modal example removed (deleted `app/modal.tsx` and stack registration).

## Styling
- NativeWind `^4.2.1` with Babel `jsxImportSource: "nativewind"` + `nativewind/babel`; Metro wrapped with `withNativeWind(config, { input: "./global.css" })`.
- Tailwind `^3.4.18`; `tailwind.config.js` scans `./App.tsx`, `./app/**/*`, `./components/**/*`. Colors extended to coffee palette via CSS variables in `global.css` (currently only light-mode values).

## State & Domain
- Zustand store `stores/kopiMakerStore.ts`: holds kopi selection (`milkiness`, `sweetness`, `strength`, `temperature`), setters/reset, derived `baseName/displayName/phrase` via `utils/kopiInfer`.
- Domain types `types/kopi.ts`: option groups, option lists, `KopiSelection`, default selection. Temperature replaces earlier “state” naming.
- `utils/kopiInfer.ts`: maps selection to kopi naming parts.

## UI Pages
- Tab screens (`app/(tabs)/*.tsx`) are placeholders using Tailwind color tokens; Home/Kopi/Favorites/Orders/Me minimal content.
- Template components `hello-wave`, `parallax-scroll-view`, `external-link` removed. `haptic-tab.tsx` remains for tab haptics; `themed-text`/`themed-view` only used in deleted modal.

## Tooling
- TypeScript `~5.9.2`, strict with `@/*` alias. ESLint `^9.25.0` + `eslint-config-expo ~10.0.0`; `prettier-plugin-tailwindcss ^0.5.14`.
- Metro customized only for NativeWind; Babel preset is `babel-preset-expo`.

## Platform Config
- app.json: slug/name `kopi-shop`, scheme `kopishop`, portrait, automatic UI mode, static web output.
