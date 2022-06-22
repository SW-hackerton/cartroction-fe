import * as S from './style';

export function Button({ text, link }) {
  return <S.Btn to={link}>{text}</S.Btn>;
}
