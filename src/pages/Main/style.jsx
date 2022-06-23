import styled from 'styled-components';
import background from 'image/home2.png';
import icon from 'image/icon/arrow_white.svg';
import { Link } from 'react-router-dom';

const responseBigSize = 1400;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  background: url(${background});
  background-size: contain;
  background-repeat : no-repeat;
  flex-direction: column;

  @media (min-width: ${responseBigSize}px) {
    background-size: cover;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  min-width: 320px;
  width: 50%;
  height: 50px;
  position: relative;
  top: 25%;
  left: 15%;
  flex-direction: column;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiddleText = styled.label`
  font-size: 2vw;
  font-weight: 700;
  color: #5a5a5a;
  margin-bottom: 12px;
`;

export const PintText = styled.label`
  font-size: 2.5vw;
  font-weight: 700;
  color: #5A5A5A;
  margin: 3vh 0;
`;

export const GoBtn = styled(Link)`
  display: flex;
  width: min(300px, 20vw);
  line-height: min(60px, 4vw);
  background: linear-gradient(270.15deg, #0087FF 4.66%, #00C3FF 100.81%);
  color: white;
  margin-top: 30px;
  justify-content: center;
  border-radius: 60.5px;
  position: relative;
  font-size: 1.3vw;

  &:after {
    content: '';
    display: flex;
    width: 14px;
    height: 22px;
    background: url(${icon});
    background-size: contain;
    background-repeat : no-repeat;
    margin: auto 0;
    margin-left: 3vw;
    margin-right: -1vw;
  }
`;