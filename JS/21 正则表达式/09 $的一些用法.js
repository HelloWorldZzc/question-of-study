//$&表示所匹配的内容 `$表示匹配内容的前面 $'表示匹配内容的后面
//但是由于match方法只能接受到一个参数，所以只能使用replace方法(而且不能写成函数方式)

let str="左边的main右边的"
let reg=/main/gi
console.log(str.replace(reg,"$&"))
console.log(str.replace(reg,"$`--修改过了"))
console.log(str.replace(reg,"$'----"))

