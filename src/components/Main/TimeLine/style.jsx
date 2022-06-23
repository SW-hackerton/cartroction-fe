import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  position: absolute;
  width: 200px;
  height: 10px;
  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);
  left: 70px;
`;

export const Image = styled.div`
  width: 160px;
  height: 160px;
  z-index: 1;
  border-radius: 50%;
  background: #d9d9d9;
`;
