import axios from 'axios'
import actionList from './actionList'

const initialState = {
    homeArticlesArr: [],
    keywordArticlesArr: [],
  },
  API_KEY = '22305f26bfd641f18b804b1c2045accc'

export function getHomeArticles() {
  let action = {
    type: actionList.GET_HOME_ARTICLES,
    payload: axios.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
    ),
  }
  return action
}

export function getKeywordArticles(keyword) {
  let action = {
    type: actionList.GET_KEYWORD_ARTICLES,
    payload: axios.get(),
  }
  return action
}

export default function newsReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case actionList.GET_HOME_ARTICLES + '_FULFILLED':
      return { ...state, homeArticlesArr: payload.data.articles }
    // case actionList.GET_KEYWORD_ARTICLES:
    //   return { ...state, keywordArticlesArr: payload.articles }
    default:
      return state
  }
}
