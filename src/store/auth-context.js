import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  total: 0,
  addTotal: (val) => { },
  addItem: (item) => { },
  cart: [],
  totalPrice: 0
});

export const AuthContextProvider = props => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  const addTotal = val => {
    setTotal(prevTotal => prevTotal + val)
  }

  const addItem = item => {
    setCart(prevItems => [item, ...prevItems])
  }

  useEffect(() => {
    const cartItemPrices = cart.map(item => item.quantity * item.price);
    setTotalPrice(cartItemPrices.reduce((sum, currentPrice) => sum + currentPrice, 0).toFixed(2))
  }, [cart, total])

  return (
    <AuthContext.Provider value={{
      total: total,
      addTotal: addTotal,
      addItem: addItem,
      cart: cart,
      totalPrice: totalPrice
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

