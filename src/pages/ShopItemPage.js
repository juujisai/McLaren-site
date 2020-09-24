import React from 'react';
import { Link, useParams } from 'react-router-dom'

const ShopItemPage = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      {id}


      <div className='link-back'>
        <Link className={'btn-link'} to="/shop">Go back to shop</Link>
      </div>
    </div>
  );
}

export default ShopItemPage;