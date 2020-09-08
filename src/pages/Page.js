import React from 'react';
import { Route, Switch } from 'react-router-dom'
import navData from '../data/navData'

import Home from './Home'
import Drivers from './Drivers'
import Schedule from './Schedule'
import Shop from './Shop'
import Game from './Game'
import Login from './Login'

import ErrorPage from './ErrorPage'


const Page = () => {

  const pageFilesList = [<Home />, <Drivers />, <Schedule />, <Shop />, <Game />, <Login />]

  const pages = navData.map((item, id) => (
    <Route path={item.path} key={id} exact>
      {pageFilesList[id]}
    </Route>
  )
  )

  return (
    <Switch>
      {pages}
      <ErrorPage />
    </Switch>

  );
}

export default Page;