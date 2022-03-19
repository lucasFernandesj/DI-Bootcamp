// var left = animate.style.margin

// var animate = document.querySelector('#animate')
// var margin = animate.style.margin
var div = document.querySelector('#animate')
var left = 0

function myMove(){
    div.style.left = `${left}px`
    
    left = left + 15
    div.style.left = left
    
   
}   