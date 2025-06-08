import '../../App.scss'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="main"></main>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
