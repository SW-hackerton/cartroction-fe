import { ErrorBoundary } from 'react-error-boundary';
import { GlobalStyle } from 'style/GlobalStyle';

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
      {children}
    </ErrorBoundary>
  );
}
