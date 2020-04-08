import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
// import reducers
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  // reudcers go in here 
})

export default createStore (
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
)