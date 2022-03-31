const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4',
]

// urls.map((element)=>{
// fetch(element)
// .then(res =>{
//     return res.json()
// })
// .then(data=>{
//     console.log(data.name)
// })

// })

// async function fetchAll() {
//   const results = await Promise.all(
//     urls.map((url) => fetch(url).then((r) => r.json()).then(r=>r.name))
//   )
//   console.log(JSON.stringify(results, null, 2))
// }

// fetchAll()


// Promise.all(
//   urls.map((element)=>{
//   fetch(element)
//   .then(res =>{
//       return res.json()
//   })
//   .then(data=>{
//       console.log(data.name)
//   })

//   })
//   )

 Promise.all(urls.map(urls=>{
  return fetch(urls).then(response =>response.json())
 })).then(data=>data.forEach((value)=>{
   console.log(value.name)
 }))