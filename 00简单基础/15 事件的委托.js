const btn=document.getElementById("btn")
const list=document.getElementById("list")
const li=document.getElementsByTagName("li")
const lis=[...li]
btn.onclick=()=>{
    const li=document.createElement("li")
    li.innerHTML="新的项目"
    // list.appendChild(li)
    list.insertBefore(li,btn)
}
// // 使用DOM操作添加时间操作--->尽量减少DOM操作
// lis.forEach(li=>{
//     li.onclick=function (){
//         console.log("li标签被点击了")
//     }
// })

//事件的委托
list.onclick=function (e){
    console.log(e)
    const {target}=e
    if (target.nodeName==="LI"){
        alert(target.innerHTML)
    }
}

