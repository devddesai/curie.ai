import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121212;
    color: #00f0ff;
    font-family: 'Press Start 2P', cursive;
  }

  h1, h2, h3 {
    color: #ff0077;
  }
`;

export default GlobalStyles;
