//原子表和原子组，就是我们所熟悉的[] 和（），一个表示分开，一个表示合并

//[]很熟悉了，这里就不过多介绍，详情可见 00 初学js时候做的笔记上面有记载，()有很多特性是没有了解的，下面是一些()的特性

//1、\1\2表示复用
//举例-->匹配h1或h2或h3...h6标签，前后都要对应
let str1="<span>这是h1标签</span>"

let reg1=/<(h[1-6])(.*)<\/\1>/
console.log(str1.match(reg1))

//2、“?:” --->不能使用\1\2的方式进行复用(了解即可)
let str2="https://www.baidu.com  ht"
let reg2=/https?:\/\/((\w+\.)?\w+\.(com|cn))/gi
console.log(str2.match(reg2))

//3、可以给（）命名(?<name>)的方式，替换的时候更加方便（只是在返回字符的时候有效，回调函数作用不大）
let str3="span_s hello world this is a test span_e"
let reg=/(?<tag1>span_s)(?<content>.*)(?<tag2>span_e)/
console.log(str3.replace(reg,"$<content>"))
