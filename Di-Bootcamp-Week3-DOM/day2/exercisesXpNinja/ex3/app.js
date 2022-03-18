document.querySelector('calculate').addEventListener('click' , () =>{
    let coords = getCurrentPosition() 
    document.querySelector('.container').innerText = `latitude : ${coords.latitude} \n longitude: ${coords.longitude}`
})