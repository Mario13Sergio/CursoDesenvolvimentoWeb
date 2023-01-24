import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
    :root {
        font-size: 62,5;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 1.6rem;
        background: ${({theme}) => theme.color.neutral};
        color: white;
        height: 100vh;
    }
    button, input, select, textarea {
        font-size: 1.6rem;
        border: none;
    }
`