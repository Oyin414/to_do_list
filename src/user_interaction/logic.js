import { makeProject,makeTask,changeProject,defaultScreen} from "./display.js"
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
   alert("please enter Project Title")
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

   if(dateError.validity.valueMissing && taskError.validity.valueMissing){
    alert("Name and Date Missing")
   }else if (dateError.validity.valueMissing){
    alert("Please enter date")
   }else if( taskError.validity.valueMissing){
     alert("Please enter name")
   }else{
    let task = new ListItems(name,priority,date,info,taskId)
       result.addListItem(task)
   makeTask(name,date,taskId)
   
   let biggest = document.querySelectorAll(".biggest")

   biggest.forEach(item => {
     if(item.hasAttribute('project-id') === false){
        item.setAttribute('project-id',result.id)
    }
   
   }
  )
   }

   console.log(getProject())
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