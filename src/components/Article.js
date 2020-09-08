import React from 'react';
import { Link } from 'react-router-dom'

import Title from './Title'


const Article = ({ article }) => {
  const { title, description, img, id } = article
  return (
    <>
      <Title text={title} />
      <h3 className='border-sign'>McLaren</h3>
      <p className='description'>{description}</p>
      <div className="img-cont">
        <img src={img} alt="article" className="full-img" />
      </div>
      <div className="link-cont">
        <Link to={`article/${id}`} className='btn-read-more'>read more</Link>
      </div>

    </>
  );
}

export default Article;