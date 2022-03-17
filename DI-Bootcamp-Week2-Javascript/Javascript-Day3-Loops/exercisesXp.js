let people = ["Greg", "Mary", "Devon", "James"]
//1 2
for(var i = 0 ; i < people.length ; i++){
    if(people[i] === "Greg"){
        people.splice(i ,1)
    }
    if(people[i]==="james"){
        people.splice(i , 1 , "Jason")
    }
}
//3
people.push('Lucas')
//4
console.log(people.indexOf("mary"))
//5
var newArr=[];
for(var i = 0 ; i < people.length ; i++){
    if(people[i] !== "Mary" || people[i] !== "Lucas" ){
        var toBeAdded = people.splice(i ,1)
        newArr.push(toBeAdded)
    }
}
//6
console.log(people.indexOf("foo"))
//7
var last = people[-1] 


//PART II
//1
for(var i = 0 ; i < people.length ; i++){
    console.log(people[i])
}
//2
for(var i = 0 ; i < people.length ; i++){
    console.log(people[i])
    if(people[i] === 'Jason'){
        break;
    }
}
//Exercise 2
let colors =['blue' , 'green']
let sufix = ['1st' , '2nd']
for(var i = 0 ; i < colors.length ; i++){
    console.log(`My ${sufix[i]} choice is ${colors[i]}`)
}

//Exercise 3
var num = + prompt('Enter a number')
while(num < 10 ){
    var num = + prompt('Enter a number')
}

//Exercise 4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
//2
console.log(building.numberOfFloors)
//3
console.log(` number of appartments on floor 1:${building.numberOfAptByFloor.firstFloor} \n Number of Appartments on third floor : ${building.numberOfAptByFloor.thirdFloor}`)
//4
console.log(`Second teanat's name:${building.nameOfTenants[1]} he has ${building.numberOfRoomsAndRent.dan[0]} rooms at his appartment`)
//5
if(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200
}

//EXERCISE 5
let family={
    dad:'Walter',
    mom:'Rosangela',
    brother:'Victor'
}
for(let member in family){
    console.log(`${member} : ${family[member]}`)
}
//EX 6
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
for(let key in value){
    console.log(`${key} ${value[details]}`)
}
//EX 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let initials = [];
for(var i = 0 ; i < names.length ; i++){
    var initial = names[i].charAt(0)
    initials.push(initial)
}
var secretName = initials.sort().join('')
console.log(secretName)



