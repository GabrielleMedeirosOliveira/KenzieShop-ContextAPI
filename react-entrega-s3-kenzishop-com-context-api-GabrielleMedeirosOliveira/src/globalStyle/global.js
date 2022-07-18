import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }
  body{
    max-width: 100vw;
    min-height: 100vh ;
    font-family: 'Roboto', sans-serif;
    background-color: #fff9f9;
    overflow-x: hidden;
  }
  @media (max-width: 980px) {
    
    html, body {
      overflow-x: hidden;
    }
    body {
      max-width: 100%;
      overflow: hidden;
    }
    .App{
      max-width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default GlobalStyle;
