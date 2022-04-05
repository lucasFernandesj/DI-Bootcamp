const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function () {
    try{
        const response = await fetch(urls[0])
        const data = await response.json()
         console.log(data[0].name)

    }catch(error){
        console.log(error)
    }
  

  //   console.log('users', users)
  //   console.log('posta', posts)
  //   console.log('albums', albums)
}
getData()
