import React from 'react';

import { GiArrowDunk as Arrow } from 'react-icons/gi'

const Loader = () => {
  return (
    <div className='load'>
      <div className="loading-arrow"><Arrow /></div>
      <p>Loading ...</p>
    </div>
  );
}

export default Loader
