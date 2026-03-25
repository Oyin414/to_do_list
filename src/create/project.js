


class Project {
    constructor(title,id){
        this.title = title
        this.id = id
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