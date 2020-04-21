import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import component
import Home from './components/Home/Home'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'

// removed UnderConstruction after finishing a new component
export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/dash' component={UnderConstruction} />
    <Route path='/about' component={UnderConstruction} />
    <Route path='/search' component={UnderConstruction} />
    <Route path='/auth' component={UnderConstruction} />
  </Switch>
)
