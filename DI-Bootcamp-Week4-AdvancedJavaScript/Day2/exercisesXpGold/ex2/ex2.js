const addTo = (x) => (y) => x + y
let addToTen = addTo(10)
addToTen(3)

// addTo receives an argument, a function that receives an argument and sum both of the arguments
// addToTen is equal to addto receiving 10 as an argument 
// addToTen receiving 3 as an argument is gonna be qual to addTo receiving 10 as an argument
//  that receives a function that receives 3 as an arguments and sum both of the arguments(10+3=13) 
