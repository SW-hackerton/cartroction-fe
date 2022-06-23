import styled from 'styled-components';

const responseSize = 768;

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

export const InputWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;

  @media (max-width: ${responseSize}px) {
    width: 90%;
    margin: auto;
  }
`;

export const EstimateImg = styled.div`
  display: flex;
  width: 45%;
  max-height: 700px;
  height: 100%;
  background: #d9d9d9;

  @media (max-width: ${responseSize}px) {
    width: 90%;
    max-height: 30%;
    margin: auto;
    margin-bottom: 30px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  margin: 20px;
  margin-bottom: 0;
`;
export const Label = styled.label`
  display: flex;
  min-width: 100px;
  width: 25%;
  line-height: 25px;
`;
export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 25px;
  border: 0;
  border-bottom: 1px solid #c4c4c4;
  background: #f4f4f4;
  
  &:focus {
    outline: none;
  }
`;

export const TableRowBox = styled.div`
  display: flex;
  height: 25px;
  margin: 20px;
  margin-bottom: 0;
  background: #d9d9d9;
  justify-content: space-between;
`;

export const TableRow = styled.label`
  line-height: 25px;
  width: 100%;
  text-align: center;
`;

export const TableAdd = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  border-radius: 100%;
  background: #f4f4f4;
  margin: auto;
`;