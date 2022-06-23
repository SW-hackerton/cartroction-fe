import { ManagerComponent, NavTemplate } from 'components';
import * as S from './style';

export function Manager() {
  return (
    <NavTemplate isSearchBar={false}>
      <S.Container>
        <ManagerComponent />
      </S.Container>
    </NavTemplate>
  );
}
