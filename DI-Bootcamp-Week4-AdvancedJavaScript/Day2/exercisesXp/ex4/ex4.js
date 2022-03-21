(
function(userName){
    let div = document.createElement('div').innerText = userName
    let img = document.createElement('img').setAttribute('src' , 'path\to\img')
    div.appendChild(img)
    document.getElementsByName('nav')[0].appendChild(div)
    

}
)()