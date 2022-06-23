import styled from 'styled-components';

export const Container = styled.div`
  width: 560px;
  height: 276px;
  background: #f4f4f4;

  margin-bottom: 40px;

  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);
  border-radius: 20px;

  @media (max-width: 590px) {
    width: 90%;
  } ;
`;
