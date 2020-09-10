import React from 'react';

const DriverResult = ({ data }) => {
  const { name, secondName, img, starting, place, fastest, delta } = data[0]
  return (
    <div className="driver-result">
      <div className="driver-img-cont">
        <img src={img} alt={name} />
      </div>
      <div className="result-data">
        <h3 className="driver-name">{name} {secondName}</h3>
        <div className="flex">
          <div className="place-cont">
            <div>Starting place: <span>{starting}</span></div>
            <div>Finishing place: <span>{place}</span></div>
          </div>
          <div className="time-cont">
            <div>Fastest lap: <span>{fastest}</span></div>
            <div>Time lost to first: <span>{delta}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverResult;