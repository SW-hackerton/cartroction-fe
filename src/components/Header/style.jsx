import styled from 'styled-components';
import logo from 'image/icon/car_logo.svg';
import user from 'image/icon/user.svg';

const responseSize = 768;
const contentSize = 30;
const getContentHeight = (height = contentSize) => `height: ${height}px`;
const getContentMargin = (margin = 10) => `margin: auto ${margin}px auto 0`;

export const Container = styled.div`
  position: relative;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;

  @media (max-width: ${responseSize}px) {
    width: 90%;
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 60%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  margin-left: auto;
  width: 50%;
  justify-content: right;
`;

export const LogoBox = styled.div`
  min-width: 150px;
  width: 20%;
  ${getContentHeight()};
  ${getContentMargin()};
  background: url(${logo});
  background-size: contain;
  background-repeat : no-repeat;
`;

export const UserBox = styled.div`
  width: ${contentSize}px;
  ${getContentHeight()};
  margin: auto 0;
  background: url(${user});
  background-size: contain;
  background-repeat : no-repeat;
`;

export const WireSearchBox = styled.div`
  min-width: 300px;
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
    margin-top: calc(calc(${contentSize}px - 25px) / 2);
    margin-left: 5px;
    border-radius: 20px;
  }

  @media (max-width: ${responseSize}px) {
    min-width: 100px;
    width: 90%;
    margin: auto;
  }
`;

export const WireText = styled.label`
  display: flex;
  margin: auto;
  font-size: min(16px, 3vw);
  margin-right: 0;
`;
