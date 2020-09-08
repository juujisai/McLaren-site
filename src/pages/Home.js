import React from 'react';

import { ArticleContext } from '../context/ArticleContext'

import Article from '../components/Article'
import Loader from '../components/Loader'


const Home = () => {

  const { loading, articles } = React.useContext(ArticleContext)

  const articlesList = [...articles].map(article => (
    <article className='article' key={article.id}>
      <Article article={article} />
    </article>
  ))

  if (loading) {
    return <Loader />
  }

  return (
    <section className='section-article'>
      {articlesList}
    </section  >

  );
}

export default Home;
