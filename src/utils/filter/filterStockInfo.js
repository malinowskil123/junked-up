import stockInfo from '../data/stockInfo.json'

export function getCompanyName(symbol) {
  for (let key in stockInfo) {
    if (stockInfo[key]['Symbol'] === symbol) {
      return `${stockInfo[key]['Company Name']} ${symbol}`
    }
  }
}
