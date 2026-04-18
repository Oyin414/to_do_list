import { makeProject,makeTask,changeProject,defaultScreen,displayTasks,deleteBtn} from "./display.js"
import {addProject,removeProject,getProject,findProject} from "../data/project_manager.js"
import { ListItems } from "../create/list.js"
import { Project } from "../create/project.js"

/* Project form pop up */
let project;

function setUpForms() {
const project = document.querySelector(".project_button")
const cancel = document.querySelector(".btn_cancel")
const task = document.querySelector(".task_button")
const cancelTask = document.querySelector(".task_cancel")

project.addEventListener("click",()=>{
  document.getElementById("myForm").style.display = "block";
})

cancel.addEventListener("click",()=>{
 document.getElementById("myForm").style.display = "none";
})

task.addEventListener("click",()=>{
  document.getElementById("form").style.display = "block";
})

cancelTask.addEventListener("click",()=>{
 document.getElementById("form").style.display = "none";
})

}

function submitForm() {
  let projectBtn = document.querySelector(".btn")
  let taskBtn = document.querySelector(".taskBtn")
  let result

/* Create Projects */

projectBtn.addEventListener("click",function() {
   event.preventDefault();
  let projectName = document.getElementById("project").value
  let id = crypto.randomUUID()
  if(document.getElementById("project").validity.valueMissing){
  return document.getElementById("project").reportValidity()
  }else{
  const newProject = new Project(projectName,id)
  makeProject(projectName,id)
  addProject(newProject)
  }
   

   /* Add tasks to each created project */

  for (let item of document.querySelectorAll(".overview:not(.initialized)")) {
    item.addEventListener("click", function() {
        document.querySelector('.hide').style.display = "block";
        let dataId = item.getAttribute("project-id");
        console.log(dataId)
        result = findProject(dataId);
        changeProject(result.title);
        displayTasks(dataId)
        
        let section = item.hasChildNodes()
       console.log(result)
    });
    item.classList.add("initialized");
}
   })

    /* Create Taska */

    taskBtn.addEventListener("click",function (){
    event.preventDefault();
   let name = document.getElementById("task").value
   let priority = document.getElementById("priority").value
   let date = document.getElementById("date").value
   let taskId = crypto.randomUUID()
  let info = document.getElementById("info").value
   let dateError = document.getElementById("date")
   let taskError = document.getElementById("task")

   if (dateError.validity.valueMissing){
    dateError.reportValidity()
   }else if( taskError.validity.valueMissing){
     taskError.reportValidity()
   }else{
    let task = new ListItems(name,priority,date,info,taskId)
       result.addListItem(task)
   makeTask(name,date,taskId)
   
   let biggest = document.querySelectorAll(".biggest")
    let task_delete = document.querySelectorAll(".delete_btn")

   biggest.forEach(item => {
     if(item.hasAttribute('project-id') === false){
        item.setAttribute('project-id',result.id)
    }} )

    task_delete.forEach(item => {
   item.addEventListener("click",function(){
    let delete_container = item.parentNode.parentNode.parentNode
    let delete_id = delete_container.getAttribute("data-id")
    result.removeListItem(delete_id)
    deleteBtn(delete_container)
    console.log(result)
   })
   })
   }

   

   console.log(getProject())
  })
}
/* */

async function taskDelete(){
console.log("yay")
}





export{setUpForms,submitForm,taskDelete}