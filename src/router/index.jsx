import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { Main, Manager, User, NotFound } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
