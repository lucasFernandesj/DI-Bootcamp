


function playTheGame(){
    if(confirm('Do you wanna play?')===true){
        let x = true
        while(x){
            var num = + prompt('enter a number in between 0 and 10')
            if(isNaN(num) === false && num > 0 && num < 10){
               
                x=false
                
            }
            
        }
        var computerNum = randomNum(0,10)
        
        let res =[] 
        res.push(num , computerNum)
       return res
       

    }else{
        alert('No problem, Goodbye')
    }

}


 function test(){
    
    let res = playTheGame()

    if(res[0] === res[1]){
        alert('You Won!')
        
    }else{
        
        alert('Guess again')
        for(var i = 0 ; i < 2 ; i++){
            userNum = +prompt('Enter a number in between 0 and 10')
            if (userNum === res[1]) {
              alert('You Won!')
              break;
            }

        }

        alert('Out of tries...')
    }


 }
 






function randomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}