import React from 'react';
import navData from '../data/navData';
import { NavLink } from 'react-router-dom'
import { FaArrowAltCircleRight as ArrowRight, FaArrowAltCircleLeft as ArrowLeft } from 'react-icons/fa'
import { LoggedUserContext } from '../context/LoggedUserContext'


const Navigation = () => {

  const [hideNavi, setHideNavi] = React.useState(true)

  const handleClick = () => {
    hideNavi ? setHideNavi(false) : setHideNavi(true)
  }
  const { loggedUser } = React.useContext(LoggedUserContext)


  const navi = navData.map((nav, id) => (
    <li key={id}>
      <NavLink to={nav.path} exact>{nav.name}</NavLink>
    </li>
  ))

  return (
    <>
      <button className={`menu ${hideNavi ? `` : `hide`}`} onClick={handleClick}><ArrowLeft /></button>
      <nav className={`navi ${hideNavi ? `hide` : ``}`}>
        <button className='btn-menu' onClick={handleClick}><ArrowRight /></button>
        <ul>
          {navi}
          <li>{loggedUser ? <NavLink to={'/account'} exact>{'my account'}</NavLink> : <NavLink to={'/login'} exact>{'login'}</NavLink>}</li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;