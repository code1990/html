//Node.js JXcore 打包
//Node.js 是一个开放源代码、跨平台的、用于服务器端和网络应用的运行环境。
//
// JXcore 是一个支持多线程的 Node.js 发行版本，基本不需要对你现有的代码做任何改动就可以直接线程安全地以多线程运行。
//
//1、Window 平台下载：Download(Windows x64 (V8))。

//jx --version

//包代码
//例如，我们的 Node.js 项目包含以下几个文件，其中 index.js 是主文件：
//接下来我们使用 jx 命令打包以上项目，并指定 index.js 为 Node.js 项目的主文件：
//
// $ jx package index.js index
// 以上命令执行成功，会生成以下两个文件：
//
// index.jxp 这是一个中间件文件，包含了需要编译的完整项目信息。
//
// index.jx 这是一个完整包信息的二进制文件，可运行在客户端上。
//载入 JX 文件
// Node.js 的项目运行：
//
// $ node index.js command_line_arguments
