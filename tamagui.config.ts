import { config as configBase } from '@tamagui/config/v3';
import { createFont, createTamagui } from 'tamagui';

const colorTokens = {
  // Main colors
  primary: '#4CAF50',
  secondary: '#4CAF50',

  // Alert & Status colors
  success: '#4CAF50',
  info: '#2196F3',
  warning: '#FFC107',
  error: '#F44336',
  lightGrey: '#9E9E9E',
  dark: '#212121',
  darkGreen: '#1B5E20',

  // Greyscale
  white: '#FFFFFF',
  grey100: '#F5F5F5',
  grey200: '#EEEEEE',
  grey300: '#E0E0E0',
  grey400: '#BDBDBD',
  grey500: '#9E9E9E',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',
  grey950: '#181818',
  poppedGrey: '#1F222A',
  black: '#000000',
  red: '#F44336',
  pink: '#E91E63',
  purple: '#9C27B0',
  deepPurple: '#673AB7',
  indigo: '#3F51B5',
  blue: '#2196F3',
  lightBlue: '#03A9F4',
  cyan: '#00BCD4',
  teal: '#009688',
  green: '#4CAF50',
  lightGreen: '#8BC34A',
  lime: '#CDDC39',
  yellow: '#FFEB3B',
  amber: '#FFC107',
  orange: '#FF9800',
  deepOrange: '#FF5722',
  brown: '#795548',
  blueGrey: '#607D8B',
  primaryButtonColor: '#528F65',

  // screen
  screenBackground: '#181A20',
};

// Define font size tokens
const fontSizeTokens = {
  1: 10,
  2: 12,
  3: 14,
  4: 16,
  5: 18,
  6: 20,
  7: 24,
  8: 28,
  9: 32,
  10: 40,
};

// Define line height tokens
const lineHeightTokens = {
  1: 15,
  2: 18,
  3: 21,
  4: 24,
  5: 27,
  6: 30,
  7: 36,
  8: 42,
  9: 48,
  10: 60,
};

export const config = createTamagui({
  ...configBase,
  fonts: {
    ...configBase.fonts,
    heading: createFont({
      family: 'Urbanist_700Bold',
      size: fontSizeTokens,
      lineHeight: lineHeightTokens,
    }),
    body: createFont({
      family: 'Urbanist_400Regular',
      size: fontSizeTokens,
      lineHeight: lineHeightTokens,
    }),
    mono: createFont({
      family: 'Urbanist_400Regular',
      size: fontSizeTokens,
      lineHeight: lineHeightTokens,
    }),
  },
  tokens: {
    ...configBase.tokens,
    color: colorTokens,
    space: {
      ...configBase.tokens.space,
      // Add custom spacing if needed
    },
    size: {
      ...configBase.tokens.size,
      // Add custom sizes if needed
    },
    radius: {
      ...configBase.tokens.radius,
      // Add custom radius if needed
    },
    zIndex: {
      ...configBase.tokens.zIndex,
      // Add custom z-index if needed
    },
  },
  themes: {
    light: {
      ...configBase.themes.light,
      // background: colorTokens.white,
      background: colorTokens.grey900,
      // color: colorTokens.black,
      color: colorTokens.white,
      ...colorTokens,
    },
    dark: {
      ...configBase.themes.dark,
      background: colorTokens.grey900,
      color: colorTokens.white,
      ...colorTokens,
    },
  },
});

export default config;

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
