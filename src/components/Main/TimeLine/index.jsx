import * as S from './style';

export function TimeLine({ data, page, idx, length }) {
  return (
    <S.Container>
      <S.Image>
        <img src={data.src} alt={data.name} />
        <p>{data.name}</p>
      </S.Image>
      {idx % page !== 0 && idx !== length && <S.Line length={length} />}
    </S.Container>
  );
}
