import * as React from 'react';

import MuiProvider from './mui/MuiProvider';

import { Provider as AppContextProvider } from '../contexts/App';

interface IProps {
  children: any;
}

export default function Providers(props: IProps) {
  const { children } = props;

  return (
    <AppContextProvider>
      <MuiProvider>{children}</MuiProvider>
    </AppContextProvider>
  );
}
