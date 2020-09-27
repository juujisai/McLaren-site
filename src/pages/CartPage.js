import React from 'react';
import { CartContext } from '../context/CartContext'
import CartItems from '../components/CartItems'
import { Link } from 'react-router-dom'
import AlertBox from '../components/AllertBox'

import { LoggedUserContext } from '../context/LoggedUserContext'

const CartPage = () => {
  const { cart, setCart } = React.useContext(CartContext)
  const [cartItems, setCartItems] = React.useState(cart)
  const [buttonDisable, setButtonDisable] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false)

  const { loggedUser } = React.useContext(LoggedUserContext)

  const handleClick = (operator, item) => {
    let prevArray = cartItems
    let thisItemIndex = prevArray.findIndex(one => one === item)
    // console.log(item.amount, item.fullAmount, item)
    // console.log(thisItemIndex, thisItem)


    if (operator === 'plus') {
      item.amount = item.amount + 1
    } else if (operator === 'minus') {
      item.amount = item.amount - 1
    }
    item.fullAmount = item.price * item.amount

    item.amount >= item.inStock ? setButtonDisable(true) : setButtonDisable(false)



    if (item.amount <= 0) {
      prevArray = cartItems.filter(el => el !== item)
      setShowAlert(true)
      setTimeout(() => { setShowAlert(false) }, 2000)

    } else {
      prevArray.splice(thisItemIndex, 1, item)
    }


    setCartItems([...prevArray])

    setCart(prevArray)

  }

  const handleItemRemove = (item) => {
    let array = cartItems.filter(el => el !== item)
    setShowAlert(true)

    setTimeout(() => { setShowAlert(false) }, 2000)

    setCartItems(array)
    setCart(array)
  }

  const cartItems2 = cartItems.map((item, id) => (
    <CartItems item={item} key={id} handleClick={handleClick} handleItemRemove={handleItemRemove} buttonDisable={buttonDisable} setButtonDisable={setButtonDisable} />
  ))

  let getTotalCost = 0
  cartItems.forEach(item => getTotalCost = getTotalCost + item.fullAmount)

  React.useEffect(() => {
    setCartItems(cart)
  }, [cart])

  return (
    <div className="cart">
      <h3 className='cart-title'>Your cart</h3>
      {cartItems.length === 0 ? <div className='empty-cart'>Your cart is empty. Try adding some items!</div> : cartItems2}


      {cartItems.length !== 0 && <div className="total"><h3>Total: {getTotalCost} EUR</h3></div>}
      <div className="continue-cart">{loggedUser ? <Link to='/checkout'>Continue</Link> : <Link to='/login'>Continue</Link>}</div>

      {showAlert && <div className="result2"><AlertBox type='danger' message='Item removed from cart' /></div>}

      <div className='link-back'>
        <Link className={'btn-link'} to="/shop">Go back to shop</Link>
      </div>
    </div>

  );
}

export default CartPage;