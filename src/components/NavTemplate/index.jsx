import { Header } from 'components';
import * as S from './style';

export function NavTemplate({ isSearchBar, children }) {
  return (
    <>
      <Header isSearchBar={isSearchBar} />
      <S.Container>{children}</S.Container>
    </>
  );
}
