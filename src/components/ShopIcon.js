import React from 'react';
import { FaOpencart } from 'react-icons/fa'
import { CartContext } from '../context/CartContext'

const ShopIcon = () => {

  const { cart } = React.useContext(CartContext)


  return (
    <div className="cart-icon">
      <FaOpencart className='cart-icon-icon' /> <span className="cart-items-number">{cart.length}</span>
    </div>
  );
}

export default ShopIcon;