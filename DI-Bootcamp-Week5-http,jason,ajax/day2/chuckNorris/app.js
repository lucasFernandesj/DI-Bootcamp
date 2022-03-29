let xhr = new XMLHttpRequest()  
xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
xhr.responseType = 'json'
xhr.send() 

xhr.onload = function(){
    if(xhr.status !==200){
        console.log(`ERROR : ${xhr.StatusText}`)

    }else{
        let div = document.querySelector('.div')
        let response = xhr.response.value
      
        div.innerText = response
    }
}

xhr.onerror = function () {
  alert('Request failed')
}