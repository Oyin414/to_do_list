import { ListItems } from "./list.js"


class Project {
    constructor(title){
        this.title = title
        this.id = crypto.randomUUID()
        this.list = []
    }
    addListItem(item){
    this.list.push(item)
    }
    findListItem(id){
    const result =  this.list.filter(item => item.id === id)
    return result
    }
    removeListItem(item){
    let newList = this.list.filter(value => value.id !== item.id)
    this.list = newList
    }

}

export{Project}