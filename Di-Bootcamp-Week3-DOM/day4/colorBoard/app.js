let board; // assigned on populate html
let colors; //assigned on populate html
let colorsArr; // assigned on populateColors
let colorsCount; // assigned in populateHtml
let colorsDivArr =[] //assigned in populateColors
let cells = [] // assigned on renderBoard
let actualColor; // assigned in arrOnClick
let x = false
window.addEventListener('load', (event) => {
    populateHTML() // creates the divs
    renderBoard() // creates the board with the squares
    populateColors() //creates the different divs with colors
    arrOnClick() // add event listener to each color
    // squareOnClick() // add event listener to squares
})




const populateHTML = ()=>{
    let wrappDiv = document.createElement('div')
    wrappDiv.setAttribute('class' , 'wrapp-div')
    document.body.appendChild(wrappDiv)
    
    let colors = document.createElement('div')
    colors.setAttribute('class', 'colors')
    wrappDiv.appendChild(colors) 
    populateColors()
     colorsCount = 1
    
    
    let board = document.createElement('div') 
    board.setAttribute('class' , 'board') 
    
    wrappDiv.appendChild(board) 
}

const renderBoard = () =>{
    let board = document.querySelector('.board')
    
    board.classList.add('table')
    for(var i = 0 ; i < 2808 ; i++){
        let cell = document.createElement('div') 
        cell.classList.add('cell')
        board.appendChild(cell)
        cells.push(cell)

        cell.addEventListener('mousedown' , ()=>{
            x = true
            console.log(x)
            
        })

                cell.addEventListener('mouseover' , ()=>{
                    console.log('mouse over')
                    if(x===true){
                        console.log('entered if')
                        cell.style.background = actualColor
                    }

                })

                cell.addEventListener('mouseup' , ()=>{
                    x=false
                })
            
            
       
    }

}

const populateColors = () =>{
    if(colorsCount === 1){
        return
    }
     colorsArr = ['Red','Blue','Green','Orange','Purple','Black']
    for(var i = 0 ; i < colorsArr.length ; i++){
       let colorDiv =  document.createElement('div')
       colorDiv.innerText = colorsArr[i]
       let colorToLowerCase = colorsArr[i].toLowerCase()
       colorDiv.classList.add('colorDiv' , colorToLowerCase)
       colorDiv.style.backgroundColor = colorToLowerCase
        colorsDivArr.push(colorDiv)
       let colors = document.querySelector('.colors')
       colors.appendChild(colorDiv)

    }
}


// console.log(colorsDivArr)
const arrOnClick =() =>{
    colorsDivArr.forEach((element)=>{
        element.addEventListener('click' , ()=>{
             actualColor = element.innerText.toLowerCase()  //NOT DONE YET!!!!
            // console.log(actualColor)
            return actualColor
        })
    })
}




