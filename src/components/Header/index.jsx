import { useSelector } from 'react-redux';
import * as S from './style';

export function Header({ isSearchBar = false, userType }) {
  const { type } = useSelector(state => state.userType);

  console.log(type);

  const getUserContent = () => {
    // type 1 = 정비사
    if (userType)
      return (
        <S.UserInfoWrapper to={'/login'}>
          <S.WireText>~~ 정비소 !~! 정비사님</S.WireText>
        </S.UserInfoWrapper>
      );
    // type 0 = 일반 사용자
    else
      return (
        <S.UserInfoWrapper to={'/login'}>
          <S.UserBox></S.UserBox>
        </S.UserInfoWrapper>
      );
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.SearchBarWrapper>
          <S.LogoBox to={'/'}></S.LogoBox>
          {isSearchBar && <S.WireSearchBox></S.WireSearchBox>}
        </S.SearchBarWrapper>
        {getUserContent()}
      </S.Wrapper>
    </S.Container>
  );
}
