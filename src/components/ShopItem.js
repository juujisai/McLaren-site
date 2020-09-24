import React from 'react';
import { Link } from 'react-router-dom'
import Loader from './Loader'
const ShopItem = ({ data }) => {
  const { id, name, category, price, inStock, img } = data


  if (typeof id === 'undefined') {
    return <Loader />
  }

  return (
    <div className='shop-item'>
      <h1>{name}</h1>
      <h2>- {category} -</h2>

      <div className="item-img">
        <img className={`full-img`} src={img} alt={name} />
        <Link to={`/shop/items/${id}`}>See more</Link>

      </div>
      <div className="shop-rest">
        <h4>{price} EUR</h4>

        <button className='add-to-cart'>Add to cart</button>
      </div>



    </div>
  );
}

export default ShopItem;


