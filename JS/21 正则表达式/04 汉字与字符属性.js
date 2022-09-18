//正则表达式中的特性 P{xxx}用于匹配特定的字符---tip:使用的时候要注意使用转义字符呀
let str="test123.?.TEST2中文"
console.log("匹配字母类型的字符：",str.match(/\p{L}+/gu))
console.log("匹配大写字母",str.match(/\p{Lu}/ug))
console.log("匹配小写字母",str.match(/\p{Ll}/ug))
console.log("匹配英文",str.match(/(\p{Ll}|\p{Lu})+/gu))
console.log("匹配标点",str.match(/\p{P}/ug))
console.log("匹配中文",str.match(/\p{sc=Han}/ug))
console.log("匹配数字：",str.match(/\p{N}/ug))

//相关的匹配规则可以在其文档查询 https://www.regular-expressions.info/unicode.html#prop
