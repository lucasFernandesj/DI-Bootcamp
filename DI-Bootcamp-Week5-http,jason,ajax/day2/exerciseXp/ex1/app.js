let xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
)
xhr.response = 'json'
xhr.send()

xhr.onload = function(){
    if(xhr.status !== 200){
        console.log(`ERROR : ${xhr.statusText}`)
    }else{
        let response = xhr.response
        
        let responseParse = JSON.parse(response)
        console.log(responseParse)
    }
}