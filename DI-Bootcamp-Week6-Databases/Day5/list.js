let tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks)


const display =()=>{
    for(let task of tasks){
        
        let myDiv = document.createElement('div');
        let p1 = document.createElement('h1');
        p1.innerText = task.name
        let p2 = document.createElement('p');
        p2.innerText = task.description
        let p3 = document.createElement('p');
        p3.innerText = `Start ${task.start}`
        
        let p4 = document.createElement('p');
        p4.innerText =  `End  ${task.end}`
        let done = document.createElement('div');
        done.innerHTML = '<h1>X</h1>'
        done.style.color='red'
        done.style.cursor = 'pointer'
        let edit = document.createElement('button')
        edit.innerText = 'edit'
        edit.addEventListener('click' , editText)
        done.addEventListener('click' , risk)
        myDiv.classList.add('task')
         myDiv.setAttribute('data' , task.name)
        myDiv.append(p1,p2,p3,p4,done,edit)
        
        document.getElementById('container').appendChild(myDiv);

        
        
    }
    
    
}

const editText =(e)=>{
    let newTask = prompt('enter new text')
    for(var i = 0 ; i < tasks.length ; i++){
        if(tasks[i].name === e.currentTarget.parentNode.getAttribute('data')){
            tasks[i].name = newTask 
            tasks[i].description = newTask
            document.querySelector('#container').innerHTML =''
            display()
            
        }



}
}







const risk =(e)=>{
    console.log(e.currentTarget.parentNode)
    e.currentTarget.parentNode.remove();
    for(var i = 0 ; i < tasks.length ; i++){
        if(tasks[i].name === e.currentTarget.parentNode.getAttribute('data')){
            tasks.splice(i,1)
            
        }
    }
    strTaskArr = JSON.stringify(tasks)

    localStorage.setItem( 'tasks' , strTaskArr)

    
}


window.onload=display()