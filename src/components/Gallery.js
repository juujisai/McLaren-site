import React from 'react';

const Gallery = ({ gallery }) => {
  const { title, description, img, orientation } = gallery

  const [isClicked, setIsClicked] = React.useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
    console.log('click')
  }

  return (
    <div className={`gallery-picture ${isClicked ? `zoom-gallery-pic` : 'null'}`} >
      <img className={`gallery-img ${orientation}`} onClick={handleClick} src={img} alt={title} />
      <div className="picture-desc">
        <h2 className='picture-title'>{title}</h2>
        {!isClicked && <p>{description}</p>}
      </div>
    </div>
  );
}

export default Gallery;