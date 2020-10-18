import styled from 'styled-components';
import { Button } from '@material-ui/core';

import landing from '../../assets/landing.svg';

export const Container = styled.div`
  background: linear-gradient(329.54deg, #91d78f 0%, #e5e780 100%);
  height: 100vh;
  width: 100vw;
`;

export const ContentWrapper = styled.div`
  background: url(${landing}) no-repeat 70% center fixed;
  background-size: 50%;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 30%;
  height: 80%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 2.9vw;
  }

  svg {
    color: #00b55e;
    font-size: 3vw;
  }
  /* margin-bottom: 110px; */
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Moto = styled.strong`
  font-size: 5.5vw;
  width: 100%;
  line-height: 5vw;

  margin-bottom: 1.5vw;

  word-wrap: break-word;
`;

export const Subtitle = styled.span`
  font-size: 1.7vw;
  line-height: 2.5vw;
  max-width: 100%;
  word-wrap: break-word;
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  margin-left: 2vw;

  width: 50%;
  height: 80%;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const State = styled.strong`
  font-weight: bold;
  font-size: 1.7vw;
`;

export const City = styled.span`
  font-size: 1.7vw;
  font-family: 'Nunito', sans-serif;
`;

export const InitialBtn = styled(Button)`
  && {
    width: 5vw;
    height: 5vw;
    border-radius: 1.7vw;

    background: #00b55e;
    svg {
      color: #192534;
      width: 2vw;
      height: 2vw;
    }

    :hover {
      background: #96feff;
    }
  }
`;
