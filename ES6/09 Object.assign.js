//  Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
//   简单来说，就是Object.assign()是对象的静态方法，可以用来复制对象的可枚举属性到目标对象，利用这个特性可以实现对象属性的合并。

const test1={
    name:"张三",
    age:18,
    sex:"nan",
    o1:"666"
}
const test2={
    age:20,
    sex:"nv",
    o2:"444"
}
const test3=Object.assign(test1,test2)
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test1===test3)

//我们可以得出结果，返回一个对象，并且返回的对象与传入的第一个值是绝对等于的关系(内存地址相等)
//第一个参数所得到的数据都是从其他参数中获取的，那么也会有覆盖的情况产生
