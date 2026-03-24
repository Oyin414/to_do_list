import "./styles.css";
import { ListItems } from "./create/list.js";
import { Project } from "./create/project.js";
import { addProject,removeProject,getProject } from "./data/project_manager.js";
import { setUpForms } from "./user_interaction/logic.js";

const item = new ListItems("gym","medium","20/01/2027")
const item2 = new ListItems("home","medium","20/02/2027")
const item3 = new ListItems("food","high","20/03/2027")
const item4 = new ListItems("work","high","20/04/2027")


addProject("Big foot")
addProject("little foot")
addProject("medium foot")
addProject("Big foot")

setUpForms()
getProject()
