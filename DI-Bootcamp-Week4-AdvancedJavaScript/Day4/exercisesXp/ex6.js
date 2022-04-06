//1 both are false 

// //2
// const object1 = { number: 5 }   //5
// const object2 = object1        //4
// const object3 = object2        //4
// const object4 = { number: 5 }  //5
// object1.number = 4    

//3
class Animal {
    constructor(name, type , color){
        this.name = name,
        this.type = type,
        this.color = color
    }
    
}


class Mamal extends Animal {
  constructor(name, type, color,sound) { 
    super(name, type, color)
    this.sound = sound
  }

  say() {
    console.log(`${this.sound}ing: My name is ${this.name},\n  My type is ${this.type}\nAnd My color is  ${this.color}`) 
    
  }
}


let cow = new Mamal('Britney','dutch','black and white' , 'moo')
let cat = new Mamal('Trevor' , 'siamese' , 'white' , 'meow' )

cat.say()