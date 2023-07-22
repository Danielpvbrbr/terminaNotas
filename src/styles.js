import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {    
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::-webkit-scrollbar {
  display: none;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export const Container = styled.div`
    width:99vw ;
    height: 99vh;
    background-color: #4682B4;
    border:1px solid red ;
`;

export default GlobalStyle