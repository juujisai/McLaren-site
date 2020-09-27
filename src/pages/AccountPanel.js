import React from 'react';
import { LoggedUserContext } from '../context/LoggedUserContext'
import ShopIcon from '../components/ShopIcon'

const AccountPanel = () => {
  const { setUser } = React.useContext(LoggedUserContext)

  const handleLogout = () => {
    localStorage.setItem('user', JSON.stringify(''))
    setUser('')
  }

  return (
    <div>Hello from account pannel
      <ShopIcon />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AccountPanel;