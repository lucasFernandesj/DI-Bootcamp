document.querySelector('.form').onsubmit = () =>{
    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let obj={
        name:name,
        lastName:lastName
    }
   let objStr =  JSON.stringify(obj)
   document.write(objStr)
}