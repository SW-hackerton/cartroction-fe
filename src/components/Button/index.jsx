import * as S from './style';

export function Button({ children, link }) {
  return <S.Btn to={link}>{children}</S.Btn>;
}
