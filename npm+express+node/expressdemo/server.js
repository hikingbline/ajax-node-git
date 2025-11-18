/**
 * 目标：基于 express 软件包，开发提供省份列表的数据接口
 * 要求：get 请求方法，/api/province 的请求路径
 */
const fs = require("fs");
const path = require("path");
const express = require("express");
const server = express();

// 定义省份列表接口
server.get("/api/province", (req, res) => {
  // 读取省份数据文件
  fs.readFile(path.join(__dirname, "data/province.json"), (err, data) => {
    if (err) {
      // 处理文件读取错误（如文件不存在）
      res.status(500).send("服务器数据读取失败");
      return;
    }
    // 成功读取后返回数据（自动解析为 JSON 格式）
    res.json(JSON.parse(data.toString()));
  });
});

// 处理无效路径请求
server.all("*", (req, res) => {
  res.status(404).send("你要访问的资源路径不存在");
});

// 启动服务
server.listen(3000, () => {
  console.log("Web 服务已启动，端口：3000");
  console.log("可访问接口：http://localhost:3000/api/province");
});
