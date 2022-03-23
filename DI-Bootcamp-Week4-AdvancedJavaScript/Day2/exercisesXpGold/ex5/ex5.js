const compose = (f, g) => (a) => f(g(a)) // receives f and g  , returns a function that receives a and returns a*g  *f
const add1 = (num) => num + 1//  receives an arguments and sums it to 1
const add5 = (num) => num + 5 // receives an argument and sums it to 5
compose(add1, add5)(10)// 1*(5*(10))
