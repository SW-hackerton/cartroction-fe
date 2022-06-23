import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  margin-left: 0.5rem;
`;

export const Line = styled.div`
  position: absolute;

  top: 32%;
  left: 60%;

  width: 170px;
  border: 3px solid #d9d9d9;
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
