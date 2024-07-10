import { createGlobalStyle } from "styled-components";
import background from "../assets/background.svg";
import heroImg from "../assets/hero-yellow.svg";

const myGlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        height:100%;
        background-image: url(${heroImg});
        background-repeat: no-repeat;
        background-position: right top;
        background-size:50%;
        /* background-image: url(${background}) repeat; */
    }
`;

export default myGlobalStyles;
