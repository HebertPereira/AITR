import styled from "styled-components";

export const DeleteIdeaModalContainer = styled.form`
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

   > span {
        display: block;
        font-size: clamp(0.4rem, 0.4rem + 1vw, 2rem);

        margin: 2rem 0;
   }

   > span > strong {
        font-weight: 600;

        margin-left: 0.5rem;
   }

   > div {
       display: flex;
   }

   > div > button {
       min-width: 6rem;
       border: 1px solid var(--dark-300);

       &:hover {
         filter: brightness(0.9);
      }
   }

   > div > button + button {
        background-color: var(--purple-500);
        color: var(--dark-100);

        margin-left: 0.5rem;

        border: 0;
   }
`;