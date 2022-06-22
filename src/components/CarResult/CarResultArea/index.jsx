import { ImageBox, ImageList, InfoBox } from 'components';
import * as S from './style';

export function CarResultArea() {
  return (
    <S.Container>
      <ImageList>
        <ImageBox />
        <ImageBox />
        <ImageBox />
      </ImageList>
      <InfoBox />
    </S.Container>
  );
}
