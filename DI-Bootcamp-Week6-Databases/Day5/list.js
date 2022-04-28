let tasks = JSON.parse(localStorage.getItem('tasks'));

window.onload=()=>{
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

        myDiv.append(p1,p2,p3,p4)

        document.getElementById('container').appendChild(myDiv);

        

    }


}






// let completeArr = localStorage.getItem('tasks')
// let str = JSON.stringify(completeArr)
// // console.log(completeArr)
// console.log(str)

// window.onload =()=>{
//     for(var i = 0 ; i < completeArr.length; i++){
//         createDiv(completeArr[i])
//     }
// }