import { Button } from 'components';
import * as S from './style';

export function MainArea() {
  return (
    <S.Container>
      <Button text="차량 구매" link="/user" />
      <Button text="정비사" link="/manager" />
    </S.Container>
  );
}
