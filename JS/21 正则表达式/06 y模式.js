//g模式是常见的全局匹配项，y模式的使用较少，但在有些时候有比较大的作用
//y模式：一旦匹配到不符合的数据，就会停止
let str="这些都是没有用的信息，这些才是有用的信息：123这些也是没有用的信息"
let reg=/\d/y
reg.lastIndex=21
console.log(reg.exec(str)[0])
//使用y模式进行匹配可能提升效率，不用在把整个文档再进行扫描完，遇到不合适的就直接停止
console.log("------------------------")


reg.lastIndex=21
let temp=""
while (temp=reg.exec(str)){
    console.log(temp)
}
