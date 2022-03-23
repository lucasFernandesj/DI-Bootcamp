//1
let word =prompt('Player 1 please enter a word') //America 
word=word.toLowerCase()
let arrWord = word.split('')
//2
let wordAsterisks = ''
for(var i = 0 ; i < word.length ; i++){
    wordAsterisks+='*'                          //******* 
}
console.log(wordAsterisks)
//3
for(var i = 10 ; i >=0 ; i--){
    if(i===0){
        console.log('Game over , refresh the page to try again')
        break;
    }else{

    


    var letter = prompt('Player 2 enter a letter') //a
    if(arrWord.indexOf(letter) > -1){
        console.log('The word contains this letter!')
        for(var i = 0 ; i < arrWord.length ; i++){
            if(arrWord[i] === letter){
                arrWord[i] === arrWord[i]
            }else{
                arrWord[i] = '*'
            }
        }
        console.log(word)
    }else{
        console.log(`${i} tries left...\nTry again!`)
    }
}
}