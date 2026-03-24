import { Project } from "../create/project.js"

let projects = []


function addProject(name){
    const newProject = new Project(name)
    projects.push(newProject)
}

function removeProject(item){
 let remainingProjects =  projects.filter(project => project.id !== item.id)
 projects = remainingProjects

}

function getProject(){
    console.log(projects)
}

export{addProject,removeProject,getProject}

