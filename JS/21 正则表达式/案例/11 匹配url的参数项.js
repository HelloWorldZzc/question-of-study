let url="https://item.taobao.com/item.htm?a=ewewe&b=2&c=2&d=3"
let reg=/(\w+)=([\d|\w]+)/g
let arr=url.match(reg)
let ans={}
for(let temp of arr){
    let [key,value]=temp.split("=")
    console.log(key,value)
    ans[key]=value
}
console.log(ans)
