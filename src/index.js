import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleProvider from './context/ArticleContext'
import GalleryProvider from './context/GalleryContext'

ReactDOM.render(
  <GalleryProvider>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </GalleryProvider>
  ,
  document.getElementById('root')
);

