import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { ArticleContext } from '../context/ArticleContext'

import Loader from '../components/Loader'
import Title from '../components/Title'


const ArticlePage = () => {
  const { id } = useParams()

  const { loading, articles } = React.useContext(ArticleContext)


  const thisArticle = [...articles].find(article => article.id === id)


  if (loading || typeof thisArticle == 'undefined') {
    return <Loader />
  }


  if (typeof thisArticle !== 'undefined') {

    const { title, description, fullText, img } = thisArticle

    return (
      <>
        <h3>{title}</h3>
        <div className="img-cont">
          <img className="full-img" src={img} alt="main article" />
        </div>
        <h4>{description}</h4>
        <p>{fullText}</p>

        <Link to='/' className={'btn-link'}>Back to article list</Link>


      </>




    );


  }
}

export default ArticlePage;