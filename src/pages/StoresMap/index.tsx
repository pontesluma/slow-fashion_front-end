import React, { useCallback, useEffect, useState } from 'react';
import { Room, Add, ArrowForward } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

import { Map, TileLayer, Marker } from 'react-leaflet';

import api from '../../services/api';
import mapIcon from '../../utils/mapIcon';

import {
  Container,
  Aside,
  Header,
  Logo,
  Moto,
  Subtitle,
  Footer,
  CreateStoreBtn,
  PopupContainer,
} from './styles';

interface Store {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const StoresMap: React.FC = () => {
  const history = useHistory();
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    async function loadStores() {
      const response = await api.get('/stores');
      setStores(response.data);
    }
    loadStores();
  }, []);

  const handleChangePage = useCallback(
    e => {
      e.preventDefault();
      history.push('/store/create');
    },
    [history],
  );

  return (
    <Container>
      <Aside>
        <Header>
          <Logo>
            <Room />
            <span>Slow Fashion</span>
          </Logo>
          <Moto>Moda consciente</Moto>
          <Subtitle>
            Compre roupas de qualidade em lojas de produção local e brechós!
          </Subtitle>
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
        {stores.length !== 0 &&
          stores.map(store => (
            <Marker
              key={store.id}
              icon={mapIcon}
              position={[store.latitude, store.longitude]}
            >
              <PopupContainer
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {store.name}
                <Link to={`/store/${store.id}`}>
                  <ArrowForward fontSize="inherit" />
                </Link>
              </PopupContainer>
            </Marker>
          ))}
      </Map>
      <CreateStoreBtn onClick={handleChangePage}>
        <Add />
      </CreateStoreBtn>
    </Container>
  );
};

export default StoresMap;
