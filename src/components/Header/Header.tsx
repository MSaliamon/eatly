import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import search from '../../assets/homepage/svg/search.svg';
import bell from '../../assets/homepage/svg/bell.svg';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email?.split('@')[0] || '');
      } else {
        setUserName(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="header">
      <h1 className="header__title">Dashboard</h1>
      <div className="header-container">
        <Link to="/search"><img src={search} alt="search" className="header-container__img" /></Link>
        <img src={bell} alt="bell" className="header-container__img" />
        {userName ? (
          <>
            <span className="header-container__name">{userName}</span>
            <button className="header-container__logout" onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <Link to="/signin" className="header-container__link">Sign In</Link>
        )}
      </div>
    </header>
  );
}

export default Header;