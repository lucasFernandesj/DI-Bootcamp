let planets = ['mercury','venus','earth','mars','jupiter','sapturn','uranus','neptune','pluto'] 

planets.forEach((element)=>{
    createPlanet(element)
})

function createPlanet(element){
    let newDiv = document.createElement('div')
    newDiv.classList.add('planet' , element)
    newDiv.style.backgroundColor = getColor()
        document.querySelector('.listPlanets').appendChild(newDiv)  
        
    }
    
    
    function getColor(){
        let str = '#' + Math.floor(Math.random() * 16777215).toString(16)
        return str
    }