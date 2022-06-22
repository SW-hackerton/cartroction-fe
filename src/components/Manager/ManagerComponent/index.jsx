import * as S from './style';

export function ManagerComponent() {
  const mkTableAddBtn = () => {
    return (<S.TableRowBox><S.TableAdd>+</S.TableAdd></S.TableRowBox>)
  }
  const mkTableRow = (category, content, cost) => {
    return (
      <S.TableRowBox>
        <S.TableRow>{category}</S.TableRow>
        <S.TableRow>{content}</S.TableRow>
        <S.TableRow>{cost}</S.TableRow>
      </S.TableRowBox>
    )
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.EstimateImg></S.EstimateImg>
        <S.InputWrapper>
          <S.InputBox>
            <S.Content>
              <S.Label>차량 번호</S.Label>
              <S.Input />
            </S.Content>
            <S.Content>
              <S.Label>담당자</S.Label>
              <S.Input />
            </S.Content>
            <S.Content>
              <S.Label>차량 KM 수</S.Label>
              <S.Input />
            </S.Content>
          </S.InputBox>
          <S.InputBox>
            <S.Content><S.Label>정비 내역</S.Label></S.Content>
            {mkTableRow('카테고리', '정비내역', '비용')}
            {mkTableAddBtn()}
          </S.InputBox>
        </S.InputWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
