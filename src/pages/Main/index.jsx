import { TimeLineList, NavTemplate } from 'components';
import * as S from './style';

export function Main() {
  return (
    <NavTemplate isSearchBar={false}>
      <S.Container>
        <S.Wrapper>
          <S.WireSearchBox />
          <S.WireSearchBox__icon />
        </S.Wrapper>
        <TimeLineList />
      </S.Container>
    </NavTemplate>
  );
}
