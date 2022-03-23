const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)


// sum add 2 arguments
// curriedSum receives an arguments and returna function that receives another arguments and sum the 2 of them
// add5 is curried sum receiving 5 as an argument and returns a function that will sum 5 to the next argument
// add5(12) will add 5 and 12
