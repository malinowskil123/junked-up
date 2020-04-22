import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Plot from 'react-plotly.js'
import dateSubtract from '../../utils/dates/dateSubtract'
import { getCompanyName } from '../../utils/filter/filterStockInfo'
import './Graph.scss'

export default function HomeStatusBar(props) {
  const [graphValues, setGraphValues] = useState({ symbol: '', x: [], y: [] }),
    { stockObj } = props
  const setValue = (dateRange) => {
    const xVal = [],
      yVal = []
    let dateRangeEnd = getEndingDate(dateRange)
    for (let key in stockObj['Time Series (Daily)']) {
      if (dateRangeEnd) {
        let d1 = new Date(key),
          d2 = new Date(dateRangeEnd)
        if (d1 <= d2) break
      }
      xVal.push(key)
      yVal.push(stockObj['Time Series (Daily)'][key]['1. open'])
    }
    setGraphValues({
      symbol: getCompanyName(stockObj['Meta Data']['2. Symbol']),
      x: xVal,
      y: yVal,
    })
  }
  const getEndingDate = (dateRange) => {
    const timeIntervals = {
      '1W': { duration: 8, interval: 'days' },
      '1M': { duration: 1, interval: 'month' },
      '3M': { duration: 3, interval: 'month' },
    }
    return dateRange
      ? dateSubtract(
          timeIntervals[dateRange].duration,
          timeIntervals[dateRange].interval
        )
      : ''
  }
  const selectedDateCss = (id) => {
    const paragraphElm = document.getElementById(id),
      allParagraphElms = document.querySelectorAll('.selected-date')
    if (allParagraphElms.length > 0)
      allParagraphElms[0].classList.remove('selected-date')
    paragraphElm.classList.add('selected-date')
  }
  useEffect(() => {
    if (stockObj['Time Series (Daily)']) setValue()
  }, [stockObj])
  return (
    <div>
      <h3 className='text-center mt-4'>{graphValues.symbol}</h3>
      <Row>
        <Col className='text-center'>
          <Plot
            style={{ width: '100%', height: '100%' }}
            data={[
              {
                x: graphValues.x,
                y: graphValues.y,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: '#5bc6b2' },
              },
            ]}
            layout={{ autoSize: true}}
            useResizeHandler={true}
          />
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
          <p
            id='1W'
            onClick={(e) => {
              selectedDateCss(e.target.id)
              setValue(e.target.id)
            }}
          >
            1W
          </p>
        </Col>
        <Col>
          <p
            id='1M'
            onClick={(e) => {
              selectedDateCss(e.target.id)
              setValue(e.target.id)
            }}
          >
            1M
          </p>
        </Col>
        <Col>
          <p
            id='3M'
            onClick={(e) => {
              selectedDateCss(e.target.id)
              setValue(e.target.id)
            }}
          >
            3M
          </p>
        </Col>
        <Col>
          <p
            id='full'
            onClick={(e) => {
              selectedDateCss(e.target.id)
              setValue()
            }}
          >
            Full
          </p>
        </Col>
      </Row>
    </div>
  )
}
