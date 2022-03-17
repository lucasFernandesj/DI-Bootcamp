//EX1
let person1={
    FullName:'Noam Mizrahi',
    Mass: 80,
    Height: 1.80,
    BMI:getBMI(person1)
}
let person2={
    FullName:'Santiago Sierra',
    Mass: 90,
    Height: 1.90,
    BMI:getBMI(person2)
}


function getBMI(person){
    return (person.Mass/(person.Height*2) )
}
let people =[ person1, person2]
compare()
function compare(){
    var max = -Infinity
    for (var i = 0 ; i <people.length ; i++){
        if(people[i].BMI >max){
            max = people[i]
        }
    }
    return max
}

console.log(`Person with largest BMI is ${max}`)


//EX2 Grade Average
let gradesList =[80,80,90]
function findAvg(arr){
    let sum = arr.reduce((curr,next)=>curr+next)
    let numGrades = gradesList.length
    let avg = sum / numGrades 
    return avg

}
var gradesAvg=findAvg(gradesList)
console.log(gradesAvg)
if(gradesAvg > 65){
    console.log('Passed')
}else{
    console.log('Failed')
}