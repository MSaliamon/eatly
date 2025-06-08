import { Link } from 'react-router-dom'
import './Header.scss'
import search from '../../assets/homepage/svg/search.svg'
import bell from '../../assets/homepage/svg/bell.svg'
function Header() {
  return (
    <header className="header">
        <h1 className="header__title">Dashboard</h1>
        <div className="header-container">
            <img src={search} alt="search" className="header-container__img" />
            <img src={bell} alt="bell" className="header-container__img" />
            <Link to="signIn" className="header-container__link">Sign In</Link>
        </div>
    </header>
  )
}

export default Header