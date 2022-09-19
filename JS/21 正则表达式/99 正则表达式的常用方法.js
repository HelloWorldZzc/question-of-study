//不同的语言对于正则表达式有着不同的方法，仅仅对于js这块而言，存在下面的方法

//字符串相关-->match matchAll search split replace
//1、match--->返回字符串中，满足正则表达式的串
//2、matchAll--->全局匹配，返回一个迭代器对象
let str1=`
<h1>this is a test of test1</h1>
<h1>this is a test of test1</h1>
<span>this is a test of test1</span>
`
let reg1=/<(h[1-6])>(.+)<\/\1>/gi
let obj1=str1.matchAll(reg1)
//返回一个迭代器对象，其中可能有许多其他内容，需要自己去寻找
for(let item of obj1){
    console.table(item)
}

//3、split 分割 使用什么分割？可以使用正则表达式进行匹配
let str2="2022/2-2"
let reg2=/[\/-]/
console.log(str2.split(reg2))

//4、replace替换 替换什么内容，需要使用正则表达式进行说明，替换成什么内容需要讨论
//要是替换的内容写成字符串形式，可以使用 $&等方式快速查找正则表达式所匹配|前|后的内容 同时也可以使用 $1 $2表示原子组的内容(改名的情况下也可以使用改名的标签)
//要是替换的内容写成回调函数的形式，使用变量接收 p0代表所匹配的字符串，p1代表所匹配的第一个原子组（括号）.....

let str3="<h1>test</h1>"
let reg3=/<(h[1-6])>(.*)<\/\1>/
console.log(str3.replace(reg3,"$2"))
console.log(str3.replace(reg3,(str,...arg)=>{
    console.log(arg)
    return ""
}))


//正则表达式相关--->test exec
//test 判断字符串是否符合正则表达式的要求，满足要求返回true，否则返回false


//exec 与字符串的match有着相似的地方，但是match对于长字符一些信息是不能展现的，使用exec能使用一些属性比如lastIndex
