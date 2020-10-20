import React, { ChangeEvent, useCallback, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Add } from '@material-ui/icons';

import { LeafletMouseEvent } from 'leaflet';

import SideBar from '../../components/SideBar';

import './create-Store.css';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

const CreateStore: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [openingHours, setOpeningHours] = useState<string>('');
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const history = useHistory();

  const handleCreateStore = useCallback(
    event => {
      event.preventDefault();
      const { latitude, longitude } = position;

      const data = new FormData();

      data.append('name', name);
      data.append('about', about);
      data.append('latitude', String(latitude));
      data.append('longitude', String(longitude));
      data.append('contact', contact);
      data.append('opening_hours', openingHours);

      images.forEach(image => {
        data.append('images', image);
      });

      api.post('/stores', data).then(response => {
        history.push(`/store/${response.data.id}`);
      });
    },
    [position, name, about, contact, openingHours, images, history],
  );

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }, []);

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }
      const selectedImages = Array.from(event.target.files);
      setImages(selectedImages);

      const selectedPreviewImages = selectedImages.map(img =>
        URL.createObjectURL(img),
      );
      setPreviewImages(selectedPreviewImages);
    },
    [],
  );

  return (
    <div id="page-create-Store">
      <SideBar />

      <main>
        <form className="create-Store-form" onSubmit={handleCreateStore}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-20.2866688, -40.2980864]}
              style={{ width: '100%', height: 280, marginBottom: 50 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {position.latitude !== 0 ? (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              ) : null}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" onChange={e => setName(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                onChange={e => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(img => (
                  <img key={img} src={img} alt={name} />
                ))}
                <label className="new-image" htmlFor="image[]">
                  <Add style={{ color: '#15b6d6', width: 24, height: 24 }} />
                </label>
              </div>
              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
                style={{ display: 'none' }}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="input-block">
              <label htmlFor="instructions">
                Contato, site e redes sociais
              </label>
              <textarea
                id="instructions"
                onChange={e => setContact(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input
                id="opening_hours"
                onChange={e => setOpeningHours(e.target.value)}
              />
            </div>
          </fieldset>

          <Button className="confirm-button" type="submit">
            Confirmar
          </Button>
        </form>
      </main>
    </div>
  );
};

export default CreateStore;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
