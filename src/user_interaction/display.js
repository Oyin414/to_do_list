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



export {makeProject}