import React, { useEffect } from 'react'
import icon from '../../assets/icon.svg'
import graph from '../../assets/graph.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Nav.scss'

export default function Nav() {
  const showHideMobileMenu = () => {
    const dropdown = document.getElementById('mobile-menu')
    dropdown.classList.toggle('hide-menu-collapse')
    dropdown.classList.toggle('moblie-menu-show')
    dropdown.classList.toggle('moblie-menu-hide')
    flipNavIcon()
  }
  const flipNavIcon = () => {
    const navIcon = document.getElementById('nav-icon')
    navIcon.classList.toggle('icon-rotate')
  }
  const navScrollAnimation = () => {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('nav-bar')
      if (window.pageYOffset > 60 && window.innerWidth >= 767) {
        navbar.classList.add('nav-scroll')
        navbar.classList.remove('nav-static')
      } else if (window.pageYOffset < 60 && window.innerWidth >= 767) {
        navbar.classList.remove('nav-scroll')
        navbar.classList.add('nav-static')
      }
    })
  }
  useEffect(() => {
    navScrollAnimation()
  }, [])
  return (
    <nav id='nav-bar' className='nav-static'>
      <Row className='align-items-center' style={{ height: '10vh' }}>
        <Col xs={8} md={6}>
          <h1 className='nav-text'>
            JunkedUp{' '}
            <img
              src={graph}
              alt='logo icon'
              style={{ width: '10%', display: 'inline' }}
            />
          </h1>
        </Col>
        <Col xs={2} md={6}>
          <button className='nav-button' onClick={showHideMobileMenu}>
            menu
            <img
              id='nav-icon'
              rel='img'
              src={icon}
              alt='icon'
              className='icon'
            />
          </button>
          <ul
            id='mobile-menu'
            className='mobile-menu mobile-menu-hide hide-menu-collapse'
            onClick={showHideMobileMenu}
          >
            <a href='#home'>
              <li>home</li>
            </a>
            <a href='#about'>
              <li>about</li>
            </a>
            <a href='#skills'>
              <li>stock</li>
            </a>
          </ul>
          <ul id='desktop-menu' className='desktop-menu'>
            <a href='#home'>
              <li>home</li>
            </a>
            <a href='#about'>
              <li>about</li>
            </a>
            <a href='#skills'>
              <li>stock</li>
            </a>
          </ul>
        </Col>
      </Row>
    </nav>
  )
}
