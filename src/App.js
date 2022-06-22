import { StrictMode } from 'react';
import Router from 'router';
import Providers from 'providers';
import { Layout } from 'components';

export default function App() {
  return (
    <StrictMode>
      <Providers>
        <Layout>
          <Router />
        </Layout>
      </Providers>
    </StrictMode>
  );
}
