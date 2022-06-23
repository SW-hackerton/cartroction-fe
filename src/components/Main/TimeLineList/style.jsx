import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: 320px;
  width: 50%;

  display: flex;
  justify-content: space-evenly;

  & .time {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  & .repair_list {
    margin-bottom: 0.5rem;

    text-align: start;
  }

  overflow: auto;
`;

export const Connection = styled.div`
  width: 100%;
  position: absolute;

  top: 155px;
  border: 3px solid #d9d9d9;
`;
