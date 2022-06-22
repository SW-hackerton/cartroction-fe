import { Outlet } from 'react-router-dom';
import * as S from './style';

export function User() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}
