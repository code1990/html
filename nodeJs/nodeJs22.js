//Node.js 多进程
// Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。
//exec() 方法
// child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。

// 实例
// 让我们创建两个 js 文件 support.js 和 master.js。

// support.js 文件代码：
console.log("进程 " + process.argv[2] + " 执行。" );
// master.js 文件代码：
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var workerProcess = child_process.exec('node support.js '+i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}

// spawn() 方法
// child_process.spawn 使用指定的命令行参数创建新进程，语法格式如下：
// 实例
// 让我们创建两个 js 文件 support.js 和 master.js。

// support.js 文件代码：
console.log("进程 " + process.argv[2] + " 执行。" );
// master.js 文件代码：
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);

    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}

// fork 方法
// child_process.fork 是 spawn() 方法的特殊形式，用于创建进程，语法格式如下：
// support.js 文件代码：
console.log("进程 " + process.argv[2] + " 执行。" );
// master.js 文件代码：
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var worker_process = child_process.fork("support.js", [i]);

    worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}

