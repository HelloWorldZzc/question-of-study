let lesson=`
    js,200元,300次
    php,300.00元，100次
    node,15元，100次
`
let reg=/(\d+)(.00)?(?=元)/gi

let n_lesson=lesson.replace(reg,(str,...args)=>{
    args[1]=args[1] || ".00"
    console.log(args)
    return args.splice(0,2).join("")
})

console.log(n_lesson)

