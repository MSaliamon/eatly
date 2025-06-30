import { NavLink } from 'react-router-dom';
import './Nav.scss';
import home from '../../../assets/homepage/svg/home.svg';
import receipt from '../../../assets/homepage/svg/receipt.svg';
import card from '../../../assets/homepage/svg/card.svg';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            <img src={home} alt="home" className="nav__img" />
            <p className="nav__link-text">Dashboard</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/orders" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            <img src={receipt} alt="receipt" className="nav__img" />
            <p className="nav__link-text">Orders</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/wallet" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            <img src={card} alt="card" className="nav__img" />
            <p className="nav__link-text">My Wallets</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
