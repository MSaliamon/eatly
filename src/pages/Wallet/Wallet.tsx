import { useState } from 'react';
import WalletSection from '../../components/WalletSection/WalletSection';
import './Wallet.scss';

const baseBalanceUSD = 56476;

const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.79,
  UAH: 39,
};

function Wallet() {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'UAH'>('USD');

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as 'USD' | 'EUR' | 'GBP' | 'UAH');
  };

  const convertedAmount = (baseBalanceUSD * exchangeRates[currency]).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <main className="wallet-main">
      <div className="wallet-main-container">
        <h1 className="wallet-main-container__title">My Wallet</h1>
        <div className="wallet-main-box">
          <p className="wallet-main-box__text">Balance</p>
          <p className="wallet-main-box__text">
            {convertedAmount} {currency}
          </p>
          <div className="wallet-main-box__converter">
            <select value={currency} onChange={handleCurrencyChange} className="wallet-main-box__select">
              {Object.keys(exchangeRates).map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>
        <WalletSection />
      </div>
      <div className="wallet-main-container2">
        <p className="wallet-main-container2__title">Exchange Rates</p>
        <ul className="wallet-main-container2__list">
          {Object.entries(exchangeRates).map(([curr, rate]) => (
            <li key={curr} className="wallet-main-container2__item">
              1 USD = {rate} {curr}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Wallet;
