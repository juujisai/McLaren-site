import React from 'react';
import { FaOpencart } from 'react-icons/fa'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
const ShopIcon = () => {

  const { cart } = React.useContext(CartContext)



  return (
    <div className="cart-icon" >
      <Link to='/shop/cart'><FaOpencart className='cart-icon-icon' /> <span className="cart-items-number">{cart.length}</span></Link>
    </div>
  );
}

export default ShopIcon;