import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Orders from './pages/Orders/Orders';
import Search from './pages/Search/Search';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Wallet from './pages/Wallet/Wallet';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter basename="/eatly/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="orders" element={<Orders />} />
          <Route path="search" element={<Search />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

