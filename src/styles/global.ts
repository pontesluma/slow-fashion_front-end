import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: #EBF2F5;
  }
  
  body, input, button, textarea, span, p, a {
    font: 600 18px 'Nunito', sans-serif;
  }

  strong {
    font: 700 18px 'Nunito', sans-serif;
  }
`;

export default GlobalStyle;