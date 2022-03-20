

let input = document.querySelector('#text')

let res = document.querySelector('.res') 

document.body.onkeydown = function(e){
    
    if(e.key === 'a'){
         
       res.innerText = show()
    }
}

function show(){
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]
    var inputValue = input.value
     var inputLow = inputValue.toLowerCase()
    var inputArr = inputLow.split('')
    
    for(var i = 0 ; i < inputArr.length ; i++){
        if(alphabet.indexOf(inputArr[i])===-1){
            inputArr[i]=''
        }
    }
    let str = inputArr.join('')
    return str

}