let test=[1,2,3]
const res=test.map(parseInt)
console.log(res)
//tip:parseInt接收两个参数(a,b)，a表示转变的值，b表示是哪种进制
//等价于
const res2=test.map((item,index)=>{
   return  parseInt(item,index)
})
console.log(res2)