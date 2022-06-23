import styled from 'styled-components';
import background from 'image/home1.png';
import icon from 'image/icon/search.svg';

const responseSize = 768;
const searchHeight = 65;
const searchIconSize = 30;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  background: url(${background});
  background-size: contain;
  background-repeat : no-repeat;
  
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const SearchBoxWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 44%;
  height: ${searchHeight}px;
  justify-content: space-around;

  @media (max-width: ${responseSize}px) {
    width: 80%;
  }
`;


export const SearchBox = styled.input`
  display: flex;
  min-width: 300px;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);
  border-radius: 46.5px;
  padding-left: calc(${searchIconSize}px * 2 + 5px);
  border: 0;
  outline: none;
  font-weight: 400;
  font-size: 2vw;
  color: #8B8B8B;

  @media (max-width: ${responseSize}px) {
    font-size: 18px;
  }
`;

export const SearchBox__icon = styled.div`
  position: absolute;
  left: 0;
  width: ${searchIconSize}px;
  height: ${searchIconSize}px;
  top: calc(${searchHeight / 2}px - ${searchIconSize / 2}px);
  margin-left: 3.5%;
  border-radius: 20px;

  background: url(${icon});
  background-size: contain;
  background-repeat : no-repeat;
`;

export const SubText = styled.label`
  display: flex;
  font-weight: 400;
  font-size: 1.6vw;
  line-height: 27px;
  text-align: center;
  color: #BBBBC1;

  margin-top: 35px;

  @media (max-width: ${responseSize}px) {
    font-size: 15px;
  }
`;