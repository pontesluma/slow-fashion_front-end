import Leaflet from 'leaflet';
import mapIconSvg from '../assets/mapIcon.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapIconSvg,
  iconSize: [38, 58],
  iconAnchor: [19, 58],
  popupAnchor: [160, 10],
});

export default mapIcon;
