var sentence = 'the movie is not bad'
var sentenceArr = sentence.split(' ')
var wordNot = sentenceArr.indexOf('not')
var wordBad = sentenceArr.indexOf('bad')





if(wordNot < wordBad){
  var replace = sentenceArr.splice(wordNot, wordBad - wordNot + 1 , 'good')
var result = sentenceArr.join(' ')
   console.log(result)
}else{
    console.log(sentence)
}
