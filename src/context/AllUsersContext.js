import React from 'react';

import pseudoDatabase from '../data/pseudoDatabase'

export const AllUsersContext = React.createContext()

const AllUsersProvider = ({ children }) => {

  const [userList, setUserList] = React.useState([])
  const [loading, setLoading] = React.useState([])

  React.useEffect(() => {
    setLoading(true)

    // just to test loading component

    setTimeout(function () {
      setUserList(pseudoDatabase)
      setLoading(false)
    }, 1000)

  }, [])

  return (
    <AllUsersContext.Provider
      value={{
        userList, loading
      }}>
      {children}
    </AllUsersContext.Provider>
  );
}

export default AllUsersProvider;