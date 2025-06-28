import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Dish } from '../data/Popular';

interface OrderContextType {
  orders: Dish[];
  addOrder: (dish: Dish) => void;
  removeOrder: (index: number) => void;
  setOrders: React.Dispatch<React.SetStateAction<Dish[]>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Dish[]>(() => {
    const stored = localStorage.getItem('orders');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (dish: Dish) => {
    setOrders((prevOrders) => [...prevOrders, dish]);
  };

  const removeOrder = (index: number) => {
    setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

