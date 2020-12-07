import React, { useState } from 'react';

import { Theme as MuiTheme } from '@material-ui/core';

interface IContext {
  getMuiTheme(): MuiTheme;
  setMuiTheme(theme: MuiTheme): void;
}

export const context = React.createContext<IContext>({} as IContext);

interface IProviderProps {
  children: any;
}

export function Provider(props: IProviderProps) {
  const { children } = props;

  const [muiThemeState, setMuiThemeState] = useState<MuiTheme>();

  const getMuiTheme = (): MuiTheme => muiThemeState!;

  const setMuiTheme = (theme: MuiTheme): void => setMuiThemeState(theme);

  return (
    <context.Provider
      value={{
        getMuiTheme,
        setMuiTheme,
      }}
    >
      {children}
    </context.Provider>
  );
}
