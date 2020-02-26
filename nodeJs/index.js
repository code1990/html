var server = require("./nodeJs13");
var router = require("./router");

server.start(router.route);