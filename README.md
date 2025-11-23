# Kopi Shop

A coffee-themed Expo app with a custom bottom tab bar and a Kopi Maker screen that generates local kopi names in real time.

## Tech stack
- Expo SDK 54 / React Native 0.81 / React 19
- expo-router + React Navigation Tabs
- NativeWind + Tailwind (coffee palette via CSS variables in `global.css`)
- Zustand for Kopi options and derived names (`stores/kopiMakerStore.ts`)
- TypeScript, ESLint (expo config), prettier-plugin-tailwindcss

## Quick start
```bash
# install
pnpm install  # or npm/yarn if you prefer

# run dev
pnpm start    # same as npx expo start
```
Then choose iOS simulator, Android emulator, Expo Go, or a dev build from the Expo CLI prompt.
