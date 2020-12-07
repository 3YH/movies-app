import { useMemo } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

import { useThemeProvider as useApplicationThemeProvider } from 'hooks/ThemeProvider';
import { useDefaultThemeProvider } from 'hooks/DefaultThemeProvider';

export function useTheme() {
  const applicationThemeProvider = useApplicationThemeProvider();
  const defaultThemeProvider = useDefaultThemeProvider();

  return useMemo(
    () =>
      createMuiTheme(
        applicationThemeProvider.theme || defaultThemeProvider.create()
      ),
    // eslint-disable-next-line
    [applicationThemeProvider.theme]
  );
}
