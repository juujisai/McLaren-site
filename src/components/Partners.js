import React from 'react';

import partnersData from '../data/partnersData'

const Partners = () => {

  const partners = partnersData

  const partnersList = partners.map((partner, id) => (
    <img src={partner} alt={`logo ${id}`} key={id} />
  ))

  return (
    <div className='partners'>
      <div className="partners-animation">{partnersList}</div>
    </div>
  );
}



export default Partners;