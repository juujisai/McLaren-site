import React from 'react';
import { Link } from 'react-router-dom'
import Loader from './Loader'
import AlertBox from './AllertBox'
import { CartContext } from '../context/CartContext'

import { RiShoppingCartLine } from 'react-icons/ri'

const ShopItem = ({ data }) => {
  const { cart, setCart } = React.useContext(CartContext)
  const [showAlert, setShowAlert] = React.useState(false)
  const { id, name, category, price, img } = data

  const handleClick = () => {
    setShowAlert(true)
    if (cart.filter(item => item.id === data.id).length > 0) {

      // console.log('already in cart')
      const idIfExist = cart.findIndex(item => item.id === data.id)
      const itemIfExist = cart.find(item => item.id === data.id)
      itemIfExist.amount = itemIfExist.amount + 1
      itemIfExist.fullAmount = itemIfExist.amount * price

      let array = [...cart]
      array.splice(idIfExist, 1, itemIfExist)

      setCart(array)
      localStorage.setItem('cart', JSON.stringify(array))

    } else {
      // console.log('new in cart')

      data.amount = 1;
      data.fullAmount = data.amount * price

      setCart([...cart, data])

      localStorage.setItem('cart', JSON.stringify([...cart, data]))
    }




    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  }

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

        <button className='add-to-cart' onClick={handleClick}><RiShoppingCartLine /></button>
      </div>

      {showAlert && <div className="result2"><AlertBox type='success' message='Item added to cart' /></div>}

    </div>
  );
}

export default ShopItem;


