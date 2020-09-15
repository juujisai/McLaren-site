import React from 'react';
import { Link, useParams } from 'react-router-dom'

import { ScheduleContext } from '../context/ScheduleContext'
import Loader from '../components/Loader'

const TrackPage = () => {
  let { id } = useParams()

  id = Number(id)

  const { scheduleData, loading } = React.useContext(ScheduleContext)
  const track = scheduleData.find(one => one.id === id)

  const [style, setStyle] = React.useState(null)
  // const [clicked, setClicked] = React.useState(false)




  const handleClick = (e) => {
    // if (!clicked) {
    //   setClicked(true)
    // }

    // console.log(clicked)


    // if (clicked) {
    let transformLeft, transformTop, transformScale;

    const trackImage = document.querySelector('.track-image img')

    const trackImageOffsetY = trackImage.offsetTop

    transformLeft = e.pageX
    transformTop = e.pageY - trackImageOffsetY
    transformScale = 3

    setStyle({
      transformOrigin: `${transformLeft}px ${transformTop}px`,
      transform: `scale(${transformScale})`
    })

    setTimeout(function () {
      setStyle({
        transformOrigin: `${trackImage.clientWidth}px ${trackImage.clientHeight}px`,
        transform: `scale(${1})`
      })
    }, 1000)

    // }

  }





  if (loading || typeof track === 'undefined') {
    return <Loader />
  }





  const { country, nameOfEvent, month, dayStart, dayEnd, sessions, info, linkToF1Page, hotlapVideo, video3d, circuitColor, stats } = track

  const { name, firstGP, laps, circuitLenght, raceDistance, lapRecord, lapRecordWho, lapRecordWhen } = stats[0]



  const sessionsList = sessions.map((session, id) => (
    <div className="session-race" key={id}>
      <p className="session-date">{session.date}</p>
      <p className="session-time">{session.time}:00</p>
      <p className="session-type">{session.tyope}</p>
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
      <div className="track-title">
        <h3>{nameOfEvent}</h3>
        <h4>{country}</h4>
      </div>


      <div className="track-image">
        <div className="back-text">click to make image bigger</div>
        <img className='full-img' style={style} src={circuitColor} alt={country} onClick={handleClick} />
        <a href={linkToF1Page} target='_blank' rel='noopener noreferrer'>Go to official F1 page</a>
      </div>

      <div className="race-date-page">
        <p className="">{dayStart} - {dayEnd}</p>
        <p className="">{month}</p>
      </div>
      <div className="sessions">
        <h3 className='track-title'>Important dates</h3>
        {sessionsList}
      </div>



      <div className="stats">
        <h3 className="track-title"><em><span>{name}</span></em></h3>
        <p>First F1 GP: <span>{firstGP}</span></p>
        <p>Laps: <span>{laps}</span></p>
        <p>Circuit length: <span>{circuitLenght} km</span></p>
        <p>Race distance: <span>{raceDistance} km</span></p>
        <p>Lap record: <span>{lapRecord}</span></p>
        <p><span>({lapRecordWho} {lapRecordWhen})</span></p>
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

      <div className="link-back">
        <Link to='/schedule' className="btn-link" > Go back to schedule</Link>
      </div>
    </div>
  );
}

export default TrackPage;