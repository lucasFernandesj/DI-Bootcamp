//EX1
    // 5 >= 1 true
    // 0 === 1 false
    // 4 <= 1 false
    // 1 != 1 false
    // "A" > "B" true
    // "B" < "C" true
    // "a" > "A" true
    // "b" < "A" true
    // true === false false
    // true != true false




//EX2
var num =prompt('enter numbers separated by comas' )
var numArr = num.split(',')
var sum = numArr.reduce((value , nextValue)=>value+nextValue)

//EX3
var sentence = prompt("Enter a sentence containing the word 'nemo' ")
var arrSentence = sentence.split(' ')
if(arrSentence.indexOf('nemo')===-1 ||(arrSentence.indexOf('Nemo')===-1 )){
    console.log("Can't find Nemo")
}else{

    for(var i = 0 ; i < arrSentence.length ; i++){
        if(arrSentence[i]==='nemo' ||arrSentence[i]==='Nemo'){
            console.log(`Found nemo at index ${i}`)
        }
    }
    
}

//EX 4
var num = +prompt('Enter a num')
if(num<2){
    console.log('BOOM')
}else{
    var str ='B'
    for(var i = 0 ; i=num ; i++){
         str +='o'
    }
    str+='m'
    var sentence=`There are ${num} 'o's`
    if(num%2===0 || num%5===0){
        sentence+= `and ${num} is divisible by 2 and 5`
        var capsSentence=sentence.toUpperCase()
        console.log(`${capsStr}!`)
    }
    else if(num%5===0){
        sentence+=`and ${num} is divisible by 5`
        var capsSentence=sentence.toUpperCase()
        console.log(`${capsStr}`)
    }
    else if(num%2===0){
        sentence+=`and ${num} is divisible by 2!`
        console.log(sentence)


    }
}
