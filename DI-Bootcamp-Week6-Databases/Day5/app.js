
let form = document.forms[0]
let taskNum=localStorage.length
let taskArr=[];

form.onsubmit = (e) =>{
    
    e.preventDefault() 
    let name = document.querySelector('.name').value
    let description = document.querySelector('.description').value
    let start = document.querySelector('.start').value
    let end = document.querySelector('.end').value
    constructTask(name , description , start , end)
    
    let task = new constructTask(name , description ,start , end)
    // console.log(task)
    console.log(taskNum)
    taskArr.push(task)
    strTaskArr = JSON.stringify(taskArr)
    localStorage.setItem( 'tasks' , strTaskArr)
    taskNum++
}



function constructTask(name,description,start,end){
    this.taskNumber=taskNum;
    this.name=name;
    this.description=description;
    this.start=start;
    this.end=end;
    this.isDone = false;
   
}


