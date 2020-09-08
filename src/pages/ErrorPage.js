import React from 'react';
import { Link } from 'react-router-dom'
import sadFace from '../images/sad_face.svg'

const ErrorPage = () => {
  return (
    <div className='error-page'>

      <div className="sadFace">
        <img src={sadFace} alt="sad face" />
      </div>

      <p className="par">The address you are trying to enter does not exist</p>

      <Link to='/' className={'btn-link'}>Back to home page</Link>
    </div>
  );
}

export default ErrorPage;