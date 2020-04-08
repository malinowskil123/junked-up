import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import component
import Home from './components/Home/Home'
import Stock from './components/Stock/Stock'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/' component={Stock} />
  </Switch>
)
