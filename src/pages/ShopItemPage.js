import React from 'react';
import { Link, useParams } from 'react-router-dom'

import { ShopContext } from '../context/ShopContext'
import { AiFillStar } from 'react-icons/ai'

import defaultAvatar from '../images/users/default-avatar.png'
import ShopIcon from '../components/ShopIcon'
import AlertBox from '../components/AllertBox'
import { CartContext } from '../context/CartContext'
import Loader from '../components/Loader'

const ShopItemPage = () => {
  const { id } = useParams()
  const { data } = React.useContext(ShopContext)

  const { cart, setCart } = React.useContext(CartContext)
  const [showAlert, setShowAlert] = React.useState(false)

  const actualData = data.find(item => item.id === id)

  if (typeof actualData !== 'undefined') {
    const { name, category, subcategory, featured, color, price, inStock, img, description, comments } = actualData

    const colors = color.map((item, id) => (
      <span className='color-box' style={{ backgroundColor: item }} key={id}></span >
    ))

    const desc = description.map((item, id) => (
      <p className="desc" key={id}>{item}</p>
    ))

    const getGoldStars = (x) => {
      let a = []
      for (let i = 0; i < x; i++) {
        a = [...a, <AiFillStar className='star-gold' key={i} />]
      }
      return a
    }

    const getGrayStars = (x) => {
      let b = []
      for (let i = 0; i < 5 - x; i++) {
        b = [...b, <AiFillStar className='star-gray' key={i} />]
      }
      return b
    }


    const comms = comments.map((item, id) => (
      <div className="item-comment" key={id}>
        <div className="comment-img-cont">
          <img src={item.img ? item.img : defaultAvatar} alt={item.author} />
        </div>
        <div className="comment-author-cont">
          <h2 className="comment-author">{item.author}</h2>
          <div className="item-stars">
            {getGoldStars(item.stars)}
            {getGrayStars(item.stars)}
          </div>
        </div>
        <p className="comment-txt">{item.message}</p>
      </div>
    ))



    const handleClick = () => {
      setShowAlert(true)

      setCart([...cart, data])

      setTimeout(() => {
        setShowAlert(false)
      }, 2000)
    }

    return (
      <div className='item-page-cont'>
        <ShopIcon />

        <div className="item-name">
          {name}
          <div className="item-path">
            <div><span>{category}</span><span>/</span><span>{subcategory}</span></div>
          </div>
          {featured && <div className="item-featured"><AiFillStar /> featured</div>}

        </div>
        <div className="item-cont">

          <div className="item-image">
            <img src={img} alt={name} />
          </div>
          <div className="item-info">
            <div className="item-colors">
              <p>Colors:</p>
              {colors}
            </div>
            <div className="item-price">
              {price} EUR
            </div>
            <button className='add-to-cart-item' onClick={handleClick}>Add to cart</button>
          </div>

        </div>
        <div className="item-description">
          {desc}
        </div>
        <div className="item-comments">
          {comms}
        </div>

        <div className='link-back'>
          <Link className={'btn-link'} to="/shop">Go back to shop</Link>
        </div>
        {showAlert && <div className="result2"><AlertBox type='success' message='Item added to cart' /></div>}


      </div>
    );
  }


  else {
    return <Loader />
  }
}
export default ShopItemPage;