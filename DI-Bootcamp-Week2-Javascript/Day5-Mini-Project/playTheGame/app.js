


// function playTheGame(){
//     if(confirm('Do you wanna play?')===true){
//         let x = true
//         alert('Try to guess what number the computer chose, you have 3 tries')
//         while(x){
//             var num = + prompt('enter a number in between 0 and 10')
//             if(isNaN(num) === false && num > 0 && num < 10){
//                 x=false  
//             }
            
//         }
//         var computerNum = randomNum(0,10)
//         console.log(computerNum)
//         let res =[] 
//         res.push(num , computerNum)
//        return res
       

//     }else{
//         alert('No problem, Goodbye')
//     }

// }


//  function test(){
    
//      let res = playTheGame()
     

//         for(var i = 0 ; i < 3 ; i++){
//             userNum = +prompt('Enter a number in between 0 and 10')
//             if (userNum === res[1]) {
//               alert('You Won!')
//               break;
//             }else{
//                 alert('try again')
//             }

//         }

//         alert('Out of tries...')
//     }


 function test(){
     if(confirm('Do you wanna play?')===true){
        playTheGame()
     }else{
         alert('ok goodbye')
     }
 }
 
function playTheGame(){
    let computerNum = randomNum(0, 10)
    console.log(computerNum)
    alert('Try to guess what number the computer chose , you have 3 tries')
    for(var i = 1 ; i < 4 ; i++){
        let num = +prompt('enter a number in between 0 and 10')
        if(i===3 && num!==computerNum){
             alert(`Try #${i} wrong...game over!`)
        }else if(isNaN(num)||num<0||num>10||num!==computerNum){
            alert(`Try #${i} wrong...try again!`)
        }else if(num===computerNum){
            alert('You won!')
            break;
        }
    }
}





function randomNum(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) 
}