import * as S from './style';

export function Main() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextBox>
          <S.MiddleText>중고차를 고민하고 있을 때</S.MiddleText>
          <S.MiddleText>차 관리 상태를 확인하고 싶을 때</S.MiddleText>
          <S.PintText>중고차 들의 자기소개를 봐보자!</S.PintText>
        </S.TextBox>
        <S.GoBtn to="/search">차기소개서 확인하기</S.GoBtn>
      </S.Wrapper>
    </S.Container>
  );
}
