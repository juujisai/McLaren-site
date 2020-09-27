import React from 'react';
import { Link } from 'react-router-dom'


const CartItemsShort = ({ item }) => {
  return (
    <tr className='table-data-by-rows'>
      <td className='table-image'><Link to={`/shop/items/${item.id}`}> <img src={item.img} alt={item.name} /></Link></td>
      <td className='table-name'>{item.name}</td>
      <td className='table-quantity'>{item.amount}</td>
      <td className='table-price'>{item.amount * item.price} EUR</td>
    </tr>
  );
}

export default CartItemsShort;

