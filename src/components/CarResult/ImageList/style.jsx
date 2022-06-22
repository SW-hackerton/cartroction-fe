import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  & > div:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: 1286px) {
    width: 100%;
  }
`;
