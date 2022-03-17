//EX1
let element = document.querySelector('#navBar')
element.setAttribute('id' , 'socialNetworkNavigation')

let newLi = document.createElement('LI')
newLi.innerText=('Logout')
 document.getElementsByTagName('UL')[0].appendChild(newLi)

 console.log(element.firstElementChild.textContent)
 console.log(element.lastElementChild.textContent)


 //EX2
 let arrLists =  document.querySelectorAll('#list')
arrLists[0].children[1].innerText='Richard'
arrLists.children[0].innerText='Lucas'
 let li = document.createElement('LI').innerText="Hey students"
 arrLists.appendChild(li)
 var Sarah = arrLists[1].childnodes[1]
 arrLists[1].removeChild(Sarah) 


 //EX3
 document.getElementsByTagName('div')[0].style.backgroundColor='light blue'
 document.getElementsByTagName('ul')[0].children[0].style.display='none'
 document.getElementsByTagName('ul')[0].children[1].style.border='1px solid black'
 document.getElementsByTagName('body')[0].style.fontSize='20px'

let firstDiv = document.getElementsByTagName('div')[0]
let uls = firstDiv.children
if(firstDiv.style.backgroundColor === 'light blue'){
    var greeting = `Hello ${uls[0]}`
    uls.forEach(element => {
       greeting +=`and ${element}` 
    });
alert(greeting)


}
