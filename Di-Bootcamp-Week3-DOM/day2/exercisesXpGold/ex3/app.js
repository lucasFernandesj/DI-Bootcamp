let shoppingList=[]
let str;
let form = document.createElement('form') 
let input = document.createElement('input').setAttributes({'type':'text',
'class':'input'
}) 
let btn = document.createElement('button').addEventListener('click' , ()=>{
    addItem()
})
form.appendChild(input , btn)
let clearBtn = document.createElement('button').addEventListener('click' , ()=>{
    clearAll()
})
document.body.appendChild(clearBtn)
document.querySelector('#root').appendChild(form)

let container = document.createElement('div').setAttribute('class' , 'container') 
document.appendChild(container)
function addItem(){
    let product = document.querySelector('.input').value 
    shoppingList.push(product) 

}
function clearAll(){
    shoppingList=[]

}



shoppingList.forEach(element =>{
    str+=element+='\n'
})
document.querySelector('.container').innerText = str