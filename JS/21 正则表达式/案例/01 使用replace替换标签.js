let str1=`
<h1>这是test1</h1>
<span>这是span标签</span>
<h2>这是h2标签</h2>
`
let reg1=/<(h[1-6])>(.*)<\/\1>/gi
//小tip：在正则表达式中的replace方法中,p0代表所匹配的字符串，p1代表所匹配的第一个原子组（括号）p2代表匹配的第二个原子组....
let res1=str1.replace(reg1,(p0,p1,p2)=>{
    return `<p>${p2}</p>`
})
console.log(res1)
