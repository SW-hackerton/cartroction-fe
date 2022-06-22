import { Button } from 'components';
import * as S from './style';

export function Login() {
  return (
    <S.Container>
      <Button text="차량 구매" link="/welcome" />
      <Button text="정비사" link="/welcome" />
    </S.Container>
  );
}
