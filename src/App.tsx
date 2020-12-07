import Providers from 'providers/Providers';
import React from 'react';
import Main from 'views/main/Main';

function App() {
  return (
    // Provider bevat het material-ui library standaard theme,
    // de css hiervan wordt overschreden/aangepast met nieuwe styles vanuit de defaultThemeProvider
    <Providers>
      <Main />
    </Providers>
  );
}

export default App;
