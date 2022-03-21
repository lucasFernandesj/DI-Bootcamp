let nums =  [NaN, 0, 15, false, -22, '',undefined, 47, null]
let newArray = nums.filter(num =>(typeof num==='number' && num !== NaN))
console.log(newArray)