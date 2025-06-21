import './WalletSection.scss'
import cart from '../../assets/homepage/svg/cart.svg'
import dotsDark from '../../assets/homepage/svg/dotsDark.svg'
import dotsWhite from '../../assets/homepage/svg/dotsWhite.svg'
import cartSend from '../../assets/homepage/svg/card-send.svg'
import cardReceipt from '../../assets/homepage/svg/card-receive.svg'
import receipt from '../../assets/homepage/svg/receipt1.svg'
import elementPlus from '../../assets/homepage/svg/element-plus.svg'
import cardLogo from '../../assets/homepage/png/cartLogo.png'
import { useState } from 'react'

function WalletSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="wallet">
      <div className="wallet-container1">
        <h1 className="wallet-container1__title">Wallet</h1>
        <img src={dotsDark} alt="dotsDark" className="wallet-container1__img" />
      </div>
      <div className="wallet-cart" onClick={() => setIsFlipped(!isFlipped)}>
        <div className="wallet-cart__box1">
          <img src={cart} alt="cart" className="wallet-cart__box1-img" />
          <img src={dotsWhite} alt="dots" className="wallet-cart__box1-img" />
        </div>
        {!isFlipped ? (
          <div className="wallet-cart__front">
            <p className="wallet-cart__text">5698    56254    6786    9979</p>
            <div className="wallet-cart__front-details">
              <p className="wallet-cart__front-details-expiry">Valid Thru: 06/28</p>
              <img src={cardLogo} alt="cardLogo" className="wallet-cart__front-details-logo" />
            </div>
          </div>
        ) : (
          <div className="wallet-cart__back">
            <div className="wallet-cart__back-magnetic"></div>
            <div className="wallet-cart__back-details">
              <p className="wallet-cart__back-details-text">Card Security Code: 123</p>
            </div>
          </div>
        )}
      </div>
      <div className="wallet-container2">
        <div className="wallet-container2__box">
          <img src={cartSend} alt="cartSend" className="wallet-container2__box-img" />
          <p className="wallet-container2__box-text">Send</p>
        </div>
        <div className="wallet-container2__box">
          <img src={cardReceipt} alt="cardReceipt" className="wallet-container2__box-img" />
          <p className="wallet-container2__box-text">Receive</p>
        </div>
        <div className="wallet-container2__box">
          <img src={receipt} alt="receipt" className="wallet-container2__box-img" />
          <p className="wallet-container2__box-text">Invoicing</p>
        </div>
        <div className="wallet-container2__box">
          <img src={elementPlus} alt="elementPlus" className="wallet-container2__box-img" />
          <p className="wallet-container2__box-text">More</p>
        </div>
      </div>
    </section>
  )
}

export default WalletSection