import { TimeLineList } from 'components';
import * as S from './style';

export function Main() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WireSearchBox />
        <S.WireSearchBox__icon />
      </S.Wrapper>
      <TimeLineList />
    </S.Container>
  );
}
