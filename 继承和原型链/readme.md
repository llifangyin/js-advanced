继承与原型链
JavaScript是动态的，本身不提供class的实现，
**es2015引入了class关键字，**
**也只是语法糖，JavaScript仍然是基于原型的**
**JavaScript 只有一种结构：对象。**
**每一个对象都有一个私有属性 _proto_(原始的)  指向它的构造函数的**
**原型对象（prototype)。该原型对象也有一个自己的原型对象(_proto_),**
**层层向上直到一个对象的原型对象为Null。根据定义，null没有原型，**
**并作为这个原型链的最后一个环节。**


原型的作用：
**1、属性公用化，在各个不同实例中共享使用原型的默认属性和方法**
**2、继承 构造函数继承父类**
**3、节省存储空间—（公共的属性方法多了，对应需要的内存空间减少）**



**几乎所有的JavaScript中的对象都是位于原型链顶端的Object实例**

尽管这种原型链继承通常被认为是JavaScript的弱点之一，但是原型
集成模型本身实际上比经典模型更强大。例如：在原型模型的基础上
构建经典模型相对简单。 

基于原型链的继承

**继承属性：**
JavaScript对象是动态的属性'包'（指自己的属性) 。
JavaScript对象有一个指向原型对象的链。当访问一个属性时，不仅仅
在该对象上搜寻，还会搜索该对象的原型，以及该对象的原型的原型
依次层层向上搜索，直到找到一个名字匹配的属性或达到原型链的末尾


**继承方法：**
JavaScript并没有其他基于类的语言所定义的方法。在JavaScript里
任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性
的继承没有差别，包括属性遮蔽。

在JavaScript中使用原型：
函数function是允许拥有属性的。所有的函数会有一个特性的属性prototype。

任何函数的原型属性_proto_都是window.Object.prototype

function对象的prototype
{
    prototype:xxx,
    _proto_:{
        constructor:f,
        hasOwnProperty:f,
        isPrototypeOf:f,
        proeprtyIsEnumberable:f,
        toLocalString:f,
        valueOf:f
    }
}   


用不同的方法来创建对象和生成原型链：
var o = {a:1}
原型链： o => Object.prototype => null

var a = [1,2,3]
原型链: a => Array.prototype => Object.prototype => null

fucntion f(){}
原型链： f=> Function.prototype => Object.prototype=> null

用构造器创建的对象：
function Graph() {
  this.vertices = [];
  this.edges = [];
}
Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};
var g = new Graph();
原型链： g=> Object(自定义的prototype) =>Object.prototype => null


用Object.create 创建对象
var a = {a: 1};
// a ---> Object.prototype ---> null
var b = Object.create(a);

// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined，


使用class关键字创建的对象：

"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}
var square = new Square(2);

原型链：square => Polygon => Object.prototype(?) => Object.prototype = >null

window对象 ： window => Window = > window => WindowProperties => EventTarget => Object.prototype => null



**性能：**
**在原型链上查找属性比较耗时，对性能有副作用。试图访问不存在的属性时会遍历整个原型链**
**区分自己定义的属性，而不是原型链上的属性，用从Object.prototype继承的hasOwnPrototype方法**
**hasOwnProperty是JavaScript唯一一个处理属性并且不用遍历原型链的方法**
**undefined特殊，该属性可能存在，又可以恰好被设置undefined**



错误实现：扩展原生对象的原型
扩展内置原型？ 被称为猴子补丁，尽管一些流行的框架（prototype.js)
在使用该技术，但仍没有足够好的理由来使用附加的非标准防范来混入内置模型

**扩展内置原型的唯一理由是支持JavaScript引擎的新特性：如Array.forEach**



prototype和Object.getPrototypeOf ：

JavaScript完全是动态的，都是运行时，不存在类class,所有的都是实例，
即使模拟出来类，也只是一个函数对象。

**prototype用于类的**
**Object.getPrototypeOf用于实例的（instances）,两者功能一致**

ep:在使用继承时，注意原型链的长度，必要时将其分解，避免可能的新能问题。
原生原型不应该被扩展，除非它是为了与新的JavaScript特性兼容。




**构造函数：**
**在JavaScript中，构造函数通常用于实现实例的，JavaScript没有类的概念**
**但是有特殊的构造函数。构造函数本质上时一个普通函数，充当类的角色，主要用来创建实例**
**并初始化实例，即为实例成员变量赋初始值**

**构造函数与普通函数的区别在于：构造函数应遵循以下规范：**
**1、命名，首字母大写**
**2、调用方式不同，普通函数直接调用，构造函数需要new关键字进行调用**
**3、在构造函数内部，this指向时新创建的实例**
**4、构造函数中没有显示的return 表达式，一般默认隐式返回this,也就是新创建的实例对象**
   **如果想使用显示的返回值，则显示返回值必须是对象，否则依然返回实例。**
   

   原型链的内存分析图
   // 第一步 新建构造函数
function Person(name) {
    this.name = name;
    this.age = 18;
    this.sayName = function() {
        console.log(this.name);
    }
}
// 第二步 创建实例
var person = new Person('person');