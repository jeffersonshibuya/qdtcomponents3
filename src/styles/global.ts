import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
    font-family: 'Manrope', sans-serif !important;
    padding: 0px 25px;
  }

  body, input, button {

  }

  h1, h2, h3, h4, h5, h6 strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
