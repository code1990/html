//Node.js 全局对象
//它及其所有属性都可以在程序的任何地方访问，即全局变量
//
//在浏览器 JavaScript 中，通常 window 是全局对象，
// 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。


//__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径
// 输出全局变量 __filename 的值
console.log(__filename);


//__dirname 表示当前执行脚本所在的目录。
// 输出全局变量 __dirname 的值
console.log(__dirname);

//setTimeout(cb, ms)
// setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)
function printHello1() {
    console.log("Hello, World!");
}

// 两秒后执行以上函数
setTimeout(printHello1, 2000);

//clearTimeout(t)
// clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。
function printHello11() {
    console.log("Hello, World!");
}

// 两秒后执行以上函数
var t = setTimeout(printHello11, 2000);

// 清除定时器
clearTimeout(t);

//setInterval(cb, ms)
// setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
function printHello2() {
    console.log("Hello, World!");
}

// 两秒后执行以上函数
setInterval(printHello2, 2000);


//用于向标准输出流（stdout）或标准错误流（stderr）输出字符
//console.log()：向标准输出流打印字符并以换行符结束。
//console.error()：与console.log() 用法相同，只是向标准错误流输出。
// console.trace()：向标准错误流输出当前的调用栈。

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
//
console.timeEnd('获取数据');

console.info("程序执行完毕。");

//process 是一个全局变量，即 global 对象的属性。
//
process.on('exit', function (code) {

    // 以下代码永远不会执行
    setTimeout(function () {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");


//Process 属性
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);


//Process 提供了很多有用的方法，便于我们更好的控制系统的交互：
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());