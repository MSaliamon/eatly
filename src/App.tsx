import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Orders from './pages/Orders/Orders'
import Search from './pages/Search/Search'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Vochers from './pages/Vochers/Vochers'
import Wallet from './pages/Wallet/Wallet'

function App() {
 
  return (
    <>
      <BrowserRouter basename='/eatly/'>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="orders" element={<Orders />} />
          <Route path='search' element={<Search />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='vochers' element={<Vochers />} />
          <Route path='wallet' element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
