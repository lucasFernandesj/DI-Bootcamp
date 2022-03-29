let productsList = []

function add() {
  let toBeAdded = document.querySelector('.input-add').value
  if(toBeAdded.trim()===''){
      return
  }
  let ulList = document.querySelector('.ulList')
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(toBeAdded))

  li.setAttribute('onclick', 'remove(this)')
  ulList.appendChild(li)
  productsList.push(toBeAdded)
  console.log(productsList)
}

function remove(elem) {
  elem.parentNode.removeChild(elem)
  for (var i = 0; i < productsList.length; i++) {
    if (productsList[i] === elem.innerText) {
      productsList.splice(i, 1)
      console.log(productsList)
    }
  }
}
