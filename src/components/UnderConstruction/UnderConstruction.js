import React, { useEffect } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import hammer from '../../assets/hammer.png'
import trafficCone from '../../assets/trafficCone.png'
import { slideDown, fadeIn } from '../../utils/animations/animations'
import './UnderConstruction.scss'

export default function UnderConstructions() {
  useEffect(() => {
    slideDown('under-construction')
    fadeIn('under-construction')
  })
  return (
    <Container id='under-construction' className='text-center'>
      <h1>Under Construction...</h1>
      <Row>
        <Col className='align-self-end text-right'>
          <Image src={trafficCone} fluid className='traffic-cone' />
        </Col>
        <Col>
          <Image src={hammer} fluid className='hammer-img' />
        </Col>
        <Col className='align-self-end text-left'>
          <Image src={trafficCone} fluid className='traffic-cone' />
        </Col>
      </Row>
      <h3 className='mt-5'>Coming Soon!</h3>
      <h5>
        This feature is still being worked on
        <br />
        Thank you for your patience
      </h5>
    </Container>
  )
}
