import * as S from './style';

export function Header({ showSearchBar, hidden }) {
  if (hidden) return;
  return (
    <S.Container>
      <S.Wrapper>
        {showSearchBar && (
          <S.SearchBarWrapper>
            <S.WireBox></S.WireBox>
            <S.WireSearchBox></S.WireSearchBox>
          </S.SearchBarWrapper>
        )}
        <S.UserInfoWrapper>
          <S.WireBox></S.WireBox>
          <S.UserBox></S.UserBox>
        </S.UserInfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
