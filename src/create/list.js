import { compareAsc, format } from "date-fns";

class ListItems {
    constructor(title,priority,dues,info){
        this.title = title
        this.priority = priority
        this.due = format(new Date(),dues)
        this.info = info
        this.id = crypto.randomUUID()
    }
}


export {ListItems}