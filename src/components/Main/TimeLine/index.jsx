import * as S from './style';

export function TimeLine({ data, onClick, page, idx, length }) {
  return (
    <S.Container onClick={onClick}>
      <S.Image>
        <img src={data.src} alt={data.name} />
        <p>{data.name}</p>
      </S.Image>
      {idx % page !== 0 && idx !== length && <S.Line length={length} />}
    </S.Container>
  );
}
