import { useSelector } from 'react-redux';
import * as S from './style';

export function Welcome() {
  const { type } = useSelector(state => state.userType);

  return (
    <S.Container to={type ? '/manager' : '/search'}>
      <S.Wrapper>
        <S.ProfileImg></S.ProfileImg>
        <S.WelcomeMsg>{'안녕하세요 ~~ 님 반갑습니다!'}</S.WelcomeMsg>
      </S.Wrapper>
    </S.Container>
  );
}
