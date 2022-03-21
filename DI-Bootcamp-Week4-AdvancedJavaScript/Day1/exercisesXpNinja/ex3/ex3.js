function findWord(string,word ){
    var count =0
    var arrString = string.split(' ')
    // console.log(arrString)
    arrString.forEach(element =>{
        if(element === word){
            count++
        }
    })
    return `${word} was found ${count} times`
}

console.log(findWord('the quick brown fox fox' , 'fox'))