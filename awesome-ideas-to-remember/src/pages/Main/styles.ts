import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    height: calc(100vh - 5rem);
`;

export const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    height: 100%;

    padding-top: 1rem;

    > h1 {
        font-size: 3rem;
        font-weight: 600;
    }

    > h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    > div {
        display: flex;
        width: 100%;
    }
`;

export const MainContentCarList = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 0 0.5rem 0.5rem 0;

    > div + div {
        margin-top: 1rem;
    }
`;

export const SearchBarContainer = styled.form`
    display: flex;
    align-items: center;
    width: 100%;

    padding: 2rem 0 1rem 0;

    > section {
        display: flex;
        align-items: center;

        margin-left: 0.5rem;
    }

    > section > input {
        margin: 0 0.5rem;
        cursor: pointer;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 1rem;

    border: 1px solid var(--dark-300);
    border-radius: 0.5rem;

    box-shadow: 2px 2px 1px 1px var(--dark-400);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > div > h2 {
        font-weight: 600;
    }

    > div > button > span {
        &:hover {
            text-decoration: underline;
        }
    }

    > p {
        padding: 1rem 0;
    }

    > span {
        font-weight: 600;
    }
`;

export const CardBoxButton = styled.div`
    display: flex;

    > button {
        background-color: var(--purple-500);
        color: var(--dark-100);
    }

    > button + button {
        background-color: transparent;
        color: var(--dark-1000);
    }
`;
