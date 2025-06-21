import WalletSection from '../WalletSection/WalletSection'
import './Main.scss'
import Section1 from './Section1/Section1'

function Main() {
  return (
    <main className="main">
      <Section1 />
      <div className="right-content">
        <WalletSection />
      </div>
    </main>
  )
}

export default Main