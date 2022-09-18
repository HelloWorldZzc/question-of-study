
//输出str中的数字
let str="dhs22j3h2321jt"
//使用传统的方式
let num=[...str].filter(item=>!Number.isNaN(parseInt(item)))
console.log(num.join(""))

//使用正则表达式
console.log(str.match(/[0-9]/g).join(""))
