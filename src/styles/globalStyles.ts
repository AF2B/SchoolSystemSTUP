import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        font-family: 'Poppins', sans-serif;
        letter-spacing: .6px;
        overflow-x: hidden;
    }
`;
