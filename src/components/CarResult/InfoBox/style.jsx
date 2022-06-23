import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 560px;
  height: 546px;

  margin-bottom: 40px;
  background: #f4f4f4;

  @media (max-width: 590px) {
    width: 90%;
  } ;
`;

export const Icon = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;

  top: -50px;
  left: 20px;

  background: #d9d9d9;

  border-radius: 50%;
`;
