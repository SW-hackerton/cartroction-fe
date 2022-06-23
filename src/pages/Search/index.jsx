import { NavTemplate } from 'components';
import * as S from './style';

export function Search() {
  return (
    <NavTemplate isSearchBar={false}>
      <S.Container>
        <S.Wrapper>
          <S.SearchBoxWrap>
            <S.SearchBox placeholder='차량번호를 검색해주세요.' />
            <S.SearchBox__icon></S.SearchBox__icon>
          </S.SearchBoxWrap>
          <S.SubText>차기소개서는 중고차들의 연대기를 보여줍니다.</S.SubText>
        </S.Wrapper>
      </S.Container>
    </NavTemplate>
  );
}
