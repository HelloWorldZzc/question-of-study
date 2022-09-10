// 判断一个表达式的Boolean值 最简单的方法为!!表达式
//除了以下表达式的结果为false，其他的均为true
console.log(!!"")
console.log(!!0)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)

//其他的情况都表示真
console.log(!![])
console.log(!!{})
