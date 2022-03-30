let xhr = new XMLHttpRequest() 
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
xhr.response='json'
xhr.send()
xhr.onload = function(){
    if(xhr.status !==200){
        console.log(`ERROR : ${xhr.statusText}`)
    }else{
        let response = xhr.response 
        let responseParse = JSON.parse(response) 
        let data = responseParse.data
        console.log(data)
        let random = getRandomNum(0,50)
        console.log(random)


        let div = document.createElement('div')
        let img = document.createElement('img')
        div.appendChild(img)
        img.setAttribute('src', data[random].images.downsized.url)
        document.body.appendChild(div)
    }
}


function getRandomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}