import { createGlobalStyle } from 'styled-components';

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
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        ::-webkit-scrollbar-track {
            background-color: transparent;
        }

        ::-webkit-scrollbar {
            width: 0.5vh;
            height: 0.5vh;
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--purple-500);
        }
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

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        position: relative;

        background-color: var(--dark-100);

        padding: 3rem;
        border-radius: 0.25rem;

        > button:focus {
          border: 1px solid black;
        }
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;

        background: transparent;

        border: 0;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;
