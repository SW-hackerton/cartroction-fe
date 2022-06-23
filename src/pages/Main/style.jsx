import styled from 'styled-components';

const headerHeight = 50;
const searchIconSize = 30;

export const Container = styled.div`
  display: flex;
  width: 100%;

  height: 100%;

  background: #ededed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  min-width: 320px;
  width: 50%;
  height: 50px;
  position: relative;
`;

export const WireSearchBox = styled.input`
  min-width: 150px;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #c4c4c4;
  border-radius: 40px;
  padding-left: calc(${searchIconSize}px * 2 - 5px);
  font-size: 18px;
  border: 0;
`;

export const WireSearchBox__icon = styled.div`
  position: absolute;
  left: 0;
  width: ${searchIconSize}px;
  height: ${searchIconSize}px;
  background: #a4a4a4;
  margin-top: calc(calc(50px - ${searchIconSize}px) / 2);
  margin-left: ${searchIconSize / 2}px;
  border-radius: 20px;
`;
