/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';


const Palette = {
  milkCoffee: '#F5F5F0', // Creamy Milk
  darkCoffee: '#4A3B32', // Dark Coffee
  lightCoffee: '#D7CCC8', // Light Coffee
  mediumCoffee: '#8D6E63', // Medium Coffee
  grey: '#BCAAA4',
  white: '#FFFFFF',
  black: '#000000',
};

export const Colors = {
  light: {
    text: Palette.darkCoffee,
    background: Palette.milkCoffee,
    tint: Palette.darkCoffee,
    icon: Palette.mediumCoffee,
    tabIconDefault: Palette.grey,
    tabIconSelected: Palette.darkCoffee,
    // Add palette for direct access if needed, though usually we use the semantic names above
    ...Palette,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: Palette.lightCoffee,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: Palette.lightCoffee,
    ...Palette,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
