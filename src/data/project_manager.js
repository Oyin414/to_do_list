import { Project } from "../create/project.js"

let projects = []


function addProject(item){
    projects.push(item)
}


function removeProject(dataId){
 let remainingProjects =  projects.filter(project =>  project.id !== dataId)
 projects = remainingProjects
}

const getProject = () => projects;

export{addProject,removeProject,getProject}

