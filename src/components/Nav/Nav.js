import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/icon.svg'
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
  })
  return (
    <nav id='nav-bar' className='nav-static'>
      <Row className='align-items-center' style={{ height: '10vh' }}>
        <Col xs={9} md={4} className='text-left'>
          <h1 className='outlined-text ml-4'>JunkedUp</h1>
        </Col>
        <Col xs={3} md={8}>
          <img
            id='nav-icon'
            rel='img'
            src={icon}
            alt='icon'
            className='icon nav-button'
            onClick={showHideMobileMenu}
          />
          <ul
            id='mobile-menu'
            className='mobile-menu mobile-menu-hide hide-menu-collapse'
            onClick={showHideMobileMenu}
          >
           <Link to='/' className='outlined-text'>
              <li>
                home
              </li>
            </Link>
            <Link to='/about' className='outlined-text'>
              <li>
                about
              </li>
            </Link>
            <Link to='/search' className='outlined-text'>
              <li>
                search
              </li>
            </Link>
            <Link to='/dash' className='outlined-text'>
              <li>
                dash
              </li>
            </Link>
            <Link to='/auth' className='outlined-text'>
              <li>
                login
              </li>
            </Link>
          </ul>
          <ul id='desktop-menu' className='desktop-menu mt-2'>
            <Link to='/' className='outlined-text'>
              <li>
                home
              </li>
            </Link>
            <Link to='/about' className='outlined-text'>
              <li>
                about
              </li>
            </Link>
            <Link to='/search' className='outlined-text'>
              <li>
                search
              </li>
            </Link>
            <Link to='/dash' className='outlined-text'>
              <li>
                dash
              </li>
            </Link>
            <Link to='/auth' className='outlined-text'>
              <li>
                login
              </li>
            </Link>
          </ul>
        </Col>
      </Row>
    </nav>
  )
}
