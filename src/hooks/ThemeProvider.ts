import { useContext } from 'react';

import { context as appContext } from '../contexts/App';

export function useThemeProvider() {
  const appContextConsumer = useContext(appContext);

  return {
    theme: appContextConsumer.getMuiTheme(),
    setTheme: appContextConsumer.setMuiTheme,
  };
}
