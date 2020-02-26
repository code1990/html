//Node.js Buffer
//JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
//在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
//Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。
const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));

//创建 Buffer 类
// Buffer 提供了以下 API 来创建 Buffer 类：
//
// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

//写入 Node 缓冲区的语法如下所示：
buf11 = Buffer.alloc(256);
len11 = buf11.write("www.runoob.com");

console.log("写入字节数 : "+  len11);

//读取 Node 缓冲区数据的语法如下所示：
buf22 = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf22.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf22.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
console.log( buf22.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
console.log( buf22.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde


//将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
const buf33 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf33);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);


//Node 缓冲区合并的语法如下所示：
var buffer111 = Buffer.from(('菜鸟教程'));
var buffer211 = Buffer.from(('www.runoob.com'));
var buffer311 = Buffer.concat([buffer111,buffer211]);
console.log("buffer3 内容: " + buffer311.toString());

//Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
var buffer122 = Buffer.from('ABC');
var buffer222 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer122 + " 在 " + buffer222 + "之前");
}else if(result == 0){
    console.log(buffer122 + " 与 " + buffer222 + "相同");
}else {
    console.log(buffer122 + " 在 " + buffer222 + "之后");
}

//Node 缓冲区拷贝语法如下所示：
var buf155 = Buffer.from('abcdefghijkl');
var buf255 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf255.copy(buf155, 2);

console.log(buf155.toString());

//Node 缓冲区裁剪语法如下所示：
var buffer166 = Buffer.from('runoob');
// 剪切缓冲区
var buffer266 = buffer166.slice(0,2);
console.log("buffer2 content: " + buffer266.toString());

// Node 缓冲区长度计算语法如下所示：
var buffer1666 = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer1666.length);
