

let validate = document.querySelector('.validate').addEventListener('click' , ()=>{
    let email = document.querySelector('#email').value 
    if(!email.includes('@')){
        alert('please enter a valid email')
    }else{
        let emailArr = email.split('@')
        if(emailArr[0].length > 0 && emailArr[1].length > 0){
            alert('Valid Email')
        }



    }
})