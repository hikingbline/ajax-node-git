
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

export default {
  url: baseURL,
  arraySum: getArraySum
}