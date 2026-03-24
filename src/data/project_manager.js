import { Project } from "../create/project.js"

let projects = []


function addProject(name){
    const newProject = new Project(name)
    projects.push(newProject)
}


function removeProject(dataId){
 let remainingProjects =  projects.filter(project =>  project.id !== dataId)
 projects = remainingProjects
}

function getProject(){
    console.log(projects)
}

export{addProject,removeProject,getProject}

