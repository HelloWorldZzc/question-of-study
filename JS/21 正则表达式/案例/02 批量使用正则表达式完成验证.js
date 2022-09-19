//一个字符串可能需要多次验证，全部写成一个字符串比较麻烦，可以写成数组再使用数组的方式完成验证

//eg:密码长度5-10位，必须有大小写，必须有数字

let pwd="1234"
const regs=[/^\w{5,10}$/,/[A-Z]/,/\d/]

//tip 数组中的every方法，必须每个都返回true最后才返回true，否则则返回false
let result=regs.every(item=>item.test(pwd));
console.log(result)
