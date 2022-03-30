// const ex3 = new Promise((resolve , reject)=>{
    
//         resolve('entered resolve')
    
//         reject('entered reject')
    
// }).then((result)=>console.log(result))

// Promise.resolve()

Promise.reject('boo').then((result)=>console.log(result)).catch(err=>console.log(err))

Promise.resolve('resolve').then((result)=>console.log(result))