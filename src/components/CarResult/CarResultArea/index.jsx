import { Img } from '../Img';
import { InfoBox } from '../InfoBox';
import * as S from './style';

export function CarResultArea() {
  return (
    <S.Container>
      <S.Wrapper>
        <Img />
        <Img />
        <Img />
      </S.Wrapper>
      <InfoBox />
    </S.Container>
  );
}
