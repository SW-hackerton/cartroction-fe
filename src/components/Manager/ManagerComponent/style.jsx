import styled from 'styled-components';
import icon from 'image/icon/add_btn.svg';
import iconAdd from 'image/icon/add_btn_color.svg';

const responseSize = 768;
const responseSmallSize = 368;
const headerHeight = 50;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - ${headerHeight}px);
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  margin: auto;
  justify-content: space-between;
  @media (max-width: ${responseSize}px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 55%;
  height: 100%;
  @media (max-width: ${responseSize}px) {
    width: 90%;
    margin: auto;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fcfcfc;
  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);
  border-radius: 20px;

  margin-bottom: 2rem;

  overflow: auto;
`;

export const SubmitBtn = styled.button`
  width: 243px;
  height: 69px;
  background: linear-gradient(270.15deg, #0087ff 4.66%, #00c3ff 100.81%);
  box-shadow: 0px 7px 12px rgba(0, 0, 0, 0.1);
  border-radius: 60.5px;

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: relative;

    left: 40px;
  }

  font-weight: 800;
  font-size: 24px;
  color: #ffffff;
`;

export const EstimateBox = styled.div`
  display: flex;
  position: relative;
  width: 40%;
  height: 100%;

  @media (max-width: ${responseSize}px) {
    width: 90%;
    max-height: 50%;
    margin: auto;
    margin-bottom: 30px;
  }
`;
export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: ${responseSize}px) {
    max-height: 100%;
    margin: auto;
    margin-bottom: 30px;
  }
`;
export const EstimateImg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  outline: none;
  background: #f0f0f3;
  box-shadow: 0px 5px 20px rgba(174, 174, 192, 0.6);
  border-radius: 20px;

  @media (max-width: ${responseSize}px) {
    max-height: 100%;
    margin: auto;
    margin-bottom: 30px;
  }
`;
export const EstimateIcon = styled.div`
  position: absolute;
  display: flex;
  width: 7.5vw;
  height: 7.5vw;
  left: calc(50% - 3.75vw);
  top: calc(50% - 7.75vw);
  background: url(${icon});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const EstimateLabel = styled.label`
  position: absolute;
  display: flex;
  width: 100%;
  top: 50%;
  justify-content: center;
  margin: auto;
  color: #bbbbc1;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  margin: 10px 20px;
  margin-bottom: 0;
`;
export const Label = styled.label`
  display: flex;
  min-width: 100px;
  width: 25%;
  line-height: 25px;
  font-weight: bold;
`;

export const TableRowBox = styled.div`
  width: 90%;
  display: flex;
  height: 25px;
  margin: 0 auto;
  margin-bottom: 0;
  justify-content: space-between;
  flex-basis: {20%, 50%, 30%};
  background: ${props =>
    props.isHead &&
    `linear-gradient(270.15deg, #0087FF 4.66%, #00C3FF 100.81%)`};
  color: ${props => props.isHead && '#ffffff'};
  font-weight: ${props => props.isHead && 'bold'};
`;

export const TableRow = styled.label`
  line-height: 25px;
  width: 100%;
  padding-left: 5px;
`;

export const TableRowInput = styled.input`
  border: none;
  outline: none;
  background: #fcfcfc;

  line-height: 25px;
  width: 100%;
  padding-left: 5px;

  & + & {
    border-left: 1px solid #e9e9ee;
  }
`;

export const TableAdd = styled.div`
  background: url(${iconAdd});
  background-size: contain;
  background-repeat: no-repeat;

  height: 20px;
  width: 20px;
  padding-left: 5px;
  border-radius: 100%;
  margin: auto;
`;

export const Line = styled.div`
  display: flex;
  margin: 3px auto;
  background: #e9e9ee;
  width: 90%;
  left: 5%;
  height: 1px;
`;

export const FullLine = styled.div`
  display: flex;
  margin: 3px auto;
  background: #e9e9ee;
  width: 100%;
  left: 5%;
  height: 1px;
`;

export const SelectCategory = styled.select`
  border: none;
  background: #fcfcfc;
  outline: none;
`;

export const EstimateDataBox = styled.div`
  display: flex;
  margin: 20px;
  margin-top: 23px;
  justify-content: flex-end;
`;
export const InputForm = styled.div`
  display: flex;
  line-height: 15px;
  margin-left: 4px;

  @media (max-width: ${responseSmallSize}px) {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  display: flex;
  height: 15px;
  width: 65px;
  outline: none;
  font-size: 11px;
  border: none;
  border-bottom: 1px solid #e9e9ee;
  text-align: center;
`;
export const InputLabel = styled.label`
  display: flex;
  line-height: 15px;
  font-size: 11px;
  font-weight: bold;
`;

export const FileInput = styled.input``;
