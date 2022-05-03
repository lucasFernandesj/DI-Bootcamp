
function calculate(){
   let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log(date)

let nextHoliday = '2022-5-5'
// console.log(nextHoliday)
let todayArr = date.split('-')
let holidayArr = nextHoliday.split('-')
let todayYear = Number(todayArr[0])
let todayMonth = Number(todayArr[1])
let todayDay =  Number(todayArr[2])

let nextHolidayArr = nextHoliday.split('-')
let nextHolidayYear = Number(nextHolidayArr[0])
let nextHolidayMonth = Number(nextHolidayArr[1])
let nextHolidayDay =  Number(nextHolidayArr[2])

str = `next Independence Day is in ${nextHolidayYear-todayYear} years , ${nextHolidayMonth-todayMonth} months and ${nextHolidayDay-todayDay} days`
return str 
}



module.exports=calculate

