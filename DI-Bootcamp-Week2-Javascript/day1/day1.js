
//PART I
// EX1--------------------------------------------------------------------

let favFood = "pizza"
let favMeal = "breakfast"
console.log(`I eat ${favFood} at every ${favMeal}`)


//EX2----------------------------------------------------------------------
let watchedSeries = ["black mirror", "money heist", "the big bang theory"]
let watchedSeriesLength = watchedSeries.length
let myWatchedSeries = watched(watchedSeries)
//EX3
console.log(`I watched ${watchedSeriesLength} series : ${myWatchedSeries}`)


function watched(arr){
    var str =''
    arr.forEach(element => str+=element + ',')
    return str

}

//PART II--------------------------------------------------
//1
for(var i = 0 ; i < watchedSeries.length ; i++ ){
    if(watchedSeries[i] === 'the big bang theory'){
        watchedSeries[i] = 'Friends'
    }
}

//2
watchedSeries.push('The office')

//3
watchedSeries.unshift("Spongebob Squarepants")

//4
for(var i = 0 ; i < watchedSeries.length ; i++ ){
    if(watchedSeries[i] === "black mirror" ){
        watchedSeries.splice(i ,1)
    }
}
//5
let str = 'money heist'
console.log(str.charAt(3))
//6
console.log(watchedSeries)



//EX3
let celsiusTemp = 20
const f = (temp) => (((temp/5)*9)+32)
console.log(`${celsiusTemp}C is ${f(celsiusTemp)}F`)

//EX4
 let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 because 34 + 21 = 55
    // Actual: 
    

 a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 because now a receives 2 
    // Actual:
    

    //What is the value of c? Undefined

    // Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');  75

//EX5

typeof(15)
// Prediction:number
// Actual:number
typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:number
// Actual:number
typeof("hello")
// Prediction:string
// Actual:string
typeof(true)
// Prediction:boolean
// Actual:boolean
typeof(1 != 2)
// Prediction:boolean
// Actual:boolean
//"hamburger" + "s"
// Prediction:"hamburgers"
// Actual:"hamburgers"
//"hamburgers" - "s"
// Prediction:"hamburger"
// Actual:"hamburger"
//"1" + "3"
// Prediction:'13'
// Actual:'13'
//"1" - "3"
// Prediction:-2
// Actual:-2
//"johnny" + 5
// Prediction:"johnny5"
// Actual:"johny5"
//"johnny" - 5
// Prediction:NaN
// Actual:NaN
//99 * "hello"
// Prediction:NaN
// Actual:NaN
//1 != 1
// Prediction:false
// Actual:false
//1 == "1"
// Prediction:true
// Actual:true
//1 === "1"
// Prediction:false
// Actual:false
//5 + "34"
// Prediction:'534'
// Actual:'534'
//5 - "4"
// Prediction:1
// Actual:1
//10 % 5
// Prediction:0
// Actual:0
//5 % 10
// Prediction:0
// Actual:0
//"Java" + "Script"
// Prediction:"JavaScript"
// Actual:"JavaScript"
//" " + " "
// Prediction:"  "
// Actual:"  "
//" " + 0
// Prediction:"0"
// Actual:"0"
//true + true
// Prediction:2
// Actual:2
//true + false
// Prediction:1
// Actual:1
//!true
// Prediction:false
// Actual:false
//3 - 4
// Prediction:-1
// Actual:-1
//
//"Bob" - "bill"
// Prediction:NaN
// Actual:NaN

