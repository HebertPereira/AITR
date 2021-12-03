import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --dark-100: #F3F3F3;
        --dark-300: #BABABA;
        --dark-400: #767676;
        --dark-1000: #000000; 

        --purple-500: #6805a6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
    }

    button {
        cursor: pointer;
    }
    
    button::-moz-focus-inner {
        border: 0;
    }
`;
