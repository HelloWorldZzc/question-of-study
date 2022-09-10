Promise.resolve().then(()=>{
    console.log("p1")
})
.then(()=>{
    console.log("p2")
})
console.log("-------------------------")
process.nextTick(()=>{
    console.log("n1");
    process.nextTick(()=>{
        console.log("n2")
    })
})

/**
 *
 注意:js执行的环境是在node里面,并不是在HTML中的js中,那没有process属性
 Node 中的“微任务(microtasks)其实是一个统称，包含了两部分：
    process.nextTick() 注册的回调 （nextTick task queue）
    promise.then() 注册的回调 （promise task queue）
 Node 在执行微任务时， 会优先执行 nextTick task queue 中的任务，执行完之后会接着执行 promise task queue 中的任务。
 所以如果 process.nextTick 的回调与 promise.then 的回调都处于主线程或事件循环中的同一阶段， process.nextTick 的回调要优先于 promise.then 的回调执行。
 */
