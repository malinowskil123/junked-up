import React, { useEffect, useState } from 'react'
import Article from '../Article/Article'
import Graph from '../Graph/Graph'
import { connect } from 'react-redux'
import { getHomeArticles } from '../../redux/newsReducer'
import { getStockInfo, clearStockReducer } from '../../redux/stockReducer'
import './Home.scss'
import { slideDown, fadeIn } from '../../utils/animations/animations'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { toast } from 'react-toastify'

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
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: timeout,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: false,
        draggable: false,
        className: 'custom-toast',
        progressClassName: 'custom-toast-progress',
      }
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
    <section id='home-content'>
      <h1 className='text-center'>Market Indices</h1>
      <Graph stockObj={stockObj} />
      <Row className='text-center  mt-2'>
        <Col>
          <Button
            id='market-index-btn'
            className='button'
            size='lg'
            variant='outline-dark'
            style={{ background: '#5bc6b2' }}
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
