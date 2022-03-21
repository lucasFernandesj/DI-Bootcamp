let menu = [
  {
    type: 'starter',
    name: 'Houmous with Pita',
  },
  {
    type: 'starter',
    name: 'Vegetable Soup with Houmous peas',
  },
  {
    type: 'dessert',
    name: 'Chocolate Cake',
  },
]
// //1
// menu.filter(food => food.type === 'dessert').length > 0 ? console.log('There is at least one dessert') : console.log('no desserts')
// //2
// menu.filter((food) => food.type === 'starter').length ===menu.length
//   ? console.log('All of the foods are starters')
//   : console.log('Not all of the foods are starters') 

// //3
// menu.filter((food) => food.type === 'Main course').length > 0
//   ? console.log('There is at least one Main course')
//   : menu.push({
//       type:'Main course',
//       name: 'Pizza'
//   })


  let vegetarian = ['vegetable', 'houmous', 'eggs', 'vanilla', 'potatoes']
debugger
  menu.forEach((food ,index)=>{
      var current = food.name 
      var currentArr = current.split(' ')
        for(var i = 0 ; i < currentArr.length ; i++){
            currentArr[i] = currentArr[i].toLowerCase()
        }
    //   console.log(currentArr)
        var seen=[]
        for(var i = 0 ; i < currentArr.length ; i++){
            if(vegetarian.indexOf(currentArr[i]) > -1){
                seen.push(currentArr[i])
            }
        }
        (seen.length >=1 ) ?  menu[index].isVegetarian = true : menu[index].isVegetarian = false
           
        
            
        
  })

console.log(menu)