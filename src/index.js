import "./styles.css";
import { ListItems } from "./create/list.js";
import { Project } from "./create/project.js";

const item = new ListItems("gym","medium","20/01/2027")
const item2 = new ListItems("home","medium","20/02/2027")
const item3 = new ListItems("food","high","20/03/2027")
const item4 = new ListItems("work","high","20/04/2027")

const newProject =new Project("big plan")


newProject.addListItem(item)
newProject.addListItem(item2)
newProject.addListItem(item3)
newProject.addListItem(item4)

newProject.removeListItem(item3)

console.log(newProject)