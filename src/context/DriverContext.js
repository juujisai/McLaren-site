import React from 'react';

import driverData from '../data/driverData'

export const DriverContext = React.createContext()

const DriverProvider = ({ children }) => {

  const [driversInfo, setDriversInfo] = React.useState([])
  const [loading, setLoading] = React.useState(false)


  React.useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setDriversInfo(driverData)
      setLoading(false)
    }, 1000)

  }, [])


  return (
    <DriverContext.Provider
      value={{
        driversInfo,
        loading
      }
      }
    >
      {children}
    </DriverContext.Provider>


  );
}

export default DriverProvider;