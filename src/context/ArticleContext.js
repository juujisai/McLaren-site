import React from 'react';
import articleData from '../data/articleData'

export const ArticleContext = React.createContext();




const ArticleProvider = ({ children }) => {

  const [articles, setArticles] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)

    // just to test loading component

    setTimeout(function () {
      setArticles(articleData)
      setLoading(false)
    }, 1000)

  }, [])

  return (

    <ArticleContext.Provider
      value={{
        articles,
        loading
      }}
    >
      {children}
    </ArticleContext.Provider>
  );



}

export default ArticleProvider;
