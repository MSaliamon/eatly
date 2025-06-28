import '../../App.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { OrderProvider } from '../../context/OrderContext';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <OrderProvider>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Outlet />
        </div>
      </div>
    </OrderProvider>
  );
}

export default Layout;
