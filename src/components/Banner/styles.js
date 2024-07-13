import styled from 'styled-components';

export const BannerContainer = styled.div`
    display:flex;
    justify-content:center;
`;

export const Banner = styled.div`
    display: flex;
    justify-content:start;
    width: 62.188rem;
    height: 24rem;
    box-shadow: 10px 10px 30px 0px #0000000F;

    img{
        width: 36.563rem;
        height: auto;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    li{
        list-style:none;
        display:flex;
        align-items:center;
        gap:1rem;

        font-size: 1.2rem;
        font-weight: 300;
        line-height:1.676rem;
        text-align: left;
        color:#8f8f8f;

    }

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding:3.625rem 2rem;

        span{
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.625rem;
            text-align: left;
            color:#8f8f8f;
        }

        h2{
            font-family: "Elsie Swash Caps", serif;
            font-size: 42px;
            font-weight: 900;
            line-height: 48.38px;
            text-align: left;

        }
    }

`;