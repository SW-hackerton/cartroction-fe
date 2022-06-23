import { useSelector } from 'react-redux';
import * as S from './style';

export function Header({ isSearchBar, userType = 1 }) {
  const { type } = useSelector(state => state.userType);

  console.log(type);

  const getUserContent = () => {
    // type 1 = 정비사
    if (userType)
      return (
        <S.UserInfoWrapper>
          <S.WireText>~~ 정비소 !~! 정비사님</S.WireText>
        </S.UserInfoWrapper>
      );
    // type 0 = 일반 사용자
    else
      return (
        <S.UserInfoWrapper>
          <S.WireBox></S.WireBox>
          <S.UserBox></S.UserBox>
        </S.UserInfoWrapper>
      );
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.SearchBarWrapper>
          <S.WireBox></S.WireBox>
          {!isSearchBar && <S.WireSearchBox></S.WireSearchBox>}
        </S.SearchBarWrapper>
        {getUserContent()}
      </S.Wrapper>
    </S.Container>
  );
}
