const gameInfo = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen'],
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen'],
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen'],
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen'],
  },
]

//1
let names =[]
gameInfo.forEach(element=>{
    names.push(`${element.username}!`)
})
console.log(names)

//2
gameInfo.forEach((element) => {
  (element.score>5)?names.push(element.username) : null
})
console.log(names)

//3
let scoreSumArr =[]
gameInfo.forEach((element) => {
    scoreSumArr.push(element.score)
})
console.log(scoreSumArr)
let sumScore = scoreSumArr.reduce(
    (prev , curr)=> prev + curr
)
console.log(sumScore)