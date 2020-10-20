import React from 'react';

import 'leaflet/dist/leaflet.css';
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
