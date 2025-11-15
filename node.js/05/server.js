
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  
  res.end('欢迎使用 Node.js 和 http 模块创建的 Web 服务')
})

server.listen(3000, () => {
  console.log('Web 服务启动成功了')
})