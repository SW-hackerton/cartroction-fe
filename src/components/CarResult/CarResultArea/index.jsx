import { Img } from '../Img';
import { InfoBox } from '../InfoBox';
import * as S from './style';

export function CarResultArea({ state }) {
  return (
    <S.Container>
      <S.Wrapper>
        <Img />
      </S.Wrapper>
      <InfoBox state={state} />
    </S.Container>
  );
}
