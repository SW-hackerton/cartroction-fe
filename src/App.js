import { StrictMode } from 'react';
import Router from 'router';
import Providers from 'providers';

export default function App() {
  return (
    <StrictMode>
      <Providers>
        <Router />
      </Providers>
    </StrictMode>
  );
}
