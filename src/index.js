import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleProvider from './context/ArticleContext'
import GalleryProvider from './context/GalleryContext'
import ResultsProvider from './context/ResultsContext'
import DriverProvider from './context/DriverContext'
import ScheduleProvider from './context/ScheduleContext'

ReactDOM.render(
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
  ,
  document.getElementById('root')
);

