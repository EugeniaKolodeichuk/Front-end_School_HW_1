import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${properties => properties.theme.background};
 color: ${properties => properties.theme.color};
  font-size: 18px;
},

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
},

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
},

img {
  display: flex;
  max-width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
`;

export default GlobalStyle;
