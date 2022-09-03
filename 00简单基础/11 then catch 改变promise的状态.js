//结论 then正常返回的时候，promise的状态是fulfilled，报错的时候，promise的状态是reject 同样的 catch同理
//一般的情况
const p1=new Promise((resolve)=>{
    resolve("p1 ok")})
p1.then(resolve=>{
    console.log(resolve)
},reject=>{
    console.log(reject)
})
//回调地狱
const p2=Promise.reject("p2 ok")//虽然是reject，调用catch之后给p3，他一样也是一个promise且值为OK
const p3=p2.then(()=>{
    console.log("p2 ok")
}).catch(()=>{
    console.log("p2 err")
})
p3.then(()=>{
    console.log("p3 0k")
}).catch(()=>{
    console.log("p3 err")
})

const p4=Promise.resolve("ok")
const p5=p4.then(()=>{
    throw Error("error in p5")
}).catch(()=>{
    console.log("err p4")
})
p5.then(()=>{
    console.log("p5 ok ")
}).catch(()=>{
    console.log("p5 err")
})
