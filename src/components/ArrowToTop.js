import React from 'react';

import { FaLocationArrow } from 'react-icons/fa'

const ArrowToTop = () => {

  const [isVisible, setVisible] = React.useState(false)


  React.useEffect(() => {

    window.addEventListener('scroll', function (e) {
      let scrollValue = window.scrollY

      let windowHeight = window.innerHeight

      if (scrollValue >= windowHeight) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    })

  }, [])


  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {isVisible && <div className="scroll-top" onClick={handleClick}><FaLocationArrow /></div>}
    </>
  );
}

export default ArrowToTop;