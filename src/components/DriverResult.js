import React from 'react';

const DriverResult = ({ data }) => {
  const { name, secondName, img, starting, place, fastest, delta } = data[0]
  return (
    <div>
      <h3>{name} {secondName}</h3>
      <img src={img} alt={name} />
      <div>Starting place: <span>{starting}</span></div>
      <div>Finishing place: <span>{place}</span></div>
      <div>Fastest lap: <span>{fastest}</span></div>
      <div>Time lost to first: <span>{delta}</span></div>
    </div>
  );
}

export default DriverResult;