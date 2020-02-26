//Node.js EventEmitter
//Node.js EventEmitter
// Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
//
// Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

//EventEmitter 类
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
//
// 你可以通过require("events");来访问该模块。
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
//event 对象注册了事件 some_event 的一个监听器，
// 然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，
// 此时会调用some_event 的监听器
event.on('some_event', function () {
    console.log('some_event 事件触发');
});
setTimeout(function () {
    event.emit('some_event');
}, 1000);


//当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
var events2 = require('events');
var emitter2 = new events2.EventEmitter();
emitter2.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter2.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter2.emit('someEvent', 'arg1 参数', 'arg2 参数');

//EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。
//方法
// 序号	方法 & 描述
// 1	addListener(event, listener)为指定事件添加一个监听器到监听器数组的尾部。
// 2	on(event, listener)为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
// 3	once(event, listener)为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
// 4	removeListener(event, listener)移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
// 5	removeAllListeners([event])移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
// 6	setMaxListeners(n)默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
// 7	listeners(event)返回指定事件的监听器数组。
// 8	emit(event, [arg1], [arg2], [...])按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
// 类方法
// 序号	方法 & 描述
// 1	listenerCount(emitter, event)返回指定事件的监听器数量。
// events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
// events.emitter.listenerCount(eventName) //推荐
// 事件
// 序号	事件 & 描述
// 1	newListener该事件在添加新监听器时被触发。
// 2	removeListener从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。

var events3 = require('events');
var eventEmitter3 = new events3.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
};

// 监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
};

// 绑定 connection 事件，处理函数为 listener1
eventEmitter3.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter3.on('connection', listener2);

var eventListeners = eventEmitter3.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件
eventEmitter3.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter3.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter3.emit('connection');

eventListeners = eventEmitter3.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");

//EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
var events4 = require('events');
var emitter4 = new events4.EventEmitter();
emitter4.emit('error');
//继承 EventEmitter
// 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。