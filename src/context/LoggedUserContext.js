import React from 'react';
// import pseudoDataBase from '../data/pseudoDatabase'
import { AllUsersContext } from '../context/AllUsersContext'

export const LoggedUserContext = React.createContext()

const LoggedUserProvider = ({ children }) => {

  const [user, setUser] = React.useState()

  const [loggedUser, setLoggedUser] = React.useState()

  const { userList } = React.useContext(AllUsersContext)


  React.useEffect(() => {
    if (localStorage.getItem('user')) {

      setUser(JSON.parse(localStorage.getItem('user')))
    }
    if (typeof user !== 'undefined') {
      //   if (user !== null) 
      setLoggedUser(userList.find(one => one.userId === user))
    }
  }, [user, loggedUser, userList])

  return (
    <LoggedUserContext.Provider
      value={{
        setUser,
        user,
        loggedUser, setLoggedUser
      }}>
      {children}
    </LoggedUserContext.Provider>
  );
}

export default LoggedUserProvider;