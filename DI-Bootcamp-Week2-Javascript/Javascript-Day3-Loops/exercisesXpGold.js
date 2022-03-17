//EX1
let numbers = [123, 8409, 100053, 333333333, 7]
for(var i = 0 ; i < numbers.length ; i++){
    if(numbers[i]%3){
        console.log('True')
    }else{
        console.log('false')
    }
}
//EX2
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
var name = prompt('Enter your name')
if(guestList.indexOf(name) !== -1){
    console.log(`Hi ,I'm ${name} , I'm from ${guestList[name]}`)
}else{
    console.log("Hi I'm a guest")
}

//EX3
let age = [20,5,12,43,98,55];
let sum;
let oldest = -Infinity
for(var i = 0 ; i < age.length ; i++){
    sum+=age[i]
    if(age[i] > oldest){
       oldest = age[i]
    }
}
console.log(sum)
console.log(oldest)


