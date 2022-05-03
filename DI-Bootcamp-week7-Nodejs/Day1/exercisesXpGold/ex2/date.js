

function calculate(){
   let birthday ='1992-12-29'
let bDay = 29
let bMonth = 12
let bYear = 1992
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date)


let arr = date.split('-')
let year = Number(arr[0])
let month = Number(arr[1])
let day =  Number(arr[2])
let minutesLived = ((year-bYear)*525600) +((bMonth - month)*43800)+((bDay-day)*1440)
return `you lived ${minutesLived} minutes` 
}

module.exports = calculate



