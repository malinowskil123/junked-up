import React, { useEffect, useState } from 'react'
import Article from '../Article/Article'
import Graph from '../Graph/Graph'
import { connect } from 'react-redux'
import { getHomeArticles } from '../../redux/newsReducer'
import { getStockInfo, clearStockReducer } from '../../redux/stockReducer'
import './Home.scss'
import { slideDown, fadeIn } from '../../utils/animations'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home(props) {
  const {
      homeArticlesArr,
      getHomeArticles,
      getStockInfo,
      clearStockReducer,
      stockObj,
    } = props,
    marketIndicies = ['DJIA', 'NYA', 'SPX']
  let [index, setIndex] = useState(0)
  useEffect(() => {
    if (homeArticlesArr.length < 1) getHomeArticles()
    if (!stockObj['Meta Data']) {
      console.log('hit')
      getStockInfo(marketIndicies[index])
    }
    slideDown('home-content')
    fadeIn('home-content')
  })
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
      <Row className='text-center  mt-2'>
        <Col>
          <Button
            className='button'
            size='lg'
            variant='outline-dark'
            style={{ background: '#5bc6b2' }}
            onClick={() => {
              index >= marketIndicies.length - 1
                ? setIndex(0)
                : setIndex(index + 1)
              clearStockReducer()
            }}
          >
            <strong>{marketIndicies[index + 1] || marketIndicies[0]}</strong>
          </Button>
        </Col>
      </Row>
      <h1 className='text-center mt-4'>Stay up to date...</h1>
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
  clearStockReducer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
