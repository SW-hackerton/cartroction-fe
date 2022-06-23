import styled from 'styled-components';
import background from 'image/home1.png';
import icon from 'image/icon/search.svg';

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
  min-width: 320px;
  width: 44%;
  height: ${searchHeight}px;
  position: relative;
  justify-content: space-around;
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
  font-size: 18px;
  border: 0;
  outline: none;
  font-weight: 400;
  font-size: 2vw;
  color: #8B8B8B;
`;

export const SearchBox__icon = styled.div`
  position: absolute;
  left: 0;
  width: ${searchIconSize}px;
  height: ${searchIconSize}px;
  top: calc(${searchHeight / 2}px - ${searchIconSize / 2}px);
  margin-left: 3%;
  border-radius: 20px;

  background: url(${icon});
  background-size: contain;
  background-repeat : no-repeat;
`;
