import { useDispatch } from 'react-redux';
import { setUserType } from 'store';
import { Button } from 'components';
import * as S from './style';

export function Login() {
  const dispatch = useDispatch();

  const onClick = ({ target }) => {
    if (target.text === '정비사') dispatch(setUserType(1));
    if (target.text === '차량 구매') dispatch(setUserType(0));
  };
  return (
    <S.Container onClick={onClick}>
      <Button text="차량 구매" link="/welcome" />
      <Button text="정비사" link="/welcome" />
    </S.Container>
  );
}
