import * as S from './style';

export function TimeLine({ data }) {
  const { date, repair_list } = data;
  return (
    <S.Container>
      <S.Image />
      <p className="time">{date}</p>
      {Object.keys(repair_list).map(key => (
        <div className="repair_list" key={key}>
          <p>
            {key}: {repair_list[key]}
          </p>
        </div>
      ))}
    </S.Container>
  );
}
