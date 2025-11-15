//加载fs模块对象
const fs = require('fs')
//写入文件内容
fs.writeFile('./test.txt', 'hello,Node.js', (err) => {
    if (err) console.log(err)
    else console.log('写入成功')
})
//读取文件内容
fs.readFile('./test.txt', (err, data) => {
    if (err) console.log(err);
        //data是buffer16进制数据流的对象 
        //.toString() 转换成字符串
    else console.log(data.toString());
})