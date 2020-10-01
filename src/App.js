import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Logo from './components/Logo'
import Page from './pages/Page'

import Footer from './components/Footer'


import ScrollToTop from './components/ScrollToTop'
import ArrowToTop from './components/ArrowToTop'

import { LoggedUserContext } from './context/LoggedUserContext'

import defaultAvatar from './images/users/default-avatar.png'

// import Logo from './components/Logo'

function App() {
  const { loggedUser } = React.useContext(LoggedUserContext)

  return (
    <Router  >
      <ScrollToTop />
      <ArrowToTop />
      <Header />
      <div className="desktop-flex">

        <Logo />
        {loggedUser && <div className="user-logged"><div className="avatar"><img src={loggedUser.img === '' ? defaultAvatar : loggedUser.img} alt="" /></div><h1>Hello {loggedUser.userName}</h1></div>}
      </div>

      <Page />
      <Footer />
    </Router>
  );
}

export default App;
