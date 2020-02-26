//Node.js 函数
//在JavaScript中，一个函数可以作为另一个函数的参数。
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}
//先定义，再传递
execute(say, "Hello");
//匿名函数
//可以直接在另一个函数的括号中定义和传递这个函数
execute(function(word){ console.log(word) }, "Hello");

var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);