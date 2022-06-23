import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'components';
import { Main, Manager, User, NotFound } from 'pages';
import { Welcome } from 'components/Login/Welcome';
import { ManageRoute } from 'components/Manager/ManagerRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
        {/* =======
        <Route
          path="/"
          element={<UserRoute element={Main} showSearchBar={false} />}
        />
        <Route
          path="/manager"
          element={<ManageRoute element={Manager} showSearchBar={false} />}
        />
        <Route
          path="/user"
          element={<UserRoute element={User} showSearchBar={true} />}
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
