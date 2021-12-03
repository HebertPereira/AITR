import styled from "styled-components";


interface DefaultInputStyleProps {
    isCheckBox: boolean;
    isFocused: boolean;
}

export const DefaultInputContainer = styled.div<DefaultInputStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    
    border: 1px solid ${props => props.isFocused ? "var(--purple-500)" : "var(--dark-1000)"};
    border-radius: 0.3rem;

    padding: 0.3rem 0.5rem;

    > svg {
        margin-right: 0.5rem;

        ${props => props.isFocused ? "fill: var(--purple-500);" : ""}  
    }
`;

export const DefaultInputContent = styled.input`
    border: 0;
    height: 100%;
`;
