import moment from 'moment'

export default (duration, interval) =>
  moment().subtract(duration, interval).format('YYYY-MM-DD')
