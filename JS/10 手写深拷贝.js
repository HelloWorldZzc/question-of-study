//首先深拷贝和浅拷贝的定义就不进行另外的说明了,深拷贝赋值的数值,浅拷贝复制的是索引

function deepClone(source){
    //首先需要判断他的类型,深拷贝只能是引用类型(对象和数组)
    const targetObj=source.constructor===Array?[]:{}
    for (const keys in source) {
        //属性还有嵌套,里面还有其他的类型
        if (source.hasOwnProperty(keys)){
            //引用数据类型
           if (source(keys) && typeof source(keys)==="object"){
               targetObj[keys]=source[keys].constructor===Array?[]:{}
               targetObj[keys]=deepClone(source(keys))
           }
           //没有更深一步的属性了,直接赋值即可
           else{
               targetObj[keys]=source[keys]
           }
        }
    }
    return targetObj
}
//hasOwnProperty是用来检测属性是否为对象的自有属性，如果是，返回true，否者false
let a=10
let arr=[1,2,3,[4,5]]
console.log(arr.hasOwnProperty(Array))
//简单的解决深拷贝的情况---->因为不能处理function类型的深拷贝
let deep=JSON.parse(JSON.stringify(arr))
