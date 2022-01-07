import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  h1,h2,h3,h4,h5{
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;