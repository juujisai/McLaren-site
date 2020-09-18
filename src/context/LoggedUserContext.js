import React from 'react';
import pseudoDataBase from '../data/pseudoDatabase'

export const LoggedUserContext = React.createContext()

const LoggedUserProvider = ({ children }) => {

  const [user, setUser] = React.useState()

  const [loggedUser, setLoggedUser] = React.useState()

  React.useEffect(() => {
    let u = pseudoDataBase.find(one => one.userId === user)
    setLoggedUser(u)
  }, [user])

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