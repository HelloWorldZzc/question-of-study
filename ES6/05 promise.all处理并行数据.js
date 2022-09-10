const promise1=new Promise(res=>{
    for (let i=0;i<1000900;i++){}
    res("promise1中的数据",1,2,31,3,2,31,3)
})
const promise2=new Promise(res=>{
    res("promise2中的数据",1,2,31,3,2,31,3)
})
const promise3=new Promise(res=>{
    res("promise3中的数据")
})
Promise.all([promise1,promise2,promise3]).then(res=>{
    console.log(res)
})
//由于promise的执行完成的先后顺序是不一定的，所以需要使用promise.all方法，在执行完所有的promise之后生效
//场景：例如等待数据的过程中需要展示动画，可直接在promise.all之前插入动画，在之后移除动画。