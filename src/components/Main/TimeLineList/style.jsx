import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1000px;
  width: fit-content;

  display: flex;

  /* justify-content: space-evenly; */
  align-items: center;

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
