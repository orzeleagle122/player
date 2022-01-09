import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: #0e161f;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #22476B transparent;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    margin-right: 2px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #22476B;
    border-radius: 16px;
    border: 1px solid transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    color: white;
  }

  @keyframes animateDown {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(15px);
    }
    60% {
      transform: scale(1.2, 1.2);
    }
  }

`;

export default GlobalStyle;