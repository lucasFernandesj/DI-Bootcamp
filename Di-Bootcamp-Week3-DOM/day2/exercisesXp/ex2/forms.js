let form = document.forms[0]
console.log(form)
let inputFname = document.getElementById('fname')
console.log(inputFname)
let inputLname = document.getElementById('lname')
console.log(inputLname)

var input1 = document.forms[0].fname 
console.log(input1)
var input2 = document.forms[0].lname 
console.log(input2)

document.getElementById('submit').addEventListener('click' , (e)=>{
    e.preventDefault 
    let input1Text = input1.value
    let input2Text = input2.value
    if(input1Text.length === 0 || input2Text.length === 0 ){
        alert('Check your values and try again')
    }else{

        let ul = document.createElement('ul')
        ul.classList.add('usersAnswer') 
        let li1 = document.createElement('li').innerText = input1Text  
        let li2 = document.createElement('li').innerText = input2Text  
        ul.appendChild(li1 , li2)
        document.body.appendChild(ul)
        
    }


})