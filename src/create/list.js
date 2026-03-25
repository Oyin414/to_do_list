import { compareAsc, format } from "date-fns";

class ListItems {
    constructor(title,priority,dues,info,id){
        this.title = title
        this.priority = priority
        this.due = format(new Date(),dues)
        this.info = info
        this.id = id
    }
}


export {ListItems}