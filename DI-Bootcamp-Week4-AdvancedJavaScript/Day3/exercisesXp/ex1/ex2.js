let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}]


//1
const hello = users.map((element)=>`Hello ${element.firstName}`)

//2
const fS = users.filter((element) => element.role === 'Full Stack Resident')

//3

let ex3 = users.filter((element) => element.role === 'Full Stack Resident').map((element)=>`Good job ${element.firstName}`)



