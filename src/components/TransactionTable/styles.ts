import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  overflow-y: auto;
  max-height: 248px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ebf2fb;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  table {
    height: 100%;

    thead th {
      position: sticky;
      top: 0px;

      background: var(--blue-200);
      font-weight: bold;
      color: var(--gray-200);
    }

    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr:nth-of-type(even) {
      border: 0;
      border-radius: 5rem;
      background: #d8e3f1;
    }

    td {
      padding: 1rem 2rem;
    }

    button {
      padding: 0.5rem;
      background: transparent;
    }
  }
`;
