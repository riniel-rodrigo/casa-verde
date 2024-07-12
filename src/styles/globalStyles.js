import styled, { createGlobalStyle } from "styled-components";
import heroImg from "../assets/hero-yellow.svg";

const myGlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

    }

    body {
        height:100%;
        background-image: url(${heroImg});
        background-repeat: no-repeat;
        background-position: right top;
        background-size:50%;
    }

`;

export const Title = styled.h1`
  font-family: "Elsie Swash Caps", serif;
  font-weight: 900;
  font-size: 5.125rem;
  line-height: 5.904rem;
  color: #202020;
`;

export default myGlobalStyles;


