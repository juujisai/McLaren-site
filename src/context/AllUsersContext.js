import React from 'react';

import pseudoDatabase from '../data/pseudoDatabase'

export const AllUsersContext = React.createContext()

const AllUsersProvider = ({ children }) => {

  const [userList, setUserList] = React.useState(JSON.parse(localStorage.getItem('userList')))
  const [loading, setLoading] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    console.log(userList)
    // just to test loading component
    if (userList === null) {
      setUserList(pseudoDatabase)

      // console.log('true')
    }
    setTimeout(function () {



      setLoading(false)
    }, 1000)

  }, [userList])

  return (
    <AllUsersContext.Provider
      value={{
        userList, loading, setUserList
      }}>
      {children}
    </AllUsersContext.Provider>
  );
}

export default AllUsersProvider;