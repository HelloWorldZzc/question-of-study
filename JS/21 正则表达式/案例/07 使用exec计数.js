let str="test1212test2323testcjcjcbttest323gtest"
let reg=/(?<title>test)/gi
let count=0
let temp=""
while (temp=reg.exec(str)){
    // console.table(temp)
    count++
}
console.log(count)
