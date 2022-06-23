import { NavTemplate } from 'components';
import * as S from './style';

export function Search() {
  return (
    <NavTemplate isSearchBar={false}>
      <S.Container>
        <S.Wrapper>
          <S.SearchBox placeholder='차량번호를 검색해주세요.' />
          <S.SearchBox__icon></S.SearchBox__icon>
        </S.Wrapper>
      </S.Container>
    </NavTemplate>
  );
}
