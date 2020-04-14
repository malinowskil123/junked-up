import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import convertDate from '../../utils/convertDate'
import './Article.scss'

export default function Article(props) {
  return (
    <div className='Article'>
      <Row className='mb-2'>
        <Col>
          <h4>{props.source}</h4>
        </Col>
        <Col>
          <h4 style={{ textAlign: 'right' }}>{convertDate(props.date)}</h4>
        </Col>
      </Row>
      <a href={props.url} className='link' target='_blank'>
        <Row>
          <Col md='4'>
            <Image src={props.img} fluid className='mb-2 mb-md-0' />
          </Col>
          <Col md='8'>
            <h3>{props.title}</h3>
          </Col>
        </Row>
      </a>
      <hr />
    </div>
  )
}
