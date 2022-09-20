

let number="-122323552"
const reg=/(\d+)(\d{3})/
while (reg.test(number)){
    number=number.replace(reg,"$1,$2")
}
console.log(number)


let arr=new Array(4).fill(1,1,2)
console.log(arr)
