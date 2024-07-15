import styled from "styled-components";

export const Container = styled.div``;

export const NewsletterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 36.563rem;
    height: 4.688rem;
    padding-left:1rem;
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

    div {
        display: flex;
        gap: 0.8rem;
    }
`;

export const SubmitButton = styled.button`
        all: unset;
        height: 100%;
        padding: 0 1rem;
        background-color: ${(props) => props.valid ? '#ffcb47' : '#4d4d4d'};
        color: #fff;
        transition:all 0.1s ease-in-out;

        &:hover{
            cursor: pointer;
            cursor: ${(props) => props.valid ? 'pointer' : 'not-allowed'};
            background-color: ${(props) => props.valid ? '#ffb907' : '#4d4d4d'};
        }

        &:active{
            transform: scale(0.95);
            transition: all 0.1s ease-in-out;
        }
`;

export const ErrorMessage = styled.span`
    color: #D41E00 !important;
    font-size: 0.9rem !important;
`;
