//Node.js 模块系统
//为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
//
// 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块
//
//代码 require('./hello') 引入了当前目录下的 hello.js 文件
var hello = require('./hello');
hello.world();

var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();

//Node.js 中自带了一个叫做 http 的模块，我们在我们的代码中请求它并把返回值赋给一个本地变量。
//文件的加载顺序如下 从高的优先级到低的优先级
//http、fs、path等，原生模块。
// ./mod或../mod，相对路径的文件模块。
// /pathtomodule/mod，绝对路径的文件模块。
// mod，非原生模块的文件模块。

//exports 和 module.exports 的使用
//
// 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
