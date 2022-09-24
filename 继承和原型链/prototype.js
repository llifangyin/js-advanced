// let f =function(){
//     this.a = 1
//     this.b =2
// }
// let o = new f()
// f.prototype.b = 3
// f.prototype.c = 4
//不要再f函数的原型上直接定义.prototype.值，这样会直接打破
// 原型链

// console.log(o);
// console.log(o.constructor.prototype)
// console.log(o._proto_)
// o.[[Prototype]] 有属性b 和c
// ==o._proto_ 或 o.constructor.prototype

// o.[[prototype]].[[prototype]]就是Object.prototype
// 最后 o.[[prototype]].[[prototype]].[[prototype]] 是null
// 这就是原型链的末尾

// 原型链如下：
// {a:1,b:2} => {b:3,d:4} => Object.prototype => null

// console.log(o.a);//1
// 原型上也有个2 但它不会被访问到，这种情况被称为属性这笔
// console.log(o.b);//2
//
// console.log(o.c); //3
// 自身属性？：原型上有没有？：o.[[prototype]]?:==>undefined
// console.log(o.d);


// var o2 = {
//     a:2,
//     m:function(){
//         return this.a +1
//     }
// }

// console.log(o2.m());
// var p = Object.create(o2) //新的指针
// var p =o2
// p.a = 4
// console.log(o2.m());
// console.log(p.m());

// 运行在浏览器环境中
// function doSomething(){}
// doSomething.prototype.foo = "bar";
// var doSomeInstancing = new doSomething();
// doSomeInstancing.prop = "some value";
// console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
// console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
// console.log("doSomething.prop:           " + doSomething.prop);
// console.log("doSomething.foo:            " + doSomething.foo);
// console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
// console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
