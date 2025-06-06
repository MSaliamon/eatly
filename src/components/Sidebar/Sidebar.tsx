import { Link } from 'react-router-dom'
import './Sidebar.scss'
import Logo from '../../assets/homepage/svg/Logo.svg'
import Nav from './Nav/Nav'
import question from '../../assets/homepage/svg/question.svg'
import settings from '../../assets/homepage/svg/settings.svg'

function Sidebar() {
  return (
    <aside className='sidebar'>
        <div className="sidebar-container1">
          <Link to="/" className="sidebar-container1__logo">
            <img src={Logo} alt="Logo" className="sidebar-container1__logo-img" />
            <p className="sidebar-container1__logo-link">eatly</p>
          </Link>
          <Nav />
        </div>
        <div className="sidebar-container2">
          <div className="sidebar-container2__box">
            <img src={question} alt="question" className="sidebar-container2__box-img" />
            <p className="sidebar-container2__box-text">Get Help</p>
          </div>
          <div className="sidebar-container2__box">
            <img src={settings} alt="settings" className="sidebar-container2__box-img" />
            <p className="sidebar-container2__box-text">Settings</p>
          </div>
        </div>
    </aside>
  )
}

export default Sidebar