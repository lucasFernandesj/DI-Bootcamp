let client = 'John'

let groceries = {
  fruits: ['pear', 'apple', 'banana'],
  vegetables: ['tomatoes', 'cucumber', 'salad'],
  totalPrice: '20$',
  other: {
    payed: true,
    meansOfPayment: ['cash', 'creditCard'],
  },
}

const displayGroceries = ()=>{
    groceries.forEach((element , index)=>console.log(element.fruits[index]))
}

let user = client

let cloneGroceries = () =>{
    client = 'Betty'
    let shopping = {...groceries}
    groceries.totalPrice = 35
    console.log(shopping.totalPrice)
    groceries.other.payed = false
}

//No because a cloned object is a completely different object living in another adress and if I change the original one , the clone remains

cloneGroceries()