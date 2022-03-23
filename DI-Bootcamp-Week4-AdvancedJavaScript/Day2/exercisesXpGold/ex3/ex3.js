const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// sum receives 2 arguments and sum them
// curriedSum receives a as an arguments and returns a
//  function that receives b as an argument and sum it with a from the original function
//The last line is gonna return the sum of the 2  arguments