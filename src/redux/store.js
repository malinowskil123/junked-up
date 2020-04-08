import { createStore, combineReducers, applyMiddleware } from 'redux'
// import promiseMiddleware from 'redux-promise-middleware' import if need be
// import reducers
import newsReducer from './newsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  newsReducer
})

export default createStore (
  rootReducer,
  composeWithDevTools()
)