import React from 'react';
import { Link, useParams } from 'react-router-dom'

import { ScheduleContext } from '../context/ScheduleContext'
import Loader from '../components/Loader'

const TrackPage = () => {
  let { id } = useParams()

  id = Number(id)

  const { scheduleData, loading } = React.useContext(ScheduleContext)
  const track = scheduleData.find(one => one.id === id)



  if (loading || typeof track === 'undefined') {
    return <Loader />
  }



  const { country, nameOfEvent, month, dayStart, dayEnd, sessions, info, linkToF1Page, hotlapVideo, video3d, circuitColor, stats } = track

  const { name, firstGP, laps, circuitLenght, raceDistance, lapRecord, lapRecordWho, lapRecordWhen } = stats[0]



  const sessionsList = sessions.map((session, id) => (
    <div className="session-race" key={id}>
      <p className="session-type">{session.tyope}</p>
      <p className="session-date">{session.date}</p>
      <p className="session-time">{session.time}</p>
    </div>
  ))

  const infoList = info.map((i, id) => <p key={id}>{i}</p>)

  const video = (
    <div className="hotlap">
      <a href={hotlapVideo} target='_blank' rel='noopener noreferrer'>3d lap</a>

    </div>
  )



  return (
    <div>
      <div className="title">
        <h3>{nameOfEvent}</h3>
        <h4>{country}</h4>
      </div>


      <div className="image">
        <img className='full-img' src={circuitColor} alt={country} />
        <a href={linkToF1Page} target='_blank' rel='noopener noreferrer'>Go to official F1 page</a>
      </div>

      <div className="race-date">
        <p className="date">{dayStart} - {dayEnd}</p>
        <p className="month">{month}</p>
      </div>
      <div className="sessions">
        {sessionsList}
      </div>



      <div className="stats">
        <p className="name-of-circuit"><em><span>{name}</span></em></p>
        <p>First F1 GP: <span>{firstGP}</span></p>
        <p>Laps: <span>{laps}</span></p>
        <p>Circuit length: <span>{circuitLenght}km</span></p>
        <p>Race distance: <span>{raceDistance}</span></p>
        <p>Lap record: <span>{lapRecord}</span>(<span>{lapRecordWho} {lapRecordWhen}</span>)</p>
      </div>
      <div className="track-info">
        {infoList}
      </div>

      <div className="watch">
        <div className="hotlap">
          <a href={hotlapVideo} target='_blank' rel='noopener noreferrer'>hotlap</a>
        </div>

        {video3d !== 'no-video' && video}

      </div>


      <Link to='/schedule' className="btn-link" > Go back to schedule</Link>
    </div>
  );
}

export default TrackPage;