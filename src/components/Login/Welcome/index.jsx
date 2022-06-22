import * as S from './style';

export function Welcome() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ProfileImg></S.ProfileImg>
        <S.WelcomeMsg>{'안녕하세요 ~~ 님 반갑습니다!'}</S.WelcomeMsg>
      </S.Wrapper>
    </S.Container>
  );
}
