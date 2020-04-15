import axios from 'axios'
import actionList from './actionList'

const initialState = {
  stockObj: {},
  },
  API_KEY = 'H7KPPO7TY4NXIRAH'

export function getStockInfo(companySymbol) {
  let action = {
    type: actionList.GET_STOCK_INFO,
    payload: axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${companySymbol}&outputsize=compact&apikey=${API_KEY}`
    ),
  }
  return action
}

export default function stockReducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case actionList.GET_STOCK_INFO + '_FULFILLED':
      return { ...state, stockObj: payload.data }
    default:
      return state
  }
}
