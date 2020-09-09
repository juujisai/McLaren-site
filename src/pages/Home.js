import React from 'react';

import { ArticleContext } from '../context/ArticleContext'

import { GalleryContext } from '../context/GalleryContext'

import Article from '../components/Article'
import Loader from '../components/Loader'

import Gallery from '../components/Gallery'
import Title from '../components/Title'
const Home = () => {


  // article list
  const { loading, articles } = React.useContext(ArticleContext)

  const articlesList = [...articles].map(article => (
    <article className='article' key={article.id}>
      <Article article={article} />
    </article>
  ))
  // end of article list
  // gallery list
  const { loading2, gallery } = React.useContext(GalleryContext)

  const galleryList = [...gallery].map(gallery => (

    <Gallery gallery={gallery} key={gallery.id} />

  ))

  // end of gallery list

  if (loading || loading2) {
    return <Loader />
  }

  return (
    <div>
      <section className="section-gallery">
        <Title text='Gallery' />
        {galleryList}
      </section>
      <section className='section-article'>
        {articlesList}
      </section  >

    </div>
  );
}

export default Home;
