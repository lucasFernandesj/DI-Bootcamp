function chop(string , num){
    var res =[]
    var strArr = string.split('') 
    var currIndex = 0
    for(let i = currIndex  ; i < strArr.length ; i++){

        var stringPart = strArr.splice(currIndex , num) 
        res.push(stringPart) 
        currIndex = num 
    }
    return res
}
debugger
console.log(chop('developers' ,2 ))