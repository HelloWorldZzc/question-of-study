function test1(){
    const a=1;
    return function (){
        console.log("a",a)
    }
}
const fn=test1()
const a=2
fn() //  输出 a 1

console.log("-------------------")

function test2(fn){
    const b=1;
    fn();
}
const b=2;
function test3(){
    console.log("b",b)
}

test2(test3) // 输出 b 2
// 闭包：一个函数(tip：在他定义的时候)和它的周围状态的引用捆绑在一起的组合