import { ThemeOptions } from '@material-ui/core';

export function useDefaultThemeProvider() {
  return {
    create: (): ThemeOptions => ({
      palette: {
        primary: {
          main: '#2B2E42',
        },
        type: 'dark',
        black: '#000',
      },
      typography: {
        fontFamily: 'Monaco',
        h5: {
          fontSize: 28,
          color: '#fff',
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: 0.18,
        },
      },
      shape: {
        borderRadius: 14,
      },
    }),
  };
}
