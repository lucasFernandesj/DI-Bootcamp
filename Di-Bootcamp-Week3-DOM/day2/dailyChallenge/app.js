document.querySelector('#lib-button').addEventListener('click' , ()=>{
    let person = document.querySelector('#person').value
    let adjective = document.querySelector('#adjective').value
    let noun = document.querySelector('#noun').value
    let verb = document.querySelector('#verb').value
    let place = document.querySelector('#place').value
    let story = `${person} used the ${adjective} ${noun} to ${verb} at ${place} `
    document.querySelector('#story').innerText = story

})



