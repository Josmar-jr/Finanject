import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue-400);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1180px;
  margin: 0 auto;
  padding: 2rem 1rem 8rem;

  img {
    max-width: 60px;
  }

  h1 {
    font-size: 2.75rem;
    color: var(--white);
    span {
      color: var(--yellow-700);
      font-size: 3rem;
    }
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;

    background: var(--yellow-700);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
