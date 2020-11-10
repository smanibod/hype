import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  html, body {
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  border: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  overflow-x: auto;
}`;
