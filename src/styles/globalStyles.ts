import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-text: #444444;
  --color-icons: #444444;
  --color-background-container: #CCB3D3;
  --color-background-cards: #EAE7EE;
  --color-border-input: #73ADC1;
  --color-background-input: #EAE7EE;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

border-style, html {
  width: 100vw;
  height: 100vh;
}

body {
  background: linear-gradient(
    to right top, #fb99a5, #f59db3, 
    #eca2bf, #e2a7c8, #d8accf, #cdaed3, #c1b0d6, 
    #b6b2d6, #a4b1d5, #92b0d1, #81afcb, #73adc1
    );
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    overflow-x: hidden;
    overflow-y: overlay;
}

body, input, button {
  font-family: 'Monteserrat';
}

button {
    cursor: pointer;
  }
`;
