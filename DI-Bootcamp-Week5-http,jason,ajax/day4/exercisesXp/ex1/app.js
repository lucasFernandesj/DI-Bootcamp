const ex1 = async () =>{
    const response = await fetch('https://swapi.dev/api/starships/9/')
    const data = await response.json()
    return data
}

ex1()
.then((data)=>console.log(data))
.catch((error)=>console.log(error + 'CATCHED'))