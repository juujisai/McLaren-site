import React from 'react';
import pseudoDataBase from '../data/pseudoDatabase'

export const LoggedUserContext = React.createContext()

const LoggedUserProvider = ({ children }) => {

  const [user, setUser] = React.useState()

  const [loggedUser, setLoggedUser] = React.useState()

  React.useEffect(() => {
    if (localStorage.getItem('user')) {

      setUser(JSON.parse(localStorage.getItem('user')))
    }
    let u = pseudoDataBase.find(one => {
      // console.log(one.userId, user)
      return one.userId === user
    })
    setLoggedUser(u)
  }, [user, loggedUser])

  return (
    <LoggedUserContext.Provider
      value={{
        setUser,
        user,
        loggedUser
      }}>
      {children}
    </LoggedUserContext.Provider>
  );
}

export default LoggedUserProvider;