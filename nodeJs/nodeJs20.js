//Node.js Express 框架
//Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
//
// 使用 Express 可以快速地搭建一个完整功能的网站。
//安装 Express 并将其保存到依赖列表中：
//$ cnpm install express --save
//以下几个重要的模块是需要与 express 框架一起安装的：
//
// body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
//
// cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
//
// multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
//
// $ cnpm install body-parser --save
// $ cnpm install cookie-parser --save
// $ cnpm install multer --save

//第一个 Express 框架实例
// 接下来我们使用 Express 框架来输出 "Hello World"。

//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

//Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。
//Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：
//
// req.app：当callback为外部文件时，用req.app访问express的实例
// req.baseUrl：获取路由当前安装的URL路径
// req.body / req.cookies：获得「请求主体」/ Cookies
// req.fresh / req.stale：判断请求是否还「新鲜」
// req.hostname / req.ip：获取主机名和IP地址
// req.originalUrl：获取原始请求URL
// req.params：获取路由的parameters
// req.path：获取请求路径
// req.protocol：获取协议类型
// req.query：获取URL的查询参数串
// req.route：获取当前匹配的路由
// req.subdomains：获取子域名
// req.accepts()：检查可接受的请求的文档类型
// req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
// req.get()：获取指定的HTTP请求头
// req.is()：判断请求头Content-Type的MIME类型
// Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：
//
// res.app：同req.app一样
// res.append()：追加指定HTTP头
// res.set()在res.append()后将重置之前设置的头
// res.cookie(name，value [，option])：设置Cookie
// opition: domain / expires / httpOnly / maxAge / path / secure / signed
// res.clearCookie()：清除Cookie
// res.download()：传送指定路径的文件
// res.get()：返回指定的HTTP头
// res.json()：传送JSON响应
// res.jsonp()：传送JSONP响应
// res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
// res.redirect()：设置响应的Location HTTP头，并且设置状态码302
// res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
// res.send()：传送HTTP响应
// res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
// res.set()：设置HTTP头，传入object可以一次设置多个头
// res.status()：设置HTTP状态码
// res.type()：设置Content-Type的MIME类型

//路由
// 我们已经了解了 HTTP 请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。
// 创建 express_demo2.js 文件，代码如下所示：

//静态文件
// Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
//
// 你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
//
// app.use('/public', express.static('public'));

//GET 方法
//<form action="http://127.0.0.1:8081/process_get" method="GET">
// First Name: <input type="text" name="first_name">  <br>
//
// Last Name: <input type="text" name="last_name">
// <input type="submit" value="Submit">
var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
});

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

//POST 方法
//<form action="http://127.0.0.1:8081/process_post" method="POST">
// First Name: <input type="text" name="first_name">  <br>
//
// Last Name: <input type="text" name="last_name">
// <input type="submit" value="Submit">
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
});

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

//文件上传
// 以下我们创建一个用于上传文件的表单，使用 POST 方法，表单 enctype 属性设置为 multipart/form-data。
//<form action="/file_upload" method="post" enctype="multipart/form-data">
// <input type="file" name="image" size="50" />
// <br />
// <input type="submit" value="上传文件" />
// </form>

var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
});

app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

//Cookie 管理
// 我们可以使用中间件向 Node.js 服务器发送 cookie 信息，以下代码输出了客户端发送的 cookie 信息：
// express_cookie.js 文件
var express      = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
})

app.listen(8081);