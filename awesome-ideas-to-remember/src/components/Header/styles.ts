/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  background-color: var(--purple-500);
  color: var(--dark-100);

  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
  }

  > div > h1 {
    font-weight: 600;
    margin-right: 2rem;
  }

  > button {
    background-color: var(--dark-100);
    color: var(--purple-500);
  }
`;
