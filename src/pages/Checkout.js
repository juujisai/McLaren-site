import React from 'react';
import { CartContext } from '../context/CartContext'
import { LoggedUserContext } from '../context/LoggedUserContext'
import { AllUsersContext } from '../context/AllUsersContext'


import Loader from '../components/Loader'
import CartItemsShort from '../components/CartItemsShort'
import { Link } from 'react-router-dom'


const Checkout = () => {
  const { cart } = React.useContext(CartContext)
  const { loggedUser, user } = React.useContext(LoggedUserContext)
  // const { userList, setUserList } = React.useContext(AllUsersContext)

  const [userAddress, setUserAddress] = React.useState({})


  const cartList = cart.map((item, id) => (
    <CartItemsShort item={item} key={id} />
  ))


  const handleChange = (e) => {
    let name = e.target.name
    setUserAddress({ [name]: e.target.value })

  }



  // React.useEffect(() => {
  //   typeof loggedUser !== 'undefined' && setUserAddress({ name: loggedUser.userFullName, country: loggedUser.place.country, city: loggedUser.place.city, address: loggedUser.place.address })
  // }, [loggedUser])

  console.log(loggedUser)

  if (typeof loggedUser === 'undefined' || typeof userAddress === 'undefined') {
    return <Loader />
  }

  return (
    <div className="checkout-page">
      <h2 className="your-order">Your order</h2>
      <div className="item-list-short">
        <table className='item-list-table'>
          <tbody>
            <tr className='table-header'>
              <td className='table-image'>Image</td>
              <td className='table-name'>Name</td>
              <td className='table-quantity'>Quantity</td>
              <td className='table-price'>Full price</td>
            </tr>
            {cartList}
          </tbody>
        </table>
      </div>
      <h2 className="your-order">Address</h2>
      <div className="order-user-place">
        <form>

          <label>
            Full name:
            <input name='name' type="text" value={userAddress.name} onChange={handleChange} />
          </label>
          <label>
            Country
            <input name='country' type="text" value={userAddress.country} onChange={handleChange} />
          </label>
          <label>
            City:
            <input name='city' type="text" value={userAddress.city} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input name='address' type="text" value={userAddress.address} onChange={handleChange} />
          </label>
          <label>
            I agree with Terms of Service:
            <input type="checkbox" />
          </label>
          <div className='save-address-div'>
            <button className="save-address">Save address</button>
          </div>
        </form>
      </div>
      <div className="continue-cart finish-cart"><Link to='/shop/cart'>Buy products</Link> </div>

      <div className="continue-cart"><Link to='/shop/cart'>Go back to cart</Link> </div>

    </div>
  );
}

export default Checkout;