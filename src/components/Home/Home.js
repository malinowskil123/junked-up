import React, { useEffect } from 'react'
import Article from '../Article/Article'
import Graph from '../Graph/Graph'
import { connect } from 'react-redux'
import { getHomeArticles } from '../../redux/newsReducer'
import { getStockInfo } from '../../redux/stockReducer'
import './Home.scss'
import { slideDown, fadeIn } from '../../utils/animations'

function Home(props) {
  const { homeArticlesArr, getHomeArticles, getStockInfo, stockObj } = props
  useEffect(() => {
    if (homeArticlesArr.length < 1) getHomeArticles()
    if (!stockObj['Meta Data']) getStockInfo('AMZN')
    slideDown('home-content')
    fadeIn('home-content')
  }, [])
  console.log(stockObj)
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
    <section id='home-content'>
      <h1 className='text-center'>Market Indices</h1>
      <Graph stockObj={stockObj} />
      <h1 className='text-center'>Stay up to date...</h1>
      <hr className='mb-5' />
      {articleElmArr}
    </section>
  )
}

const mapStateToProps = (reduxState) => {
  const { homeArticlesArr } = reduxState.newsReducer,
    { stockObj } = reduxState.stockReducer
  return { homeArticlesArr, stockObj }
}

const mapDispatchToProps = {
  getHomeArticles,
  getStockInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
