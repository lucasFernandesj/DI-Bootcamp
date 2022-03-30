let container;




document.querySelector('#submit').addEventListener('click' , ()=>{
    let str = document.querySelector('#text').value

    let xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      `https://api.giphy.com/v1/gifs/search?q=${str}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    )
    xhr.response = 'json'
    xhr.send()
    xhr.onload = function(){
        if(xhr.status !== 200){
            console.log(`ERROR :  ${xhr.statusText}`)
        }else{
            let response = xhr.response
            let parseResponse = JSON.parse(response) 
            let data = parseResponse.data 
            let div = document.createElement('div') 
            let btn = document.createElement('button')
            btn.innerText = 'remove this gif'
            eventListener(btn)
            let img = document.createElement('img')
            let random = getRandomNum(0, 50)
            img.setAttribute('src', data[random].images.downsized.url)
            div.appendChild(img )
            div.appendChild(btn)
             container = document.querySelector('.container')
            container.appendChild(div)
    
        }
    }
})




function getRandomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function eventListener(element){
    element.addEventListener('click' , ()=>{
       let dad =  element.parentNode
        dad.remove()

    })
}

document.querySelector('.removeAll').addEventListener('click' , ()=>{
    
    let div = document.querySelector('.container') 
    while (div.firstChild) {
     div.removeChild(div.lastChild)
    }
    
})