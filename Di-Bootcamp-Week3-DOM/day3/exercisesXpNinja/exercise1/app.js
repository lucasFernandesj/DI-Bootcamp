var count = 0;
var row = 1
var left = 7;
var mTop = -92;
var color;
function add(){
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class' , 'square')
    color = generateRandomColor()
    newDiv.style.backgroundColor =  color
    newDiv.style.left = left + 100 + 'px'
    newDiv.style.top = mTop + 100*row + 'px'
    left = left + 100
    count++
    if(count === 10){
        left = 7
        count = 0
        row++
    }
    document.body.appendChild(newDiv)
}


function generateRandomColor(){
let maxVal = 0xFFFFFF; 
let randomNumber = Math. random() * maxVal;
randomNumber = Math. floor(randomNumber);
randomNumber = randomNumber. toString(16);
let randColor = randomNumber. padStart(6, 0);
return `#${randColor. toUpperCase()}`
}