import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Manager, User, NotFound } from 'pages';
import { UserRoute } from 'components/User/UserRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRoute element={Main} showSearchBar={false} />} />
        <Route path="/manager" element={<UserRoute element={Manager} showSearchBar={false} />} />
        <Route path="/user" element={<UserRoute element={User} showSearchBar={true} />} />
        <Route path="*" element={<UserRoute element={NotFound} showSearchBar={false} />} />
      </Routes>
    </BrowserRouter>
  );
}
