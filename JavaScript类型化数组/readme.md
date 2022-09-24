javascript类型化数组：

**JavaScript类型化数组是一种类似数组的对象，并提供了可以访问原始二级制数据的机制**
类型化数组调用Array.isArray() //false

***ArrayBuffer 一种数据类型，表示通用的、固定长度的二级制数据缓存区。***
需要创建一个类型化十足的视图或者描述缓冲数据格式的DataView,使用它们来读写缓冲区的内容

DataView是一种底层接口，提供可以操作缓冲区任意数据的读写接口

var buffer = new ArrayBuffer(16)
var buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);

转为普通数组
Array.form
如果不支持 则用：
var typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;