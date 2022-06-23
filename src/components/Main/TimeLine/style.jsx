import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  width: 90px;
  height: 90px;

  border-radius: 50%;
  background: #d9d9d9;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  width: 118px;
  height: 30px;
  background: #ededed;

  margin-top: 10px;
`;
