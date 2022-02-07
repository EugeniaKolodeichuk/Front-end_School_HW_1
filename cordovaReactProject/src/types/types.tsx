import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export type Properties = {
  children: ReactNode;
};

export type Theme = {
  dark: DefaultTheme;
  light: DefaultTheme;
};

export type ContextTheme = {
  value: keyof Theme;
  setThemeValue: ((value: keyof Theme) => void) | null;
};
