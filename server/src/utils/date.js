const { format } = require('date-fns')

const formatMillisecondToDate = milliseconds =>
  format(new Date(milliseconds), 'YYYY/MM/dd hh:mm:ssaaaa')


module.exports = {
  formatMillisecondToDate
}