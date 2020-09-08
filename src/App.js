import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Logo from './components/Logo'
import Page from './pages/Page'

// import Logo from './components/Logo'

function App() {
  return (
    <Router>
      <Header></Header>
      <Logo />
      <Page />

    </Router>
  );
}

export default App;
