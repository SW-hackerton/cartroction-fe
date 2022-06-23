import { CarResultArea, NavTemplate } from 'components';
import * as S from './style';

export function CarResult() {
  return (
    <S.Container>
      <NavTemplate isSearchBar={false}>
        <CarResultArea />
      </NavTemplate>
    </S.Container>
  );
}
