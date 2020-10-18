import React from 'react';

import GLobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GLobalStyle />
    </>
  );
};

export default App;
