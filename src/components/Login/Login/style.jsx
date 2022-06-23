import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => `url(${props.background})`};} ;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    margin: 0 1rem;
  }
`;
