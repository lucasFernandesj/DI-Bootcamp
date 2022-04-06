class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 1 THIS WORKS
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
//   // 2 doesnt work
// class Labrador extends Dog {
//       constructor(name, size) {
//             super(name);
//             this.size = size;
//           }
//         };
        


  // 3  this doesnt
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


  // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };
