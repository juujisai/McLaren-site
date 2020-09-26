import React from 'react';

export const CartContext = React.createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart')))

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    // console.log(cart)
  }, [cart])

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