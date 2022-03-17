//EX1
let x = 1
let y = 2
if (x > y) {
    console.log(`${x} is bigger than ${y}`)
} else {
    console.log(`${y} is bigger than ${x}`)
}

//EX2
let newDog = "Chihuahua"
let letters = newDog.length
console.log(letters)
let upperNewDog = newDog.toUpperCase()
let lowrNewDog = newDog.toLowerCase()
if(newDog === "chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed")
}else{
    console.log("I dont care, I prefer cats")
}

//EX3

let num =+prompt('Enter a number')
if(num%2 === 0){
    alert(`${num} is even`)
}else{
     alert(`${num} is odd`)
}

//EX4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

if(users.length ===0 ){
    console.log("no one is online")
}else if(users.length === 1){
    console.log(`${users[0]} is online`)
}else if(users.length ===2){
    console.log(`${users[0]} and ${users[1]} are online`)
}else if(users.length>2){
    let others = users.length -2
    console.log(`${users[0]} , ${users[1]} and ${others} more are online`)
}