// let lat = document.getElementById('lat').value
// let lng = document.getElementById('lng').value




function get(){
    let lat2 = document.getElementById('lat2').value
    let lng2 = document.getElementById('lng2').value
console.log('lat2: '+lat2)
console.log('lng2: ' + lng2)
    // let res = fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
    let res2 = fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}`)
    .then((data) => data.json())
    .then((response)=>console.log(response))
    
    
    
    
    // Promise.all([res,res2])
    
}