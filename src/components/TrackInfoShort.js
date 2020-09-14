import React from 'react';
import photo from '../images/schedule/gp2_photo.jpg'

import { FaForward } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const TrackInfoShort = ({ info }) => {
  const { id, country, month, dayStart, dayEnd, circuitMonoColor, stats } = info

  const name = stats[0].name


  return (
    <div className='single-race'>
      <div className="race-data">

        <h3 className='race-name'>{name}
        </h3>

        <div className="race-date">
          <p>{month}</p>
          <p>{dayStart}-{dayEnd}</p>
          <Link to={`/schedule/${id}`}><FaForward className='go-right' /></Link>
        </div>

      </div>


      <div className="race-cont">


        <div className="race-place">
          {country}
          <p>2020</p>
        </div>
        <img className='track-background' src={photo} alt={name} />


        <img className='track-white' src={circuitMonoColor} alt={name} />
      </div>
    </div>
  );
}

export default TrackInfoShort;