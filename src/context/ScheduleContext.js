import React from 'react';

import scheduleDataFile from '../data/scheduleData'

export const ScheduleContext = React.createContext()


const ScheduleProvider = ({ children }) => {

  const [scheduleData, setScheduleData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setScheduleData(scheduleDataFile)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <ScheduleContext.Provider
      value={{
        scheduleData,
        loading
      }}

    >
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleProvider;