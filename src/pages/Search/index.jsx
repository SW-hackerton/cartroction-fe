import { Outlet } from 'react-router-dom';
import { NavTemplate } from 'components';
import * as S from './style';

export function Search() {
  return (
    <NavTemplate isSearchBar={false}>
      <S.Container>
        <S.Wrapper>
          <S.SearchBoxWrap>
            <S.SearchBox placeholder="차량번호를 검색해주세요." />
            <S.SearchBox__icon></S.SearchBox__icon>
          </S.SearchBoxWrap>
          <S.SubText>해당 차량의 연대기 입니다.</S.SubText>
          <Outlet />
        </S.Wrapper>
      </S.Container>
    </NavTemplate>
  );
}
