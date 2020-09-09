import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleProvider from './context/ArticleContext'
import GalleryProvider from './context/GalleryContext'
import ResultsProvider from './context/ResultsContext'

ReactDOM.render(
  <ResultsProvider>
    <GalleryProvider>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </GalleryProvider>
  </ResultsProvider>
  ,
  document.getElementById('root')
);

