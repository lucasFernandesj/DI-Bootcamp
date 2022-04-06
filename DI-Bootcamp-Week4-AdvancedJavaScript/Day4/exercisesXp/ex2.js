function displayStudentInfo(object){
  let first = object.first 
  let last = object.last
console.log(`your full name is ${first} ${last} `)

}

let obj = { first: 'Elie', last: 'Schoppik' }
let obj2 = { first: 'Elie2', last: 'Schoppik2' }

displayStudentInfo(obj2)
