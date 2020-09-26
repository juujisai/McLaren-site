import React from 'react';
import { BsFillTrash2Fill } from 'react-icons/bs'

const CartItems = ({ item, handleClick }) => {



  return (

    <div className="cart-item">
      <div className="up-info">
        <div className="up-info-name">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-category">({item.category})</div>
        </div>
        <div className="remove-from-cart"><BsFillTrash2Fill /></div>
      </div>
      <div className="cart-item-img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="rest-info">
        <div className="cart-item-price">{item.price} EUR</div>

        <div className="item-amount">
          <button className="minus" onClick={() => handleClick('minus', item)}>-</button> <span className='amount'>{item.amount}</span> <button className="plus" onClick={() => handleClick('plus', item)}>+</button>
        </div>
        <div className="cart-item-price-total">Full amount: {item.price * item.amount} EUR</div>
      </div>
    </div>
  );
}

export default CartItems;