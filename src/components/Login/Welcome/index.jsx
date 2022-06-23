import { useSelector } from 'react-redux';
import * as S from './style';

export function Welcome() {
  const { type } = useSelector(state => state.userType);
  const getMessage = (name = '홍길동') => {
    return `안녕하세요 ${name} ${type ? '정비사' : ''} 님 반갑습니다!`
  }
  return (
    <S.Container to={type ? '/manager' : '/search'}>
      <S.Wrapper>
        <S.ProfileImg></S.ProfileImg>
        <S.WelcomeMsg>{getMessage()}</S.WelcomeMsg>
      </S.Wrapper>
    </S.Container>
  );
}
