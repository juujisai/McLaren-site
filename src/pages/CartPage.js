import React from 'react';
import { CartContext } from '../context/CartContext'
import CartItems from '../components/CartItems'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const { cart, setCart } = React.useContext(CartContext)
  const [cartItems, setCartItems] = React.useState(cart)



  const handleClick = (operator, item) => {
    if (operator === 'plus') {
      item.amount++
      item.fullAmount = item.price * item.amount
    } else if (operator === 'minus') {
      item.amount--
      item.fullAmount = item.price * item.amount

    }
    console.log(cartItems)
    setCart(cartItems)

  }



  const cartItems2 = cartItems.map((item, id) => (
    <CartItems item={item} key={id} handleClick={handleClick} setCart={setCart} cartItems={cartItems} />
  ))


  React.useEffect(() => {
    setCartItems(cart)
  }, [cart])

  return (
    <div className="cart">
      <h3 className='cart-title'>Your cart</h3>
      {cartItems2}



      <div className="total">
        <h3>Total:</h3>
      </div>






      <div className='link-back'>
        <Link className={'btn-link'} to="/shop">Go back to shop</Link>
      </div>
    </div>

  );
}

export default CartPage;