// let lat = document.getElementById('lat').value
// let lng = document.getElementById('lng').value




async function get(){
    let lat2 = document.getElementById('lat2').value
    let lng2 = document.getElementById('lng2').value

        try{

            // let res = fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
            let res2 = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}`)
            const data = await res2.json()
            const response = await data.results.sunrise
            console.log(response)
        }catch(error){
            console.log('CATCHED' + error)
        }


    // .then((data) => data.json())
    // .then((response)=>console.log(response.results.sunrise))
    
    
    
    
    // Promise.all([res,res2])
   
}


