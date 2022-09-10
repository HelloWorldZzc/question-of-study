setTimeout(()=>{
    console.log(2)
},0)
setTimeout(()=>{
    console.log(">")
},0)
Promise.resolve().then(()=>{
    console.log(3)
})
console.log(1)
console.log(4)

/*
* 结论：微任务的执行时机，比宏任务早
*      微任务>DOM渲染>宏任务
* 宏任务：setTimeout,setInterval,DOM事件，AJAX请求，DOM渲染
* 微任务：promise，async/await
* */