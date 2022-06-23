import styled from 'styled-components';

const responseSmallSize = 400;
const responseSize = 768;
const boardSize = {
  width: 17,
  height: 10,
}

export const Container = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  
  @media (max-width: ${responseSize}px) {
    margin-top: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const RowWrapper = styled.div`
  display: flex;
  & + & {
    margin-top: 10px;
  }
`;

export const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${boardSize.width}vw;
  height: ${boardSize.height}vw;
  background: #FFFFFF;
  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);
  border-radius: 20px;
  padding: 0 2%;
  justify-content: space-between;

  & + & {
    margin-left: 10px;
  }

  @media (max-width: ${responseSize}px) {
    width: max(150px, ${boardSize.width * 2.5}vw);
    height: max(70px, ${boardSize.height * 1.5}vw);
    padding: 0 4%;
  }
  @media (max-width: ${responseSmallSize}px) {
    padding: 0 5%;
  }
`;
export const BoardTitle = styled.div`
  display: flex;
  color: #0087FF;
  font-size: 2vw;
  font-weight: 800;
  line-height: ${boardSize.height / 2}vw;

  @media (max-width: ${responseSize}px) {
    margin-top: 5px;
  }
`;

export const DscWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding 0 0 7% 0;
`;
export const DscBox = styled.div`
  display: flex;
  margin-bottom: 3px;
`;
export const DscBold = styled.div`
  display: flex;
  font-size: 1vw;
  font-weight: 800;
`;
export const DscNormal = styled.div`
  display: flex;
  font-size: 1vw;
  font-weight: 400;
`;