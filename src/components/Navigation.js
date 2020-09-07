import React from 'react';
import navData from '../data/navData';
import { NavLink } from 'react-router-dom'
import { FaArrowAltCircleRight as ArrowRight, FaArrowAltCircleLeft as ArrowLeft } from 'react-icons/fa'

const Navigation = () => {

  const [hideNavi, setHideNavi] = React.useState(false)

  const handleClick = () => {
    hideNavi ? setHideNavi(false) : setHideNavi(true)
  }


  const navi = navData.map((nav, id) => (
    <li key={id}>
      <NavLink to={nav.path}>{nav.name}</NavLink>
    </li>
  ))

  return (
    <>
      <button className={`menu ${hideNavi ? `` : `hide`}`} onClick={handleClick}><ArrowLeft /></button>
      <nav className={`navi ${hideNavi ? `hide` : ``}`}>
        <button className='btn-menu' onClick={handleClick}><ArrowRight /></button>
        <ul>
          {navi}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;