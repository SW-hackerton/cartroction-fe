import * as S from './style';

export function TimeLine({ data, page, idx }) {
  return (
    <S.Container>
      <S.Image />

      {idx % page !== 0 && <S.Line />}
    </S.Container>
  );
}
