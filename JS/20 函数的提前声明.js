//var在定义变量的时候会提前声明，与其相似的，function也会提前声明，提升是整个函数提升到当前作用域的顶层，函数表达式没有提升
//eg:
fun1();
function fun1(){
	console.log(1)
}

//进行提前声明，那么她会提前声明成
function fun2(){console.log(2)}
fun2()

//要是遇上var，是这样的一个操作
fun3();
var fun3=function(){console.log(3)}

//变量提升之后,可以看到变量在var之后立马接上函数
var fun4
fun4()
fun4=function(){console.log(4)}

//注意，这里的变量提升指的是 var xxx=function(){}
//要是这样的话 var xxx=function xxx() {}则当成正常条件执行即可
