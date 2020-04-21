import React, { useEffect, useState } from 'react'
import Article from '../Article/Article'
import Graph from '../Graph/Graph'
import { connect } from 'react-redux'
import { getHomeArticles } from '../../redux/newsReducer'
import { getStockInfo, clearStockReducer } from '../../redux/stockReducer'
import './Home.scss'
import { slideDown, fadeIn } from '../../utils/animations/animations'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { toast } from 'react-toastify'
import toastSettingObj from '../../utils/custom-toast/toastSettingObj'

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
    if (!stockObj['Meta Data']) getStockInfo(marketIndicies[index])
    slideDown('home-content')
    fadeIn('home-content')
  })
  const disableButton = (timeout) => {
    const marketIndexButton = document.getElementById('market-index-btn')
    marketIndexButton.disabled = true
    toast(
      'This button is disabled for 10 seconds to limit the number of api calls!',
      { ...toastSettingObj, autoClose: timeout }
    )
    setTimeout(() => {
      marketIndexButton.disabled = false
    }, timeout)
  }
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
    <Container id='home-content' className='animation-container'>
      <h1 className='text-center'>Market Indices</h1>
      <Graph stockObj={stockObj} />
      <Row className='text-center  mt-2'>
        <Col>
          <Button
            id='market-index-btn'
            className='buttons'
            size='lg'
            variant='outline-dark'
            onClick={() => {
              index >= marketIndicies.length - 1
                ? setIndex(0)
                : setIndex(index + 1)
              clearStockReducer()
              disableButton(10000)
            }}
          >
            <strong>{marketIndicies[index + 1] || marketIndicies[0]}</strong>
          </Button>
        </Col>
      </Row>
      <hr className='mt-4 mb-2' />
      <h1 className='text-center mt-4 mb-5'>Stay up to date...</h1>
      {articleElmArr}
    </Container>
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
