import { Project } from "../create/project.js"

let projects = []


function addProject(name,id){
    const newProject = new Project(name,id)
    projects.push(newProject)
}


function removeProject(dataId){
 let remainingProjects =  projects.filter(project =>  project.id !== dataId)
 projects = remainingProjects
}

const getProject = () => projects;

export{addProject,removeProject,getProject}

