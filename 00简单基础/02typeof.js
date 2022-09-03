//typeof能用于检测数据类型
//需要注意的是 typeof对于引用类型function显示function，对于其他的引用类型都显示object
console.log(typeof (function (){}))
console.log(typeof ([1,2,3]))
console.log(typeof {a:1})
console.log(typeof null)

