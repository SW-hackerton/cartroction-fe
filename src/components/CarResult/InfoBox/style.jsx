import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 560px;
  height: 546px;

  margin-top: 90px;
  margin-bottom: 40px;
  background: #f4f4f4;

  border-radius: 20px;
  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);

  @media (max-width: 590px) {
    width: 90%;
  } ;
`;

export const Icon = styled.img`
  position: absolute;
  width: 162px;
  height: 162px;

  padding: 30px;

  top: -142px;
  left: 20px;

  background-img: url(${props => props.src});

  background: #fcfcfc;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 1;

  border-radius: 50%;
`;

export const Header = styled.header`
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(270.15deg, #0087ff 4.66%, #00c3ff 100.81%);

  color: #fff;
  font-weight: 800;
  text-align: center;

  padding: 20px 0;
`;

export const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  height: calc(100% - 56px);

  padding: 0 25px;

  border-radius: 0px 0px 20px 20px;
`;
