
const exercise = new Promise((resolve, reject) => {
    if(1===3){
        setTimeout(() => {
          resolve('success')
        }, 4000)

    }else{
        reject('Ooops something went wrong')
    }





})
  .then((result) => result    
    )
  .catch((result) =>  result
  )
 .then((result)=>console.log(result + '!!!'))