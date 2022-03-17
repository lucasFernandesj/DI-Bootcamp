//EX1
(
    function infoAboutMe(){
        console.log('My names is Lucas')
    }
    ()
)
//Part II

const infoAboutPerson = (personName, personAge, personFavoriteColor) =>{
    console.log(`Your name is ${personName} your age is ${personAge} your favourite color is ${personFavoriteColor}`)

}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

//EX2
var tip;
const calculateTip =()=>{
    let bill = +prompt('How much was the bill?')
    if(bill < 50){
        tip = ((bill*20)/100)
    }else if(bill < 200){
        tip = ((bill*15)/100)
    }else if(bill > 200){
        tip = ((bill*10)/100)
    }
    console.log(`Bill:${bill}\nTip:${tip}\nTotal:${tip+bill}`)
}
calculateTip()

//EX3

function isDivisible(){
    var container=[]
    for(let i = 0 ; i < 501 ; i++){
        if(i%23===0){
            container.push(i)
            console.log(i)
        }
        let sum = container.reduce((curr,next)=>curr+next)
        console.log(sum)
    }
}
isDivisible()

//EX4
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList =["banana" , "orange" ,"apple"]

const myBill =() =>{
    var bill =[];
    for(var i = 0 ; i < shoppingList.length ; i++){
        if(stock[shoppingList[i]] === 0){
            console.log('Item not in stock')
        }
        else {
            bill.push(prices[shoppingList[i]])
            stock[shoppingList[i]] --
        }
        var sum = bill.reduce((curr,next)=>curr+next)
    }
    return sum
}
console.log(myBill()) 

//EX5

function changeEnough(itemPrice, amountOfChange){
    var money = calculateMoney()
    if(itemPrice > money){
        return true
    }else{
        return false
    }
}

function calculateMoney(amountOfChange){
    var sum = 0
    for(var i = 0 ; i < 4 ; i++){
        if(i===0){
            sum+=amountOfChange[i]*0.25 
        }
        else if(i===1){
            sum+=amountOfChange[i]*0.10
        }
        else if(i===2){
            sum+=amountOfChange[i]*0.5
        }
         else if(i===3){
            sum+=amountOfChange[i]*0.1
        }
        
    }
    return sum
}


//EX6
const hotelCost =()=>{
    var nights = +prompt('For how many nights are you gonna stay?')
    if(nights === '' || isNaN(nights)){
        var nights = +prompt('For how many nights are you gonna stay?')
    }
    var cost = nights*140
    return cost
}

function planeRideCost(){
    var destination = prompt('Where are you flying to?')
    if(destination ='' || typeof(destination !== string)){
        var destination = prompt('Where are you flying to?')
    }
    else if(destination === 'London'){
        return 183
    }
    else if(destination ==="Paris"){
        return 220
    }
    else{
        return 300
    }
}

function rentalCarCost(){
    var cost;
    var days = +prompt('For how many days do you want to rent?')
    if(days ==='' || isNaN(days)){
        var days = +prompt('For how many days do you want to rent?')
    }
    else if(days <=10){
        cost = days*40
    }
    else if(days > 10){
        cost = days*40 - (((days*40) *15) / 100)
    }
    return cost
}

function totalVacationCost(){
    var hotel = hotelCost()
    var flight = planeRideCost()
    var car = rentalCarCost()
    var total = hotel + flight + car
    return total
}
totalVacationCost()
