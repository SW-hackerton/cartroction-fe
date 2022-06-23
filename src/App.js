import { StrictMode } from 'react';
import Router from 'router';
import Providers from 'providers';
import * as S from 'App.style';

export default function App() {
  return (
    <StrictMode>
      <Providers>
        <S.AppContainer>
          <Router />
        </S.AppContainer>
      </Providers>
    </StrictMode>
  );
}
