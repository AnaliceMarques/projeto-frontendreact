import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --soft-white: #f2f2f2;
        --magenta: #c51ccf;
        --purple: #8234b4;
        --blue-purple: #473390;
        --deep-blue: #1a2965;
        --deep-blue-secondary: #051937;
    }

    h1 {
        font-family: 'Space Mono', monospace;
        color: var(--soft-white)
    }
  
    h2, h3{
        font-family: 'Trispace', sans-serif;
        color: var(--soft-white)
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-image: linear-gradient(to right bottom, var(--deep-blue-secondary), var(--deep-blue), var(--blue-purple), var(--purple), var(--magenta));
        color: var(--soft-white)
    }

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
   
}`;
