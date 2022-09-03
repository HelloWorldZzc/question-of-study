async function test1(){
    console.log("test1 begin")  //2
    const result=await test2()
    console.log("result",result)    //5 输出result undefined
    console.log("test1 end")    //6
}
async function test2(){
    console.log("test2")    //3
}
console.log("begin")    //1
test1().then()
console.log("end")  //4

//执行顺序
