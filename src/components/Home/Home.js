import React, { useEffect } from 'react'
import Article from '../Article/Article'
import { connect } from 'react-redux'
import { getHomeArticles } from '../../redux/newsReducer'
import './Home.scss'

function Home(props) {
  const { homeArticlesArr, getHomeArticles } = props
  useEffect(() => {
    if (homeArticlesArr.length < 1) getHomeArticles()
  }, [homeArticlesArr])
  const articleElmArr = homeArticlesArr.map((elm, index) => {
    return (
      <Article
        source={elm.source.name}
        title={elm.title}
        img={elm.urlToImage}
        url={elm.url}
        date={elm.publishedAt}
        key={index}
      />
    )
  })
  return (
    <div className='Home'>
      <h1 className='home-header'>Stay up to date...</h1>
      <hr className='mb-5' />
      {articleElmArr}
    </div>
  )
}

const mapStateToProps = (reduxState) => {
  const { homeArticlesArr } = reduxState.newsReducer
  return { homeArticlesArr }
}

export default connect(mapStateToProps, { getHomeArticles })(Home)
