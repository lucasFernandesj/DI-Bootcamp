const compareToTen = (num)=>{
    return new Promise((resolve , reject)=>{
        if(num > 10){
            resolve('Number is bigger than ten')
        }else{
            reject('Number is smaller than ten')
        }
    })
}

compareToTen(5)
.then(result=>console.log(result))
.catch(result=>console.log(result))
.finally(()=>console.log('entered finally'))
