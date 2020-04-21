import React from 'react'
import { withRouter } from 'react-router-dom'
import routes from './routes'
import Nav from './components/Nav/Nav'
import { ToastContainer } from 'react-toastify'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Nav />
      <ToastContainer />
      <div className='container body-content'>{routes}</div>
    </div>
  )
}

export default withRouter(App)
