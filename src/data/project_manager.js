import { Project } from "../create/project.js"

let projects = []


function addProject(item){
    projects.push(item)
}

function findProject(id){
 const result = projects.find(element => element.id === id)
 return result
}

function removeProject(dataId){
 let remainingProjects =  projects.filter(project =>  project.id !== dataId)
 projects = remainingProjects
}

const getProject = () => projects;

export{addProject,removeProject,getProject,findProject}

