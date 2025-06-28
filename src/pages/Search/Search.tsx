import Header from '../../components/Header/Header'
import Recommended from '../../components/Recomended/Recommended'
import Sidebar from '../../components/Sidebar/Sidebar'
import WalletSection from '../../components/WalletSection/WalletSection'
import './Search.scss'
import SearchSection1 from './SearchSection1/SearchSection1'

function Search() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className="container">
        <Header />
        <main className="main">
          <SearchSection1 />
          <div className="right-content">
            <WalletSection />
            <Recommended />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Search