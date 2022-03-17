'use strict'

const toggle = () => {
  let menu = document.querySelector('.menu-content')
  menu.classList.toggle('hidden')
}


let header = document.querySelector('.header')
let headerMobile = document.querySelector('.headerMobile')
window.onresize = function (event) {
  console.log('x: ' + window.innerWidth + '      y: ' + window.innerHeight)
  if (window.innerWidth < 768) {
  
    header.style.display = 'none';
    headerMobile.style.display ='block';
  } if (window.innerWidth > 768) {
    header.style.display = 'block'
    headerMobile.style.display = 'none'
  }
}
