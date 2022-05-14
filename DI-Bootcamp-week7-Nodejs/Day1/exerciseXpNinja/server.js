// const faker = require('faker')
// let users=[]
// function populate(){
//     let name = faker.name.findName();
//     let city = faker.address.city();
//     let country =faker.address.county();
//     let obj={
//         name,
//         city,
//         country
//     }
//     users.push(obj)
// }


//EX2
// let str='k5k3q2g5z6x9bn'
// const returnNumbers =(str)=>{
//     let arr=str.split('')
//     // console.log(arr)
//     for(let i = 0 ; i < arr.length ; i++){
//         if(isNaN(Number(arr[i]))){
//             // console.log(i)
//             console.log(arr[i]+ '  is not a number')
//             arr.splice(i,1)
//         }
//     }
//     console.log(arr)
//     // console.log(arr)
//     return arr
// }

// returnNumbers(str)



//EX3
let name = prompt('enter name')
let arr = name.split('')
let countSpaces=0
arr.forEach((element,index )=> {
    if(element === ' '){
        countSpaces++
        if(countSpaces>1){
            return false
        }
        if(element[index+1].toLowerCase() === element[index+1]){
            return false
        }
    }
    if(isNaN(Number(element))){
        return false
    }
    
});
