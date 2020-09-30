import React from 'react';
import { LoggedUserContext } from '../context/LoggedUserContext'
import { AllUsersContext } from '../context/AllUsersContext'
import CartItemsShort from '../components/CartItemsShort'
import Loader from '../components/Loader'

const AccountPanel = () => {
  const { setUser, loggedUser } = React.useContext(LoggedUserContext)
  const { userList } = React.useContext(AllUsersContext)
  const [showInfo, setShowInfo] = React.useState(false)
  const [showHistory, setShowHistory] = React.useState(false)

  const { shopHistory } = loggedUser


  const handleLogout = () => {
    localStorage.setItem('user', JSON.stringify(''))
    setUser('')
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

  if (!loggedUser) {
    return <Loader />
  }

  const showInfoCont = (
    <div>1</div>
  )




  const showHistoryCont = (
    <div>
      {shopHistory.map((history, key) => (
        <div className="shop-history" key={key}>
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
      ))}
    </div>
  )



  return (
    <div>
      <div className="info-account-panel">
        <ul>
          <li>
            <button onClick={() => showInfoF(showInfo, 'showInfo')}>See info</button>
          </li>
          <li>
            <button onClick={() => showInfoF(showHistory, 'showHistory')}>Shop history</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="info-account-content">
        {showInfo && showInfoCont}
        {showHistory && showHistoryCont}
      </div>
    </div>
  );
}

export default AccountPanel;