// 创建方式1---->通过字面量的方式创建(常用)
let str="test.com"
let reg="t";
//不能使用变量的名字，因为他会处理为原始字符串
console.log(/reg/.test(str))
console.log(/t/.test(str))
//可以使用eval的方式处理
console.log(eval(`/${reg}/`).test(str))

console.log("---------------------------------------")

//创建方式2---->对象方式(较少使用)
//原因：要是使用转义字符\d,其中字符要读出一个\d需要在加一个\进行转义，因此一个普通的匹配数字需要写成\\d
let reg2=new RegExp("e","g")
console.log(reg2.test(str))


