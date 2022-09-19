//使用断言的方式，能够禁止字符串中出现admin
//没有出现则满足条件返回true 否则则返回false
let name="123amin12366aj"
//解释：admin前面和后面都可以接任意字符
let reg=/^(?!.*admin.*)/
console.log(reg.test(name))
