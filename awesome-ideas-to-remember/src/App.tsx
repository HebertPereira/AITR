import React from 'react';

import GlobalRoutes from './routes/golbalRoutes';
import GlobalStyles from './styles/globalStyles';

import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <GlobalRoutes />
    </>
  );
}

export default App;
