import { createContext } from 'react';

export type InitialState = {
  theme: string;
  setTheme: (param: string) => void;
};

export const initialThemeState: InitialState = {
  theme: 'light',
  setTheme: () => null,
};

const ThemeContext = createContext(initialThemeState);

export { ThemeContext };
