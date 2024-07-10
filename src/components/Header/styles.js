import styled from "styled-components";

export const Header = styled.header`
    display:flex;
    justify-content:space-around;
    align-items:end;
    padding: 0.9rem 0;

`;

export const ListBox = styled.ul`
    display:flex;
    gap: 1.5rem;
    
    li{
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        all:unset;
        font-family: "Montserrat", sans-serif;
        font-weight:600;
        font-size:0.75;
        line-height:1.219rem;
        color:#2c2c2c;
    }
`;