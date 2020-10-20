import React, { useEffect, useMemo, useState } from 'react';
import { AccessTime } from '@material-ui/icons';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import mapIcon from '../../utils/mapIcon';

import SideBar from '../../components/SideBar';
import api from '../../services/api';

import {
  PageStore,
  StoreDetails,
  StoreImages,
  StoreDetailsContent,
  MapContainer,
  OpenDetails,
  Hour,
} from './styles';

interface Images {
  id: number;
  path: string;
}

interface Store {
  id: number;
  name: string;
  about: string;
  contact: string;
  opening_hours: string;
  latitude: number;
  longitude: number;
  images: Images[];
}

interface Params {
  id: string;
}

const Store: React.FC = () => {
  const params: Params = useParams();
  const [store, setStore] = useState<Store>();
  const [imageOnFocus, setImageOnFocus] = useState<Images>();

  useEffect(() => {
    async function loadStores() {
      const response = await api.get(`/stores/${params.id}`);
      setStore(response.data);
    }
    loadStores();
  }, [params]);

  useEffect(() => {
    setImageOnFocus(store?.images[0]);
  }, [store]);

  const contatos = useMemo(() => {
    return store?.id ? store.contact.split(',') : [];
  }, [store]);

  return (
    <PageStore>
      <SideBar />

      <main>
        <StoreDetails>
          <img src={imageOnFocus?.path} alt={store?.name || ''} />

          <StoreImages>
            {store?.images &&
              store?.images.map(image => (
                <button
                  key={image.id}
                  type="button"
                  className={imageOnFocus?.id === image.id ? 'active' : ''}
                  onClick={() => setImageOnFocus(image)}
                >
                  <img src={image.path} alt={store.name} />
                </button>
              ))}
          </StoreImages>

          <StoreDetailsContent>
            <h1>{store?.name}</h1>
            <p>{store?.about}</p>

            <MapContainer>
              {store && (
                <Map
                  center={[store?.latitude, store?.longitude]}
                  zoom={16}
                  style={{ width: '100%', height: 280 }}
                  dragging={false}
                  touchZoom={false}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  doubleClickZoom={false}
                >
                  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[store?.latitude, store?.longitude]}
                  />
                </Map>
              )}
            </MapContainer>

            <hr />

            <h2>Contato</h2>
            {contatos && contatos.map(item => <p key={item}>{item}</p>)}

            <OpenDetails>
              <Hour>
                <div>
                  <AccessTime />
                  Funcionamento
                </div>
                {store?.opening_hours}
              </Hour>
            </OpenDetails>
          </StoreDetailsContent>
        </StoreDetails>
      </main>
    </PageStore>
  );
};

export default Store;
