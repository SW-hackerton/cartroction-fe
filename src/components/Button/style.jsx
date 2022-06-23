import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled(Link)`
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 10rem;
    height: 10rem;
  }

  p {
    font-size: 1.5rem;
    color: black;
  }
`;
