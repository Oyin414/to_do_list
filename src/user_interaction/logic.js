

let sideBar = document.querySelector(".side")
let content = document.querySelector(".content")


let list = document.querySelector(".task_button")

/* Project form pop up */



function setUpForms() {
const project = document.querySelector(".project_button")
const cancel = document.querySelector(".btn_cancel")

project.addEventListener("click",()=>{
  document.getElementById("myForm").style.display = "block";
})

cancel.addEventListener("click",()=>{
 document.getElementById("myForm").style.display = "none";
})
}



export{setUpForms}