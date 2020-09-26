import React from 'react';

export const CartContext = React.createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([])

  React.useEffect(() => {

  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;