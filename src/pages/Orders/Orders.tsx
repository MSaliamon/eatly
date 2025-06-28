import './Orders.scss';
import { useOrder } from '../../context/OrderContext';
import Wallet from '../../components/WalletSection/WalletSection';
import Recommended from '../../components/Recomended/Recommended';
import { useState } from 'react';

function Orders() {
  const { orders, removeOrder } = useOrder();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleIncrease = (index: number) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: (prev[index] || 1) + 1,
    }));
  };

  const handleDecrease = (index: number) => {
    setQuantities((prev) => {
      const currentQty = prev[index] || 1;
      if (currentQty <= 1) {
        removeOrder(index);
        const updated = { ...prev };
        delete updated[index];
        return updated;
      } else {
        return {
          ...prev,
          [index]: currentQty - 1,
        };
      }
    });
  };

  const getItemTotal = (index: number, price: number) => {
    const quantity = quantities[index] || 1;
    return (price * quantity).toFixed(2);
  };

  return (
    <section className="orders">
      <div className="orders-container">
        {orders.length > 0 ? (
          <>
            <div className="orders__box">
              <h2 className="orders__title">Orders</h2>
              <div className="orders__list">
                {orders.map((order, index) => (
                  <div key={index} className="orders__item">
                    <div className="orders__item-details">
                      <img src={order.image} alt={order.title} className="orders__item-img" />
                      <div className="orders__item-details-textbox">
                        <p className="orders__item-details-textbox-title">{order.title}</p>
                        <p className="orders__item-details-textbox-price">${order.price}</p>
                      </div>
                    </div>
                    <div className="orders-wrap">
                      <div className="orders__quantity">
                        <button className="orders__quantity-btn" onClick={() => handleDecrease(index)}>-</button>
                        <p className="orders__quantity-text">{quantities[index] || 1}</p>
                        <button className="orders__quantity-btn" onClick={() => handleIncrease(index)}>+</button>
                      </div>
                      <p className="orders__item-total">
                        Total: ${getItemTotal(index, parseFloat(order.price.toString().replace('$', '')))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="orders__total">
                <p className="orders__total-text">Total</p>
                <p className="orders__total-price">
                  ${orders
                    .reduce(
                      (sum, order, index) =>
                        sum + parseFloat(order.price.toString().replace('$', '')) * (quantities[index] || 1),
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <button className="orders__btn">Review Payment</button>
            </div>
          </>
        ) : (
          <p className="orders__empty">No orders yet</p>
        )}
      </div>
      <div className="right-content">
        <Wallet />
        <Recommended />
      </div>
    </section>
  );
}

export default Orders;
