var form = document.forms[0] 
form.onsubmit = () =>{
    var radius = parseInt(form.radius.value)
    var sphereVolume = (3.14*(4/3))*radius
    form.volume.innerText = sphereVolume

}


form.addEventListener('click' , ()=>{
    alert('clicked')
})

form.addEventListener('onmouseover' , ()=>{
    alert('mouse Over')
})

form.addEventListener('onmouseout' , ()=>{
    alert('mouse Out')
})

