import styled from 'styled-components';

const contentHeight = 30;
const getContentHeight = (height = contentHeight) => `height: ${height}px`;
const getContentMargin = (margin = 10) => `margin: auto ${margin}px auto 0`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  background: #e4e4e4;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const WireBox = styled.div`
  min-width: 50px;
  width: 10%;
  ${getContentHeight()};
  ${getContentMargin()};
  background: #c4c4c4;
`;

export const WireSearchBox = styled.div`
  min-width: 150px;
  width: 40%;
  ${getContentHeight()};
  ${getContentMargin()};
  background: #c4c4c4;
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background: #a4a4a4;
    margin-top: calc(calc(${contentHeight}px - 25px) / 2);
    margin-left: 5px;
    border-radius: 20px;
  }
`;
