function Task(){
    this.list=new Array({
        "id": 1,
        "description": "ver TV",
        "state": false
    },{
        "id": 2,
        "description": "comer hamburguesa",
        "state": false
    }
    );
}

Task.prototype.add=function (data){
    var id=null;
    if(this.list.length>0) id=Math.max(...this.list?.map(task => task.id))+1
    else id=1
    const json={
        "id": id,
        "description": data,
        "state": false
    }

    this.list.push(json)
    return this.list
}

Task.prototype.deletes=function(id){
    const newArray=this.list?.filter((task)=>task.id!=id)
    this.list=newArray
    return this.list
}

Task.prototype.complete=function(id){
    const newArray=this.list?.map((task)=>{
        if(task.id==id){
            task.state=!task.state
        }
        return task;
    }) 
    this.list=newArray
    return this.list
}

module.exports = { Task }