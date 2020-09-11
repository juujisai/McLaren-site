import React from 'react';

import DriverShortInfo from '../components/DriverShortInfo'

import { DriverContext } from '../context/DriverContext'

import Loader from '../components/Loader'

const Drivers = () => {
  const { driversInfo, loading } = React.useContext(DriverContext)

  if (loading) {
    return <Loader />
  }

  const driverList = [...driversInfo].map((driver, id) => (
    <DriverShortInfo info={driver} key={id} />
  ))

  return (
    <div className='drivers-info'>
      {driverList}
    </div>
  );
}

export default Drivers;