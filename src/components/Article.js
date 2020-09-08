import React from 'react';
import Title from './Title'


const Article = ({ article }) => {
  const { title, description, img } = article
  return (
    <>
      <Title text={title} />
      <h3 className='border-sign'>McLaren</h3>
      <p className='description'>{description}</p>
      <div className="img-cont">
        <img src={img} alt="article" className="full-img" />
      </div>
    </>
  );
}

export default Article;