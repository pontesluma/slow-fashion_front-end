import React from 'react';
import { ArrowBack } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../../assets/mapIcon.svg';

import { SideContainer } from './styles';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <SideContainer>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <ArrowBack />
          {/* size={24} color="#FFF" */}
        </button>
      </footer>
    </SideContainer>
  );
};

export default SideBar;
