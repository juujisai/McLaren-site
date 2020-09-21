import React from 'react';
import { LoggedUserContext } from '../context/LoggedUserContext'


const AccountPanel = () => {
  const { setUser } = React.useContext(LoggedUserContext)

  const handleLogout = () => {
    localStorage.setItem('user', JSON.stringify(''))
    setUser('')
  }

  return (
    <div>Hello from account pannel
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AccountPanel;