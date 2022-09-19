let e="123@qq.1.2.com"
//前面是字母和- 中间要有@ @后面可以接其他东西（至少一个）
let reg=/^[\w-]+@(\w+\.)+(com|cn|org)$/i
console.log(reg.test(e))
