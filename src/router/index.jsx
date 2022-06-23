import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'components';
import { Main, Manager, User, NotFound, CarResult, Search } from 'pages';
import { Welcome } from 'components/Login/Welcome';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result" element={<CarResult />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
