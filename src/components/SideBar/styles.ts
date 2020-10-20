import styled from 'styled-components';

export const SideContainer = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #91d78f 0%, #e5e780 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }

  footer {
    a,
    button {
      width: 48px;
      height: 48px;

      border: 0;

      background: #00b55e;
      border-radius: 16px;

      cursor: pointer;

      transition: background-color 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    a:hover,
    button:hover {
      background: #00954e;
    }
  }
`;
