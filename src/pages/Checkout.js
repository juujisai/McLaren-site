import React from 'react';
import { CartContext } from '../context/CartContext'
import { LoggedUserContext } from '../context/LoggedUserContext'
import { AllUsersContext } from '../context/AllUsersContext'


import Loader from '../components/Loader'
import CartItemsShort from '../components/CartItemsShort'
import { Link } from 'react-router-dom'

import PurchaseCompletedPopup from '../components/PurchaseCompletedPopup';

const Checkout = () => {
  const { cart, setCart } = React.useContext(CartContext)
  const { loggedUser, setLoggedUser } = React.useContext(LoggedUserContext)
  const { userList, setUserList } = React.useContext(AllUsersContext)

  const [userName, setUserName] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [city, setCity] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [check, setChecked] = React.useState(false)

  const [showFinishPopup, setShowFinishPopup] = React.useState(false)

  const cartList = cart.map((item, id) => (
    <CartItemsShort item={item} key={id} />
  ))


  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'userName') {
      setUserName(value)
    } else if (name === 'country') {
      setCountry(value)
    } else if (name === 'city') {
      setCity(value)
    } else if (name === 'address') {
      setAddress(value)
    }
    if (e.target.type === 'checkbox') {
      setChecked(!check)
    }
  }

  const handleSaveAddress = (e) => {
    e.preventDefault()

    if (userName !== '' && country !== '' && city !== '' && address !== '') {
      let letIdFromAllUsers = userList.findIndex(item => item.userId === loggedUser.userId)
      let userFromAllUsers = userList.find(item => item.userId === loggedUser.userId)

      console.log(letIdFromAllUsers, userFromAllUsers, loggedUser)
      userFromAllUsers.userFullName = userName
      userFromAllUsers.place[0].country = country
      userFromAllUsers.place[0].city = city
      userFromAllUsers.place[0].address = address

      let array = userList
      array.splice(letIdFromAllUsers, 1, userFromAllUsers)

      console.log(array)
      setUserList(array)
      localStorage.setItem('userList', JSON.stringify(array))
      setLoggedUser(userFromAllUsers)
    }


    console.log('click')
  }
  const loadData = (e) => {
    e.preventDefault()
    typeof loggedUser.userFullName !== 'undefined' && setUserName(loggedUser.userFullName)
    typeof loggedUser.place[0].country !== 'undefined' && setCountry(loggedUser.place[0].country)
    typeof loggedUser.place[0].city !== 'undefined' && setCity(loggedUser.place[0].city)
    typeof loggedUser.place[0].address !== 'undefined' && setAddress(loggedUser.place[0].address)

    // console.log(loggedUser)
  }

  const handleBuyProducts = (e) => {
    e.preventDefault()
    if (userName !== '' && country !== '' && city !== '' && address !== '' && check) {
      let letIdFromAllUsers = userList.findIndex(item => item.userId === loggedUser.userId)
      let userFromAllUsers = userList.find(item => item.userId === loggedUser.userId)

      let date = new Date().getTime()
      userFromAllUsers.shopHistory = [...userFromAllUsers.shopHistory, cart]
      userFromAllUsers.dateOfPurchase = [...userFromAllUsers.dateOfPurchase, date]
      let array = userList
      array.splice(letIdFromAllUsers, 1, userFromAllUsers)

      setUserList(array)
      localStorage.setItem('userList', JSON.stringify(array))
      setLoggedUser(userFromAllUsers)

      setShowFinishPopup(true)

      setCart([])
      localStorage.setItem('cart', JSON.stringify([]))

      setUserName('')
      setCountry('')
      setCity('')
      setAddress('')

      // console.log('items bought')
    }
  }


  React.useEffect(() => {
    if (typeof loggedUser !== 'undefined') {
      setShowFinishPopup(false)

      setChecked(false)
    }

  }, [loggedUser])


  if (typeof loggedUser === 'undefined' || typeof userName === 'undefined') {
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
  <input name='userName' type="text" value={userName} onChange={handleChange} />
          </label>
          <label>
            Country
  <input name='country' type="text" value={country} onChange={handleChange} />
          </label>
          <label>
            City:
  <input name='city' type="text" value={city} onChange={handleChange} />
          </label>
          <label>
            Address:
  <input name='address' type="text" value={address} onChange={handleChange} />
          </label>
          <label>
            I agree with Terms of Service:
  <input type="checkbox" checked={check} onChange={handleChange} />
          </label>
          <div className='save-address-div'>
            <button className="save-address" onClick={loadData}>Load data</button>

            <button className="save-address" onClick={handleSaveAddress}>Save address</button>
          </div>
        </form>
      </div>




      <div className="continue-cart finish-cart" ><button onClick={handleBuyProducts}>Buy products</button></div>

      <div className="continue-cart"><Link to='/shop/cart'>Go back to cart</Link> </div>


      {showFinishPopup && <div className='white-bg'></div>}

      {showFinishPopup && <div className="purchase-completed"><PurchaseCompletedPopup /></div>}

    </div>
  );
}

export default Checkout;