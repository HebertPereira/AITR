/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

interface DefaultTextFieldStyleProps {
  isFocused: boolean;
}

export const DefaultTextFieldContainer = styled.textarea<DefaultTextFieldStyleProps>`
  background-color: transparent;

  border-radius: 0.3rem;
  border: 1px solid
    ${(props) => (props.isFocused ? 'var(--purple-500)' : 'var(--dark-1000)')};

  padding: 0.5rem;

  font-size: clamp(0.4rem, 0.4rem + 0.6vw, 2rem);
`;
