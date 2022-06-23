import styled from 'styled-components';
import user from 'image/icon/user_white.svg';
import background from 'image/home3.png';

const responseSize = 768;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  background: url(${background});
  background-size: contain;
  background-repeat : no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const ProfileImg = styled.div`
  display: flex;
  max-width: 200px;
  max-height: 200px;
  width: 30vw;
  height: 30vw;
  background: linear-gradient(270.15deg, #0087FF 4.66%, #00C3FF 100.81%);;
  border-radius: 100%;
  margin: auto;
  margin-bottom: 30px;
  position: relative;

  &:after {
    content: '';
    background: url(${user});
    background-size: contain;
    background-repeat : no-repeat;
    
    width: 6.5vw;
    height: 7.5vw;
    position: absolute;
    left: calc(50% - calc(6.5vw / 2));
    top: calc(50% - calc(7.5vw / 2));;

    @media (max-width: ${responseSize}px) {
      width: 11vw;
      height: 12vw;
      position: absolute;
      left: calc(50% - calc(11vw / 2));
      top: calc(50% - calc(12vw / 2));;
    }
  }
`;

export const WelcomeMsg = styled.label`
  display: flex;
  margin: auto;
  font-size: min(25px, 4vw);
  color: #5A5A5A;
`;
