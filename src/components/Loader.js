import React from 'react';
import load from '../images/tire.png'
// import { GiArrowDunk as Arrow } from 'react-icons/gi'

const Loader = () => {

  return (
    <div className='load'>
      <div className="loading-arrow">
        {/* <Arrow /> */}
        <img src={load} alt="loading" />

      </div>
      <p>Loading ...</p>
    </div>
  );
}

export default Loader
