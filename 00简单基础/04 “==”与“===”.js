/**
 *一般而言，在使用==的时候会有类型的转换，===则要求要全的相等
 * 特殊情况如下
 */
console.log(100=='100') //会进行强制类型的转换
console.log(0=='')
console.log(0==false)
console.log(null==undefined)
console.log(''==false) // 这些都转换成false
console.log(1==true) //都表示true

//因此，一般而言我们都要使用“===”，除了以下的特殊情况
const perosn={
    name:""
}
if (perosn.name==null){
    console.log("name不存在")
}

//相当于===
if (perosn.name===null ||perosn.name===undefined){
    console.log("name不存在")
}