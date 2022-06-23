import { useLocation } from 'react-router';
import { CarResultArea, NavTemplate } from 'components';
import * as S from './style';

export function CarResult() {
  const { state } = useLocation();
  return (
    <S.Container>
      <NavTemplate isSearchBar={false}>
        <CarResultArea state={state} />
      </NavTemplate>
    </S.Container>
  );
}
