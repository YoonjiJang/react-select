import { Theme } from './types';

// The minimum height of the control
const controlHeight = 38;

export const spacing = {
  controlHeight,
};

export const defaultTheme: Theme = {
  spacing,
};

export type ThemeConfig = Theme | ((theme: Theme) => Theme);
