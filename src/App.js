import React from 'react'
import { withRouter } from 'react-router-dom'
import routes from './routes'
import Nav from './components/Nav/Nav'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='container body-content'>{routes}</div>
    </div>
  )
}

export default withRouter(App)
