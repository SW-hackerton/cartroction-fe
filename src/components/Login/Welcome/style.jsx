import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const ProfileImg = styled.div`
  display: flex;
  max-width: 250px;
  max-height: 250px;
  width: 50vw;
  height: 50vw;
  background: #d9d9d9;
  border-radius: 100%;
  margin: auto;
  margin-bottom: 30px;
`;

export const WelcomeMsg = styled.label`
  display: flex;
  margin: auto;
  font-size: min(18px, 3.5vw);
`;
