/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
content: [
  './App.tsx',
  './app/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}',
],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'milk-coffee': 'var(--color-milk-coffee)',
        'dark-coffee': 'var(--color-dark-coffee)',
        'light-coffee': 'var(--color-light-coffee)',
        'medium-coffee': 'var(--color-medium-coffee)',
        'grey': 'var(--color-grey)',
      },
    },
  },
  plugins: [],
}