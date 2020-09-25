import React from 'react';
import { Link } from 'react-router-dom'
import Loader from './Loader'

import { RiShoppingCartLine } from 'react-icons/ri'

const ShopItem = ({ data }) => {
  const { id, name, category, price, inStock, img } = data


  if (typeof id === 'undefined') {
    return <Loader />
  }

  return (
    <div className={`shop-item`}>
      <h1>{name}</h1>
      <h2>- {category} -</h2>

      <div className="item-img">

        <Link to={`/shop/items/${id}`}><img className={`full-img`} src={img} alt={name} /></Link>

      </div>
      <div className="shop-rest">
        <h4>{price} EUR</h4>

        <button className='add-to-cart'><RiShoppingCartLine /></button>
      </div>



    </div>
  );
}

export default ShopItem;


