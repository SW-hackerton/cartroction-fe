import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Manager, User, NotFound } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
