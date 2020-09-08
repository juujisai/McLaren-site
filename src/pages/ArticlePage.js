import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { ArticleContext } from '../context/ArticleContext'

import Loader from '../components/Loader'


const ArticlePage = () => {
  const { id } = useParams()

  const { loading, articles } = React.useContext(ArticleContext)


  const thisArticle = [...articles].find(article => article.id === id)


  if (loading || typeof thisArticle == 'undefined') {
    return <Loader />
  }


  if (typeof thisArticle !== 'undefined') {

    const { title, description, fullText, img } = thisArticle

    const paragraphs = fullText.map((p, id) => (<p key={id} className='single-article-par'>{p}</p>))


    return (
      <article className='single-article center-items'>
        <h3 className='single-article-title'>{title}</h3>
        <div className="img-cont">
          <img className="full-img" src={img} alt="main article" />
          <span className="from"><a href="https://twitter.com/McLarenF1/" target='_blank' rel="noopener noreferrer">from McLaren twitter account</a></span>
        </div>
        <h4 className='single-article-desc'>{description}</h4>
        {paragraphs}

        <Link to='/' className={'btn-link'}>Back to article list</Link>


      </article>




    );


  }
}

export default ArticlePage;