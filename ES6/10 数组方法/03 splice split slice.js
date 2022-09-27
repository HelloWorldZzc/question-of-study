//这三个东西长得很像，容易混淆
//split是把字符串按照某种方式整理为数组
//slice是返回数组某个区间内的元素(接受的参数：start，end表示数组的下标，左开右闭)
//splice是删除数组并添加新的元素（接收的参数：start，deleteCount,item）

let test1="abc-bcf-rgd"
console.log(test1.split("-"))
console.log("---------------------------")

let test2=[1,2,3,4,5,6]
console.log(test2.slice(1,3))
console.log(test2)
console.log("------------------------------")

let test3=[1,2,3,4,5,6,7]
console.log(test3.splice(1,3,9))
console.log(test3)
