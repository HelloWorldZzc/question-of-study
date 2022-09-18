let str="this is a test"
console.log(str.match(/\w/))
console.log(str.match(/\w/g))

//在上面的例子中我们可以发现，全局匹配的话会损失一些特性
//使用reg.exec可以得到相关属性,lastIndex是其中的一个属性，检索出下一个值
let reg=/\w/g
console.log(reg.exec(str),reg.lastIndex)
console.log(reg.exec(str),reg.lastIndex)

//可以利用这个属性，展示一些常用的方式
let res=''
console.log("---------------")
while ((res=reg.exec(str))){
    console.log(res,reg.lastIndex)
}
