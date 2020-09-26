import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleProvider from './context/ArticleContext'
import GalleryProvider from './context/GalleryContext'
import ResultsProvider from './context/ResultsContext'
import DriverProvider from './context/DriverContext'
import ScheduleProvider from './context/ScheduleContext'
import AllUsersProvider from './context/AllUsersContext'
import LoggedUserProvider from './context/LoggedUserContext'
import ShopProvider from './context/ShopContext'
import CartProvider from './context/CartContext'

ReactDOM.render(
  <CartProvider>
    <ShopProvider>
      <LoggedUserProvider>
        <AllUsersProvider>
          <ScheduleProvider>
            <DriverProvider>
              <ResultsProvider>
                <GalleryProvider>
                  <ArticleProvider>
                    <App />
                  </ArticleProvider>
                </GalleryProvider>
              </ResultsProvider>
            </DriverProvider>
          </ScheduleProvider>
        </AllUsersProvider>
      </LoggedUserProvider>
    </ShopProvider>
  </CartProvider>
  ,
  document.getElementById('root')
);

