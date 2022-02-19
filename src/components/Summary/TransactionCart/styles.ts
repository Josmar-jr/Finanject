import styled, { css } from "styled-components";

interface StyleProps {
  highlight: boolean;
}

export const Container = styled.div<StyleProps>`
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  /* color: ${({ highlight }) => highlight && "var(--white)"}; */

  background: ${({ highlight }) =>
    highlight ? "var(--yellow-700)" : "var(--white)"};

  ${({ highlight }) =>
    highlight &&
    css`
      svg {
        fill: var(--white);
      }
    `}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
  &.highlight-background {
    background: var(--green);
  }
`;
