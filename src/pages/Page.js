import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import navData from '../data/navData'

import Home from './Home'
import Drivers from './Drivers'
import Schedule from './Schedule'
import Shop from './Shop'
import Game from './Game'
import Login from './Login'

import ArticlePage from './ArticlePage'
import DriverPage from './DriverPage'
import TrackPage from './TrackPage'
import ShopItemPage from './ShopItemPage'
import CartPage from './CartPage'
import AccountPanel from './AccountPanel'
import Checkout from './Checkout'
import ErrorPage from './ErrorPage'
import { LoggedUserContext } from '../context/LoggedUserContext'


const Page = () => {
  const { loggedUser } = React.useContext(LoggedUserContext)

  const pageFilesList = [<Home />, <Drivers />, <Schedule />, <Shop />, <Game />]

  const pages = navData.map((item, id) => (
    <Route path={item.path} key={id} exact>
      {pageFilesList[id]}
    </Route>
  )
  )
  return (
    <Switch>
      {pages}
      <Route path={'/login'}>
        {/* <Login /> */}
        {loggedUser ? <Redirect to="/account" /> : <Login />}
      </Route>
      <Route path={`/account`}>
        {/* <AccountPanel /> */}
        {!loggedUser ? <Redirect to="/login" /> : <AccountPanel />}
      </Route>
      <Route path={'/checkout'}>
        {!loggedUser ? <Redirect to="/login" /> : <Checkout />}
      </Route>
      <Route path={`/article/:id`} >
        <ArticlePage />
      </Route>
      <Route path={`/drivers/:name`}>
        <DriverPage />
      </Route>
      <Route path={`/schedule/:id`}>
        <TrackPage />
      </Route>
      <Route path={`/shop/items/:id`}>
        <ShopItemPage />
      </Route>
      <Route path={'/shop/cart'}>
        <CartPage />
      </Route>

      <ErrorPage />
    </Switch>

  );
}

export default Page;