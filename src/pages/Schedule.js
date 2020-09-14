import React from 'react';

import { ScheduleContext } from '../context/ScheduleContext'

import TrackInfoShort from '../components/TrackInfoShort'
import Loader from '../components/Loader'

const Schedule = () => {

  const { scheduleData, loading } = React.useContext(ScheduleContext)

  if (loading || typeof scheduleData === 'undefined') {
    return <Loader />
  }

  const tracks = scheduleData.map(track => (
    <TrackInfoShort key={track.id} info={track} />
  ))


  return (
    <div className={'schedule'}>
      {tracks}

    </div>
  );
}

export default Schedule;