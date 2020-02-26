//NPM 使用介绍
// NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
// npm -v
// npm install npm -g
// npm install -g cnpm --registry=https://registry.npm.taobao.org
//使用 npm 命令安装常用的 Node.js web框架模块 express:
//在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
//var express = require('express');
//npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如
//查看安装信息
// 你可以使用以下命令来查看所有全局安装的模块：
//
// $ npm list -g
//使用 package.json
// package.json 位于模块的目录下，用于定义包的属性。
//卸载模块
// 我们可以使用以下命令来卸载 Node.js 模块。
//
// $ npm uninstall express
//查看包是否还存在，或者使用以下命令查看：
//
// $ npm ls
// 更新模块
// 我们可以使用以下命令更新模块：
//
// $ npm update express
// 搜索模块
// 使用以下来搜索模块：
//
// $ npm search express
// 创建模块
// 创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
//
// $ npm init
//接下来我们就用以下命令来发布模块：
//
// $ npm publish
//使用npm help可查看所有命令。
//
// NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
//
// 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
//
// 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
//
// 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
//
// 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
//
// 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
//
// 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

//如果你遇到了使用 npm 安 装node_modules 总是提示报错：报错: npm resource busy or locked.....。
//
// 可以先删除以前安装的 node_modules :
//
// npm cache clean
// npm install