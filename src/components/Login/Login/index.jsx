import { useDispatch } from 'react-redux';
import { setUserType } from 'store';
import login from 'image/icon/login.svg';
import userLogin from 'image/icon/userLogin.svg';
import managerLogin from 'image/icon/managerLogin.svg';
import { Button } from 'components';
import * as S from './style';

export function Login() {
  const dispatch = useDispatch();

  const onClick = (type) => {
    return () => dispatch(setUserType(type));
  };
  return (
    <S.Container background={login}>
      <Button link="/welcome">
        <span onClick={onClick(0)}>
          <img src={userLogin} alt="user login img" />
          <p>사용자</p>
        </span>
      </Button>
      <Button link="/welcome">
        <span onClick={onClick(1)}>
          <img src={managerLogin} alt="user login img" />
          <p>정비사</p>
        </span>
      </Button>
    </S.Container>
  );
}
