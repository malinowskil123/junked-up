import React from 'react'
import { Switch, Route ,Redirect} from 'react-router-dom'
import Home from './components/Home/Home'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'

export default (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route path='/under-construction' component={UnderConstruction} />
    <Redirect exact from='/' to='home'/>
    <Redirect from='/' to='/under-construction'/>
  </Switch>
)
