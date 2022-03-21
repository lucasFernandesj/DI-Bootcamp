function makeJuice(size){
     addIngredients('dates' , 'mango' , 'milk')
    document.write(
      `The customer wants a ${size} juice containing ${
        addIngredients('dates', 'mango', 'milk')[0]
      } ,${addIngredients('dates', 'mango', 'milk')[1]} , ${
        addIngredients('dates', 'mango', 'milk')[2]
      }  `
    )

}
makeJuice('medium')

function addIngredients(ingredient1 , ingredient2 , ingredient3){
    let str = [ingredient1 , ingredient2 , ingredient3]
    return str
}


//Part II 
function makeJuice(){
    
    addIngredients(date , mago , milk)
    displayIngredients(addIngredients(date, mago, milk))


}

function addIngredients(ingredient1, ingredient2, ingredient3) {
    var ingredients = []
    ingredients.push(ingredient1, ingredient2, ingredient3)
    return ingredients
}

function displayJuice(array){
    var str =`The client wants a ${size} containing `
    array.forEach(element => {
        str+=element
    });
    return str
}