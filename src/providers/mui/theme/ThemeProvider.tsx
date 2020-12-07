import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useTheme } from './theme';

interface IProps {
  children: any;
}

export default function ThemeProvider(props: IProps) {
  const { children } = props;

  const theme = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
      <CssBaseline />
    </MuiThemeProvider>
  );
}
