import { setUpForms } from "./logic.js";

function makeProject(name,id) {
    let sideBar = document.querySelector(".side");
  let project = document.createElement("div");
  let input = document.getElementById("project")
  input.value=""
  project.setAttribute('data-id',id)
  project.textContent = name;
  project.className = "project";
  sideBar.appendChild(project);
};

function makeTask(name,data){
  let content = document.querySelector(".content")
  /* Creating task */
  let biggest = document.createElement("div");
  biggest.className ="biggest"

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

    
    biggest.appendChild(first)
    biggest.appendChild(second)
    content.appendChild(biggest)
}

function changeProject(name){
  let mainTitle = document.querySelector(".main_title")

  mainTitle.textContent = name
}


export {makeProject,makeTask,changeProject}