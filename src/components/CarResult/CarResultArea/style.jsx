import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;

  margin: 0 auto;
  padding: 80px 0px;

  display: flex;
  justify-content: space-between;

  overflow: auto;
  @media (max-width: 1227px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
