let bankAmount = 10000
const VAT = 17
let details = [+200, -100, +146, +167, -2900]

details.forEach((element)=>{
    element +=element*VAT /100 

})
details.reduce((curr,next)=>{
    curr+next
})
bankAmount = bankAmount + details 
console.log(bankAmount) 

