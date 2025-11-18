
const express = require('express')
const server = express()


server.get('/', (req, res) => {
  res.send('你好，欢迎使用 Express')
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

server.listen(3000, () => {
  console.log('Web 服务已启动')
})