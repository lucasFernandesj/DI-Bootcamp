let xhr = new XMLHttpRequest()
xhr.open(
    'GET',
    'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    )
    xhr.response = 'json'
    xhr.send()
    xhr.onload = function(){
    // console.log('reached here')
    if(xhr.status !== 200){
        console.log(`ERROR : ${xhr.statusText}`)
        console.log('entered if')
    }else{
        let response = xhr.response
         let responseParse = JSON.parse(response)
         let data = responseParse.data
         console.log(data)
         for(var i = 0 ; i < 12 ; i++){
             if(i < 2){
                 continue
             }else{
                 let div = document.createElement('div') 
                 let img = document.createElement('img')
                 div.appendChild(img)
                 img.setAttribute('src', data[i].images.downsized.url)
                 document.body.appendChild(div)
             }
         }
        
    }

}