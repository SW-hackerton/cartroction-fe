import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Manager, User, CarResult, NotFound } from 'pages';
import { UserComponent } from 'components';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />}>
          <Route path="result" element={<CarResult />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
