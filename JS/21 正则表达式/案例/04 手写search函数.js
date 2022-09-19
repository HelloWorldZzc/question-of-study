function search(string,reg){
    let result=[]
    let res=""
    while (res=reg.exec(string)){
        result.push(res)
    }
    return result
}
let s="123h233"
let reg=/\d+?/gi
console.log(search(s,reg))
