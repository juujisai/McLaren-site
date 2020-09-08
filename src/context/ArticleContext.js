import React from 'react';
import articleData from '../data/articleData'

export const ArticleContext = React.createContext();




const ArticleProvider = ({ children }) => {

  const [articles, setArticles] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    setArticles(articleData)
    setLoading(false)
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
