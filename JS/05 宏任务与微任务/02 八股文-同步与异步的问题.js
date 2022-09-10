function fn(){
    return new Promise(resolve =>{
        console.log("promise1")
        fn1()
        setTimeout(()=>{
            console.log("promise2")
            resolve()
            console.log("promise3")
        },0)
    } )
}

async function fn1(){
    let p=Promise.resolve().then(()=>{
        console.log("promise6")
    })
    await p.then(()=>{
        console.log("promise7")
    })
    console.log("end")
}
console.log("start")
setTimeout(()=>{
    console.log("setTimeout")
},0)
fn().then(()=>{
    console.log("promise4")
})

/**
 *
 * 输出的结果为：start 1 6 7  end setTimeout 2 3 4
 *
 * 分析程序的过程 首先输出start
 * 在宏任务中添加输出setTimeout  H【setTimeout】
 * 调用fn 中输出 promise1 （虽然是微任务但是没有同步任务了，直接进行调用）
 * 调用F1函数--->F1函数中需要输出Xx,先占着位置，后面在进行详解
 * fn中有定时器，在宏任务中添加 H【setTimeout,promise2】
 * 调用resolve，本身promise.resolve.then()应该属于微任务，但是他本身就是在宏任务中的，因此要等待promise3输出玩了之后，才能执行.then后面的操作
 * 综上 先输出start promise1 F1 setTimeout promise2 promise3 promise 4 同步-->微任务-->宏任务
 *
 * F1函数中的输出
 *  按照同步异步的关系，本身应该输出 end 6 7
 *  但是使用了await关键字 他的作用是要等到他执行完了之后，后面的才能执行
 *  因此应该先输出6 7 end
 *
 *  综上 start promise 6 7 end setTimeout promise2 promise3 promise4
 *
 *
 */
