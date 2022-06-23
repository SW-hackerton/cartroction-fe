import { NavTemplate } from 'components';
import * as S from './style';

export function User() {
  return (
    <NavTemplate isSearchBar={true}>
      <S.Container>User</S.Container>
    </NavTemplate>
  );
}
