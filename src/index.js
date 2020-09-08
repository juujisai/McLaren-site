import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleProvider from './context/ArticleContext'

ReactDOM.render(
  <ArticleProvider>
    <App />

  </ArticleProvider>
  ,
  document.getElementById('root')
);

