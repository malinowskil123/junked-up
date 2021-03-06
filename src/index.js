import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'
// custom stylesheets
import './index.css'
import './reset.css'
import './utils/animations/animations.css'
import './utils/custom-toast/toast.scss'
// framework stylesheets
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
