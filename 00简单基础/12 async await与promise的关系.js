// 1、执行async函数，返回的都是promise的对象
async function test1(){
    return 1
}
async function test2(){
    return new Promise(res=>{
        res(2)
    })
}
const result1=test1()
const result2=test2()
console.log("result1",result1)
console.log("result2",result2)


//promise.then 返回成功的情况对应的是await
async function test3(){
    const p3=Promise.resolve(3)
    p3.then(data=>{
        console.log("data",data)
    })
    const data=await p3
    console.log("data",data)
}
test3().then()

async function test4(){
    const data4=await 4
    //这里的代码就相当于 await.promise.resolve(4)
    //对于await后面
    console.log("data4",data4)
}
test4().then()

async function test5(){
    const data5=await test1()
    console.log("data5",data5)
}
test5().then()

//promise.catch异常的情况使用try...catch
async function test6(){
    const p6=Promise.reject(6)
    try {
        const data6=await p6
        console.log("data6",data6)
    }
    catch (e) {
        console.log("e",e)

    }
}
test6().then()