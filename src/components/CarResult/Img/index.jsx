import paper from 'image/paper.jpeg';
import * as S from './style';

export function Img() {
  return (
    <S.Container>
      <img src={paper} alt="paper" />
    </S.Container>
  );
}
