//EX1
let me = ["my","favorite","color","is","blue"]
let meStr=me.join(' ')

//EX2
let str1 = "mix" 
let str2 = "pod"
console.log(str1)
console.log(str2)
debugger
function swap(str){
    let newStr = str.split('')
    var first = newStr[0] 
    var second = newStr[1]
    newStr[0] = second
    newStr[1] = first
    let str2 = newStr.join('')
     return str2

}
swap(str1)
swap(str2)

console.log(str1)
console.log(str2)
var newWord = `${str2} ${str1}`
console.log(newWord)


//EX 3 Calculator
var num1 =+prompt('Enter first number')
var num2 =+prompt('Enter second number')
alert(`Sum=${num1+num2}\nSubtraction=${num1-num2}\nDivision=${num1/num2}\nMultiplication=${num1*num2}`)

