const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image: 'https://robohash.org/9?200x200',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image: 'https://robohash.org/10?200x200',
  },
]



  document.body.onload = () => {
    robots.forEach((element) => {
        render(element)
    })
  }





document.querySelector('#text').addEventListener('change', () => {
    document.querySelector('.container').innerHTML = ''
  let value = document.querySelector('#text').value
  let filtered = robots.filter((element)=>element.name.includes(value)).forEach((element)=>{
      render(element)
  })
 

})


const render = (el) =>{
     let robotDiv = document.createElement('div')
     robotDiv.setAttribute('class', 'robotDiv')
     let robotImg = document.createElement('img')
     robotImg.setAttribute('src', el.image)
     robotImg.setAttribute('class', 'robotImg')
     let robotH1 = document.createElement('h1')
     robotH1.innerText = el.name
     let robotP = document.createElement('p')
     robotP.innerText = el.username

     robotDiv.append(robotImg, robotH1, robotP)
     document.querySelector('.container').appendChild(robotDiv)
}