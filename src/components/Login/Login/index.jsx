import { useDispatch } from 'react-redux';
import { setUserType } from 'store';
import login from 'image/icon/login.svg';
import userLogin from 'image/icon/userLogin.svg';
import managerLogin from 'image/icon/managerLogin.svg';
import { Button } from 'components';
import * as S from './style';

export function Login() {
  const dispatch = useDispatch();

  const onClick = ({ target }) => {
    if (target.text === '정비사') dispatch(setUserType(1));
    if (target.text === '차량 구매') dispatch(setUserType(0));
  };
  return (
    <S.Container onClick={onClick} background={login}>
      <Button text="차량 구매" link="/welcome">
        <span>
          <img src={userLogin} alt="user login img" />
          <p>사용자</p>
        </span>
      </Button>
      <Button text="정비사" link="/welcome">
        <span>
          <img src={managerLogin} alt="user login img" />
          <p>정비사</p>
        </span>
      </Button>
    </S.Container>
  );
}
