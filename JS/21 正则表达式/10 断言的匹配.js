// 要是有多种匹配条件的，我们只需要符合条件的一种，那么就可以使用断言了区分
// tip :注意括号的顺序 前面的要求卸载前面，后面的要求写在后面
// ?=所匹配的字符后面是什么时候能成功匹配 ?<=所匹配字符前面是什么时候能成功匹配

let str="000main6661111main9999"
//匹配main 要求后面是9
let reg=/main(?=9)/
console.log(str.match(reg))

//匹配main 要求前面是0
let reg2=/(?<=0)main/
console.log(str.match(reg2))


//与匹配断言相同的，也存在反向断言，要后面不是这样的才能匹配

//匹配main 要求后面不是9
let reg3=/main(?!=9)/
console.log(str.match(reg3))


//匹配main 要求前面不是0
let reg4=/(?<!0)main/
console.log(str.match(reg4))

//断言的要求中也能写正则表达式
let str2="hehamainhhhmaincc999main"
let reg5=/(?<!\D)main/
console.log("----")
console.log(str2.match(reg5))
