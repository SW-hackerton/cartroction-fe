import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1286px) {
    flex-direction: column-reverse;
  }
`;
