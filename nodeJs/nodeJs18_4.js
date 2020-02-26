//Node.js DNS 模块
//Node.js DNS 模块用于解析域名。引入 DNS 模块语法格式如下：
var dns = require('dns');

dns.lookup('www.github.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});
