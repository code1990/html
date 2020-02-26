//Node.js 常用工具
//util 是一个Node.js 核心模块，提供常用函数的集合
//const util = require('util');



//util.callbackify
// util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数

const util = require('util');

async function fn() {
    return 'hello world';
//    null 在回调函数中作为一个参数有其特殊的意义，如果回调函数的首个参数为 Promise 拒绝的原因且带有返回值，且值可以转换成布尔值 false
//    return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
//    // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
//   err && err.hasOwnProperty('reason') && err.reason === null;  // true
});

// util.inherits
// util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
//定义了一个基础对象 Base 和一个继承自 Base 的 Sub，Base 有三个在构造函数内定义的属性和一个原型中定义的函数，
// 通过util.inherits 实现继承。
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

//util.inspect
// util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回 true，否则返回 false。
util.isArray([]);
// true
util.isArray(new Array);
// true
util.isArray({});
// false

// util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
util.isRegExp(/some regexp/);
// true
util.isRegExp(new RegExp('another regexp'));
// true
util.isRegExp({});
// false

//util.isDate(object)
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。
util.isDate(new Date());
// true
util.isDate(Date());
// false (without 'new' returns a String)
util.isDate({});
// false