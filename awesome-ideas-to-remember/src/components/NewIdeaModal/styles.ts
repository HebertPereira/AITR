/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

interface NewIdeaModalStyleProps {
  isDescription?: boolean;
}

export const NewIdeaModalContainer = styled.form`
  > h2 {
    display: flex;
    align-items: center;
    color: var(--purple-500);

    font-size: clamp(0.4rem, 0.4rem + 1vw, 2rem);
    font-weight: 600;

    margin-bottom: 1rem;
  }

  > h2 > svg {
    margin-right: 0.5rem;
  }

  > input {
    width: 100%;
    height: 4rem;

    background-color: var(-dark-100);

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    font-size: 400;
    font-size: 1rem;

    padding: 0 1.5rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  > button {
    background-color: var(--purple-500);
    color: var(--dark-100);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const NewIdeaModalInputBox = styled.div<NewIdeaModalStyleProps>`
  display: flex;
  flex-direction: column;

  margin: 1rem 0;

  > span {
    font-size: clamp(0.4rem, 0.4rem + 0.8vw, 2rem);

    margin-bottom: 0.5rem;
  }

  > span > strong {
    font-size: clamp(0.4rem, 0.4rem + 0.5vw, 2rem);
    color: var(--dark-400);

    margin-left: 0.5rem;
  }

  > textarea {
    display: block;
    ${(props) => (props.isDescription ? 'height: 10rem' : '')}
  }
`;
