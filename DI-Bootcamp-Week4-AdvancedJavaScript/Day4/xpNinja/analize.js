class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
  const pet = new Flamingo();


  //Flaming takes everything from the bird class and adds to it 
  //that it is pink , its gonna console log both console logs fro both classes