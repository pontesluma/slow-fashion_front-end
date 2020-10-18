import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  position: relative;
`;

export const Aside = styled.div`
  background: linear-gradient(329.54deg, #91d78f 0%, #e5e780 100%);
  height: 100%;
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 3vw;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 5vw;
  span {
    font-size: 2.9vw;
  }

  svg {
    color: #00b55e;
    font-size: 3vw;
  }
`;

export const Moto = styled.strong`
  font-size: 4vw;
  width: 100%;
  line-height: 3.5vw;

  margin-bottom: 1.5vw;

  word-wrap: break-word;
`;

export const Subtitle = styled.span`
  font-size: 1.5vw;
  line-height: 2.5vw;
  max-width: 100%;
  word-wrap: break-word;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    font-size: 1.7vw;
  }

  span {
    font-size: 1.7vw;
  }
`;

export const CreateStoreBtn = styled(Button)`
  && {
    margin: 3vw;

    width: 5vw;
    height: 5vw;
    border-radius: 1.7vw;

    position: absolute;
    z-index: 100;

    bottom: 0;
    right: 0;

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
