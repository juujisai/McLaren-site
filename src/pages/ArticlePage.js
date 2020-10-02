import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { ArticleContext } from '../context/ArticleContext'

import Loader from '../components/Loader'


const ArticlePage = () => {

  const [clicked, setClicked] = React.useState(false)

  const { id } = useParams()

  const { loading, articles } = React.useContext(ArticleContext)


  const thisArticle = [...articles].find(article => article.id === id)


  if (loading || typeof thisArticle == 'undefined') {
    return <Loader />
  }


  if (typeof thisArticle !== 'undefined') {

    const { title, description, fullText, img } = thisArticle

    const paragraphs = fullText.map((p, id) => (<p key={id} className='single-article-par'>{p}</p>))

    const handleClick = () => {
      console.log('click')
      setClicked(!clicked)
    }

    return (
      <article className='single-article center-items'>
        <h3 className='single-article-title'>{title}</h3>
        <div className="img-cont">
          <img className={`full-img ${clicked ? `big` : null}`} src={img} alt="main article" onClick={handleClick} />
          <span className="from"><a href="https://twitter.com/McLarenF1/" target='_blank' rel="noopener noreferrer">from McLaren twitter account</a></span>
        </div>
        <h4 className='single-article-desc'>{description}</h4>
        {paragraphs}
        <div className='link-back'>

          <Link to='/' className={'btn-link'}>Back to article list</Link>
        </div>

      </article>




    );


  }
}

export default ArticlePage;