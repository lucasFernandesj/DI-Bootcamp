//EX1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"]
//1
for(var i = 0 ; i < fruits.length ; i++){
    if(fruits[i]==="Banana"){
        fruits.splice(i,1)
    }
}
//2
fruits.sort()
//3
fruits.push("Kiwi")
//4
fruits.forEach(function callback(value, index) {
    if(value ==="Apples"){
        fruits.splice(index,1)
    }
});
//5
var reversed=[]
for(var i = fruits.length-1 ; i =0 ; i--){
    reversed.push(fruits[i])
}


//EXERCISE 2
let moreFruits = ["Banana", 
["Apples", ["Oranges"],"Blueberries"]
];
console.log(moreFruits[1][1])
