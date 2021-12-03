import styled from "styled-components";

export const DefaultButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    
    border: 0;
    border-radius: 0.3rem;

    padding: 0.5rem 1rem;

    transition: filter 0.2s;

    > span {
        font-size: clamp(0.4rem, 0.2rem + 0.7vw, 2rem);
    }

    > svg {
        height: 0.8rem;

        margin-right: 0.3rem;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;
