import * as S from './style';

export function TimeLine({ data, page, idx, length }) {
  console.log(idx, page);

  return (
    <S.Container>
      <S.Image />
      {idx % page !== 0 && <S.Line length={length} />}
    </S.Container>
  );
}
