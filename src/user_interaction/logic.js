import { makeProject,makeTask,changeProject,defaultScreen} from "./display.js"
import {addProject,removeProject,getProject} from "../data/project_manager.js"
import { ListItems } from "../create/list.js"
import { Project } from "../create/project.js"

/* Project form pop up */

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

/* add task to Project */

/*function addTask(e){
   e.preventDefault();
   let name = document.getElementById("task").value
   let priority = document.getElementById("priority").value
   let date = document.getElementById("date").value
   let id = crypto.randomUUID()
   let info = document.getElementById("info").value
   let task = new ListItems(name,priority,date,info,id)
   
   makeTask(name,date,id)
} 
*/


/*function addProj(e){
  e.preventDefault();
  document.getElementById("myForm").style.display = "none";
  let projectName = document.getElementById("project").value
  let id = crypto.randomUUID()
  makeProject(projectName,id)
  addProject(projectName,id)
 console.log(id)
  console.log(getProject())
}*/

function submitForm() {
  let projectBtn = document.querySelector(".btn")
  let taskBtn = document.querySelector(".taskBtn")

projectBtn.addEventListener("click",function() {
   event.preventDefault();
  let projectName = document.getElementById("project").value
  let id = crypto.randomUUID()
   const newProject = new Project(projectName,id)
  makeProject(projectName,id)
  addProject(newProject)
 console.log(id)
  console.log(getProject())

   let overview = document.querySelector('.overview')
   overview.addEventListener("click",function(){
    document.querySelector('.hide').style.display = "block";
    changeProject(projectName)
    taskBtn.addEventListener("click",function(){
    event.preventDefault();
   let name = document.getElementById("task").value
   let priority = document.getElementById("priority").value
   let date = document.getElementById("date").value
   let id = crypto.randomUUID()
   let info = document.getElementById("info").value
   let task = new ListItems(name,priority,date,info,id)
   newProject.addListItem(task)
})

   })
})
}

function taskInteractions() {
  let deleter = document.querySelector(".delete")
  deleter.addEventListener("click",function (){
   
    let biggest = document.querySelector(".biggest")
    let id = biggest.getAttribute('data-id')

  })
}



export{setUpForms,submitForm}