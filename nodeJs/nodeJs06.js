//Node.js 回调函数
//Node.js 异步编程的直接体现就是回调。
//
// 异步编程依托于回调来实现
//
//阻塞代码实例
//第一个实例在文件读取完后才执行程序
// 创建一个文件 input.txt
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");

//非阻塞代码实例
//第二个实例我们不需要等待文件读取完
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
//阻塞是按顺序执行的，而非阻塞是不需要按顺序的
console.log("程序执行结束!");