import * as S from './style';

export function Header({ isSearchBar }) {
  return (
    <S.Container>
      <S.Wrapper>
        {isSearchBar && (
          <S.SearchBarWrapper>
            <S.WireBox></S.WireBox>
            <S.WireSearchBox></S.WireSearchBox>
          </S.SearchBarWrapper>
        )}
        <S.UserInfoWrapper>
          <S.WireBox></S.WireBox>
          <S.WireBox></S.WireBox>
        </S.UserInfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
