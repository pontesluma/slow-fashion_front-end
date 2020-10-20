import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowForward, Room } from '@material-ui/icons';

import {
  Container,
  ContentWrapper,
  InfoContent,
  Logo,
  Info,
  Moto,
  Subtitle,
  DetailsContent,
  Location,
  State,
  City,
  InitialBtn,
} from './styles';

const Landing: React.FC = () => {
  const history = useHistory();

  const handleChangePage = useCallback(
    e => {
      e.preventDefault();
      history.push('/map');
    },
    [history],
  );

  return (
    <Container>
      <ContentWrapper>
        <InfoContent>
          <Logo>
            <Room />
            <span>Slow Fashion</span>
          </Logo>
          <Info>
            <Moto>Moda consciente</Moto>
            <Subtitle>
              Compre roupas de qualidade em lojas de produção local e brechós!
            </Subtitle>
          </Info>
        </InfoContent>

        <DetailsContent>
          <Location>
            <State>Espírito Santo</State>
            <City>Vitória</City>
          </Location>
          <InitialBtn onClick={handleChangePage}>
            <ArrowForward />
          </InitialBtn>
        </DetailsContent>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
