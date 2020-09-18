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


// import Logo from './components/Logo'

function App() {
  const { loggedUser } = React.useContext(LoggedUserContext)



  // const [userS, setUser] = React.useState(user)


  // useEffect(() => {
  //   console.log(userS)
  //   setUser(user)
  // }, [user, userS])


  return (
    <Router  >
      <ScrollToTop />
      <ArrowToTop />
      <Header />
      <Logo />
      {loggedUser && <h1>Hello {loggedUser.userName}</h1>}
      <Page />
      <Footer />
    </Router>
  );
}

export default App;
