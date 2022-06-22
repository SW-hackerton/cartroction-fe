import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'components';
import { Main, Manager, User, NotFound } from 'pages';
import { UserRoute } from 'components/User/UserRoute';
import { Welcome } from 'components/Login/Welcome';
import { ManageRoute } from 'components/Manager/ManagerRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
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
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/welcome"
          element={
            <UserRoute element={Welcome} showSearchBar={true} hidden={true} />
          }
        />
        <Route
          path="*"
          element={<UserRoute element={NotFound} showSearchBar={false} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
