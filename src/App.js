import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Logo from './components/Logo'
import Page from './pages/Page'

import Footer from './components/Footer'


import ScrollToTop from './components/ScrollToTop'

// import Logo from './components/Logo'

function App() {
  return (
    <Router  >
      <ScrollToTop />
      <Header />
      <Logo />
      <Page />
      <Footer />
    </Router>
  );
}

export default App;
