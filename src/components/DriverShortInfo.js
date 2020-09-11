import React from 'react';
import { Link } from 'react-router-dom'


const DriverShortInfo = ({ info }) => {

  const { name, secondName, number, image, video } = info


  return (
    <div>
      <div className="driver-data-short">
        <h3 className={`driver-data-name driver-${name}`}><span className='short-name'>{name}</span> <span className='short-second-name'>{secondName}</span></h3>
        <h4 className='driver-number'>{number}</h4>
        <div className="image-img1">
          <img className='full-img' src={image[0]} alt={name} />
        </div>
      </div>
      <div className="image-img2">
        <img className='full-img' src={image[1]} alt={name} />
      </div>
      <div className="image-gif">
        <img className='full-img' src={video} alt={name} />
      </div>

      <Link to={`/drivers/${name}${secondName}`}>{name} {secondName}</Link>

    </div>
  );
}

export default DriverShortInfo;