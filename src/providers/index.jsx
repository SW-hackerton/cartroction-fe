import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { GlobalStyle } from 'style/GlobalStyle';
import { store } from 'store';

function ErrorFallback() {
  return (
    <div>
      <h1>Something went wrong.</h1>
    </div>
  );
}

export default function Providers({ children }) {
  return (
    <ErrorBoundary FallbackComponent={<ErrorFallback />}>
      <GlobalStyle />
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
}
