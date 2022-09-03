const p5=document.getElementById("p5")
const list1=document.getElementById("list1")
const body=document.body

body.addEventListener("click",()=>{
    console.log("取消")
})
p5.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log("p5专属的取消")
})