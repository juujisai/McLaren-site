import React from 'react';
import { LoggedUserContext } from '../context/LoggedUserContext'
// import { AllUsersContext } from '../context/AllUsersContext'
import CartItemsShort from '../components/CartItemsShort'
import Loader from '../components/Loader'
import defaultAvatar from '../images/users/default-avatar.png'


const AccountPanel = () => {
  const { setUser, loggedUser } = React.useContext(LoggedUserContext)
  // const { userList } = React.useContext(AllUsersContext)
  const [showInfo, setShowInfo] = React.useState(false)
  const [showHistory, setShowHistory] = React.useState(false)

  const { shopHistory, dateOfPurchase } = loggedUser
  const [triggerLoader, setTriggerLoader] = React.useState(false)

  const handleLogout = () => {

    setTriggerLoader(true)

    setTimeout(() => {
      setTriggerLoader(false)
      localStorage.setItem('user', JSON.stringify(''))
      setUser('')
    }, 1000)
  }

  const showInfoF = (y, x) => {
    if (x === "showInfo") {
      setShowInfo(!y)
      setShowHistory(false)

    } else if (x === "showHistory") {
      setShowInfo(false)
      setShowHistory(!y)
    }
  }

  if (!loggedUser || triggerLoader) {
    return <Loader />
  }

  const showInfoCont = (
    <div className='account-panel-data'>
      <h2>User data:</h2>
      <p>Username: <span>{loggedUser.userName}</span></p>
      <p>Name: <span>{loggedUser.userFullName}</span></p>
      <p>Country: <span>{loggedUser.place[0].country}</span></p>
      <p>City: <span>{loggedUser.place[0].city}</span></p>
      <p>Address: <span>{loggedUser.place[0].address}</span></p>

      <p>Avatar: <img src={loggedUser.img === '' ? defaultAvatar : loggedUser.img} alt='user avatar' /></p>
    </div>
  )




  const showHistoryCont = (
    <div>
      {shopHistory.reverse().map((history, id) => {
        const time = new Date(dateOfPurchase.reverse()[id])
        return (
          <div className="shop-history" key={id}>
            <h4>Date of purchase:</h4>
            <div className="shop-history-time">
              <span className='span-date'>{time.getDate()}</span>
              <span className='span-date'>{time.toLocaleString('en-EN', { month: 'long' }).toLowerCase()}</span>
              <span className='span-date'>{time.getFullYear()}</span>
(
            <span>{time.getHours().toLocaleString().length === 1 ? `0${time.getHours()}` : time.getHours()}:</span>
              <span>{time.getMinutes().toLocaleString().length === 1 ? `0${time.getMinutes()}` : time.getMinutes()}:</span>
              <span>{time.getSeconds().toLocaleString().length === 1 ? `0${time.getSeconds()}` : time.getSeconds()}</span>

)

          </div>
            <table className='item-list-table'>
              <tbody>
                <tr className='table-header'>
                  <td className='table-image'>Image</td>
                  <td className='table-name'>Name</td>
                  <td className='table-quantity'>Quantity</td>
                  <td className='table-price'>Full price</td>
                </tr>


                {history.map((item, key) => (
                  <CartItemsShort item={item} key={key} />
                ))}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )



  return (
    <div className='account-panel'>
      <div className="info-account-panel">
        <ul>
          <li>
            <button className={showInfo ? `active` : null} onClick={() => showInfoF(showInfo, 'showInfo')}>See info</button>
          </li>
          <li>
            <button className={showHistory ? `active` : null} onClick={() => showInfoF(showHistory, 'showHistory')}>Shop history</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="info-account-content">
        {showInfo && showInfoCont}
        {showHistory && shopHistory.length >= 0 && showHistoryCont}
        {showHistory && shopHistory.length === 0 && <div className=".no-shop-history">No shop history ...</div>}

      </div>
    </div>
  );
}

export default AccountPanel;