import { makeProject,makeTask,displayTasks,deleteBtn} from "./display.js"
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
        result = findProject(dataId);
        displayTasks(dataId)
        
        let section = item.hasChildNodes()
    });
    item.classList.add("initialized");
}

  /*Delete projects */
  let project_del = document.querySelectorAll(".del")
   project_del.forEach(item => {
    item.addEventListener("click",function(){
      let project_cont = item.parentNode
      let proj= project_cont.getAttribute("overview")
      let proj_id = project_cont.getAttribute("project-id")
       let biggest = document.querySelectorAll(".biggest")
       if (result !== undefined){
        if (result.list.length > 0){
          result.list.forEach(item => {
          let specialId = item.id
          result.removeListItem(specialId)
          biggest.forEach(item => {
            if (item.getAttribute("project-id") === proj_id){
               deleteBtn(item)
            }
          })
        })
        }
       
      }
      removeProject(proj_id)
      deleteBtn(project_cont)
     
      console.log(getProject())
    })
   })

   })

 
    /* Create Task */

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
    let delete_projId = delete_container.getAttribute("project-id")
    let delete_id = delete_container.getAttribute("data-id")
    result.removeListItem(delete_id)
    deleteBtn(delete_container)
   })
   })
   }
  })
}






export{setUpForms,submitForm}