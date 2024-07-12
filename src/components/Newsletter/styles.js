import styled from "styled-components";

export const Container = styled.div``;

export const NewsletterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 36.563rem;
    height: 4.688rem;
    box-shadow: 0.625rem 0.625rem 1.875rem 0px #0000000f;

    input {
        all: unset;
        width: 21.875rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.219rem;
        text-align: left;
    }
    ::placeholder {
        color: #bcbcbc;
    }

    button {
        all: unset;
        height: 100%;
        padding: 0 1rem;
        background-color: #ffcb47;
        color: #fff;
        transition:all 0.1s ease-in-out;

        &:hover{
            cursor: pointer;
            background-color:#ffb907;
        }
    }

    div {
        display: flex;
        gap: 0.8rem;
    }
`;
