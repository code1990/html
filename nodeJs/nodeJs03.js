//Node.js 创建第一个应用
// 在我们创建 Node.js 第一个 "Hello, World!" 应用前，让我们先了解下 Node.js 应用是由哪几部分组成的：
//
// 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
//
// 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
//
// 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
// 创建 Node.js 应用
// 步骤一、引入 required 模块
// 步骤二、创建服务器
// 接下来我们使用 http.createServer() 方法创建服务器
//使用 node 命令执行以上的代码：
//
// node server.js
//打开浏览器访问 http://127.0.0.1:8888/
var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');