import { compareAsc, format } from "date-fns";

class ListItems {
    constructor(title,priority,dues){
        this.title = title
        this.priority = priority
        this.due = format(new Date(),dues)
        this.id = crypto.randomUUID()
    }
}


export {ListItems}