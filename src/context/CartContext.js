import React from 'react';

export const CartContext = React.createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart')))

  React.useEffect(() => {

    if (cart === null) {
      setCart([])

      // console.log('true')
    }



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