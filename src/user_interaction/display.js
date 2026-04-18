import { setUpForms } from "./logic.js";

function makeProject(name,id) {
    let sideBar = document.querySelector(".side");
    let overview = document.createElement("div");
    overview.className = 'overview'
  let project = document.createElement("div");
  let del =  document.createElement("button");
  del.className = "del"
  del.textContent ='X'
  overview.appendChild(project)
  overview.appendChild(del)
  let input = document.getElementById("project")
  input.value=""
  overview.setAttribute('project-id',id)
  project.textContent = name;
  project.className = "project";
  sideBar.appendChild(overview);
};

function makeTask(name,data,id){
  let content = document.querySelector(".content")
  /* Creating task */
  let biggest = document.createElement("div");
  biggest.className ="biggest"
  biggest.setAttribute('data-id',id)
 

   let first = document.createElement("div");
   first.className = "first"
   let check = document.createElement("input")
   check.className = "check"
   check.setAttribute("type", "checkbox")
   let title = document.createElement("div");
   first.appendChild(check)
   first.appendChild(title)
   title.textContent = name;

    let second = document.createElement("div");
    second.className = "second"
    let date = document.createElement("div");
    date.textContent = data;
    let deleter = document.createElement("div");
    deleter.className = "delete"
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X'
    deleteBtn.className = 'delete_btn'
    deleter.appendChild(deleteBtn)
    second.appendChild(date)
    second.appendChild(deleter)
    
    let task = document.getElementById("task")
  task.value=""
      let due = document.getElementById("date")
  due.value=""
  let info = document.getElementById("info")
  info.value=""

    
    biggest.appendChild(first)
    biggest.appendChild(second)
    content.appendChild(biggest)
}

function displayTasks(id) {
  let projectId = id
  let content = document.querySelector(".content")
  let tasks = document.querySelectorAll(".biggest")

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i].getAttribute("project-id")
    if (projectId === task){
      tasks[i].style.display = ""
    }else{
       tasks[i].style.display = "none"
    }
  }
}



function defaultScreen() {
  let content = document.getElementById("content")
  content.textContent = ""
}

function changeProject(name){
  let mainTitle = document.querySelector(".main_title")
 mainTitle.textContent = name
}

function deleteBtn(container){
container.remove()
}


export {makeProject,makeTask,changeProject,defaultScreen,displayTasks,deleteBtn}