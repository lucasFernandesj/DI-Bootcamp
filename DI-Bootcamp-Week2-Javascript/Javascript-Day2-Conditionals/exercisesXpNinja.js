//EX1 INSTRUCTIONS UNCLEAR
// var thisYear = new Date().getFullYear()
// var olderYear = 1980
// var youngerYear = 1986
// var halfWay = 


//EX2
const alphabet='aAbBcCdDeEfFgGhHiIfFmMlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
var zip =+prompt('Enter your zip code')
if(zip.length!==5){
    console.log('Error')
}else{

    for(var i = 0 ; i < zip.length ; i++){
        if(isNaN(zip[i])){
            console.log('Error')
        }else{
            console.log('Success')
        }
        
    }
}


//EX3
var word = prompt('Enter a word')
var word = word.toLocaleLowerCase()
var newWord;
if(word.contains('a')){
     newWord = word.replace(/a/g , '1')

}
if(word.contains('e')){
     newWord = word.replace(/e/g , '2')

}
if(word.contains('i')){
     newWord = word.replace(/a/g , '3')

}
if(word.contains('o')){
     newWord = word.replace(/a/g , '4')

}
if(word.contains('u')){
     newWord = word.replace(/a/g , '5')

}
console.log(newWord)

