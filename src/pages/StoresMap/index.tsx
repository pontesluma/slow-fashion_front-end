import React, { useCallback } from 'react';
import { Room, Add } from '@material-ui/icons';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { useHistory } from 'react-router-dom';
import {
  Container,
  Aside,
  Header,
  Logo,
  Moto,
  Subtitle,
  Footer,
  CreateStoreBtn,
} from './styles';

const StoresMap: React.FC = () => {
  const history = useHistory();

  const handleChangePage = useCallback(
    e => {
      e.preventDefault();
      history.push('/');
    },
    [history],
  );
  return (
    <Container>
      <Aside>
        <Header>
          <Logo>
            <Room />
            <span>Mapa Brecho</span>
          </Logo>
          <Moto>Moda consciente</Moto>
          <Subtitle>Visite orfanatos e mude o dia de muitas crianças.</Subtitle>
        </Header>
        <Footer>
          <strong>Espírito Santo</strong>
          <span>Vitória</span>
        </Footer>
      </Aside>

      <Map
        center={[-20.2866688, -40.2980864]}
        zoom={15}
        style={{ width: '100%', height: '100%', zIndex: 100 }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <CreateStoreBtn onClick={handleChangePage}>
        <Add />
      </CreateStoreBtn>
    </Container>
  );
};

export default StoresMap;
