
let words=['those' , 'are' , 'words']
let words2=['HOSPITAL' , 'ZEBRA' , 'ANGULAR' , 'FLAMINGO']

const makeAllCaps =(arr)=>{
   return new Promise((resolve , reject)=>{
       let allCaps = arr.map((element)=>{
           if(typeof element === 'string'){
               return element.toUpperCase()
           }else{
               reject('Not all elements are strings')
           }
       })
        resolve(allCaps)
   })
}

makeAllCaps(words).then((value)=>console.log(value)).catch((err)=>console.log(err))


const sortWords = (arr)=>{
    return new Promise((resolve , reject)=>{
    let sorted = arr.sort()
    if(arr.length >=4){
        resolve(sorted)
    }else{
        reject('This array has less than 4 elements')
    }


    })//end of promise



} //end of funtion


sortWords(words2).then((value)=>console.log(value))
.catch((error)=>console.log(error + 'catch message'))







