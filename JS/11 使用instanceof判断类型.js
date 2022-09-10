let a={}
console.log(a instanceof Object)

// 使用typeof能获取类型，但是对于一些引用类型，他是不能判断具体的类型的
//使用instanceof关键字能够判断出具体的
//原理：使用到之前的原型链，要是 a的原型链上存在prototype=object，那就返回true，否则返回false